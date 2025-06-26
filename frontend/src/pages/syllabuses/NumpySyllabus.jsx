import React from 'react';

function NumpySyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-calculator"></i> NumPy Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Numerical Python</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to NumPy</h2>
            <ul>
              <li>What is NumPy?</li>
              <li>Advantages over Python lists</li>
              <li>Applications in Data Science</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-download"></i> Installation & Setup</h2>
            <ul>
              <li>Installing NumPy</li>
              <li>Importing NumPy</li>
              <li>Checking NumPy version</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> NumPy Arrays</h2>
            <ul>
              <li>Creating arrays (np.array, np.arange, np.linspace)</li>
              <li>Array types (1D, 2D, 3D)</li>
              <li>Special arrays (zeros, ones, eye, full)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-list-ol"></i> Array Indexing & Slicing</h2>
            <ul>
              <li>Basic indexing</li>
              <li>Slicing arrays</li>
              <li>Boolean indexing</li>
              <li>Fancy indexing</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-card-list"></i> Array Attributes</h2>
            <ul>
              <li>ndim (number of dimensions)</li>
              <li>shape (array dimensions)</li>
              <li>size (total elements)</li>
              <li>dtype (data type)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calculator"></i> Array Operations</h2>
            <ul>
              <li>Arithmetic operations</li>
              <li>Comparison operations</li>
              <li>Broadcasting</li>
              <li>Vectorization</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> NumPy Functions</h2>
            <ul>
              <li>Mathematical functions (sum, mean, std)</li>
              <li>Statistical functions (min, max, argmin, argmax)</li>
              <li>Array manipulation (sort, unique, where, clip)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrows-angle-contract"></i> Reshaping Arrays</h2>
            <ul>
              <li>reshape() method</li>
              <li>ravel() vs flatten()</li>
              <li>resize() method</li>
              <li>Transposing arrays</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-stack"></i> Stacking Arrays</h2>
            <ul>
              <li>Horizontal stacking (hstack)</li>
              <li>Vertical stacking (vstack)</li>
              <li>Column stacking (column_stack)</li>
              <li>Row stacking (row_stack)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-binary"></i> Data Types</h2>
            <ul>
              <li>NumPy data types</li>
              <li>Type conversion</li>
              <li>Type checking</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-copy"></i> Copy vs View</h2>
            <ul>
              <li>Understanding copies</li>
              <li>Understanding views</li>
              <li>When to use each</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-grid-3x3"></i> Matrix Operations</h2>
            <ul>
              <li>Matrix multiplication</li>
              <li>Dot product</li>
              <li>Inner and outer products</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-files"></i> File I/O</h2>
            <ul>
              <li>Saving arrays (np.save, np.savez)</li>
              <li>Loading arrays (np.load)</li>
              <li>Text file operations (savetxt, loadtxt)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up"></i> Linear Algebra</h2>
            <ul>
              <li>Basic linear algebra operations</li>
              <li>Eigenvalues and eigenvectors</li>
              <li>Matrix decomposition</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-pie-chart"></i> Random Module</h2>
            <ul>
              <li>Random number generation</li>
              <li>Probability distributions</li>
              <li>Random sampling</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-speedometer2"></i> Performance Tips</h2>
            <ul>
              <li>Vectorization best practices</li>
              <li>Memory efficiency</li>
              <li>Common pitfalls</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> Integration with Other Libraries</h2>
            <ul>
              <li>Pandas integration</li>
              <li>Matplotlib integration</li>
              <li>SciPy integration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightbulb"></i> Advanced Topics</h2>
            <ul>
              <li>Structured arrays</li>
              <li>Masked arrays</li>
              <li>Universal functions (ufuncs)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-check-circle"></i> Best Practices</h2>
            <ul>
              <li>Coding conventions</li>
              <li>Memory management</li>
              <li>Error handling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumpySyllabus;