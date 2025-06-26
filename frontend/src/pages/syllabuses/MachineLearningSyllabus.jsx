import React from 'react';

function MachineLearningSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-robot"></i> Machine Learning Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Machine Learning Concepts and Techniques</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Machine Learning</h2>
            <ul>
              <li>What is Machine Learning?</li>
              <li>Types of Machine Learning (Supervised, Unsupervised, Reinforcement)</li>
              <li>Applications of Machine Learning</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-filetype-py"></i> Python for Machine Learning</h2>
            <ul>
              <li>Essential Python Libraries (NumPy, Pandas, Matplotlib)</li>
              <li>Data Handling and Visualization</li>
              <li>Basic Statistics for ML</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> Data Preprocessing</h2>
            <ul>
              <li>Data Cleaning and Transformation</li>
              <li>Handling Missing Values</li>
              <li>Feature Scaling and Encoding</li>
              <li>Train-Test Split</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bookmark-check"></i> Supervised Learning</h2>
            <ul>
              <li>Linear and Logistic Regression</li>
              <li>Decision Trees and Random Forests</li>
              <li>Support Vector Machines (SVM)</li>
              <li>k-Nearest Neighbors (k-NN)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bookmark"></i> Unsupervised Learning</h2>
            <ul>
              <li>Clustering Algorithms (k-Means, Hierarchical)</li>
              <li>Dimensionality Reduction (PCA, t-SNE)</li>
              <li>Association Rule Learning</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up"></i> Model Evaluation</h2>
            <ul>
              <li>Evaluation Metrics (Accuracy, Precision, Recall, F1)</li>
              <li>Confusion Matrix</li>
              <li>Cross-Validation Techniques</li>
              <li>Bias-Variance Tradeoff</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cloud-upload"></i> Model Deployment</h2>
            <ul>
              <li>Introduction to ML Deployment</li>
              <li>Flask/FastAPI for Model Serving</li>
              <li>Docker for Containerization</li>
              <li>Cloud Deployment Options</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-boxes"></i> ML Libraries & Frameworks</h2>
            <ul>
              <li>Scikit-learn</li>
              <li>TensorFlow and Keras</li>
              <li>PyTorch</li>
              <li>XGBoost and LightGBM</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightbulb"></i> ML Project Lifecycle</h2>
            <ul>
              <li>Problem Definition</li>
              <li>Data Collection and Preparation</li>
              <li>Model Building and Evaluation</li>
              <li>Deployment and Monitoring</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-controller"></i> Reinforcement Learning</h2>
            <ul>
              <li>Fundamentals of RL</li>
              <li>Markov Decision Processes</li>
              <li>Q-Learning and Deep Q Networks</li>
              <li>Applications of RL</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-people"></i> Ensemble Methods</h2>
            <ul>
              <li>Bagging and Boosting</li>
              <li>Random Forests</li>
              <li>AdaBoost and Gradient Boosting</li>
              <li>Stacking and Voting Classifiers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-text-paragraph"></i> Natural Language Processing</h2>
            <ul>
              <li>Text Preprocessing</li>
              <li>Word Embeddings (Word2Vec, GloVe)</li>
              <li>Sentiment Analysis</li>
              <li>Text Classification</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-image"></i> Computer Vision</h2>
            <ul>
              <li>Image Processing Basics</li>
              <li>Convolutional Neural Networks (CNNs)</li>
              <li>Object Detection</li>
              <li>Image Classification</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up-arrow"></i> Time Series Analysis</h2>
            <ul>
              <li>Time Series Components</li>
              <li>ARIMA Models</li>
              <li>LSTMs for Time Series</li>
              <li>Forecasting Techniques</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> Model Interpretability</h2>
            <ul>
              <li>Feature Importance</li>
              <li>SHAP Values</li>
              <li>LIME</li>
              <li>Model Explainability Tools</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Hyperparameter Tuning</h2>
            <ul>
              <li>Grid Search and Random Search</li>
              <li>Bayesian Optimization</li>
              <li>Hyperopt</li>
              <li>Optuna</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-hdd-stack"></i> Neural Networks & Deep Learning</h2>
            <ul>
              <li>Perceptrons and Activation Functions</li>
              <li>Backpropagation</li>
              <li>Deep Neural Networks</li>
              <li>Regularization Techniques</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-clipboard-data"></i> Feature Engineering</h2>
            <ul>
              <li>Feature Selection Methods</li>
              <li>Feature Extraction</li>
              <li>Feature Creation</li>
              <li>Handling Imbalanced Data</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cloud"></i> MLOps Fundamentals</h2>
            <ul>
              <li>ML Pipelines</li>
              <li>Model Versioning</li>
              <li>Continuous Integration/Deployment</li>
              <li>Monitoring ML Models</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cpu"></i> AI Ethics and Bias</h2>
            <ul>
              <li>Ethical Considerations in AI</li>
              <li>Identifying and Mitigating Bias</li>
              <li>Fairness in Machine Learning</li>
              <li>Responsible AI Practices</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightbulb"></i> Real-world ML Projects</h2>
            <ul>
              <li>End-to-End Project Examples</li>
              <li>Case Studies</li>
              <li>Best Practices</li>
              <li>Common Pitfalls</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MachineLearningSyllabus;