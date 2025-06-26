import React from 'react';

function ExpressJsSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-server"></i> Express.js Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Node.js Web Framework</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Express.js</h2>
            <ul>
              <li>What is Express.js?</li>
              <li>Core Features</li>
              <li>Advantages and Use Cases</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Setup and Installation</h2>
            <ul>
              <li>Environment Setup</li>
              <li>Creating Basic Server</li>
              <li>Package Management</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-signpost-split"></i> Routing</h2>
            <ul>
              <li>Basic Routing</li>
              <li>Route Methods</li>
              <li>Route Paths</li>
              <li>Route Parameters</li>
              <li>Router Module</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-code"></i> Template Engines</h2>
            <ul>
              <li>Introduction to Template Engines</li>
              <li>Pug (Jade)</li>
              <li>EJS</li>
              <li>Handlebars</li>
              <li>Setting Up Views</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-layers"></i> Middleware</h2>
            <ul>
              <li>What is Middleware?</li>
              <li>Application-level Middleware</li>
              <li>Router-level Middleware</li>
              <li>Error-handling Middleware</li>
              <li>Built-in Middleware</li>
              <li>Third-party Middleware</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-down-circle"></i> Request Object</h2>
            <ul>
              <li>Request Properties</li>
              <li>Request Methods</li>
              <li>Handling Query Parameters</li>
              <li>Handling Request Body</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-up-circle"></i> Response Object</h2>
            <ul>
              <li>Response Methods</li>
              <li>Sending Responses</li>
              <li>Setting Headers</li>
              <li>Status Codes</li>
              <li>Rendering Views</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cookie"></i> Cookies</h2>
            <ul>
              <li>Working with Cookies</li>
              <li>cookie-parser Middleware</li>
              <li>Setting Cookies</li>
              <li>Reading Cookies</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-clock-history"></i> Sessions</h2>
            <ul>
              <li>express-session Middleware</li>
              <li>Session Management</li>
              <li>Session Storage</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> REST API Development</h2>
            <ul>
              <li>REST Principles</li>
              <li>CRUD Operations</li>
              <li>Resource Routing</li>
              <li>API Best Practices</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-motherboard"></i> Database Integration</h2>
            <ul>
              <li>MongoDB with Mongoose</li>
              <li>SQL Databases</li>
              <li>ODM/ORM Concepts</li>
              <li>Models and Schemas</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> Authentication</h2>
            <ul>
              <li>Basic Authentication</li>
              <li>JWT (JSON Web Tokens)</li>
              <li>OAuth Strategies</li>
              <li>Passport.js</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-upload"></i> File Uploads</h2>
            <ul>
              <li>Handling File Uploads</li>
              <li>multer Middleware</li>
              <li>File Validation</li>
              <li>Storage Options</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-globe"></i> WebSockets</h2>
            <ul>
              <li>Real-time Communication</li>
              <li>Socket.io Integration</li>
              <li>Event Handling</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-speedometer2"></i> Performance Optimization</h2>
            <ul>
              <li>Caching Strategies</li>
              <li>Compression</li>
              <li>Cluster Mode</li>
              <li>Load Balancing</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bug"></i> Error Handling</h2>
            <ul>
              <li>Error Handling Middleware</li>
              <li>Custom Error Classes</li>
              <li>Logging Errors</li>
              <li>Debugging Techniques</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-check"></i> Security Best Practices</h2>
            <ul>
              <li>Helmet.js</li>
              <li>CSRF Protection</li>
              <li>XSS Prevention</li>
              <li>Input Validation</li>
              <li>Rate Limiting</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box"></i> API Documentation</h2>
            <ul>
              <li>Swagger/OpenAPI</li>
              <li>API Blueprint</li>
              <li>Documentation Best Practices</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cloud-arrow-up"></i> Deployment</h2>
            <ul>
              <li>PM2 Process Manager</li>
              <li>Dockerizing Express Apps</li>
              <li>Cloud Deployment</li>
              <li>Environment Configuration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up"></i> Testing</h2>
            <ul>
              <li>Unit Testing</li>
              <li>Integration Testing</li>
              <li>Test-driven Development</li>
              <li>Testing Tools (Jest, Mocha)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> Advanced Topics</h2>
            <ul>
              <li>Custom Middleware Development</li>
              <li>Express Generators</li>
              <li>Microservices Architecture</li>
              <li>Serverless Express</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpressJsSyllabus;