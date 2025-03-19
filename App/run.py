from app import app  # Imports the Flask app instance from your app module
import os

if __name__ == "__main__":
    # Use environment variables or defaults for flexibility
    host = os.getenv("FLASK_RUN_HOST", "0.0.0.0")
    port = int(os.getenv("FLASK_RUN_PORT", 5000))

    # Enable debug mode for development; disable in production
    debug = os.getenv("FLASK_DEBUG", "True").lower() == "true"

    app.run(host=host, port=port, debug=debug)
