class Order:
    def __init__(self, book_title, author, description, customer_name, order_date, quantity, order_id):
        self.book_title = book_title
        self.author = author
        self.description = description
        self.customer_name = customer_name
        self.order_date = order_date
        self.quantity = quantity
        self.order_id = order_id