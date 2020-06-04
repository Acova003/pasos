"""Backend Flask Server for Pasos app."""

from flask import (Flask, session, request)
from model import connect_to_db
import crud

app = Flask(__name__)

with app.app_context():
    db.create_all()


@app.route('/')
def create_profile():
    """View login component"""
    return ""


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
