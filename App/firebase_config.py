import os
import firebase_admin
from firebase_admin import credentials, firestore, auth
from dotenv import load_dotenv
import pyrebase

# Load environment variables
load_dotenv()

# Initialize Firebase Admin SDK (for Firestore management)
service_account_path = os.getenv("FIREBASE_CREDENTIALS")
cred = credentials.Certificate(service_account_path)
firebase_admin.initialize_app(cred)

# Initialize Firestore
db = firestore.client()

# Initialize Pyrebase (for user authentication)
firebase_config = {
    "apiKey": os.getenv("FIREBASE_API_KEY"),
    "authDomain": os.getenv("FIREBASE_AUTH_DOMAIN"),
    "databaseURL": os.getenv("FIREBASE_DATABASE_URL"),
    "projectId": os.getenv("FIREBASE_PROJECT_ID"),
    "storageBucket": os.getenv("FIREBASE_STORAGE_BUCKET"),
    "messagingSenderId": os.getenv("FIREBASE_MESSAGING_SENDER_ID"),
    "appId": os.getenv("FIREBASE_APP_ID"),
    "measurementId": os.getenv("FIREBASE_MEASUREMENT_ID")
}

firebase = pyrebase.initialize_app(firebase_config)
firebase_auth = firebase.auth()

print("Firestore and Firebase Authentication initialized successfully!")
