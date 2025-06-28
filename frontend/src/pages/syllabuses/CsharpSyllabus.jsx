import React from 'react';

function CsharpSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-cs fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">C# Programming Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of C# Language and .NET Framework</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to C#</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is C#?</li>
                <li className="list-group-item">.NET Framework and .NET Core</li>
                <li className="list-group-item">C# vs Other Languages</li>
                <li className="list-group-item">Setting up Development Environment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-code text-primary me-2"></i>C# Basics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Hello World Program</li>
                <li className="list-group-item">Data Types and Variables</li>
                <li className="list-group-item">Type Conversion</li>
                <li className="list-group-item">Operators</li>
                <li className="list-group-item">Comments</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>Control Structures</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Conditional Statements (if, else, switch)</li>
                <li className="list-group-item">Loops (for, while, do-while, foreach)</li>
                <li className="list-group-item">Jump Statements (break, continue, goto)</li>
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
                <li className="list-group-item">Single and Multi-dimensional Arrays</li>
                <li className="list-group-item">Jagged Arrays</li>
                <li className="list-group-item">String Manipulation</li>
                <li className="list-group-item">StringBuilder</li>
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
                <li className="list-group-item">Constructors and Destructors</li>
                <li className="list-group-item">Access Modifiers</li>
                <li className="list-group-item">Properties and Indexers</li>
                <li className="list-group-item">Inheritance</li>
                <li className="list-group-item">Polymorphism</li>
                <li className="list-group-item">Abstraction</li>
                <li className="list-group-item">Encapsulation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Methods and Parameters</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Defining and Calling Methods</li>
                <li className="list-group-item">Method Overloading</li>
                <li className="list-group-item">Value vs Reference Parameters</li>
                <li className="list-group-item">Out and Ref Parameters</li>
                <li className="list-group-item">Params Keyword</li>
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
                <li className="list-group-item">try-catch-finally Blocks</li>
                <li className="list-group-item">Exception Types</li>
                <li className="list-group-item">Custom Exceptions</li>
                <li className="list-group-item">throw Keyword</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-collection text-primary me-2"></i>Collections</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">ArrayList, List</li>
                <li className="list-group-item">Dictionary, Hashtable</li>
                <li className="list-group-item">Queue and Stack</li>
                <li className="list-group-item">HashSet and SortedSet</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark text-primary me-2"></i>File I/O</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">File and Directory Classes</li>
                <li className="list-group-item">StreamReader and StreamWriter</li>
                <li className="list-group-item">Binary Serialization</li>
                <li className="list-group-item">XML and JSON Handling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-braces text-primary me-2"></i>Generics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Generic Classes and Methods</li>
                <li className="list-group-item">Type Constraints</li>
                <li className="list-group-item">Generic Collections</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-left-right text-primary me-2"></i>Delegates and Events</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Delegate Types</li>
                <li className="list-group-item">Anonymous Methods</li>
                <li className="list-group-item">Lambda Expressions</li>
                <li className="list-group-item">Events and Event Handlers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-search text-primary me-2"></i>LINQ</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Query Syntax vs Method Syntax</li>
                <li className="list-group-item">Standard Query Operators</li>
                <li className="list-group-item">LINQ to Objects</li>
                <li className="list-group-item">LINQ to XML</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cpu text-primary me-2"></i>Multithreading</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Thread Class</li>
                <li className="list-group-item">Thread Pool</li>
                <li className="list-group-item">Task Parallel Library</li>
                <li className="list-group-item">Async/Await Pattern</li>
                <li className="list-group-item">Synchronization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>ADO.NET</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Connected Architecture</li>
                <li className="list-group-item">Disconnected Architecture</li>
                <li className="list-group-item">Entity Framework Core</li>
                <li className="list-group-item">Dapper</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-window text-primary me-2"></i>Windows Forms</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Form Controls</li>
                <li className="list-group-item">Event Handling</li>
                <li className="list-group-item">Data Binding</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-globe text-primary me-2"></i>ASP.NET Core</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">MVC Pattern</li>
                <li className="list-group-item">Razor Pages</li>
                <li className="list-group-item">Web API</li>
                <li className="list-group-item">Entity Framework Core</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-puzzle text-primary me-2"></i>Advanced Topics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Attributes</li>
                <li className="list-group-item">Reflection</li>
                <li className="list-group-item">Dynamic Types</li>
                <li className="list-group-item">Pattern Matching</li>
                <li className="list-group-item">Records</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CsharpSyllabus;