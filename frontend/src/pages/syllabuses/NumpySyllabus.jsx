import React from 'react';

function NumpySyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-calculator fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">NumPy Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Numerical Python</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to NumPy</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is NumPy?</li>
                <li className="list-group-item">Advantages over Python lists</li>
                <li className="list-group-item">Applications in Data Science</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-download text-primary me-2"></i>Installation & Setup</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Installing NumPy</li>
                <li className="list-group-item">Importing NumPy</li>
                <li className="list-group-item">Checking NumPy version</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-collection text-primary me-2"></i>NumPy Arrays</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating arrays (np.array, np.arange, np.linspace)</li>
                <li className="list-group-item">Array types (1D, 2D, 3D)</li>
                <li className="list-group-item">Special arrays (zeros, ones, eye, full)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-list-ol text-primary me-2"></i>Array Indexing & Slicing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic indexing</li>
                <li className="list-group-item">Slicing arrays</li>
                <li className="list-group-item">Boolean indexing</li>
                <li className="list-group-item">Fancy indexing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-card-list text-primary me-2"></i>Array Attributes</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">ndim (number of dimensions)</li>
                <li className="list-group-item">shape (array dimensions)</li>
                <li className="list-group-item">size (total elements)</li>
                <li className="list-group-item">dtype (data type)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-calculator text-primary me-2"></i>Array Operations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Arithmetic operations</li>
                <li className="list-group-item">Comparison operations</li>
                <li className="list-group-item">Broadcasting</li>
                <li className="list-group-item">Vectorization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>NumPy Functions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Mathematical functions (sum, mean, std)</li>
                <li className="list-group-item">Statistical functions (min, max, argmin, argmax)</li>
                <li className="list-group-item">Array manipulation (sort, unique, where, clip)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrows-angle-contract text-primary me-2"></i>Reshaping Arrays</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">reshape() method</li>
                <li className="list-group-item">ravel() vs flatten()</li>
                <li className="list-group-item">resize() method</li>
                <li className="list-group-item">Transposing arrays</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-stack text-primary me-2"></i>Stacking Arrays</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Horizontal stacking (hstack)</li>
                <li className="list-group-item">Vertical stacking (vstack)</li>
                <li className="list-group-item">Column stacking (column_stack)</li>
                <li className="list-group-item">Row stacking (row_stack)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-binary text-primary me-2"></i>Data Types</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">NumPy data types</li>
                <li className="list-group-item">Type conversion</li>
                <li className="list-group-item">Type checking</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-copy text-primary me-2"></i>Copy vs View</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Understanding copies</li>
                <li className="list-group-item">Understanding views</li>
                <li className="list-group-item">When to use each</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-grid-3x3 text-primary me-2"></i>Matrix Operations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Matrix multiplication</li>
                <li className="list-group-item">Dot product</li>
                <li className="list-group-item">Inner and outer products</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-files text-primary me-2"></i>File I/O</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Saving arrays (np.save, np.savez)</li>
                <li className="list-group-item">Loading arrays (np.load)</li>
                <li className="list-group-item">Text file operations (savetxt, loadtxt)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-graph-up text-primary me-2"></i>Linear Algebra</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic linear algebra operations</li>
                <li className="list-group-item">Eigenvalues and eigenvectors</li>
                <li className="list-group-item">Matrix decomposition</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-pie-chart text-primary me-2"></i>Random Module</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Random number generation</li>
                <li className="list-group-item">Probability distributions</li>
                <li className="list-group-item">Random sampling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-speedometer2 text-primary me-2"></i>Performance Tips</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Vectorization best practices</li>
                <li className="list-group-item">Memory efficiency</li>
                <li className="list-group-item">Common pitfalls</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-puzzle text-primary me-2"></i>Integration with Other Libraries</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Pandas integration</li>
                <li className="list-group-item">Matplotlib integration</li>
                <li className="list-group-item">SciPy integration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightbulb text-primary me-2"></i>Advanced Topics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Structured arrays</li>
                <li className="list-group-item">Masked arrays</li>
                <li className="list-group-item">Universal functions (ufuncs)</li>
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
                <li className="list-group-item">Coding conventions</li>
                <li className="list-group-item">Memory management</li>
                <li className="list-group-item">Error handling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumpySyllabus;