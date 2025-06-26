import React from 'react';

function LaravelSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-php"></i> Laravel Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Laravel PHP Framework</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Laravel</h2>
            <ul>
              <li>What is Laravel?</li>
              <li>Laravel Features</li>
              <li>MVC Architecture</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-download"></i> Installation & Setup</h2>
            <ul>
              <li>System Requirements</li>
              <li>Composer Installation</li>
              <li>Laravel Project Creation</li>
              <li>Directory Structure</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-signpost"></i> Routing</h2>
            <ul>
              <li>Basic Routing</li>
              <li>Route Parameters</li>
              <li>Named Routes</li>
              <li>Route Groups</li>
              <li>Route Middleware</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cpu"></i> Controllers</h2>
            <ul>
              <li>Creating Controllers</li>
              <li>Controller Methods</li>
              <li>Resource Controllers</li>
              <li>Dependency Injection</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-text"></i> Views & Blade Templating</h2>
            <ul>
              <li>Blade Syntax</li>
              <li>Template Inheritance</li>
              <li>Components & Slots</li>
              <li>Displaying Data</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> Eloquent ORM</h2>
            <ul>
              <li>Creating Models</li>
              <li>CRUD Operations</li>
              <li>Relationships</li>
              <li>Query Scopes</li>
              <li>Accessors & Mutators</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> Database Migrations</h2>
            <ul>
              <li>Creating Migrations</li>
              <li>Migration Structure</li>
              <li>Running Migrations</li>
              <li>Rolling Back Migrations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-input-cursor-text"></i> Forms & Validation</h2>
            <ul>
              <li>Form Handling</li>
              <li>CSRF Protection</li>
              <li>Validation Rules</li>
              <li>Custom Validation</li>
              <li>Error Messages</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> Authentication</h2>
            <ul>
              <li>User Registration</li>
              <li>Login/Logout</li>
              <li>Password Reset</li>
              <li>Email Verification</li>
              <li>Laravel Breeze</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-arrow-up"></i> File Uploads & Storage</h2>
            <ul>
              <li>File Upload Handling</li>
              <li>Storage System</li>
              <li>Public vs Private Disks</li>
              <li>File Validation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-plug"></i> API Development</h2>
            <ul>
              <li>API Routes</li>
              <li>API Resources</li>
              <li>Authentication (Sanctum)</li>
              <li>API Versioning</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-filter"></i> Middleware</h2>
            <ul>
              <li>Creating Middleware</li>
              <li>Registering Middleware</li>
              <li>Route Middleware</li>
              <li>Global Middleware</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bug"></i> Error Handling</h2>
            <ul>
              <li>Try-Catch Blocks</li>
              <li>Custom Error Pages</li>
              <li>Logging Errors</li>
              <li>Debug Mode</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-terminal"></i> Artisan Commands</h2>
            <ul>
              <li>Common Commands</li>
              <li>Creating Commands</li>
              <li>Scheduled Commands</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightbulb"></i> Project Ideas</h2>
            <ul>
              <li>Student Management System</li>
              <li>Job Portal</li>
              <li>E-Commerce System</li>
              <li>Blog Platform</li>
              <li>Inventory Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaravelSyllabus;