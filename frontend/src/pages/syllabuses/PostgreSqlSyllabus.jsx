import React from 'react';

function PostgreSqlSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-database fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">PostgreSQL Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of PostgreSQL Database</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to PostgreSQL</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is PostgreSQL?</li>
                <li className="list-group-item">PostgreSQL vs Other Databases</li>
                <li className="list-group-item">Key Features and Advantages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-download text-primary me-2"></i>Installation & Setup</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Downloading PostgreSQL</li>
                <li className="list-group-item">Installation on Windows/Linux/macOS</li>
                <li className="list-group-item">Using pgAdmin and psql</li>
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
                <li className="list-group-item">Numeric Types</li>
                <li className="list-group-item">Character Types</li>
                <li className="list-group-item">Boolean Type</li>
                <li className="list-group-item">Date/Time Types</li>
                <li className="list-group-item">JSON & Array Types</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Database Operations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating and Dropping Databases</li>
                <li className="list-group-item">Connecting to Databases</li>
                <li className="list-group-item">Basic psql Commands</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-table text-primary me-2"></i>Table Operations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating and Dropping Tables</li>
                <li className="list-group-item">Altering Tables</li>
                <li className="list-group-item">Truncating Tables</li>
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
              <h2 className="h5 mb-0"><i className="bi bi-pencil-square text-primary me-2"></i>CRUD Operations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">INSERT - Adding Data</li>
                <li className="list-group-item">UPDATE - Modifying Data</li>
                <li className="list-group-item">DELETE - Removing Data</li>
                <li className="list-group-item">SELECT - Querying Data</li>
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
                <li className="list-group-item">Basic SELECT Statements</li>
                <li className="list-group-item">WHERE Clause (Filtering)</li>
                <li className="list-group-item">ORDER BY (Sorting)</li>
                <li className="list-group-item">LIMIT and OFFSET</li>
                <li className="list-group-item">DISTINCT (Unique Values)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-left-right text-primary me-2"></i>JOINS</h2>
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
                <li className="list-group-item">GROUP BY</li>
                <li className="list-group-item">HAVING Clause</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-binary text-primary me-2"></i>Advanced Data Types</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">JSON/JSONB</li>
                <li className="list-group-item">Arrays</li>
                <li className="list-group-item">Geometric Types</li>
                <li className="list-group-item">Network Address Types</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>Stored Procedures & Functions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">PL/pgSQL Basics</li>
                <li className="list-group-item">Creating Functions</li>
                <li className="list-group-item">Triggers</li>
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
                <li className="list-group-item">Materialized Views</li>
                <li className="list-group-item">Updating Views</li>
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
                <li className="list-group-item">User Roles and Permissions</li>
                <li className="list-group-item">GRANT and REVOKE</li>
                <li className="list-group-item">Row-Level Security</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-speedometer2 text-primary me-2"></i>Performance Tuning</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Indexes</li>
                <li className="list-group-item">EXPLAIN ANALYZE</li>
                <li className="list-group-item">Query Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-hdd-stack text-primary me-2"></i>Backup & Recovery</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">pg_dump and pg_restore</li>
                <li className="list-group-item">Point-in-Time Recovery</li>
                <li className="list-group-item">Replication</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-puzzle text-primary me-2"></i>Extensions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Popular Extensions</li>
                <li className="list-group-item">Installing Extensions</li>
                <li className="list-group-item">PostGIS for Geospatial Data</li>
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
                <li className="list-group-item">BEGIN, COMMIT, ROLLBACK</li>
                <li className="list-group-item">Transaction Isolation Levels</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-window-stack text-primary me-2"></i>Window Functions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">OVER Clause</li>
                <li className="list-group-item">PARTITION BY</li>
                <li className="list-group-item">Common Window Functions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-union text-primary me-2"></i>Common Table Expressions (CTEs)</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">WITH Clause</li>
                <li className="list-group-item">Recursive Queries</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-fullscreen text-primary me-2"></i>Full-Text Search</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">tsvector and tsquery</li>
                <li className="list-group-item">Creating Search Indexes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostgreSqlSyllabus;