import React from 'react';

function JavascriptSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-js fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">JavaScript Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of JavaScript Programming</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to JavaScript</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is JavaScript?</li>
                <li className="list-group-item">JavaScript vs ECMAScript</li>
                <li className="list-group-item">Client-side vs Server-side</li>
                <li className="list-group-item">JavaScript engines</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>JavaScript Basics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Including JavaScript in HTML</li>
                <li className="list-group-item">JavaScript syntax</li>
                <li className="list-group-item">Comments</li>
                <li className="list-group-item">Output methods</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-list-check text-primary me-2"></i>Data Types and Variables</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Primitive data types</li>
                <li className="list-group-item">Reference data types</li>
                <li className="list-group-item">Variables (var, let, const)</li>
                <li className="list-group-item">Type conversion</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-calculator text-primary me-2"></i>Operators and Expressions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Arithmetic operators</li>
                <li className="list-group-item">Assignment operators</li>
                <li className="list-group-item">Comparison operators</li>
                <li className="list-group-item">Logical operators</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-2 text-primary me-2"></i>Control Flow</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Conditional statements</li>
                <li className="list-group-item">Loops</li>
                <li className="list-group-item">Break and continue</li>
                <li className="list-group-item">Error handling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Functions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Function declarations</li>
                <li className="list-group-item">Parameters and arguments</li>
                <li className="list-group-item">Return values</li>
                <li className="list-group-item">Arrow functions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-collection text-primary me-2"></i>Objects and Prototypes</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Object literals</li>
                <li className="list-group-item">Properties and methods</li>
                <li className="list-group-item">Constructor functions</li>
                <li className="list-group-item">Prototypes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-grid-3x3 text-primary me-2"></i>Arrays</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Array creation</li>
                <li className="list-group-item">Array methods</li>
                <li className="list-group-item">Iterating over arrays</li>
                <li className="list-group-item">Array destructuring</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-type text-primary me-2"></i>Strings</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">String creation</li>
                <li className="list-group-item">String methods</li>
                <li className="list-group-item">Template literals</li>
                <li className="list-group-item">Regular expressions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layers text-primary me-2"></i>Classes and Modules</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Class syntax</li>
                <li className="list-group-item">Constructors</li>
                <li className="list-group-item">Inheritance</li>
                <li className="list-group-item">Modules (import/export)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-return-right text-primary me-2"></i>Asynchronous JavaScript</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Callbacks</li>
                <li className="list-group-item">Promises</li>
                <li className="list-group-item">Async/await</li>
                <li className="list-group-item">Fetch API</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-code text-primary me-2"></i>DOM Manipulation</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">DOM tree structure</li>
                <li className="list-group-item">Selecting elements</li>
                <li className="list-group-item">Modifying elements</li>
                <li className="list-group-item">Event handling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-window text-primary me-2"></i>Browser Object Model</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Window object</li>
                <li className="list-group-item">Location object</li>
                <li className="list-group-item">History object</li>
                <li className="list-group-item">Timing functions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-stars text-primary me-2"></i>ES6+ Features</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Let and const</li>
                <li className="list-group-item">Template literals</li>
                <li className="list-group-item">Destructuring</li>
                <li className="list-group-item">Optional chaining</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tools text-primary me-2"></i>Debugging and Tools</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Developer tools</li>
                <li className="list-group-item">Console methods</li>
                <li className="list-group-item">Linting tools</li>
                <li className="list-group-item">Testing frameworks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-graph-up text-primary me-2"></i>Performance Optimization</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Minification</li>
                <li className="list-group-item">Lazy loading</li>
                <li className="list-group-item">Memory management</li>
                <li className="list-group-item">Performance profiling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-server text-primary me-2"></i>Server-side JavaScript</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Node.js introduction</li>
                <li className="list-group-item">npm</li>
                <li className="list-group-item">CommonJS modules</li>
                <li className="list-group-item">Basic server creation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightning text-primary me-2"></i>Modern Frameworks</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React.js overview</li>
                <li className="list-group-item">Vue.js overview</li>
                <li className="list-group-item">Angular overview</li>
                <li className="list-group-item">Framework selection</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-check-circle text-primary me-2"></i>Best Practices</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Coding standards</li>
                <li className="list-group-item">Error handling</li>
                <li className="list-group-item">Code organization</li>
                <li className="list-group-item">Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavascriptSyllabus;