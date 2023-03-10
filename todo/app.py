from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from configDB import db_config

#create a flask app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = db_config
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#link sqlalchemy to flask app
db = SQLAlchemy(app)

class Todo(db.Model):
    __tablename__ = 'todos'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(), nullable=False)

    def __repr__(self) -> str:
        return f'<Todo {self.id} {self.description}>'

db.create_all()

@app.route('/')
def index():
    return render_template('index.html', data=Todo.query.all())

@app.route('/list', methods=['POST'])
def create():
    newList = request.form.get('new_list', '')
    index = len(Todo.query.all()) + 1
    new_list = Todo(id=index, description=newList)
    db.session.add(new_list)
    db.session.commit()
    return redirect(url_for('index'))