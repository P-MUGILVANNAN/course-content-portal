import React from 'react';

function FlaskSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-secondary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-py fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Flask Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Python Flask Web Framework</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-secondary me-2"></i>Introduction to Flask</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Flask?</li>
                <li className="list-group-item">Flask vs Django</li>
                <li className="list-group-item">WSGI and Werkzeug</li>
                <li className="list-group-item">Jinja2 Templating Engine</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-secondary me-2"></i>Flask Setup & Configuration</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Installation and Virtual Environment</li>
                <li className="list-group-item">Basic Flask Application Structure</li>
                <li className="list-group-item">Development Server</li>
                <li className="list-group-item">Debug Mode</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-signpost text-secondary me-2"></i>Routing in Flask</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic Route Handling</li>
                <li className="list-group-item">Dynamic URL Routing</li>
                <li className="list-group-item">HTTP Methods (GET, POST)</li>
                <li className="list-group-item">url_for() Function</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-code text-secondary me-2"></i>Templates (Jinja2)</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Template Inheritance</li>
                <li className="list-group-item">Variables and Expressions</li>
                <li className="list-group-item">Control Structures (if, for)</li>
                <li className="list-group-item">Filters and Macros</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-input-cursor-text text-secondary me-2"></i>Forms and User Input</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Handling Form Data</li>
                <li className="list-group-item">GET vs POST Methods</li>
                <li className="list-group-item">File Uploads</li>
                <li className="list-group-item">Form Validation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-image text-secondary me-2"></i>Static Files</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">CSS, JavaScript and Images</li>
                <li className="list-group-item">Serving Static Files</li>
                <li className="list-group-item">url_for with Static Files</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bootstrap text-secondary me-2"></i>Flask with Bootstrap</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Integrating Bootstrap</li>
                <li className="list-group-item">Responsive Design</li>
                <li className="list-group-item">Common Bootstrap Components</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-person-check text-secondary me-2"></i>Sessions and Cookies</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Session Management</li>
                <li className="list-group-item">Cookie Handling</li>
                <li className="list-group-item">Secure Session Configuration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-secondary me-2"></i>Database Integration</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Flask with MySQL</li>
                <li className="list-group-item">Flask with SQLite</li>
                <li className="list-group-item">Flask with PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-table text-secondary me-2"></i>ORM with SQLAlchemy</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Flask-SQLAlchemy Setup</li>
                <li className="list-group-item">Model Definitions</li>
                <li className="list-group-item">CRUD Operations</li>
                <li className="list-group-item">Database Migrations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-secondary me-2"></i>CRUD Operations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Create, Read, Update, Delete</li>
                <li className="list-group-item">Form Processing</li>
                <li className="list-group-item">Data Validation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-card-checklist text-secondary me-2"></i>WTForms</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Form Classes</li>
                <li className="list-group-item">Field Types</li>
                <li className="list-group-item">Form Validation</li>
                <li className="list-group-item">CSRF Protection</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-exclamation-triangle text-secondary me-2"></i>Error Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Custom Error Pages</li>
                <li className="list-group-item">HTTP Status Codes</li>
                <li className="list-group-item">Logging Errors</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-lock text-secondary me-2"></i>Authentication</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">User Registration</li>
                <li className="list-group-item">Login/Logout</li>
                <li className="list-group-item">Password Hashing</li>
                <li className="list-group-item">Flask-Login</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-puzzle text-secondary me-2"></i>Blueprints</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Modular Applications</li>
                <li className="list-group-item">Application Structure</li>
                <li className="list-group-item">Blueprint Registration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-slash text-secondary me-2"></i>REST API Development</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">JSON Responses</li>
                <li className="list-group-item">HTTP Methods</li>
                <li className="list-group-item">Status Codes</li>
                <li className="list-group-item">Flask-RESTful</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-upload text-secondary me-2"></i>File Uploads</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Handling File Uploads</li>
                <li className="list-group-item">File Validation</li>
                <li className="list-group-item">Secure Filenames</li>
                <li className="list-group-item">Serving Uploaded Files</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-funnel text-secondary me-2"></i>Middleware</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">before_request</li>
                <li className="list-group-item">after_request</li>
                <li className="list-group-item">teardown_request</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cloud-upload text-secondary me-2"></i>Deployment</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Render</li>
                <li className="list-group-item">Heroku</li>
                <li className="list-group-item">PythonAnywhere</li>
                <li className="list-group-item">WSGI Configuration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlaskSyllabus;