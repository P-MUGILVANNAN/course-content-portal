import React from 'react';

function MsSqlNotes() {
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
          table, th, td {
            border: 1px solid #dee2e6;
          }
          th, td {
            padding: 0.75rem;
            text-align: left;
          }
          th {
            background-color: #f8f9fa;
          }
        `}
      </style>

      <header className="bg-success text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-database"></i> MSSQL Notes</h1>
          <p className="lead">Your Comprehensive Guide to Microsoft SQL Server</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction to MSSQL</a>
              <a className="nav-link" href="#architecture"><i className="bi bi-diagram-3"></i> SQL Server Architecture</a>
              <a className="nav-link" href="#ssms"><i className="bi bi-tools"></i> SQL Server Management Studio</a>
              <a className="nav-link" href="#database-basics"><i className="bi bi-database"></i> Database Basics</a>
              <a className="nav-link" href="#data-types"><i className="bi bi-card-list"></i> Data Types</a>
              <a className="nav-link" href="#tables"><i className="bi bi-table"></i> Tables</a>
              <a className="nav-link" href="#constraints"><i className="bi bi-shield-lock"></i> Constraints</a>
              <a className="nav-link" href="#crud"><i className="bi bi-arrow-repeat"></i> CRUD Operations</a>
              <a className="nav-link" href="#select-queries"><i className="bi bi-search"></i> SELECT Queries</a>
              <a className="nav-link" href="#joins"><i className="bi bi-arrow-left-right"></i> Joins</a>
              <a className="nav-link" href="#aggregate"><i className="bi bi-calculator"></i> Aggregate Functions</a>
              <a className="nav-link" href="#group-by"><i className="bi bi-collection"></i> GROUP BY & HAVING</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to MSSQL</h2>
              
              <div className="property-card">
                <h3 className="h4">What is MSSQL?</h3>
                <ul>
                  <li><strong>Microsoft SQL Server (MSSQL)</strong> is a <strong>relational database management system (RDBMS)</strong> developed by <strong>Microsoft</strong>.</li>
                  <li>It is used to store and manage data using <strong>Structured Query Language (SQL)</strong>.</li>
                  <li>MSSQL helps developers, analysts, and companies handle <strong>large-scale data storage</strong>, <strong>retrieval</strong>, and <strong>manipulation</strong> efficiently.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Key Features of MSSQL:</h3>
                <ul>
                  <li><strong>Security</strong> – Supports authentication, encryption, and role-based access.</li>
                  <li><strong>High Performance</strong> – Optimized query engine and indexing for fast data access.</li>
                  <li><strong>Data Management Tools</strong> – GUI (SSMS) and command-line tools.</li>
                  <li><strong>Stored Procedures & Triggers</strong> – Enables automation and complex logic.</li>
                  <li><strong>Backup & Restore</strong> – Supports full and partial backups.</li>
                  <li><strong>Data Integration</strong> – Can connect with applications using .NET, Java, Python, etc.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Use Cases:</h3>
                <ul>
                  <li>Banking systems storing transactions</li>
                  <li>E-commerce websites managing product and order data</li>
                  <li>College student database systems</li>
                  <li>Inventory and Billing systems</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-World Analogy:</h3>
                <p>Think of MSSQL like a digital filing cabinet:</p>
                <ul>
                  <li>Each database = One cabinet</li>
                  <li>Each table = A drawer</li>
                  <li>Each row = A file</li>
                  <li>Each column = A label inside the file</li>
                </ul>
              </div>
            </section>

            <section id="architecture" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> SQL Server Architecture</h2>
              
              <div className="property-card">
                <h3 className="h4">What is SQL Server Architecture?</h3>
                <p>SQL Server Architecture refers to the internal structure and components that make Microsoft SQL Server work. It defines how data is stored, managed, and accessed efficiently.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Main Components:</h3>
                <ol>
                  <li>
                    <strong>Database Engine</strong>
                    <ul>
                      <li>Core service for storing, processing, and securing data.</li>
                      <li>Handles queries, transactions, indexing, etc.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Relational Engine (Query Processor)</strong>
                    <ul>
                      <li>Parses, optimizes, and executes SQL queries.</li>
                      <li>Determines the best way to retrieve requested data.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Storage Engine</strong>
                    <ul>
                      <li>Manages reading/writing data to physical storage.</li>
                      <li>Controls files, pages, extents, and indexes.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>SQL OS (Operating System Layer)</strong>
                    <ul>
                      <li>Sits on top of the actual OS.</li>
                      <li>Manages memory, scheduling, and I/O operations.</li>
                    </ul>
                  </li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">SQL Server Services:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Service Name</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SQL Server</td>
                      <td>Main database engine</td>
                    </tr>
                    <tr>
                      <td>SQL Server Agent</td>
                      <td>Executes scheduled jobs like backups</td>
                    </tr>
                    <tr>
                      <td>SQL Server Browser</td>
                      <td>Helps client connect to the right SQL Server instance</td>
                    </tr>
                    <tr>
                      <td>SSIS (Integration Services)</td>
                      <td>Used for data import/export</td>
                    </tr>
                    <tr>
                      <td>SSRS (Reporting Services)</td>
                      <td>Used to create and deliver reports</td>
                    </tr>
                    <tr>
                      <td>SSAS (Analysis Services)</td>
                      <td>Used for OLAP and data mining</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Simple Flow Example:</h3>
                <ol>
                  <li>User sends query through SSMS</li>
                  <li>Relational Engine parses & optimizes it</li>
                  <li>Storage Engine retrieves the data</li>
                  <li>SQL OS handles resource allocation</li>
                  <li>Output is returned to the user</li>
                </ol>
              </div>
            </section>

            <section id="ssms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-tools"></i> SQL Server Management Studio (SSMS)</h2>
              
              <div className="property-card">
                <h3 className="h4">What is SSMS?</h3>
                <ul>
                  <li>SQL Server Management Studio (SSMS) is the official GUI tool provided by Microsoft to interact with SQL Server.</li>
                  <li>It allows you to create, manage, query, and administer databases.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Key Features of SSMS:</h3>
                <ul>
                  <li>Write & execute SQL queries</li>
                  <li>Manage databases, tables, views, stored procedures</li>
                  <li>Run and schedule jobs</li>
                  <li>Backup and restore databases</li>
                  <li>View execution plans and monitor performance</li>
                  <li>Manage security and permissions</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">How to Install SSMS:</h3>
                <ol>
                  <li>Download from: <a href="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms" target="_blank" rel="noopener noreferrer">https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms</a></li>
                  <li>Install like a regular Windows app</li>
                  <li>Launch and connect to:
                    <ul>
                      <li><strong>Server Name:</strong> Your SQL Server instance (e.g., localhost)</li>
                      <li><strong>Authentication:</strong> Windows / SQL Server Authentication</li>
                    </ul>
                  </li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">SSMS Interface Overview:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Section</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Object Explorer</strong></td>
                      <td>Navigate databases and objects</td>
                    </tr>
                    <tr>
                      <td><strong>Query Editor</strong></td>
                      <td>Write and run SQL commands</td>
                    </tr>
                    <tr>
                      <td><strong>Result Pane</strong></td>
                      <td>Shows query results</td>
                    </tr>
                    <tr>
                      <td><strong>Messages Pane</strong></td>
                      <td>Shows success or error messages</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="database-basics" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> Database Basics</h2>
              
              <div className="property-card">
                <h3 className="h4">What is a Database?</h3>
                <ul>
                  <li>A <strong>Database</strong> is a <strong>structured collection of data</strong> that is stored electronically and can be accessed, managed, and updated efficiently.</li>
                  <li>In MSSQL, databases store everything: tables, views, procedures, users, functions, and more.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Types of Databases in MSSQL:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>System Databases</td>
                      <td>Predefined by SQL Server (master, model, msdb, tempdb)</td>
                    </tr>
                    <tr>
                      <td>User Databases</td>
                      <td>Created by developers or users for storing custom data</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Basic Database Commands:</h3>
                <pre><code>{`-- 1. Create a Database
CREATE DATABASE CollegeDB;

-- 2. Use a Database
USE CollegeDB;

-- 3. Rename a Database
ALTER DATABASE CollegeDB MODIFY NAME = UniDB;

-- 4. Delete a Database
DROP DATABASE UniDB;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">What's Inside a Database?</h3>
                <ul>
                  <li><strong>Tables</strong> – Store rows and columns of data</li>
                  <li><strong>Views</strong> – Virtual tables</li>
                  <li><strong>Stored Procedures</strong> – Predefined SQL blocks</li>
                  <li><strong>Functions</strong> – Return single values or tables</li>
                  <li><strong>Schemas</strong> – Logical grouping of DB objects</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example:</h3>
                <p>Imagine a <strong>CollegeDB</strong>:</p>
                <ul>
                  <li><strong>Students</strong> table</li>
                  <li><strong>Courses</strong> table</li>
                  <li><strong>Enrollments</strong> table</li>
                </ul>
                <p>All these tables are stored inside one <strong>CollegeDB</strong> database.</p>
              </div>
            </section>

            <section id="data-types" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-card-list"></i> Data Types in MSSQL</h2>
              
              <div className="property-card">
                <h3 className="h4">What are Data Types?</h3>
                <ul>
                  <li><strong>Data Types</strong> define the kind of data a column can hold in a table — such as <strong>numbers</strong>, <strong>text</strong>, <strong>dates</strong>, etc.</li>
                  <li>Every column in a table must have a defined <strong>data type</strong>.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common MSSQL Data Types (Categorized)</h3>
                
                <h5 className="mt-3">Numeric Data Types</h5>
                <table>
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>INT</td>
                      <td>Whole numbers</td>
                      <td>1, 20, -50</td>
                    </tr>
                    <tr>
                      <td>BIGINT</td>
                      <td>Large integers</td>
                      <td>9223372036854775807</td>
                    </tr>
                    <tr>
                      <td>DECIMAL(p, s)</td>
                      <td>Exact numeric with precision & scale</td>
                      <td>12.50</td>
                    </tr>
                    <tr>
                      <td>FLOAT</td>
                      <td>Approximate floating-point</td>
                      <td>3.14159</td>
                    </tr>
                  </tbody>
                </table>
                
                <h5 className="mt-3">Character/String Data Types</h5>
                <table>
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CHAR(n)</td>
                      <td>Fixed-length string</td>
                      <td>'YES'</td>
                    </tr>
                    <tr>
                      <td>VARCHAR(n)</td>
                      <td>Variable-length string</td>
                      <td>'Student Name'</td>
                    </tr>
                    <tr>
                      <td>TEXT</td>
                      <td>Long text (deprecated in newer versions)</td>
                      <td>Long paragraphs</td>
                    </tr>
                  </tbody>
                </table>
                
                <h5 className="mt-3">Date and Time Types</h5>
                <table>
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DATE</td>
                      <td>Only date</td>
                      <td>2025-06-16</td>
                    </tr>
                    <tr>
                      <td>TIME</td>
                      <td>Only time</td>
                      <td>14:30:00</td>
                    </tr>
                    <tr>
                      <td>DATETIME</td>
                      <td>Date and time</td>
                      <td>2025-06-16 14:30:00</td>
                    </tr>
                  </tbody>
                </table>
                
                <h5 className="mt-3">Boolean / Other Types</h5>
                <table>
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BIT</td>
                      <td>0 or 1 (true/false)</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>UNIQUEIDENTIFIER</td>
                      <td>Globally unique ID</td>
                      <td>6F9619FF-8B86-D011-B42D-00C04FC964FF</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="tables" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-table"></i> Tables in MSSQL</h2>
              
              <div className="property-card">
                <h3 className="h4">What is a Table?</h3>
                <p>A <strong>table</strong> is the <strong>core structure</strong> of any relational database where data is stored in <strong>rows and columns</strong>.</p>
                <p>Each <strong>row</strong> = one record</p>
                <p>Each <strong>column</strong> = one attribute (with a defined data type)</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Basic Table Commands:</h3>
                <pre><code>{`-- 1. Create Table
CREATE TABLE Students (
    StudentID INT,
    Name VARCHAR(100),
    Age INT,
    DOB DATE
);

-- 2. View Table Structure
SP_COLUMNS Students;

-- 3. Insert Data into Table
INSERT INTO Students (StudentID, Name, Age, DOB)
VALUES (1, 'Mugil', 22, '2003-05-15');

-- 4. Alter Table (Add/Modify/Drop Columns)
-- Add a new column
ALTER TABLE Students ADD Email VARCHAR(100);

-- Modify a column
ALTER TABLE Students ALTER COLUMN Age SMALLINT;

-- Drop a column
ALTER TABLE Students DROP COLUMN Email;

-- 5. Rename Table
EXEC sp_rename 'Students', 'CollegeStudents';

-- 6. Delete Table
DROP TABLE CollegeStudents;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Table: Products</h3>
                <table>
                  <thead>
                    <tr>
                      <th>ProductID</th>
                      <th>ProductName</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>101</td>
                      <td>Pen</td>
                      <td>10.00</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Notebook</td>
                      <td>50.00</td>
                      <td>200</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`CREATE TABLE Products (
    ProductID INT,
    ProductName VARCHAR(50),
    Price DECIMAL(10, 2),
    Quantity INT
);`}</code></pre>
              </div>
            </section>

            <section id="constraints" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> Constraints in MSSQL</h2>
              
              <div className="property-card">
                <h3 className="h4">What are Constraints?</h3>
                <ul>
                  <li><strong>Constraints</strong> are rules applied to columns in a table to ensure the <strong>accuracy and integrity</strong> of the data.</li>
                  <li>They help <strong>prevent invalid data</strong> from being inserted into the database.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Types of Constraints:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Constraint</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PRIMARY KEY</td>
                      <td>Uniquely identifies each record</td>
                    </tr>
                    <tr>
                      <td>FOREIGN KEY</td>
                      <td>Maintains relationship between tables</td>
                    </tr>
                    <tr>
                      <td>NOT NULL</td>
                      <td>Ensures column cannot have NULL value</td>
                    </tr>
                    <tr>
                      <td>UNIQUE</td>
                      <td>Ensures all values in a column are different</td>
                    </tr>
                    <tr>
                      <td>CHECK</td>
                      <td>Ensures data meets a specific condition</td>
                    </tr>
                    <tr>
                      <td>DEFAULT</td>
                      <td>Assigns default value if none is provided</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Examples:</h3>
                <pre><code>{`-- 1. PRIMARY KEY
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100)
);

-- 2. NOT NULL
CREATE TABLE Employees (
    EmpID INT,
    Name VARCHAR(50) NOT NULL
);

-- 3. UNIQUE
CREATE TABLE Users (
    UserID INT,
    Email VARCHAR(100) UNIQUE
);

-- 4. CHECK
CREATE TABLE Products (
    ProductID INT,
    Price DECIMAL(10, 2) CHECK (Price > 0)
);

-- 5. DEFAULT
CREATE TABLE Orders (
    OrderID INT,
    Status VARCHAR(20) DEFAULT 'Pending'
);

-- 6. FOREIGN KEY
CREATE TABLE Departments (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(100)
);

CREATE TABLE Employees (
    EmpID INT,
    EmpName VARCHAR(100),
    DeptID INT FOREIGN KEY REFERENCES Departments(DeptID)
);`}</code></pre>
              </div>
            </section>

            <section id="crud" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> CRUD Operations (Create, Read, Update, Delete)</h2>
              
              <div className="property-card">
                <h3 className="h4">What is CRUD?</h3>
                <p>CRUD stands for the four basic operations we perform on a database:</p>
                <ul>
                  <li><strong>Create</strong> – Insert data</li>
                  <li><strong>Read</strong> – Retrieve data</li>
                  <li><strong>Update</strong> – Modify data</li>
                  <li><strong>Delete</strong> – Remove data</li>
                </ul>
                <p>These operations are the foundation of any SQL-based application.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. INSERT (Create)</h3>
                <p>Add new records to a table.</p>
                <pre><code>{`INSERT INTO Students (StudentID, Name, Age)
VALUES (1, 'Mugil', 22);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. SELECT (Read)</h3>
                <p>Retrieve data from one or more tables.</p>
                <pre><code>{`-- Select all columns
SELECT * FROM Students;

-- Select specific columns with condition
SELECT Name, Age FROM Students WHERE Age > 20;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. UPDATE (Update)</h3>
                <p>Change data in existing records.</p>
                <pre><code>{`UPDATE Students
SET Age = 23
WHERE StudentID = 1;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. DELETE (Delete)</h3>
                <p>Remove data from the table.</p>
                <pre><code>{`DELETE FROM Students
WHERE StudentID = 1;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Full Example Table: Students</h3>
                <table>
                  <thead>
                    <tr>
                      <th>StudentID</th>
                      <th>Name</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mugil</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Akash</td>
                      <td>21</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`-- INSERT
INSERT INTO Students VALUES (2, 'Akash', 21);

-- SELECT
SELECT * FROM Students;

-- UPDATE
UPDATE Students SET Name = 'Mugilvannan'
WHERE StudentID = 1;

-- DELETE
DELETE FROM Students WHERE StudentID = 2;`}</code></pre>
              </div>
            </section>

            <section id="select-queries" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-search"></i> SELECT Queries (with WHERE, ORDER BY, etc.)</h2>
              
              <div className="property-card">
                <h3 className="h4">What is a SELECT Query?</h3>
                <p>The SELECT statement is used to retrieve data from a table. It's one of the most commonly used SQL commands.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Basic Syntax:</h3>
                <pre><code>{`SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column ASC|DESC;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Key Clauses in SELECT:</h3>
                
                <h5>1. SELECT – Basic Query</h5>
                <pre><code>{`-- Select all columns
SELECT * FROM Students;

-- Select specific columns
SELECT Name, Age FROM Students;`}</code></pre>
                
                <h5 className="mt-3">2. WHERE – Filter records</h5>
                <pre><code>{`-- Simple condition
SELECT * FROM Students
WHERE Age > 21;

-- Equality condition
SELECT * FROM Students
WHERE Name = 'Mugil';`}</code></pre>
                
                <h5 className="mt-3">3. AND / OR / NOT</h5>
                <pre><code>{`-- AND (both conditions must be true)
SELECT * FROM Students
WHERE Age > 21 AND Name = 'Mugil';

-- OR (either condition can be true)
SELECT * FROM Students
WHERE Age = 22 OR Age = 23;

-- NOT (negates the condition)
SELECT * FROM Students
WHERE NOT Age = 21;`}</code></pre>
                
                <h5 className="mt-3">4. ORDER BY – Sort the result</h5>
                <pre><code>{`-- Ascending order (default)
SELECT * FROM Students
ORDER BY Name ASC;

-- Descending order
SELECT * FROM Students
ORDER BY Age DESC;`}</code></pre>
                
                <h5 className="mt-3">5. IN / BETWEEN / LIKE</h5>
                <pre><code>{`-- IN (matches any value in a list)
SELECT * FROM Students WHERE Age IN (21, 22, 23);

-- BETWEEN (range of values)
SELECT * FROM Students WHERE Age BETWEEN 20 AND 25;

-- LIKE (for pattern matching)
-- starts with M
SELECT * FROM Students WHERE Name LIKE 'M%';

-- ends with l
SELECT * FROM Students WHERE Name LIKE '%l';

-- contains 'u'
SELECT * FROM Students WHERE Name LIKE '%u%';`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Table: Students</h3>
                <table>
                  <thead>
                    <tr>
                      <th>StudentID</th>
                      <th>Name</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mugil</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Akash</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Rahul</td>
                      <td>23</td>
                    </tr>
                  </tbody>
                </table>
                
                <h5 className="mt-3">Sample Query:</h5>
                <pre><code>{`SELECT Name FROM Students
WHERE Age >= 22
ORDER BY Age DESC;`}</code></pre>
              </div>
            </section>

            <section id="joins" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-left-right"></i> Joins (INNER, LEFT, RIGHT, FULL)</h2>
              
              <div className="property-card">
                <h3 className="h4">What is a Join?</h3>
                <p>A JOIN is used to combine rows from two or more tables based on a related column (usually a foreign key).</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Types of Joins:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Join Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>INNER JOIN</td>
                      <td>Returns matching rows from both tables</td>
                    </tr>
                    <tr>
                      <td>LEFT JOIN</td>
                      <td>Returns all rows from the left table and matched rows from the right</td>
                    </tr>
                    <tr>
                      <td>RIGHT JOIN</td>
                      <td>Returns all rows from the right table and matched rows from the left</td>
                    </tr>
                    <tr>
                      <td>FULL JOIN</td>
                      <td>Returns all rows when there is a match in one of the tables</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Sample Tables:</h3>
                
                <h5>Students</h5>
                <table>
                  <thead>
                    <tr>
                      <th>StudentID</th>
                      <th>Name</th>
                      <th>DeptID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mugil</td>
                      <td>101</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Akash</td>
                      <td>102</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Rahul</td>
                      <td>103</td>
                    </tr>
                  </tbody>
                </table>
                
                <h5 className="mt-3">Departments</h5>
                <table>
                  <thead>
                    <tr>
                      <th>DeptID</th>
                      <th>DeptName</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>101</td>
                      <td>CSE</td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>IT</td>
                    </tr>
                    <tr>
                      <td>104</td>
                      <td>ECE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. INNER JOIN</h3>
                <pre><code>{`SELECT Students.Name, Departments.DeptName
FROM Students
INNER JOIN Departments ON Students.DeptID = Departments.DeptID;`}</code></pre>
                <p>Returns only matched DeptID: 101 and 102</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. LEFT JOIN</h3>
                <pre><code>{`SELECT Students.Name, Departments.DeptName
FROM Students
LEFT JOIN Departments ON Students.DeptID = Departments.DeptID;`}</code></pre>
                <p>Returns all students even if Dept not found (Rahul will have NULL)</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. RIGHT JOIN</h3>
                <pre><code>{`SELECT Students.Name, Departments.DeptName
FROM Students
RIGHT JOIN Departments ON Students.DeptID = Departments.DeptID;`}</code></pre>
                <p>Returns all departments, even if no matching student (ECE will show NULL student)</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. FULL OUTER JOIN</h3>
                <pre><code>{`SELECT Students.Name, Departments.DeptName
FROM Students
FULL OUTER JOIN Departments ON Students.DeptID = Departments.DeptID;`}</code></pre>
                <p>Returns all rows from both tables. Unmatched rows show NULL.</p>
              </div>
            </section>

            <section id="aggregate" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> Aggregate Functions in MSSQL</h2>
              
              <div className="property-card">
                <h3 className="h4">What are Aggregate Functions?</h3>
                <ul>
                  <li>Aggregate functions perform a calculation on a set of values and return a single value.</li>
                  <li>They're mainly used with GROUP BY and in reports.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common Aggregate Functions:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Function</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>COUNT()</td>
                      <td>Counts the number of rows</td>
                    </tr>
                    <tr>
                      <td>SUM()</td>
                      <td>Adds all numeric values</td>
                    </tr>
                    <tr>
                      <td>AVG()</td>
                      <td>Calculates the average</td>
                    </tr>
                    <tr>
                      <td>MIN()</td>
                      <td>Finds the smallest value</td>
                    </tr>
                    <tr>
                      <td>MAX()</td>
                      <td>Finds the largest value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Table: Orders</h3>
                <table>
                  <thead>
                    <tr>
                      <th>OrderID</th>
                      <th>CustomerName</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mugil</td>
                      <td>1500</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Akash</td>
                      <td>2000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Mugil</td>
                      <td>1000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Examples:</h3>
                <pre><code>{`-- 1. COUNT – Total number of orders
SELECT COUNT(*) AS TotalOrders FROM Orders;

-- 2. SUM – Total revenue
SELECT SUM(Amount) AS TotalRevenue FROM Orders;

-- 3. AVG – Average order value
SELECT AVG(Amount) AS AvgOrderValue FROM Orders;

-- 4. MIN & MAX – Lowest and highest order amount
SELECT MIN(Amount) AS MinAmount, MAX(Amount) AS MaxAmount FROM Orders;`}</code></pre>
              </div>
            </section>

            <section id="group-by" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-collection"></i> GROUP BY & HAVING in MSSQL</h2>
              
              <div className="property-card">
                <h3 className="h4">Why use GROUP BY?</h3>
                <p>GROUP BY is used to group rows that have the same values in specified columns, often combined with aggregate functions like SUM(), COUNT(), etc.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Syntax:</h3>
                <pre><code>{`SELECT column_name,
AGGREGATE_FUNCTION(column_name)
FROM table_name
GROUP BY column_name;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Table: Orders</h3>
                <table>
                  <thead>
                    <tr>
                      <th>OrderID</th>
                      <th>CustomerName</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mugil</td>
                      <td>1500</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Akash</td>
                      <td>2000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Mugil</td>
                      <td>1000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. GROUP BY – Total amount per customer</h3>
                <pre><code>{`SELECT CustomerName, SUM(Amount) AS TotalSpent
FROM Orders
GROUP BY CustomerName;`}</code></pre>
                <h5>Output:</h5>
                <table>
                  <thead>
                    <tr>
                      <th>CustomerName</th>
                      <th>TotalSpent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mugil</td>
                      <td>2500</td>
                    </tr>
                    <tr>
                      <td>Akash</td>
                      <td>2000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. HAVING – Filter grouped results</h3>
                <p>HAVING is like WHERE, but used after GROUP BY for aggregate conditions.</p>
                <pre><code>{`SELECT CustomerName, SUM(Amount) AS TotalSpent
FROM Orders
GROUP BY CustomerName
HAVING SUM(Amount) > 2000;`}</code></pre>
                <h5>Output:</h5>
                <table>
                  <thead>
                    <tr>
                      <th>CustomerName</th>
                      <th>TotalSpent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mugil</td>
                      <td>2500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">GROUP BY vs HAVING vs WHERE</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Clause</th>
                      <th>Works on</th>
                      <th>Used for</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>WHERE</td>
                      <td>Individual rows</td>
                      <td>Filter rows before grouping</td>
                    </tr>
                    <tr>
                      <td>GROUP BY</td>
                      <td>Groups of rows</td>
                      <td>Group data</td>
                    </tr>
                    <tr>
                      <td>HAVING</td>
                      <td>Grouped data</td>
                      <td>Filter after grouping</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>MSSQL Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default MsSqlNotes;