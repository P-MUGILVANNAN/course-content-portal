import React from 'react';

function CSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-c fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">C Programming Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of C Programming Language</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to C</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is C Programming?</li>
                <li className="list-group-item">History and Features of C</li>
                <li className="list-group-item">Structure of C Program</li>
                <li className="list-group-item">Compilation and Execution Process</li>
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
                <li className="list-group-item">Installing C Compiler (GCC)</li>
                <li className="list-group-item">Setting up IDE (Code::Blocks, Dev C++)</li>
                <li className="list-group-item">Writing First C Program</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-card-text text-primary me-2"></i>Data Types</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Primitive Data Types (int, float, char, etc.)</li>
                <li className="list-group-item">Derived Data Types (arrays, pointers, etc.)</li>
                <li className="list-group-item">User-defined Data Types (structures, unions, enums)</li>
                <li className="list-group-item">Type Modifiers and Qualifiers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tag text-primary me-2"></i>Variables and Constants</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Variable Declaration and Initialization</li>
                <li className="list-group-item">Scope and Lifetime of Variables</li>
                <li className="list-group-item">Constants and Literals</li>
                <li className="list-group-item">Storage Classes (auto, register, static, extern)</li>
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
                <li className="list-group-item">Relational and Logical Operators</li>
                <li className="list-group-item">Bitwise Operators</li>
                <li className="list-group-item">Assignment Operators</li>
                <li className="list-group-item">Ternary Operator</li>
                <li className="list-group-item">Operator Precedence and Associativity</li>
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
                <li className="list-group-item">Conditional Statements (if, if-else, switch)</li>
                <li className="list-group-item">Loops (while, do-while, for)</li>
                <li className="list-group-item">Break and Continue Statements</li>
                <li className="list-group-item">Goto Statement</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-boxes text-primary me-2"></i>Functions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Function Declaration and Definition</li>
                <li className="list-group-item">Function Parameters and Return Values</li>
                <li className="list-group-item">Function Prototypes</li>
                <li className="list-group-item">Recursion</li>
                <li className="list-group-item">Call by Value vs Call by Reference</li>
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
                <li className="list-group-item">Single and Multi-dimensional Arrays</li>
                <li className="list-group-item">Array Initialization and Access</li>
                <li className="list-group-item">Arrays as Function Parameters</li>
                <li className="list-group-item">Strings as Character Arrays</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-textarea-t text-primary me-2"></i>Strings</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">String Declaration and Initialization</li>
                <li className="list-group-item">String Input/Output Functions</li>
                <li className="list-group-item">String Manipulation Functions</li>
                <li className="list-group-item">String Comparison Functions</li>
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
                <li className="list-group-item">Pointer Basics and Declaration</li>
                <li className="list-group-item">Pointer Arithmetic</li>
                <li className="list-group-item">Pointers and Arrays</li>
                <li className="list-group-item">Pointers to Pointers</li>
                <li className="list-group-item">Pointers to Functions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-box text-primary me-2"></i>Structures and Unions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Structure Definition and Declaration</li>
                <li className="list-group-item">Accessing Structure Members</li>
                <li className="list-group-item">Array of Structures</li>
                <li className="list-group-item">Nested Structures</li>
                <li className="list-group-item">Unions and their Usage</li>
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
                <li className="list-group-item">File Operations (Open, Read, Write, Close)</li>
                <li className="list-group-item">File Modes</li>
                <li className="list-group-item">Text vs Binary Files</li>
                <li className="list-group-item">File Positioning Functions</li>
                <li className="list-group-item">Error Handling in Files</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSyllabus;