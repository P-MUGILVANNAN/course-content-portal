import React from 'react';

function ScipySyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-calculator fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">SciPy Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Scientific Python Library</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to SciPy</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is SciPy?</li>
                <li className="list-group-item">SciPy vs NumPy</li>
                <li className="list-group-item">Key Features and Capabilities</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-download text-primary me-2"></i>Installation and Setup</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Installing SciPy</li>
                <li className="list-group-item">Importing Submodules</li>
                <li className="list-group-item">Version Checking</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-123 text-primary me-2"></i>Constants Module</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Physical and Mathematical Constants</li>
                <li className="list-group-item">Unit Categories</li>
                <li className="list-group-item">Metric and Binary Prefixes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-graph-up text-primary me-2"></i>Optimization</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Root Finding</li>
                <li className="list-group-item">Minimization Algorithms</li>
                <li className="list-group-item">Curve Fitting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-grid-3x3 text-primary me-2"></i>Sparse Matrices</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Sparse Matrix Types (CSR, CSC)</li>
                <li className="list-group-item">Sparse Matrix Operations</li>
                <li className="list-group-item">Applications in Linear Algebra</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScipySyllabus;