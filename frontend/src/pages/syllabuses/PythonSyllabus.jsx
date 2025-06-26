import React from 'react';

function PythonSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-py"></i> Python Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Python Programming</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Python</h2>
            <ul>
              <li>What is Python?</li>
              <li>Python Features and Applications</li>
              <li>Advantages and Disadvantages</li>
              <li>Python 2 vs Python 3</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Environment Setup</h2>
            <ul>
              <li>Python Installation</li>
              <li>Python IDEs</li>
              <li>Running Python Programs</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-code"></i> Basic Syntax</h2>
            <ul>
              <li>Python Identifiers and Keywords</li>
              <li>Indentation and Comments</li>
              <li>Python Statements</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> Variables and Data Types</h2>
            <ul>
              <li>Variable Declaration and Scope</li>
              <li>Standard Data Types</li>
              <li>Type Conversion</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calculator"></i> Operators</h2>
            <ul>
              <li>Arithmetic Operators</li>
              <li>Comparison Operators</li>
              <li>Logical Operators</li>
              <li>Bitwise Operators</li>
              <li>Assignment Operators</li>
              <li>Membership Operators</li>
              <li>Identity Operators</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-2"></i> Decision Making</h2>
            <ul>
              <li>if Statement</li>
              <li>if-else Statement</li>
              <li>elif Statement</li>
              <li>Nested if</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> Loops</h2>
            <ul>
              <li>for Loop</li>
              <li>while Loop</li>
              <li>Nested Loops</li>
              <li>Loop Control Statements (break, continue, pass)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Built-in Data Structures</h2>
            <ul>
              <li>Lists</li>
              <li>Tuples</li>
              <li>Dictionaries</li>
              <li>Sets</li>
              <li>Strings</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-function"></i> Functions</h2>
            <ul>
              <li>Function Definition and Calling</li>
              <li>Function Arguments</li>
              <li>Lambda Functions</li>
              <li>Recursion</li>
              <li>Global and Local Variables</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box"></i> Object-Oriented Programming</h2>
            <ul>
              <li>Classes and Objects</li>
              <li>Constructors</li>
              <li>Inheritance</li>
              <li>Polymorphism</li>
              <li>Encapsulation</li>
              <li>Abstraction</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-exclamation-triangle"></i> Exception Handling</h2>
            <ul>
              <li>Exceptions and Errors</li>
              <li>try-except Block</li>
              <li>finally Clause</li>
              <li>User-defined Exceptions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark"></i> File Handling</h2>
            <ul>
              <li>File Operations</li>
              <li>Reading and Writing Files</li>
              <li>File Modes</li>
              <li>Directory Operations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box-seam"></i> Modules and Packages</h2>
            <ul>
              <li>Importing Modules</li>
              <li>Creating Modules</li>
              <li>Standard Library Modules</li>
              <li>Package Creation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> Database Access</h2>
            <ul>
              <li>Database Connectivity</li>
              <li>MySQL with Python</li>
              <li>CRUD Operations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up"></i> Advanced Topics</h2>
            <ul>
              <li>Regular Expressions</li>
              <li>Multithreading</li>
              <li>GUI Programming (Tkinter)</li>
              <li>Networking</li>
              <li>Date and Time</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-bar-graph"></i> Data Science Basics</h2>
            <ul>
              <li>NumPy Introduction</li>
              <li>Pandas Introduction</li>
              <li>Matplotlib Basics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PythonSyllabus;