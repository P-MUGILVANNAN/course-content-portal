import React from 'react';

function SqliteSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-database"></i> SQLite Syllabus</h1>
          <p className="lead">Comprehensive Coverage of SQLite Database</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to SQLite</h2>
            <ul>
              <li>What is SQLite?</li>
              <li>Features and Advantages</li>
              <li>Use Cases and Limitations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-download"></i> Installation and Setup</h2>
            <ul>
              <li>Downloading SQLite</li>
              <li>Installation on Windows, macOS, Linux</li>
              <li>Command-line Interface Basics</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-plus"></i> Creating Databases</h2>
            <ul>
              <li>Database File Structure</li>
              <li>Creating New Databases</li>
              <li>Connecting to Existing Databases</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-list-columns"></i> SQLite Data Types</h2>
            <ul>
              <li>Storage Classes (NULL, INTEGER, REAL, TEXT, BLOB)</li>
              <li>Type Affinity</li>
              <li>Dynamic Typing System</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-table"></i> Creating Tables</h2>
            <ul>
              <li>CREATE TABLE Syntax</li>
              <li>Column Definitions</li>
              <li>Viewing Table Structure</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> SQLite Constraints</h2>
            <ul>
              <li>PRIMARY KEY</li>
              <li>NOT NULL</li>
              <li>UNIQUE</li>
              <li>CHECK</li>
              <li>DEFAULT</li>
              <li>FOREIGN KEY</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-plus-square"></i> Inserting Data</h2>
            <ul>
              <li>INSERT Statement</li>
              <li>Single and Multiple Row Insertion</li>
              <li>Default Values</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-search"></i> Querying Data</h2>
            <ul>
              <li>SELECT Statement</li>
              <li>Column Selection</li>
              <li>Result Filtering (WHERE)</li>
              <li>Sorting Results (ORDER BY)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-pencil-square"></i> Updating Data</h2>
            <ul>
              <li>UPDATE Statement</li>
              <li>Conditional Updates</li>
              <li>Updating Multiple Columns</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-trash"></i> Deleting Data</h2>
            <ul>
              <li>DELETE Statement</li>
              <li>Conditional Deletion</li>
              <li>Truncating Tables</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-funnel"></i> Advanced Filtering</h2>
            <ul>
              <li>Logical Operators (AND, OR, NOT)</li>
              <li>IN Operator</li>
              <li>BETWEEN Operator</li>
              <li>LIKE and GLOB Patterns</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Aggregation and Grouping</h2>
            <ul>
              <li>Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)</li>
              <li>GROUP BY Clause</li>
              <li>HAVING Clause</li>
              <li>DISTINCT Keyword</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shuffle"></i> Table Joins</h2>
            <ul>
              <li>INNER JOIN</li>
              <li>LEFT JOIN</li>
              <li>CROSS JOIN</li>
              <li>Self Joins</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calculator"></i> Built-in Functions</h2>
            <ul>
              <li>Core Functions</li>
              <li>Date and Time Functions</li>
              <li>String Functions</li>
              <li>Mathematical Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-text"></i> Subqueries</h2>
            <ul>
              <li>Single-row Subqueries</li>
              <li>Multi-row Subqueries</li>
              <li>Correlated Subqueries</li>
              <li>EXISTS Operator</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-eye"></i> Views</h2>
            <ul>
              <li>Creating Views</li>
              <li>Modifying Views</li>
              <li>Dropping Views</li>
              <li>View Limitations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> Transactions</h2>
            <ul>
              <li>ACID Properties</li>
              <li>BEGIN TRANSACTION</li>
              <li>COMMIT and ROLLBACK</li>
              <li>Savepoints</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Database Administration</h2>
            <ul>
              <li>Attaching Databases</li>
              <li>Exporting and Importing Data</li>
              <li>Backup and Recovery</li>
              <li>Vacuum Command</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lock"></i> Security</h2>
            <ul>
              <li>SQL Injection Prevention</li>
              <li>Database Encryption</li>
              <li>Access Control</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightning"></i> Performance Optimization</h2>
            <ul>
              <li>Indexes</li>
              <li>Query Optimization</li>
              <li>EXPLAIN QUERY PLAN</li>
              <li>Pragmas</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-phone"></i> SQLite in Applications</h2>
            <ul>
              <li>SQLite with Python</li>
              <li>SQLite with Node.js</li>
              <li>SQLite in Mobile Apps</li>
              <li>SQLite in Web Browsers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tools"></i> SQLite Tools</h2>
            <ul>
              <li>SQLite CLI</li>
              <li>DB Browser for SQLite</li>
              <li>SQLite Studio</li>
              <li>VS Code Extensions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SqliteSyllabus;