from flask import Blueprint, request, jsonify
from firebase_config import firebase_auth

login_bp = Blueprint("login", __name__)  # Define the blueprint

@login_bp.route("/login", methods=["POST"])
def login():
    try:
        data = request.json
        email = data.get("email")
        password = data.get("password")

        # Correct Firebase Login Method with Pyrebase
        user = firebase_auth.sign_in_with_email_and_password(email, password)

        return jsonify({
            "message": "Login successful",
            "uid": user['localId'],
            "idToken": user['idToken'],
            "email": email
        }), 200

    except Exception as e:
        print(f"Login Error: {e}")
        return jsonify({"error": str(e)}), 500
