from app import app
from flask import render_template
from models.orders import orders



@app.route('/orders')
def show_orders():
    return render_template('index.html', title="Orders", orders=orders)

@app.route('/orders/<int:index>')
def show_order(index):
    order = orders[index]
    return render_template('order.html', title='Order', order=order)

# @app.route('/tasks/<int:task_id>')
# def show_order(order_id):
#     order = orders[order_id]
#     return render_template('task.html', order=order)
