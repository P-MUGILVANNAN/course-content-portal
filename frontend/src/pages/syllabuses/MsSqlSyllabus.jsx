import React from 'react';

function MsSqlSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-database fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">MS SQL Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Microsoft SQL Server</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to MS SQL</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is MS SQL Server?</li>
                <li className="list-group-item">History and Evolution</li>
                <li className="list-group-item">SQL Server Editions</li>
                <li className="list-group-item">Advantages of MS SQL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-3 text-primary me-2"></i>SQL Server Architecture</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Database Engine Components</li>
                <li className="list-group-item">Storage Engine</li>
                <li className="list-group-item">Query Processor</li>
                <li className="list-group-item">SQL OS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tools text-primary me-2"></i>SQL Server Management Studio</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">SSMS Overview</li>
                <li className="list-group-item">Connecting to Server</li>
                <li className="list-group-item">Object Explorer</li>
                <li className="list-group-item">Query Editor</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>Database Fundamentals</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating Databases</li>
                <li className="list-group-item">System Databases</li>
                <li className="list-group-item">Database Files and Filegroups</li>
                <li className="list-group-item">Database States</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-card-list text-primary me-2"></i>Data Types</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Numeric Data Types</li>
                <li className="list-group-item">Character/String Types</li>
                <li className="list-group-item">Date and Time Types</li>
                <li className="list-group-item">Special Data Types</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-table text-primary me-2"></i>Tables</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating Tables</li>
                <li className="list-group-item">Table Structure</li>
                <li className="list-group-item">Altering Tables</li>
                <li className="list-group-item">Temporary Tables</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-lock text-primary me-2"></i>Constraints</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Primary Key</li>
                <li className="list-group-item">Foreign Key</li>
                <li className="list-group-item">Unique Constraint</li>
                <li className="list-group-item">Check Constraint</li>
                <li className="list-group-item">Default Constraint</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-primary me-2"></i>CRUD Operations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">INSERT Statement</li>
                <li className="list-group-item">SELECT Statement</li>
                <li className="list-group-item">UPDATE Statement</li>
                <li className="list-group-item">DELETE Statement</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-search text-primary me-2"></i>SELECT Queries</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Filtering with WHERE</li>
                <li className="list-group-item">Sorting with ORDER BY</li>
                <li className="list-group-item">Pattern Matching with LIKE</li>
                <li className="list-group-item">IN and BETWEEN Operators</li>
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
                <li className="list-group-item">FULL JOIN</li>
                <li className="list-group-item">CROSS JOIN</li>
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
                <li className="list-group-item">COUNT, SUM, AVG</li>
                <li className="list-group-item">MIN and MAX</li>
                <li className="list-group-item">GROUP BY Clause</li>
                <li className="list-group-item">HAVING Clause</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>Subqueries</h2>
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
              <h2 className="h5 mb-0"><i className="bi bi-safe text-primary me-2"></i>Security</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Authentication Modes</li>
                <li className="list-group-item">Server Logins</li>
                <li className="list-group-item">Database Users</li>
                <li className="list-group-item">Roles and Permissions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MsSqlSyllabus;