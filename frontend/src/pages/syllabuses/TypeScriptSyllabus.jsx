function TypeScriptSyllabus() {
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
            background-color: #3178c6; /* TypeScript blue */
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-tsx"></i> TypeScript Syllabus</h1>
          <p className="lead">Comprehensive Coverage of TypeScript Programming Language</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to TypeScript</h2>
            <ul>
              <li>What is TypeScript?</li>
              <li>TypeScript vs JavaScript</li>
              <li>Advantages of TypeScript</li>
              <li>Setting up TypeScript Environment</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> Variables and Basic Types</h2>
            <ul>
              <li>Variable Declaration (let, const, var)</li>
              <li>Type Annotation vs Inference</li>
              <li>Primitive Types (number, string, boolean)</li>
              <li>Special Types (any, unknown, void, never)</li>
              <li>Arrays and Tuples</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-code"></i> Functions</h2>
            <ul>
              <li>Function Syntax and Return Types</li>
              <li>Optional and Default Parameters</li>
              <li>Arrow Functions</li>
              <li>Function Overloading</li>
              <li>Callbacks and Anonymous Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-list-ul"></i> Arrays</h2>
            <ul>
              <li>Array Type Declarations</li>
              <li>Array Methods (map, filter, reduce, etc.)</li>
              <li>Tuples</li>
              <li>Readonly Arrays</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Enums</h2>
            <ul>
              <li>Numeric Enums</li>
              <li>String Enums</li>
              <li>Heterogeneous Enums</li>
              <li>Const Enums</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-left-right"></i> Type Casting and Assertion</h2>
            <ul>
              <li>Angle Bracket Syntax</li>
              <li>"as" Syntax</li>
              <li>Type Assertion with DOM</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-text"></i> Interfaces</h2>
            <ul>
              <li>Interface Declaration</li>
              <li>Optional Properties</li>
              <li>Readonly Properties</li>
              <li>Interface with Functions</li>
              <li>Interface Inheritance</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-ruled"></i> Classes</h2>
            <ul>
              <li>Class Syntax</li>
              <li>Constructors</li>
              <li>Access Modifiers (public, private, protected)</li>
              <li>Readonly Properties</li>
              <li>Static Members</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-2"></i> Inheritance</h2>
            <ul>
              <li>extends Keyword</li>
              <li>Method Overriding</li>
              <li>super Keyword</li>
              <li>Abstract Classes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shapes"></i> Polymorphism</h2>
            <ul>
              <li>Method Overloading</li>
              <li>Method Overriding</li>
              <li>Polymorphic Behavior</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-eye-slash"></i> Abstraction</h2>
            <ul>
              <li>Abstract Classes</li>
              <li>Interfaces as Abstraction</li>
              <li>Abstract Methods</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> Encapsulation</h2>
            <ul>
              <li>Private and Protected Members</li>
              <li>Getters and Setters</li>
              <li>Access Modifiers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tag"></i> Decorators</h2>
            <ul>
              <li>Class Decorators</li>
              <li>Method Decorators</li>
              <li>Property Decorators</li>
              <li>Parameter Decorators</li>
              <li>Accessor Decorators</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-filetype-js"></i> Advanced Types</h2>
            <ul>
              <li>Union and Intersection Types</li>
              <li>Type Aliases</li>
              <li>Literal Types</li>
              <li>Nullable Types</li>
              <li>Type Guards</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Generics</h2>
            <ul>
              <li>Generic Functions</li>
              <li>Generic Interfaces</li>
              <li>Generic Classes</li>
              <li>Constraints</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-modem"></i> Modules</h2>
            <ul>
              <li>Export and Import</li>
              <li>Default vs Named Exports</li>
              <li>Module Resolution</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-check"></i> TypeScript Configuration</h2>
            <ul>
              <li>tsconfig.json</li>
              <li>Compiler Options</li>
              <li>Type Declaration Files</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tools"></i> Tooling and Integration</h2>
            <ul>
              <li>TypeScript with React</li>
              <li>TypeScript with Node.js</li>
              <li>Debugging TypeScript</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-check-circle"></i> Best Practices</h2>
            <ul>
              <li>TypeScript Coding Standards</li>
              <li>Common Patterns</li>
              <li>Performance Considerations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeScriptSyllabus;