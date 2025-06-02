"""
Client Test Script for Firebase-Protected Data Sentinel API
- Sends a request with a Firebase ID token in the Authorization header
- Tests the /validate and /health endpoints
"""

import requests

# Replace this with a valid Firebase ID token (from your React Native app or Firebase Admin SDK)
FIREBASE_ID_TOKEN = "YOUR_FIREBASE_ID_TOKEN"

# Base URL of your running Flask API
BASE_URL = "http://127.0.0.1:5000"

# Headers with Firebase token for authentication
headers = {
    "Authorization": f"Bearer {FIREBASE_ID_TOKEN}"
}

# Data to send for validation (customize as needed)
test_data = {
    "action": "login",
    "device": "Android",
    "location": "Cape Town"
}

# Test the /validate endpoint
print("Sending request to /validate...")
validate_response = requests.post(f"{BASE_URL}/validate", json=test_data, headers=headers)
print("Status Code:", validate_response.status_code)
print("Response:", validate_response.json())

# Test the /health endpoint (no auth required)
print("\nChecking API health...")
health_response = requests.get(f"{BASE_URL}/health")
print("Health Response:", health_response.json())
