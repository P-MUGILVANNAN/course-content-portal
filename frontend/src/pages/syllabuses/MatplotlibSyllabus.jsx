import React from 'react';

function MatplotlibSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-graph-up fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Matplotlib Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Python Data Visualization</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Matplotlib</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Matplotlib?</li>
                <li className="list-group-item">Importance of Data Visualization</li>
                <li className="list-group-item">Matplotlib vs Other Visualization Libraries</li>
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
                <li className="list-group-item">Installing Matplotlib</li>
                <li className="list-group-item">Jupyter Notebook Integration</li>
                <li className="list-group-item">Basic Import Statements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-graph-up text-primary me-2"></i>Basic Plotting</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Figure and Axes Concepts</li>
                <li className="list-group-item">plt.plot() Function</li>
                <li className="list-group-item">Adding Titles and Labels</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bar-chart-line text-primary me-2"></i>Line Plots</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating Simple Line Graphs</li>
                <li className="list-group-item">Customizing Line Styles</li>
                <li className="list-group-item">Markers and Annotations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bar-chart text-primary me-2"></i>Bar Charts</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Vertical and Horizontal Bars</li>
                <li className="list-group-item">Grouped and Stacked Bars</li>
                <li className="list-group-item">Error Bars</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-pie-chart text-primary me-2"></i>Pie Charts</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic Pie Charts</li>
                <li className="list-group-item">Exploded Slices</li>
                <li className="list-group-item">Donut Charts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bar-chart-steps text-primary me-2"></i>Histograms</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Understanding Bins</li>
                <li className="list-group-item">Density Plots</li>
                <li className="list-group-item">Cumulative Histograms</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-scatter text-primary me-2"></i>Scatter Plots</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic Scatter Plots</li>
                <li className="list-group-item">Bubble Charts</li>
                <li className="list-group-item">3D Scatter Plots</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layers text-primary me-2"></i>Multiple Plots</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Plotting Multiple Datasets</li>
                <li className="list-group-item">Legends and Annotations</li>
                <li className="list-group-item">Dual Axis Plots</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-grid-3x3 text-primary me-2"></i>Subplots</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">plt.subplot() Function</li>
                <li className="list-group-item">GridSpec for Complex Layouts</li>
                <li className="list-group-item">Shared Axes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-palette text-primary me-2"></i>Customization</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Colors and Styles</li>
                <li className="list-group-item">Text and Annotations</li>
                <li className="list-group-item">Grids and Ticks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-aspect-ratio text-primary me-2"></i>Figure Configuration</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Figure Size and DPI</li>
                <li className="list-group-item">Saving Figures</li>
                <li className="list-group-item">Different File Formats</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark text-primary me-2"></i>Working with Data</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Plotting from Pandas DataFrames</li>
                <li className="list-group-item">Handling Missing Data</li>
                <li className="list-group-item">Time Series Visualization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-calendar text-primary me-2"></i>Date Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Plotting Time Series</li>
                <li className="list-group-item">Date Formatting</li>
                <li className="list-group-item">Custom Date Locators</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-graph-up-arrow text-primary me-2"></i>Advanced Plots</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Box Plots</li>
                <li className="list-group-item">Violin Plots</li>
                <li className="list-group-item">Contour Plots</li>
                <li className="list-group-item">Polar Plots</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bounding-box text-primary me-2"></i>3D Plotting</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">3D Surface Plots</li>
                <li className="list-group-item">3D Wireframe Plots</li>
                <li className="list-group-item">3D Scatter Plots</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-universal-access text-primary me-2"></i>Animation</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic Animation</li>
                <li className="list-group-item">Interactive Plots</li>
                <li className="list-group-item">Widgets Integration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-filetype-py text-primary me-2"></i>Matplotlib with Pandas</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">DataFrame.plot() Methods</li>
                <li className="list-group-item">Visualizing Statistical Data</li>
                <li className="list-group-item">Correlation Matrices</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Backends & Export</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Different Backends</li>
                <li className="list-group-item">Interactive vs Non-Interactive</li>
                <li className="list-group-item">Exporting for Publications</li>
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
                <li className="list-group-item">Effective Visualization Principles</li>
                <li className="list-group-item">Common Pitfalls</li>
                <li className="list-group-item">Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatplotlibSyllabus;