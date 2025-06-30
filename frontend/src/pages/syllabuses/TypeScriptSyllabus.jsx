import React from 'react';

function TypeScriptSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-tsx fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">TypeScript Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of TypeScript Programming Language</p>
          </div>
        </div>
      </header>

      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to TypeScript</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is TypeScript?</li>
                <li className="list-group-item">TypeScript vs JavaScript</li>
                <li className="list-group-item">Advantages of TypeScript</li>
                <li className="list-group-item">Setting up TypeScript Environment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>Variables and Basic Types</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Variable Declaration (let, const, var)</li>
                <li className="list-group-item">Type Annotation vs Inference</li>
                <li className="list-group-item">Primitive Types (number, string, boolean)</li>
                <li className="list-group-item">Special Types (any, unknown, void, never)</li>
                <li className="list-group-item">Arrays and Tuples</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-code text-primary me-2"></i>Functions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Function Syntax and Return Types</li>
                <li className="list-group-item">Optional and Default Parameters</li>
                <li className="list-group-item">Arrow Functions</li>
                <li className="list-group-item">Function Overloading</li>
                <li className="list-group-item">Callbacks and Anonymous Functions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-list-ul text-primary me-2"></i>Arrays</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Array Type Declarations</li>
                <li className="list-group-item">Array Methods (map, filter, reduce, etc.)</li>
                <li className="list-group-item">Tuples</li>
                <li className="list-group-item">Readonly Arrays</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-collection text-primary me-2"></i>Enums</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Numeric Enums</li>
                <li className="list-group-item">String Enums</li>
                <li className="list-group-item">Heterogeneous Enums</li>
                <li className="list-group-item">Const Enums</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-left-right text-primary me-2"></i>Type Casting and Assertion</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Angle Bracket Syntax</li>
                <li className="list-group-item">"as" Syntax</li>
                <li className="list-group-item">Type Assertion with DOM</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-text text-primary me-2"></i>Interfaces</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Interface Declaration</li>
                <li className="list-group-item">Optional Properties</li>
                <li className="list-group-item">Readonly Properties</li>
                <li className="list-group-item">Interface with Functions</li>
                <li className="list-group-item">Interface Inheritance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-ruled text-primary me-2"></i>Classes</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Class Syntax</li>
                <li className="list-group-item">Constructors</li>
                <li className="list-group-item">Access Modifiers (public, private, protected)</li>
                <li className="list-group-item">Readonly Properties</li>
                <li className="list-group-item">Static Members</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-2 text-primary me-2"></i>Inheritance</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">extends Keyword</li>
                <li className="list-group-item">Method Overriding</li>
                <li className="list-group-item">super Keyword</li>
                <li className="list-group-item">Abstract Classes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shapes text-primary me-2"></i>Polymorphism</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Method Overloading</li>
                <li className="list-group-item">Method Overriding</li>
                <li className="list-group-item">Polymorphic Behavior</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-eye-slash text-primary me-2"></i>Abstraction</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Abstract Classes</li>
                <li className="list-group-item">Interfaces as Abstraction</li>
                <li className="list-group-item">Abstract Methods</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-lock text-primary me-2"></i>Encapsulation</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Private and Protected Members</li>
                <li className="list-group-item">Getters and Setters</li>
                <li className="list-group-item">Access Modifiers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tag text-primary me-2"></i>Decorators</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Class Decorators</li>
                <li className="list-group-item">Method Decorators</li>
                <li className="list-group-item">Property Decorators</li>
                <li className="list-group-item">Parameter Decorators</li>
                <li className="list-group-item">Accessor Decorators</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tools text-primary me-2"></i>Tooling and Integration</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">TypeScript with React</li>
                <li className="list-group-item">TypeScript with Node.js</li>
                <li className="list-group-item">Debugging TypeScript</li>
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
                <li className="list-group-item">TypeScript Coding Standards</li>
                <li className="list-group-item">Common Patterns</li>
                <li className="list-group-item">Performance Considerations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeScriptSyllabus;