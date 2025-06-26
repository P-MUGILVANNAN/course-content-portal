import React from 'react';

function DjangoSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-py"></i> Django Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Django Web Framework</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Django</h2>
            <ul>
              <li>What is Django?</li>
              <li>MVT Architecture</li>
              <li>Features and Advantages</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Setup & Installation</h2>
            <ul>
              <li>Python and pip setup</li>
              <li>Virtual environments</li>
              <li>Django installation</li>
              <li>Creating projects and apps</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-folder"></i> Project Structure</h2>
            <ul>
              <li>Project vs App</li>
              <li>Key files and directories</li>
              <li>Development server</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-code"></i> Views & Templates</h2>
            <ul>
              <li>Function-based views</li>
              <li>Class-based views</li>
              <li>Template system</li>
              <li>Template inheritance</li>
              <li>Passing data to templates</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark"></i> Static Files</h2>
            <ul>
              <li>CSS, JavaScript setup</li>
              <li>Image handling</li>
              <li>Static files configuration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-input-cursor-text"></i> Forms</h2>
            <ul>
              <li>GET vs POST methods</li>
              <li>Form handling</li>
              <li>CSRF protection</li>
              <li>Form validation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-person-badge"></i> Admin Panel</h2>
            <ul>
              <li>Creating superusers</li>
              <li>Admin interface</li>
              <li>Customizing admin</li>
              <li>Complete admin panel project</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> Models & ORM</h2>
            <ul>
              <li>Model creation</li>
              <li>Field types</li>
              <li>Migrations</li>
              <li>CRUD operations</li>
              <li>QuerySets</li>
              <li>Aggregations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-server"></i> MySQL Connectivity</h2>
            <ul>
              <li>Database configuration</li>
              <li>MySQL client setup</li>
              <li>Database migrations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> CRUD Operations</h2>
            <ul>
              <li>Complete CRUD project</li>
              <li>ModelForms</li>
              <li>Data validation</li>
              <li>Search functionality</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-upload"></i> File Upload</h2>
            <ul>
              <li>File handling</li>
              <li>Image upload</li>
              <li>Media configuration</li>
              <li>File deletion</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cookie"></i> Cookies & Sessions</h2>
            <ul>
              <li>Cookie handling</li>
              <li>Session configuration</li>
              <li>Session data management</li>
              <li>Authentication</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> Authentication</h2>
            <ul>
              <li>User registration</li>
              <li>Login/logout</li>
              <li>Password reset</li>
              <li>User permissions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-globe"></i> REST Framework</h2>
            <ul>
              <li>Introduction to REST</li>
              <li>Serializers</li>
              <li>API views</li>
              <li>Authentication</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightning"></i> Performance Optimization</h2>
            <ul>
              <li>Caching</li>
              <li>Database optimization</li>
              <li>Query optimization</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-check"></i> Security</h2>
            <ul>
              <li>Common vulnerabilities</li>
              <li>CSRF protection</li>
              <li>XSS prevention</li>
              <li>SQL injection</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-rocket"></i> Deployment</h2>
            <ul>
              <li>Preparing for production</li>
              <li>WSGI configuration</li>
              <li>Deployment to Heroku</li>
              <li>Deployment to AWS</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> Advanced Topics</h2>
            <ul>
              <li>Custom middleware</li>
              <li>Signals</li>
              <li>Custom template tags</li>
              <li>Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DjangoSyllabus;