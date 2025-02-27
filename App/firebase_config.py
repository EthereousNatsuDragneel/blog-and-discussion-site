import os
import firebase_admin
from firebase_admin import credentials, firestore, auth
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Path to your Firebase service account JSON file
service_account_path = os.getenv("FIREBASE_CREDENTIALS")

# Initialize Firebase Admin SDK with credentials
cred = credentials.Certificate(service_account_path)
firebase_admin.initialize_app(cred)

# Initialize Firestore
db = firestore.client()

# Initialize Firebase Authentication
firebase_auth = auth

print("Firestore and Firebase Authentication initialized successfully!")
