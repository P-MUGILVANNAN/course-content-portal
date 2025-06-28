import React from 'react';

function DjangoSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-py fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Django Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Django Web Framework</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Django</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Django?</li>
                <li className="list-group-item">MVT Architecture</li>
                <li className="list-group-item">Features and Advantages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Setup & Installation</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Python and pip setup</li>
                <li className="list-group-item">Virtual environments</li>
                <li className="list-group-item">Django installation</li>
                <li className="list-group-item">Creating projects and apps</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-folder text-primary me-2"></i>Project Structure</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Project vs App</li>
                <li className="list-group-item">Key files and directories</li>
                <li className="list-group-item">Development server</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-code text-primary me-2"></i>Views & Templates</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Function-based views</li>
                <li className="list-group-item">Class-based views</li>
                <li className="list-group-item">Template system</li>
                <li className="list-group-item">Template inheritance</li>
                <li className="list-group-item">Passing data to templates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark text-primary me-2"></i>Static Files</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">CSS, JavaScript setup</li>
                <li className="list-group-item">Image handling</li>
                <li className="list-group-item">Static files configuration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-input-cursor-text text-primary me-2"></i>Forms</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">GET vs POST methods</li>
                <li className="list-group-item">Form handling</li>
                <li className="list-group-item">CSRF protection</li>
                <li className="list-group-item">Form validation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-person-badge text-primary me-2"></i>Admin Panel</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating superusers</li>
                <li className="list-group-item">Admin interface</li>
                <li className="list-group-item">Customizing admin</li>
                <li className="list-group-item">Complete admin panel project</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>Models & ORM</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Model creation</li>
                <li className="list-group-item">Field types</li>
                <li className="list-group-item">Migrations</li>
                <li className="list-group-item">CRUD operations</li>
                <li className="list-group-item">QuerySets</li>
                <li className="list-group-item">Aggregations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-server text-primary me-2"></i>MySQL Connectivity</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Database configuration</li>
                <li className="list-group-item">MySQL client setup</li>
                <li className="list-group-item">Database migrations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-primary me-2"></i>CRUD Operations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Complete CRUD project</li>
                <li className="list-group-item">ModelForms</li>
                <li className="list-group-item">Data validation</li>
                <li className="list-group-item">Search functionality</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-upload text-primary me-2"></i>File Upload</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">File handling</li>
                <li className="list-group-item">Image upload</li>
                <li className="list-group-item">Media configuration</li>
                <li className="list-group-item">File deletion</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cookie text-primary me-2"></i>Cookies & Sessions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cookie handling</li>
                <li className="list-group-item">Session configuration</li>
                <li className="list-group-item">Session data management</li>
                <li className="list-group-item">Authentication</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-lock text-primary me-2"></i>Authentication</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">User registration</li>
                <li className="list-group-item">Login/logout</li>
                <li className="list-group-item">Password reset</li>
                <li className="list-group-item">User permissions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-globe text-primary me-2"></i>REST Framework</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Introduction to REST</li>
                <li className="list-group-item">Serializers</li>
                <li className="list-group-item">API views</li>
                <li className="list-group-item">Authentication</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightning text-primary me-2"></i>Performance Optimization</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Caching</li>
                <li className="list-group-item">Database optimization</li>
                <li className="list-group-item">Query optimization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-check text-primary me-2"></i>Security</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Common vulnerabilities</li>
                <li className="list-group-item">CSRF protection</li>
                <li className="list-group-item">XSS prevention</li>
                <li className="list-group-item">SQL injection</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-rocket text-primary me-2"></i>Deployment</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Preparing for production</li>
                <li className="list-group-item">WSGI configuration</li>
                <li className="list-group-item">Deployment to Heroku</li>
                <li className="list-group-item">Deployment to AWS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-puzzle text-primary me-2"></i>Advanced Topics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Custom middleware</li>
                <li className="list-group-item">Signals</li>
                <li className="list-group-item">Custom template tags</li>
                <li className="list-group-item">Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DjangoSyllabus;