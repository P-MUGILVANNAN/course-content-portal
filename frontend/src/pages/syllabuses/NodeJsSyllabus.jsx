import React from 'react';

function NodeJsSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-node-plus fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Node.js Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Server-Side JavaScript</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Node.js</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Node.js?</li>
                <li className="list-group-item">Node.js Architecture</li>
                <li className="list-group-item">Event-Driven Programming</li>
                <li className="list-group-item">Non-Blocking I/O</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Node.js Setup</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Installation & Environment Setup</li>
                <li className="list-group-item">Node.js REPL</li>
                <li className="list-group-item">Running Node.js Applications</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-box text-primary me-2"></i>Modules & NPM</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Core Modules</li>
                <li className="list-group-item">Creating Custom Modules</li>
                <li className="list-group-item">NPM (Node Package Manager)</li>
                <li className="list-group-item">package.json Configuration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-globe text-primary me-2"></i>Global Objects</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">__dirname and __filename</li>
                <li className="list-group-item">process Object</li>
                <li className="list-group-item">console Object</li>
                <li className="list-group-item">Timer Functions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark text-primary me-2"></i>File System</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Synchronous vs Asynchronous Operations</li>
                <li className="list-group-item">Reading/Writing Files</li>
                <li className="list-group-item">Working with Directories</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightning text-primary me-2"></i>Events</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">EventEmitter Class</li>
                <li className="list-group-item">Creating Custom Events</li>
                <li className="list-group-item">Error Events</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-pipe text-primary me-2"></i>Streams</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Readable Streams</li>
                <li className="list-group-item">Writable Streams</li>
                <li className="list-group-item">Duplex Streams</li>
                <li className="list-group-item">Transform Streams</li>
                <li className="list-group-item">Piping Streams</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-memory text-primary me-2"></i>Buffers</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating Buffers</li>
                <li className="list-group-item">Buffer Operations</li>
                <li className="list-group-item">Encoding/Decoding</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-server text-primary me-2"></i>Web Server</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HTTP Module</li>
                <li className="list-group-item">Creating Web Server</li>
                <li className="list-group-item">Handling Requests</li>
                <li className="list-group-item">Serving Static Files</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>Database Connectivity</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">MongoDB with Mongoose</li>
                <li className="list-group-item">MySQL</li>
                <li className="list-group-item">PostgreSQL</li>
                <li className="list-group-item">Redis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-plug text-primary me-2"></i>RESTful APIs</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">REST Principles</li>
                <li className="list-group-item">Creating RESTful Services</li>
                <li className="list-group-item">CRUD Operations</li>
                <li className="list-group-item">Express Framework</li>
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
                <li className="list-group-item">JWT (JSON Web Tokens)</li>
                <li className="list-group-item">OAuth</li>
                <li className="list-group-item">Passport.js</li>
                <li className="list-group-item">Session Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cloud text-primary me-2"></i>Web Sockets</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Socket.io</li>
                <li className="list-group-item">Real-time Communication</li>
                <li className="list-group-item">Chat Applications</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-graph-up text-primary me-2"></i>Performance</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cluster Module</li>
                <li className="list-group-item">Load Balancing</li>
                <li className="list-group-item">Caching Strategies</li>
                <li className="list-group-item">Performance Monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bug text-primary me-2"></i>Debugging</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Debug Module</li>
                <li className="list-group-item">Node Inspector</li>
                <li className="list-group-item">Logging Strategies</li>
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
                <li className="list-group-item">Common Vulnerabilities</li>
                <li className="list-group-item">Helmet.js</li>
                <li className="list-group-item">Input Validation</li>
                <li className="list-group-item">Secure Headers</li>
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
                <li className="list-group-item">PM2 Process Manager</li>
                <li className="list-group-item">Dockerizing Node.js Apps</li>
                <li className="list-group-item">Cloud Deployment</li>
                <li className="list-group-item">CI/CD Pipelines</li>
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
                <li className="list-group-item">Worker Threads</li>
                <li className="list-group-item">Child Processes</li>
                <li className="list-group-item">Microservices Architecture</li>
                <li className="list-group-item">GraphQL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-hammer text-primary me-2"></i>Best Practices</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Error Handling</li>
                <li className="list-group-item">Code Organization</li>
                <li className="list-group-item">Testing Strategies</li>
                <li className="list-group-item">Production Considerations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NodeJsSyllabus;