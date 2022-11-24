from datetime import date

class Event:

    def __init__(self, event_date, name, number_of_guests, location, description):
        self.date = date(event_date)
        self.name = name
        self.number_of_guests = number_of_guests
        self.location = location
        self.description = description