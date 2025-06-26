import React from 'react';

function MongoDBSyllabus() {
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
            background-color: #4CAF50;
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
          <h1 className="display-4 fw-bold"><i className="bi bi-database"></i> MongoDB Syllabus</h1>
          <p className="lead">Comprehensive Coverage of MongoDB NoSQL Database</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-question-circle"></i> Introduction to NoSQL</h2>
            <ul>
              <li>What is NoSQL?</li>
              <li>Types of NoSQL Databases</li>
              <li>Advantages and Disadvantages</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> MongoDB Basics</h2>
            <ul>
              <li>What is MongoDB?</li>
              <li>MongoDB vs RDBMS</li>
              <li>MongoDB Architecture</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-binary"></i> BSON Format</h2>
            <ul>
              <li>Understanding BSON</li>
              <li>BSON vs JSON</li>
              <li>Data Types in MongoDB</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> CRUD Operations</h2>
            <ul>
              <li>Create Operations</li>
              <li>Read Operations</li>
              <li>Update Operations</li>
              <li>Delete Operations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-sliders"></i> MongoDB Operators</h2>
            <ul>
              <li>Comparison Operators</li>
              <li>Logical Operators</li>
              <li>Element Operators</li>
              <li>Evaluation Operators</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-3"></i> Data Modeling</h2>
            <ul>
              <li>Embedded Data Model</li>
              <li>Normalized Data Model</li>
              <li>Relationships in MongoDB</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-funnel"></i> Aggregation Framework</h2>
            <ul>
              <li>Aggregation Pipeline</li>
              <li>Aggregation Stages</li>
              <li>Aggregation Operators</li>
              <li>Map-Reduce</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-search"></i> Indexing</h2>
            <ul>
              <li>Index Types</li>
              <li>Index Properties</li>
              <li>Index Management</li>
              <li>Query Optimization</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-files"></i> Replication</h2>
            <ul>
              <li>Replica Sets</li>
              <li>Failover Mechanism</li>
              <li>Read Preferences</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> Security</h2>
            <ul>
              <li>Authentication</li>
              <li>Authorization</li>
              <li>Encryption</li>
              <li>Auditing</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cloud"></i> Sharding</h2>
            <ul>
              <li>Sharding Concepts</li>
              <li>Shard Keys</li>
              <li>Balancing</li>
              <li>Zone Sharding</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tools"></i> MongoDB Tools</h2>
            <ul>
              <li>MongoDB Compass</li>
              <li>MongoDB Atlas</li>
              <li>MongoDB Shell</li>
              <li>MongoDB Drivers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightning"></i> Performance</h2>
            <ul>
              <li>Monitoring</li>
              <li>Profiling</li>
              <li>Performance Tips</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-left-right"></i> Transactions</h2>
            <ul>
              <li>ACID Properties</li>
              <li>Multi-Document Transactions</li>
              <li>Transaction Management</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> MongoDB with Applications</h2>
            <ul>
              <li>MongoDB with Node.js</li>
              <li>MongoDB with Python</li>
              <li>MongoDB with Java</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MongoDBSyllabus;