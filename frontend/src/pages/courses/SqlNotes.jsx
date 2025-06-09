import React from 'react';

function SqlNotes() {
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
          .example-card {
            background-color: #e9ecef;
            border-left: 4px solid #6c757d;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 4px;
          }
        `}
      </style>

      <header className="bg-success text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-database"></i> SQL Notes</h1>
          <p className="lead">Your Comprehensive Guide to Structured Query Language</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> What is SQL?</a>
              <a className="nav-link" href="#rdbms"><i className="bi bi-server"></i> RDBMS</a>
              <a className="nav-link" href="#mysql"><i className="bi bi-database"></i> MySQL</a>
              <a className="nav-link" href="#datatypes"><i className="bi bi-card-list"></i> Data Types</a>
              <a className="nav-link" href="#commands"><i className="bi bi-terminal"></i> SQL Commands</a>
              <a className="nav-link" href="#ddl"><i className="bi bi-file-earmark-code"></i> DDL Commands</a>
              <a className="nav-link" href="#dml"><i className="bi bi-pencil-square"></i> DML Commands</a>
              <a className="nav-link" href="#dql"><i className="bi bi-search"></i> DQL Commands</a>
              <a className="nav-link" href="#dcl"><i className="bi bi-shield-lock"></i> DCL Commands</a>
              <a className="nav-link" href="#tcl"><i className="bi bi-arrow-repeat"></i> TCL Commands</a>
              <a className="nav-link" href="#constraints"><i className="bi bi-sliders"></i> Constraints</a>
              <a className="nav-link" href="#joins"><i className="bi bi-arrow-left-right"></i> Joins</a>
              <a className="nav-link" href="#functions"><i className="bi bi-calculator"></i> Functions</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is SQL?</h2>
              <div className="property-card">
                <ul>
                  <li>SQL stands for <strong>Structured Query Language</strong></li>
                  <li>SQL lets you access and manipulate databases</li>
                  <li>SQL became a standard of the American National Standards Institute (ANSI) in 1986</li>
                  <li>SQL became a standard of the International Organization for Standardization (ISO) in 1987</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-check"></i> Uses of SQL:</h3>
                <ul>
                  <li>Execute queries against a database</li>
                  <li>Retrieve/read data from a database</li>
                  <li>Insert records in a database</li>
                  <li>Update records in a database</li>
                  <li>Delete records from a database</li>
                  <li>Create new databases</li>
                  <li>Create new tables in a database</li>
                </ul>
              </div>
            </section>

            <section id="rdbms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-server"></i> RDBMS</h2>
              <div className="property-card">
                <ul>
                  <li>RDBMS stands for <strong>Relational Database Management System</strong></li>
                  <li>RDBMS is the basis for SQL, and for all modern database systems</li>
                  <li>Examples include MS SQL Server, IBM DB2, Oracle, MySQL, and Microsoft Access</li>
                </ul>
              </div>
            </section>

            <section id="mysql" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> What is MySQL?</h2>
              <div className="property-card">
                <ul>
                  <li>MySQL is a relational database management system</li>
                  <li>MySQL is open-source</li>
                  <li>MySQL is free</li>
                  <li>MySQL is ideal for both small and large applications</li>
                  <li>MySQL is very fast, reliable, scalable, and easy to use</li>
                  <li>MySQL is cross-platform</li>
                  <li>MySQL is compliant with the ANSI SQL standard</li>
                  <li>MySQL was first released in 1995</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-download"></i> Environmental Setup:</h3>
                <ol>
                  <li>Download MySQL installer</li>
                  <li>Install MySQL on your system</li>
                  <li>Configure MySQL server</li>
                  <li>Set up MySQL workbench or command line interface</li>
                </ol>
              </div>
            </section>

            <section id="datatypes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-card-list"></i> SQL Data Types</h2>
              
              <div className="row">
                <div className="col-md-6">
                  <div className="property-card">
                    <h3 className="h4"><i className="bi bi-123"></i> Numeric Types</h3>
                    <ul>
                      <li><strong>INT</strong> - size (4 bytes=32bits), range: -2147483648 to 2147483647</li>
                      <li><strong>TINYINT</strong> - size (2 bytes=16 bits), range: -32768 to 32767</li>
                      <li><strong>BIGINT</strong> - size (8 bytes=64bits), range: -9.22337204E18 to 9.22337204E18</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h3 className="h4"><i className="bi bi-text-left"></i> Character/String Types</h3>
                    <ul>
                      <li><strong>CHAR(size)</strong> - size (1 byte), range: -128 to 127 (but typically 0 to 255 for characters)</li>
                      <li><strong>VARCHAR(size)</strong> - size (2 bytes), range: 0-65535 characters</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="commands" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-terminal"></i> Types of Commands in SQL</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code"></i> DDL - Data Definition Language</h3>
                <ul>
                  <li><strong>CREATE</strong> - creates database objects (databases, tables, etc.)</li>
                  <li><strong>ALTER</strong> - modifies database objects</li>
                  <li><strong>DROP</strong> - deletes database objects</li>
                  <li><strong>TRUNCATE</strong> - removes all records from a table</li>
                  <li><strong>USE</strong> - selects a database to work with</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-pencil-square"></i> DML - Data Manipulation Language</h3>
                <ul>
                  <li><strong>INSERT</strong> - adds new records to a table</li>
                  <li><strong>UPDATE</strong> - modifies existing records in a table</li>
                  <li><strong>DELETE</strong> - removes records from a table</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-search"></i> DQL - Data Query Language</h3>
                <ul>
                  <li><strong>SELECT</strong> - reads/retrieves data from a database</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-shield-lock"></i> DCL - Data Control Language</h3>
                <ul>
                  <li><strong>GRANT</strong> - gives permission to users</li>
                  <li><strong>REVOKE</strong> - takes back permission from users</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-repeat"></i> TCL - Transaction Control Language</h3>
                <ul>
                  <li><strong>COMMIT</strong> - saves transaction changes permanently</li>
                  <li><strong>ROLLBACK</strong> - restores database to last committed state</li>
                </ul>
              </div>
            </section>

            <section id="ddl" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> DDL Commands</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-database-add"></i> Create Database</h3>
                <pre><code>{`CREATE DATABASE database_name;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`CREATE DATABASE java;`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-database-check"></i> Use Database</h3>
                <pre><code>{`USE database_name;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`USE java;`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-table"></i> Create Table</h3>
                <pre><code>{`CREATE TABLE table_name(
    column_name datatype,
    column_name datatype,
    column_name datatype
);`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`CREATE TABLE students(
    Sno int,
    Name varchar(200),
    Phone bigint
);`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-pencil"></i> Alter Table</h3>
                <h4 className="h5">Add Column:</h4>
                <pre><code>{`ALTER TABLE table_name ADD COLUMN column_name datatype;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`ALTER TABLE students ADD COLUMN dept varchar(100);`}</code></pre>
                </div>
                
                <h4 className="h5 mt-3">Change Column:</h4>
                <pre><code>{`ALTER TABLE table_name CHANGE COLUMN old_column_name new_column_name datatype;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`ALTER TABLE students CHANGE COLUMN dept department varchar(200);`}</code></pre>
                </div>
                
                <h4 className="h5 mt-3">Drop Column:</h4>
                <pre><code>{`ALTER TABLE table_name DROP column_name;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`ALTER TABLE students DROP department;`}</code></pre>
                </div>
                
                <h4 className="h5 mt-3">Rename Table:</h4>
                <pre><code>{`ALTER TABLE table_name RENAME TO new_table_name;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`ALTER TABLE students RENAME TO student_details;`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-trash"></i> Drop Table</h3>
                <pre><code>{`DROP TABLE table_name;`}</code></pre>
                <p>Used to delete the table and all its data</p>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`DROP TABLE student_details;`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-eraser"></i> Truncate Table</h3>
                <pre><code>{`TRUNCATE TABLE table_name;`}</code></pre>
                <p>Used to delete all the data in the table while keeping the table structure</p>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`TRUNCATE TABLE student_details;`}</code></pre>
                </div>
              </div>
            </section>

            <section id="dml" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-pencil-square"></i> DML Commands</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-plus-circle"></i> Insert Data</h3>
                <pre><code>{`INSERT INTO table_name VALUES(values);`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Examples:</h4>
                  <pre><code>{`INSERT INTO student_details VALUES(1,"xyz",9876543210);
INSERT INTO student_details VALUES(2,"abc",9876543210);
INSERT INTO student_details VALUES(3,"def",9876543210);`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-repeat"></i> Update Data</h3>
                <h4 className="h5">Update all rows:</h4>
                <pre><code>{`UPDATE table_name SET column_name=new_value;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`UPDATE student_details SET name="abcd";`}</code></pre>
                </div>
                
                <h4 className="h5 mt-3">Update specific row:</h4>
                <pre><code>{`UPDATE table_name SET column_name=new_value WHERE column_name=value;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`UPDATE student_details SET name="Hathvik" WHERE Sno=2;`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-dash-circle"></i> Delete Data</h3>
                <h4 className="h5">Delete all rows:</h4>
                <pre><code>{`DELETE FROM table_name;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`DELETE FROM student_details;`}</code></pre>
                </div>
                
                <h4 className="h5 mt-3">Delete specific row:</h4>
                <pre><code>{`DELETE FROM table_name WHERE column_name=value;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`DELETE FROM student_details WHERE Sno=2;`}</code></pre>
                </div>
              </div>
            </section>

            <section id="dql" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-search"></i> DQL Commands</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-card-text"></i> Basic SELECT</h3>
                <h4 className="h5">Select all columns:</h4>
                <pre><code>{`SELECT * FROM table_name;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`SELECT * FROM student_details;`}</code></pre>
                </div>
                
                <h4 className="h5 mt-3">Select specific columns:</h4>
                <pre><code>{`SELECT column_names FROM table_name;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`SELECT Name,Phone FROM student_details;`}</code></pre>
                </div>
                
                <h4 className="h5 mt-3">Select with condition:</h4>
                <pre><code>{`SELECT column_name FROM table_name WHERE condition;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`SELECT Phone FROM student_details WHERE Name="abc";`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-filter"></i> Advanced SELECT</h3>
                <h4 className="h5">SELECT TOP (LIMIT):</h4>
                <pre><code>{`SELECT column_name(s) FROM table_name WHERE condition LIMIT number;`}</code></pre>
                
                <h4 className="h5 mt-3">SELECT IN:</h4>
                <pre><code>{`SELECT column_name(s) FROM table_name WHERE column_name IN (value1, value2, ...);`}</code></pre>
                
                <h4 className="h5 mt-3">SELECT DISTINCT:</h4>
                <pre><code>{`SELECT DISTINCT column1, column2, ... FROM table_name;`}</code></pre>
              </div>
            </section>

            <section id="dcl" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> DCL Commands</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check-circle"></i> GRANT</h3>
                <p>Gives specific privileges to database users</p>
                <pre><code>{`GRANT privilege_name ON object_name TO user_name;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`GRANT SELECT ON employees TO user1;`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-x-circle"></i> REVOKE</h3>
                <p>Removes specific privileges from database users</p>
                <pre><code>{`REVOKE privilege_name ON object_name FROM user_name;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`REVOKE SELECT ON employees FROM user1;`}</code></pre>
                </div>
              </div>
            </section>

            <section id="tcl" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> TCL Commands</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-save"></i> COMMIT</h3>
                <p>Saves all transactions to the database</p>
                <pre><code>{`COMMIT;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`UPDATE accounts SET balance = balance - 1000 WHERE account_no = 123;
COMMIT;`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-counterclockwise"></i> ROLLBACK</h3>
                <p>Restores the database to last committed state</p>
                <pre><code>{`ROLLBACK;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`UPDATE accounts SET balance = balance - 1000 WHERE account_no = 123;
ROLLBACK;`}</code></pre>
                </div>
              </div>
            </section>

            <section id="constraints" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-sliders"></i> SQL Constraints</h2>
              
              <div className="property-card">
                <p>SQL constraints are used to specify rules for the data in a table.</p>
                <ul>
                  <li><strong>NOT NULL</strong> - column cannot have a NULL value</li>
                  <li><strong>UNIQUE</strong> - all values in a column are different</li>
                  <li><strong>PRIMARY KEY</strong> - combination of NOT NULL and UNIQUE, uniquely identifies each row</li>
                  <li><strong>FOREIGN KEY</strong> - used to link tables together</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-key"></i> Syntax with Constraints</h3>
                <pre><code>{`CREATE TABLE table_name(
    column_name datatype constraints,
    column_name datatype constraints,
    column_name datatype constraints
);`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`CREATE TABLE employees(
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    dept_id INT FOREIGN KEY REFERENCES departments(dept_id)
);`}</code></pre>
                </div>
              </div>
            </section>

            <section id="joins" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-left-right"></i> SQL Joins</h2>
              
              <div className="property-card">
                <p>A JOIN clause is used to combine rows from two or more tables, based on a related column between them.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left-right"></i> 1. Inner Join</h3>
                <p>The INNER JOIN keyword selects records that have matching values in both tables.</p>
                <pre><code>{`SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.Column_name = table2.Column_name;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`SELECT orders.order_id, customers.customer_name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.customer_id;`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left"></i> 2. Left Join</h3>
                <p>The LEFT JOIN keyword returns all records from the left table (table1), and the matching records (if any) from the right table (table2).</p>
                <pre><code>{`SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.Column_name = table2.Column_name;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`SELECT customers.customer_name, orders.order_id
FROM customers
LEFT JOIN orders ON customers.customer_id = orders.customer_id;`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right"></i> 3. Right Join</h3>
                <p>The RIGHT JOIN keyword returns all records from the right table (table2), and the matching records (if any) from the left table (table1).</p>
                <pre><code>{`SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.Column_name = table2.Column_name;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`SELECT orders.order_id, employees.employee_name
FROM orders
RIGHT JOIN employees ON orders.employee_id = employees.employee_id;`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrows-angle-expand"></i> 4. Cross Join</h3>
                <p>The CROSS JOIN keyword returns all records from both tables (table1 and table2).</p>
                <pre><code>{`SELECT column_name(s)
FROM table1
CROSS JOIN table2;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`SELECT products.product_name, suppliers.supplier_name
FROM products
CROSS JOIN suppliers;`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-link"></i> Foreign Key Example</h3>
                <pre><code>{`create table customers(
    CId int primary key,
    Name varchar(200) not null,
    Phone bigint unique
);
insert into customers values(1,"Dhoni",9876543201);
insert into customers values(2,"Virat",8876543201);

create table orders(
    Old int primary key,
    Status varchar(200) not null,
    Cld int, foreign key(Cld) references customers(Cld)
);

insert into orders values(100,"Placed",2);
insert into orders values(200,"Not placed",1);

select * from orders;`}</code></pre>
              </div>
            </section>

            <section id="functions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> SQL Functions</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-graph-up"></i> Aggregate Functions</h3>
                <p>Used to perform calculations on data</p>
                <ul>
                  <li><strong>SUM()</strong> - returns the sum of a numeric column</li>
                  <li><strong>COUNT()</strong> - returns the number of rows</li>
                  <li><strong>AVG()</strong> - returns the average value of a numeric column</li>
                  <li><strong>MAX()</strong> - returns the largest value</li>
                  <li><strong>MIN()</strong> - returns the smallest value</li>
                </ul>
                <div className="example-card">
                  <h4 className="h5">Examples:</h4>
                  <pre><code>{`SELECT AVG(marks) from student_details;
SELECT AVG(marks) as Average from student_details;
SELECT MIN(marks) from student_details;
SELECT MAX(marks) from student_details;
SELECT COUNT(name) from student_details;
SELECT SUM(marks) from student_details;`}</code></pre>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-sort-alpha-down"></i> Order By & Group By</h3>
                <h4 className="h5">Order By:</h4>
                <pre><code>{`SELECT columns FROM table_name ORDER BY column condition;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Examples:</h4>
                  <pre><code>{`SELECT * FROM student_details ORDER BY Name asc;
SELECT * FROM student_details ORDER BY Name desc;`}</code></pre>
                </div>
                
                <h4 className="h5 mt-3">Group By:</h4>
                <pre><code>{`SELECT AGGREGATE_FUNCTION(column_name), columns 
FROM table_name 
GROUP BY column_name;`}</code></pre>
                <div className="example-card">
                  <h4 className="h5">Example:</h4>
                  <pre><code>{`SELECT COUNT(Name), dept FROM student_details GROUP BY dept;`}</code></pre>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>SQL Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default SqlNotes;