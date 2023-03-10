from flask import Flask, render_template, request
import turing as t

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/bracket", methods=['post'])
def isClosed():
    text = request.form.get("text")
    result = t.isStringClosed(text)
    return {"text": text, "result": result}
