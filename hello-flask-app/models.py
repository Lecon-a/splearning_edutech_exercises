
from flask_sqlalchemy import SQLAlchemy

global db

def setUpDB(app):
    db = SQLAlchemy(app)

    class Username(db.Model):
        __tablename__ = 'users'
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String(), nullable=False)

        def __repr__(self) -> str:
            return f'<User ID: {self.id} name: {self.name}>'
        
        def details(self):
            return {
                'id': self.id,
                'name': self.name
            }

    return db, Username
