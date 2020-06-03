"""Backend Flask Server for Pasos app."""

from flask import (Flask, session, request)

app = Flask(__name__)


# @app.route('/login')
# def login():
#     """View login component"""
#     return ""


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
