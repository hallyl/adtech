from flask import Flask, render_template
 
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/login/search')
def search():
    return render_template('searchpage.html')

@app.route('/login/search/reg')
def register():
    return render_template('register.html')

@app.route('/login/search/reg/update')
def update():
    return render_template('update.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
    