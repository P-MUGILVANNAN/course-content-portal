import React from 'react';

function MsSqlSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-database"></i> MS SQL Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Microsoft SQL Server</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to MS SQL</h2>
            <ul>
              <li>What is MS SQL Server?</li>
              <li>History and Evolution</li>
              <li>SQL Server Editions</li>
              <li>Advantages of MS SQL</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-3"></i> SQL Server Architecture</h2>
            <ul>
              <li>Database Engine Components</li>
              <li>Storage Engine</li>
              <li>Query Processor</li>
              <li>SQL OS</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tools"></i> SQL Server Management Studio</h2>
            <ul>
              <li>SSMS Overview</li>
              <li>Connecting to Server</li>
              <li>Object Explorer</li>
              <li>Query Editor</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> Database Fundamentals</h2>
            <ul>
              <li>Creating Databases</li>
              <li>System Databases</li>
              <li>Database Files and Filegroups</li>
              <li>Database States</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-card-list"></i> Data Types</h2>
            <ul>
              <li>Numeric Data Types</li>
              <li>Character/String Types</li>
              <li>Date and Time Types</li>
              <li>Special Data Types</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-table"></i> Tables</h2>
            <ul>
              <li>Creating Tables</li>
              <li>Table Structure</li>
              <li>Altering Tables</li>
              <li>Temporary Tables</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> Constraints</h2>
            <ul>
              <li>Primary Key</li>
              <li>Foreign Key</li>
              <li>Unique Constraint</li>
              <li>Check Constraint</li>
              <li>Default Constraint</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> CRUD Operations</h2>
            <ul>
              <li>INSERT Statement</li>
              <li>SELECT Statement</li>
              <li>UPDATE Statement</li>
              <li>DELETE Statement</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-search"></i> SELECT Queries</h2>
            <ul>
              <li>Filtering with WHERE</li>
              <li>Sorting with ORDER BY</li>
              <li>Pattern Matching with LIKE</li>
              <li>IN and BETWEEN Operators</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-left-right"></i> Joins</h2>
            <ul>
              <li>INNER JOIN</li>
              <li>LEFT JOIN</li>
              <li>RIGHT JOIN</li>
              <li>FULL JOIN</li>
              <li>CROSS JOIN</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calculator"></i> Aggregate Functions</h2>
            <ul>
              <li>COUNT, SUM, AVG</li>
              <li>MIN and MAX</li>
              <li>GROUP BY Clause</li>
              <li>HAVING Clause</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> Subqueries</h2>
            <ul>
              <li>Single-row Subqueries</li>
              <li>Multi-row Subqueries</li>
              <li>Correlated Subqueries</li>
              <li>EXISTS Operator</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-text"></i> Views</h2>
            <ul>
              <li>Creating Views</li>
              <li>Modifying Views</li>
              <li>Indexed Views</li>
              <li>View Limitations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-binary"></i> Stored Procedures</h2>
            <ul>
              <li>Creating Stored Procedures</li>
              <li>Parameters in Procedures</li>
              <li>Returning Data</li>
              <li>Error Handling</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-function"></i> Functions</h2>
            <ul>
              <li>Scalar Functions</li>
              <li>Table-valued Functions</li>
              <li>Built-in Functions</li>
              <li>Deterministic vs Non-deterministic</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-trigger"></i> Triggers</h2>
            <ul>
              <li>DML Triggers</li>
              <li>INSTEAD OF Triggers</li>
              <li>DDL Triggers</li>
              <li>Trigger Best Practices</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-counterclockwise"></i> Transactions</h2>
            <ul>
              <li>ACID Properties</li>
              <li>BEGIN TRANSACTION</li>
              <li>COMMIT and ROLLBACK</li>
              <li>Transaction Isolation Levels</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-safe"></i> Security</h2>
            <ul>
              <li>Authentication Modes</li>
              <li>Server Logins</li>
              <li>Database Users</li>
              <li>Roles and Permissions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-hdd-stack"></i> Indexes</h2>
            <ul>
              <li>Clustered Indexes</li>
              <li>Non-clustered Indexes</li>
              <li>Index Optimization</li>
              <li>Execution Plans</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-clock-history"></i> Backup and Recovery</h2>
            <ul>
              <li>Backup Types</li>
              <li>Restore Operations</li>
              <li>Recovery Models</li>
              <li>Point-in-time Recovery</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-people"></i> Advanced Topics</h2>
            <ul>
              <li>Common Table Expressions (CTEs)</li>
              <li>Window Functions</li>
              <li>PIVOT and UNPIVOT</li>
              <li>Dynamic SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MsSqlSyllabus;