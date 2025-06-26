import React from 'react';

function PostgreSqlSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-database"></i> PostgreSQL Syllabus</h1>
          <p className="lead">Comprehensive Coverage of PostgreSQL Database</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to PostgreSQL</h2>
            <ul>
              <li>What is PostgreSQL?</li>
              <li>PostgreSQL vs Other Databases</li>
              <li>Key Features and Advantages</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-download"></i> Installation & Setup</h2>
            <ul>
              <li>Downloading PostgreSQL</li>
              <li>Installation on Windows/Linux/macOS</li>
              <li>Using pgAdmin and psql</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-card-list"></i> Data Types</h2>
            <ul>
              <li>Numeric Types</li>
              <li>Character Types</li>
              <li>Boolean Type</li>
              <li>Date/Time Types</li>
              <li>JSON & Array Types</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Database Operations</h2>
            <ul>
              <li>Creating and Dropping Databases</li>
              <li>Connecting to Databases</li>
              <li>Basic psql Commands</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-table"></i> Table Operations</h2>
            <ul>
              <li>Creating and Dropping Tables</li>
              <li>Altering Tables</li>
              <li>Truncating Tables</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> Constraints</h2>
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
            <h2><i className="bi bi-pencil-square"></i> CRUD Operations</h2>
            <ul>
              <li>INSERT - Adding Data</li>
              <li>UPDATE - Modifying Data</li>
              <li>DELETE - Removing Data</li>
              <li>SELECT - Querying Data</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-search"></i> SELECT Queries</h2>
            <ul>
              <li>Basic SELECT Statements</li>
              <li>WHERE Clause (Filtering)</li>
              <li>ORDER BY (Sorting)</li>
              <li>LIMIT and OFFSET</li>
              <li>DISTINCT (Unique Values)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-left-right"></i> JOINS</h2>
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
              <li>GROUP BY</li>
              <li>HAVING Clause</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-binary"></i> Advanced Data Types</h2>
            <ul>
              <li>JSON/JSONB</li>
              <li>Arrays</li>
              <li>Geometric Types</li>
              <li>Network Address Types</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> Stored Procedures & Functions</h2>
            <ul>
              <li>PL/pgSQL Basics</li>
              <li>Creating Functions</li>
              <li>Triggers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-eye"></i> Views</h2>
            <ul>
              <li>Creating Views</li>
              <li>Materialized Views</li>
              <li>Updating Views</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lock"></i> Security</h2>
            <ul>
              <li>User Roles and Permissions</li>
              <li>GRANT and REVOKE</li>
              <li>Row-Level Security</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-speedometer2"></i> Performance Tuning</h2>
            <ul>
              <li>Indexes</li>
              <li>EXPLAIN ANALYZE</li>
              <li>Query Optimization</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-hdd-stack"></i> Backup & Recovery</h2>
            <ul>
              <li>pg_dump and pg_restore</li>
              <li>Point-in-Time Recovery</li>
              <li>Replication</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> Extensions</h2>
            <ul>
              <li>Popular Extensions</li>
              <li>Installing Extensions</li>
              <li>PostGIS for Geospatial Data</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> Transactions</h2>
            <ul>
              <li>ACID Properties</li>
              <li>BEGIN, COMMIT, ROLLBACK</li>
              <li>Transaction Isolation Levels</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-window-stack"></i> Window Functions</h2>
            <ul>
              <li>OVER Clause</li>
              <li>PARTITION BY</li>
              <li>Common Window Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-union"></i> Common Table Expressions (CTEs)</h2>
            <ul>
              <li>WITH Clause</li>
              <li>Recursive Queries</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-fullscreen"></i> Full-Text Search</h2>
            <ul>
              <li>tsvector and tsquery</li>
              <li>Creating Search Indexes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostgreSqlSyllabus;