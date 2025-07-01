import React from 'react';

function AiSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-secondary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-robot fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Artificial Intelligence Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of AI Concepts and Technologies</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to AI</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Artificial Intelligence?</li>
                <li className="list-group-item">History and Evolution of AI</li>
                <li className="list-group-item">Types of AI (Narrow, General, Super)</li>
                <li className="list-group-item">AI vs Human Intelligence</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-share text-primary me-2"></i>Branches of AI</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Machine Learning</li>
                <li className="list-group-item">Deep Learning</li>
                <li className="list-group-item">Natural Language Processing (NLP)</li>
                <li className="list-group-item">Computer Vision</li>
                <li className="list-group-item">Robotics</li>
                <li className="list-group-item">Expert Systems</li>
                <li className="list-group-item">Reinforcement Learning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Machine Learning Fundamentals</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Supervised Learning</li>
                <li className="list-group-item">Unsupervised Learning</li>
                <li className="list-group-item">Reinforcement Learning</li>
                <li className="list-group-item">ML Workflow and Pipeline</li>
                <li className="list-group-item">Feature Engineering</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cpu text-primary me-2"></i>ML Algorithms</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Linear & Logistic Regression</li>
                <li className="list-group-item">Decision Trees and Random Forest</li>
                <li className="list-group-item">Support Vector Machines (SVM)</li>
                <li className="list-group-item">K-Nearest Neighbors (KNN)</li>
                <li className="list-group-item">Naive Bayes</li>
                <li className="list-group-item">Clustering Algorithms (K-Means, Hierarchical)</li>
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
                <li className="list-group-item">Classification Metrics (Accuracy, Precision, Recall, F1)</li>
                <li className="list-group-item">Regression Metrics (MAE, MSE, R²)</li>
                <li className="list-group-item">Confusion Matrix</li>
                <li className="list-group-item">ROC Curve and AUC</li>
                <li className="list-group-item">Cross-Validation Techniques</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layers text-primary me-2"></i>Deep Learning</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Neural Networks Basics</li>
                <li className="list-group-item">Activation Functions</li>
                <li className="list-group-item">CNN (Convolutional Neural Networks)</li>
                <li className="list-group-item">RNN & LSTM (Recurrent Networks)</li>
                <li className="list-group-item">Transformers and Attention Mechanisms</li>
                <li className="list-group-item">GANs (Generative Adversarial Networks)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-chat-left-text text-primary me-2"></i>Natural Language Processing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Text Preprocessing (Tokenization, Stemming, etc.)</li>
                <li className="list-group-item">Word Embeddings (Word2Vec, GloVe)</li>
                <li className="list-group-item">Sentiment Analysis</li>
                <li className="list-group-item">Named Entity Recognition</li>
                <li className="list-group-item">Language Models (BERT, GPT)</li>
                <li className="list-group-item">Chatbot Development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-eye text-primary me-2"></i>Computer Vision</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Image Processing Basics</li>
                <li className="list-group-item">Object Detection</li>
                <li className="list-group-item">Image Classification</li>
                <li className="list-group-item">Face Recognition</li>
                <li className="list-group-item">Optical Character Recognition (OCR)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-slash text-primary me-2"></i>AI Tools and Frameworks</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Python for AI</li>
                <li className="list-group-item">NumPy and Pandas</li>
                <li className="list-group-item">Scikit-learn</li>
                <li className="list-group-item">TensorFlow and Keras</li>
                <li className="list-group-item">PyTorch</li>
                <li className="list-group-item">OpenCV</li>
                <li className="list-group-item">Hugging Face Transformers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightbulb text-primary me-2"></i>AI Applications</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Healthcare (Disease Prediction, Medical Imaging)</li>
                <li className="list-group-item">Finance (Fraud Detection, Algorithmic Trading)</li>
                <li className="list-group-item">E-commerce (Recommendation Systems)</li>
                <li className="list-group-item">Autonomous Vehicles</li>
                <li className="list-group-item">Smart Assistants</li>
                <li className="list-group-item">Content Generation</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AiSyllabus;