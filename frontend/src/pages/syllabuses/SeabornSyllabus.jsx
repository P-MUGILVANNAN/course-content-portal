import React from 'react';

function SeabornSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-graph-up fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Seaborn Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Data Visualization with Seaborn</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Seaborn</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Seaborn?</li>
                <li className="list-group-item">Advantages over Matplotlib</li>
                <li className="list-group-item">Seaborn vs Other Visualization Libraries</li>
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
                <li className="list-group-item">Installing Seaborn</li>
                <li className="list-group-item">Importing Seaborn</li>
                <li className="list-group-item">Loading Example Datasets</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bar-chart text-primary me-2"></i>Basic Plots</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Line Plots (sns.lineplot)</li>
                <li className="list-group-item">Bar Plots (sns.barplot)</li>
                <li className="list-group-item">Count Plots (sns.countplot)</li>
                <li className="list-group-item">Histograms (sns.histplot)</li>
                <li className="list-group-item">Box Plots (sns.boxplot)</li>
                <li className="list-group-item">Violin Plots (sns.violinplot)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-filter-square text-primary me-2"></i>Categorical Plots</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">catplot() Overview</li>
                <li className="list-group-item">Strip Plots (sns.stripplot)</li>
                <li className="list-group-item">Swarm Plots (sns.swarmplot)</li>
                <li className="list-group-item">Using Hue Parameter</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-distribute-vertical text-primary me-2"></i>Distribution Plots</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Kernel Density Estimates (sns.kdeplot)</li>
                <li className="list-group-item">ECDF Plots (sns.ecdfplot)</li>
                <li className="list-group-item">Comparing Multiple Distributions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-share text-primary me-2"></i>Relational Plots</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Scatter Plots (sns.scatterplot)</li>
                <li className="list-group-item">Line Plots (sns.lineplot)</li>
                <li className="list-group-item">relplot() Function</li>
                <li className="list-group-item">Multi-dimensional Plots with Hue/Style/Size</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-grid-3x3 text-primary me-2"></i>Matrix Plots</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Heatmaps (sns.heatmap)</li>
                <li className="list-group-item">Cluster Maps (sns.clustermap)</li>
                <li className="list-group-item">Working with Pivot Tables</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-3 text-primary me-2"></i>Multivariate Plots</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Pair Plots (sns.pairplot)</li>
                <li className="list-group-item">Joint Plots (sns.jointplot)</li>
                <li className="list-group-item">LM Plots (sns.lmplot)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-palette text-primary me-2"></i>Styling & Themes</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Seaborn Themes (set_style)</li>
                <li className="list-group-item">Color Palettes (set_palette)</li>
                <li className="list-group-item">Context Settings (set_context)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-save text-primary me-2"></i>Saving Plots</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic Saving with savefig()</li>
                <li className="list-group-item">High-Resolution Output</li>
                <li className="list-group-item">Different File Formats</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-text text-primary me-2"></i>Real-World Examples</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Titanic Dataset Analysis</li>
                <li className="list-group-item">Iris Dataset Visualization</li>
                <li className="list-group-item">Tips Dataset Exploration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Advanced Topics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Customizing Plot Aesthetics</li>
                <li className="list-group-item">Working with Subplots</li>
                <li className="list-group-item">Combining Seaborn with Matplotlib</li>
                <li className="list-group-item">Performance Considerations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeabornSyllabus;