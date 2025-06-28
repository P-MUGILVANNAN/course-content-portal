import React from 'react';

function LaravelSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-php fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Laravel Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Laravel PHP Framework</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Laravel</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Laravel?</li>
                <li className="list-group-item">Laravel Features</li>
                <li className="list-group-item">MVC Architecture</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-download text-primary me-2"></i>Installation & Setup</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">System Requirements</li>
                <li className="list-group-item">Composer Installation</li>
                <li className="list-group-item">Laravel Project Creation</li>
                <li className="list-group-item">Directory Structure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-signpost text-primary me-2"></i>Routing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic Routing</li>
                <li className="list-group-item">Route Parameters</li>
                <li className="list-group-item">Named Routes</li>
                <li className="list-group-item">Route Groups</li>
                <li className="list-group-item">Route Middleware</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cpu text-primary me-2"></i>Controllers</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating Controllers</li>
                <li className="list-group-item">Controller Methods</li>
                <li className="list-group-item">Resource Controllers</li>
                <li className="list-group-item">Dependency Injection</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-text text-primary me-2"></i>Views & Blade Templating</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Blade Syntax</li>
                <li className="list-group-item">Template Inheritance</li>
                <li className="list-group-item">Components & Slots</li>
                <li className="list-group-item">Displaying Data</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>Eloquent ORM</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating Models</li>
                <li className="list-group-item">CRUD Operations</li>
                <li className="list-group-item">Relationships</li>
                <li className="list-group-item">Query Scopes</li>
                <li className="list-group-item">Accessors & Mutators</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-primary me-2"></i>Database Migrations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating Migrations</li>
                <li className="list-group-item">Migration Structure</li>
                <li className="list-group-item">Running Migrations</li>
                <li className="list-group-item">Rolling Back Migrations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-input-cursor-text text-primary me-2"></i>Forms & Validation</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Form Handling</li>
                <li className="list-group-item">CSRF Protection</li>
                <li className="list-group-item">Validation Rules</li>
                <li className="list-group-item">Custom Validation</li>
                <li className="list-group-item">Error Messages</li>
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
                <li className="list-group-item">User Registration</li>
                <li className="list-group-item">Login/Logout</li>
                <li className="list-group-item">Password Reset</li>
                <li className="list-group-item">Email Verification</li>
                <li className="list-group-item">Laravel Breeze</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-arrow-up text-primary me-2"></i>File Uploads & Storage</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">File Upload Handling</li>
                <li className="list-group-item">Storage System</li>
                <li className="list-group-item">Public vs Private Disks</li>
                <li className="list-group-item">File Validation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-plug text-primary me-2"></i>API Development</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">API Routes</li>
                <li className="list-group-item">API Resources</li>
                <li className="list-group-item">Authentication (Sanctum)</li>
                <li className="list-group-item">API Versioning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-filter text-primary me-2"></i>Middleware</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating Middleware</li>
                <li className="list-group-item">Registering Middleware</li>
                <li className="list-group-item">Route Middleware</li>
                <li className="list-group-item">Global Middleware</li>
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
                <li className="list-group-item">Try-Catch Blocks</li>
                <li className="list-group-item">Custom Error Pages</li>
                <li className="list-group-item">Logging Errors</li>
                <li className="list-group-item">Debug Mode</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-terminal text-primary me-2"></i>Artisan Commands</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Common Commands</li>
                <li className="list-group-item">Creating Commands</li>
                <li className="list-group-item">Scheduled Commands</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightbulb text-primary me-2"></i>Project Ideas</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Student Management System</li>
                <li className="list-group-item">Job Portal</li>
                <li className="list-group-item">E-Commerce System</li>
                <li className="list-group-item">Blog Platform</li>
                <li className="list-group-item">Inventory Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaravelSyllabus;