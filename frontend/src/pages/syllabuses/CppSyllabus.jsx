import React from 'react';

function CppSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-cpp fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">C++ Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of C++ Programming Language</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to C++</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is C++?</li>
                <li className="list-group-item">History and Evolution</li>
                <li className="list-group-item">Features of C++</li>
                <li className="list-group-item">Difference between C and C++</li>
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
                <li className="list-group-item">Installing C++ Compiler</li>
                <li className="list-group-item">Setting up IDE</li>
                <li className="list-group-item">Writing First C++ Program</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-code text-primary me-2"></i>Basic Syntax</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">C++ Program Structure</li>
                <li className="list-group-item">Tokens and Keywords</li>
                <li className="list-group-item">Comments</li>
                <li className="list-group-item">Namespaces</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-card-list text-primary me-2"></i>Data Types and Variables</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Primitive Data Types</li>
                <li className="list-group-item">Derived Data Types</li>
                <li className="list-group-item">User-defined Data Types</li>
                <li className="list-group-item">Variable Declaration</li>
                <li className="list-group-item">Constants and Literals</li>
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
                <li className="list-group-item">Relational Operators</li>
                <li className="list-group-item">Logical Operators</li>
                <li className="list-group-item">Bitwise Operators</li>
                <li className="list-group-item">Assignment Operators</li>
                <li className="list-group-item">Operator Precedence</li>
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
                <li className="list-group-item">Decision Making</li>
                <li className="list-group-item">Loops</li>
                <li className="list-group-item">Jump Statements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>Functions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Function Definition</li>
                <li className="list-group-item">Function Parameters</li>
                <li className="list-group-item">Function Overloading</li>
                <li className="list-group-item">Recursion</li>
                <li className="list-group-item">Inline Functions</li>
                <li className="list-group-item">Lambda Expressions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-collection text-primary me-2"></i>Arrays and Strings</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Multi-dimensional Arrays</li>
                <li className="list-group-item">Array to Function</li>
                <li className="list-group-item">C-style Strings</li>
                <li className="list-group-item">String Class</li>
                <li className="list-group-item">String Functions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-boxes text-primary me-2"></i>Object-Oriented Programming</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Classes and Objects</li>
                <li className="list-group-item">Constructors/Destructors</li>
                <li className="list-group-item">Access Modifiers</li>
                <li className="list-group-item">Encapsulation</li>
                <li className="list-group-item">Inheritance</li>
                <li className="list-group-item">Polymorphism</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cursor text-primary me-2"></i>Pointers</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Pointer Basics</li>
                <li className="list-group-item">Pointer Arithmetic</li>
                <li className="list-group-item">Pointers and Arrays</li>
                <li className="list-group-item">Pointers to Functions</li>
                <li className="list-group-item">this Pointer</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-memory text-primary me-2"></i>Dynamic Memory</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">new and delete Operators</li>
                <li className="list-group-item">Dynamic Arrays</li>
                <li className="list-group-item">Memory Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-binary text-primary me-2"></i>Structures and Unions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Structure Definition</li>
                <li className="list-group-item">Structure and Functions</li>
                <li className="list-group-item">Union Definition</li>
                <li className="list-group-item">Structure vs Union</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-list-check text-primary me-2"></i>Enumerations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">enum Definition</li>
                <li className="list-group-item">Scoped Enumerations</li>
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
                <li className="list-group-item">File Streams</li>
                <li className="list-group-item">Opening/Closing Files</li>
                <li className="list-group-item">Reading/Writing Files</li>
                <li className="list-group-item">File Position Pointers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-puzzle text-primary me-2"></i>Templates</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Function Templates</li>
                <li className="list-group-item">Class Templates</li>
                <li className="list-group-item">Template Specialization</li>
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
                <li className="list-group-item">try, catch, throw</li>
                <li className="list-group-item">Standard Exceptions</li>
                <li className="list-group-item">Custom Exceptions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-collection text-primary me-2"></i>STL (Standard Template Library)</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Containers</li>
                <li className="list-group-item">Iterators</li>
                <li className="list-group-item">Algorithms</li>
                <li className="list-group-item">Functors</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-slash text-primary me-2"></i>Advanced Topics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Preprocessor Directives</li>
                <li className="list-group-item">Multithreading</li>
                <li className="list-group-item">Smart Pointers</li>
                <li className="list-group-item">Move Semantics</li>
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
                <li className="list-group-item">Coding Standards</li>
                <li className="list-group-item">Memory Management</li>
                <li className="list-group-item">Performance Considerations</li>
                <li className="list-group-item">Debugging Techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CppSyllabus;