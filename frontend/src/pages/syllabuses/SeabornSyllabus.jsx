import React from 'react';

function SeabornSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-graph-up"></i> Seaborn Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Data Visualization with Seaborn</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Seaborn</h2>
            <ul>
              <li>What is Seaborn?</li>
              <li>Advantages over Matplotlib</li>
              <li>Seaborn vs Other Visualization Libraries</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-download"></i> Installation & Setup</h2>
            <ul>
              <li>Installing Seaborn</li>
              <li>Importing Seaborn</li>
              <li>Loading Example Datasets</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bar-chart"></i> Basic Plots</h2>
            <ul>
              <li>Line Plots (sns.lineplot)</li>
              <li>Bar Plots (sns.barplot)</li>
              <li>Count Plots (sns.countplot)</li>
              <li>Histograms (sns.histplot)</li>
              <li>Box Plots (sns.boxplot)</li>
              <li>Violin Plots (sns.violinplot)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-filter-square"></i> Categorical Plots</h2>
            <ul>
              <li>catplot() Overview</li>
              <li>Strip Plots (sns.stripplot)</li>
              <li>Swarm Plots (sns.swarmplot)</li>
              <li>Using Hue Parameter</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-distribute-vertical"></i> Distribution Plots</h2>
            <ul>
              <li>Kernel Density Estimates (sns.kdeplot)</li>
              <li>ECDF Plots (sns.ecdfplot)</li>
              <li>Comparing Multiple Distributions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-share"></i> Relational Plots</h2>
            <ul>
              <li>Scatter Plots (sns.scatterplot)</li>
              <li>Line Plots (sns.lineplot)</li>
              <li>relplot() Function</li>
              <li>Multi-dimensional Plots with Hue/Style/Size</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-grid-3x3"></i> Matrix Plots</h2>
            <ul>
              <li>Heatmaps (sns.heatmap)</li>
              <li>Cluster Maps (sns.clustermap)</li>
              <li>Working with Pivot Tables</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-3"></i> Multivariate Plots</h2>
            <ul>
              <li>Pair Plots (sns.pairplot)</li>
              <li>Joint Plots (sns.jointplot)</li>
              <li>LM Plots (sns.lmplot)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-palette"></i> Styling & Themes</h2>
            <ul>
              <li>Seaborn Themes (set_style)</li>
              <li>Color Palettes (set_palette)</li>
              <li>Context Settings (set_context)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-save"></i> Saving Plots</h2>
            <ul>
              <li>Basic Saving with savefig()</li>
              <li>High-Resolution Output</li>
              <li>Different File Formats</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-text"></i> Real-World Examples</h2>
            <ul>
              <li>Titanic Dataset Analysis</li>
              <li>Iris Dataset Visualization</li>
              <li>Tips Dataset Exploration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Advanced Topics</h2>
            <ul>
              <li>Customizing Plot Aesthetics</li>
              <li>Working with Subplots</li>
              <li>Combining Seaborn with Matplotlib</li>
              <li>Performance Considerations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeabornSyllabus;