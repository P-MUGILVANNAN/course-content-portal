import React from 'react';

function PythonSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-py fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Python Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Python Programming</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Python</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Python?</li>
                <li className="list-group-item">Python Features and Applications</li>
                <li className="list-group-item">Advantages and Disadvantages</li>
                <li className="list-group-item">Python 2 vs Python 3</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Environment Setup</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Python Installation</li>
                <li className="list-group-item">Python IDEs</li>
                <li className="list-group-item">Running Python Programs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-code text-primary me-2"></i>Basic Syntax</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Python Identifiers and Keywords</li>
                <li className="list-group-item">Indentation and Comments</li>
                <li className="list-group-item">Python Statements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>Variables and Data Types</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Variable Declaration and Scope</li>
                <li className="list-group-item">Standard Data Types</li>
                <li className="list-group-item">Type Conversion</li>
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
                <li className="list-group-item">Comparison Operators</li>
                <li className="list-group-item">Logical Operators</li>
                <li className="list-group-item">Bitwise Operators</li>
                <li className="list-group-item">Assignment Operators</li>
                <li className="list-group-item">Membership Operators</li>
                <li className="list-group-item">Identity Operators</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-2 text-primary me-2"></i>Decision Making</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">if Statement</li>
                <li className="list-group-item">if-else Statement</li>
                <li className="list-group-item">elif Statement</li>
                <li className="list-group-item">Nested if</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-primary me-2"></i>Loops</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">for Loop</li>
                <li className="list-group-item">while Loop</li>
                <li className="list-group-item">Nested Loops</li>
                <li className="list-group-item">Loop Control Statements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-collection text-primary me-2"></i>Built-in Data Structures</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Lists</li>
                <li className="list-group-item">Tuples</li>
                <li className="list-group-item">Dictionaries</li>
                <li className="list-group-item">Sets</li>
                <li className="list-group-item">Strings</li>
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
                <li className="list-group-item">Function Definition</li>
                <li className="list-group-item">Function Arguments</li>
                <li className="list-group-item">Lambda Functions</li>
                <li className="list-group-item">Recursion</li>
                <li className="list-group-item">Variable Scope</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-box text-primary me-2"></i>Object-Oriented Programming</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Classes and Objects</li>
                <li className="list-group-item">Constructors</li>
                <li className="list-group-item">Inheritance</li>
                <li className="list-group-item">Polymorphism</li>
                <li className="list-group-item">Encapsulation</li>
                <li className="list-group-item">Abstraction</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-exclamation-triangle text-primary me-2"></i>Exception Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Exceptions and Errors</li>
                <li className="list-group-item">try-except Block</li>
                <li className="list-group-item">finally Clause</li>
                <li className="list-group-item">User-defined Exceptions</li>
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
                <li className="list-group-item">File Operations</li>
                <li className="list-group-item">Reading and Writing</li>
                <li className="list-group-item">File Modes</li>
                <li className="list-group-item">Directory Operations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-box-seam text-primary me-2"></i>Modules and Packages</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Importing Modules</li>
                <li className="list-group-item">Creating Modules</li>
                <li className="list-group-item">Standard Library</li>
                <li className="list-group-item">Package Creation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>Database Access</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Database Connectivity</li>
                <li className="list-group-item">MySQL with Python</li>
                <li className="list-group-item">CRUD Operations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-graph-up text-primary me-2"></i>Advanced Topics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Regular Expressions</li>
                <li className="list-group-item">Multithreading</li>
                <li className="list-group-item">GUI Programming</li>
                <li className="list-group-item">Networking</li>
                <li className="list-group-item">Date and Time</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-bar-graph text-primary me-2"></i>Data Science Basics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">NumPy Introduction</li>
                <li className="list-group-item">Pandas Introduction</li>
                <li className="list-group-item">Matplotlib Basics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PythonSyllabus;