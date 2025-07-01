import React from 'react';

function ExpressJsSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-server fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Express.js Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Node.js Web Framework</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Express.js</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Express.js?</li>
                <li className="list-group-item">Core Features</li>
                <li className="list-group-item">Advantages and Use Cases</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Setup and Installation</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Environment Setup</li>
                <li className="list-group-item">Creating Basic Server</li>
                <li className="list-group-item">Package Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-signpost-split text-primary me-2"></i>Routing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic Routing</li>
                <li className="list-group-item">Route Methods</li>
                <li className="list-group-item">Route Paths</li>
                <li className="list-group-item">Route Parameters</li>
                <li className="list-group-item">Router Module</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-code text-primary me-2"></i>Template Engines</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Introduction to Template Engines</li>
                <li className="list-group-item">Pug (Jade)</li>
                <li className="list-group-item">EJS</li>
                <li className="list-group-item">Handlebars</li>
                <li className="list-group-item">Setting Up Views</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layers text-primary me-2"></i>Middleware</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Middleware?</li>
                <li className="list-group-item">Application-level Middleware</li>
                <li className="list-group-item">Router-level Middleware</li>
                <li className="list-group-item">Error-handling Middleware</li>
                <li className="list-group-item">Built-in Middleware</li>
                <li className="list-group-item">Third-party Middleware</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-down-circle text-primary me-2"></i>Request Object</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Request Properties</li>
                <li className="list-group-item">Request Methods</li>
                <li className="list-group-item">Handling Query Parameters</li>
                <li className="list-group-item">Handling Request Body</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-up-circle text-primary me-2"></i>Response Object</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Response Methods</li>
                <li className="list-group-item">Sending Responses</li>
                <li className="list-group-item">Setting Headers</li>
                <li className="list-group-item">Status Codes</li>
                <li className="list-group-item">Rendering Views</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cookie text-primary me-2"></i>Cookies</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Working with Cookies</li>
                <li className="list-group-item">cookie-parser Middleware</li>
                <li className="list-group-item">Setting Cookies</li>
                <li className="list-group-item">Reading Cookies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-clock-history text-primary me-2"></i>Sessions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">express-session Middleware</li>
                <li className="list-group-item">Session Management</li>
                <li className="list-group-item">Session Storage</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>REST API Development</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">REST Principles</li>
                <li className="list-group-item">CRUD Operations</li>
                <li className="list-group-item">Resource Routing</li>
                <li className="list-group-item">API Best Practices</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-motherboard text-primary me-2"></i>Database Integration</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">MongoDB with Mongoose</li>
                <li className="list-group-item">SQL Databases</li>
                <li className="list-group-item">ODM/ORM Concepts</li>
                <li className="list-group-item">Models and Schemas</li>
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
                <li className="list-group-item">Basic Authentication</li>
                <li className="list-group-item">JWT (JSON Web Tokens)</li>
                <li className="list-group-item">OAuth Strategies</li>
                <li className="list-group-item">Passport.js</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-upload text-primary me-2"></i>File Uploads</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Handling File Uploads</li>
                <li className="list-group-item">multer Middleware</li>
                <li className="list-group-item">File Validation</li>
                <li className="list-group-item">Storage Options</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bug text-primary me-2"></i>Error Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Error Handling Middleware</li>
                <li className="list-group-item">Custom Error Classes</li>
                <li className="list-group-item">Logging Errors</li>
                <li className="list-group-item">Debugging Techniques</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-check text-primary me-2"></i>Security Best Practices</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">CSRF Protection</li>
                <li className="list-group-item">Input Validation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpressJsSyllabus;