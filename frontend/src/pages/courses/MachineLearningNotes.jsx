import React from 'react';

function MachineLearningNotes() {
  return (
    <div className="bg-light">
      <style>
        {`
          pre {
            background-color: #1f2937;
            color: #e5e7eb;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
          }
          code {
            font-family: 'Courier New', monospace;
          }
          .sidebar {
            position: sticky;
            top: 1rem;
            height: calc(100vh - 2rem);
            overflow-y: auto;
          }
          @media (max-width: 991.98px) {
            .sidebar {
              position: static;
              height: auto;
              margin-bottom: 20px;
              overflow-y: visible;
            }
          }
          .nav-link {
            color: #495057;
          }
          .nav-link:hover {
            color: #0d6efd;
          }
          .property-card {
            background-color: #f8f9fa;
            border-left: 4px solid #0d6efd;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 4px;
          }
          .example-box {
            background-color: #e9ecef;
            border-radius: 5px;
            padding: 15px;
            margin: 10px 0;
          }
          .table-responsive {
            overflow-x: auto;
          }
        `}
      </style>

      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-robot"></i> Machine Learning Notes</h1>
          <p className="lead">Comprehensive Guide to Machine Learning Concepts and Implementation</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction to ML</a>
              <a className="nav-link" href="#python-ml"><i className="bi bi-filetype-py"></i> Python for ML</a>
              <a className="nav-link" href="#preprocessing"><i className="bi bi-database"></i> Data Preprocessing</a>
              <a className="nav-link" href="#supervised"><i className="bi bi-bookmark-check"></i> Supervised Learning</a>
              <a className="nav-link" href="#unsupervised"><i className="bi bi-bookmark"></i> Unsupervised Learning</a>
              <a className="nav-link" href="#evaluation"><i className="bi bi-graph-up"></i> Model Evaluation</a>
              <a className="nav-link" href="#deployment"><i className="bi bi-cloud-upload"></i> Model Deployment</a>
              <a className="nav-link" href="#libraries"><i className="bi bi-boxes"></i> ML Libraries</a>
              <a className="nav-link" href="#projects"><i className="bi bi-lightbulb"></i> Project Ideas</a>
              <a className="nav-link" href="#reinforcement"><i className="bi bi-controller"></i> Reinforcement Learning</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Topic 1: Introduction to Machine Learning</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Machine Learning (ML) is a subset of Artificial Intelligence (AI) that enables computers to learn from data and make decisions or predictions without being explicitly programmed.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Types of Machine Learning</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Supervised</strong></td>
                        <td>Model learns from labeled data</td>
                        <td>Predicting house prices</td>
                      </tr>
                      <tr>
                        <td><strong>Unsupervised</strong></td>
                        <td>Model finds hidden patterns in unlabeled data</td>
                        <td>Customer segmentation</td>
                      </tr>
                      <tr>
                        <td><strong>Reinforcement</strong></td>
                        <td>Model learns through rewards and punishments to maximize performance</td>
                        <td>Game AI learning to win a game</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Life Examples</h3>
                <ul>
                  <li>Netflix movie recommendations (Supervised)</li>
                  <li>Customer segmentation in marketing (Unsupervised)</li>
                  <li>Self-driving cars learning to drive (Reinforcement)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Difference between AI, ML, and Deep Learning</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Concept</th>
                        <th>Scope</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>AI</strong></td>
                        <td>Broad concept of machines mimicking human intelligence</td>
                        <td>Siri, Alexa</td>
                      </tr>
                      <tr>
                        <td><strong>ML</strong></td>
                        <td>Subset of AI, focused on learning from data</td>
                        <td>Spam filtering in emails</td>
                      </tr>
                      <tr>
                        <td><strong>Deep Learning</strong></td>
                        <td>Subset of ML using neural networks</td>
                        <td>Face recognition, voice assistants</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="python-ml" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-filetype-py"></i> Topic 2: Python for Machine Learning</h2>
              
              <div className="property-card">
                <h3 className="h4">Why Python?</h3>
                <p>Python is the most popular programming language for Machine Learning due to:</p>
                <ul>
                  <li>Simple syntax</li>
                  <li>Large ecosystem of libraries</li>
                  <li>Strong community support</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Essential Python Libraries for ML</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Library</th>
                        <th>Purpose</th>
                        <th>Example Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>NumPy</strong></td>
                        <td>Numerical computations</td>
                        <td>Matrix operations</td>
                      </tr>
                      <tr>
                        <td><strong>Pandas</strong></td>
                        <td>Data manipulation and analysis</td>
                        <td>Reading CSV files, handling missing data</td>
                      </tr>
                      <tr>
                        <td><strong>Matplotlib</strong></td>
                        <td>Data visualization</td>
                        <td>Plotting bar graphs, line charts</td>
                      </tr>
                      <tr>
                        <td><strong>Seaborn</strong></td>
                        <td>Statistical visualizations</td>
                        <td>Heatmaps, distribution plots</td>
                      </tr>
                      <tr>
                        <td><strong>Scikit-learn</strong></td>
                        <td>ML algorithms and tools</td>
                        <td>Classification, regression, clustering</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Code: Basic Data Handling with Pandas</h3>
                <pre><code>{`import pandas as pd

# Load a CSV file
df = pd.read_csv('data.csv')

# Display first 5 rows
print(df.head())

# Summary statistics
print(df.describe())`}</code></pre>
                <div className="example-box">
                  <h5>Output:</h5>
                  <pre className="mb-0"><code>{`Name Age Salary  
0 John 28 50000  
1 Anna 22 48000  
...`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Visualization Example with Matplotlib & Seaborn</h3>
                <pre><code>{`import matplotlib.pyplot as plt
import seaborn as sns

# Plotting salary distribution
sns.histplot(df["Salary"])
plt.title("Salary Distribution")
plt.xlabel("Salary")
plt.ylabel('Frequency')
plt.show()`}</code></pre>
              </div>
            </section>

            <section id="preprocessing" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> Topic 3: Data Preprocessing</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Data preprocessing is the process of cleaning and transforming raw data before feeding it into a Machine Learning model. It is one of the most critical steps in any ML pipeline.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Data Preprocessing is Important?</h3>
                <ul>
                  <li>Improves model accuracy</li>
                  <li>Reduces noise</li>
                  <li>Handles missing or incorrect data</li>
                  <li>Converts data into a machine-readable format</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common Steps in Preprocessing</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Step</th>
                        <th>Description</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Handling Missing Values</strong></td>
                        <td>Filling or removing NaNs</td>
                        <td>Filling NaN with mean</td>
                      </tr>
                      <tr>
                        <td><strong>Encoding Categorical Data</strong></td>
                        <td>Converting categories to numbers</td>
                        <td>LabelEncoding: Male → 0, Female → 1</td>
                      </tr>
                      <tr>
                        <td><strong>Feature Scaling</strong></td>
                        <td>Bringing all values to the same scale</td>
                        <td>StandardScaler or MinMaxScaler</td>
                      </tr>
                      <tr>
                        <td><strong>Train-Test Split</strong></td>
                        <td>Splitting data to train and test sets</td>
                        <td>80% training, 20% testing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Code</h3>
                <pre><code>{`import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Sample data
data = pd.DataFrame({
   'Age': [25, 27, 29, 35, 40],
   'Salary': [50000, 54000, 58000, 60000, 62000]
})

# Scaling the data
scaler = StandardScaler()
scaled_data = scaler.fit_transform(data)

print(scaled_data)`}</code></pre>
                <div className="example-box">
                  <h5>Output (Standardized values):</h5>
                  <pre className="mb-0"><code>{`[[-1.41 -1.41]
[-0.71 -0.71]
[ 0.  0. ]
[ 0.99  0.71]
[ 1.13  1.41]]`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Train-Test Split Example</h3>
                <pre><code>{`X_train, X_test = train_test_split(data, test_size=0.2, random_state=42)
print(X_train.shape) # (4, 2)
print(X_test.shape) # (1, 2)`}</code></pre>
              </div>
            </section>

            <section id="supervised" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bookmark-check"></i> Topic 4: Supervised Learning</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Supervised Learning is a type of Machine Learning where the model is trained on <strong>labeled data</strong>, meaning the input and correct output are both provided. The goal is to learn a mapping from inputs to outputs.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Two Main Types</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Type</th>
                        <th>Task</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Regression</strong></td>
                        <td>Predicting continuous values</td>
                        <td>Predicting house prices</td>
                      </tr>
                      <tr>
                        <td><strong>Classification</strong></td>
                        <td>Predicting categories</td>
                        <td>Spam vs Non-Spam Email</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">A. Regression Example: Linear Regression</h3>
                <p><strong>Use Case:</strong> Predicting the price of a house based on size.</p>
                <pre><code>{`from sklearn.linear_model import LinearRegression
import numpy as np

# Example data
X = np.array([[1000], [1500], [2000], [2500]])
y = np.array([200000, 300000, 400000, 500000])

model = LinearRegression()
model.fit(X, y)

# Predict price for 1800 sq.ft house
predicted_price = model.predict([[1800]])
print(predicted_price)`}</code></pre>
                <div className="example-box">
                  <h5>Output:</h5>
                  <pre className="mb-0"><code>{`[360000.]`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">B. Classification Example: K-Nearest Neighbors (KNN)</h3>
                <p><strong>Use Case:</strong> Predict whether a person buys insurance based on age and income.</p>
                <pre><code>{`from sklearn.neighbors import KNeighborsClassifier

# Sample data: [Age, Income]
X = [[25, 50000], [30, 60000], [35, 70000], [40, 80000]]
y = [0, 0, 1, 1] # 0 = No, 1 = Yes

knn = KNeighborsClassifier(n_neighbors=2)
knn.fit(X, y)

# Predict for a new person
print(knn.predict([[33, 65000]]))`}</code></pre>
                <div className="example-box">
                  <h5>Output:</h5>
                  <pre className="mb-0"><code>{`[1] # Means: Buys insurance`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Evaluation Metrics for Supervised Learning</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Metric</th>
                        <th>Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Accuracy</strong></td>
                        <td>% of correct predictions</td>
                      </tr>
                      <tr>
                        <td><strong>Precision</strong></td>
                        <td>Correct positives / total predicted positives</td>
                      </tr>
                      <tr>
                        <td><strong>Recall</strong></td>
                        <td>Correct positives / total actual positives</td>
                      </tr>
                      <tr>
                        <td><strong>F1-Score</strong></td>
                        <td>Harmonic mean of precision and recall</td>
                      </tr>
                      <tr>
                        <td><strong>R² Score</strong></td>
                        <td>Goodness of fit (for regression)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="unsupervised" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bookmark"></i> Topic 5: Unsupervised Learning</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Unsupervised Learning is a type of Machine Learning where the model is trained on unlabeled data. The system tries to identify patterns or groupings in the data without any guidance.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Main Applications</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Type</th>
                        <th>Purpose</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Clustering</strong></td>
                        <td>Grouping similar data points</td>
                        <td>Customer segmentation</td>
                      </tr>
                      <tr>
                        <td><strong>Dimensionality Reduction</strong></td>
                        <td>Reducing the number of input features</td>
                        <td>PCA for visualization or speed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">A. Clustering Example: K-Means Clustering</h3>
                <p><strong>Use Case:</strong> Segmenting customers based on spending behavior.</p>
                <pre><code>{`from sklearn.cluster import KMeans
import numpy as np

# Sample data: [Annual Income, Spending Score]
X = np.array([[25, 30], [30, 60], [35, 90], [50, 20], [55, 80]])

kmeans = KMeans(n_clusters=2)
kmeans.fit(X)

print("Cluster centers:\n", kmeans.cluster_centers_)
print("Labels:", kmeans.labels_)`}</code></pre>
                <div className="example-box">
                  <h5>Output:</h5>
                  <pre className="mb-0"><code>{`Cluster centers:
[[52.5 50. ]
[30. 60.]]
Labels: [1 1 1 0 0]`}</code></pre>
                  <p>Label output indicates which cluster each data point belongs to.</p>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">B. Dimensionality Reduction Example: PCA (Principal Component Analysis)</h3>
                <p><strong>Use Case:</strong> Visualizing high-dimensional data in 2D.</p>
                <pre><code>{`from sklearn.decomposition import PCA
from sklearn.datasets import load_iris
import matplotlib.pyplot as plt

iris = load_iris()
X = iris.data
y = iris.target

pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)

plt.scatter(X_pca[:, 0], X_pca[:, 1], c=y)
plt.title("PCA on Iris Dataset")
plt.xlabel("PC1")
plt.ylabel("PC2")
plt.show()`}</code></pre>
                <div className="example-box">
                  <h5>Image Output:</h5>
                  <p>A scatter plot with 3 colored groups, showing clusters of the 3 flower types in 2D space.</p>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-World Examples of Unsupervised Learning</h3>
                <ul>
                  <li>Customer Segmentation in marketing</li>
                  <li>Anomaly Detection in fraud detection</li>
                  <li>Document Clustering in NLP</li>
                </ul>
              </div>
            </section>

            <section id="evaluation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-graph-up"></i> Topic 6: Model Evaluation & Selection</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Model evaluation is the process of measuring how well your Machine Learning model performs on unseen/test data. It ensures that the model is not overfitting or underfitting and is generalizing well.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common Evaluation Metrics For Classification Models</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Metric</th>
                        <th>Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Accuracy</strong></td>
                        <td>(Correct Predictions) / (Total Predictions)</td>
                      </tr>
                      <tr>
                        <td><strong>Precision</strong></td>
                        <td>True Positives / (True Positives + False Positives)</td>
                      </tr>
                      <tr>
                        <td><strong>Recall</strong></td>
                        <td>True Positives / (True Positives + False Negatives)</td>
                      </tr>
                      <tr>
                        <td><strong>F1 Score</strong></td>
                        <td>Harmonic Mean of Precision and Recall</td>
                      </tr>
                      <tr>
                        <td><strong>Confusion Matrix</strong></td>
                        <td>Table showing TP, FP, FN, TN</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">For Regression Models</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Metric</th>
                        <th>Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>MSE</strong></td>
                        <td>Mean Squared Error (average squared difference between actual & predicted)</td>
                      </tr>
                      <tr>
                        <td><strong>RMSE</strong></td>
                        <td>Root of MSE</td>
                      </tr>
                      <tr>
                        <td><strong>R² Score</strong></td>
                        <td>How well future samples will be predicted by the model</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example – Classification Metrics</h3>
                <pre><code>{`from sklearn.metrics import accuracy_score, confusion_matrix

y_true = [1, 0, 1, 1, 0]
y_pred = [1, 0, 1, 0, 0]

print("Accuracy:", accuracy_score(y_true, y_pred))
print("Confusion Matrix: \n", confusion_matrix(y_true, y_pred))`}</code></pre>
                <div className="example-box">
                  <h5>Output:</h5>
                  <pre className="mb-0"><code>{`Accuracy: 0.8
Confusion Matrix:
[[2 0]
[1 2]]`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Cross-Validation</h3>
                <p>Cross-validation helps in evaluating model stability by training and testing on different subsets of data.</p>
                <pre><code>{`from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
model = LogisticRegression()
scores = cross_val_score(model, X, y, cv=5)

print("Cross-validation scores:", scores)`}</code></pre>
                <div className="example-box">
                  <h5>Output:</h5>
                  <pre className="mb-0"><code>{`Cross-validation scores: [0.97 0.93 0.97 1.0 0.93]`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Model Selection: Grid Search</h3>
                <p>Helps find the best hyperparameters.</p>
                <pre><code>{`from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC

params = {'kernel': ['linear', 'rbf'], 'C': [1, 10]}
grid = GridSearchCV(SVC(), params, cv=3)
grid.fit(X, y)

print("Best Parameters:", grid.best_params_)`}</code></pre>
                <div className="example-box">
                  <h5>Output:</h5>
                  <pre className="mb-0"><code>{`Best Parameters: {'C': 1, 'kernel': 'linear'}`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Overfitting vs Underfitting</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Term</th>
                        <th>Meaning</th>
                        <th>Solution</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Overfitting</strong></td>
                        <td>Model fits training data too well, fails on test data</td>
                        <td>Use regularization, simplify model</td>
                      </tr>
                      <tr>
                        <td><strong>Underfitting</strong></td>
                        <td>Model cannot capture the pattern</td>
                        <td>Use a complex model, feature engineering</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="deployment" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cloud-upload"></i> Topic 7: Model Deployment</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Model deployment is the process of <strong>integrating a trained machine learning model into a production environment</strong>, where it can be used to make real-time predictions.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Deployment is Important?</h3>
                <p>Training a model is only half the battle — deployment ensures that the model:</p>
                <ul>
                  <li>Delivers value in real applications</li>
                  <li>Is accessible via web, app, or API</li>
                  <li>Can serve live predictions</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common Deployment Methods</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Method</th>
                        <th>Use Case</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Flask / FastAPI</strong></td>
                        <td>Lightweight Python web APIs</td>
                      </tr>
                      <tr>
                        <td><strong>Streamlit / Gradio</strong></td>
                        <td>Interactive frontend for ML apps</td>
                      </tr>
                      <tr>
                        <td><strong>Docker</strong></td>
                        <td>Containerization for consistent deployment</td>
                      </tr>
                      <tr>
                        <td><strong>Cloud (AWS, GCP, Azure)</strong></td>
                        <td>Scalable and enterprise-level deployment</td>
                      </tr>
                      <tr>
                        <td><strong>CI/CD Pipelines</strong></td>
                        <td>Automating build, test, and deploy process</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example: Deploying with Flask</h3>
                <p><strong>Train and Save the Model:</strong></p>
                <pre><code>{`import pickle
from sklearn.linear_model import LinearRegression

model = LinearRegression()
X = [[1], [2], [3], [4]]
y = [2, 4, 6, 8]
model.fit(X, y)

# Save the model
pickle.dump(model, open("model.pkl", "wb"))`}</code></pre>
                
                <p><strong>Create Flask App:</strong></p>
                <pre><code>{`from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)
model = pickle.load(open("model.pkl", "rb"))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    prediction = model.predict([[data['input']]])
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)`}</code></pre>
                
                <p><strong>Test the API using Postman or cURL:</strong></p>
                <pre><code>{`POST http://127.0.0.1:5000/predict
Body: { "input": 5 }
Response: { "prediction": 10.0 }`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Tools for Production ML</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Tool</th>
                        <th>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>MLflow</strong></td>
                        <td>Model tracking & versioning</td>
                      </tr>
                      <tr>
                        <td><strong>Docker</strong></td>
                        <td>Package app + model together</td>
                      </tr>
                      <tr>
                        <td><strong>Kubernetes</strong></td>
                        <td>Scaling deployed containers</td>
                      </tr>
                      <tr>
                        <td><strong>Heroku / Render / Vercel</strong></td>
                        <td>Free hosting options for small apps</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="libraries" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-boxes"></i> Topic 8: Popular ML Libraries & Frameworks</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Scikit-learn</h3>
                <p>Best for beginners and classical ML algorithms</p>
                <ul>
                  <li>Built on NumPy, SciPy, and Matplotlib</li>
                  <li>Provides tools for classification, regression, clustering, dimensionality reduction, model selection</li>
                  <li>Algorithms: SVM, Logistic Regression, KNN, Decision Tree, etc.</li>
                </ul>
                <pre><code>{`from sklearn.ensemble import RandomForestClassifier
model = RandomForestClassifier()`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. TensorFlow & Keras</h3>
                <p>Used for deep learning (neural networks, CNN, RNN, etc.)</p>
                <ul>
                  <li>TensorFlow: Developed by Google</li>
                  <li>Keras: High-level API for TensorFlow</li>
                  <li>Use for large-scale ML, image/audio/NLP projects</li>
                </ul>
                <pre><code>{`from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

model = Sequential()
model.add(Dense(16, activation='relu', input_shape=(4,)))
model.add(Dense(3, activation='softmax'))`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. XGBoost & LightGBM</h3>
                <p>Best for structured/tabular data & Kaggle competitions</p>
                <ul>
                  <li><strong>XGBoost</strong>: Gradient Boosting that's fast and accurate</li>
                  <li><strong>LightGBM</strong>: Faster and lighter alternative</li>
                </ul>
                <pre><code>{`import xgboost as xgb
model = xgb.XGBClassifier()`}</code></pre>
              </div>
            </section>

            <section id="projects" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-lightbulb"></i> Topic 9: Real-Time Mini Project Ideas</h2>
              
              <div className="property-card">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Project Name</th>
                        <th>ML Type</th>
                        <th>Dataset Required</th>
                        <th>Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>House Price Prediction</strong></td>
                        <td>Regression</td>
                        <td>Housing dataset</td>
                        <td>Predict price of house</td>
                      </tr>
                      <tr>
                        <td><strong>Customer Segmentation</strong></td>
                        <td>Clustering</td>
                        <td>Sales or CRM data</td>
                        <td>Group customers</td>
                      </tr>
                      <tr>
                        <td><strong>Spam Email Classifier</strong></td>
                        <td>Classification</td>
                        <td>Email dataset</td>
                        <td>Classify spam or not</td>
                      </tr>
                      <tr>
                        <td><strong>Loan Approval Prediction</strong></td>
                        <td>Classification</td>
                        <td>Loan applications dataset</td>
                        <td>Predict loan approval</td>
                      </tr>
                      <tr>
                        <td><strong>Stock Price Prediction</strong></td>
                        <td>Time Series</td>
                        <td>Historical stock data</td>
                        <td>Predict future stock prices</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="reinforcement" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-controller"></i> Topic 10: Reinforcement Learning (Bonus Topic)</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Reinforcement Learning (RL) is a type of ML where an <strong>agent learns to make decisions</strong> by performing actions and receiving rewards or penalties.</p>
                <p>Inspired by human learning — <strong>trial and error.</strong></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Key Terms</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Term</th>
                        <th>Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Agent</strong></td>
                        <td>The learner or decision maker</td>
                      </tr>
                      <tr>
                        <td><strong>Environment</strong></td>
                        <td>The world in which the agent operates</td>
                      </tr>
                      <tr>
                        <td><strong>Action</strong></td>
                        <td>What the agent can do</td>
                      </tr>
                      <tr>
                        <td><strong>Reward</strong></td>
                        <td>Feedback from the environment</td>
                      </tr>
                      <tr>
                        <td><strong>Policy</strong></td>
                        <td>Strategy used by the agent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example: CartPole Game (Using OpenAI Gym)</h3>
                <pre><code>{`import gym

env = gym.make('CartPole-v1')
state = env.reset()

for _ in range(1000):
    env.render()
    action = env.action_space.sample() # Random action
    state, reward, done, info = env.step(action)
    if done:
        break

env.close()`}</code></pre>
              </div>
            </section>

            <section className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-house"></i> Mini Project: House Price Prediction</h2>
              
              <div className="property-card">
                <h3 className="h4">Project Goal</h3>
                <p>Predict the <strong>price of a house</strong> based on features like area, number of bedrooms, bathrooms, etc.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Dataset</h3>
                <p>You can use a dataset like "Bangalore House Price" from Kaggle:</p>
                <p><strong>File:</strong> Bengaluru_House_Data.csv</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Step-by-Step Implementation</h3>
                
                <h5 className="h5 mt-3">Step 1: Import Libraries</h5>
                <pre><code>{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_squared_error`}</code></pre>
                
                <h5 className="h5 mt-3">Step 2: Load Dataset</h5>
                <pre><code>{`data = pd.read_csv("Bengaluru_House_Data.csv")
print(data.head())`}</code></pre>
                
                <h5 className="h5 mt-3">Step 3: Data Preprocessing</h5>
                <pre><code>{`# Drop unnecessary columns
data = data.drop(['area_type', 'availability', 'society', 'balcony'], axis=1)

# Drop rows with null values
data = data.dropna()

# Convert 'size' (e.g., "2 BHK") to number
data['bhk'] = data['size'].apply(lambda x: int(x.split(' ')[0]))

# Convert 'total_sqft' to numeric
def convert_sqft(x):
    try:
        return float(x)
    except:
        tokens = x.split('-')
        if len(tokens) == 2:
            return (float(tokens[0]) + float(tokens[1])) / 2
        return None

data['total_sqft'] = data['total_sqft'].apply(convert_sqft)
data = data.dropna()

# Create new feature: price per square foot
data['price_per_sqft'] = (data['price']*100000) / data['total_sqft']`}</code></pre>
                
                <h5 className="h5 mt-3">Step 4: Feature Engineering</h5>
                <pre><code>{`# One-hot encoding for location
dummies = pd.get_dummies(data['location'], drop_first=True)
data = pd.concat([data.drop('location', axis=1), dummies], axis=1)`}</code></pre>
                
                <h5 className="h5 mt-3">Step 5: Model Building</h5>
                <pre><code>{`X = data.drop(['price'], axis=1)
y = data['price']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = LinearRegression()
model.fit(X_train, y_train)`}</code></pre>
                
                <h5 className="h5 mt-3">Step 6: Model Evaluation</h5>
                <pre><code>{`y_pred = model.predict(X_test)

print("R² Score:", r2_score(y_test, y_pred))
print("MSE:", mean_squared_error(y_test, y_pred))`}</code></pre>
                <div className="example-box">
                  <h5>Sample Output:</h5>
                  <pre className="mb-0"><code>{`R² Score: 0.84
MSE: 1.25`}</code></pre>
                </div>
                
                <h5 className="h5 mt-3">Step 7: Predict for New Input</h5>
                <pre><code>{`# Example: total_sqft=2000, bath=2, bhk=3, location='Whitefield'

# Find correct number of columns for 'Whitefield'
sample = X.iloc[0].copy()
sample[:] = 0
sample['total_sqft'] = 2000
sample['bath'] = 2
sample['bhk'] = 3
sample['Whitefield'] = 1

predicted_price = model.predict([sample])
print("Predicted Price (in Lakhs):", predicted_price[0])`}</code></pre>
                
                <h5 className="h5 mt-3">Step 8: Visualization</h5>
                <pre><code>{`plt.scatter(y_test, y_pred)
plt.xlabel("Actual Price")
plt.ylabel("Predicted Price")
plt.title("Actual vs Predicted House Price")
plt.show()`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Machine Learning Notes &copy; 2025 | Designed with React</p>
        </div>
      </footer>
    </div>
  );
}

export default MachineLearningNotes;