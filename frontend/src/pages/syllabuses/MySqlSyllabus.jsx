import React from 'react';

function MySqlSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-database fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">MySQL Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of MySQL Database Management</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Databases</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is a Database?</li>
                <li className="list-group-item">Types of Databases</li>
                <li className="list-group-item">Relational vs Non-Relational Databases</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>Introduction to MySQL</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is MySQL?</li>
                <li className="list-group-item">MySQL Features and Benefits</li>
                <li className="list-group-item">MySQL Architecture</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tools text-primary me-2"></i>MySQL Installation & Setup</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Downloading MySQL</li>
                <li className="list-group-item">Installation Process</li>
                <li className="list-group-item">Configuration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-terminal text-primary me-2"></i>MySQL Workbench</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Introduction to MySQL Workbench</li>
                <li className="list-group-item">Creating Connections</li>
                <li className="list-group-item">Navigating the Interface</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>SQL Basics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">SQL Syntax</li>
                <li className="list-group-item">SQL Statements</li>
                <li className="list-group-item">SQL Data Types</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-code text-primary me-2"></i>DDL (Data Definition Language)</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">CREATE DATABASE</li>
                <li className="list-group-item">CREATE TABLE</li>
                <li className="list-group-item">ALTER TABLE</li>
                <li className="list-group-item">DROP TABLE</li>
                <li className="list-group-item">TRUNCATE TABLE</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-pencil-square text-primary me-2"></i>DML (Data Manipulation Language)</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">INSERT</li>
                <li className="list-group-item">UPDATE</li>
                <li className="list-group-item">DELETE</li>
                <li className="list-group-item">SELECT</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-lock text-primary me-2"></i>DCL (Data Control Language)</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">GRANT</li>
                <li className="list-group-item">REVOKE</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-primary me-2"></i>TCL (Transaction Control Language)</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">COMMIT</li>
                <li className="list-group-item">ROLLBACK</li>
                <li className="list-group-item">SAVEPOINT</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-funnel text-primary me-2"></i>Constraints</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">PRIMARY KEY</li>
                <li className="list-group-item">FOREIGN KEY</li>
                <li className="list-group-item">UNIQUE</li>
                <li className="list-group-item">NOT NULL</li>
                <li className="list-group-item">CHECK</li>
                <li className="list-group-item">DEFAULT</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-calculator text-primary me-2"></i>Aggregate Functions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">COUNT()</li>
                <li className="list-group-item">SUM()</li>
                <li className="list-group-item">AVG()</li>
                <li className="list-group-item">MIN()</li>
                <li className="list-group-item">MAX()</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-sort-alpha-down text-primary me-2"></i>Sorting & Filtering</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">ORDER BY</li>
                <li className="list-group-item">GROUP BY</li>
                <li className="list-group-item">HAVING</li>
                <li className="list-group-item">DISTINCT</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-left-right text-primary me-2"></i>Joins</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">INNER JOIN</li>
                <li className="list-group-item">LEFT JOIN</li>
                <li className="list-group-item">RIGHT JOIN</li>
                <li className="list-group-item">CROSS JOIN</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-up-down text-primary me-2"></i>Import & Export</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Exporting Data</li>
                <li className="list-group-item">Importing Data</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-check text-primary me-2"></i>Security</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Authentication</li>
                <li className="list-group-item">Authorization</li>
                <li className="list-group-item">Data Encryption</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySqlSyllabus;