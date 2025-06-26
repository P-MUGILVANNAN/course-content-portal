import React from 'react';

function ScipySyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-calculator"></i> SciPy Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Scientific Python Library</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to SciPy</h2>
            <ul>
              <li>What is SciPy?</li>
              <li>SciPy vs NumPy</li>
              <li>Key Features and Capabilities</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-download"></i> Installation and Setup</h2>
            <ul>
              <li>Installing SciPy</li>
              <li>Importing Submodules</li>
              <li>Version Checking</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-123"></i> Constants Module</h2>
            <ul>
              <li>Physical and Mathematical Constants</li>
              <li>Unit Categories</li>
              <li>Metric and Binary Prefixes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up"></i> Optimization</h2>
            <ul>
              <li>Root Finding</li>
              <li>Minimization Algorithms</li>
              <li>Curve Fitting</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-grid-3x3"></i> Sparse Matrices</h2>
            <ul>
              <li>Sparse Matrix Types (CSR, CSC)</li>
              <li>Sparse Matrix Operations</li>
              <li>Applications in Linear Algebra</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calculator"></i> Linear Algebra</h2>
            <ul>
              <li>Matrix Operations</li>
              <li>Eigenvalues and Eigenvectors</li>
              <li>Matrix Decompositions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up-arrow"></i> Interpolation</h2>
            <ul>
              <li>1D and ND Interpolation</li>
              <li>Interpolation Methods</li>
              <li>Spline Interpolation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-soundwave"></i> Signal Processing</h2>
            <ul>
              <li>Filtering and Convolution</li>
              <li>Fourier Transforms</li>
              <li>Waveform Generation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bar-chart"></i> Statistics</h2>
            <ul>
              <li>Descriptive Statistics</li>
              <li>Probability Distributions</li>
              <li>Hypothesis Testing</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-hexagon"></i> Numerical Integration</h2>
            <ul>
              <li>Quadrature Methods</li>
              <li>ODE Solvers</li>
              <li>Double and Triple Integrals</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-image"></i> Image Processing</h2>
            <ul>
              <li>Basic Image Operations</li>
              <li>Filtering and Transformation</li>
              <li>Morphological Operations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-globe"></i> Spatial Data Structures</h2>
            <ul>
              <li>KD-Trees</li>
              <li>Distance Computations</li>
              <li>Nearest Neighbor Search</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-binary"></i> File I/O</h2>
            <ul>
              <li>MATLAB Files</li>
              <li>NetCDF Files</li>
              <li>Other Scientific Formats</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cpu"></i> Special Functions</h2>
            <ul>
              <li>Bessel Functions</li>
              <li>Gamma Functions</li>
              <li>Error Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Advanced Topics</h2>
            <ul>
              <li>Multithreaded Programming</li>
              <li>Performance Optimization</li>
              <li>Integration with Other Libraries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScipySyllabus;