from flask import Blueprint, request, jsonify
from firebase_config import firebase_auth, db

signup_bp = Blueprint("signup", __name__)  # Define the blueprint

@signup_bp.route("/signup", methods=["POST"])
def signup():
    try:
        data = request.json
        email = data.get("email")
        password = data.get("password")
        first_name = data.get("firstName")
        last_name = data.get("lastName")
        user_name = data.get("username")

        # Check if username already exists in Firestore
        existing_user = db.collection("users").document(user_name).get()
        if existing_user.exists:
            return jsonify({"error": "Username is already taken"}), 400

        # Create user in Firebase Authentication
        user = firebase_auth.create_user(
            email=email,
            password=password,
            display_name=user_name
        )

        # Store user details in Firestore
        user_data = {
            "firstName": first_name,
            "lastName": last_name,
            "email": email,
            "username": user_name
        }
        db.collection("users").document(user_name).set(user_data)

        return jsonify({"message": "User created successfully", "uid": user.uid}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500
