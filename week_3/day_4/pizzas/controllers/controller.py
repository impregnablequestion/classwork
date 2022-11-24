from flask import render_template
from app import app
from models.pizzas import pizzas, get_order


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