import React from 'react';
import single from '../../assets/Single-Inheritance.jpg';
import multilevel from '../../assets/Multilevel-Inheritance.jpg';
import hierarchical from '../../assets/Hierarchical-Inheritance-in-Java.jpg';
import multiple from '../../assets/multiple_inheritance.png';
import hybrid from '../../assets/Hybrid-Inheritance.jpg';

function PhpNotes() {
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

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-php"></i> PHP NOTES</h1>
          <p className="lead">Your Comprehensive Guide to PHP Programming</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction to PHP</a>
              <a className="nav-link" href="#basics"><i className="bi bi-code-square"></i> Basic Syntax</a>
              <a className="nav-link" href="#variables"><i className="bi bi-tag"></i> Variables</a>
              <a className="nav-link" href="#operators"><i className="bi bi-calculator"></i> Operators</a>
              <a className="nav-link" href="#conditionals"><i className="bi bi-diagram-2"></i> Conditionals</a>
              <a className="nav-link" href="#loops"><i className="bi bi-arrow-repeat"></i> Loops</a>
              <a className="nav-link" href="#functions"><i className="bi bi-box-arrow-in-right"></i> Functions</a>
              <a className="nav-link" href="#arrays"><i className="bi bi-collection"></i> Arrays</a>
              <a className="nav-link" href="#strings"><i className="bi bi-text-left"></i> Strings</a>
              <a className="nav-link" href="#superglobals"><i className="bi bi-globe"></i> Superglobals</a>
              <a className="nav-link" href="#forms"><i className="bi bi-input-cursor-text"></i> Form Handling</a>
              <a className="nav-link" href="#files"><i className="bi bi-file-earmark"></i> File Handling</a>
              <a className="nav-link" href="#sessions"><i className="bi bi-person-check"></i> Sessions & Cookies</a>
              <a className="nav-link" href="#mysql"><i className="bi bi-database"></i> PHP with MySQL</a>
              <a className="nav-link" href="#oop"><i className="bi bi-boxes"></i> OOP in PHP</a>
              <a className="nav-link" href="#json"><i className="bi bi-filetype-json"></i> PHP & JSON</a>
              <a className="nav-link" href="#security"><i className="bi bi-shield-lock"></i> Security</a>
              <a className="nav-link" href="#frameworks"><i className="bi bi-stack"></i> PHP Frameworks</a>
              <a className="nav-link" href="#projects"><i className="bi bi-kanban"></i> Project Ideas</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to PHP</h2>
              
              <div className="property-card">
                <h3 className="h4">What is PHP?</h3>
                <ul>
                  <li><strong>PHP stands for Hypertext Preprocessor</strong> (recursive acronym)</li>
                  <li>It is an <strong>open-source, server-side scripting language</strong> used mainly for developing dynamic and interactive web pages</li>
                  <li>PHP code is executed on the <strong>server</strong>, and the result is returned to the browser as plain HTML</li>
                  <li>Originally created by Rasmus Lerdorf in 1994</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Features of PHP</h3>
                <ul>
                  <li>Easy to learn and use</li>
                  <li>Open-source (Free to use)</li>
                  <li>Platform-independent (Works on Windows, Linux, macOS)</li>
                  <li>Integrates well with HTML and databases (especially MySQL)</li>
                  <li>Supports object-oriented programming</li>
                  <li>Large community and extensive documentation</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">PHP vs Other Languages</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>PHP</th>
                      <th>JavaScript</th>
                      <th>Python</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Execution</td>
                      <td>Server-side</td>
                      <td>Client-side</td>
                      <td>Both</td>
                    </tr>
                    <tr>
                      <td>Syntax</td>
                      <td>C-style</td>
                      <td>C-style</td>
                      <td>Easy & clean</td>
                    </tr>
                    <tr>
                      <td>Use Case</td>
                      <td>Web backend</td>
                      <td>Web frontend</td>
                      <td>General-purpose</td>
                    </tr>
                    <tr>
                      <td>Speed</td>
                      <td>Fast for web</td>
                      <td>Fast for UI</td>
                      <td>Slower than PHP in web apps</td>
                    </tr>
                    <tr>
                      <td>Database</td>
                      <td>Excellent with MySQL</td>
                      <td>Limited</td>
                      <td>Good with SQLite, MySQL</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">What You Can Do With PHP</h3>
                <ul>
                  <li>Create dynamic page content</li>
                  <li>Collect form data</li>
                  <li>Send and receive cookies</li>
                  <li>Work with databases</li>
                  <li>Build sessions and login systems</li>
                  <li>Develop APIs and backend logic</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Where PHP is Used?</h3>
                <ul>
                  <li>Content Management Systems (WordPress, Joomla)</li>
                  <li>E-commerce Platforms (Magento, OpenCart)</li>
                  <li>Web Applications (Booking Systems, Portals)</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Basic PHP Example</h3>
                <pre><code>{`<?php
  echo "Welcome to PHP!";
?>`}</code></pre>
                <p><strong>Output:</strong> Welcome to PHP!</p>
                <p><strong>Note:</strong> <code>echo</code> is used to print output in PHP.</p>
              </div>
            </section>

            <section id="basics" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Basic Syntax in PHP</h2>
              
              <div className="property-card">
                <h3 className="h4">PHP Tags</h3>
                <p>PHP code is written inside special tags:</p>
                <pre><code>{`<?php
  // PHP code here
?>`}</code></pre>
                <p>Everything inside <code>{`<?php ... ?>`}</code> will be treated as PHP code.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">Comments in PHP</h3>
                <p>Single-line comment:</p>
                <pre><code>{`// This is a single-line comment
# This is also a single-line comment`}</code></pre>
                <p>Multi-line comment:</p>
                <pre><code>{`/*
This is a
multi-line comment
*/`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Echo vs Print</h3>
                <p>Both <code>echo</code> and <code>print</code> are used to output data.</p>
                <pre><code>{`<?php
  echo "Hello from echo!";
  print "Hello from print!";
?>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>echo</th>
                      <th>print</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Speed</td>
                      <td>Slightly faster</td>
                      <td>Slightly slower</td>
                    </tr>
                    <tr>
                      <td>Return Value</td>
                      <td>No</td>
                      <td>Returns 1</td>
                    </tr>
                    <tr>
                      <td>Usage</td>
                      <td>Can take multiple parameters</td>
                      <td>Only one argument</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="variables" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-tag"></i> Variables in PHP</h2>
              
              <div className="property-card">
                <h3 className="h4">Variable Basics</h3>
                <ul>
                  <li>A variable is a container used to store values</li>
                  <li>A variable starts with <code>$</code></li>
                  <li>Case-sensitive</li>
                  <li>No data type declaration needed (loosely typed)</li>
                </ul>
                <pre><code>{`<?php
  $name = "Mugil";
  $age = 21;
  echo "Name: $name, Age: $age";
?>`}</code></pre>
                <p><strong>Output:</strong> Name: Mugil, Age: 21</p>
              </div>

              <div className="property-card">
                <h3 className="h4">Data Types in PHP</h3>
                <ol>
                  <li><strong>String</strong> - Sequence of characters</li>
                  <li><strong>Integer</strong> - Whole numbers</li>
                  <li><strong>Float (Double)</strong> - Decimal numbers</li>
                  <li><strong>Boolean</strong> - True or false</li>
                  <li><strong>Array</strong> - Collection of values</li>
                  <li><strong>Object</strong> - Instance of a class</li>
                  <li><strong>NULL</strong> - No value</li>
                </ol>
                <pre><code>{`<?php
  $text = "Hello";      // String
  $number = 10;         // Integer
  $price = 99.99;       // Float
  $isTrue = true;       // Boolean
  $names = array("A", "B"); // Array
?>`}</code></pre>
              </div>
            </section>

            <section id="operators" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> PHP Operators</h2>
              
              <div className="property-card">
                <h3 className="h4">A. Arithmetic Operators</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>+</td>
                      <td>Addition</td>
                      <td>$a + $b</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>Subtraction</td>
                      <td>$a - $b</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>*</td>
                      <td>Multiplication</td>
                      <td>$a * $b</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>/</td>
                      <td>Division</td>
                      <td>$a / $b</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>%</td>
                      <td>Modulus (Remainder)</td>
                      <td>$a % $b</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>**</td>
                      <td>Exponentiation</td>
                      <td>$a ** $b</td>
                      <td>100000</td>
                    </tr>
                  </tbody>
                </table>
                <pre><code>{`<?php
  $a = 10;
  $b = 5;
  echo $a + $b; // 15
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">B. Assignment Operators</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Same As</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>=</td>
                      <td>Assign</td>
                      <td>$x = 5</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>+=</td>
                      <td>Add and assign</td>
                      <td>$x += 3</td>
                      <td>$x = $x + 3</td>
                    </tr>
                    <tr>
                      <td>-=</td>
                      <td>Subtract and assign</td>
                      <td>$x -= 2</td>
                      <td>$x = $x - 2</td>
                    </tr>
                    <tr>
                      <td>*=</td>
                      <td>Multiply and assign</td>
                      <td>$x *= 4</td>
                      <td>$x = $x * 4</td>
                    </tr>
                    <tr>
                      <td>/=</td>
                      <td>Divide and assign</td>
                      <td>$x /= 5</td>
                      <td>$x = $x / 5</td>
                    </tr>
                    <tr>
                      <td>%=</td>
                      <td>Modulus and assign</td>
                      <td>$x %= 3</td>
                      <td>$x = $x % 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">C. Comparison Operators</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>==</td>
                      <td>Equal</td>
                      <td>$a == $b</td>
                      <td>true/false</td>
                    </tr>
                    <tr>
                      <td>===</td>
                      <td>Identical (value + type)</td>
                      <td>$a === $b</td>
                      <td>true/false</td>
                    </tr>
                    <tr>
                      <td>!=</td>
                      <td>Not equal</td>
                      <td>$a != $b</td>
                      <td>true/false</td>
                    </tr>
                    <tr>
                      <td>&lt;&gt;</td>
                      <td>Not equal (same as !=)</td>
                      <td>$a &lt;&gt; $b</td>
                      <td>true/false</td>
                    </tr>
                    <tr>
                      <td>!==</td>
                      <td>Not identical</td>
                      <td>$a !== $b</td>
                      <td>true/false</td>
                    </tr>
                    <tr>
                      <td>&gt;</td>
                      <td>Greater than</td>
                      <td>$a &gt; $b</td>
                      <td>true/false</td>
                    </tr>
                    <tr>
                      <td>&lt;</td>
                      <td>Less than</td>
                      <td>$a &lt; $b</td>
                      <td>true/false</td>
                    </tr>
                    <tr>
                      <td>&gt;=</td>
                      <td>Greater than or equal to</td>
                      <td>$a &gt;= $b</td>
                      <td>true/false</td>
                    </tr>
                    <tr>
                      <td>&lt;=</td>
                      <td>Less than or equal to</td>
                      <td>$a &lt;= $b</td>
                      <td>true/false</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">D. Logical Operators</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>and</td>
                      <td>True if both true</td>
                      <td>$a and $b</td>
                      <td>true/false</td>
                    </tr>
                    <tr>
                      <td>or</td>
                      <td>True if either true</td>
                      <td>$a or $b</td>
                      <td>true/false</td>
                    </tr>
                    <tr>
                      <td>&&</td>
                      <td>AND (both true)</td>
                      <td>$a && $b</td>
                      <td>true/false</td>
                    </tr>
                    <tr>
                      <td>||</td>
                      <td>OR (either true)</td>
                      <td>$a || $b</td>
                      <td>true/false</td>
                    </tr>
                    <tr>
                      <td>!</td>
                      <td>NOT (inverse)</td>
                      <td>!$a</td>
                      <td>true/false</td>
                    </tr>
                    <tr>
                      <td>xor</td>
                      <td>True if one is true but not both</td>
                      <td>$a xor $b</td>
                      <td>true/false</td>
                    </tr>
                  </tbody>
                </table>
                <pre><code>{`<?php
  $x = 10;
  $y = 20;
  if ($x < 15 && $y > 10) {
    echo "Condition is true";
  }
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">E. Bitwise Operators</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Result (Binary)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&</td>
                      <td>AND</td>
                      <td>$a & $b</td>
                      <td>0000 0000</td>
                    </tr>
                    <tr>
                      <td>|</td>
                      <td>OR</td>
                      <td>$a | $b</td>
                      <td>1111 1111</td>
                    </tr>
                    <tr>
                      <td>^</td>
                      <td>XOR</td>
                      <td>$a ^ $b</td>
                      <td>1111 1111</td>
                    </tr>
                    <tr>
                      <td>~</td>
                      <td>NOT</td>
                      <td>~$a</td>
                      <td>Bitwise NOT</td>
                    </tr>
                    <tr>
                      <td>&lt;&lt;</td>
                      <td>Left Shift</td>
                      <td>$a &lt;&lt; 2</td>
                      <td>Shifts bits</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt;</td>
                      <td>Right Shift</td>
                      <td>$a &gt;&gt; 2</td>
                      <td>Shifts bits</td>
                    </tr>
                  </tbody>
                </table>
                <pre><code>{`<?php
  $a = 5; // 0101
  $b = 3; // 0011
  echo $a & $b; // Output: 1
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">F. Ternary Operator</h3>
                <p><strong>Syntax:</strong> <code>(condition) ? value_if_true : value_if_false;</code></p>
                <pre><code>{`<?php
  $age = 18;
  echo ($age >= 18) ? "Eligible" : "Not Eligible";
?>`}</code></pre>
                <p><strong>Output:</strong> Eligible</p>
              </div>
            </section>

            <section id="conditionals" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-2"></i> Conditional Statements in PHP</h2>
              
              <div className="property-card">
                <h3 className="h4">1. if Statement</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`if (condition) {
  // code to execute if condition is true
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  $age = 20;
  if ($age >= 18) {
    echo "You are eligible to vote.";
  }
?>`}</code></pre>
                <p><strong>Output:</strong> You are eligible to vote.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">2. if...else Statement</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`if (condition) {
  // true block
} else {
  // false block
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  $marks = 45;
  if ($marks >= 50) {
    echo "You passed the exam.";
  } else {
    echo "You failed the exam.";
  }
?>`}</code></pre>
                <p><strong>Output:</strong> You failed the exam.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">3. if...elseif...else Statement</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`if (condition1) {
  // code if condition1 is true
} elseif (condition2) {
  // code if condition2 is true
} else {
  // code if none are true
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  $score = 85;
  if ($score >= 90) {
    echo "Grade A";
  } elseif ($score >= 75) {
    echo "Grade B";
  } elseif ($score >= 60) {
    echo "Grade C";
  } else {
    echo "Grade D";
  }
?>`}</code></pre>
                <p><strong>Output:</strong> Grade B</p>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Nested if Statement</h3>
                <p>An if inside another if.</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`if (condition1) {
  if (condition2) {
    // code block
  }
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  $age = 22;
  $citizen = true;
  if ($age >= 18) {
    if ($citizen == true) {
      echo "You can vote.";
    }
  }
?>`}</code></pre>
                <p><strong>Output:</strong> You can vote.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">5. switch Statement</h3>
                <p>Used to compare one variable against multiple values.</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`switch (variable) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code if no case matches
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  $day = "Tuesday";
  switch ($day) {
    case "Monday":
      echo "Start of the week";
      break;
    case "Tuesday":
      echo "Second day of the week";
      break;
    case "Friday":
      echo "Weekend coming!";
      break;
    default:
      echo "Regular day";
  }
?>`}</code></pre>
                <p><strong>Output:</strong> Second day of the week</p>
              </div>
            </section>

            <section id="loops" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> Loops in PHP</h2>
              
              <div className="property-card">
                <h3 className="h4">1. while Loop</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`while (condition) {
  // code block
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  $x = 1;
  while ($x <= 5) {
    echo "Number: $x <br>";
    $x++;
  }
?>`}</code></pre>
                <p><strong>Output:</strong></p>
                <pre>Number: 1
Number: 2
Number: 3
Number: 4
Number: 5</pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. do...while Loop</h3>
                <p>Executes the block at least once, even if the condition is false.</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`do {
  // code block
} while (condition);`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  $y = 1;
  do {
    echo "Value: $y <br>";
    $y++;
  } while ($y <= 3);
?>`}</code></pre>
                <p><strong>Output:</strong></p>
                <pre>Value: 1
Value: 2
Value: 3</pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. for Loop</h3>
                <p>Best when the number of iterations is known.</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`for (init; condition; increment) {
  // code block
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  for ($i = 1; $i <= 5; $i++) {
    echo "Count: $i <br>";
  }
?>`}</code></pre>
                <p><strong>Output:</strong></p>
                <pre>Count: 1
Count: 2
Count: 3
Count: 4
Count: 5</pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. foreach Loop (for arrays)</h3>
                <p>Special loop for iterating over arrays.</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`foreach ($array as $value) {
  // code block
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  $fruits = array("Apple", "Banana", "Mango");
  foreach ($fruits as $fruit) {
    echo "$fruit <br>";
  }
?>`}</code></pre>
                <p><strong>Output:</strong></p>
                <pre>Apple
Banana
Mango</pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Break and Continue</h3>
                <ul>
                  <li><code>break</code>: Exits the loop</li>
                  <li><code>continue</code>: Skips current iteration</li>
                </ul>
                <pre><code>{`<?php
  for ($i = 1; $i <= 5; $i++) {
    if ($i == 3) continue;
    echo "$i";
  }
?>`}</code></pre>
                <p><strong>Output:</strong> 1245</p>
              </div>
            </section>

            <section id="functions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box-arrow-in-right"></i> Functions in PHP</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Creating a Function</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`function functionName() {
  // code to execute
}`}</code></pre>
                <p><strong>Calling a function:</strong> <code>functionName();</code></p>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  function greet() {
    echo "Hello, welcome to PHP!<br>";
  }
  greet(); // calling the function
?>`}</code></pre>
                <p><strong>Output:</strong> Hello, welcome to PHP!</p>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Function with Parameters</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`function functionName($param1, $param2) {
  // use parameters
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  function add($a, $b) {
    $sum = $a + $b;
    echo "Sum: $sum<br>";
  }
  add(10, 20);
?>`}</code></pre>
                <p><strong>Output:</strong> Sum: 30</p>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Function with Return Value</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`function functionName() {
  return value;
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  function multiply($x, $y) {
    return $x * $y;
  }
  $result = multiply(5, 4);
  echo "Multiplication: $result";
?>`}</code></pre>
                <p><strong>Output:</strong> Multiplication: 20</p>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Default Parameter Value</h3>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  function greetUser($name = "Guest") {
    echo "Hello, $name!<br>";
  }
  greetUser("Mugil");
  greetUser();
?>`}</code></pre>
                <p><strong>Output:</strong></p>
                <pre>Hello, Mugil!
Hello, Guest!</pre>
              </div>

              <div className="property-card">
                <h3 className="h4">5. Built-in Functions Examples</h3>
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
                      <td>strlen()</td>
                      <td>Get length of string</td>
                      <td>strlen("PHP") → 3</td>
                    </tr>
                    <tr>
                      <td>strtoupper()</td>
                      <td>Convert to uppercase</td>
                      <td>strtoupper("php") → "PHP"</td>
                    </tr>
                    <tr>
                      <td>array_sum()</td>
                      <td>Sum of array values</td>
                      <td>array_sum([1,2,3]) → 6</td>
                    </tr>
                    <tr>
                      <td>date()</td>
                      <td>Get current date</td>
                      <td>date("Y-m-d")</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="arrays" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-collection"></i> Arrays in PHP</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Indexed Arrays</h3>
                <p>Stores elements with numeric keys (0,1,2...)</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`$fruits = array("Apple", "Banana", "Mango");`}</code></pre>
                <p><strong>Access Example:</strong></p>
                <pre><code>{`echo $fruits[1]; // Output: Banana`}</code></pre>
                <p><strong>Loop through indexed array:</strong></p>
                <pre><code>{`foreach ($fruits as $fruit) {
  echo "$fruit <br>";
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Associative Arrays</h3>
                <p>Uses named keys (like a dictionary)</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`$marks = array("Mugil" => 90, "Arun" => 85);`}</code></pre>
                <p><strong>Access Example:</strong></p>
                <pre><code>{`echo $marks["Mugil"]; // Output: 90`}</code></pre>
                <p><strong>Loop through associative array:</strong></p>
                <pre><code>{`foreach ($marks as $name => $score) {
  echo "$name got $score marks<br>";
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Multidimensional Arrays</h3>
                <p>An array inside another array</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`$students = array(
  array("Mugil", 90, "Pass"),
  array("Arun", 45, "Fail")
);`}</code></pre>
                <p><strong>Access Example:</strong></p>
                <pre><code>{`echo $students[0][0]; // Output: Mugil
echo $students[1][2]; // Output: Fail`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Array Functions</h3>
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
                      <td>count()</td>
                      <td>Count elements</td>
                      <td>count($fruits)</td>
                    </tr>
                    <tr>
                      <td>array_push()</td>
                      <td>Add to end</td>
                      <td>array_push($fruits, "Grapes")</td>
                    </tr>
                    <tr>
                      <td>array_pop()</td>
                      <td>Remove last item</td>
                      <td>array_pop($fruits)</td>
                    </tr>
                    <tr>
                      <td>array_merge()</td>
                      <td>Merge two arrays</td>
                      <td>array_merge($a, $b)</td>
                    </tr>
                    <tr>
                      <td>in_array()</td>
                      <td>Check if value exists</td>
                      <td>in_array("Apple", $fruits)</td>
                    </tr>
                    <tr>
                      <td>array_keys()</td>
                      <td>Get all keys</td>
                      <td>array_keys($marks)</td>
                    </tr>
                    <tr>
                      <td>array_values()</td>
                      <td>Get all values</td>
                      <td>array_values($marks)</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  $colors = array("Red", "Green");
  array_push($colors, "Blue");
  print_r($colors);
?>`}</code></pre>
                <p><strong>Output:</strong></p>
                <pre>Array (
  {`[0] => Red`}
  {`[1] => Green`}
  {`[2] => Blue`}
)</pre>
              </div>
            </section>

            <section id="strings" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-text-left"></i> Strings in PHP</h2>
              
              <div className="property-card">
                <h3 className="h4">String Basics</h3>
                <p>String is a collection of characters stored within quotes.</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`$strName = "Value";`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`<?php
  $str = "Mugilvannan";
  echo $str;
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">String Functions in PHP</h3>
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
                      <td>strlen()</td>
                      <td>Get length of a string</td>
                      <td>strlen("Mugilvannan") → 11</td>
                    </tr>
                    <tr>
                      <td>strtoupper() / strtolower()</td>
                      <td>Convert case</td>
                      <td>strtoupper("hello") → "HELLO"<br/>strtolower("HELLO") → "hello"</td>
                    </tr>
                    <tr>
                      <td>ucfirst() / ucwords()</td>
                      <td>Capitalize</td>
                      <td>ucfirst("php language") → "Php language"<br/>ucwords("php full stack") → "Php Full Stack"</td>
                    </tr>
                    <tr>
                      <td>strrev()</td>
                      <td>Reverse a string</td>
                      <td>strrev("Mugil") → "liguM"</td>
                    </tr>
                    <tr>
                      <td>strpos()</td>
                      <td>Find position of a substring</td>
                      <td>strpos("Hello World", "World") → 6</td>
                    </tr>
                    <tr>
                      <td>str_replace()</td>
                      <td>Replace text</td>
                      <td>str_replace("PHP", "Python", "PHP is cool") → "Python is cool"</td>
                    </tr>
                    <tr>
                      <td>trim() / ltrim() / rtrim()</td>
                      <td>Remove whitespaces</td>
                      <td>trim(" Hello World ") → "Hello World"</td>
                    </tr>
                    <tr>
                      <td>explode()</td>
                      <td>Split string into array</td>
                      <td>explode(",", "apple,banana,mango") → Array ({`[0]=>"apple" [1]=>"banana" [2]=>"mango"`})</td>
                    </tr>
                    <tr>
                      <td>implode() / join()</td>
                      <td>Convert array to string</td>
                      <td>implode(",", ["Mugil","Arun","Ram"]) → "Mugil,Arun,Ram"</td>
                    </tr>
                    <tr>
                      <td>substr()</td>
                      <td>Extract part of string</td>
                      <td>substr("Full Stack Developer", 5, 5) → "Stack"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="superglobals" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-globe"></i> Superglobals in PHP</h2>
              
              <div className="property-card">
                <p>Superglobals are built-in predefined variables in PHP that are always accessible, regardless of scope. These are used to handle form data, server info, session, cookies, etc.</p>
                
                <h3 className="h4">1. $_GET</h3>
                <p>Used to collect data sent via URL (query string) using method="get".</p>
                <p><strong>Example:</strong></p>
                <pre><code>{`<!-- HTML -->
<a href="welcome.php?name=Mugil&age=21">Click Me</a>

// welcome.php
$name = $_GET["name"];
$age = $_GET["age"];
echo "Name: $name, Age: $age";`}</code></pre>
                <p><strong>Output:</strong> Name: Mugil, Age: 21</p>
              </div>

              <div className="property-card">
                <h3 className="h4">2. $_POST</h3>
                <p>Used to collect form data sent via HTTP POST method (secure for sensitive data).</p>
                <p><strong>Example:</strong></p>
                <pre><code>{`<!-- HTML -->
<form method="post">
  Name: <input type="text" name="username">
  <input type="submit">
</form>

// PHP
$name = $_POST["username"];
echo "Hello, $name";`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. $_REQUEST</h3>
                <p>Can collect data from both $_GET, $_POST, and $_COOKIE.</p>
                <pre><code>{`$name = $_REQUEST["username"];`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. $_SERVER</h3>
                <p>Contains server and execution environment information.</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>$_SERVER['PHP_SELF']</td>
                      <td>Returns the filename of the script</td>
                    </tr>
                    <tr>
                      <td>$_SERVER['SERVER_NAME']</td>
                      <td>Returns host name (e.g., localhost)</td>
                    </tr>
                    <tr>
                      <td>$_SERVER['REQUEST_METHOD']</td>
                      <td>GET / POST</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>Example:</strong></p>
                <pre><code>{`echo $_SERVER['PHP_SELF']; // form.php
echo $_SERVER['SERVER_NAME']; // localhost
echo $_SERVER['REQUEST_METHOD']; // GET or POST`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">5. $_FILES</h3>
                <p>Handles file uploads via forms.</p>
                <pre><code>{`<form method="post" enctype="multipart/form-data">
  <input type="file" name="fileUpload">
  <input type="submit">
</form>

$filename = $_FILES['fileUpload']['name'];
echo "Uploaded: $filename";`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">6. $_SESSION & $_COOKIE</h3>
                <p>Used for storing user data between pages.</p>
                <p><strong>$_SESSION Example:</strong></p>
                <pre><code>{`session_start();
$_SESSION["user"] = "Mugil";
echo $_SESSION["user"];`}</code></pre>
                <p><strong>$_COOKIE Example:</strong></p>
                <pre><code>{`setcookie("username", "Mugil", time()+3600);
echo $_COOKIE["username"];`}</code></pre>
              </div>
            </section>

            <section id="forms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-input-cursor-text"></i> Form Handling in PHP</h2>
              
              <div className="property-card">
                <h3 className="h4">Step-by-Step Process</h3>
                <ol>
                  <li>Create an HTML form</li>
                  <li>Send form data using GET or POST</li>
                  <li>Process it in PHP</li>
                  <li>Validate the data</li>
                  <li>Display or store result</li>
                </ol>
              </div>

              <div className="property-card">
                <h3 className="h4">1. Simple Form Example (Using POST)</h3>
                <p><strong>form.html</strong></p>
                <pre><code>{`<form action="submit.php" method="post">
  Name: <input type="text" name="name"><br>
  Email: <input type="email" name="email"><br>
  <input type="submit" value="Submit">
</form>`}</code></pre>
                <p><strong>submit.php</strong></p>
                <pre><code>{`<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  echo "Name: $name <br>";
  echo "Email: $email";
?>`}</code></pre>
                <p><strong>Output:</strong></p>
                <pre>Name: Mugil
Email: mugil@example.com</pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Form Validation (Required Field Check)</h3>
                <pre><code>{`<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
      echo "Name is required<br>";
    } else {
      $name = $_POST["name"];
      echo "Hello, $name";
    }
  }
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Sanitizing User Input</h3>
                <pre><code>{`<?php
  function cleanInput($data) {
    $data = trim($data);        // remove whitespace
    $data = stripslashes($data); // remove slashes
    $data = htmlspecialchars($data); // prevent HTML injection
    return $data;
  }
  
  $name = cleanInput($_POST["name"]);
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Method GET vs POST</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GET</td>
                      <td>Data in URL (visible), limited data, used for search or navigation</td>
                    </tr>
                    <tr>
                      <td>POST</td>
                      <td>Data hidden in request body, secure for form data, login forms etc.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">5. Example: Login Form with Basic Validation</h3>
                <p><strong>login.html</strong></p>
                <pre><code>{`<form method="post" action="login.php">
  Username: <input type="text" name="uname"><br>
  Password: <input type="password" name="pwd"><br>
  <input type="submit" value="Login">
</form>`}</code></pre>
                <p><strong>login.php</strong></p>
                <pre><code>{`<?php
  $uname = $_POST["uname"];
  $pwd = $_POST["pwd"];
  if ($uname == "admin" && $pwd == "1234") {
    echo "Login successful!";
  } else {
    echo "Invalid credentials.";
  }
?>`}</code></pre>
              </div>
            </section>

            <section id="files" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark"></i> File Handling in PHP</h2>
              
              <div className="property-card">
                <p>File handling is used to create, read, write, append, and delete files using PHP.</p>
                
                <h3 className="h4">1. Opening a File</h3>
                <p>Use <code>fopen()</code> function.</p>
                <pre><code>{`$file = fopen("data.txt", "r"); // 'r' means read mode`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. File Modes in PHP</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Mode</th>
                      <th>Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"r"</td>
                      <td>Read only</td>
                    </tr>
                    <tr>
                      <td>"w"</td>
                      <td>Write only (clears file)</td>
                    </tr>
                    <tr>
                      <td>"a"</td>
                      <td>Append to file</td>
                    </tr>
                    <tr>
                      <td>"x"</td>
                      <td>Create new file</td>
                    </tr>
                    <tr>
                      <td>"r+"</td>
                      <td>Read & write</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Reading from a File</h3>
                <pre><code>{`<?php
  $file = fopen("data.txt", "r");
  while(!feof($file)) {
    echo fgets($file). "<br>"; // reads line by line
  }
  fclose($file);
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Writing to a File</h3>
                <pre><code>{`<?php
  $file = fopen("data.txt", "w");
  fwrite($file, "Hello, this is Mugil\nWelcome to PHP.");
  fclose($file);
?>`}</code></pre>
                <p>This will overwrite the content.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">5. Appending to a File</h3>
                <pre><code>{`<?php
  $file = fopen("data.txt", "a");
  fwrite($file, "\nThis line is added later.");
  fclose($file);
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">6. Check if File Exists</h3>
                <pre><code>{`<?php
  if (file_exists("data.txt")) {
    echo "File found!";
  } else {
    echo "File not found!";
  }
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">7. Delete a File</h3>
                <pre><code>{`<?php
  if (unlink("data.txt")) {
    echo "File deleted successfully.";
  } else {
    echo "File deletion failed.";
  }
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">8. Upload a File using Form</h3>
                <p><strong>upload.html</strong></p>
                <pre><code>{`<form method="post" enctype="multipart/form-data" action="upload.php">
  <input type="file" name="myfile">
  <input type="submit" value="Upload">
</form>`}</code></pre>
                <p><strong>upload.php</strong></p>
                <pre><code>{`<?php
  $target = "uploads/". basename($_FILES["myfile"]["name"]);
  
  if (move_uploaded_file($_FILES["myfile"]["tmp_name"], $target)) {
    echo "File uploaded successfully!";
  } else {
    echo "File upload failed!";
  }
?>`}</code></pre>
                <p>Uploaded file will be stored in uploads/ folder.</p>
              </div>
            </section>

            <section id="sessions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-person-check"></i> Sessions and Cookies in PHP</h2>
              
              <div className="property-card">
                <p>These are used to store user information across multiple pages (like login status, shopping cart, etc.).</p>
                
                <h3 className="h4">1. PHP Sessions</h3>
                <p>Sessions store temporary data on the server for each user.</p>
                <p><strong>How to Start a Session:</strong></p>
                <pre><code>{`session_start(); // Always start session first`}</code></pre>
                <p><strong>Store Data in Session:</strong></p>
                <pre><code>{`$_SESSION["username"] = "Mugil";`}</code></pre>
                <p><strong>Retrieve Session Data:</strong></p>
                <pre><code>{`session_start();
echo $_SESSION["username"]; // Output: Mugil`}</code></pre>
                <p><strong>Destroy Session:</strong></p>
                <pre><code>{`session_start();
session_destroy();`}</code></pre>
                <p><strong>Full Example:</strong></p>
                <pre><code>{`// page1.php
session_start();
$_SESSION["course"] = "Full Stack Developer";
echo "Session set!";

// page2.php
session_start();
echo $_SESSION["course"]; // Output: Full Stack Developer`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. PHP Cookies</h3>
                <p>Cookies store small data on the user's browser.</p>
                <p><strong>Set a Cookie:</strong></p>
                <pre><code>{`setcookie("username", "Mugil", time()+3600); // valid for 1 hour`}</code></pre>
                <p><strong>Retrieve a Cookie:</strong></p>
                <pre><code>{`echo $_COOKIE["username"]; // Output: Mugil`}</code></pre>
                <p><strong>Delete a Cookie:</strong></p>
                <pre><code>{`setcookie("username", "", time() - 3600); // expired time`}</code></pre>
                <p><strong>Full Cookie Example:</strong></p>
                <pre><code>{`// set_cookie.php
setcookie("lang", "PHP", time()+86400); // 1 day

// get_cookie.php
echo $_COOKIE["lang"]; // Output: PHP`}</code></pre>
              </div>
            </section>

            <section id="mysql" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> PHP with MySQL</h2>
              
              <div className="property-card">
                <p>PHP can connect to MySQL databases using two main ways:</p>
                <ol>
                  <li>Using MySQLi (MySQL Improved)</li>
                  <li>Using PDO (PHP Data Objects)</li>
                </ol>
              </div>

              <div className="property-card">
                <h3 className="h4">1. Connecting to MySQL using MySQLi</h3>
                <pre><code>{`<?php
  $host = "localhost";
  $user = "root";
  $pass = "";
  $db = "mydb";

  $conn = mysqli_connect($host, $user, $pass, $db);

  if ($conn) {
    echo "Connected Successfully!";
  } else {
    echo "Connection failed: ". mysqli_connect_error();
  }
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. CRUD Operations with MySQLi</h3>
                <p><strong>a) Create (Insert)</strong></p>
                <pre><code>{`$sql = "INSERT INTO students (name, age) VALUES ('Mugil', 21)";
mysqli_query($conn, $sql);`}</code></pre>
                <p><strong>b) Read</strong></p>
                <pre><code>{`$sql = "SELECT * FROM students";
$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
  echo $row["name"]. "-". $row["age"]. "<br>";
}`}</code></pre>
                <p><strong>c) Update</strong></p>
                <pre><code>{`$sql = "UPDATE students SET age = 22 WHERE name = 'Mugil'";
mysqli_query($conn, $sql);`}</code></pre>
                <p><strong>d) Delete</strong></p>
                <pre><code>{`$sql = "DELETE FROM students WHERE name = 'Mugil'";
mysqli_query($conn, $sql);`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Prepared Statements (MySQLi)</h3>
                <p>Used to prevent SQL injection attacks.</p>
                <pre><code>{`$stmt = $conn->prepare("INSERT INTO users (username, email) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $email);

$username = "mugil";
$email = "mugil@example.com";
$stmt->execute();`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Using PDO (Alternative to MySQLi)</h3>
                <pre><code>{`<?php
  try {
    $conn = new PDO("mysql:host=localhost;dbname=mydb", "root", "");
    echo "Connected successfully";
  } catch (PDOException $e) {
    echo "Connection failed: ". $e->getMessage();
  }
?>`}</code></pre>
                <p><strong>PDO Insert Example:</strong></p>
                <pre><code>{`$stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->execute(["Mugil", "mugil@example.com"]);`}</code></pre>
              </div>
            </section>

            <section id="oop" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-boxes"></i> Object-Oriented PHP</h2>
              
              <div className="property-card">
                <h3 className="h4">What is OOP in PHP?</h3>
                <p>Object-Oriented Programming (OOP) is a style of programming that uses objects and classes to organize code.</p>
                <p><strong>Benefits:</strong></p>
                <ul>
                  <li>Reusability</li>
                  <li>Modularity</li>
                  <li>Easier maintenance</li>
                  <li>Real-world modelling</li>
                </ul>
                <p><strong>OOPS Concepts:</strong></p>
                <ul>
                  <li>Class</li>
                  <li>Object</li>
                  <li>Inheritance</li>
                  <li>Polymorphism</li>
                  <li>Abstraction</li>
                  <li>Encapsulation</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">1. Class and Object in PHP</h3>
                <p><strong>Class:</strong> A class is a blueprint for creating objects. It can contain properties (variables) and methods (functions).</p>
                <pre><code>{`class Car {
  // Properties
  public $brand;
  public $color;

  // Method
  function showDetails() {
    echo "Brand: $this->brand, Color: $this->color";
  }
}`}</code></pre>
                <p><strong>Object:</strong> An object is an instance of a class.</p>
                <pre><code>{`$car1 = new Car(); // Create object
$car1->brand = "BMW";
$car1->color = "Black";
$car1->showDetails(); // Output: Brand: BMW, Color: Black`}</code></pre>
                <p><strong>Example: Student Class</strong></p>
                <pre><code>{`class Student {
  public $name;
  public $age;

  function introduce() {
    echo "Hi, I am $this->name and I am $this->age years old.";
  }
}

$stud1 = new Student();
$stud1->name = "Mugil";
$stud1->age = 21;
$stud1->introduce(); // Output: Hi, I am Mugil and I am 21 years old.`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Constructors & Destructors in PHP</h3>
                <p>These are special methods in a class used for initializing and cleaning up objects.</p>
                <p><strong>Constructor:</strong> A constructor is a special function that automatically runs when an object is created.</p>
                <p><strong>Syntax:</strong> <code>__construct()</code></p>
                <p><strong>Example:</strong></p>
                <pre><code>{`class Student {
  public $name;
  public $age;

  function __construct($name, $age) {
    $this->name = $name;
    $this->age = $age;
  }

  function showInfo() {
    echo "Name: $this->name, Age: $this->age";
  }
}

$stud1 = new Student("Mugil", 21);
$stud1->showInfo(); // Output: Name: Mugil, Age: 21`}</code></pre>
                <p><strong>Destructor:</strong> A destructor is called automatically when the object is destroyed (like at the end of the script).</p>
                <p><strong>Syntax:</strong> <code>__destruct()</code></p>
                <p><strong>Example:</strong></p>
                <pre><code>{`class Goodbye {
  function __destruct() {
    echo "Object is being destroyed.";
  }
}

$obj = new Goodbye(); // Destructor will run automatically at the end`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Inheritance in PHP</h3>
                <p><strong>Definition:</strong> Inheritance is the concept where one class (child) can acquire properties and methods from another class (parent). This helps with code reuse, better organization, and modular programming.</p>
                <p><strong>Parent Class:</strong> A class whose properties and methods are inherited.</p>
                <pre><code>{`class ParentClass {
  public $name = "Mugil";
  function greet() {
    echo "Hello, $this->name";
  }
}`}</code></pre>
                <p><strong>Child Class:</strong> A class that inherits from a parent class using the extends keyword.</p>
                <pre><code>{`class ChildClass extends ParentClass {
  public function show() {
    echo "Welcome, $this->name";
  }
}`}</code></pre>
                <p><strong>Types of Inheritance in PHP:</strong></p>
                <p>Note: PHP does not support multiple inheritance directly through classes, but it can be achieved via traits.</p>
                <p><strong>1. Single Inheritance:</strong> One child inherits from one parent.</p>
                <img src={single} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`class Animal {
  public function sound() {
    echo "Animal Sound";
  }
}

class Dog extends Animal {
  public function bark() {
    echo "Dog Barks";
  }
}

$d = new Dog();
$d->sound(); // Output: Animal Sound
$d->bark();  // Output: Dog Barks`}</code></pre>
                <p><strong>2. Multilevel Inheritance:</strong> A class inherits from a class that inherited from another class.</p>
                <img src={multilevel} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`class GrandParent {
  public function sayHello() {
    echo "Hello from GrandParent";
  }
}

class ParentClass extends GrandParent {}

class ChildClass extends ParentClass {}

$obj = new ChildClass();
$obj->sayHello(); // Output: Hello from GrandParent`}</code></pre>
                <p><strong>3. Hierarchical Inheritance:</strong> Multiple classes inherit from the same parent class.</p>
                <img src={hierarchical} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`class Vehicle {
  public function run() {
    echo "Running...";
  }
}

class Car extends Vehicle {}
class Bike extends Vehicle {}

$c = new Car();
$b = new Bike();
$c->run(); // Running...
$b->run(); // Running...`}</code></pre>
                <p><strong>4. Multiple Inheritance (Using Traits):</strong> PHP does not support direct multiple inheritance via classes, but traits provide this functionality.</p>
                <img src={multiple} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`trait Trait1 {
  public function message1() {
    echo "Message from Trait1";
  }
}

trait Trait2 {
  public function message2() {
    echo "Message from Trait2";
  }
}

class Test {
  use Trait1, Trait2;
}

$t = new Test();
$t->message1(); // Trait1
$t->message2(); // Trait2`}</code></pre>
                <p><strong>5. Hybrid Inheritance:</strong> A combination of two or more types of inheritance (handled via traits + multilevel or hierarchical).</p>
                <img src={hybrid} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`trait Logger {
  public function log() {
    echo "Logging...";
  }
}

class A {
  public function displayA() {
    echo "A";
  }
}

class B extends A {
  use Logger;
  public function displayB() {
    echo "B";
  }
}

$obj = new B();
$obj->displayA(); // A
$obj->displayB(); // B
$obj->log();      // Logging...`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Access Modifiers in PHP</h3>
                <p>Access Modifiers are used to control the visibility (access level) of class properties and methods.</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Modifier</th>
                      <th>Accessible in Class</th>
                      <th>Accessible in Subclass</th>
                      <th>Accessible Outside Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>public</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>protected</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>private</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>1. public Modifier:</strong> Accessible from anywhere.</p>
                <pre><code>{`class Car {
  public $brand = "BMW";
}

$obj = new Car();
echo $obj->brand; // Output: BMW`}</code></pre>
                <p><strong>2. protected Modifier:</strong> Accessible inside the class and by inherited classes, but not from outside.</p>
                <pre><code>{`class Person {
  protected $name = "Mugil";
}

class Student extends Person {
  public function getName() {
    return $this->name;
  }
}

$s = new Student();
echo $s->getName(); // Output: Mugil

// echo $s->name; // ERROR: Cannot access protected property`}</code></pre>
                <p><strong>3. private Modifier:</strong> Accessible only within the class where it is declared.</p>
                <pre><code>{`class User {
  private $email = "test@example.com";

  public function getEmail() {
    return $this->email;
  }
}

$u = new User();
echo $u->getEmail(); // Output: test@example.com

// echo $u->email; // Error: Cannot access private property`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">5. Interfaces and Traits in PHP</h3>
                <p>These features help you organize and reuse code efficiently, especially when working with large applications.</p>
                <p><strong>What is an Interface?</strong></p>
                <ul>
                  <li>An interface defines method signatures only (no body).</li>
                  <li>Classes that implement the interface must define those methods.</li>
                </ul>
                <p><strong>Interface Syntax:</strong></p>
                <pre><code>{`interface Animal {
  public function makeSound();
}`}</code></pre>
                <p><strong>Implementing an Interface:</strong></p>
                <pre><code>{`class Dog implements Animal {
  public function makeSound() {
    echo "Bark!";
  }
}

$d = new Dog();
$d->makeSound(); // Output: Bark!`}</code></pre>
                <p><strong>Note:</strong> A class can implement multiple interfaces, separated by commas.</p>
                <p><strong>Why Use Interfaces?</strong></p>
                <ul>
                  <li>Ensure consistency in classes</li>
                  <li>Help implement polymorphism</li>
                  <li>Used in dependency injection</li>
                </ul>
                <p><strong>Traits in PHP:</strong></p>
                <ul>
                  <li>PHP doesn't support multiple inheritance with classes, but Traits solve this.</li>
                  <li>A Trait is a block of reusable methods that can be used in multiple classes.</li>
                </ul>
                <p><strong>Trait Syntax:</strong></p>
                <pre><code>{`trait Logger {
  public function log($msg) {
    echo "Log: $msg";
  }
}`}</code></pre>
                <p><strong>Using Trait in a Class:</strong></p>
                <pre><code>{`class App {
  use Logger;
}

$app = new App();
$app->log("Started!"); // Output: Log: Started!`}</code></pre>
                <p><strong>Multiple Traits:</strong></p>
                <pre><code>{`trait A {
  public function showA() {
    echo "A";
  }
}

trait B {
  public function showB() {
    echo "B";
  }
}

class Demo {
  use A, B;
}

$obj = new Demo();
$obj->showA(); // A
$obj->showB(); // B`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">6. Polymorphism in PHP</h3>
                <p><strong>Definition:</strong> Polymorphism means many forms — the same function name behaves differently based on context (object/class).</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Support in PHP</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Compile-time (Overloading)</td>
                      <td>Not directly supported</td>
                      <td>Method overloading is not natively supported</td>
                    </tr>
                    <tr>
                      <td>Runtime (Overriding)</td>
                      <td>Yes</td>
                      <td>Subclass provides a different implementation</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>Example – Runtime Polymorphism (Method Overriding):</strong></p>
                <pre><code>{`class Animal {
  public function sound() {
    echo "Animal Sound";
  }
}

class Dog extends Animal {
  public function sound() {
    echo "Bark";
  }
}

class Cat extends Animal {
  public function sound() {
    echo "Meow";
  }
}

$dog = new Dog();
$cat = new Cat();

$dog->sound(); // Bark
$cat->sound(); // Meow`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">7. Abstraction in PHP</h3>
                <p><strong>Definition:</strong> Abstraction means hiding the internal implementation and showing only the required features.</p>
                <p>Achieved in PHP using <strong>abstract classes</strong> and <strong>interfaces</strong>.</p>
                <p><strong>Abstract Class:</strong></p>
                <pre><code>{`abstract class Shape {
  abstract public function area();
}

class Circle extends Shape {
  public function area() {
    echo "Area of Circle";
  }
}

$c = new Circle();
$c->area(); // Output: Area of Circle`}</code></pre>
                <p>You <strong>cannot create an object</strong> of an abstract class.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">8. Encapsulation in PHP</h3>
                <p><strong>Definition:</strong> Encapsulation is the binding of data and methods into a single unit (class) and restricting direct access to it.</p>
                <p>Achieved using <strong>access modifiers + getters/setters</strong>.</p>
                <p><strong>Example:</strong></p>
                <pre><code>{`class Person {
  private $name;

  public function setName($n) {
    $this->name = $n;
  }

  public function getName() {
    return $this->name;
  }
}

$p = new Person();
$p->setName("Mugil");
echo $p->getName(); // Output: Mugil`}</code></pre>
                <p>Here, the <code>$name</code> is <strong>private</strong> (not accessible directly), but accessed through public <strong>getter and setter</strong>.</p>
              </div>
            </section>

            <section id="json" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-filetype-json"></i> PHP and JSON</h2>
              
              <div className="property-card">
                <h3 className="h4">What is JSON?</h3>
                <ul>
                  <li><strong>JSON (JavaScript Object Notation)</strong> is a lightweight data format used for exchanging data between server and client.</li>
                  <li>It's commonly used in APIs and web applications.</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">1. Encode PHP data to JSON</h3>
                <p><strong>Function:</strong> <code>json_encode()</code></p>
                <pre><code>{`<?php
  $data = array("name" => "Mugil", "age" => 21);
  $jsonData = json_encode($data);
  echo $jsonData;
?>`}</code></pre>
                <p><strong>Output:</strong> <code>{`"name":"Mugil","age":21`}</code></p>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Decode JSON to PHP data</h3>
                <p><strong>Function:</strong> <code>json_decode()</code></p>
                <pre><code>{`<?php
  $json = '{"name":"Mugil","age":21}';
  $data = json_decode($json, true); // true = convert to associative array
  echo $data['name']; // Output: Mugil
?>`}</code></pre>
                <p><strong>JSON with Objects:</strong></p>
                <pre><code>{`<?php
  $json = '{"name":"Mugil","course":"PHP"}';
  $obj = json_decode($json); // Without true → becomes object
  echo $obj->name; // Mugil
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Using JSON in APIs</h3>
                <p>JSON is widely used to send/receive data in REST APIs.</p>
                <p><strong>Example of JSON response in PHP:</strong></p>
                <pre><code>{`<?php
  header('Content-Type: application/json');
  $data = ["status" => "success", "message" => "Data received"];
  echo json_encode($data);
?>`}</code></pre>
              </div>
            </section>

            <section id="security" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> Security in PHP</h2>
              
              <div className="property-card">
                <p>PHP web applications are often targeted for hacks like SQL Injection, XSS, etc. Let's learn how to protect your PHP apps.</p>
                
                <h3 className="h4">1. SQL Injection</h3>
                <p>SQL Injection occurs when malicious input is inserted into SQL queries.</p>
                <p><strong>Vulnerable Code:</strong></p>
                <pre><code>{`$username = $_GET['user'];
$query = "SELECT * FROM users WHERE username = '$username'";`}</code></pre>
                <p><strong>Safe Code using Prepared Statements (MySQLi):</strong></p>
                <pre><code>{`$conn = new mysqli("localhost", "root", "", "test");
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$username = $_GET['user'];
$stmt->execute();`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Cross-Site Scripting (XSS)</h3>
                <p>XSS allows attackers to inject JavaScript into your website.</p>
                <p><strong>Dangerous:</strong></p>
                <pre><code>{`echo $_GET['msg'];`}</code></pre>
                <p><strong>Safe:</strong></p>
                <pre><code>{`echo htmlspecialchars($_GET['msg']);`}</code></pre>
                <p><code>htmlspecialchars()</code> escapes HTML characters (&lt;, &gt;, "), preventing script execution.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Form Validation & Sanitization</h3>
                <p>Always validate and sanitize user inputs before using them.</p>
                <p><strong>Example:</strong></p>
                <pre><code>{`$name = trim($_POST['name']);    // Remove spaces
$name = htmlspecialchars($name);    // Prevent XSS
$name = filter_var($name, FILTER_SANITIZE_STRING); // Sanitize input`}</code></pre>
                <p>You can also use:</p>
                <ul>
                  <li><code>filter_var()</code> for emails, URLs, numbers</li>
                  <li><code>filter_input()</code> to sanitize directly from $_POST or $_GET</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Password Hashing</h3>
                <p>Never store plain-text passwords.</p>
                <p>Use <code>password_hash()</code> and <code>password_verify()</code>:</p>
                <pre><code>{`$hashed = password_hash("mypassword", PASSWORD_DEFAULT);

if (password_verify("mypassword", $hashed)) {
  echo "Login Success!";
}`}</code></pre>
              </div>
            </section>

            <section id="frameworks" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-stack"></i> PHP Frameworks Overview</h2>
              
              <div className="property-card">
                <h3 className="h4">What is a PHP Framework?</h3>
                <p>A PHP framework is a set of pre-built tools, libraries, and best practices that make it easier to build structured, secure, and scalable web applications.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">Benefits of Using Frameworks</h3>
                <ul>
                  <li><strong>Faster Development</strong></li>
                  <li>MVC (Model-View-Controller) structure</li>
                  <li>Built-in Security</li>
                  <li>Reusability and Maintainability</li>
                  <li>Developer Community Support</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">1. Laravel</h3>
                <p><strong>Laravel is the most popular PHP framework.</strong></p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Architecture</td>
                      <td>MVC</td>
                    </tr>
                    <tr>
                      <td>Routing</td>
                      <td>Easy and clean route handling</td>
                    </tr>
                    <tr>
                      <td>Eloquent ORM</td>
                      <td>Database interaction using PHP objects</td>
                    </tr>
                    <tr>
                      <td>Artisan CLI</td>
                      <td>Command line tool for automation</td>
                    </tr>
                    <tr>
                      <td>Blade Template</td>
                      <td>Templating engine</td>
                    </tr>
                    <tr>
                      <td>Built-in Security</td>
                      <td>CSRF, Authentication, etc.</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>Example: Simple Route in Laravel</strong></p>
                <pre><code>{`Route::get('/hello', function () {
  return "Hello Laravel!";
});`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. CodeIgniter</h3>
                <p><strong>CodeIgniter is a lightweight and easy-to-learn PHP framework.</strong></p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Small Footprint</td>
                      <td>Fast and lightweight</td>
                    </tr>
                    <tr>
                      <td>Easy to Install</td>
                      <td>No composer needed</td>
                    </tr>
                    <tr>
                      <td>MVC Support</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Built-in Security</td>
                      <td>XSS, SQL Injection</td>
                    </tr>
                    <tr>
                      <td>Clear Documentation</td>
                      <td>Beginner-friendly</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>Example: Controller in CodeIgniter</strong></p>
                <pre><code>{`class Welcome extends CI_Controller {
  public function index() {
    echo "Hello from CodeIgniter!";
  }
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Laravel vs CodeIgniter – Quick Comparison</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Laravel</th>
                      <th>CodeIgniter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Complexity</td>
                      <td>Advanced</td>
                      <td>Beginner-friendly</td>
                    </tr>
                    <tr>
                      <td>Performance</td>
                      <td>Slower but feature-rich</td>
                      <td>Faster, lightweight</td>
                    </tr>
                    <tr>
                      <td>Learning Curve</td>
                      <td>Steep</td>
                      <td>Easy to learn</td>
                    </tr>
                    <tr>
                      <td>Template Engine</td>
                      <td>Blade</td>
                      <td>PHP Views</td>
                    </tr>
                    <tr>
                      <td>Routing</td>
                      <td>More powerful</td>
                      <td>Basic</td>
                    </tr>
                    <tr>
                      <td>ORM</td>
                      <td>Eloquent</td>
                      <td>Active Record</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">Other Popular Frameworks (Optional)</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Framework</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Symfony</td>
                      <td>Enterprise-level, reusable PHP components</td>
                    </tr>
                    <tr>
                      <td>Yii</td>
                      <td>High performance, suitable for large applications</td>
                    </tr>
                    <tr>
                      <td>Zend</td>
                      <td>Very powerful but complex</td>
                    </tr>
                    <tr>
                      <td>Phalcon</td>
                      <td>Delivered as a C extension for speed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">When to Use a Framework?</h3>
                <ul>
                  <li>For <strong>medium to large</strong> projects</li>
                  <li>When you need <strong>MVC</strong>, built-in security, routing</li>
                  <li>If you want <strong>scalable and testable</strong> code</li>
                </ul>
              </div>
            </section>

            <section id="projects" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-kanban"></i> Mini Project Ideas in PHP</h2>
              
              <div className="property-card">
                <p>Here are some beginner to intermediate-level real-time mini projects you can build using Core PHP + MySQL. These projects will boost your portfolio and help in interviews too.</p>
                
                <h3 className="h4">1. Contact Form</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>HTML form with Name, Email, Message</li>
                  <li>Store messages in MySQL database</li>
                  <li>Show success message on submission</li>
                </ul>
                <p><strong>Concepts Used:</strong></p>
                <ul>
                  <li>POST form</li>
                  <li>mysqli_connect + INSERT</li>
                  <li>Form validation and sanitization</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Student Management System</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Add / Edit / Delete student records</li>
                  <li>Display all students in a table</li>
                  <li>Search student by name or ID</li>
                </ul>
                <p><strong>Concepts Used:</strong></p>
                <ul>
                  <li>CRUD operations in PHP</li>
                  <li>MySQL joins (optional)</li>
                  <li>GET/POST method handling</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Login & Registration System</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>User signup with validation</li>
                  <li>Secure password using password_hash()</li>
                  <li>Login with session</li>
                  <li>Logout option</li>
                </ul>
                <p><strong>Concepts Used:</strong></p>
                <ul>
                  <li>Sessions</li>
                  <li>Password encryption</li>
                  <li>Form validation</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Blog Website Backend</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Admin panel to add/edit/delete posts</li>
                  <li>Show blog posts on homepage</li>
                  <li>Optional: Comment system</li>
                </ul>
                <p><strong>Concepts Used:</strong></p>
                <ul>
                  <li>File upload (for images)</li>
                  <li>Admin authentication</li>
                  <li>Database relationships</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">5. Online Quiz App</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Load questions from DB</li>
                  <li>Track score</li>
                  <li>Show result at end</li>
                </ul>
                <p><strong>Concepts Used:</strong></p>
                <ul>
                  <li>PHP sessions</li>
                  <li>MySQL select queries</li>
                  <li>Timer (optional with JS)</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">6. Simple E-commerce Cart</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Product listing from DB</li>
                  <li>Add to cart using sessions</li>
                  <li>Calculate total amount</li>
                </ul>
                <p><strong>Concepts Used:</strong></p>
                <ul>
                  <li>Arrays & sessions</li>
                  <li>Database-driven content</li>
                  <li>Checkout form</li>
                </ul>
              </div>
            </section>

            <section className="mb-5">
              <h2 className="h2 mb-3">Project Title: Student Management System (Core PHP + MySQL)</h2>
              
              <div className="property-card">
                <h3 className="h4">Step 1: Project Features</h3>
                <ul>
                  <li>Add new student</li>
                  <li>View all students</li>
                  <li>Edit student details</li>
                  <li>Delete student</li>
                  <li>Search student by name or ID</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 2: Folder Structure</h3>
                <pre>student-management/
  |
  |-- config/
  |   |-- db.php
  |-- add.php
  |-- edit.php
  |-- delete.php
  |-- index.php
  |-- search.php
  |-- style.css (optional)</pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 3: Create Database & Table</h3>
                <p><strong>Database Name:</strong> student_db</p>
                <p><strong>Table Name:</strong> students</p>
                <pre><code>{`CREATE DATABASE student_db;

USE student_db;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  course VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 4: config/db.php</h3>
                <pre><code>{`<?php
  $host = "localhost";
  $user = "root";
  $pass = "";
  $db = "student_db";

  $conn = new mysqli($host, $user, $pass, $db);

  if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
  }
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 5: add.php – Add New Student</h3>
                <pre><code>{`<?php include 'config/db.php'; ?>

<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $course = $_POST['course'];
    
    $sql = "INSERT INTO students (name, email, course) VALUES ('$name', '$email', '$course')";
    $conn->query($sql);
    
    header("Location: index.php");
  }
?>

<h2>Add Student</h2>
<form method="post">
  Name: <input type="text" name="name" required><br><br>
  Email: <input type="email" name="email" required><br><br>
  Course: <input type="text" name="course" required><br><br>
  <input type="submit" value="Add Student">
</form>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 6: index.php – View All Students</h3>
                <pre><code>{`<?php include 'config/db.php'; ?>
<h2>Student List</h2>
<a href="add.php">+ Add Student</a> | <a href="search.php">Search</a>
<br><br>

<table border="1" cellpadding="10">
  <tr>
    <th>ID</th><th>Name</th><th>Email</th><th>Course</th><th>Actions</th>
  </tr>
  <?php
    $result = $conn->query("SELECT * FROM students ORDER BY id DESC");
    while ($row = $result->fetch_assoc()) {
      echo "<tr>
        <td>{$row['id']}</td>
        <td>{$row['name']}</td>
        <td>{$row['email']}</td>
        <td>{$row['course']}</td>
        <td>
          <a href='edit.php?id={$row['id']}'>Edit</a>
          <a href='delete.php?id={$row['id']}'>Delete</a>
        </td>
      </tr>";
    }
  ?>
</table>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 7: edit.php – Edit Student</h3>
                <pre><code>{`<?php
  include 'config/db.php';
  $id = $_GET['id'];

  $result = $conn->query("SELECT * FROM students WHERE id=$id");
  $row = $result->fetch_assoc();

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $course = $_POST['course'];
    
    $conn->query("UPDATE students SET name='$name', email='$email', course='$course' WHERE id=$id");
    
    header("Location: index.php");
  }
?>

<h2>Edit Student</h2>
<form method="post">
  Name: <input type="text" name="name" value="<?= $row['name'] ?>" required><br><br>
  Email: <input type="email" name="email" value="<?= $row['email'] ?>" required><br><br>
  Course: <input type="text" name="course" value="<?= $row['course'] ?>" required><br><br>
  <input type="submit" value="Update Student">
</form>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 8: delete.php – Delete Student</h3>
                <pre><code>{`<?php 
  include 'config/db.php';
  $id = $_GET['id'];
  
  $conn->query("DELETE FROM students WHERE id=$id");
  header("Location: index.php");
?>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 9: search.php – Search Student</h3>
                <pre><code>{`<?php include 'config/db.php'; ?>
<h2>Search Student</h2>
<form method="get">
  Name or ID: <input type="text" name="keyword">
  <input type="submit" value="Search">
</form>

<?php
  if (isset($_GET['keyword'])) {
    $keyword = $_GET['keyword'];
    $sql = "SELECT * FROM students WHERE name LIKE '%$keyword%' OR id='$keyword'";
    $result = $conn->query($sql);

    echo "<table border='1' cellpadding='10'>
      <tr><th>ID</th><th>Name</th><th>Email</th><th>Course</th></tr>";
    
    while ($row = $result->fetch_assoc()) {
      echo "<tr>
        <td>{$row['id']}</td>
        <td>{$row['name']}</td>
        <td>{$row['email']}</td>
        <td>{$row['course']}</td>
      </tr>";
    }
    
    echo "</table>";
  }
?>`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>PHP Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default PhpNotes;