import os
import uuid
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from livekit import api

load_dotenv()

app = Flask(__name__)

frontend_origin = os.getenv("FRONTEND_ORIGIN", "*")

CORS(
    app,
    resources={
        r"/*": {
            "origins": frontend_origin,
        }
    },
    methods=["GET", "OPTIONS"],
)


def create_room_name() -> str:
    return f"ria-{uuid.uuid4().hex[:12]}"


def create_token(identity: str, room: str) -> str:
    api_key = os.getenv("LIVEKIT_API_KEY")
    api_secret = os.getenv("LIVEKIT_API_SECRET")

    if not api_key:
        raise RuntimeError("LIVEKIT_API_KEY is missing")

    if not api_secret:
        raise RuntimeError("LIVEKIT_API_SECRET is missing")

    token = (
        api.AccessToken(api_key, api_secret)
        .with_identity(identity)
        .with_name(identity)
        .with_grants(
            api.VideoGrants(
                room_join=True,
                room=room,
                can_publish=True,
                can_subscribe=True,
            )
        )
    )

    return token.to_jwt()


@app.route("/")
@app.route("/health")
def health():
    return jsonify({"status": "ok", "service": "ria-token-server"}), 200


@app.route("/getToken")
def get_token():
    name = request.args.get("name", "").strip()
    requested_room = request.args.get("room", "").strip()

    if not name:
        return jsonify({"error": "name is required"}), 400

    if len(name) > 100:
        return jsonify({"error": "name is too long"}), 400

    room = requested_room if requested_room else create_room_name()

    try:
        token = create_token(identity=name, room=room)
        return token, 200, {"Content-Type": "text/plain"}
    except Exception as exc:
        app.logger.exception("Token generation failed")
        return jsonify({"error": str(exc)}), 500


if __name__ == "__main__":
    port = int(os.getenv("PORT", "5001"))
    app.run(host="0.0.0.0", port=port, debug=False)