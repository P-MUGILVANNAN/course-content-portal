import React from 'react';

function FlaskSyllabus() {
  return (
    <div className="bg-light">
      <style>
        {`
          .syllabus-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          .syllabus-header {
            background-color: #6c757d;
            color: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
          }
          .topic-list {
            list-style-type: none;
            padding: 0;
          }
          .topic-item {
            background-color: white;
            margin-bottom: 10px;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .topic-item i {
            margin-right: 10px;
          }
        `}
      </style>
      <div className="syllabus-container">
        <header className="syllabus-header">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-py"></i> Flask Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Python Flask Web Framework</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Flask</h2>
            <ul>
              <li>What is Flask?</li>
              <li>Flask vs Django</li>
              <li>WSGI and Werkzeug</li>
              <li>Jinja2 Templating Engine</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Flask Setup & Configuration</h2>
            <ul>
              <li>Installation and Virtual Environment</li>
              <li>Basic Flask Application Structure</li>
              <li>Development Server</li>
              <li>Debug Mode</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-signpost"></i> Routing in Flask</h2>
            <ul>
              <li>Basic Route Handling</li>
              <li>Dynamic URL Routing</li>
              <li>HTTP Methods (GET, POST)</li>
              <li>url_for() Function</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-code"></i> Templates (Jinja2)</h2>
            <ul>
              <li>Template Inheritance</li>
              <li>Variables and Expressions</li>
              <li>Control Structures (if, for)</li>
              <li>Filters and Macros</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-input-cursor-text"></i> Forms and User Input</h2>
            <ul>
              <li>Handling Form Data</li>
              <li>GET vs POST Methods</li>
              <li>File Uploads</li>
              <li>Form Validation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-image"></i> Static Files</h2>
            <ul>
              <li>CSS, JavaScript and Images</li>
              <li>Serving Static Files</li>
              <li>url_for with Static Files</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bootstrap"></i> Flask with Bootstrap</h2>
            <ul>
              <li>Integrating Bootstrap</li>
              <li>Responsive Design</li>
              <li>Common Bootstrap Components</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-person-check"></i> Sessions and Cookies</h2>
            <ul>
              <li>Session Management</li>
              <li>Cookie Handling</li>
              <li>Secure Session Configuration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> Database Integration</h2>
            <ul>
              <li>Flask with MySQL</li>
              <li>Flask with SQLite</li>
              <li>Flask with PostgreSQL</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-table"></i> ORM with SQLAlchemy</h2>
            <ul>
              <li>Flask-SQLAlchemy Setup</li>
              <li>Model Definitions</li>
              <li>CRUD Operations</li>
              <li>Database Migrations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> CRUD Operations</h2>
            <ul>
              <li>Create, Read, Update, Delete</li>
              <li>Form Processing</li>
              <li>Data Validation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-card-checklist"></i> WTForms</h2>
            <ul>
              <li>Form Classes</li>
              <li>Field Types</li>
              <li>Form Validation</li>
              <li>CSRF Protection</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-exclamation-triangle"></i> Error Handling</h2>
            <ul>
              <li>Custom Error Pages</li>
              <li>HTTP Status Codes</li>
              <li>Logging Errors</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> Authentication</h2>
            <ul>
              <li>User Registration</li>
              <li>Login/Logout</li>
              <li>Password Hashing</li>
              <li>Flask-Login</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> Blueprints</h2>
            <ul>
              <li>Modular Applications</li>
              <li>Application Structure</li>
              <li>Blueprint Registration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-slash"></i> REST API Development</h2>
            <ul>
              <li>JSON Responses</li>
              <li>HTTP Methods</li>
              <li>Status Codes</li>
              <li>Flask-RESTful</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-upload"></i> File Uploads</h2>
            <ul>
              <li>Handling File Uploads</li>
              <li>File Validation</li>
              <li>Secure Filenames</li>
              <li>Serving Uploaded Files</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-funnel"></i> Middleware</h2>
            <ul>
              <li>before_request</li>
              <li>after_request</li>
              <li>teardown_request</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cloud-upload"></i> Deployment</h2>
            <ul>
              <li>Render</li>
              <li>Heroku</li>
              <li>PythonAnywhere</li>
              <li>WSGI Configuration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlaskSyllabus;