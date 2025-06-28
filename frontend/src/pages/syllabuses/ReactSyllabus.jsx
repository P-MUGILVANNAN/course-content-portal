import React from 'react';

function ReactSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-react fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">React Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of React Library</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to React</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is React?</li>
                <li className="list-group-item">React vs Angular vs Vue</li>
                <li className="list-group-item">Advantages and Disadvantages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-stars text-primary me-2"></i>React Features</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">JSX</li>
                <li className="list-group-item">Components</li>
                <li className="list-group-item">Virtual DOM</li>
                <li className="list-group-item">One-way Data Binding</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>React Setup</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Create React App</li>
                <li className="list-group-item">Vite</li>
                <li className="list-group-item">Directory Structure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-puzzle text-primary me-2"></i>React Components</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Functional Components</li>
                <li className="list-group-item">Class Components</li>
                <li className="list-group-item">Component Lifecycle</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-filetype-jsx text-primary me-2"></i>JSX</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">JSX Basics</li>
                <li className="list-group-item">Embedding Expressions</li>
                <li className="list-group-item">JSX Comments</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>State</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is State?</li>
                <li className="list-group-item">Class Component State</li>
                <li className="list-group-item">Changing State</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-box-arrow-in-right text-primary me-2"></i>Props</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What are Props?</li>
                <li className="list-group-item">Passing Props</li>
                <li className="list-group-item">Default Props</li>
                <li className="list-group-item">Props Validation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-activity text-primary me-2"></i>Data Binding</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">One-Way Data Binding</li>
                <li className="list-group-item">Two-Way Data Binding</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-broadcast-pin text-primary me-2"></i>Parent-Child Communication</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Props Passing</li>
                <li className="list-group-item">Callback Functions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-list text-primary me-2"></i>Lists in React</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rendering Lists</li>
                <li className="list-group-item">Keys</li>
                <li className="list-group-item">List Manipulation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-primary me-2"></i>Component Lifecycle</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Mounting Phase</li>
                <li className="list-group-item">Updating Phase</li>
                <li className="list-group-item">Unmounting Phase</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-hook text-primary me-2"></i>React Hooks</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">useState</li>
                <li className="list-group-item">useEffect</li>
                <li className="list-group-item">useContext</li>
                <li className="list-group-item">Custom Hooks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-signpost-split text-primary me-2"></i>Routing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React Router</li>
                <li className="list-group-item">Basic Routing</li>
                <li className="list-group-item">Navigation</li>
                <li className="list-group-item">Nested Routes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-input-cursor-text text-primary me-2"></i>Forms</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Controlled Components</li>
                <li className="list-group-item">Uncontrolled Components</li>
                <li className="list-group-item">Form Validation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-brush text-primary me-2"></i>Styling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Inline Styles</li>
                <li className="list-group-item">CSS Stylesheets</li>
                <li className="list-group-item">CSS Modules</li>
                <li className="list-group-item">Styled Components</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cloud-arrow-down text-primary me-2"></i>Axios</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">GET Requests</li>
                <li className="list-group-item">POST Requests</li>
                <li className="list-group-item">PUT/PATCH Requests</li>
                <li className="list-group-item">DELETE Requests</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-check text-primary me-2"></i>Conditional Rendering</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">if-else</li>
                <li className="list-group-item">Ternary Operator</li>
                <li className="list-group-item">Logical && Operator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactSyllabus;