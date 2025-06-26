import React from 'react';

function CppSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-cpp"></i> C++ Syllabus</h1>
          <p className="lead">Comprehensive Coverage of C++ Programming Language</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to C++</h2>
            <ul>
              <li>What is C++?</li>
              <li>History and Evolution</li>
              <li>Features of C++</li>
              <li>Difference between C and C++</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Environment Setup</h2>
            <ul>
              <li>Installing C++ Compiler</li>
              <li>Setting up IDE (Code::Blocks, Visual Studio)</li>
              <li>Writing First C++ Program</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-code"></i> Basic Syntax</h2>
            <ul>
              <li>C++ Program Structure</li>
              <li>Tokens and Keywords</li>
              <li>Comments</li>
              <li>Namespaces</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-card-list"></i> Data Types and Variables</h2>
            <ul>
              <li>Primitive Data Types</li>
              <li>Derived Data Types</li>
              <li>User-defined Data Types</li>
              <li>Variable Declaration and Initialization</li>
              <li>Constants and Literals</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calculator"></i> Operators</h2>
            <ul>
              <li>Arithmetic Operators</li>
              <li>Relational Operators</li>
              <li>Logical Operators</li>
              <li>Bitwise Operators</li>
              <li>Assignment Operators</li>
              <li>Misc Operators</li>
              <li>Operator Precedence</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-2"></i> Control Flow</h2>
            <ul>
              <li>Decision Making (if, if-else, switch)</li>
              <li>Loops (for, while, do-while)</li>
              <li>Jump Statements (break, continue, goto)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> Functions</h2>
            <ul>
              <li>Function Definition and Declaration</li>
              <li>Function Parameters</li>
              <li>Function Overloading</li>
              <li>Recursion</li>
              <li>Inline Functions</li>
              <li>Lambda Expressions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Arrays and Strings</h2>
            <ul>
              <li>Single and Multi-dimensional Arrays</li>
              <li>Array to Function</li>
              <li>C-style Strings</li>
              <li>String Class</li>
              <li>String Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-boxes"></i> Object-Oriented Programming</h2>
            <ul>
              <li>Classes and Objects</li>
              <li>Constructors and Destructors</li>
              <li>Access Modifiers</li>
              <li>Encapsulation</li>
              <li>Abstraction</li>
              <li>Inheritance</li>
              <li>Polymorphism</li>
              <li>Friend Functions and Classes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cursor"></i> Pointers</h2>
            <ul>
              <li>Pointer Basics</li>
              <li>Pointer Arithmetic</li>
              <li>Pointers and Arrays</li>
              <li>Pointers to Pointers</li>
              <li>Pointers to Functions</li>
              <li>this Pointer</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-memory"></i> Dynamic Memory</h2>
            <ul>
              <li>new and delete Operators</li>
              <li>Dynamic Arrays</li>
              <li>Memory Management</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-binary"></i> Structures and Unions</h2>
            <ul>
              <li>Structure Definition</li>
              <li>Structure and Functions</li>
              <li>Union Definition</li>
              <li>Difference between Structure and Union</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-list-check"></i> Enumerations</h2>
            <ul>
              <li>enum Definition</li>
              <li>Scoped Enumerations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark"></i> File Handling</h2>
            <ul>
              <li>File Streams</li>
              <li>Opening and Closing Files</li>
              <li>Reading and Writing Files</li>
              <li>File Position Pointers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> Templates</h2>
            <ul>
              <li>Function Templates</li>
              <li>Class Templates</li>
              <li>Template Specialization</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-exception"></i> Exception Handling</h2>
            <ul>
              <li>try, catch, throw</li>
              <li>Standard Exceptions</li>
              <li>Custom Exceptions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> STL (Standard Template Library)</h2>
            <ul>
              <li>Containers (Vector, List, Map, etc.)</li>
              <li>Iterators</li>
              <li>Algorithms</li>
              <li>Functors</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-slash"></i> Advanced Topics</h2>
            <ul>
              <li>Preprocessor Directives</li>
              <li>Multithreading</li>
              <li>Smart Pointers</li>
              <li>Move Semantics</li>
              <li>Lambda Expressions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-check-circle"></i> Best Practices</h2>
            <ul>
              <li>Coding Standards</li>
              <li>Memory Management</li>
              <li>Performance Considerations</li>
              <li>Debugging Techniques</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CppSyllabus;