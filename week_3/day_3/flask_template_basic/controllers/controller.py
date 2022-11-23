from app import app
from flask import render_template
from models.to_do_list import tasks

@app.route('/')
def index():
    return "Hello world"

@app.route('/tasks')
def show_tasks():
    return render_template('index.html', title="Home", tasks=tasks)
