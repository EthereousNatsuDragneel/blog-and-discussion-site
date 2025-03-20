from flask import Blueprint, request, jsonify
from firebase_config import firebase_auth

forgot_password_bp = Blueprint("forgot_password", __name__)  # Define the blueprint

@forgot_password_bp.route("/forgot-password", methods=["POST"])
def forgot_password():
    try:
        data = request.json
        email = data.get("email")

        if not email:
            return jsonify({"error": "Email is required"}), 400

        # Send password reset email
        firebase_auth.send_password_reset_email(email)

        return jsonify({"message": "If an account with that email exists, a reset link has been sent."}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
