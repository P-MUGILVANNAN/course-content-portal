import React from 'react';

function NodeJsSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-node-plus"></i> Node.js Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Server-Side JavaScript</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Node.js</h2>
            <ul>
              <li>What is Node.js?</li>
              <li>Node.js Architecture</li>
              <li>Event-Driven Programming</li>
              <li>Non-Blocking I/O</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Node.js Setup</h2>
            <ul>
              <li>Installation & Environment Setup</li>
              <li>Node.js REPL</li>
              <li>Running Node.js Applications</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box"></i> Modules & NPM</h2>
            <ul>
              <li>Core Modules</li>
              <li>Creating Custom Modules</li>
              <li>NPM (Node Package Manager)</li>
              <li>package.json Configuration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-globe"></i> Global Objects</h2>
            <ul>
              <li>__dirname and __filename</li>
              <li>process Object</li>
              <li>console Object</li>
              <li>Timer Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark"></i> File System</h2>
            <ul>
              <li>Synchronous vs Asynchronous Operations</li>
              <li>Reading/Writing Files</li>
              <li>Working with Directories</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightning"></i> Events</h2>
            <ul>
              <li>EventEmitter Class</li>
              <li>Creating Custom Events</li>
              <li>Error Events</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-pipe"></i> Streams</h2>
            <ul>
              <li>Readable Streams</li>
              <li>Writable Streams</li>
              <li>Duplex Streams</li>
              <li>Transform Streams</li>
              <li>Piping Streams</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-memory"></i> Buffers</h2>
            <ul>
              <li>Creating Buffers</li>
              <li>Buffer Operations</li>
              <li>Encoding/Decoding</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-server"></i> Web Server</h2>
            <ul>
              <li>HTTP Module</li>
              <li>Creating Web Server</li>
              <li>Handling Requests</li>
              <li>Serving Static Files</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> Database Connectivity</h2>
            <ul>
              <li>MongoDB with Mongoose</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-plug"></i> RESTful APIs</h2>
            <ul>
              <li>REST Principles</li>
              <li>Creating RESTful Services</li>
              <li>CRUD Operations</li>
              <li>Express Framework</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> Authentication</h2>
            <ul>
              <li>JWT (JSON Web Tokens)</li>
              <li>OAuth</li>
              <li>Passport.js</li>
              <li>Session Management</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cloud"></i> Web Sockets</h2>
            <ul>
              <li>Socket.io</li>
              <li>Real-time Communication</li>
              <li>Chat Applications</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up"></i> Performance</h2>
            <ul>
              <li>Cluster Module</li>
              <li>Load Balancing</li>
              <li>Caching Strategies</li>
              <li>Performance Monitoring</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bug"></i> Debugging</h2>
            <ul>
              <li>Debug Module</li>
              <li>Node Inspector</li>
              <li>Logging Strategies</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-check"></i> Security</h2>
            <ul>
              <li>Common Vulnerabilities</li>
              <li>Helmet.js</li>
              <li>Input Validation</li>
              <li>Secure Headers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-rocket"></i> Deployment</h2>
            <ul>
              <li>PM2 Process Manager</li>
              <li>Dockerizing Node.js Apps</li>
              <li>Cloud Deployment</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> Advanced Topics</h2>
            <ul>
              <li>Worker Threads</li>
              <li>Child Processes</li>
              <li>Microservices Architecture</li>
              <li>GraphQL</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-hammer"></i> Best Practices</h2>
            <ul>
              <li>Error Handling</li>
              <li>Code Organization</li>
              <li>Testing Strategies</li>
              <li>Production Considerations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NodeJsSyllabus;