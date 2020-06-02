"""Backend Flask Server for Pasos app."""

from flask import (Flask, session, request)

app = Flask(__name__)


@app.route('/')
def homepage():
    """View homepage"""
    return ""




if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
