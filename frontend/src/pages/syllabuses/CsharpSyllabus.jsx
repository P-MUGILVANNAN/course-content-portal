import React from 'react';

function CsharpSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-cs"></i> C# Programming Syllabus</h1>
          <p className="lead">Comprehensive Coverage of C# Language and .NET Framework</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to C#</h2>
            <ul>
              <li>What is C#?</li>
              <li>.NET Framework and .NET Core</li>
              <li>C# vs Other Languages</li>
              <li>Setting up Development Environment</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-code"></i> C# Basics</h2>
            <ul>
              <li>Hello World Program</li>
              <li>Data Types and Variables</li>
              <li>Type Conversion</li>
              <li>Operators</li>
              <li>Comments</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> Control Structures</h2>
            <ul>
              <li>Conditional Statements (if, else, switch)</li>
              <li>Loops (for, while, do-while, foreach)</li>
              <li>Jump Statements (break, continue, goto)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Arrays and Strings</h2>
            <ul>
              <li>Single and Multi-dimensional Arrays</li>
              <li>Jagged Arrays</li>
              <li>String Manipulation</li>
              <li>StringBuilder</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box"></i> Object-Oriented Programming</h2>
            <ul>
              <li>Classes and Objects</li>
              <li>Constructors and Destructors</li>
              <li>Access Modifiers</li>
              <li>Properties and Indexers</li>
              <li>Inheritance</li>
              <li>Polymorphism</li>
              <li>Abstraction</li>
              <li>Encapsulation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Methods and Parameters</h2>
            <ul>
              <li>Defining and Calling Methods</li>
              <li>Method Overloading</li>
              <li>Value vs Reference Parameters</li>
              <li>Out and Ref Parameters</li>
              <li>Params Keyword</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-exclamation-triangle"></i> Exception Handling</h2>
            <ul>
              <li>try-catch-finally Blocks</li>
              <li>Exception Types</li>
              <li>Custom Exceptions</li>
              <li>throw Keyword</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Collections</h2>
            <ul>
              <li>ArrayList, List</li>
              <li>Dictionary, Hashtable</li>
              <li>Queue and Stack</li>
              <li>HashSet and SortedSet</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark"></i> File I/O</h2>
            <ul>
              <li>File and Directory Classes</li>
              <li>StreamReader and StreamWriter</li>
              <li>Binary Serialization</li>
              <li>XML and JSON Handling</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-braces"></i> Generics</h2>
            <ul>
              <li>Generic Classes and Methods</li>
              <li>Type Constraints</li>
              <li>Generic Collections</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-left-right"></i> Delegates and Events</h2>
            <ul>
              <li>Delegate Types</li>
              <li>Anonymous Methods</li>
              <li>Lambda Expressions</li>
              <li>Events and Event Handlers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-search"></i> LINQ</h2>
            <ul>
              <li>Query Syntax vs Method Syntax</li>
              <li>Standard Query Operators</li>
              <li>LINQ to Objects</li>
              <li>LINQ to XML</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cpu"></i> Multithreading</h2>
            <ul>
              <li>Thread Class</li>
              <li>Thread Pool</li>
              <li>Task Parallel Library</li>
              <li>Async/Await Pattern</li>
              <li>Synchronization</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> ADO.NET</h2>
            <ul>
              <li>Connected Architecture</li>
              <li>Disconnected Architecture</li>
              <li>Entity Framework Core</li>
              <li>Dapper</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-window"></i> Windows Forms</h2>
            <ul>
              <li>Form Controls</li>
              <li>Event Handling</li>
              <li>Data Binding</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-globe"></i> ASP.NET Core</h2>
            <ul>
              <li>MVC Pattern</li>
              <li>Razor Pages</li>
              <li>Web API</li>
              <li>Entity Framework Core</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> Advanced Topics</h2>
            <ul>
              <li>Attributes</li>
              <li>Reflection</li>
              <li>Dynamic Types</li>
              <li>Pattern Matching</li>
              <li>Records</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CsharpSyllabus;