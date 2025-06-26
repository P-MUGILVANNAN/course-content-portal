import React from 'react';

function MatplotlibSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-graph-up"></i> Matplotlib Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Python Data Visualization</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Matplotlib</h2>
            <ul>
              <li>What is Matplotlib?</li>
              <li>Importance of Data Visualization</li>
              <li>Matplotlib vs Other Visualization Libraries</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-download"></i> Installation & Setup</h2>
            <ul>
              <li>Installing Matplotlib</li>
              <li>Jupyter Notebook Integration</li>
              <li>Basic Import Statements</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up"></i> Basic Plotting</h2>
            <ul>
              <li>Figure and Axes Concepts</li>
              <li>plt.plot() Function</li>
              <li>Adding Titles and Labels</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bar-chart-line"></i> Line Plots</h2>
            <ul>
              <li>Creating Simple Line Graphs</li>
              <li>Customizing Line Styles</li>
              <li>Markers and Annotations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bar-chart"></i> Bar Charts</h2>
            <ul>
              <li>Vertical and Horizontal Bars</li>
              <li>Grouped and Stacked Bars</li>
              <li>Error Bars</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-pie-chart"></i> Pie Charts</h2>
            <ul>
              <li>Basic Pie Charts</li>
              <li>Exploded Slices</li>
              <li>Donut Charts</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bar-chart-steps"></i> Histograms</h2>
            <ul>
              <li>Understanding Bins</li>
              <li>Density Plots</li>
              <li>Cumulative Histograms</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-scatter"></i> Scatter Plots</h2>
            <ul>
              <li>Basic Scatter Plots</li>
              <li>Bubble Charts</li>
              <li>3D Scatter Plots</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-layers"></i> Multiple Plots</h2>
            <ul>
              <li>Plotting Multiple Datasets</li>
              <li>Legends and Annotations</li>
              <li>Dual Axis Plots</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-grid-3x3"></i> Subplots</h2>
            <ul>
              <li>plt.subplot() Function</li>
              <li>GridSpec for Complex Layouts</li>
              <li>Shared Axes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-palette"></i> Customization</h2>
            <ul>
              <li>Colors and Styles</li>
              <li>Text and Annotations</li>
              <li>Grids and Ticks</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-aspect-ratio"></i> Figure Configuration</h2>
            <ul>
              <li>Figure Size and DPI</li>
              <li>Saving Figures</li>
              <li>Different File Formats</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark"></i> Working with Data</h2>
            <ul>
              <li>Plotting from Pandas DataFrames</li>
              <li>Handling Missing Data</li>
              <li>Time Series Visualization</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calendar"></i> Date Handling</h2>
            <ul>
              <li>Plotting Time Series</li>
              <li>Date Formatting</li>
              <li>Custom Date Locators</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up-arrow"></i> Advanced Plots</h2>
            <ul>
              <li>Box Plots</li>
              <li>Violin Plots</li>
              <li>Contour Plots</li>
              <li>Polar Plots</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bounding-box"></i> 3D Plotting</h2>
            <ul>
              <li>3D Surface Plots</li>
              <li>3D Wireframe Plots</li>
              <li>3D Scatter Plots</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-universal-access"></i> Animation</h2>
            <ul>
              <li>Basic Animation</li>
              <li>Interactive Plots</li>
              <li>Widgets Integration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-filetype-py"></i> Matplotlib with Pandas</h2>
            <ul>
              <li>DataFrame.plot() Methods</li>
              <li>Visualizing Statistical Data</li>
              <li>Correlation Matrices</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Backends & Export</h2>
            <ul>
              <li>Different Backends</li>
              <li>Interactive vs Non-Interactive</li>
              <li>Exporting for Publications</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-check-circle"></i> Best Practices</h2>
            <ul>
              <li>Effective Visualization Principles</li>
              <li>Common Pitfalls</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatplotlibSyllabus;