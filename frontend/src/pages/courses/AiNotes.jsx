import React from 'react';

function AiNotes() {
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
          .milestone-table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
          }
          .milestone-table th, .milestone-table td {
            border: 1px solid #ddd;
            padding: 8px;
          }
          .milestone-table th {
            background-color: #f2f2f2;
          }
          .type-table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
          }
          .type-table th, .type-table td {
            border: 1px solid #ddd;
            padding: 8px;
          }
          .type-table th {
            background-color: #f2f2f2;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-robot"></i> Artificial Intelligence Notes</h1>
          <p className="lead">Your Comprehensive Guide to AI Concepts and Applications</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction to AI</a>
              <a className="nav-link" href="#goals"><i className="bi bi-bullseye"></i> Goals of AI</a>
              <a className="nav-link" href="#history"><i className="bi bi-clock-history"></i> History</a>
              <a className="nav-link" href="#types"><i className="bi bi-diagram-3"></i> Types of AI</a>
              <a className="nav-link" href="#domains"><i className="bi bi-building"></i> AI Domains</a>
              <a className="nav-link" href="#ai-vs-human"><i className="bi bi-person"></i> AI vs Human</a>
              <a className="nav-link" href="#branches"><i className="bi bi-share"></i> Branches of AI</a>
              <a className="nav-link" href="#ml-overview"><i className="bi bi-gear"></i> ML Overview</a>
              <a className="nav-link" href="#ml-algorithms"><i className="bi bi-cpu"></i> ML Algorithms</a>
              <a className="nav-link" href="#evaluation"><i className="bi bi-graph-up"></i> Model Evaluation</a>
              <a className="nav-link" href="#dl-overview"><i className="bi bi-layers"></i> Deep Learning</a>
              <a className="nav-link" href="#nlp"><i className="bi bi-chat-left-text"></i> NLP</a>
              <a className="nav-link" href="#libraries"><i className="bi bi-code-slash"></i> AI Libraries</a>
              <a className="nav-link" href="#projects"><i className="bi bi-lightbulb"></i> Project Ideas</a>
              <a className="nav-link" href="#chatbot"><i className="bi bi-robot"></i> NLP Chatbot</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Artificial Intelligence (AI)</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <p>Artificial Intelligence (AI) is the branch of computer science that focuses on creating machines or software that can perform tasks that normally require <strong>human intelligence</strong>.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-task"></i> AI Tasks</h3>
                <ul>
                  <li>Learning from experience</li>
                  <li>Reasoning</li>
                  <li>Problem-solving</li>
                  <li>Understanding language</li>
                  <li>Perception (like recognizing images, sounds, etc.)</li>
                </ul>
              </div>
            </section>

            <section id="goals" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bullseye"></i> Goals of AI</h2>
              
              <div className="property-card">
                <ol>
                  <li><strong>Learning</strong> – Enable systems to learn from data (Machine Learning)</li>
                  <li><strong>Reasoning</strong> – Make logical decisions based on rules or patterns</li>
                  <li><strong>Perception</strong> – Understand visual/audio inputs like humans</li>
                  <li><strong>Interaction</strong> – Communicate in natural language (chatbots, voice assistants)</li>
                  <li><strong>Autonomous actions</strong> – Self-driving cars, robots</li>
                </ol>
              </div>
            </section>

            <section id="history" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-clock-history"></i> History of AI</h2>
              
              <div className="property-card">
                <table className="milestone-table">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Milestone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1956</td>
                      <td>Term "Artificial Intelligence" coined at the Dartmouth Conference</td>
                    </tr>
                    <tr>
                      <td>1997</td>
                      <td>IBM Deep Blue beats chess champion Garry Kasparov</td>
                    </tr>
                    <tr>
                      <td>2011</td>
                      <td>IBM Watson wins "Jeopardy!" quiz show</td>
                    </tr>
                    <tr>
                      <td>2016</td>
                      <td>Google's AlphaGo beats world Go champion</td>
                    </tr>
                    <tr>
                      <td>2023+</td>
                      <td>ChatGPT, DALL·E, autonomous AI agents rise</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="types" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> Types of AI</h2>
              
              <div className="property-card">
                <table className="type-table">
                  <thead>
                    <tr>
                      <th>Type of AI</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Narrow AI</strong></td>
                      <td>AI that performs a specific task only</td>
                      <td>Siri, Google Maps, ChatGPT</td>
                    </tr>
                    <tr>
                      <td><strong>General AI</strong></td>
                      <td>AI with human-like intelligence (not achieved yet)</td>
                      <td>Theoretical</td>
                    </tr>
                    <tr>
                      <td><strong>Super AI</strong></td>
                      <td>AI that surpasses human intelligence (future concept)</td>
                      <td>Science fiction level AI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="domains" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-building"></i> Domains/Fields Using AI</h2>
              
              <div className="property-card">
                <ul>
                  <li><strong>Education</strong> – Smart tutors, recommendation systems</li>
                  <li><strong>Healthcare</strong> – Diagnosis prediction, drug discovery</li>
                  <li><strong>Finance</strong> – Fraud detection, algorithmic trading</li>
                  <li><strong>Robotics</strong> – Industrial automation, self-driving cars</li>
                  <li><strong>E-commerce</strong> – Personalized suggestions (Amazon, Flipkart)</li>
                  <li><strong>Gaming</strong> – Game bots, strategy decision making</li>
                </ul>
              </div>
            </section>

            <section id="ai-vs-human" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-person"></i> AI vs Human Intelligence</h2>
              
              <div className="property-card">
                <table className="type-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Human Intelligence</th>
                      <th>Artificial Intelligence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Learning ability</td>
                      <td>Learns from real-world experience</td>
                      <td>Learns from data</td>
                    </tr>
                    <tr>
                      <td>Adaptability</td>
                      <td>Highly adaptable</td>
                      <td>Task-specific (Narrow)</td>
                    </tr>
                    <tr>
                      <td>Processing</td>
                      <td>Slower, but creative</td>
                      <td>Faster, but limited by data</td>
                    </tr>
                    <tr>
                      <td>Consciousness</td>
                      <td>Has emotions & consciousness</td>
                      <td>No emotions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="branches" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-share"></i> Branches of Artificial Intelligence</h2>
              <p>Artificial Intelligence is a broad field, and it is divided into various specialized branches. Each branch focuses on solving a particular type of problem using AI techniques.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> 1. Machine Learning (ML)</h3>
                <ul>
                  <li><strong>Definition</strong>: ML is the science of making computers learn from data without being explicitly programmed.</li>
                  <li><strong>Goal</strong>: To build models that can make predictions or decisions.</li>
                  <li><strong>Example</strong>: Spam email detection, product recommendations.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-layers"></i> 2. Deep Learning (DL)</h3>
                <ul>
                  <li><strong>Definition</strong>: A subset of ML that uses neural networks with multiple layers to model complex patterns.</li>
                  <li><strong>Goal</strong>: To mimic the human brain in recognizing patterns.</li>
                  <li><strong>Example</strong>: Face recognition, speech-to-text conversion.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-chat-left-text"></i> 3. Natural Language Processing (NLP)</h3>
                <ul>
                  <li><strong>Definition</strong>: Allows machines to read, understand, and respond to human language.</li>
                  <li><strong>Goal</strong>: Enable communication between humans and computers.</li>
                  <li><strong>Example</strong>: Chatbots, Google Translate, sentiment analysis.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-eye"></i> 4. Computer Vision (CV)</h3>
                <ul>
                  <li><strong>Definition</strong>: Enables machines to understand and process visual inputs like images or videos.</li>
                  <li><strong>Goal</strong>: Extract useful information from images.</li>
                  <li><strong>Example</strong>: Face detection, object tracking, OCR (optical character recognition).</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-robot"></i> 5. Robotics</h3>
                <ul>
                  <li><strong>Definition</strong>: The design and creation of robots that can perform tasks autonomously or semi-autonomously.</li>
                  <li><strong>Goal</strong>: Create intelligent physical agents.</li>
                  <li><strong>Example</strong>: Self-driving cars, robotic arms in manufacturing.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-person-badge"></i> 6. Expert Systems</h3>
                <ul>
                  <li><strong>Definition</strong>: AI programs that mimic the decision-making ability of a human expert.</li>
                  <li><strong>Goal</strong>: Solve complex problems using rules.</li>
                  <li><strong>Example</strong>: Medical diagnosis systems, legal advisors.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-joystick"></i> 7. Reinforcement Learning (RL)</h3>
                <ul>
                  <li><strong>Definition</strong>: A type of learning where an agent learns to perform actions in an environment to maximize reward.</li>
                  <li><strong>Goal</strong>: Learn optimal actions via trial-and-error.</li>
                  <li><strong>Example</strong>: Game playing (like AlphaGo), robotic control.</li>
                </ul>
              </div>
            </section>

            <section id="ml-overview" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Machine Learning (ML) Overview</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-book"></i> Definition</h3>
                <p>Machine Learning is a subset of AI that allows systems to automatically learn and improve from experience without being explicitly programmed.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Key Concept</h3>
                <p>ML focuses on developing algorithms that can:</p>
                <ul>
                  <li>Learn patterns from data</li>
                  <li>Make predictions or decisions</li>
                  <li>Improve performance with more data</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-3"></i> Types of Machine Learning</h3>
                <table className="type-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Supervised Learning</strong></td>
                      <td>Trained on labelled data (input + output known)</td>
                      <td>Email Spam Detection, Loan Approval</td>
                    </tr>
                    <tr>
                      <td><strong>Unsupervised Learning</strong></td>
                      <td>Trained on unlabelled data (only input)</td>
                      <td>Customer Segmentation, Market Basket</td>
                    </tr>
                    <tr>
                      <td><strong>Reinforcement Learning</strong></td>
                      <td>Agent learns by trial and error, gets rewards</td>
                      <td>Game Playing (AlphaGo), Self-driving cars</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check2-square"></i> Supervised Learning</h3>
                <ul>
                  <li><strong>Input</strong>: Data + correct output (label)</li>
                  <li><strong>Goal</strong>: Learn a mapping function from input → output</li>
                  <li><strong>Algorithms</strong>:
                    <ul>
                      <li>Linear Regression</li>
                      <li>Logistic Regression</li>
                      <li>Decision Tree</li>
                      <li>Random Forest</li>
                      <li>KNN (K-Nearest Neighbors)</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-square"></i> Unsupervised Learning</h3>
                <ul>
                  <li><strong>Input</strong>: Only data, no output/label</li>
                  <li><strong>Goal</strong>: Find hidden structure or patterns in data</li>
                  <li><strong>Algorithms</strong>:
                    <ul>
                      <li>K-Means Clustering</li>
                      <li>Hierarchical Clustering</li>
                      <li>PCA (Principal Component Analysis)</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-trophy"></i> Reinforcement Learning</h3>
                <ul>
                  <li><strong>Agent</strong>: Learns through <strong>actions</strong></li>
                  <li><strong>Environment</strong>: Gives <strong>reward or penalty</strong></li>
                  <li><strong>Goal</strong>: Maximize cumulative reward</li>
                  <li><strong>Example</strong>: Teaching a robot to walk, or an AI to play chess</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-3"></i> ML Workflow (Step-by-Step Process)</h3>
                <ol>
                  <li>Define the Problem</li>
                  <li>Collect Data</li>
                  <li>Preprocess Data (cleaning, encoding, scaling)</li>
                  <li>Split Data into training and testing</li>
                  <li>Choose Model (e.g., linear regression)</li>
                  <li>Train Model</li>
                  <li>Evaluate Performance</li>
                  <li>Tune Parameters (hyperparameter tuning)</li>
                  <li>Deploy the Model</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Example (Supervised Learning - Linear Regression)</h3>
                <p><strong>Goal</strong>: Predict house price based on area.</p>
                <pre><code>{`from sklearn.linear_model import LinearRegression

# Sample data
area = [[1000], [1500], [2000]]
price = [3, 4.5, 6]

model = LinearRegression()
model.fit(area, price)

print(model.predict([[1800]])) # Predict price for 1800 sqft

# Output: [5.4] (approximate house price)`}</code></pre>
              </div>
            </section>

            <section id="ml-algorithms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cpu"></i> Common Machine Learning Algorithms</h2>
              <p>These algorithms are the backbone of ML models. Depending on the data type and problem, we choose suitable algorithms.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-graph-up"></i> A. Supervised Learning Algorithms</h3>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-1-circle"></i> 1. Linear Regression</h4>
                  <ul>
                    <li><strong>Used for</strong>: Predicting continuous values</li>
                    <li><strong>Example</strong>: Predict house price, salary, temperature</li>
                    <li><strong>Equation</strong>: 
                      <pre className="mb-0"><code>{`y = m*x + c (line equation)`}</code></pre>
                    </li>
                    <li><strong>Code</strong>:
                      <pre className="mb-0"><code>{`from sklearn.linear_model import LinearRegression`}</code></pre>
                    </li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-2-circle"></i> 2. Logistic Regression</h4>
                  <ul>
                    <li><strong>Used for</strong>: Binary classification</li>
                    <li><strong>Example</strong>: Spam (1) / Not Spam (0), Disease (yes/no)</li>
                    <li><strong>Output</strong>: Probabilities (0 to 1)</li>
                    <li><strong>Code</strong>:
                      <pre className="mb-0"><code>{`from sklearn.linear_model import LogisticRegression`}</code></pre>
                    </li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-3-circle"></i> 3. Decision Tree</h4>
                  <ul>
                    <li><strong>Used for</strong>: Classification and Regression</li>
                    <li><strong>Structure</strong>: Tree with conditions (if/else)</li>
                    <li><strong>Example</strong>: Loan approval based on income, age, credit score</li>
                    <li><strong>Code</strong>:
                      <pre className="mb-0"><code>{`from sklearn.tree import DecisionTreeClassifier`}</code></pre>
                    </li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-4-circle"></i> 4. Random Forest</h4>
                  <ul>
                    <li><strong>Used for</strong>: More accurate predictions</li>
                    <li><strong>Concept</strong>: Collection of multiple decision trees</li>
                    <li><strong>Advantage</strong>: Reduces overfitting</li>
                    <li><strong>Code</strong>:
                      <pre className="mb-0"><code>{`from sklearn.ensemble import RandomForestClassifier`}</code></pre>
                    </li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-5-circle"></i> 5. K-Nearest Neighbors (KNN)</h4>
                  <ul>
                    <li><strong>Used for</strong>: Classification based on similarity</li>
                    <li><strong>Concept</strong>: Looks at 'k' closest data points</li>
                    <li><strong>Code</strong>:
                      <pre className="mb-0"><code>{`from sklearn.neighbors import KNeighborsClassifier`}</code></pre>
                    </li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-6-circle"></i> 6. Support Vector Machine (SVM)</h4>
                  <ul>
                    <li><strong>Used for</strong>: Classification (especially high-dimension data)</li>
                    <li><strong>Goal</strong>: Find best hyperplane to separate classes</li>
                    <li><strong>Code</strong>:
                      <pre className="mb-0"><code>{`from sklearn.svm import SVC`}</code></pre>
                    </li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-7-circle"></i> 7. Naive Bayes</h4>
                  <ul>
                    <li><strong>Based on</strong>: Probability & Bayes Theorem</li>
                    <li><strong>Used for</strong>: Text classification (e.g., spam filters)</li>
                    <li><strong>Code</strong>:
                      <pre className="mb-0"><code>{`from sklearn.naive_bayes import GaussianNB`}</code></pre>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-diamond"></i> B. Unsupervised Learning Algorithms</h3>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-1-circle"></i> 1. K-Means Clustering</h4>
                  <ul>
                    <li><strong>Used for</strong>: Grouping similar items</li>
                    <li><strong>Example</strong>: Customer segmentation, image compression</li>
                    <li><strong>Code</strong>:
                      <pre className="mb-0"><code>{`from sklearn.cluster import KMeans`}</code></pre>
                    </li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-2-circle"></i> 2. Hierarchical Clustering</h4>
                  <ul>
                    <li><strong>Used for</strong>: Clustering with tree/dendrogram</li>
                    <li><strong>Advantage</strong>: Doesn't require number of clusters in advance</li>
                    <li><strong>Code</strong>:
                      <pre className="mb-0"><code>{`from scipy.cluster.hierarchy import dendrogram, linkage`}</code></pre>
                    </li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-3-circle"></i> 3. PCA (Principal Component Analysis)</h4>
                  <ul>
                    <li><strong>Used for</strong>: Dimensionality reduction</li>
                    <li><strong>Goal</strong>: Reduce features while keeping important data</li>
                    <li><strong>Code</strong>:
                      <pre className="mb-0"><code>{`from sklearn.decomposition import PCA`}</code></pre>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-trophy"></i> C. Reinforcement Learning Algorithms</h3>
                <p>(Mostly used in Deep Learning frameworks)</p>
                
                <table className="type-table">
                  <thead>
                    <tr>
                      <th>Algorithm</th>
                      <th>Used in</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Q-Learning</td>
                      <td>Game agents, robots</td>
                    </tr>
                    <tr>
                      <td>Deep Q Network (DQN)</td>
                      <td>Playing games like Pong, Breakout</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="evaluation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-graph-up"></i> Model Evaluation Metrics</h2>
              <p>After building a machine learning model, it's important to <strong>evaluate its performance</strong> using proper metrics. The choice of metric depends on whether the task is <strong>regression or classification</strong>.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check2-square"></i> A. Classification Metrics</h3>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-1-circle"></i> 1. Accuracy</h4>
                  <ul>
                    <li><strong>Definition</strong>: % of correct predictions</li>
                    <li><strong>Formula</strong>:
                      <pre className="mb-0"><code>{`Accuracy = (TP + TN) / (TP + TN + FP + FN)`}</code></pre>
                    </li>
                    <li><strong>Used for</strong>: Balanced datasets</li>
                    <li><strong>Example</strong>: Predicting if a mail is spam or not</li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-2-circle"></i> 2. Precision</h4>
                  <ul>
                    <li><strong>Definition</strong>: How many predicted positives are actually positive</li>
                    <li><strong>Formula</strong>:
                      <pre className="mb-0"><code>{`Precision = TP / (TP + FP)`}</code></pre>
                    </li>
                    <li><strong>Use Case</strong>: Important when False Positives are costly (e.g., spam filters)</li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-3-circle"></i> 3. Recall (Sensitivity)</h4>
                  <ul>
                    <li><strong>Definition</strong>: How many actual positives were correctly predicted</li>
                    <li><strong>Formula</strong>:
                      <pre className="mb-0"><code>{`Recall = TP / (TP + FN)`}</code></pre>
                    </li>
                    <li><strong>Use Case</strong>: Important when False Negatives are costly (e.g., cancer detection)</li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-4-circle"></i> 4. F1 Score</h4>
                  <ul>
                    <li><strong>Definition</strong>: Harmonic mean of Precision and Recall</li>
                    <li><strong>Formula</strong>:
                      <pre className="mb-0"><code>{`F1 = 2 * (Precision * Recall) / (Precision + Recall)`}</code></pre>
                    </li>
                    <li><strong>Use Case</strong>: When you need a balance between precision and recall</li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-5-circle"></i> 5. Confusion Matrix</h4>
                  <p>A 2×2 matrix showing:</p>
                  <ul>
                    <li>TP (True Positives)</li>
                    <li>TN (True Negatives)</li>
                    <li>FP (False Positives)</li>
                    <li>FN (False Negatives)</li>
                  </ul>
                  <pre className="mb-0"><code>{`from sklearn.metrics import confusion_matrix`}</code></pre>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-6-circle"></i> 6. ROC Curve & AUC</h4>
                  <ul>
                    <li><strong>ROC Curve</strong>: Shows trade-off between TPR and FPR</li>
                    <li><strong>AUC</strong>: Area under ROC Curve → closer to 1 is better</li>
                  </ul>
                  <pre className="mb-0"><code>{`from sklearn.metrics import roc_auc_score, roc_curve`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-graph-up-arrow"></i> B. Regression Metrics</h3>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-1-circle"></i> 1. Mean Absolute Error (MAE)</h4>
                  <ul>
                    <li>Average of absolute errors</li>
                    <li><strong>Formula</strong>:
                      <pre className="mb-0"><code>{`MAE = mean(|y_true - y_pred|)`}</code></pre>
                    </li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-2-circle"></i> 2. Mean Squared Error (MSE)</h4>
                  <ul>
                    <li>Average of squared errors</li>
                    <li><strong>Formula</strong>:
                      <pre className="mb-0"><code>{`MSE = mean((y_true - y_pred)^2)`}</code></pre>
                    </li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-3-circle"></i> 3. Root Mean Squared Error (RMSE)</h4>
                  <ul>
                    <li>Square root of MSE</li>
                    <li><strong>Use Case</strong>: Penalizes large errors more</li>
                  </ul>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-4-circle"></i> 4. R² Score (R-squared)</h4>
                  <ul>
                    <li>Shows how well data fits the model</li>
                    <li><strong>Range</strong>: 0 to 1 (higher is better)</li>
                  </ul>
                  <pre className="mb-0"><code>{`from sklearn.metrics import mean_squared_error, r2_score`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Example (Classification Evaluation)</h3>
                <pre><code>{`from sklearn.metrics import accuracy_score, classification_report

y_true = [0, 1, 1, 0, 1]
y_pred = [0, 1, 0, 0, 1]

print("Accuracy:", accuracy_score(y_true, y_pred))
print(classification_report(y_true, y_pred))`}</code></pre>
              </div>
            </section>

            <section id="dl-overview" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layers"></i> Deep Learning Overview</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-book"></i> Definition</h3>
                <p>Deep Learning (DL) is a subset of Machine Learning that uses Artificial Neural Networks (ANNs) with multiple layers (hence "deep") to learn complex patterns from large datasets.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> Why Deep Learning?</h3>
                <p><strong>Traditional ML needs</strong>:</p>
                <ul>
                  <li>Manual feature extraction</li>
                  <li>Doesn't perform well on images, voice, etc.</li>
                </ul>
                <p><strong>Deep Learning</strong>:</p>
                <ul>
                  <li><strong>Automatically extracts features</strong></li>
                  <li>Works extremely well on unstructured data like images, audio, text</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-3"></i> Structure of Neural Networks</h3>
                <pre><code>{`[Input Layer] → [Hidden Layers] → [Output Layer]`}</code></pre>
                <p>Each layer consists of neurons that perform computations like:</p>
                <pre><code>{`Output = Activation(Weights * Input + Bias)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-boxes"></i> Popular Deep Learning Frameworks</h3>
                <table className="type-table">
                  <thead>
                    <tr>
                      <th>Library</th>
                      <th>Language</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TensorFlow</td>
                      <td>Python</td>
                      <td>Image, text, audio models</td>
                    </tr>
                    <tr>
                      <td>Keras</td>
                      <td>Python</td>
                      <td>Easy-to-use wrapper over TensorFlow</td>
                    </tr>
                    <tr>
                      <td>PyTorch</td>
                      <td>Python</td>
                      <td>Research, academic use</td>
                    </tr>
                    <tr>
                      <td>OpenCV</td>
                      <td>C++, Python</td>
                      <td>Image & video processing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-3"></i> Types of Deep Learning Models</h3>
                <table className="type-table">
                  <thead>
                    <tr>
                      <th>Model</th>
                      <th>Used For</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ANN (Artificial Neural Network)</td>
                      <td>Basic prediction tasks</td>
                      <td>Stock price, weather</td>
                    </tr>
                    <tr>
                      <td>CNN (Convolutional Neural Network)</td>
                      <td>Image & video data</td>
                      <td>Face recognition, object detection</td>
                    </tr>
                    <tr>
                      <td>RNN (Recurrent Neural Network)</td>
                      <td>Sequence data (time series)</td>
                      <td>Text generation, language modeling</td>
                    </tr>
                    <tr>
                      <td>LSTM (Long Short-Term Memory)</td>
                      <td>Advanced RNN for long memory</td>
                      <td>Chatbots, speech recognition</td>
                    </tr>
                    <tr>
                      <td>GAN (Generative Adversarial Network)</td>
                      <td>Data generation</td>
                      <td>Deepfake, AI art</td>
                    </tr>
                    <tr>
                      <td>Transformer</td>
                      <td>NLP & language tasks</td>
                      <td>ChatGPT, BERT, translation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-app-indicator"></i> Popular Deep Learning Applications</h3>
                <ul>
                  <li><strong>Image Classification</strong> – Detecting objects, faces</li>
                  <li><strong>Speech Recognition</strong> – Google Assistant, Alexa</li>
                  <li><strong>Text Generation</strong> – ChatGPT, summarization</li>
                  <li><strong>Medical Diagnosis</strong> – Cancer detection, MRI analysis</li>
                  <li><strong>Self-driving Cars</strong> – Real-time object & lane detection</li>
                  <li><strong>AI Art & Style Transfer</strong> – DALL·E, DeepArt</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Simple Example: Keras ANN</h3>
                <pre><code>{`from tensorflow.keras.models import Sequential 
from tensorflow.keras.layers import Dense

model = Sequential()

model.add(Dense(64, input_dim=8, activation='relu'))  
model.add(Dense(1, activation='sigmoid'))  

model.compile(loss="binary_crossentropy", optimizer='adam', metrics=['accuracy'])`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-3"></i> Diagram: Deep Learning Stack</h3>
                <pre><code>{`Artificial Intelligence
—— Machine Learning
—— Deep Learning`}</code></pre>
              </div>
            </section>

            <section id="nlp" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-chat-left-text"></i> Natural Language Processing (NLP)</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-book"></i> Definition</h3>
                <p>NLP (Natural Language Processing) is a branch of AI that enables computers to understand, interpret, and generate human language.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> Why NLP?</h3>
                <ul>
                  <li>Computers understand numbers, not human language.</li>
                  <li>NLP helps bridge this gap using AI + Linguistics.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-app-indicator"></i> NLP Common Applications</h3>
                <table className="type-table">
                  <thead>
                    <tr>
                      <th>Application</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Chatbots</td>
                      <td>ChatGPT, WhatsApp bots</td>
                    </tr>
                    <tr>
                      <td>Machine Translation</td>
                      <td>Google Translate</td>
                    </tr>
                    <tr>
                      <td>Speech Recognition</td>
                      <td>Siri, Google Assistant</td>
                    </tr>
                    <tr>
                      <td>Sentiment Analysis</td>
                      <td>Positive/Negative review detection</td>
                    </tr>
                    <tr>
                      <td>Text Summarization</td>
                      <td>News short summaries</td>
                    </tr>
                    <tr>
                      <td>Spam Detection</td>
                      <td>Email spam filters</td>
                    </tr>
                    <tr>
                      <td>Text Generation</td>
                      <td>AI content, poem generation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-tools"></i> Key NLP Tasks</h3>
                <table className="type-table">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tokenization</td>
                      <td>Split text into words or sentences</td>
                    </tr>
                    <tr>
                      <td>Stop Word Removal</td>
                      <td>Remove common words like "the", "is", "and"</td>
                    </tr>
                    <tr>
                      <td>Stemming/Lemmatization</td>
                      <td>Reduce words to root form (run → running → run)</td>
                    </tr>
                    <tr>
                      <td>POS Tagging</td>
                      <td>Label words with parts of speech (noun, verb)</td>
                    </tr>
                    <tr>
                      <td>NER (Named Entity Recog.)</td>
                      <td>Identify entities (Person, Place, Org)</td>
                    </tr>
                    <tr>
                      <td>Text Classification</td>
                      <td>Categorize text (spam or not)</td>
                    </tr>
                    <tr>
                      <td>Language Modeling</td>
                      <td>Predict next word in sentence</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-boxes"></i> Popular NLP Libraries</h3>
                <table className="type-table">
                  <thead>
                    <tr>
                      <th>Library</th>
                      <th>Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>NLTK</td>
                      <td>Tokenizing, stemming, tagging</td>
                    </tr>
                    <tr>
                      <td>spaCy</td>
                      <td>Fast NLP tasks, NER, parsing</td>
                    </tr>
                    <tr>
                      <td>TextBlob</td>
                      <td>Beginner-friendly sentiment</td>
                    </tr>
                    <tr>
                      <td>Transformers (HuggingFace)</td>
                      <td>State-of-the-art models (BERT, GPT)</td>
                    </tr>
                    <tr>
                      <td>OpenAI API</td>
                      <td>Access ChatGPT, Codex</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Example (Sentiment Analysis using TextBlob)</h3>
                <pre><code>{`from textblob import TextBlob

text = "I love learning AI!"  
blob = TextBlob(text)  
print(blob.sentiment) # Output: Sentiment(polarity=0.5, subjectivity=0.6)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Real-time Example (NER using spaCy)</h3>
                <pre><code>{`import spacy

nlp = spacy.load("en_core_web_sm")

text = "Elon Musk founded SpaceX in California."
doc = nlp(text)

for ent in doc.ents:
    print(ent.text, ent.label_)

# Output:
# Elon Musk - PERSON
# SpaceX - ORG
# California – GPE`}</code></pre>
              </div>
            </section>

            <section id="libraries" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-slash"></i> Popular ML & DL Libraries and Frameworks</h2>
              <p>These are the most used Python libraries for Machine Learning, Deep Learning, and AI projects.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. Scikit-learn (ML Library)</h3>
                <ul>
                  <li>One of the most popular libraries for machine learning</li>
                  <li>Offers models for:
                    <ul>
                      <li>Classification, Regression, Clustering</li>
                      <li>Model evaluation, data preprocessing</li>
                    </ul>
                  </li>
                </ul>
                <pre><code>{`from sklearn.linear_model import LogisticRegression 
from sklearn.model_selection import train_test_split`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. TensorFlow (Deep Learning Framework)</h3>
                <ul>
                  <li>Developed by Google</li>
                  <li>Used for building and training deep learning models</li>
                  <li>Highly scalable (used in production)</li>
                  <li><strong>Used for</strong>:
                    <ul>
                      <li>ANN, CNN, RNN</li>
                      <li>Image recognition, NLP, forecasting</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. Keras (API for TensorFlow)</h3>
                <ul>
                  <li>High-level wrapper over TensorFlow</li>
                  <li>Easy to build deep learning models with minimal code</li>
                </ul>
                <pre><code>{`from tensorflow.keras.models import Sequential 
from tensorflow.keras.layers import Dense`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. PyTorch</h3>
                <ul>
                  <li>Developed by Facebook (Meta)</li>
                  <li>Popular in research and academic settings</li>
                  <li>Easier debugging and dynamic computation graph</li>
                </ul>
                <pre><code>{`import torch
import torch.nn as nn`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> 5. Pandas</h3>
                <ul>
                  <li>Used for data manipulation and analysis</li>
                  <li>Easy to handle tabular data (CSV, Excel)</li>
                </ul>
                <pre><code>{`import pandas as pd
df = pd.read_csv("data.csv")`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> 6. NumPy</h3>
                <ul>
                  <li>Supports large multi-dimensional arrays</li>
                  <li>Used for numerical computing and matrix operations</li>
                </ul>
                <pre><code>{`import numpy as np
arr = np.array([1, 2, 3])`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-7-circle"></i> 7. Matplotlib & Seaborn</h3>
                <ul>
                  <li><strong>Matplotlib</strong>: Used for data visualizations (line plots, bar charts)</li>
                  <li><strong>Seaborn</strong>: Built on top of matplotlib for beautiful graphs</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-8-circle"></i> 8. OpenCV</h3>
                <ul>
                  <li>Used for image processing and computer vision</li>
                  <li>Can detect faces, objects, colors, and more</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-9-circle"></i> 9. Hugging Face Transformers</h3>
                <ul>
                  <li>Provides pre-trained models like BERT, GPT-2, T5, etc.</li>
                  <li>Used for advanced NLP tasks</li>
                </ul>
                <pre><code>{`from transformers import pipeline
classifier = pipeline('sentiment-analysis')`}</code></pre>
              </div>
            </section>

            <section id="projects" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-lightbulb"></i> Real-Time Mini Project Ideas in AI</h2>
              <p>These projects are <strong>doable even by beginners</strong> and give you <strong>hands-on</strong> experience in ML/AI concepts.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. House Price Prediction</h3>
                <ul>
                  <li><strong>Type</strong>: Regression</li>
                  <li><strong>Input</strong>: Area, location, bedrooms, age</li>
                  <li><strong>Output</strong>: Price</li>
                  <li><strong>Tech</strong>: scikit-learn, pandas, matplotlib</li>
                  <li>Most commonly used ML project</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. Customer Segmentation</h3>
                <ul>
                  <li><strong>Type</strong>: Clustering (Unsupervised)</li>
                  <li><strong>Input</strong>: Age, income, spending score</li>
                  <li><strong>Output</strong>: Customer group (Segment A, B, C)</li>
                  <li><strong>Tech</strong>: KMeans, seaborn, matplotlib</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. Spam Email Classifier</h3>
                <ul>
                  <li><strong>Type</strong>: Classification (Supervised)</li>
                  <li><strong>Input</strong>: Email text</li>
                  <li><strong>Output</strong>: Spam or Not Spam</li>
                  <li><strong>Tech</strong>: Naive Bayes, sklearn, NLP</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. Loan Approval Prediction</h3>
                <ul>
                  <li><strong>Type</strong>: Classification</li>
                  <li><strong>Input</strong>: Credit history, salary, loan amount</li>
                  <li><strong>Output</strong>: Approved or Rejected</li>
                  <li><strong>Tech</strong>: LogisticRegression, DecisionTree</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> 5. Stock Price Prediction</h3>
                <ul>
                  <li><strong>Type</strong>: Time Series Forecasting</li>
                  <li><strong>Input</strong>: Past stock prices</li>
                  <li><strong>Output</strong>: Future price</li>
                  <li><strong>Tech</strong>: LSTM, TensorFlow, matplotlib</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> 6. Sentiment Analysis (NLP)</h3>
                <ul>
                  <li><strong>Type</strong>: NLP/Text Classification</li>
                  <li><strong>Input</strong>: Movie or product reviews</li>
                  <li><strong>Output</strong>: Positive / Negative</li>
                  <li><strong>Tech</strong>: TextBlob, transformers, NLTK</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-7-circle"></i> 7. Face Mask Detection (CV + DL)</h3>
                <ul>
                  <li><strong>Type</strong>: CNN (Computer Vision)</li>
                  <li><strong>Input</strong>: Live camera image</li>
                  <li><strong>Output</strong>: Mask / No Mask</li>
                  <li><strong>Tech</strong>: OpenCV, Keras, CNN</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-8-circle"></i> 8. Chatbot Using NLP</h3>
                <ul>
                  <li><strong>Type</strong>: NLP</li>
                  <li><strong>Input</strong>: User query</li>
                  <li><strong>Output</strong>: Text response</li>
                  <li><strong>Tech</strong>: NLTK, transformers, Flask</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-9-circle"></i> 9. Handwritten Digit Recognition</h3>
                <ul>
                  <li><strong>Type</strong>: CNN Classification</li>
                  <li><strong>Input</strong>: Image of digits (0–9)</li>
                  <li><strong>Output</strong>: Predicted digit</li>
                  <li><strong>Tech</strong>: Keras, MNIST, TensorFlow</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-10-circle"></i> 10. Diabetes Prediction System</h3>
                <ul>
                  <li><strong>Type</strong>: Binary Classification</li>
                  <li><strong>Input</strong>: Glucose level, BP, BMI</li>
                  <li><strong>Output</strong>: Diabetic / Not Diabetic</li>
                  <li><strong>Tech</strong>: sklearn, RandomForest</li>
                </ul>
              </div>
            </section>

            <section id="chatbot" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-robot"></i> Project Title: NLP-Based Chatbot in Python</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bullseye"></i> Goal</h3>
                <p>Build a rule-based + simple ML NLP chatbot that can understand user queries and reply like a human using Text + NLP processing.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-ol"></i> Project Stages</h3>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-1-circle"></i> 1. Setup and Requirements</h4>
                  <pre><code>{`pip install nltk`}</code></pre>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-2-circle"></i> 2. Import Libraries & Download NLTK Data</h4>
                  <pre><code>{`import nltk
import random
import string
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

nltk.download('punkt')
nltk.download('wordnet')`}</code></pre>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-3-circle"></i> 3. Prepare the Data (Chatbot's Knowledge)</h4>
                  <pre><code>{`# Create or load chatbot knowledge from text
file = open('chatbot_corpus.txt', 'r', errors='ignore')
raw_text = file.read().lower()

# Tokenize
sent_tokens = nltk.sent_tokenize(raw_text)
word_tokens = nltk.word_tokenize(raw_text)`}</code></pre>
                  <p><strong>Sample content in chatbot_corpus.txt</strong>:</p>
                  <pre><code>{`Hello
Hi there, how can I assist you?
What is AI?
AI stands for Artificial Intelligence. It is the simulation of human intelligence by machines.
Who are you?
I am a chatbot created to assist you with basic questions.`}</code></pre>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-4-circle"></i> 4. Text Preprocessing (Cleaning & Lemmatizing)</h4>
                  <pre><code>{`lemmatizer = WordNetLemmatizer()

def LemTokens(tokens):
    return [lemmatizer.lemmatize(token) for token in tokens]

remove_punct_dict = dict((ord(punct), None) for punct in string.punctuation)

def LemNormalize(text):
    return LemTokens(nltk.word_tokenize(text.lower().translate(remove_punct_dict)))`}</code></pre>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-5-circle"></i> 5. Greeting Handling (optional)</h4>
                  <pre><code>{`GREETING_INPUTS = ("hello", "hi", "greetings", "sup", "what's up")
GREETING_RESPONSES = ["hi", "hey", "hello there", "I am glad you are talking to me!"]

def greeting(sentence):
    for word in sentence.split():
        if word.lower() in GREETING_INPUTS:
            return random.choice(GREETING_RESPONSES)`}</code></pre>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-6-circle"></i> 6. Generate Bot Response</h4>
                  <pre><code>{`def generate_response(user_input):
    user_input = user_input.lower()
    sent_tokens.append(user_input)

    tfidf_vectorizer = TfidfVectorizer(tokenizer=LemNormalize, stop_words='english')
    tfidf_matrix = tfidf_vectorizer.fit_transform(sent_tokens)

    vals = cosine_similarity(tfidf_matrix[-1], tfidf_matrix)
    idx = vals.argsort()[0][-2]

    flat = vals.flatten()
    flat.sort()

    req_tfidf = flat[-2]

    sent_tokens.pop() # Remove last appended input

    if req_tfidf == 0:
        return "I am sorry! I don't understand you."
    else:
        return sent_tokens[idx]`}</code></pre>
                </div>
                
                <div className="property-card">
                  <h4 className="h5"><i className="bi bi-7-circle"></i> 7. Chat Loop</h4>
                  <pre><code>{`print("BOT: Hi! I'm your AI assistant. Type 'bye' to exit.")
while True:
    user_input = input("You: ")
    if user_input.lower() == 'bye':
        print("BOT: Bye! Take care.")
        break
    elif user_input.lower() in ('thanks', 'thank you'):
        print("BOT: You're welcome!");
    elif greeting(user_input) is not None:
        print("BOT:", greeting(user_input))
    else:
        print("BOT:", generate_response(user_input))`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-terminal"></i> Output Demo</h3>
                <pre><code>{`You: Hello
BOT: hey

You: What is AI?
BOT: AI stands for Artificial Intelligence. It is the simulation of human intelligence by machines.

You: Who are you?
BOT: I am a chatbot created to assist you with basic questions.

You: Bye
BOT: Bye! Take care.`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-folder"></i> Final Files</h3>
                <ul>
                  <li><code>chatbot.py</code> → main Python code</li>
                  <li><code>chatbot_corpus.txt</code> → knowledge base</li>
                  <li><code>requirements.txt</code> (optional)</li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Artificial Intelligence Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default AiNotes;