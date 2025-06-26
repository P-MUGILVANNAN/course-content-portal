import React from 'react';

function CSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-c"></i> C Programming Syllabus</h1>
          <p className="lead">Comprehensive Coverage of C Programming Language</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to C</h2>
            <ul>
              <li>What is C Programming?</li>
              <li>History and Features of C</li>
              <li>Structure of C Program</li>
              <li>Compilation and Execution Process</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Environment Setup</h2>
            <ul>
              <li>Installing C Compiler (GCC)</li>
              <li>Setting up IDE (Code::Blocks, Dev C++)</li>
              <li>Writing First C Program</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-card-text"></i> Data Types</h2>
            <ul>
              <li>Primitive Data Types (int, float, char, etc.)</li>
              <li>Derived Data Types (arrays, pointers, etc.)</li>
              <li>User-defined Data Types (structures, unions, enums)</li>
              <li>Type Modifiers and Qualifiers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tag"></i> Variables and Constants</h2>
            <ul>
              <li>Variable Declaration and Initialization</li>
              <li>Scope and Lifetime of Variables</li>
              <li>Constants and Literals</li>
              <li>Storage Classes (auto, register, static, extern)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calculator"></i> Operators</h2>
            <ul>
              <li>Arithmetic Operators</li>
              <li>Relational and Logical Operators</li>
              <li>Bitwise Operators</li>
              <li>Assignment Operators</li>
              <li>Ternary Operator</li>
              <li>Operator Precedence and Associativity</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-2"></i> Control Flow</h2>
            <ul>
              <li>Conditional Statements (if, if-else, switch)</li>
              <li>Loops (while, do-while, for)</li>
              <li>Break and Continue Statements</li>
              <li>Goto Statement</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-boxes"></i> Functions</h2>
            <ul>
              <li>Function Declaration and Definition</li>
              <li>Function Parameters and Return Values</li>
              <li>Function Prototypes</li>
              <li>Recursion</li>
              <li>Call by Value vs Call by Reference</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Arrays</h2>
            <ul>
              <li>Single and Multi-dimensional Arrays</li>
              <li>Array Initialization and Access</li>
              <li>Arrays as Function Parameters</li>
              <li>Strings as Character Arrays</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-textarea-t"></i> Strings</h2>
            <ul>
              <li>String Declaration and Initialization</li>
              <li>String Input/Output Functions</li>
              <li>String Manipulation Functions</li>
              <li>String Comparison Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cursor"></i> Pointers</h2>
            <ul>
              <li>Pointer Basics and Declaration</li>
              <li>Pointer Arithmetic</li>
              <li>Pointers and Arrays</li>
              <li>Pointers to Pointers</li>
              <li>Pointers to Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box"></i> Structures and Unions</h2>
            <ul>
              <li>Structure Definition and Declaration</li>
              <li>Accessing Structure Members</li>
              <li>Array of Structures</li>
              <li>Nested Structures</li>
              <li>Unions and their Usage</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark"></i> File Handling</h2>
            <ul>
              <li>File Operations (Open, Read, Write, Close)</li>
              <li>File Modes</li>
              <li>Text vs Binary Files</li>
              <li>File Positioning Functions</li>
              <li>Error Handling in Files</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-memory"></i> Memory Management</h2>
            <ul>
              <li>Dynamic Memory Allocation (malloc, calloc, realloc, free)</li>
              <li>Memory Leaks and Dangling Pointers</li>
              <li>Stack vs Heap Memory</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> Preprocessor Directives</h2>
            <ul>
              <li>#include, #define, #undef</li>
              <li>Conditional Compilation (#ifdef, #ifndef, #endif)</li>
              <li>Macros and Inline Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> Advanced Topics</h2>
            <ul>
              <li>Command Line Arguments</li>
              <li>Variable Length Arguments</li>
              <li>Function Pointers</li>
              <li>Bit Fields</li>
              <li>Error Handling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSyllabus;