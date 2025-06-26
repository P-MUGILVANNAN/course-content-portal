import React from 'react';

function ReactSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-react"></i> React Syllabus</h1>
          <p className="lead">Comprehensive Coverage of React Library</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to React</h2>
            <ul>
              <li>What is React?</li>
              <li>React vs Angular vs Vue</li>
              <li>Advantages and Disadvantages</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-stars"></i> React Features</h2>
            <ul>
              <li>JSX</li>
              <li>Components</li>
              <li>Virtual DOM</li>
              <li>One-way Data Binding</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> React Setup</h2>
            <ul>
              <li>Create React App</li>
              <li>Vite</li>
              <li>Directory Structure</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> React Components</h2>
            <ul>
              <li>Functional Components</li>
              <li>Class Components</li>
              <li>Component Lifecycle</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-filetype-jsx"></i> JSX</h2>
            <ul>
              <li>JSX Basics</li>
              <li>Embedding Expressions</li>
              <li>JSX Comments</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> State</h2>
            <ul>
              <li>What is State?</li>
              <li>Class Component State</li>
              <li>Changing State</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box-arrow-in-right"></i> Props</h2>
            <ul>
              <li>What are Props?</li>
              <li>Passing Props</li>
              <li>Default Props</li>
              <li>Props Validation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-activity"></i> Data Binding</h2>
            <ul>
              <li>One-Way Data Binding</li>
              <li>Two-Way Data Binding</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-broadcast-pin"></i> Parent-Child Communication</h2>
            <ul>
              <li>Props Passing</li>
              <li>Callback Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-list"></i> Lists in React</h2>
            <ul>
              <li>Rendering Lists</li>
              <li>Keys</li>
              <li>List Manipulation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> Component Lifecycle</h2>
            <ul>
              <li>Mounting Phase</li>
              <li>Updating Phase</li>
              <li>Unmounting Phase</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-hook"></i> React Hooks</h2>
            <ul>
              <li>useState</li>
              <li>useEffect</li>
              <li>useContext</li>
              <li>Custom Hooks</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-signpost-split"></i> Routing</h2>
            <ul>
              <li>React Router</li>
              <li>Basic Routing</li>
              <li>Navigation</li>
              <li>Nested Routes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-input-cursor-text"></i> Forms</h2>
            <ul>
              <li>Controlled Components</li>
              <li>Uncontrolled Components</li>
              <li>Form Validation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-brush"></i> Styling</h2>
            <ul>
              <li>Inline Styles</li>
              <li>CSS Stylesheets</li>
              <li>CSS Modules</li>
              <li>Styled Components</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cloud-arrow-down"></i> Axios</h2>
            <ul>
              <li>GET Requests</li>
              <li>POST Requests</li>
              <li>PUT/PATCH Requests</li>
              <li>DELETE Requests</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-check"></i> Conditional Rendering</h2>
            <ul>
              <li>if-else</li>
              <li>Ternary Operator</li>
              <li>Logical && Operator</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactSyllabus;