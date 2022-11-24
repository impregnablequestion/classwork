from flask import render_template, redirect, request
from app import app
from models.event_list import event_list, get_event, add_event, delete_event
from models.event import Event
from datetime import date
from datetime import datetime

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/events/')
def events():
    return render_template('events.html', events = event_list)

@app.route('/events/<int:index>')
def event(index):
    event_id = get_event(index)
    return render_template('event.html', event = event_id)

@app.route('/events/add_event/')
def new_event():
    return render_template('eventplanner.html')

@app.route('/events/', methods=['POST'])
def submit_new_event():
    form_data = request.form
    uf_date = form_data["event_date"]
    event_date = datetime.strptime(uf_date, "%Y-%m-%d")
    event_name = form_data["event_name"]
    event_number_of_guests = int(form_data["event_number_of_guests"])
    event_location = form_data["event_location"]
    event_description = form_data["event_description"]
    event_recurring = True if "recurring" in request.form else False
    
    new_event = Event(
        event_date, event_name, event_number_of_guests,
        event_location, event_description, event_recurring)
    add_event(new_event)
    return redirect('/events/')

@app.route('/events/delete/<name>')
def remove_event(name):
    delete_event(name)
    return redirect('/events/')
