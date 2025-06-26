import React from 'react';

function PandasSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-file-earmark-spreadsheet"></i> Pandas Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Data Analysis with Pandas</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Pandas</h2>
            <ul>
              <li>What is Pandas?</li>
              <li>Key Features of Pandas</li>
              <li>Advantages of Using Pandas</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-download"></i> Installation & Setup</h2>
            <ul>
              <li>Installing Pandas</li>
              <li>Importing Pandas</li>
              <li>Checking Pandas Version</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-table"></i> Pandas Data Structures</h2>
            <ul>
              <li>Series - 1D Data Structure</li>
              <li>DataFrame - 2D Data Structure</li>
              <li>Creating Series and DataFrames</li>
              <li>Basic Operations on Data Structures</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> DataFrame Operations</h2>
            <ul>
              <li>head() and tail()</li>
              <li>info() and describe()</li>
              <li>shape, columns, and dtypes</li>
              <li>Basic Statistics</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-filter-square"></i> Indexing & Selection</h2>
            <ul>
              <li>Label-based indexing with loc[]</li>
              <li>Position-based indexing with iloc[]</li>
              <li>Boolean Indexing</li>
              <li>Conditional Filtering</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-pencil-square"></i> Data Cleaning</h2>
            <ul>
              <li>Handling Missing Data</li>
              <li>Removing Duplicates</li>
              <li>Data Type Conversion</li>
              <li>Renaming Columns</li>
              <li>Adding/Removing Columns</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> GroupBy Operations</h2>
            <ul>
              <li>Grouping Data</li>
              <li>Aggregation Functions</li>
              <li>Multi-level Grouping</li>
              <li>Pivot Tables</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-sort-alpha-down"></i> Sorting & Ranking</h2>
            <ul>
              <li>Sorting by Values</li>
              <li>Sorting by Index</li>
              <li>Ranking Data</li>
              <li>Multi-level Sorting</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-merge"></i> Combining DataFrames</h2>
            <ul>
              <li>Concatenation</li>
              <li>Merging (SQL-style joins)</li>
              <li>Joining</li>
              <li>Appending Data</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark"></i> File I/O Operations</h2>
            <ul>
              <li>Reading CSV Files</li>
              <li>Writing to CSV</li>
              <li>Excel File Operations</li>
              <li>Working with JSON</li>
              <li>Database Operations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calendar"></i> Time Series Data</h2>
            <ul>
              <li>Date/Time Data Types</li>
              <li>Time-based Indexing</li>
              <li>Resampling</li>
              <li>Rolling Windows</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightning"></i> Apply Functions</h2>
            <ul>
              <li>apply() method</li>
              <li>map() method</li>
              <li>Lambda Functions</li>
              <li>Vectorized Operations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up"></i> Data Visualization</h2>
            <ul>
              <li>Basic Plotting with Pandas</li>
              <li>Integration with Matplotlib</li>
              <li>Common Plot Types</li>
              <li>Customizing Plots</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cpu"></i> Advanced Topics</h2>
            <ul>
              <li>Multi-indexing</li>
              <li>Memory Optimization</li>
              <li>Categorical Data</li>
              <li>Text Data Operations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-speedometer"></i> Performance Optimization</h2>
            <ul>
              <li>Vectorization</li>
              <li>Iteration Methods</li>
              <li>Query Optimization</li>
              <li>Parallel Processing</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-check-circle"></i> Real-world Applications</h2>
            <ul>
              <li>Data Cleaning Projects</li>
              <li>Exploratory Data Analysis</li>
              <li>Data Preparation for ML</li>
              <li>Business Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PandasSyllabus;