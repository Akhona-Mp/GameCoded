"""
Data Sentinel API with Firebase Integration
This version verifies user identity using Firebase ID tokens.
Useful for integration with React Native apps using Firebase Authentication.
"""

from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, auth
import os
import random

# Step 1: Create a Flask web application
app = Flask(__name__)

# Step 2: Set up Firebase Admin SDK
# The app looks for your Firebase service account JSON key file.
# You can either set the environment variable or place the file as 'firebase_credentials.json' in the project.
cred_path = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS", "firebase_credentials.json")
cred = credentials.Certificate(cred_path)
firebase_admin.initialize_app(cred)

# Step 3: Define a helper function to verify the Firebase token
def verify_firebase_token(token):
    """
    Verifies the Firebase ID token received from the mobile app.
    Returns user info if the token is valid, otherwise returns None.
    """
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token
    except Exception as e:
        return None

# Step 4: Simulate AI-based request validation
def is_request_suspicious(request_data):
    """
    This is a placeholder for real AI logic.
    Right now, it randomly decides if a request is suspicious or not.
    Replace this with a real machine learning model in production.
    """
    return random.choice([True, False])

# Step 5: Define the /validate route to protect API access
@app.route("/validate", methods=["POST"])
def validate_client_call():
    """
    This route checks the authenticity of the request.
    - It expects a Firebase ID token in the Authorization header.
    - It checks if the request is safe using our AI placeholder.
    - Returns 'allowed' or 'blocked' with reasons.
    """
    # Get the Authorization header
    auth_header = request.headers.get("Authorization")
    if not auth_header:
        return jsonify({"error": "Missing Authorization header"}), 401

    # Remove the "Bearer " prefix to extract the actual token
    token = auth_header.replace("Bearer ", "")
    user = verify_firebase_token(token)

    # If token is invalid or expired, deny access
    if not user:
        return jsonify({"error": "Invalid or expired token"}), 401

    # Get the client data sent in the POST request
    data = request.json

    # Use AI (placeholder) to check if it's suspicious
    if is_request_suspicious(data):
        return jsonify({"status": "blocked", "reason": "Suspicious request detected"}), 403

    # If the request is okay, return success
    return jsonify({
        "status": "allowed",
        "user": user["uid"],
        "reason": "Request is safe"
    })

# Step 6: Add a health check route
@app.route("/health", methods=["GET"])
def health_check():
    """
    A simple route to check if the API is up and running.
    Useful for debugging and app connectivity testing.
    """
    return jsonify({"status": "running"})

# Step 7: Start the Flask server
if __name__ == "__main__":
    app.run(debug=True)
