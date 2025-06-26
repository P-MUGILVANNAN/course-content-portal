import React from 'react';

function JavascriptSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-js"></i> JavaScript Syllabus</h1>
          <p className="lead">Comprehensive Coverage of JavaScript Programming</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to JavaScript</h2>
            <ul>
              <li>What is JavaScript?</li>
              <li>JavaScript vs ECMAScript</li>
              <li>Client-side vs Server-side JavaScript</li>
              <li>JavaScript engines (V8, SpiderMonkey, etc.)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> JavaScript Basics</h2>
            <ul>
              <li>Including JavaScript in HTML</li>
              <li>JavaScript syntax and statements</li>
              <li>Comments in JavaScript</li>
              <li>Basic output methods</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-list-check"></i> Data Types and Variables</h2>
            <ul>
              <li>Primitive data types (number, string, boolean, etc.)</li>
              <li>Reference data types (objects, arrays)</li>
              <li>Variables (var, let, const)</li>
              <li>Type conversion and coercion</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calculator"></i> Operators and Expressions</h2>
            <ul>
              <li>Arithmetic operators</li>
              <li>Assignment operators</li>
              <li>Comparison operators</li>
              <li>Logical operators</li>
              <li>Bitwise operators</li>
              <li>Ternary operator</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-2"></i> Control Flow</h2>
            <ul>
              <li>Conditional statements (if, else, switch)</li>
              <li>Loops (for, while, do-while)</li>
              <li>Break and continue statements</li>
              <li>Error handling (try, catch, finally)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Functions</h2>
            <ul>
              <li>Function declarations and expressions</li>
              <li>Parameters and arguments</li>
              <li>Return values</li>
              <li>Function scope</li>
              <li>Arrow functions</li>
              <li>Immediately Invoked Function Expressions (IIFE)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Objects and Prototypes</h2>
            <ul>
              <li>Object literals</li>
              <li>Properties and methods</li>
              <li>Constructor functions</li>
              <li>Prototypes and inheritance</li>
              <li>this keyword</li>
              <li>Object destructuring</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-grid-3x3"></i> Arrays</h2>
            <ul>
              <li>Array creation and manipulation</li>
              <li>Array methods (push, pop, slice, splice, etc.)</li>
              <li>Iterating over arrays</li>
              <li>Multidimensional arrays</li>
              <li>Array destructuring</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-type"></i> Strings</h2>
            <ul>
              <li>String creation and manipulation</li>
              <li>String methods (indexOf, slice, replace, etc.)</li>
              <li>Template literals</li>
              <li>Regular expressions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-layers"></i> Classes and Modules</h2>
            <ul>
              <li>Class syntax</li>
              <li>Constructors</li>
              <li>Methods and properties</li>
              <li>Inheritance (extends)</li>
              <li>Static methods</li>
              <li>Modules (import/export)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-return-right"></i> Asynchronous JavaScript</h2>
            <ul>
              <li>Callbacks</li>
              <li>Promises</li>
              <li>Async/await</li>
              <li>Fetch API</li>
              <li>AJAX</li>
              <li>Event loop</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-code"></i> DOM Manipulation</h2>
            <ul>
              <li>DOM tree structure</li>
              <li>Selecting elements</li>
              <li>Modifying elements</li>
              <li>Creating and removing elements</li>
              <li>Event handling</li>
              <li>Forms and validation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-window"></i> Browser Object Model (BOM)</h2>
            <ul>
              <li>Window object</li>
              <li>Location object</li>
              <li>History object</li>
              <li>Navigator object</li>
              <li>Screen object</li>
              <li>Timing functions (setTimeout, setInterval)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-storage"></i> Storage</h2>
            <ul>
              <li>Cookies</li>
              <li>LocalStorage</li>
              <li>SessionStorage</li>
              <li>IndexedDB</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> Advanced Concepts</h2>
            <ul>
              <li>Closures</li>
              <li>Hoisting</li>
              <li>Currying</li>
              <li>Memoization</li>
              <li>Debouncing and throttling</li>
              <li>Web Workers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-stars"></i> ES6+ Features</h2>
            <ul>
              <li>Let and const</li>
              <li>Template literals</li>
              <li>Destructuring</li>
              <li>Spread/rest operators</li>
              <li>Default parameters</li>
              <li>Optional chaining</li>
              <li>Nullish coalescing</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tools"></i> Debugging and Tools</h2>
            <ul>
              <li>Browser developer tools</li>
              <li>Console methods</li>
              <li>Debugging techniques</li>
              <li>Linting tools (ESLint)</li>
              <li>Testing frameworks (Jest, Mocha)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-check"></i> Security</h2>
            <ul>
              <li>Cross-site scripting (XSS)</li>
              <li>Cross-site request forgery (CSRF)</li>
              <li>Content Security Policy (CSP)</li>
              <li>Same-origin policy</li>
              <li>CORS</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up"></i> Performance Optimization</h2>
            <ul>
              <li>Minification and bundling</li>
              <li>Lazy loading</li>
              <li>Debouncing and throttling</li>
              <li>Memory management</li>
              <li>Performance profiling</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-server"></i> Server-side JavaScript</h2>
            <ul>
              <li>Introduction to Node.js</li>
              <li>npm and package management</li>
              <li>CommonJS modules</li>
              <li>Basic server creation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightning"></i> Modern JavaScript Frameworks</h2>
            <ul>
              <li>React.js overview</li>
              <li>Vue.js overview</li>
              <li>Angular overview</li>
              <li>Choosing a framework</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-check-circle"></i> Best Practices</h2>
            <ul>
              <li>Coding standards</li>
              <li>Error handling</li>
              <li>Code organization</li>
              <li>Documentation</li>
              <li>Version control</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavascriptSyllabus;