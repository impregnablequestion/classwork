from flask import render_template, Blueprint, redirect, request
from repositories import task_repository, user_repository
from models.task import Task

task_blueprint = Blueprint("tasks", __name__)

# INDEX — GET '/tasks'

@task_blueprint.route("/tasks")
def tasks():
    all_tasks = task_repository.select_all()
    return render_template("tasks/index.html", all_tasks_key=all_tasks)

# DISPLAY (CREATE TASK) — GET '/tasks/new'

@task_blueprint.route('/tasks/new')
def new_task():
    all_users = user_repository.select_all()
    return render_template("tasks/new.html", users=all_users)

# CREATE (CREATE TASK) – POST '/tasks/'

@task_blueprint.route('/tasks/', methods=["POST"])
def submit_new_task():
    result = request.form
    description = result['description']
    duration = result['duration']
    completed = result['completed']
    user_id = result['user_id']

    user = user_repository.select(user_id)
    new_task = Task(description, user, duration, completed)
    task_repository.save(new_task)
    return redirect("/tasks")

# SHOW — GET '/tasks/<id>

@task_blueprint.route('/tasks/<task_id>')
def get_task(task_id):
    selected_task = task_repository.select(task_id)
    return render_template("tasks/show.html", task=selected_task)

# DISPLAY(EDIT) – GET '/tasks/<id>/edit

@task_blueprint.route('/tasks/<task_id>/edit')
def edit_task(task_id):
    selected_task = task_repository.select(task_id)
    all_users = user_repository.select_all()
    return render_template("tasks/edit.html", task=selected_task, users=all_users)

# EDIT/UPDATE — PUT '/tasks/<id>'

@task_blueprint.route('/tasks/<task_id>', methods=['POST'])
def confirm_edit(task_id):
    result = request.form

    description = result["description"]
    user_id = result["user_id"]
    user = user_repository.select(user_id)
    duration = result["duration"]
    completed = result["completed"]

    updated_task = Task(description, user, duration, completed, task_id)
    task_repository.update(updated_task)
    return redirect("/tasks")
    
# DELETE — DELETE '/tasks/<id>/delete

@task_blueprint.route('/tasks/<task_id>/delete', methods = ["POST"])
def delete_task(task_id):
    task_repository.delete(task_id)
    return redirect("/tasks")