import React from 'react';

function PhpSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-php"></i> PHP Syllabus</h1>
          <p className="lead">Comprehensive Coverage of PHP Programming Language</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to PHP</h2>
            <ul>
              <li>What is PHP?</li>
              <li>PHP Features and Advantages</li>
              <li>PHP vs Other Languages</li>
              <li>Setting Up PHP Environment</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> PHP Basics</h2>
            <ul>
              <li>PHP Syntax Overview</li>
              <li>PHP Tags and Comments</li>
              <li>Echo vs Print Statements</li>
              <li>PHP Case Sensitivity</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tag"></i> Variables and Data Types</h2>
            <ul>
              <li>PHP Variables</li>
              <li>Data Types in PHP</li>
              <li>Type Juggling and Casting</li>
              <li>Variable Scope</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calculator"></i> Operators</h2>
            <ul>
              <li>Arithmetic Operators</li>
              <li>Assignment Operators</li>
              <li>Comparison Operators</li>
              <li>Logical Operators</li>
              <li>String Operators</li>
              <li>Ternary Operator</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-2"></i> Control Structures</h2>
            <ul>
              <li>Conditional Statements (if, else, elseif)</li>
              <li>Switch Statements</li>
              <li>Loops (while, do-while, for, foreach)</li>
              <li>Break and Continue</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-function"></i> Functions</h2>
            <ul>
              <li>Creating Functions</li>
              <li>Function Parameters</li>
              <li>Return Values</li>
              <li>Variable Functions</li>
              <li>Anonymous Functions</li>
              <li>Built-in Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Arrays</h2>
            <ul>
              <li>Indexed Arrays</li>
              <li>Associative Arrays</li>
              <li>Multidimensional Arrays</li>
              <li>Array Functions</li>
              <li>Array Iteration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-text-left"></i> Strings</h2>
            <ul>
              <li>String Creation</li>
              <li>String Concatenation</li>
              <li>Common String Functions</li>
              <li>String Formatting</li>
              <li>Regular Expressions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-globe"></i> Superglobals</h2>
            <ul>
              <li>$_GET and $_POST</li>
              <li>$_REQUEST</li>
              <li>$_SERVER</li>
              <li>$_SESSION and $_COOKIE</li>
              <li>$_FILES</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-input-cursor-text"></i> Form Handling</h2>
            <ul>
              <li>GET vs POST Methods</li>
              <li>Form Validation</li>
              <li>Sanitizing Input</li>
              <li>File Uploads</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark"></i> File Handling</h2>
            <ul>
              <li>Opening and Closing Files</li>
              <li>Reading and Writing Files</li>
              <li>File Uploads</li>
              <li>Directory Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-person-check"></i> Sessions and Cookies</h2>
            <ul>
              <li>Session Management</li>
              <li>Cookie Management</li>
              <li>Authentication Systems</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> PHP with MySQL</h2>
            <ul>
              <li>MySQLi Extension</li>
              <li>PDO (PHP Data Objects)</li>
              <li>CRUD Operations</li>
              <li>Prepared Statements</li>
              <li>Transactions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-boxes"></i> Object-Oriented PHP</h2>
            <ul>
              <li>Classes and Objects</li>
              <li>Properties and Methods</li>
              <li>Constructors and Destructors</li>
              <li>Inheritance</li>
              <li>Interfaces and Traits</li>
              <li>Magic Methods</li>
              <li>Autoloading Classes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-filetype-json"></i> PHP and JSON</h2>
            <ul>
              <li>JSON Encoding</li>
              <li>JSON Decoding</li>
              <li>Working with APIs</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> Security</h2>
            <ul>
              <li>SQL Injection Prevention</li>
              <li>XSS Prevention</li>
              <li>CSRF Protection</li>
              <li>Password Hashing</li>
              <li>Data Validation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-stack"></i> PHP Frameworks</h2>
            <ul>
              <li>Laravel</li>
              <li>CodeIgniter</li>
              <li>Symfony</li>
              <li>Yii</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-kanban"></i> Project Development</h2>
            <ul>
              <li>Contact Form System</li>
              <li>Student Management System</li>
              <li>Login/Registration System</li>
              <li>Blog System</li>
              <li>E-commerce Basics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhpSyllabus;