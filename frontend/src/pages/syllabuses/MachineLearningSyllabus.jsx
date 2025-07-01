import React from 'react';

function MachineLearningSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-robot fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Machine Learning Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Machine Learning Concepts and Techniques</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Machine Learning</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Machine Learning?</li>
                <li className="list-group-item">Types of Machine Learning</li>
                <li className="list-group-item">Applications of ML</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-filetype-py text-primary me-2"></i>Python for ML</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Essential Python Libraries</li>
                <li className="list-group-item">Data Handling</li>
                <li className="list-group-item">Basic Statistics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>Data Preprocessing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Data Cleaning</li>
                <li className="list-group-item">Handling Missing Values</li>
                <li className="list-group-item">Feature Scaling</li>
                <li className="list-group-item">Train-Test Split</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bookmark-check text-primary me-2"></i>Supervised Learning</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Linear/Logistic Regression</li>
                <li className="list-group-item">Decision Trees</li>
                <li className="list-group-item">Support Vector Machines</li>
                <li className="list-group-item">k-Nearest Neighbors</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bookmark text-primary me-2"></i>Unsupervised Learning</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Clustering Algorithms</li>
                <li className="list-group-item">Dimensionality Reduction</li>
                <li className="list-group-item">Association Rule Learning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-graph-up text-primary me-2"></i>Model Evaluation</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Evaluation Metrics</li>
                <li className="list-group-item">Confusion Matrix</li>
                <li className="list-group-item">Cross-Validation</li>
                <li className="list-group-item">Bias-Variance Tradeoff</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cloud-upload text-primary me-2"></i>Model Deployment</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">ML Deployment Basics</li>
                <li className="list-group-item">Flask/FastAPI</li>
                <li className="list-group-item">Docker</li>
                <li className="list-group-item">Cloud Deployment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-boxes text-primary me-2"></i>ML Libraries & Frameworks</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Scikit-learn</li>
                <li className="list-group-item">TensorFlow/Keras</li>
                <li className="list-group-item">PyTorch</li>
                <li className="list-group-item">XGBoost/LightGBM</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightbulb text-primary me-2"></i>ML Project Lifecycle</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Problem Definition</li>
                <li className="list-group-item">Data Collection</li>
                <li className="list-group-item">Model Building</li>
                <li className="list-group-item">Deployment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-controller text-primary me-2"></i>Reinforcement Learning</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">RL Fundamentals</li>
                <li className="list-group-item">Markov Decision Processes</li>
                <li className="list-group-item">Q-Learning</li>
                <li className="list-group-item">Applications</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightbulb text-primary me-2"></i>Real-world ML Projects</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Project Examples</li>
                <li className="list-group-item">Case Studies</li>
                <li className="list-group-item">Best Practices</li>
                <li className="list-group-item">Common Pitfalls</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MachineLearningSyllabus;