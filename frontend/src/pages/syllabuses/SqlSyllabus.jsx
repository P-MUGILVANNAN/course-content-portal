import React from 'react';

function SqlSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-database fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">SQL Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Structured Query Language</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to SQL</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is SQL?</li>
                <li className="list-group-item">History and Standards</li>
                <li className="list-group-item">SQL vs NoSQL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-server text-primary me-2"></i>Database Fundamentals</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Relational Database Concepts</li>
                <li className="list-group-item">Tables, Rows, and Columns</li>
                <li className="list-group-item">Primary Keys and Foreign Keys</li>
                <li className="list-group-item">Database Normalization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-terminal text-primary me-2"></i>SQL Command Categories</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">DDL (Data Definition Language)</li>
                <li className="list-group-item">DML (Data Manipulation Language)</li>
                <li className="list-group-item">DQL (Data Query Language)</li>
                <li className="list-group-item">DCL (Data Control Language)</li>
                <li className="list-group-item">TCL (Transaction Control Language)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-code text-primary me-2"></i>DDL Commands</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">CREATE DATABASE/TABLE</li>
                <li className="list-group-item">ALTER TABLE</li>
                <li className="list-group-item">DROP TABLE</li>
                <li className="list-group-item">TRUNCATE TABLE</li>
                <li className="list-group-item">Constraints (PRIMARY KEY, FOREIGN KEY, etc.)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-pencil-square text-primary me-2"></i>DML Commands</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">INSERT</li>
                <li className="list-group-item">UPDATE</li>
                <li className="list-group-item">DELETE</li>
                <li className="list-group-item">MERGE</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-search text-primary me-2"></i>DQL Commands</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">SELECT statement</li>
                <li className="list-group-item">WHERE clause</li>
                <li className="list-group-item">ORDER BY</li>
                <li className="list-group-item">DISTINCT</li>
                <li className="list-group-item">LIMIT/OFFSET</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-lock text-primary me-2"></i>DCL Commands</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">GRANT</li>
                <li className="list-group-item">REVOKE</li>
                <li className="list-group-item">User Privileges</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-primary me-2"></i>TCL Commands</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">COMMIT</li>
                <li className="list-group-item">ROLLBACK</li>
                <li className="list-group-item">SAVEPOINT</li>
                <li className="list-group-item">Transaction Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-sliders text-primary me-2"></i>SQL Constraints</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">NOT NULL</li>
                <li className="list-group-item">UNIQUE</li>
                <li className="list-group-item">PRIMARY KEY</li>
                <li className="list-group-item">FOREIGN KEY</li>
                <li className="list-group-item">CHECK</li>
                <li className="list-group-item">DEFAULT</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-left-right text-primary me-2"></i>SQL Joins</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">INNER JOIN</li>
                <li className="list-group-item">LEFT JOIN</li>
                <li className="list-group-item">RIGHT JOIN</li>
                <li className="list-group-item">FULL JOIN</li>
                <li className="list-group-item">CROSS JOIN</li>
                <li className="list-group-item">Self Join</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-calculator text-primary me-2"></i>SQL Functions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Aggregate Functions (SUM, COUNT, AVG, etc.)</li>
                <li className="list-group-item">String Functions</li>
                <li className="list-group-item">Date/Time Functions</li>
                <li className="list-group-item">Mathematical Functions</li>
                <li className="list-group-item">Window Functions</li>
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
                <li className="list-group-item">GROUP BY</li>
                <li className="list-group-item">HAVING</li>
                <li className="list-group-item">Subqueries</li>
                <li className="list-group-item">EXISTS/NOT EXISTS</li>
                <li className="list-group-item">IN/NOT IN</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SqlSyllabus;