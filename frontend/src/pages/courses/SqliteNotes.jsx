import React from 'react';

function SqliteNotes() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-database"></i> SQLITE NOTES</h1>
          <p className="lead">Your Comprehensive Guide to SQLite Database</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction to SQLite</a>
              <a className="nav-link" href="#installation"><i className="bi bi-download"></i> Installing SQLite</a>
              <a className="nav-link" href="#commands"><i className="bi bi-terminal"></i> Basic Commands</a>
              <a className="nav-link" href="#creating-db"><i className="bi bi-plus-circle"></i> Creating Database</a>
              <a className="nav-link" href="#data-types"><i className="bi bi-list-columns"></i> Data Types</a>
              <a className="nav-link" href="#creating-tables"><i className="bi bi-table"></i> Creating Tables</a>
              <a className="nav-link" href="#inserting-data"><i className="bi bi-plus-square"></i> Inserting Data</a>
              <a className="nav-link" href="#retrieving-data"><i className="bi bi-search"></i> Retrieving Data</a>
              <a className="nav-link" href="#updating"><i className="bi bi-pencil-square"></i> Updating Records</a>
              <a className="nav-link" href="#deleting"><i className="bi bi-trash"></i> Deleting Records</a>
              <a className="nav-link" href="#filtering"><i className="bi bi-funnel"></i> Filtering & Sorting</a>
              <a className="nav-link" href="#groupby"><i className="bi bi-collection"></i> GROUP BY & HAVING</a>
              <a className="nav-link" href="#joins"><i className="bi bi-shuffle"></i> Joins in SQLite</a>
              <a className="nav-link" href="#functions"><i className="bi bi-calculator"></i> Built-in Functions</a>
              <a className="nav-link" href="#constraints"><i className="bi bi-shield-lock"></i> SQLite Constraints</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Topic 1. Introduction to SQLite</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <ul>
                  <li><strong>SQLite</strong> is a <strong>lightweight, serverless, self-contained</strong> SQL database engine.</li>
                  <li>It is a <strong>C library</strong> that provides a relational database management system and is widely used in <strong>mobile apps, embedded systems, and browsers</strong> like Chrome and Firefox.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-star"></i> Key Features:</h3>
                <ul>
                  <li><strong>Serverless</strong>: No need to install a separate database server; database is stored in a single .db file.</li>
                  <li><strong>Zero configuration</strong>: No setup or admin required.</li>
                  <li><strong>Cross-platform</strong>: Works on Windows, macOS, Linux, Android, iOS, etc.</li>
                  <li><strong>Lightweight</strong>: Minimal memory and storage requirements.</li>
                  <li><strong>ACID compliant</strong>: Ensures safe transactions (Atomicity, Consistency, Isolation, Durability).</li>
                  <li><strong>Embedded</strong>: Can be bundled with your application.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> Where SQLite is Used:</h3>
                <ul>
                  <li>Mobile apps (Android/iOS) – stores local data</li>
                  <li>Browsers (Firefox, Chrome) – stores settings, history</li>
                  <li>IoT Devices – lightweight storage</li>
                  <li>Desktop apps – offline data storage</li>
                  <li>Testing and Prototyping – quick setup</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check-circle"></i> Advantages:</h3>
                <ul>
                  <li>Easy to learn and use</li>
                  <li>No need for database server</li>
                  <li>Open source and free</li>
                  <li>Fast for read-heavy operations</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-exclamation-triangle"></i> Limitations:</h3>
                <ul>
                  <li>Not ideal for high-concurrency or large-scale web applications</li>
                  <li>No user management like MySQL or PostgreSQL</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Real-Life Example Use Case:</h3>
                <p>You're building a To-Do List mobile app, and want to store tasks locally. You can use SQLite to create a tasks.db file, store task details in a table, and perform insert/update/delete easily — no internet or server needed!</p>
              </div>
            </section>

            <section id="installation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-download"></i> Topic 2. Installing SQLite</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <p>To start using SQLite, you need to download and install the SQLite command-line tool which lets you create databases and run SQL queries.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-windows"></i> Steps to Install SQLite (Windows):</h3>
                <ol>
                  <li><strong>Download SQLite Tools:</strong>
                    <ul>
                      <li>Go to <a href="https://www.sqlite.org/download.html" target="_blank" rel="noopener noreferrer">https://www.sqlite.org/download.html</a></li>
                      <li>Download "sqlite-tools-win32-x86" (ZIP file)</li>
                    </ul>
                  </li>
                  <li><strong>Extract the ZIP File:</strong>
                    <ul>
                      <li>Extract it to a folder like C:\sqlite</li>
                    </ul>
                  </li>
                  <li><strong>Set Environment Variable (optional but recommended):</strong>
                    <ul>
                      <li>Add C:\sqlite to your system's PATH variable so you can run sqlite3 from any folder using Command Prompt.</li>
                    </ul>
                  </li>
                  <li><strong>Verify Installation:</strong>
                    <ul>
                      <li>Open Command Prompt</li>
                      <li>Type: <code>sqlite3</code></li>
                      <li>You'll see the SQLite prompt:
                        <pre><code>SQLite version 3.x.x
Enter ".help" for usage hints.
sqlite&gt;</code></pre>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-ubuntu"></i> For Linux (Ubuntu):</h3>
                <pre><code>sudo apt update
sudo apt install sqlite3</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-apple"></i> For macOS:</h3>
                <p>SQLite comes pre-installed in most macOS systems. Just open Terminal and type:</p>
                <pre><code>sqlite3</code></pre>
              </div>
            </section>

            <section id="commands" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-terminal"></i> Basic Commands in SQLite CLI:</h2>
              
              <div className="property-card">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Command</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>.help</code></td>
                      <td>Shows all available commands</td>
                    </tr>
                    <tr>
                      <td><code>.databases</code></td>
                      <td>Lists connected databases</td>
                    </tr>
                    <tr>
                      <td><code>.tables</code></td>
                      <td>Lists all tables in the current DB</td>
                    </tr>
                    <tr>
                      <td><code>.exit</code></td>
                      <td>Exits the SQLite CLI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="creating-db" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-plus-circle"></i> Topic 3. Creating a Database in SQLite</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <ul>
                  <li>In SQLite, a database is simply a <strong>file on your disk</strong> (usually with .db or .sqlite extension).</li>
                  <li>You can create a new database directly from the <strong>SQLite command-line interface</strong>.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Steps to Create a Database:</h3>
                <h4 className="h5 mt-3">Method 1: Using Command Prompt / Terminal</h4>
                <ol>
                  <li>Open your terminal or command prompt</li>
                  <li>Type the following command:
                    <pre><code>sqlite3 student.db</code></pre>
                  </li>
                  <li>This creates a new database file named student.db in the current folder and opens the SQLite prompt.
                    <pre><code>SQLite version 3.x.x
Enter ".help" for usage hints.
sqlite&gt;</code></pre>
                  </li>
                  <li>Type <code>.exit</code> to quit.</li>
                </ol>
                
                <h4 className="h5 mt-4">Method 2: Creating a Database and Table at Once</h4>
                <pre><code>sqlite3 mydata.db</code></pre>
                <p>Inside the SQLite prompt:</p>
                <pre><code>CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT
);</code></pre>
                <p>Type <code>.tables</code> to verify:</p>
                <pre><code>.tables</code></pre>
                <p>You'll see:</p>
                <pre><code>users</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> Where is the DB Stored?</h3>
                <ul>
                  <li>It creates a physical file like student.db in your working directory.</li>
                  <li>You can open this file later using:
                    <pre><code>sqlite3 student.db</code></pre>
                  </li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-exclamation-triangle"></i> No CREATE DATABASE command:</h3>
                <p>Unlike MySQL/PostgreSQL, SQLite <strong>does not use CREATE DATABASE</strong> — the file itself <strong>is</strong> the database.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Example:</h3>
                <pre><code>sqlite3 todo.db

CREATE TABLE tasks (
    id INTEGER PRIMARY KEY,
    title TEXT,
    status TEXT
);</code></pre>
              </div>
            </section>

            <section id="data-types" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-list-columns"></i> Topic 4. Data Types in SQLite</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <ul>
                  <li>SQLite uses dynamic typing, which means you can store any type of data in any column, regardless of the column's declared type.</li>
                  <li>However, SQLite supports five primary storage classes (types).</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-table"></i> SQLite Data Types:</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Storage Class</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>NULL</code></td>
                      <td>The value is a NULL value</td>
                      <td><code>NULL</code></td>
                    </tr>
                    <tr>
                      <td><code>INTEGER</code></td>
                      <td>A signed integer (whole number)</td>
                      <td><code>1, 42, -10</code></td>
                    </tr>
                    <tr>
                      <td><code>REAL</code></td>
                      <td>A floating point value</td>
                      <td><code>3.14, 9.8</code></td>
                    </tr>
                    <tr>
                      <td><code>TEXT</code></td>
                      <td>A text string, stored using UTF-8/UTF-16</td>
                      <td><code>'Hello'</code></td>
                    </tr>
                    <tr>
                      <td><code>BLOB</code></td>
                      <td>Binary Large Object (image, file, etc.)</td>
                      <td><code>X'AB12CD'</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-exclamation-triangle"></i> Dynamic Typing Example:</h3>
                <p>Even if you declare a column as INTEGER, SQLite lets you insert text into it:</p>
                <pre><code>CREATE TABLE sample (id INTEGER);
INSERT INTO sample (id) VALUES ('text'); -- Allowed!</code></pre>
                <p>But for best practices, always store the correct type.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Declaring Column Types:</h3>
                <p>While creating a table:</p>
                <pre><code>CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT,
    age INTEGER,
    balance REAL
);</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Example Table:</h3>
                <pre><code>CREATE TABLE products (
    id INTEGER,
    name TEXT,
    price REAL,
    image BLOB
);</code></pre>
              </div>
            </section>

            <section id="creating-tables" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-table"></i> Topic 5. Creating Tables in SQLite</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <ul>
                  <li>A table is a collection of related data in rows and columns.</li>
                  <li>In SQLite, you create a table using the CREATE TABLE SQL statement, defining columns with their names and data types.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Basic Syntax:</h3>
                <pre><code>CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
);</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Example 1: Student Table</h3>
                <pre><code>CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER,
    email TEXT UNIQUE
);</code></pre>
                <h4 className="h5 mt-3">Explanation:</h4>
                <ul>
                  <li><code>id</code>: unique ID for each student (primary key)</li>
                  <li><code>name</code>: student name (cannot be NULL)</li>
                  <li><code>email</code>: must be unique</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-check"></i> Common Constraints Used While Creating Tables:</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Constraint</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>PRIMARY KEY</code></td>
                      <td>Uniquely identifies each row</td>
                    </tr>
                    <tr>
                      <td><code>NOT NULL</code></td>
                      <td>Field cannot be empty</td>
                    </tr>
                    <tr>
                      <td><code>UNIQUE</code></td>
                      <td>All values must be different</td>
                    </tr>
                    <tr>
                      <td><code>DEFAULT</code></td>
                      <td>Sets a default value</td>
                    </tr>
                    <tr>
                      <td><code>CHECK</code></td>
                      <td>Restricts values based on a condition</td>
                    </tr>
                    <tr>
                      <td><code>FOREIGN KEY</code></td>
                      <td>Links to another table's primary key</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Example 2: Product Table</h3>
                <pre><code>{`CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL CHECK(price >= 0),
    stock INTEGER DEFAULT 0
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-eye"></i> Viewing Table Structure:</h3>
                <pre><code>.schema table_name</code></pre>
                <p>Example:</p>
                <pre><code>.schema students</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-trash"></i> Drop Table (if needed):</h3>
                <pre><code>DROP TABLE students;</code></pre>
              </div>
            </section>

            <section id="inserting-data" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-plus-square"></i> Topic 6. Inserting Data into SQLite Table</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <p>Use <code>INSERT INTO</code> to add new rows to a table.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Syntax:</h3>
                <pre><code>INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Example:</h3>
                <pre><code>INSERT INTO students (name, age, email)
VALUES ('Ravi', 21, 'ravi@gmail.com');</code></pre>
                <p>If all columns are filled in order:</p>
                <pre><code>INSERT INTO students VALUES (1, 'Anita', 22, 'anita@gmail.com');</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-ol"></i> Insert Multiple Rows:</h3>
                <pre><code>INSERT INTO students (name, age, email)
VALUES
('Kumar', 23, 'kumar@mail.com'),
('Divya', 20, 'divya@mail.com');</code></pre>
              </div>
            </section>

            <section id="retrieving-data" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-search"></i> Topic 7. Retrieving Data (SELECT)</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <p><code>SELECT</code> is used to fetch data from one or more tables.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Basic Syntax:</h3>
                <pre><code>SELECT column1, column2 FROM table_name;</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Examples:</h3>
                <pre><code>SELECT * FROM students;
SELECT name, age FROM students;</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-funnel"></i> Using WHERE:</h3>
                <pre><code>{`SELECT * FROM students WHERE age > 21;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-sort-alpha-down"></i> Using ORDER BY:</h3>
                <pre><code>SELECT * FROM students ORDER BY age DESC;</code></pre>
              </div>
            </section>

            <section id="updating" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-pencil-square"></i> Topic 8. Updating Records</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <p><code>UPDATE</code> is used to modify existing records in a table.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Syntax:</h3>
                <pre><code>UPDATE table_name 
SET column1 = value1, column2 = value2 
WHERE condition;</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Example:</h3>
                <pre><code>UPDATE students
SET age = 25
WHERE name = 'Ravi';</code></pre>
              </div>
            </section>

            <section id="deleting" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-trash"></i> Topic 9. Deleting Records</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <p><code>DELETE</code> is used to remove rows from a table.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Syntax:</h3>
                <pre><code>DELETE FROM table_name WHERE condition;</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Example:</h3>
                <pre><code>DELETE FROM students WHERE id = 1;</code></pre>
                <p>Without WHERE, all records will be deleted:</p>
                <pre><code>DELETE FROM students;</code></pre>
              </div>
            </section>

            <section id="filtering" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-funnel"></i> Topic 10. Filtering and Sorting</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <p>Use <code>WHERE</code>, <code>LIKE</code>, <code>BETWEEN</code>, <code>IN</code>, and <code>ORDER BY</code> to filter and sort data.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Filtering:</h3>
                <pre><code>{`SELECT * FROM students WHERE age > 20;
SELECT * FROM students WHERE name LIKE 'R%';
SELECT * FROM students WHERE age BETWEEN 18 AND 22;
SELECT * FROM students WHERE name IN ('Ravi', 'Divya');`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Sorting:</h3>
                <pre><code>SELECT * FROM students ORDER BY age ASC;
SELECT * FROM students ORDER BY name DESC;</code></pre>
              </div>
            </section>

            <section id="groupby" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-collection"></i> Topic 11. SQLite Clauses: GROUP BY and HAVING</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <ul>
                  <li><code>GROUP BY</code> groups rows that have the same values in specified columns.</li>
                  <li><code>HAVING</code> filters records after grouping (like WHERE, but for groups).</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> GROUP BY Syntax:</h3>
                <pre><code>SELECT column, aggregate_function(column)
FROM table
GROUP BY column;</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> HAVING Syntax:</h3>
                <pre><code>SELECT column, aggregate_function(column)
FROM table
GROUP BY column
HAVING condition;</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-table"></i> Example Table: marks</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>subject</th>
                      <th>marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ravi</td>
                      <td>Math</td>
                      <td>85</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Ravi</td>
                      <td>Science</td>
                      <td>90</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Divya</td>
                      <td>Math</td>
                      <td>78</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Divya</td>
                      <td>Science</td>
                      <td>88</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Example 1 – Using GROUP BY:</h3>
                <pre><code>SELECT name, AVG(marks) AS average_marks
FROM marks
GROUP BY name;</code></pre>
                <p>Output:</p>
                <pre><code>Ravi | 87.5
Divya | 83.0</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Example 2 – Using GROUP BY and HAVING:</h3>
                <pre><code>{`SELECT name, AVG(marks) AS average_marks
FROM marks
GROUP BY name
HAVING AVG(marks) > 85;`}</code></pre>
                <p>Output:</p>
                <pre><code>Ravi | 87.5</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-compare"></i> Difference Between WHERE and HAVING:</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Clause</th>
                      <th>Works on</th>
                      <th>Used For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>WHERE</code></td>
                      <td>Individual rows</td>
                      <td>Filtering before grouping</td>
                    </tr>
                    <tr>
                      <td><code>HAVING</code></td>
                      <td>Grouped rows</td>
                      <td>Filtering after grouping</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="joins" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shuffle"></i> Topic 12. Joins in SQLite</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <p>A <code>JOIN</code> is used to combine rows from two or more tables based on a related column between them.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-ul"></i> Types of Joins in SQLite:</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>INNER JOIN</code></td>
                      <td>Returns only matching rows in both tables</td>
                    </tr>
                    <tr>
                      <td><code>LEFT JOIN</code></td>
                      <td>Returns all rows from left table, matching from right</td>
                    </tr>
                    <tr>
                      <td><code>RIGHT JOIN</code></td>
                      <td>Not directly supported in SQLite (simulate using LEFT JOIN by switching tables)</td>
                    </tr>
                    <tr>
                      <td><code>FULL JOIN</code></td>
                      <td>Not directly supported (can be simulated with UNION)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-table"></i> Example Tables:</h3>
                <h4 className="h5">students Table:</h4>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ravi</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Divya</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Karthik</td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="h5">marks Table:</h4>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>student_id</th>
                      <th>subject</th>
                      <th>marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Math</td>
                      <td>85</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Math</td>
                      <td>78</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Science</td>
                      <td>90</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> INNER JOIN Example:</h3>
                <pre><code>SELECT students.name, marks.subject, marks.marks
FROM students
INNER JOIN marks ON students.id = marks.student_id;</code></pre>
                <p>Output:</p>
                <pre><code>Ravi | Math | 85
Divya | Math | 78
Ravi | Science | 90</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> LEFT JOIN Example:</h3>
                <pre><code>SELECT students.name, marks.subject, marks.marks
FROM students
LEFT JOIN marks ON students.id = marks.student_id;</code></pre>
                <p>Output:</p>
                <pre><code>Ravi | Math | 85
Divya | Math | 78
Ravi | Science | 90
Karthik | NULL | NULL</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> RIGHT JOIN / FULL JOIN:</h3>
                <p>Not supported directly. Simulate using:</p>
                <pre><code>-- Full Join Simulation (using UNION)
SELECT * FROM A LEFT JOIN B ON condition
UNION
SELECT * FROM A RIGHT JOIN B ON condition;</code></pre>
              </div>
            </section>

            <section id="functions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> Topic 13. SQLite Built-in Functions</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <p>SQLite provides built-in functions for performing operations on data — like calculations, string manipulation, and date handling.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-graph-up"></i> A. Aggregate Functions (Used with GROUP BY)</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Function</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>COUNT()</code></td>
                      <td>Number of rows</td>
                      <td><code>SELECT COUNT(*) FROM users;</code></td>
                    </tr>
                    <tr>
                      <td><code>SUM()</code></td>
                      <td>Total of a numeric column</td>
                      <td><code>SELECT SUM(marks) FROM scores;</code></td>
                    </tr>
                    <tr>
                      <td><code>AVG()</code></td>
                      <td>Average value</td>
                      <td><code>SELECT AVG(age) FROM users;</code></td>
                    </tr>
                    <tr>
                      <td><code>MIN()</code></td>
                      <td>Minimum value</td>
                      <td><code>SELECT MIN(price) FROM products;</code></td>
                    </tr>
                    <tr>
                      <td><code>MAX()</code></td>
                      <td>Maximum value</td>
                      <td><code>SELECT MAX(marks) FROM scores;</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-type"></i> B. String Functions</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Function</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>LENGTH(text)</code></td>
                      <td>Returns number of characters</td>
                      <td><code>SELECT LENGTH('SQLite'); → 6</code></td>
                    </tr>
                    <tr>
                      <td><code>UPPER(text)</code></td>
                      <td>Converts to uppercase</td>
                      <td><code>SELECT UPPER('hello'); → HELLO</code></td>
                    </tr>
                    <tr>
                      <td><code>LOWER(text)</code></td>
                      <td>Converts to lowercase</td>
                      <td><code>SELECT LOWER('HELLO'); → hello</code></td>
                    </tr>
                    <tr>
                      <td><code>SUBSTR(text, start, length)</code></td>
                      <td>Extract substring</td>
                      <td><code>SELECT SUBSTR('SQLite', 1, 4); → SQLi</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-calendar"></i> C. Date & Time Functions</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Function</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>DATE('now')</code></td>
                      <td>Current date (YYYY-MM-DD)</td>
                      <td><code>SELECT DATE('now');</code></td>
                    </tr>
                    <tr>
                      <td><code>DATETIME('now')</code></td>
                      <td>Current date and time</td>
                      <td><code>SELECT DATETIME('now');</code></td>
                    </tr>
                    <tr>
                      <td><code>STRFTIME(format, time)</code></td>
                      <td>Format date/time using format string</td>
                      <td><code>SELECT STRFTIME("%Y", 'now'); → 2025</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Example with GROUP BY + Function:</h3>
                <pre><code>SELECT subject, AVG(marks) AS average 
FROM marks 
GROUP BY subject;</code></pre>
              </div>
            </section>

            <section id="constraints" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> Topic 14. SQLite Constraints</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition:</h3>
                <p>Constraints are rules applied to table columns to enforce <strong>data integrity and consistency</strong>.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-ul"></i> Types of Constraints in SQLite:</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Constraint</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>PRIMARY KEY</code></td>
                      <td>Uniquely identifies each row in a table</td>
                    </tr>
                    <tr>
                      <td><code>NOT NULL</code></td>
                      <td>Ensures that a column cannot have NULL value</td>
                    </tr>
                    <tr>
                      <td><code>UNIQUE</code></td>
                      <td>Ensures all values in a column are different</td>
                    </tr>
                    <tr>
                      <td><code>CHECK</code></td>
                      <td>Ensures that values satisfy a condition</td>
                    </tr>
                    <tr>
                      <td><code>DEFAULT</code></td>
                      <td>Sets a default value for a column</td>
                    </tr>
                    <tr>
                      <td><code>FOREIGN KEY</code></td>
                      <td>Ensures referential integrity between two tables</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Example Table with Constraints:</h3>
                <pre><code>{`CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    age INTEGER CHECK(age >= 18),
    city TEXT DEFAULT 'Chennai'
);`}</code></pre>
                <h4 className="h5 mt-3">Explanation:</h4>
                <ul>
                  <li><code>id</code>: uniquely identifies user</li>
                  <li><code>NOT NULL</code>: name can't be left empty</li>
                  <li><code>UNIQUE</code>: email must be different for each user</li>
                  <li><code>CHECK</code>: only age 18 or above allowed</li>
                  <li><code>DEFAULT</code>: if city is not provided, 'Chennai' will be set</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> FOREIGN KEY Example:</h3>
                <h4 className="h5">departments Table:</h4>
                <pre><code>CREATE TABLE departments (
    dept_id INTEGER PRIMARY KEY,
    dept_name TEXT
);</code></pre>
                <h4 className="h5">employees Table (with foreign key):</h4>
                <pre><code>CREATE TABLE employees (
    emp_id INTEGER PRIMARY KEY,
    name TEXT,
    dept_id INTEGER,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>SQLite Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default SqliteNotes;