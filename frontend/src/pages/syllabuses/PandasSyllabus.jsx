import React from 'react';

function PandasSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-file-earmark-spreadsheet fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Pandas Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Data Analysis with Pandas</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Pandas</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Pandas?</li>
                <li className="list-group-item">Key Features of Pandas</li>
                <li className="list-group-item">Advantages of Using Pandas</li>
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
                <li className="list-group-item">Installing Pandas</li>
                <li className="list-group-item">Importing Pandas</li>
                <li className="list-group-item">Checking Pandas Version</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-table text-primary me-2"></i>Pandas Data Structures</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Series - 1D Data Structure</li>
                <li className="list-group-item">DataFrame - 2D Data Structure</li>
                <li className="list-group-item">Creating Series and DataFrames</li>
                <li className="list-group-item">Basic Operations on Data Structures</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>DataFrame Operations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">head() and tail()</li>
                <li className="list-group-item">info() and describe()</li>
                <li className="list-group-item">shape, columns, and dtypes</li>
                <li className="list-group-item">Basic Statistics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-filter-square text-primary me-2"></i>Indexing & Selection</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Label-based indexing with loc[]</li>
                <li className="list-group-item">Position-based indexing with iloc[]</li>
                <li className="list-group-item">Boolean Indexing</li>
                <li className="list-group-item">Conditional Filtering</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-pencil-square text-primary me-2"></i>Data Cleaning</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Handling Missing Data</li>
                <li className="list-group-item">Removing Duplicates</li>
                <li className="list-group-item">Data Type Conversion</li>
                <li className="list-group-item">Renaming Columns</li>
                <li className="list-group-item">Adding/Removing Columns</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-collection text-primary me-2"></i>GroupBy Operations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Grouping Data</li>
                <li className="list-group-item">Aggregation Functions</li>
                <li className="list-group-item">Multi-level Grouping</li>
                <li className="list-group-item">Pivot Tables</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-sort-alpha-down text-primary me-2"></i>Sorting & Ranking</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Sorting by Values</li>
                <li className="list-group-item">Sorting by Index</li>
                <li className="list-group-item">Ranking Data</li>
                <li className="list-group-item">Multi-level Sorting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-merge text-primary me-2"></i>Combining DataFrames</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Concatenation</li>
                <li className="list-group-item">Merging (SQL-style joins)</li>
                <li className="list-group-item">Joining</li>
                <li className="list-group-item">Appending Data</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark text-primary me-2"></i>File I/O Operations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Reading CSV Files</li>
                <li className="list-group-item">Writing to CSV</li>
                <li className="list-group-item">Excel File Operations</li>
                <li className="list-group-item">Working with JSON</li>
                <li className="list-group-item">Database Operations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-calendar text-primary me-2"></i>Time Series Data</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Date/Time Data Types</li>
                <li className="list-group-item">Time-based Indexing</li>
                <li className="list-group-item">Resampling</li>
                <li className="list-group-item">Rolling Windows</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightning text-primary me-2"></i>Apply Functions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">apply() method</li>
                <li className="list-group-item">map() method</li>
                <li className="list-group-item">Lambda Functions</li>
                <li className="list-group-item">Vectorized Operations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-graph-up text-primary me-2"></i>Data Visualization</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic Plotting with Pandas</li>
                <li className="list-group-item">Integration with Matplotlib</li>
                <li className="list-group-item">Common Plot Types</li>
                <li className="list-group-item">Customizing Plots</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cpu text-primary me-2"></i>Advanced Topics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Multi-indexing</li>
                <li className="list-group-item">Memory Optimization</li>
                <li className="list-group-item">Categorical Data</li>
                <li className="list-group-item">Text Data Operations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-speedometer text-primary me-2"></i>Performance Optimization</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Vectorization</li>
                <li className="list-group-item">Iteration Methods</li>
                <li className="list-group-item">Query Optimization</li>
                <li className="list-group-item">Parallel Processing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-check-circle text-primary me-2"></i>Real-world Applications</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Data Cleaning Projects</li>
                <li className="list-group-item">Exploratory Data Analysis</li>
                <li className="list-group-item">Data Preparation for ML</li>
                <li className="list-group-item">Business Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PandasSyllabus;