from __future__ import annotations

import logging
import os
import math

from dotenv import load_dotenv
from openai.types.beta.realtime.session import TurnDetection

from livekit.agents import (
    Agent,
    AgentSession,
    JobContext,
    JobExecutorType,
    WorkerOptions,
    cli,
)
from livekit.plugins import openai

from api import AssistantFnc
from prompts import INSTRUCTIONS, WELCOME_MESSAGE

load_dotenv(override=True)

logger = logging.getLogger("ria-agent")
logger.setLevel(logging.INFO)


async def entrypoint(ctx: JobContext):
    logger.info("Connecting to room: %s", ctx.room.name)

    await ctx.connect()

    participant = await ctx.wait_for_participant()

    logger.info(
        "Participant joined: %s",
        participant.identity,
    )

    assistant_fnc = AssistantFnc()

    realtime_model = openai.realtime.RealtimeModel(
        model=os.getenv(
            "OPENAI_REALTIME_MODEL",
            "gpt-realtime",
        ),
        voice=os.getenv(
            "OPENAI_REALTIME_VOICE",
            "coral",
        ),
        modalities=["text", "audio"],
        input_audio_transcription={
            "model": "whisper-1",
            "prompt": "RIA AI voice assistant, Roxi, customer support, sales, booking, free trial, demo, pricing, Telugu, Hindi, English.",
        },
        input_audio_noise_reduction="near_field",
        turn_detection=TurnDetection(
            type="server_vad",
            # Voice activity sensitivity
            threshold=0.5,
            # Keep a small amount of audio before detected speech
            prefix_padding_ms=350,
            # How long the user must stop before RIA responds
            silence_duration_ms=650,
            # Automatically create response after user finishes
            create_response=True,
            # Allow user to interrupt RIA
            interrupt_response=True,
        ),
    )

    session = AgentSession(
        llm=realtime_model,
    )

    agent = Agent(
        instructions=INSTRUCTIONS,
        tools=[
            assistant_fnc.get_plan_and_trial_info,
            assistant_fnc.get_product_features,
            assistant_fnc.record_demo_interest,
        ],
    )

    await session.start(
        room=ctx.room,
        agent=agent,
    )

    # Initial greeting
    await session.generate_reply(
        instructions=WELCOME_MESSAGE
    )

    logger.info(
        "RIA voice session started for %s",
        participant.identity,
    )


if __name__ == "__main__":
    cli.run_app(
        WorkerOptions(
            entrypoint_fnc=entrypoint,
            job_executor_type=JobExecutorType.THREAD,
            num_idle_processes=0,
            load_threshold=math.inf,
            load_fnc=lambda *args: 0.0,
        )
    )