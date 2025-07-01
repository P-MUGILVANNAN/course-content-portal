import React from 'react';

function MongoDBSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-success text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-database fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">MongoDB Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of MongoDB NoSQL Database</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-question-circle text-success me-2"></i>Introduction to NoSQL</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is NoSQL?</li>
                <li className="list-group-item">Types of NoSQL Databases</li>
                <li className="list-group-item">Advantages and Disadvantages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-success me-2"></i>MongoDB Basics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is MongoDB?</li>
                <li className="list-group-item">MongoDB vs RDBMS</li>
                <li className="list-group-item">MongoDB Architecture</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-binary text-success me-2"></i>BSON Format</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Understanding BSON</li>
                <li className="list-group-item">BSON vs JSON</li>
                <li className="list-group-item">Data Types in MongoDB</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-success me-2"></i>CRUD Operations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Create Operations</li>
                <li className="list-group-item">Read Operations</li>
                <li className="list-group-item">Update Operations</li>
                <li className="list-group-item">Delete Operations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-sliders text-success me-2"></i>MongoDB Operators</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Comparison Operators</li>
                <li className="list-group-item">Logical Operators</li>
                <li className="list-group-item">Element Operators</li>
                <li className="list-group-item">Evaluation Operators</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-3 text-success me-2"></i>Data Modeling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Embedded Data Model</li>
                <li className="list-group-item">Normalized Data Model</li>
                <li className="list-group-item">Relationships in MongoDB</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-funnel text-success me-2"></i>Aggregation Framework</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Aggregation Pipeline</li>
                <li className="list-group-item">Aggregation Stages</li>
                <li className="list-group-item">Aggregation Operators</li>
                <li className="list-group-item">Map-Reduce</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-search text-success me-2"></i>Indexing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Index Types</li>
                <li className="list-group-item">Index Properties</li>
                <li className="list-group-item">Index Management</li>
                <li className="list-group-item">Query Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-files text-success me-2"></i>Replication</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Replica Sets</li>
                <li className="list-group-item">Failover Mechanism</li>
                <li className="list-group-item">Read Preferences</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-lock text-success me-2"></i>Security</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Authentication</li>
                <li className="list-group-item">Authorization</li>
                <li className="list-group-item">Encryption</li>
                <li className="list-group-item">Auditing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tools text-success me-2"></i>MongoDB Tools</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">MongoDB Compass</li>
                <li className="list-group-item">MongoDB Atlas</li>
                <li className="list-group-item">MongoDB Shell</li>
                <li className="list-group-item">MongoDB Drivers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-success me-2"></i>MongoDB with Applications</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">MongoDB with Node.js</li>
                <li className="list-group-item">MongoDB with Python</li>
                <li className="list-group-item">MongoDB with Java</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MongoDBSyllabus;