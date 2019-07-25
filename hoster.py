from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
import psycopg2
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField,ValidationError, SubmitField
from wtforms.validators import DataRequired, Length, Email, EqualTo, required
#import flash
#from register import SubmitMe

app = Flask(__name__)
app.config['SECRET_KEY'] = '40812a5e2dd9a9078195e925348e47f8'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres:patientino@localhost/postgres'
db = SQLAlchemy(app)

class SubmitMe(FlaskForm):
    patName=StringField('patName', validators=[DataRequired()])
    patAdd=StringField('patAdd', validators=[DataRequired()])
    patDOB=StringField('patDOB', validators=[DataRequired()])
    gender=StringField('gender', validators=[DataRequired()])
    ms=StringField('ms', validators=[DataRequired()])
    patNat=StringField('patNat', validators=[DataRequired()])
    patCode=StringField('patCode', validators=[DataRequired()])
    patBld=StringField('patBld', validators=[DataRequired()])
    medic=StringField('medic', validators=[DataRequired()])
    OHS=StringField('OHS', validators=[DataRequired()])
    submit = SubmitField('Submit')

class User(db.Model):
    pname=db.Column(db.String(25))
    paddress=db.Column(db.String(25))
    dob=db.Column(db.String(25))
    pgender=db.Column(db.Boolean(2))
    pstatus=db.Column(db.String(30))
    pnationality=db.Column(db.String(25))
    pcode=db.Column(db.Integer, primary_key=True)
    pblood=db.Column(db.String(3))
    pmed=db.Column(db.String(50))
    pOHS=db.Column(db.String(50))

    def __repr__(self):
        return f"User('{self.pname}', '{self.paddress}', '{self.dob}', '{self.pgender}', '{self.status}', '{self.pnationality}', '{self.pcode}', '{self.pblood}', '{self.pmed}', '{self.pOHS}')"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/login/search')
def search():
    return render_template('searchpage.html')

@app.route('/login/search/reg', methods=['GET', 'POST'])
def register():
    register = SubmitMe()
    if request.method == 'POST' and register.validate_on_submit():
        sub = User(pname= register.patName.data, paddress=register.paddress.data, dob=register.pDOB.data, pgender=register.gender.data,pstatus=register.ms.data,pnationality=register.patNat.data, pcode=register.patCode.data, pblood=register.patBld.data, pmed=register.medic.data, pOHS=register.OHS.data)
        db.session.add(sub)
        db/session.commit()
        flash(f'registration succesful for {register.patName.data}!', 'Success')
    return render_template('register.html')

@app.route('/login/search/reg/update', methods=['GET', 'POST'])
def update():
    return render_template('update.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
    

