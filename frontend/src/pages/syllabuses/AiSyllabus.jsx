import React from 'react';

function AiSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-robot"></i> Artificial Intelligence Syllabus</h1>
          <p className="lead">Comprehensive Coverage of AI Concepts and Technologies</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to AI</h2>
            <ul>
              <li>What is Artificial Intelligence?</li>
              <li>History and Evolution of AI</li>
              <li>Types of AI (Narrow, General, Super)</li>
              <li>AI vs Human Intelligence</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-share"></i> Branches of AI</h2>
            <ul>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Computer Vision</li>
              <li>Robotics</li>
              <li>Expert Systems</li>
              <li>Reinforcement Learning</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Machine Learning Fundamentals</h2>
            <ul>
              <li>Supervised Learning</li>
              <li>Unsupervised Learning</li>
              <li>Reinforcement Learning</li>
              <li>ML Workflow and Pipeline</li>
              <li>Feature Engineering</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cpu"></i> ML Algorithms</h2>
            <ul>
              <li>Linear & Logistic Regression</li>
              <li>Decision Trees and Random Forest</li>
              <li>Support Vector Machines (SVM)</li>
              <li>K-Nearest Neighbors (KNN)</li>
              <li>Naive Bayes</li>
              <li>Clustering Algorithms (K-Means, Hierarchical)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up"></i> Model Evaluation</h2>
            <ul>
              <li>Classification Metrics (Accuracy, Precision, Recall, F1)</li>
              <li>Regression Metrics (MAE, MSE, R²)</li>
              <li>Confusion Matrix</li>
              <li>ROC Curve and AUC</li>
              <li>Cross-Validation Techniques</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-layers"></i> Deep Learning</h2>
            <ul>
              <li>Neural Networks Basics</li>
              <li>Activation Functions</li>
              <li>CNN (Convolutional Neural Networks)</li>
              <li>RNN & LSTM (Recurrent Networks)</li>
              <li>Transformers and Attention Mechanisms</li>
              <li>GANs (Generative Adversarial Networks)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-chat-left-text"></i> Natural Language Processing</h2>
            <ul>
              <li>Text Preprocessing (Tokenization, Stemming, etc.)</li>
              <li>Word Embeddings (Word2Vec, GloVe)</li>
              <li>Sentiment Analysis</li>
              <li>Named Entity Recognition</li>
              <li>Language Models (BERT, GPT)</li>
              <li>Chatbot Development</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-eye"></i> Computer Vision</h2>
            <ul>
              <li>Image Processing Basics</li>
              <li>Object Detection</li>
              <li>Image Classification</li>
              <li>Face Recognition</li>
              <li>Optical Character Recognition (OCR)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-slash"></i> AI Tools and Frameworks</h2>
            <ul>
              <li>Python for AI</li>
              <li>NumPy and Pandas</li>
              <li>Scikit-learn</li>
              <li>TensorFlow and Keras</li>
              <li>PyTorch</li>
              <li>OpenCV</li>
              <li>Hugging Face Transformers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightbulb"></i> AI Applications</h2>
            <ul>
              <li>Healthcare (Disease Prediction, Medical Imaging)</li>
              <li>Finance (Fraud Detection, Algorithmic Trading)</li>
              <li>E-commerce (Recommendation Systems)</li>
              <li>Autonomous Vehicles</li>
              <li>Smart Assistants</li>
              <li>Content Generation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-universal-access"></i> AI Ethics and Challenges</h2>
            <ul>
              <li>Bias and Fairness in AI</li>
              <li>Privacy Concerns</li>
              <li>Explainable AI</li>
              <li>AI Safety</li>
              <li>Future of AI</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-trophy"></i> Reinforcement Learning</h2>
            <ul>
              <li>Markov Decision Processes</li>
              <li>Q-Learning</li>
              <li>Deep Q Networks</li>
              <li>Policy Gradient Methods</li>
              <li>Applications in Gaming and Robotics</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cloud"></i> AI Deployment</h2>
            <ul>
              <li>Model Serialization</li>
              <li>API Development for AI Models</li>
              <li>Cloud Deployment (AWS, GCP, Azure)</li>
              <li>Edge AI and IoT Integration</li>
              <li>Model Monitoring and Maintenance</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-search"></i> AI Research Trends</h2>
            <ul>
              <li>Large Language Models</li>
              <li>Multimodal AI</li>
              <li>Generative AI</li>
              <li>Self-supervised Learning</li>
              <li>Neuromorphic Computing</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-kanban"></i> AI Project Management</h2>
            <ul>
              <li>CRISP-DM Methodology</li>
              <li>Data Collection and Annotation</li>
              <li>Experiment Tracking</li>
              <li>Team Collaboration in AI Projects</li>
              <li>Documentation Best Practices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiSyllabus;