import React from 'react';

function SqlSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-database"></i> SQL Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Structured Query Language</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to SQL</h2>
            <ul>
              <li>What is SQL?</li>
              <li>History and Standards</li>
              <li>SQL vs NoSQL</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-server"></i> Database Fundamentals</h2>
            <ul>
              <li>Relational Database Concepts</li>
              <li>Tables, Rows, and Columns</li>
              <li>Primary Keys and Foreign Keys</li>
              <li>Database Normalization</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-terminal"></i> SQL Command Categories</h2>
            <ul>
              <li>DDL (Data Definition Language)</li>
              <li>DML (Data Manipulation Language)</li>
              <li>DQL (Data Query Language)</li>
              <li>DCL (Data Control Language)</li>
              <li>TCL (Transaction Control Language)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-code"></i> DDL Commands</h2>
            <ul>
              <li>CREATE DATABASE/TABLE</li>
              <li>ALTER TABLE</li>
              <li>DROP TABLE</li>
              <li>TRUNCATE TABLE</li>
              <li>Constraints (PRIMARY KEY, FOREIGN KEY, etc.)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-pencil-square"></i> DML Commands</h2>
            <ul>
              <li>INSERT</li>
              <li>UPDATE</li>
              <li>DELETE</li>
              <li>MERGE</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-search"></i> DQL Commands</h2>
            <ul>
              <li>SELECT statement</li>
              <li>WHERE clause</li>
              <li>ORDER BY</li>
              <li>DISTINCT</li>
              <li>LIMIT/OFFSET</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> DCL Commands</h2>
            <ul>
              <li>GRANT</li>
              <li>REVOKE</li>
              <li>User Privileges</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> TCL Commands</h2>
            <ul>
              <li>COMMIT</li>
              <li>ROLLBACK</li>
              <li>SAVEPOINT</li>
              <li>Transaction Management</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-sliders"></i> SQL Constraints</h2>
            <ul>
              <li>NOT NULL</li>
              <li>UNIQUE</li>
              <li>PRIMARY KEY</li>
              <li>FOREIGN KEY</li>
              <li>CHECK</li>
              <li>DEFAULT</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-left-right"></i> SQL Joins</h2>
            <ul>
              <li>INNER JOIN</li>
              <li>LEFT JOIN</li>
              <li>RIGHT JOIN</li>
              <li>FULL JOIN</li>
              <li>CROSS JOIN</li>
              <li>Self Join</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calculator"></i> SQL Functions</h2>
            <ul>
              <li>Aggregate Functions (SUM, COUNT, AVG, etc.)</li>
              <li>String Functions</li>
              <li>Date/Time Functions</li>
              <li>Mathematical Functions</li>
              <li>Window Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-funnel"></i> Advanced Filtering</h2>
            <ul>
              <li>GROUP BY</li>
              <li>HAVING</li>
              <li>Subqueries</li>
              <li>EXISTS/NOT EXISTS</li>
              <li>IN/NOT IN</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Set Operations</h2>
            <ul>
              <li>UNION/UNION ALL</li>
              <li>INTERSECT</li>
              <li>EXCEPT/MINUS</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-plus"></i> Views and Indexes</h2>
            <ul>
              <li>Creating and Using Views</li>
              <li>Index Types and Usage</li>
              <li>Materialized Views</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-binary"></i> Stored Procedures</h2>
            <ul>
              <li>Creating and Calling Procedures</li>
              <li>Parameters (IN, OUT, INOUT)</li>
              <li>Variables and Control Structures</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-text"></i> Functions</h2>
            <ul>
              <li>User-Defined Functions</li>
              <li>Scalar vs Table Functions</li>
              <li>Built-in Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-lock"></i> Triggers</h2>
            <ul>
              <li>Trigger Concepts</li>
              <li>BEFORE/AFTER Triggers</li>
              <li>INSTEAD OF Triggers</li>
              <li>Trigger Use Cases</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-people"></i> User Management</h2>
            <ul>
              <li>Creating Users</li>
              <li>Roles and Privileges</li>
              <li>Authentication Methods</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-clock-history"></i> Database Maintenance</h2>
            <ul>
              <li>Backup and Restore</li>
              <li>Performance Tuning</li>
              <li>Query Optimization</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-3"></i> Advanced Topics</h2>
            <ul>
              <li>Recursive Queries</li>
              <li>Common Table Expressions (CTEs)</li>
              <li>Pivoting Data</li>
              <li>Dynamic SQL</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database-check"></i> SQL in Applications</h2>
            <ul>
              <li>SQL Injection Prevention</li>
              <li>ORM vs Raw SQL</li>
              <li>Database Connection Pooling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SqlSyllabus;