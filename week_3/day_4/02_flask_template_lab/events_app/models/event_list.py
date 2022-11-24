from models.event import Event
from datetime import date


event1 = Event(date(2022, 11, 28), "Events Research Programme", 50, "The Flying Duck", "Experimental mixed bill including some of Glasgow's best and strangest talent", True)
event2 = Event(date(2022, 11, 26), "Stereo Bday Party", 300, "Stereo", "Anniversary party for famous city centre venue", False)
event3 = Event(date(2022, 12, 20), "Fast Muzik", 275, "Stereo", "Christmas edition of popular happy hardcore/hyperpop night", True)

event_list = [event1, event2, event3]

def get_event(index):
    return event_list[index]

def add_event(event):
    event_list.append(event)

def delete_event(event):
    for specific_event in event_list:
        if specific_event.name == event:
            event_to_delete = specific_event
            break
    event.remove(event_to_delete)

    