import React from 'react';

function PostgreSqlNotes() {
  return (
    <div className="bg-light">
      <style>
        {`
          pre {
            background-color: #1f2937;
            color: #e5e7eb;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
          }
          code {
            font-family: 'Courier New', monospace;
          }
          .sidebar {
            position: sticky;
            top: 1rem;
            height: calc(100vh - 2rem);
            overflow-y: auto;
          }
          @media (max-width: 991.98px) {
            .sidebar {
              position: static;
              height: auto;
              margin-bottom: 20px;
              overflow-y: visible;
            }
          }
          .nav-link {
            color: #495057;
          }
          .nav-link:hover {
            color: #0d6efd;
          }
          .property-card {
            background-color: #f8f9fa;
            border-left: 4px solid #0d6efd;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 4px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1rem;
          }
          th, td {
            border: 1px solid #dee2e6;
            padding: 0.75rem;
            text-align: left;
          }
          th {
            background-color: #e9ecef;
          }
        `}
      </style>

      <header className="bg-success text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-database"></i> PostgreSQL Notes</h1>
          <p className="lead">Your Comprehensive Guide to PostgreSQL Database</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#features"><i className="bi bi-star"></i> Key Features</a>
              <a className="nav-link" href="#comparison"><i className="bi bi-arrow-left-right"></i> PostgreSQL vs Others</a>
              <a className="nav-link" href="#usecases"><i className="bi bi-briefcase"></i> Use Cases</a>
              <a className="nav-link" href="#installation"><i className="bi bi-download"></i> Installation & Setup</a>
              <a className="nav-link" href="#datatypes"><i className="bi bi-card-list"></i> Data Types</a>
              <a className="nav-link" href="#operations"><i className="bi bi-gear"></i> Database Operations</a>
              <a className="nav-link" href="#constraints"><i className="bi bi-shield-lock"></i> Constraints</a>
              <a className="nav-link" href="#crud"><i className="bi bi-pencil-square"></i> CRUD Operations</a>
              <a className="nav-link" href="#select"><i className="bi bi-search"></i> SELECT Queries</a>
              <a className="nav-link" href="#joins"><i className="bi bi-arrow-left-right"></i> JOINS</a>
              <a className="nav-link" href="#aggregate"><i className="bi bi-calculator"></i> Aggregate Functions</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to PostgreSQL</h2>
              <div className="property-card">
                <h3 className="h4">What is PostgreSQL?</h3>
                <ul>
                  <li>PostgreSQL (pronounced as "Post-Gres-Q-L") is a powerful, open-source, object-relational database system (ORDBMS).</li>
                  <li>It is known for its reliability, feature richness, and extensibility.</li>
                  <li>It follows the ACID principles (Atomicity, Consistency, Isolation, Durability).</li>
                  <li>Supports complex queries, foreign keys, triggers, views, and stored procedures.</li>
                </ul>
              </div>
            </section>

            <section id="features" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-star"></i> Key Features of PostgreSQL</h2>
              <div className="property-card">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Open Source</td>
                      <td>Free to use and modify under PostgreSQL license</td>
                    </tr>
                    <tr>
                      <td>Cross-platform</td>
                      <td>Works on Windows, Linux, macOS</td>
                    </tr>
                    <tr>
                      <td>Extensible</td>
                      <td>Create custom functions, data types, and extensions</td>
                    </tr>
                    <tr>
                      <td>ACID Compliant</td>
                      <td>Ensures reliable transactions</td>
                    </tr>
                    <tr>
                      <td>JSON Support</td>
                      <td>You can store and query JSON/JSONB data</td>
                    </tr>
                    <tr>
                      <td>MVCC</td>
                      <td>Multi-Version Concurrency Control allows better performance in concurrent environments</td>
                    </tr>
                    <tr>
                      <td>Community Support</td>
                      <td>Large and active developer community</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="comparison" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-left-right"></i> PostgreSQL vs Other Databases</h2>
              <div className="property-card">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>PostgreSQL</th>
                      <th>MySQL</th>
                      <th>SQLite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Type</td>
                      <td>Object-Relational</td>
                      <td>Relational</td>
                      <td>Embedded DB</td>
                    </tr>
                    <tr>
                      <td>ACID Compliance</td>
                      <td>Yes</td>
                      <td>Yes (InnoDB only)</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>JSON Support</td>
                      <td>Advanced</td>
                      <td>Limited</td>
                      <td>Basic</td>
                    </tr>
                    <tr>
                      <td>Concurrency Control</td>
                      <td>MVCC</td>
                      <td>Table-level Lock</td>
                      <td>Limited</td>
                    </tr>
                    <tr>
                      <td>Custom Types</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="usecases" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-briefcase"></i> Popular Use Cases</h2>
              <div className="property-card">
                <ul>
                  <li>Web and enterprise applications</li>
                  <li>Data analytics and reporting systems</li>
                  <li>Financial systems needing data integrity</li>
                  <li>Geographic Information Systems (PostGIS extension)</li>
                </ul>
              </div>
            </section>

            <section id="installation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-download"></i> Installation & Setup of PostgreSQL</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-cloud-download"></i> Step 1: Downloading PostgreSQL</h3>
                <p>Go to the official PostgreSQL website: <a href="https://www.postgresql.org/download/" target="_blank" rel="noopener noreferrer">https://www.postgresql.org/download/</a></p>
                <p>Choose your OS:</p>
                <ul>
                  <li>Windows</li>
                  <li>macOS</li>
                  <li>Linux (Ubuntu, Fedora, etc.)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-windows"></i> Step 2: Installing on Windows</h3>
                <ol>
                  <li>Download the <strong>PostgreSQL Installer</strong> from EnterpriseDB.</li>
                  <li>Run the .exe file.</li>
                  <li>Choose the components:
                    <ul>
                      <li>PostgreSQL Server</li>
                      <li>pgAdmin (GUI)</li>
                      <li>Stack Builder (optional)</li>
                    </ul>
                  </li>
                  <li>Set your <strong>superuser password</strong> (for postgres user).</li>
                  <li>Choose port number (default is <strong>5432</strong>).</li>
                  <li>Finish installation and launch pgAdmin.</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-layout-sidebar"></i> Step 3: Using pgAdmin (GUI Tool)</h3>
                <ul>
                  <li>Open pgAdmin.</li>
                  <li>Login using postgres user and the password you created.</li>
                  <li>Create new databases, write SQL queries, and manage tables easily through UI.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-terminal"></i> Step 4: Using psql (Command-line Tool)</h3>
                <p>After installing PostgreSQL, you can access the terminal client psql.</p>
                <pre><code>psql -U postgres</code></pre>
                <p>Then enter the password when prompted.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-ul"></i> Common psql Commands</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Command</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>\l</code> or <code>\list</code></td>
                      <td>List all databases</td>
                    </tr>
                    <tr>
                      <td><code>\c dbname</code></td>
                      <td>Connect to a database</td>
                    </tr>
                    <tr>
                      <td><code>\dt</code></td>
                      <td>List all tables in current DB</td>
                    </tr>
                    <tr>
                      <td><code>\d tablename</code></td>
                      <td>Show structure of a table</td>
                    </tr>
                    <tr>
                      <td><code>\q</code></td>
                      <td>Quit psql</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="datatypes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-card-list"></i> Data Types in PostgreSQL</h2>
              <p>PostgreSQL supports a wide variety of <strong>built-in data types</strong> that are used to define the kind of data stored in each column of a table.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-123"></i> 1. Numeric Data Types</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SMALLINT</td>
                      <td>2 bytes, -32,768 to 32,767</td>
                      <td>1200</td>
                    </tr>
                    <tr>
                      <td>INTEGER</td>
                      <td>4 bytes, -2B to +2B</td>
                      <td>25000</td>
                    </tr>
                    <tr>
                      <td>BIGINT</td>
                      <td>8 bytes, huge range</td>
                      <td>10000000000</td>
                    </tr>
                    <tr>
                      <td>DECIMAL(p,s) / NUMERIC</td>
                      <td>Exact precision</td>
                      <td>99.99, 100.50</td>
                    </tr>
                    <tr>
                      <td>REAL</td>
                      <td>4-byte floating point</td>
                      <td>10.75</td>
                    </tr>
                    <tr>
                      <td>DOUBLE PRECISION</td>
                      <td>8-byte float</td>
                      <td>200.123456</td>
                    </tr>
                    <tr>
                      <td>SERIAL</td>
                      <td>Auto-increment integer</td>
                      <td>1, 2, 3,...</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price NUMERIC(10, 2)
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-text-left"></i> 2. Character (String) Types</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CHAR(n)</td>
                      <td>Fixed-length string (padded)</td>
                      <td>'Hello'</td>
                    </tr>
                    <tr>
                      <td>VARCHAR(n)</td>
                      <td>Variable-length string (up to n)</td>
                      <td>'Hello'</td>
                    </tr>
                    <tr>
                      <td>TEXT</td>
                      <td>Unlimited-length string</td>
                      <td>'This is text'</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`CREATE TABLE users (
    username VARCHAR(50),
    bio TEXT
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-toggle-on"></i> 3. Boolean Type</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BOOLEAN</td>
                      <td>true/false values</td>
                      <td>TRUE, FALSE</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`CREATE TABLE tasks (
    title TEXT,
    completed BOOLEAN DEFAULT FALSE
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-calendar"></i> 4. Date/Time Types</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DATE</td>
                      <td>Calendar date</td>
                      <td>2025-06-16</td>
                    </tr>
                    <tr>
                      <td>TIME</td>
                      <td>Time of day (no timezone)</td>
                      <td>14:30:00</td>
                    </tr>
                    <tr>
                      <td>TIMESTAMP</td>
                      <td>Date + time (no timezone)</td>
                      <td>2025-06-16 14:30:00</td>
                    </tr>
                    <tr>
                      <td>TIMESTAMPTZ</td>
                      <td>Date + time with timezone</td>
                      <td>2025-06-16 14:30:00+05:30</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`CREATE TABLE events (
    event_name TEXT,
    event_date TIMESTAMP
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-braces"></i> 5. JSON & Array (Introduction)</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>JSON</td>
                      <td>Stores JSON data</td>
                    </tr>
                    <tr>
                      <td>ARRAY</td>
                      <td>Stores multiple values in one column</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="operations" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Database and Table Operations in PostgreSQL</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-plus-circle"></i> 1. Creating a Database</h3>
                <pre><code>{`CREATE DATABASE mydatabase;`}</code></pre>
                <p>This creates a new database named mydatabase.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-ul"></i> 2. Viewing All Databases</h3>
                <pre><code>{`\l
-- or
\list`}</code></pre>
                <p>Lists all available databases in PostgreSQL.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-plug"></i> 3. Connecting to a Database</h3>
                <pre><code>{`\c mydatabase`}</code></pre>
                <p>Connects you to mydatabase.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-trash"></i> 4. Dropping a Database</h3>
                <pre><code>{`DROP DATABASE mydatabase;`}</code></pre>
                <p>Deletes the entire database including all data.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-table"></i> 5. Creating a Table</h3>
                <pre><code>{`CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    grade CHAR(1)
);`}</code></pre>
                <p>This creates a table named students with 4 columns.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-ul"></i> 6. Viewing All Tables in a Database</h3>
                <pre><code>{`\dt`}</code></pre>
                <p>Lists all tables in the current database.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-eye"></i> 7. Viewing Structure of a Table</h3>
                <pre><code>{`\d students`}</code></pre>
                <p>Displays column types and constraints for the students table.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-pencil"></i> 8. Altering a Table</h3>
                <h5 className="h6 mt-3">➤ Add a Column</h5>
                <pre><code>{`ALTER TABLE students ADD email VARCHAR(100);`}</code></pre>
                
                <h5 className="h6 mt-3">➤ Rename a Column</h5>
                <pre><code>{`ALTER TABLE students RENAME COLUMN grade TO class;`}</code></pre>
                
                <h5 className="h6 mt-3">➤ Change Data Type</h5>
                <pre><code>{`ALTER TABLE students ALTER COLUMN age TYPE BIGINT;`}</code></pre>
                
                <h5 className="h6 mt-3">➤ Drop a Column</h5>
                <pre><code>{`ALTER TABLE students DROP COLUMN email;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-trash"></i> 9. Dropping a Table</h3>
                <pre><code>{`DROP TABLE students;`}</code></pre>
                <p>Deletes the table and all its data.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-eraser"></i> 10. Truncating a Table (Delete All Rows)</h3>
                <pre><code>{`TRUNCATE TABLE students;`}</code></pre>
                <p>Quickly removes all records but keeps the structure.</p>
              </div>
            </section>

            <section id="constraints" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> Constraints in PostgreSQL</h2>
              <p>Constraints are rules enforced on data in a table to maintain data accuracy and integrity.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-key"></i> 1. PRIMARY KEY</h3>
                <ul>
                  <li>Uniquely identifies each row.</li>
                  <li>Only one primary key per table.</li>
                  <li>Cannot be NULL.</li>
                </ul>
                <pre><code>{`CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-link-45deg"></i> 2. FOREIGN KEY</h3>
                <ul>
                  <li>Links a column to the PRIMARY KEY of another table.</li>
                  <li>Ensures referential integrity.</li>
                </ul>
                <pre><code>{`CREATE TABLE departments (
    dept_id SERIAL PRIMARY KEY,
    dept_name VARCHAR(50)
);

CREATE TABLE employees (
    emp_id SERIAL PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-unique"></i> 3. UNIQUE</h3>
                <ul>
                  <li>Ensures all values in a column are different.</li>
                </ul>
                <pre><code>{`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-exclamation-circle"></i> 4. NOT NULL</h3>
                <ul>
                  <li>Prevents a column from having NULL values.</li>
                </ul>
                <pre><code>{`CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check-circle"></i> 5. CHECK</h3>
                <ul>
                  <li>Ensures values meet a specific condition.</li>
                </ul>
                <pre><code>{`CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    price NUMERIC CHECK (price > 0)
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-slash-circle"></i> 6. DEFAULT</h3>
                <ul>
                  <li>Sets a default value when no value is provided.</li>
                </ul>
                <pre><code>{`CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(20) DEFAULT 'pending'
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-collection"></i> Combine Multiple Constraints</h3>
                <pre><code>{`CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age >= 18),
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}</code></pre>
              </div>
            </section>

            <section id="crud" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-pencil-square"></i> Insert, Update, Delete Data</h2>
              <p>These are the basic operations to manipulate data in PostgreSQL tables.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-plus-circle"></i> 1. INSERT INTO – Add Data</h3>
                <h5 className="h6 mt-3">➤ Insert Single Row</h5>
                <pre><code>{`INSERT INTO students (name, age, grade)
VALUES ('Mugil', 20, 'A');`}</code></pre>
                
                <h5 className="h6 mt-3">➤ Insert Multiple Rows</h5>
                <pre><code>{`INSERT INTO students (name, age, grade)
VALUES
('Karthik', 21, 'B'),
('Ravi', 19, 'A');`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-repeat"></i> 2. UPDATE – Modify Existing Data</h3>
                <h5 className="h6 mt-3">➤ Update Specific Record(s)</h5>
                <pre><code>{`UPDATE students
SET grade = 'A+'
WHERE name = 'Mugil';`}</code></pre>
                
                <h5 className="h6 mt-3">➤ Update Multiple Columns</h5>
                <pre><code>{`UPDATE students
SET age = 22, grade = 'B+'
WHERE name = 'Karthik';`}</code></pre>
                <p className="text-danger">Use WHERE carefully! Otherwise all records will be updated.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-trash"></i> 3. DELETE – Remove Records</h3>
                <h5 className="h6 mt-3">➤ Delete Specific Record(s)</h5>
                <pre><code>{`DELETE FROM students
WHERE name = 'Ravi';`}</code></pre>
                
                <h5 className="h6 mt-3">➤ Delete All Rows (But Keep Table)</h5>
                <pre><code>{`DELETE FROM students;
-- OR
TRUNCATE TABLE students;`}</code></pre>
              </div>
            </section>

            <section id="select" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-search"></i> Basic SELECT Queries</h2>
              <p>The SELECT statement is used to retrieve data from a table.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-asterisk"></i> 1. Select All Columns</h3>
                <pre><code>{`SELECT * FROM students;`}</code></pre>
                <p>Fetches all columns and all rows from the students table.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-columns"></i> 2. Select Specific Columns</h3>
                <pre><code>{`SELECT name, grade FROM students;`}</code></pre>
                <p>Fetches only the name and grade columns.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-funnel"></i> 3. Use WHERE Clause (Filtering)</h3>
                <pre><code>{`SELECT * FROM students
WHERE grade = 'A';`}</code></pre>
                <p>Filters rows where grade is 'A'.</p>
                
                <pre className="mt-3"><code>{`SELECT * FROM students
WHERE age > 20 AND grade = 'B';`}</code></pre>
                <p>Combines multiple conditions.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-sort-alpha-down"></i> 4. ORDER BY Clause (Sorting)</h3>
                <pre><code>{`SELECT * FROM students
ORDER BY age ASC; -- ASC = Ascending (default)`}</code></pre>
                
                <pre className="mt-3"><code>{`SELECT * FROM students
ORDER BY grade DESC;`}</code></pre>
                <p>Sorts the results by a column.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-collection"></i> 5. LIMIT and OFFSET</h3>
                <pre><code>{`SELECT * FROM students
LIMIT 5;`}</code></pre>
                <p>Returns only 5 rows.</p>
                
                <pre className="mt-3"><code>{`SELECT * FROM students
LIMIT 5 OFFSET 5;`}</code></pre>
                <p>Skips the first 5 rows and shows the next 5.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-tag"></i> 6. Aliases using AS</h3>
                <pre><code>{`SELECT name AS student_name, age AS student_age FROM students;`}</code></pre>
                <p>Renames columns in the result for clarity.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-distinct"></i> 7. DISTINCT (Remove Duplicates)</h3>
                <pre><code>{`SELECT DISTINCT grade FROM students;`}</code></pre>
                <p>Returns unique grades only.</p>
              </div>
            </section>

            <section id="joins" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-left-right"></i> JOINS in PostgreSQL (Beginner Level)</h2>
              <p>Joins are used to combine data from two or more tables based on related columns.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-database"></i> Sample Tables for Demo</h3>
                <pre><code>{`-- Table: departments
CREATE TABLE departments (
    dept_id SERIAL PRIMARY KEY,
    dept_name VARCHAR(50)
);

-- Table: employees
CREATE TABLE employees (
    emp_id SERIAL PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left-right"></i> 1. INNER JOIN</h3>
                <p>Returns records with matching values in both tables.</p>
                <pre><code>{`SELECT e.emp_name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left"></i> 2. LEFT JOIN (or LEFT OUTER JOIN)</h3>
                <p>Returns all records from the left table + matched records from the right table.</p>
                <pre><code>{`SELECT e.emp_name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;`}</code></pre>
                <p>If there's no match, dept_name will be NULL.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right"></i> 3. RIGHT JOIN (or RIGHT OUTER JOIN)</h3>
                <p>Returns all records from the right table + matched from the left.</p>
                <pre><code>{`SELECT e.emp_name, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.dept_id;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrows-angle-expand"></i> 4. FULL JOIN (or FULL OUTER JOIN)</h3>
                <p>Returns all records when there is a match in either left or right table.</p>
                <pre><code>{`SELECT e.emp_name, d.dept_name
FROM employees e
FULL JOIN departments d ON e.dept_id = d.dept_id;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-x-diamond"></i> 5. CROSS JOIN</h3>
                <p>Returns <strong>cartesian product</strong> of both tables (all combinations).</p>
                <pre><code>{`SELECT e.emp_name, d.dept_name
FROM employees e
CROSS JOIN departments d;`}</code></pre>
              </div>
            </section>

            <section id="aggregate" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> Aggregate Functions & GROUP BY</h2>
              <p>Aggregate functions perform a calculation on a group of values and return a single result.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-database"></i> Sample Table</h3>
                <pre><code>{`CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    product VARCHAR(50),
    quantity INT,
    price NUMERIC
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-123"></i> 1. COUNT()</h3>
                <p>Returns number of rows.</p>
                <pre><code>{`SELECT COUNT(*) FROM sales;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-plus-slash-minus"></i> 2. SUM()</h3>
                <p>Returns total sum of a numeric column.</p>
                <pre><code>{`SELECT SUM(quantity) FROM sales;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-graph-up"></i> 3. AVG()</h3>
                <p>Returns average value.</p>
                <pre><code>{`SELECT AVG(price) FROM sales;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-up"></i> 4. MIN() and MAX()</h3>
                <p>Returns minimum and maximum values.</p>
                <pre><code>{`SELECT MIN(price), MAX(price) FROM sales;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-collection"></i> 5. GROUP BY</h3>
                <p>Groups rows that have the same values in specified columns.</p>
                <pre><code>{`SELECT product, SUM(quantity)
FROM sales
GROUP BY product;`}</code></pre>
                <p>This returns total quantity sold per product.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-funnel"></i> 6. HAVING Clause</h3>
                <p>Filters after grouping (used with GROUP BY).</p>
                <pre><code>{`SELECT product, SUM(quantity) AS total_qty
FROM sales
GROUP BY product
HAVING SUM(quantity) > 100;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-sort-alpha-down"></i> 7. ORDER BY with GROUP BY</h3>
                <pre><code>{`SELECT product, AVG(price) AS avg_price
FROM sales
GROUP BY product
ORDER BY avg_price DESC;`}</code></pre>
                <p>Sorts grouped results by average price.</p>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>PostgreSQL Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default PostgreSqlNotes;