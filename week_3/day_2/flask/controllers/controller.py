from app import app

@app.route('/')
def index():
    return "Hello World!"

@app.route('/<name>')
def greet(name):
    name = name.upper()
    return f'Hello {name}!'

@app.route('/homepage')
def home():
    return "ahhhh it's good to be back"
