import React from 'react';

function PhpSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-php fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">PHP Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of PHP Programming Language</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to PHP</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is PHP?</li>
                <li className="list-group-item">PHP Features and Advantages</li>
                <li className="list-group-item">PHP vs Other Languages</li>
                <li className="list-group-item">Setting Up PHP Environment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>PHP Basics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">PHP Syntax Overview</li>
                <li className="list-group-item">PHP Tags and Comments</li>
                <li className="list-group-item">Echo vs Print Statements</li>
                <li className="list-group-item">PHP Case Sensitivity</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tag text-primary me-2"></i>Variables and Data Types</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">PHP Variables</li>
                <li className="list-group-item">Data Types in PHP</li>
                <li className="list-group-item">Type Juggling and Casting</li>
                <li className="list-group-item">Variable Scope</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-calculator text-primary me-2"></i>Operators</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Arithmetic Operators</li>
                <li className="list-group-item">Assignment Operators</li>
                <li className="list-group-item">Comparison Operators</li>
                <li className="list-group-item">Logical Operators</li>
                <li className="list-group-item">String Operators</li>
                <li className="list-group-item">Ternary Operator</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-2 text-primary me-2"></i>Control Structures</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Conditional Statements</li>
                <li className="list-group-item">Switch Statements</li>
                <li className="list-group-item">Loops (while, do-while, for, foreach)</li>
                <li className="list-group-item">Break and Continue</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-function text-primary me-2"></i>Functions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating Functions</li>
                <li className="list-group-item">Function Parameters</li>
                <li className="list-group-item">Return Values</li>
                <li className="list-group-item">Variable Functions</li>
                <li className="list-group-item">Anonymous Functions</li>
                <li className="list-group-item">Built-in Functions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-collection text-primary me-2"></i>Arrays</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Indexed Arrays</li>
                <li className="list-group-item">Associative Arrays</li>
                <li className="list-group-item">Multidimensional Arrays</li>
                <li className="list-group-item">Array Functions</li>
                <li className="list-group-item">Array Iteration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-text-left text-primary me-2"></i>Strings</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">String Creation</li>
                <li className="list-group-item">String Concatenation</li>
                <li className="list-group-item">Common String Functions</li>
                <li className="list-group-item">String Formatting</li>
                <li className="list-group-item">Regular Expressions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-globe text-primary me-2"></i>Superglobals</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">$_GET and $_POST</li>
                <li className="list-group-item">$_REQUEST</li>
                <li className="list-group-item">$_SERVER</li>
                <li className="list-group-item">$_SESSION and $_COOKIE</li>
                <li className="list-group-item">$_FILES</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-input-cursor-text text-primary me-2"></i>Form Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">GET vs POST Methods</li>
                <li className="list-group-item">Form Validation</li>
                <li className="list-group-item">Sanitizing Input</li>
                <li className="list-group-item">File Uploads</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark text-primary me-2"></i>File Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Opening and Closing Files</li>
                <li className="list-group-item">Reading and Writing Files</li>
                <li className="list-group-item">File Uploads</li>
                <li className="list-group-item">Directory Functions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-person-check text-primary me-2"></i>Sessions and Cookies</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Session Management</li>
                <li className="list-group-item">Cookie Management</li>
                <li className="list-group-item">Authentication Systems</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>PHP with MySQL</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">MySQLi Extension</li>
                <li className="list-group-item">PDO (PHP Data Objects)</li>
                <li className="list-group-item">CRUD Operations</li>
                <li className="list-group-item">Prepared Statements</li>
                <li className="list-group-item">Transactions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-boxes text-primary me-2"></i>Object-Oriented PHP</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Classes and Objects</li>
                <li className="list-group-item">Properties and Methods</li>
                <li className="list-group-item">Constructors and Destructors</li>
                <li className="list-group-item">Inheritance</li>
                <li className="list-group-item">Interfaces and Traits</li>
                <li className="list-group-item">Magic Methods</li>
                <li className="list-group-item">Autoloading Classes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-filetype-json text-primary me-2"></i>PHP and JSON</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">JSON Encoding</li>
                <li className="list-group-item">JSON Decoding</li>
                <li className="list-group-item">Working with APIs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-lock text-primary me-2"></i>Security</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">SQL Injection Prevention</li>
                <li className="list-group-item">XSS Prevention</li>
                <li className="list-group-item">CSRF Protection</li>
                <li className="list-group-item">Password Hashing</li>
                <li className="list-group-item">Data Validation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-stack text-primary me-2"></i>PHP Frameworks</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Laravel</li>
                <li className="list-group-item">CodeIgniter</li>
                <li className="list-group-item">Symfony</li>
                <li className="list-group-item">Yii</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-kanban text-primary me-2"></i>Project Development</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Contact Form System</li>
                <li className="list-group-item">Student Management System</li>
                <li className="list-group-item">Login/Registration System</li>
                <li className="list-group-item">Blog System</li>
                <li className="list-group-item">E-commerce Basics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhpSyllabus;