import React from 'react';

function SqliteSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-database fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">SQLite Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of SQLite Database</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to SQLite</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is SQLite?</li>
                <li className="list-group-item">Features and Advantages</li>
                <li className="list-group-item">Use Cases and Limitations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-download text-primary me-2"></i>Installation and Setup</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Downloading SQLite</li>
                <li className="list-group-item">Installation on Windows, macOS, Linux</li>
                <li className="list-group-item">Command-line Interface Basics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-plus text-primary me-2"></i>Creating Databases</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Database File Structure</li>
                <li className="list-group-item">Creating New Databases</li>
                <li className="list-group-item">Connecting to Existing Databases</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-list-columns text-primary me-2"></i>SQLite Data Types</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Storage Classes (NULL, INTEGER, REAL, TEXT, BLOB)</li>
                <li className="list-group-item">Type Affinity</li>
                <li className="list-group-item">Dynamic Typing System</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-table text-primary me-2"></i>Creating Tables</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">CREATE TABLE Syntax</li>
                <li className="list-group-item">Column Definitions</li>
                <li className="list-group-item">Viewing Table Structure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-lock text-primary me-2"></i>SQLite Constraints</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">PRIMARY KEY</li>
                <li className="list-group-item">NOT NULL</li>
                <li className="list-group-item">UNIQUE</li>
                <li className="list-group-item">CHECK</li>
                <li className="list-group-item">DEFAULT</li>
                <li className="list-group-item">FOREIGN KEY</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-plus-square text-primary me-2"></i>Inserting Data</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">INSERT Statement</li>
                <li className="list-group-item">Single and Multiple Row Insertion</li>
                <li className="list-group-item">Default Values</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-search text-primary me-2"></i>Querying Data</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">SELECT Statement</li>
                <li className="list-group-item">Column Selection</li>
                <li className="list-group-item">Result Filtering (WHERE)</li>
                <li className="list-group-item">Sorting Results (ORDER BY)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-pencil-square text-primary me-2"></i>Updating Data</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">UPDATE Statement</li>
                <li className="list-group-item">Conditional Updates</li>
                <li className="list-group-item">Updating Multiple Columns</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-trash text-primary me-2"></i>Deleting Data</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">DELETE Statement</li>
                <li className="list-group-item">Conditional Deletion</li>
                <li className="list-group-item">Truncating Tables</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-funnel text-primary me-2"></i>Advanced Filtering</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Logical Operators (AND, OR, NOT)</li>
                <li className="list-group-item">IN Operator</li>
                <li className="list-group-item">BETWEEN Operator</li>
                <li className="list-group-item">LIKE and GLOB Patterns</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-collection text-primary me-2"></i>Aggregation and Grouping</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)</li>
                <li className="list-group-item">GROUP BY Clause</li>
                <li className="list-group-item">HAVING Clause</li>
                <li className="list-group-item">DISTINCT Keyword</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shuffle text-primary me-2"></i>Table Joins</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">INNER JOIN</li>
                <li className="list-group-item">LEFT JOIN</li>
                <li className="list-group-item">CROSS JOIN</li>
                <li className="list-group-item">Self Joins</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-calculator text-primary me-2"></i>Built-in Functions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Core Functions</li>
                <li className="list-group-item">Date and Time Functions</li>
                <li className="list-group-item">String Functions</li>
                <li className="list-group-item">Mathematical Functions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-text text-primary me-2"></i>Subqueries</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Single-row Subqueries</li>
                <li className="list-group-item">Multi-row Subqueries</li>
                <li className="list-group-item">Correlated Subqueries</li>
                <li className="list-group-item">EXISTS Operator</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-eye text-primary me-2"></i>Views</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating Views</li>
                <li className="list-group-item">Modifying Views</li>
                <li className="list-group-item">Dropping Views</li>
                <li className="list-group-item">View Limitations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-primary me-2"></i>Transactions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">ACID Properties</li>
                <li className="list-group-item">BEGIN TRANSACTION</li>
                <li className="list-group-item">COMMIT and ROLLBACK</li>
                <li className="list-group-item">Savepoints</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Database Administration</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Attaching Databases</li>
                <li className="list-group-item">Exporting and Importing Data</li>
                <li className="list-group-item">Backup and Recovery</li>
                <li className="list-group-item">Vacuum Command</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lock text-primary me-2"></i>Security</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">SQL Injection Prevention</li>
                <li className="list-group-item">Database Encryption</li>
                <li className="list-group-item">Access Control</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightning text-primary me-2"></i>Performance Optimization</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Indexes</li>
                <li className="list-group-item">Query Optimization</li>
                <li className="list-group-item">EXPLAIN QUERY PLAN</li>
                <li className="list-group-item">Pragmas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-phone text-primary me-2"></i>SQLite in Applications</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">SQLite with Python</li>
                <li className="list-group-item">SQLite with Node.js</li>
                <li className="list-group-item">SQLite in Mobile Apps</li>
                <li className="list-group-item">SQLite in Web Browsers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tools text-primary me-2"></i>SQLite Tools</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">SQLite CLI</li>
                <li className="list-group-item">DB Browser for SQLite</li>
                <li className="list-group-item">SQLite Studio</li>
                <li className="list-group-item">VS Code Extensions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SqliteSyllabus;