from __future__ import annotations
import os
from dotenv import load_dotenv

from livekit import agents
from livekit.agents import (
    AgentSession,
    Agent,
    JobContext,
    WorkerOptions,
    cli,
)
from livekit.plugins import openai
from api import AssistantFnc
from prompts import WELCOME_MESSAGE, INSTRUCTIONS

load_dotenv(override=True)

async def entrypoint(ctx: JobContext):
    await ctx.connect()
    await ctx.wait_for_participant()

    assistant_fnc = AssistantFnc()

    session = AgentSession(
        llm=openai.realtime.RealtimeModel(
            model="gpt-realtime",
            voice="shimmer",
        )
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

    await session.generate_reply(
        instructions=WELCOME_MESSAGE
    )

if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))