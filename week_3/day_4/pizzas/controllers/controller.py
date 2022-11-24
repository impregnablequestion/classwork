from flask import render_template, request
from app import app
from models.pizzas import pizzas, get_order, add_order
from models.pizza import Pizza


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/orders/')
def orders():
    return render_template('orders.html', pizzas = pizzas)

@app.route('/orders/<int:index>')
def order(index):
    pizza_id = get_order(index)
    return render_template('order.html', pizza = pizza_id)

@app.route('/orders/new_order/')
def new_order():
    return render_template('new_order.html')

@app.route('/orders/', methods=['POST'])
def submit_new_order():
    form_data = request.form
    pizza_name = form_data["pizza_name"]
    pizza_price = form_data["pizza_price"]
    gluten_free = "gluten_free" in form_data
    pizza_size = form_data["pizza_size"]
    form_pizza = Pizza(pizza_price, pizza_name, gluten_free, pizza_size)
    add_order(form_pizza)
    return render_template('orders.html', pizzas=pizzas)