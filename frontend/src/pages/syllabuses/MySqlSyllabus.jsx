import React from 'react';

function MySqlSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-database"></i> MySQL Syllabus</h1>
          <p className="lead">Comprehensive Coverage of MySQL Database Management</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Databases</h2>
            <ul>
              <li>What is a Database?</li>
              <li>Types of Databases</li>
              <li>Relational vs Non-Relational Databases</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> Introduction to MySQL</h2>
            <ul>
              <li>What is MySQL?</li>
              <li>MySQL Features and Benefits</li>
              <li>MySQL Architecture</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tools"></i> MySQL Installation & Setup</h2>
            <ul>
              <li>Downloading MySQL</li>
              <li>Installation Process</li>
              <li>Configuration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-terminal"></i> MySQL Workbench</h2>
            <ul>
              <li>Introduction to MySQL Workbench</li>
              <li>Creating Connections</li>
              <li>Navigating the Interface</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> SQL Basics</h2>
            <ul>
              <li>SQL Syntax</li>
              <li>SQL Statements</li>
              <li>SQL Data Types</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-code"></i> DDL (Data Definition Language)</h2>
            <ul>
              <li>CREATE DATABASE</li>
              <li>CREATE TABLE</li>
              <li>ALTER TABLE</li>
              <li>DROP TABLE</li>
              <li>TRUNCATE TABLE</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-pencil-square"></i> DML (Data Manipulation Language)</h2>
            <ul>
              <li>INSERT</li>
              <li>UPDATE</li>
              <li>DELETE</li>
              <li>SELECT</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> DCL (Data Control Language)</h2>
            <ul>
              <li>GRANT</li>
              <li>REVOKE</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> TCL (Transaction Control Language)</h2>
            <ul>
              <li>COMMIT</li>
              <li>ROLLBACK</li>
              <li>SAVEPOINT</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-funnel"></i> Constraints</h2>
            <ul>
              <li>PRIMARY KEY</li>
              <li>FOREIGN KEY</li>
              <li>UNIQUE</li>
              <li>NOT NULL</li>
              <li>CHECK</li>
              <li>DEFAULT</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calculator"></i> Aggregate Functions</h2>
            <ul>
              <li>COUNT()</li>
              <li>SUM()</li>
              <li>AVG()</li>
              <li>MIN()</li>
              <li>MAX()</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-sort-alpha-down"></i> Sorting & Filtering</h2>
            <ul>
              <li>ORDER BY</li>
              <li>GROUP BY</li>
              <li>HAVING</li>
              <li>DISTINCT</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-left-right"></i> Joins</h2>
            <ul>
              <li>INNER JOIN</li>
              <li>LEFT JOIN</li>
              <li>RIGHT JOIN</li>
              <li>CROSS JOIN</li>
              <li>SELF JOIN</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Subqueries</h2>
            <ul>
              <li>Single-row Subqueries</li>
              <li>Multi-row Subqueries</li>
              <li>Correlated Subqueries</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-binary"></i> Views</h2>
            <ul>
              <li>Creating Views</li>
              <li>Updating Views</li>
              <li>Dropping Views</li>
              <li>Advantages of Views</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-clock-history"></i> Transactions</h2>
            <ul>
              <li>ACID Properties</li>
              <li>Transaction Control</li>
              <li>Concurrency Control</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-key"></i> Indexes</h2>
            <ul>
              <li>Creating Indexes</li>
              <li>Types of Indexes</li>
              <li>When to Use Indexes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-people"></i> User Management</h2>
            <ul>
              <li>Creating Users</li>
              <li>Granting Privileges</li>
              <li>Revoking Privileges</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-hdd-stack"></i> Stored Procedures</h2>
            <ul>
              <li>Creating Stored Procedures</li>
              <li>Parameters in Stored Procedures</li>
              <li>Calling Stored Procedures</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-text"></i> Functions</h2>
            <ul>
              <li>Built-in Functions</li>
              <li>User-defined Functions</li>
              <li>String Functions</li>
              <li>Date Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-plus"></i> Triggers</h2>
            <ul>
              <li>Creating Triggers</li>
              <li>Trigger Events</li>
              <li>Managing Triggers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-up-down"></i> Import & Export</h2>
            <ul>
              <li>Exporting Data</li>
              <li>Importing Data</li>
              <li>Backup and Restore</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up"></i> Performance Tuning</h2>
            <ul>
              <li>Query Optimization</li>
              <li>EXPLAIN Statement</li>
              <li>Index Optimization</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-check"></i> Security</h2>
            <ul>
              <li>Authentication</li>
              <li>Authorization</li>
              <li>Data Encryption</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySqlSyllabus;