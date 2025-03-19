from flask import Flask
from flask_cors import CORS
from api.signup import signup_bp  # Import the signup blueprint
from api.login import login_bp  # Import the login blueprint
from api.forgot_password import forgot_password_bp  # Import the forgot_password blueprint

app = Flask(__name__)
CORS(app)  # Enable CORS

# Register Blueprints
app.register_blueprint(signup_bp, url_prefix="/api")  # All signup routes start with /api/
app.register_blueprint(login_bp, url_prefix="/api")  # All login routes start with /api/
app.register_blueprint(forgot_password_bp, url_prefix="/api")  # All forgot_password routes start with /api/

if __name__ == "__main__":
    app.run(debug=True)
