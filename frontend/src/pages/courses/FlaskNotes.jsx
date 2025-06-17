import React from 'react';

function FlaskNotes() {
  return (
    <div className="bg-light">
      <style>
        {`
          pre {
            background-color: #1f2937;
            color: #e5e7eb;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
          }
          code {
            font-family: 'Courier New', monospace;
          }
          .sidebar {
            position: sticky;
            top: 1rem;
            height: calc(100vh - 2rem);
            overflow-y: auto;
          }
          @media (max-width: 991.98px) {
            .sidebar {
              position: static;
              height: auto;
              margin-bottom: 20px;
              overflow-y: visible;
            }
          }
          .nav-link {
            color: #495057;
          }
          .nav-link:hover {
            color: #0d6efd;
          }
          .property-card {
            background-color: #f8f9fa;
            border-left: 4px solid #0d6efd;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 4px;
          }
          .feature-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1rem;
          }
          .feature-table th, .feature-table td {
            border: 1px solid #dee2e6;
            padding: 0.75rem;
            text-align: left;
          }
          .feature-table th {
            background-color: #f8f9fa;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-py"></i> Flask Notes</h1>
          <p className="lead">Your Comprehensive Guide to Python Flask Web Framework</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#setup"><i className="bi bi-gear"></i> Setup</a>
              <a className="nav-link" href="#routing"><i className="bi bi-signpost"></i> Routing</a>
              <a className="nav-link" href="#templates"><i className="bi bi-file-earmark-code"></i> Templates</a>
              <a className="nav-link" href="#forms"><i className="bi bi-input-cursor-text"></i> Forms</a>
              <a className="nav-link" href="#static"><i className="bi bi-file-earmark-image"></i> Static Files</a>
              <a className="nav-link" href="#bootstrap"><i className="bi bi-bootstrap"></i> Bootstrap</a>
              <a className="nav-link" href="#sessions"><i className="bi bi-person-check"></i> Sessions</a>
              <a className="nav-link" href="#database"><i className="bi bi-database"></i> Database</a>
              <a className="nav-link" href="#orm"><i className="bi bi-table"></i> ORM</a>
              <a className="nav-link" href="#crud"><i className="bi bi-arrow-repeat"></i> CRUD</a>
              <a className="nav-link" href="#wtforms"><i className="bi bi-card-checklist"></i> WTForms</a>
              <a className="nav-link" href="#errors"><i className="bi bi-exclamation-triangle"></i> Error Handling</a>
              <a className="nav-link" href="#auth"><i className="bi bi-shield-lock"></i> Authentication</a>
              <a className="nav-link" href="#blueprints"><i className="bi bi-puzzle"></i> Blueprints</a>
              <a className="nav-link" href="#api"><i className="bi bi-code-slash"></i> REST API</a>
              <a className="nav-link" href="#uploads"><i className="bi bi-upload"></i> File Uploads</a>
              <a className="nav-link" href="#middleware"><i className="bi bi-funnel"></i> Middleware</a>
              <a className="nav-link" href="#deployment"><i className="bi bi-cloud-upload"></i> Deployment</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Flask</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is Flask?</h3>
                <ul>
                  <li>Flask is a <strong>lightweight web framework</strong> written in <strong>Python</strong></li>
                  <li>Used to build <strong>web applications</strong>, <strong>REST APIs</strong>, and <strong>microservices</strong></li>
                  <li>Developed by <strong>Armin Ronacher</strong></li>
                  <li>Based on <strong>Werkzeug</strong> (WSGI toolkit) and <strong>Jinja2</strong> (template engine)</li>
                  <li>Follows the <strong>WSGI standard</strong> (Web Server Gateway Interface)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-star"></i> Key Features of Flask</h3>
                <table className="feature-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lightweight</td>
                      <td>Minimal, flexible, and easy to learn</td>
                    </tr>
                    <tr>
                      <td>Modular</td>
                      <td>You can use extensions or keep it simple</td>
                    </tr>
                    <tr>
                      <td>Built-in Dev Server</td>
                      <td>Auto reloads on changes</td>
                    </tr>
                    <tr>
                      <td>Templating</td>
                      <td>Uses <strong>Jinja2</strong> for HTML templating</td>
                    </tr>
                    <tr>
                      <td>RESTful Request Handling</td>
                      <td>Built-in support for routes, parameters, and HTTP methods</td>
                    </tr>
                    <tr>
                      <td>Extension Support</td>
                      <td>Add features like DB, auth, etc. (e.g., Flask-SQLAlchemy, Flask-Login)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-compass"></i> When to Use Flask?</h3>
                <ul>
                  <li>You want <strong>full control</strong> over how your app is built</li>
                  <li>Your app is <strong>simple or modular</strong></li>
                  <li>You want to build <strong>RESTful APIs</strong> or <strong>microservices</strong></li>
                  <li>You want a <strong>fast, flexible</strong> framework</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-globe"></i> Real World Use Cases</h3>
                <ul>
                  <li>Personal websites & portfolios</li>
                  <li>Blogging platforms</li>
                  <li>REST APIs for mobile/web</li>
                  <li>Admin dashboards</li>
                  <li>Machine learning model deployment (with Flask + ML)</li>
                </ul>
              </div>
            </section>

            <section id="setup" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Setting up Flask Environment</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Step 1: Install Python</h3>
                <ul>
                  <li>Flask runs on <strong>Python 3+</strong></li>
                  <li>Check Python version: <code>python --version</code></li>
                  <li>If not installed, download from <a href="https://www.python.org" target="_blank">python.org</a></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Step 2: Create Project Folder</h3>
                <pre><code>{`mkdir flask_project
cd flask_project`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Step 3: Create a Virtual Environment (Recommended)</h3>
                <pre><code>{`python -m venv venv`}</code></pre>
                <p>To activate:</p>
                <p><strong>Windows:</strong></p>
                <pre><code>{`venv\\Scripts\\activate`}</code></pre>
                <p><strong>Mac/Linux:</strong></p>
                <pre><code>{`source venv/bin/activate`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> Step 4: Install Flask Using pip</h3>
                <pre><code>{`pip install flask`}</code></pre>
                <p>Verify installation:</p>
                <pre><code>{`pip freeze`}</code></pre>
                <p>Should show:</p>
                <pre><code>{`Flask==2.x.x`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> Step 5: Create Your First Flask App</h3>
                <p>Create <code>app.py</code>:</p>
                <pre><code>{`from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask World!"

if __name__ == '__main__':
    app.run(debug=True)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> Step 6: Run the Flask App</h3>
                <p><strong>Option 1: Using python</strong></p>
                <pre><code>{`python app.py`}</code></pre>
                
                <p><strong>Option 2: Using flask run</strong></p>
                <p>First, set environment variable:</p>
                <p><strong>Windows:</strong></p>
                <pre><code>{`set FLASK_APP=app.py
set FLASK_ENV=development
flask run`}</code></pre>
                <p><strong>Mac/Linux:</strong></p>
                <pre><code>{`export FLASK_APP=app.py
export FLASK_ENV=development
flask run`}</code></pre>
                <p>Then visit: <a href="http://127.0.0.1:5000" target="_blank">http://127.0.0.1:5000</a></p>
                <p><strong>Output:</strong> Hello, Flask World!</p>
                <p><strong>Note:</strong> Flask auto-reloads the app when <code>debug=True</code> is set.</p>
              </div>
            </section>

            <section id="routing" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-signpost"></i> Routing in Flask</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is Routing?</h3>
                <ul>
                  <li><strong>Routing</strong> in Flask means mapping URLs to functions (called view functions)</li>
                  <li>When a user visits a URL, Flask executes the corresponding function</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code"></i> Basic Route Example</h3>
                <pre><code>{`from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Home Page!"`}</code></pre>
                <p>When you visit <code>http://localhost:5000/</code>, it shows: <em>Welcome to the Home Page!</em></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-plus-circle"></i> Adding More Routes</h3>
                <pre><code>{`@app.route('/about')
def about():
    return "This is the About Page"

@app.route('/contact')
def contact():
    return "Contact us at: contact@example.com"`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-repeat"></i> Dynamic URL Routing</h3>
                <p>You can accept values from the URL using <strong>angle brackets</strong>:</p>
                <pre><code>{`@app.route('/user/<username>')
def user_profile(username):
    return f"Hello, {username}!"`}</code></pre>
                <p><strong>Example:</strong> Visiting <code>/user/Mugil</code> shows: <em>Hello, Mugil!</em></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-type"></i> Specifying Data Types in Routes</h3>
                <pre><code>{`@app.route('/post/<int:post_id>')
def show_post(post_id):
    return f"Post ID is: {post_id}"`}</code></pre>
                <p><strong>Supported converters:</strong></p>
                <table className="feature-table">
                  <thead>
                    <tr>
                      <th>Converter</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>string</code></td>
                      <td>Default (text)</td>
                    </tr>
                    <tr>
                      <td><code>int</code></td>
                      <td>Integer</td>
                    </tr>
                    <tr>
                      <td><code>float</code></td>
                      <td>Floating-point number</td>
                    </tr>
                    <tr>
                      <td><code>path</code></td>
                      <td>String with slashes /</td>
                    </tr>
                    <tr>
                      <td><code>uuid</code></td>
                      <td>UUID string</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-link"></i> Using url_for() to Build URLs</h3>
                <p>Instead of hardcoding URLs, use Flask's <code>url_for()</code>:</p>
                <pre><code>{`from flask import url_for

@app.route('/')
def home():
    return url_for('about')  # returns '/about'`}</code></pre>
                <p><strong>Benefits:</strong></p>
                <ul>
                  <li>Avoid hardcoding paths</li>
                  <li>Automatically updates if route changes</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code"></i> Example Flask App with Routes</h3>
                <pre><code>{`from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Home Page"

@app.route('/hello/<name>')
def hello(name):
    return f"Hello, {name}!"

@app.route('/product/<int:id>')
def product(id):
    return f"Product ID: {id}"`}</code></pre>
              </div>
            </section>

            <section id="templates" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> Flask Templates (Jinja2)</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is a Template?</h3>
                <ul>
                  <li>A template is an HTML file used to separate the frontend (UI) from backend (Python logic)</li>
                  <li>Flask uses <strong>Jinja2</strong> template engine to render HTML pages dynamically</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-folder"></i> Folder Structure</h3>
                <p>Flask looks for templates inside the <code>templates/</code> folder.</p>
                <pre><code>{`flask_project/
├── app.py
└── templates/
    ├── home.html
    └── about.html`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Basic render_template()</h3>
                <p><strong>app.py</strong></p>
                <pre><code>{`from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html")`}</code></pre>
                
                <p><strong>templates/home.html</strong></p>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>
    <h1>Welcome to Flask Home Page</h1>
</body>
</html>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left-right"></i> Passing Data to Templates</h3>
                <p><strong>app.py</strong></p>
                <pre><code>{`@app.route('/user/<name>')
def user(name):
    return render_template("user.html", username=name)`}</code></pre>
                
                <p><strong>templates/user.html</strong></p>
                <pre><code>{`<h2>Hello, {{ username }}!</h2>`}</code></pre>
                <p><code>{`{ ... }`}</code> is used for <strong>outputting variables</strong>.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-braces"></i> Jinja2 Template Syntax</h3>
                <table className="feature-table">
                  <thead>
                    <tr>
                      <th>Syntax</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>{`{ variable }`}</code></td>
                      <td>Output variable</td>
                    </tr>
                    <tr>
                      <td><code>{`{% ... %}`}</code></td>
                      <td>Statements (for, if, etc.)</td>
                    </tr>
                    <tr>
                      <td><code>{`{# comment #}`}</code></td>
                      <td>Comment</td>
                    </tr>
                    <tr>
                      <td><code>{`{ 5 + 5 }`}</code></td>
                      <td>Output expressions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-slash"></i> Control Structures (if, for)</h3>
                <p><strong>If condition example:</strong></p>
                <pre><code>{`{% if username %}
    <h2>Hello, {{ username }}!</h2>
{% else %}
    <h2>Guest User</h2>
{% endif %}`}</code></pre>
                
                <p><strong>For loop example:</strong></p>
                <pre><code>{`<ul>
{% for item in items %}
    <li>{{ item }}</li>
{% endfor %}
</ul>`}</code></pre>
                
                <p><strong>app.py</strong></p>
                <pre><code>{`@app.route('/items')
def show_items():
    item_list = ['Apple', 'Banana', 'Mango']
    return render_template("items.html", items=item_list)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-2"></i> Template Inheritance (Reusable Layout)</h3>
                <p><strong>templates/base.html</strong> (parent template):</p>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My Site{% endblock %}</title>
</head>
<body>
    <header><h1>Flask Site</h1></header>
    <main>
        {% block content %}{% endblock %}
    </main>
</body>
</html>`}</code></pre>
                
                <p><strong>templates/home.html</strong> (child template):</p>
                <pre><code>{`{% extends "base.html" %}

{% block title %}Home Page{% endblock %}

{% block content %}
    <p>This is the homepage content.</p>
{% endblock %}`}</code></pre>
              </div>
            </section>

            <section id="forms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-input-cursor-text"></i> Flask Forms (Handling GET and POST Requests)</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What are Forms in Flask?</h3>
                <ul>
                  <li>Forms are used to collect user input like text, email, password, etc.</li>
                  <li>In Flask, we can handle form submissions using GET or POST methods</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-folder"></i> Folder Structure</h3>
                <pre><code>{`flask_project/
├── app.py
└── templates/
    ├── form.html
    └── result.html`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-postcard"></i> Example 1: Simple Form with POST Method</h3>
                <p><strong>form.html</strong></p>
                <pre><code>{`<!DOCTYPE html>
<html>
<head><title>User Form</title></head>
<body>
    <h2>Enter your name</h2>
    <form method="POST">
        <input type="text" name="username">
        <input type="submit" value="Submit">
    </form>
</body>
</html>`}</code></pre>
                
                <p><strong>result.html</strong></p>
                <pre><code>{`<h3>Welcome, {{ name }}</h3>`}</code></pre>
                
                <p><strong>app.py</strong></p>
                <pre><code>{`from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        name = request.form['username']
        return render_template('result.html', name=name)
    return render_template('form.html')`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-database"></i> Accessing Form Data</h3>
                <table className="feature-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>request.form['field_name']</code></td>
                      <td>To access POST form data</td>
                    </tr>
                    <tr>
                      <td><code>request.args.get('key')</code></td>
                      <td>To access GET query string values</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-envelope"></i> Example 2: Handling GET Method</h3>
                <pre><code>{`@app.route('/greet')
def greet():
    name = request.args.get('name', 'Guest')
    return f"Hello, {name}!"`}</code></pre>
                <p><strong>URL:</strong> <code>http://localhost:5000/greet?name=Mugil</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> Redirect After Form Submission</h3>
                <pre><code>{`from flask import redirect, url_for

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        return redirect(url_for('success'))
    return render_template('login.html')

@app.route('/success')
def success():
    return "Login Successful!"`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-shield-lock"></i> Security</h3>
                <ul>
                  <li>Always validate and sanitize user inputs</li>
                  <li>Use POST for sensitive actions like login, update, delete</li>
                </ul>
              </div>
            </section>

            <section id="static" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-image"></i> Static Files in Flask (CSS, JS, Images)</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What Are Static Files?</h3>
                <p>Static files are files that do not change dynamically, like:</p>
                <ul>
                  <li>CSS (Styling)</li>
                  <li>JavaScript (Functionality)</li>
                  <li>Images (Logos, Icons)</li>
                </ul>
                <p>Flask serves them from a special folder called <code>static/</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-folder"></i> Folder Structure</h3>
                <pre><code>{`flask_project/
├── app.py
├── static/
│   ├── style.css
│   ├── script.js
│   └── logo.png
└── templates/
    └── index.html`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-link"></i> Accessing Static Files in HTML</h3>
                <p>Use <code>url_for('static', filename='path/to/file')</code></p>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>Static Example</title>
    <!-- Linking CSS -->
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
    <!-- Linking JS -->
    <script src="{{ url_for('static', filename='script.js') }}"></script>
</head>
<body>
    <h1>Welcome to Flask Static Example</h1>
    <img src="{{ url_for('static', filename='logo.png') }}" alt="Logo" width="100">
</body>
</html>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code"></i> Example Static Files</h3>
                <p><strong>static/style.css</strong></p>
                <pre><code>{`body {
    background-color: #f2f2f2;
    font-family: Arial, sans-serif;
}
h1 {
    color: #ff5500;
}`}</code></pre>
                
                <p><strong>static/script.js</strong></p>
                <pre><code>{`console.log("Static JS loaded!");`}</code></pre>
                
                <p><strong>static/logo.png</strong></p>
                <p>→ Add any image here (Flask will serve it)</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Flask Code</h3>
                <pre><code>{`from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')`}</code></pre>
                <p>Run and visit <code>http://localhost:5000</code> – you'll see styled text, working JS, and image.</p>
              </div>
            </section>

            <section id="bootstrap" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bootstrap"></i> Flask with Bootstrap Integration</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is Bootstrap?</h3>
                <ul>
                  <li><strong>Bootstrap</strong> is a popular CSS framework to build responsive, mobile-first, and stylish web interfaces quickly</li>
                  <li>You can integrate it easily with Flask by linking the CDN in your HTML templates</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> How to Add Bootstrap in Flask Project</h3>
                <p>Include these inside your HTML's <code>&lt;head&gt;</code> section:</p>
                <pre><code>{`<!-- Bootstrap 5 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Optional Bootstrap JS (for dropdowns, modals, etc.) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code"></i> Example: Bootstrap with Flask</h3>
                <p><strong>templates/index.html</strong></p>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>Flask with Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container mt-5">
        <h1 class="text-primary">Welcome to Flask + Bootstrap</h1>
        <p class="lead">This is a sample styled page.</p>
        <a href="#" class="btn btn-success">Click Me</a>
    </div>
</body>
</html>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-signpost"></i> Create a Route for This Page</h3>
                <p><strong>app.py</strong></p>
                <pre><code>{`from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")`}</code></pre>
                <p>Run the app and see beautiful styled UI with no custom CSS</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-collection"></i> Common Bootstrap Components to Use</h3>
                <table className="feature-table">
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Code Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Buttons</td>
                      <td><code>&lt;button class="btn btn-primary"&gt;Click&lt;/button&gt;</code></td>
                    </tr>
                    <tr>
                      <td>Cards</td>
                      <td><code>&lt;div class="card"&gt;&lt;div class="card-body"&gt;&lt;/div&gt;&lt;/div&gt;</code></td>
                    </tr>
                    <tr>
                      <td>Forms</td>
                      <td><code>&lt;input class="form-control"&gt;</code></td>
                    </tr>
                    <tr>
                      <td>Grid Layout</td>
                      <td><code>&lt;div class="row"&gt;&lt;div class="col-md-6"&gt;&lt;/div&gt;&lt;/div&gt;</code></td>
                    </tr>
                    <tr>
                      <td>Navbar</td>
                      <td><code>&lt;nav class="navbar navbar-expand"&gt;&lt;/nav&gt;</code></td>
                    </tr>
                  </tbody>
                </table>
                <p>Bootstrap gives you <strong>readymade classes</strong> – just plug and play.</p>
              </div>
            </section>

            <section id="sessions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-person-check"></i> Flask Sessions</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is a Session?</h3>
                <ul>
                  <li>A session allows you to store data per user across multiple requests</li>
                  <li>Example: Login state, cart items, etc.</li>
                  <li>Unlike cookies (stored in browser), <strong>sessions are stored server-side</strong>, and Flask links them using a cookie called <code>session</code></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> Enabling Sessions in Flask</h3>
                <pre><code>{`from flask import Flask, session, redirect, url_for, request, render_template

app = Flask(__name__)

app.secret_key = 'your_secret_key'  # Required for session security`}</code></pre>
                <p>The <code>secret_key</code> is mandatory for session encryption & security.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-database"></i> Set and Get Session Data</h3>
                <p><strong>Storing Data in Session:</strong></p>
                <pre><code>{`session['username'] = 'mugil'`}</code></pre>
                
                <p><strong>Accessing Session Data:</strong></p>
                <pre><code>{`username = session.get('username')`}</code></pre>
                
                <p><strong>Removing Data:</strong></p>
                <pre><code>{`session.pop('username', None)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-person-lines-fill"></i> Full Example: Login with Session</h3>
                <p><strong>app.py</strong></p>
                <pre><code>{`@app.route('/')
def home():
    if 'username' in session:
        return f"Logged in as {session['username']}"
    return "You are not logged in"

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']
        return redirect(url_for('home'))
    return '''
        <form method="post">
            <input name="username">
            <input type="submit">
        </form>
    '''

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('home'))`}</code></pre>
                
                <p><strong>Output Flow:</strong></p>
                <ol>
                  <li>Visit <code>/</code> → shows login status</li>
                  <li>Visit <code>/login</code> → submit username</li>
                  <li>Go back to <code>/</code> → shows "Logged in as Mugil"</li>
                  <li>Visit <code>/logout</code> → session cleared</li>
                </ol>
              </div>
            </section>

            <section id="database" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> Flask with MySQL Integration</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-tools"></i> What Do You Need?</h3>
                <ol>
                  <li><strong>Flask</strong></li>
                  <li><strong>MySQL Server</strong> (like XAMPP, WAMP, or standalone)</li>
                  <li><strong>MySQL Connector Library</strong></li>
                </ol>
                <p>Install the connector:</p>
                <pre><code>{`pip install flask-mysqldb`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-folder"></i> Step-by-Step Setup</h3>
                <p><strong>Folder Structure</strong></p>
                <pre><code>{`flask_mysql_project/
├── app.py
├── templates/
└── index.html`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Step 1: Configure MySQL in Flask</h3>
                <pre><code>{`from flask import Flask, render_template, request
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL config
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''  # your MySQL password
app.config['MYSQL_DB'] = 'flask_db'

mysql = MySQL(app)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Step 2: Create a Table in MySQL</h3>
                <pre><code>{`CREATE DATABASE flask_db;

USE flask_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Step 3: Form to Insert Data</h3>
                <p><strong>templates/index.html</strong></p>
                <pre><code>{`<!DOCTYPE html>
<html>
<head><title>MySQL Form</title></head>
<body>
    <h2>Register</h2>
    <form method="POST">
        <input type="text" name="name" placeholder="Enter Name"><br>
        <input type="email" name="email" placeholder="Enter Email"><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>`}</code></pre>
                
                <p><strong>app.py (continued)</strong></p>
                <pre><code>{`@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO users(name, email) VALUES(%s, %s)", (name, email))
        mysql.connection.commit()
        cur.close()
        return "User registered successfully!"
    return render_template('index.html')`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> Step 4: Retrieve Data</h3>
                <pre><code>{`@app.route('/users')
def users():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users")
    data = cur.fetchall()
    cur.close()
    return str(data)`}</code></pre>
              </div>
            </section>

            <section id="orm" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-table"></i> Flask with ORM (SQLAlchemy)</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is ORM?</h3>
                <ul>
                  <li><strong>ORM (Object Relational Mapping)</strong> lets you interact with databases using Python classes and objects instead of raw SQL queries</li>
                  <li><strong>Flask supports ORM via SQLAlchemy</strong></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Step 1: Install Flask-SQLAlchemy</h3>
                <pre><code>{`pip install flask-sqlalchemy`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Step 2: Basic Setup</h3>
                <pre><code>{`from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# MySQL Database URI format:
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/flask_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Step 3: Define Models (Tables)</h3>
                <pre><code>{`class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)

    def __repr__(self):
        return f'User {self.name}'`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> Step 4: Create Tables</h3>
                <p>Run this once from Python shell or inside your file:</p>
                <pre><code>{`with app.app_context():
    db.create_all()`}</code></pre>
                <p>This will create a User table automatically.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> Step 5: Insert Data Using ORM</h3>
                <pre><code>{`@app.route('/add')
def add_user():
    user = User(name='Mugil', email='mugil@example.com')
    db.session.add(user)
    db.session.commit()
    return "User added!"`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> Step 6: Read Data</h3>
                <pre><code>{`@app.route('/users')
def get_users():
    users = User.query.all()
    return str(users)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-7-circle"></i> Step 7: Update Data</h3>
                <pre><code>{`@app.route('/update/<int:id>')
def update_user(id):
    user = User.query.get(id)
    if user:
        user.name = "Updated Name"
        db.session.commit()
        return "User updated"
    return "User not found"`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-8-circle"></i> Step 8: Delete Data</h3>
                <pre><code>{`@app.route('/delete/<int:id>')
def delete_user(id):
    user = User.query.get(id)
    if user:
        db.session.delete(user)
        db.session.commit()
        return "User deleted"
    return "User not found"`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check-circle"></i> ORM Benefits</h3>
                <ul>
                  <li>No need to write raw SQL</li>
                  <li>Cleaner and more readable</li>
                  <li>Easy to switch databases (MySQL, PostgreSQL, SQLite, etc.)</li>
                </ul>
              </div>
            </section>

            <section id="crud" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> CRUD Operations using Flask + MySQL</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Step 1: Setup (Reminder)</h3>
                <p>Install if not already:</p>
                <pre><code>{`pip install flask-mysqldb`}</code></pre>
                
                <p><strong>app.py (basic config):</strong></p>
                <pre><code>{`from flask import Flask, render_template, request, redirect, url_for
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flask_db'

mysql = MySQL(app)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Step 2: Create users Table</h3>
                <pre><code>{`CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Step 3: CRUD Routes & Templates</h3>
                <p><strong>Create (Insert)</strong></p>
                <pre><code>{`@app.route('/add', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO users (name, email) VALUES (%s, %s)", (name, email))
        mysql.connection.commit()
        cur.close()
        return redirect(url_for('read'))
    return render_template('add.html')`}</code></pre>
                
                <p><strong>templates/add.html</strong></p>
                <pre><code>{`<form method="POST">
    <input name="name" placeholder="Name">
    <input name="email" placeholder="Email">
    <input type="submit" value="Add">
</form>`}</code></pre>
                
                <p><strong>Read (List All)</strong></p>
                <pre><code>{`@app.route('/')
def read():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users")
    data = cur.fetchall()
    cur.close()
    return render_template('read.html', users=data)`}</code></pre>
                
                <p><strong>templates/read.html</strong></p>
                <pre><code>{`<table border="1">
    <tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr>
    {% for user in users %}
    <tr>
        <td>{{ user[0] }}</td>
        <td>{{ user[1] }}</td>
        <td>{{ user[2] }}</td>
        <td>
            <a href="/edit/{{ user[0] }}">Edit</a>
            <a href="/delete/{{ user[0] }}">Delete</a>
        </td>
    </tr>
    {% endfor %}
</table>
<a href="/add">Add User</a>`}</code></pre>
                
                <p><strong>Update</strong></p>
                <pre><code>{`@app.route('/edit/<int:id>', methods=['GET', 'POST'])
def edit(id):
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        cur.execute("UPDATE users SET name=%s, email=%s WHERE id=%s", (name, email, id))
        mysql.connection.commit()
        return redirect(url_for('read'))
    cur.execute("SELECT * FROM users WHERE id=%s", (id,))
    data = cur.fetchone()
    cur.close()
    return render_template('edit.html', user=data)`}</code></pre>
                
                <p><strong>templates/edit.html</strong></p>
                <pre><code>{`<form method="POST">
    <input name="name" value="{{ user[1] }}">
    <input name="email" value="{{ user[2] }}">
    <input type="submit" value="Update">
</form>`}</code></pre>
                
                <p><strong>Delete</strong></p>
                <pre><code>{`@app.route('/delete/<int:id>')
def delete(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM users WHERE id=%s", (id,))
    mysql.connection.commit()
    cur.close()
    return redirect(url_for('read'))`}</code></pre>
              </div>
            </section>

            <section id="wtforms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-card-checklist"></i> Flask and WTForms</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-info-circle"></i> About WTForms</h3>
                <p>WTForms is a form rendering and validation library used in Flask via <strong>Flask-WTF</strong>.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Step 1: Install Flask-WTF</h3>
                <pre><code>{`pip install flask-wtf`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Step 2: Configuration</h3>
                <pre><code>{`from flask import Flask

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Needed for CSRF protection`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Step 3: Create a WTForm</h3>
                <p><strong>forms.py</strong></p>
                <pre><code>{`from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Email

class ContactForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    submit = SubmitField('Submit')`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> Step 4: Using Form in Flask View</h3>
                <p><strong>app.py</strong></p>
                <pre><code>{`from flask import render_template, request, flash
from forms import ContactForm

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    form = ContactForm()
    if form.validate_on_submit():
        flash(f"Thanks {form.name.data}, we got your email: {form.email.data}")
        return render_template('thankyou.html')
    return render_template('contact.html', form=form)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> Step 5: HTML Form with form.hidden_tag() and Fields</h3>
                <p><strong>templates/contact.html</strong></p>
                <pre><code>{`<!DOCTYPE html>
<html>
<head><title>Contact</title></head>
<body>
    <form method="POST">
        {{ form.hidden_tag() }}
        {{ form.name.label }} {{ form.name() }}<br>
        {{ form.email.label }} {{ form.email() }}<br>
        {{ form.submit() }}
    </form>
</body>
</html>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check-circle"></i> Output</h3>
                <ul>
                  <li>Form is displayed with fields and CSRF protection</li>
                  <li>If data is invalid, validation messages are handled automatically</li>
                  <li>On submit, form data is processed securely</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-check"></i> Validators in WTForms</h3>
                <table className="feature-table">
                  <thead>
                    <tr>
                      <th>Validator</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>DataRequired()</code></td>
                      <td>Field must not be empty</td>
                    </tr>
                    <tr>
                      <td><code>Email()</code></td>
                      <td>Valid email format</td>
                    </tr>
                    <tr>
                      <td><code>Length(min, max)</code></td>
                      <td>Limit text length</td>
                    </tr>
                    <tr>
                      <td><code>EqualTo()</code></td>
                      <td>Used for confirm passwords</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="errors" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-exclamation-triangle"></i> Flask Error Handling with Custom Pages</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> Why Error Handling?</h3>
                <p>To make your app user-friendly and avoid showing raw errors like:</p>
                <ul>
                  <li>Internal Server Error (500)</li>
                  <li>Page Not Found (404)</li>
                </ul>
                <p>Flask allows you to customize error pages using <code>@app.errorhandler</code>.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Step 1: Basic 404 and 500 Error Pages</h3>
                <p><strong>app.py</strong></p>
                <pre><code>{`from flask import render_template

@app.errorhandler(404)
def not_found_error(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(e):
    return render_template('500.html'), 500`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Step 2: Create Templates</h3>
                <p><strong>templates/404.html</strong></p>
                <pre><code>{`<!DOCTYPE html>
<html>
<head><title>Page Not Found</title></head>
<body>
    <h2>404 - Page Not Found</h2>
    <p>Oops! The page you are looking for doesn't exist.</p>
</body>
</html>`}</code></pre>
                
                <p><strong>templates/500.html</strong></p>
                <pre><code>{`<!DOCTYPE html>
<html>
<head><title>Server Error</title></head>
<body>
    <h2>500 - Internal Server Error</h2>
    <p>Something went wrong on the server.</p>
</body>
</html>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Triggering Errors (for testing)</h3>
                <p><strong>1. Trigger 404</strong></p>
                <pre><code>{`@app.route('/missing')
def missing_page():
    return "This page doesn't exist", 404`}</code></pre>
                
                <p><strong>2. Trigger 500</strong></p>
                <pre><code>{`@app.route('/crash')
def crash():
    return 1 / 0  # Force divide-by-zero error`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-plus-circle"></i> Bonus: Handle All Errors with One Generic Handler</h3>
                <pre><code>{`@app.errorhandler(Exception)
def handle_all_errors(e):
    return render_template("error.html", error=str(e)), 500`}</code></pre>
                
                <p><strong>templates/error.html</strong></p>
                <pre><code>{`<h2>Error Occurred</h2>
<p>{{ error }}</p>`}</code></pre>
              </div>
            </section>

            <section id="auth" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> Flask Authentication using Flask-Login</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-check"></i> We'll cover:</h3>
                <ol>
                  <li>User registration with password hashing</li>
                  <li>Login/logout using Flask-Login</li>
                  <li>Protecting routes (only logged-in users can access)</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Step 1: Install Flask-Login</h3>
                <pre><code>{`pip install flask-login`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Step 2: Setup and Configuration</h3>
                <pre><code>{`from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

app = Flask(__name__)
app.secret_key = 'secretkey'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/flask_auth'

db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'  # redirect to login if not authenticated`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Step 3: Create User Model</h3>
                <pre><code>{`from flask_login import UserMixin

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(200))  # hashed password`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> Step 4: User Loader for Flask-Login</h3>
                <pre><code>{`@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> Step 5: Password Hashing (for security)</h3>
                <pre><code>{`from werkzeug.security import generate_password_hash, check_password_hash`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> Step 6: Registration Route</h3>
                <pre><code>{`from flask import request, render_template, redirect, url_for, flash

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = generate_password_hash(request.form['password'])
        user = User(username=username, email=email, password=password)
        db.session.add(user)
        db.session.commit()
        flash("Registered successfully")
        return redirect(url_for('login'))
    return render_template('register.html')`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-7-circle"></i> Step 7: Login Route</h3>
                <pre><code>{`from flask_login import login_user

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = User.query.filter_by(email=request.form['email']).first()
        if user and check_password_hash(user.password, request.form['password']):
            login_user(user)
            return redirect(url_for('dashboard'))
        flash("Invalid credentials")
    return render_template('login.html')`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-8-circle"></i> Step 8: Protect Routes</h3>
                <pre><code>{`from flask_login import login_required, current_user

@app.route('/dashboard')
@login_required
def dashboard():
    return f"Welcome {current_user.username}!"`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-9-circle"></i> Step 9: Logout Route</h3>
                <pre><code>{`from flask_login import logout_user

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))`}</code></pre>
              </div>
            </section>

            <section id="blueprints" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-puzzle"></i> Flask Blueprints – Modular Project Structure</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-info-circle"></i> About Blueprints</h3>
                <p>Blueprints help break your app into multiple modules (like components). Easy to maintain large projects.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-folder"></i> Real-Time Folder Structure Example</h3>
                <pre><code>{`/myapp
├── app.py
├── auth/  ← Login, register, logout
│   ├── __init__.py
│   └── routes.py
├── dashboard/  ← Dashboard, user profile
│   ├── __init__.py
│   └── routes.py
└── templates/
    ├── login.html
    ├── register.html
    └── dashboard.html`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Step 1: Create Blueprint in auth/routes.py</h3>
                <pre><code>{`from flask import Blueprint, render_template

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return render_template('login.html')

@auth.route('/register')
def register():
    return render_template('register.html')`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Step 2: Init File in auth/__init__.py</h3>
                <pre><code>{`# empty or use this to expose blueprint
from .routes import auth`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Step 3: Main App File (app.py)</h3>
                <pre><code>{`from flask import Flask
from auth.routes import auth
from dashboard.routes import dashboard

app = Flask(__name__)
app.secret_key = 'blueprintsecret'

# Register Blueprints
app.register_blueprint(auth, url_prefix='/auth')
app.register_blueprint(dashboard, url_prefix='/dashboard')

@app.route('/')
def home():
    return "Home Page"`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> Step 4: Dashboard Example</h3>
                <p><strong>dashboard/routes.py</strong></p>
                <pre><code>{`from flask import Blueprint, render_template
dashboard = Blueprint('dashboard', __name__)

@dashboard.route('/')
def dash():
    return render_template('dashboard.html')`}</code></pre>
                
                <p><strong>dashboard/__init__.py</strong></p>
                <pre><code>{`from .routes import dashboard`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check-circle"></i> Output</h3>
                <table className="feature-table">
                  <thead>
                    <tr>
                      <th>URL</th>
                      <th>What it does</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>/auth/login</code></td>
                      <td>Login Page</td>
                    </tr>
                    <tr>
                      <td><code>/auth/register</code></td>
                      <td>Registration Page</td>
                    </tr>
                    <tr>
                      <td><code>/dashboard/</code></td>
                      <td>Dashboard Home</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-star"></i> Benefits</h3>
                <ul>
                  <li>Modular code structure</li>
                  <li>Better scalability</li>
                  <li>Team-friendly (auth team, dashboard team...)</li>
                </ul>
              </div>
            </section>

            <section id="api" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-slash"></i> Flask REST API (JSON Response + Postman)</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-info-circle"></i> About REST APIs</h3>
                <p>Flask can be used to build RESTful APIs that return JSON responses. We'll also test them using <strong>Postman</strong>.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Step 1: Basic API Endpoint</h3>
                <pre><code>{`from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/message')
def get_message():
    return jsonify({"message": "Hello, this is a Flask API!"})`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Step 2: API with Parameters</h3>
                <pre><code>{`@app.route('/api/user/<int:user_id>')
def get_user(user_id):
    return jsonify({"user_id": user_id, "name": f"User {user_id}"})`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Step 3: Handling POST Request with JSON Body</h3>
                <pre><code>{`from flask import request

@app.route('/api/add', methods=['POST'])
def add_numbers():
    data = request.get_json()
    total = data['a'] + data['b']
    return jsonify({"result": total})`}</code></pre>
                
                <p><strong>Test in Postman:</strong></p>
                <ul>
                  <li>URL: <code>http://localhost:5000/api/add</code></li>
                  <li>Method: POST</li>
                  <li>Body → raw → JSON</li>
                </ul>
                <pre><code>{`{
    "a": 5,
    "b": 7
}`}</code></pre>
                <p><strong>Response:</strong></p>
                <pre><code>{`{
    "result": 12
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> Step 4: Common API Response Structure</h3>
                <p>Always return JSON with structure like this for consistency:</p>
                <pre><code>{`{
    "status": "success",
    "data": {...}
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`@app.route('/api/status')
def status():
    return jsonify({
        "status": "success",
        "data": {"service": "Running", "version": "1.0"}
    })`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> Step 5: Error Response Format</h3>
                <pre><code>{`@app.route('/api/divide', methods=['POST'])
def divide():
    try:
        data = request.get_json()
        result = data['a'] / data['b']
        return jsonify({"status": "success", "result": result})
    except ZeroDivisionError:
        return jsonify({"status": "error", "message": "Cannot divide by zero"}), 400`}</code></pre>
              </div>
            </section>

            <section id="uploads" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-upload"></i> File Upload and Validation in Flask</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Step 1: Install Werkzeug (already comes with Flask)</h3>
                <p>If not:</p>
                <pre><code>{`pip install werkzeug`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Step 2: Configure Upload Folder and Allowed Extensions</h3>
                <pre><code>{`import os
from flask import Flask

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads/'
app.config['MAX_CONTENT_LENGTH'] = 2 * 1024 * 1024  # 2 MB

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'pdf'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Step 3: Create Upload Route</h3>
                <pre><code>{`from flask import request, redirect, url_for, flash, render_template
from werkzeug.utils import secure_filename

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)

        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            flash('File uploaded successfully!')
            return redirect(url_for('upload_file'))
    return render_template('upload.html')`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> Step 4: HTML Form for Upload</h3>
                <p><strong>templates/upload.html</strong></p>
                <pre><code>{`<!DOCTYPE html>
<html>
<head><title>Upload</title></head>
<body>
    <h2>Upload File</h2>
    <form method="POST" enctype="multipart/form-data">
        <input type="file" name="file">
        <input type="submit" value="Upload">
    </form>
    {% with messages = get_flashed_messages() %}
        {% if messages %}
        <ul>
            {% for msg in messages %}
            <li>{{ msg }}</li>
            {% endfor %}
        </ul>
        {% endif %}
    {% endwith %}
</body>
</html>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-check"></i> Notes</h3>
                <table className="feature-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Method Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Check file extension</td>
                      <td><code>allowed_file()</code></td>
                    </tr>
                    <tr>
                      <td>Save file securely</td>
                      <td><code>secure_filename()</code> from Werkzeug</td>
                    </tr>
                    <tr>
                      <td>Folder upload</td>
                      <td><code>app.config['UPLOAD_FOLDER']</code></td>
                    </tr>
                    <tr>
                      <td>File size limit</td>
                      <td><code>MAX_CONTENT_LENGTH</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="middleware" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-funnel"></i> Flask Middleware – before_request, after_request Hooks</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-info-circle"></i> About Middleware</h3>
                <p>Middleware in Flask lets you <strong>intercept requests or responses globally</strong> — for logging, authentication checks, etc.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left"></i> What is before_request?</h3>
                <p>Code that runs <strong>before</strong> every request (except static files).</p>
                <pre><code>{`@app.before_request
def before_any_request():
    print("Before request: ", request.path)`}</code></pre>
                <p><strong>Used for:</strong></p>
                <ul>
                  <li>Logging</li>
                  <li>Session validation</li>
                  <li>Blocking certain IPs</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right"></i> What is after_request?</h3>
                <p>Code that runs <strong>after</strong> every request and can modify the response.</p>
                <pre><code>{`@app.after_request
def after_any_request(response):
    print("After request: ", request.path)
    response.headers["X-Custom-Header"] = "PoweredByMugil"
    return response`}</code></pre>
                <p><strong>Used for:</strong></p>
                <ul>
                  <li>Adding custom headers</li>
                  <li>Logging status codes</li>
                  <li>Response compression</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Real Example</h3>
                <pre><code>{`from flask import Flask, request

app = Flask(__name__)

@app.before_request
def block_blacklisted_ips():
    blacklist = ['192.168.1.10']
    if request.remote_addr in blacklist:
        return "Your IP is blocked", 403

@app.after_request
def add_security_headers(response):
    response.headers["X-Frame-Options"] = "DENY"
    return response`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-clockwise"></i> Extra: teardown_request (Runs at end of request)</h3>
                <pre><code>{`@app.teardown_request
def teardown_request_func(error=None):
    print("[] Cleaning up after request")`}</code></pre>
              </div>
            </section>

            <section id="deployment" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cloud-upload"></i> Deploy Flask App on Render (Free Hosting)</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Step 1: Prepare Your Flask App for Production</h3>
                <p><strong>1. Folder Structure</strong></p>
                <pre><code>{`/myapp
├── app.py
├── requirements.txt
├── runtime.txt
├── Procfile
├── templates/
└── static/`}</code></pre>
                
                <p><strong>2. app.py</strong> → use <code>if __name__ == '__main__':</code></p>
                <pre><code>{`from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "Hello from Flask on Render!"

if __name__ == '__main__':
    app.run()`}</code></pre>
                
                <p><strong>3. requirements.txt</strong> (auto-generated)</p>
                <pre><code>{`pip freeze > requirements.txt`}</code></pre>
                <p>Make sure it includes:</p>
                <pre><code>{`Flask
gunicorn`}</code></pre>
                
                <p><strong>4. Procfile</strong> (no extension, capital P)</p>
                <pre><code>{`web: gunicorn app:app`}</code></pre>
                <p>This tells Render to run Flask using Gunicorn (app = filename, app = Flask app variable)</p>
                
                <p><strong>5. runtime.txt</strong> (optional)</p>
                <p>Specify Python version:</p>
                <pre><code>{`python-3.11.8`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Step 2: Push Code to GitHub</h3>
                <ol>
                  <li>Create a GitHub repo</li>
                  <li>Push your project</li>
                </ol>
                <pre><code>{`git init
git remote add origin https://github.com/yourname/myapp.git
git add .
git commit -m "Initial commit"
git push -u origin master`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Step 3: Deploy to Render</h3>
                <ol>
                  <li>Go to <a href="https://render.com" target="_blank">render.com</a></li>
                  <li>Login with GitHub</li>
                  <li>Click "New Web Service"</li>
                  <li>Connect your Flask GitHub repo</li>
                  <li>Fill:</li>
                </ol>
                <table className="feature-table">
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Your app name</td>
                    </tr>
                    <tr>
                      <td>Environment</td>
                      <td>Python</td>
                    </tr>
                    <tr>
                      <td>Build Command</td>
                      <td><code>pip install -r requirements.txt</code></td>
                    </tr>
                    <tr>
                      <td>Start Command</td>
                      <td><code>gunicorn app:app</code></td>
                    </tr>
                    <tr>
                      <td>Region</td>
                      <td>Closest to you</td>
                    </tr>
                    <tr>
                      <td>Free Tier</td>
                      <td>(enable)</td>
                    </tr>
                  </tbody>
                </table>
                <p>6. Click <strong>Create Web Service</strong></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check-circle"></i> Step 4: Done!</h3>
                <p>Render will build and deploy your app.</p>
                <p>You'll get a public URL like: <a href="https://flask-mugil.onrender.com" target="_blank">https://flask-mugil.onrender.com</a></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> Optional: Environment Variables</h3>
                <p>If you're using DB credentials or secret keys:</p>
                <ul>
                  <li>Go to your service → <strong>Environment tab</strong></li>
                  <li>Add <code>FLASK_ENV=production</code> or <code>SECRET_KEY=xyz</code></li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Flask Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default FlaskNotes;