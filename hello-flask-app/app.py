from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def say_hello():
    return render_template('index.html')


@app.route("/greeting", methods=['post'])
def greet():
    return f'Hello, {request.form.get("name")}'
