from app import app
from flask import render_template

@app.route('/')
def index():
    return "Hello world"

@app.route('/tasks')
def show_tasks():
    return render_template('index.html', title="Home")
