"""Backend Flask Server for Pasos app."""

import time
from flask import (Flask, request, flash, session, redirect)
from model import db, connect_to_db
# from flask_oauth import OAuth
import crud

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    print('test')
    return {'time': time.time()}


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
