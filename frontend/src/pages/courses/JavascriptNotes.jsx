import React from 'react';

function JavascriptNotes() {
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
          .operator-table {
            width: 100%;
            border-collapse: collapse;
          }
          .operator-table th, .operator-table td {
            border: 1px solid #dee2e6;
            padding: 8px;
            text-align: left;
          }
          .operator-table th {
            background-color: #e9ecef;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-js"></i> JavaScript Notes</h1>
          <p className="lead">Your Comprehensive Guide to JavaScript Programming</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#inclusion"><i className="bi bi-code-square"></i> Including JS</a>
              <a className="nav-link" href="#output"><i className="bi bi-terminal"></i> Display Output</a>
              <a className="nav-link" href="#datatypes"><i className="bi bi-list-check"></i> Data Types</a>
              <a className="nav-link" href="#variables"><i className="bi bi-box"></i> Variables</a>
              <a className="nav-link" href="#operators"><i className="bi bi-calculator"></i> Operators</a>
              <a className="nav-link" href="#conditionals"><i className="bi bi-diagram-2"></i> Conditionals</a>
              <a className="nav-link" href="#loops"><i className="bi bi-arrow-repeat"></i> Loops</a>
              <a className="nav-link" href="#dialogue-boxes"><i className="bi bi-arrow-repeat"></i> Dialogue Boxes</a>
              <a className="nav-link" href="#functions"><i className="bi bi-gear"></i> Functions</a>
              <a className="nav-link" href="#objects"><i className="bi bi-collection"></i> Objects</a>
              <a className="nav-link" href="#arrays"><i className="bi bi-grid-3x3"></i> Arrays</a>
              <a className="nav-link" href="#strings"><i className="bi bi-type"></i> Strings</a>
              <a className="nav-link" href="#classes"><i className="bi bi-layers"></i> Classes</a>
              <a className="nav-link" href="#dom"><i className="bi bi-file-earmark-code"></i> DOM</a>
              <a className="nav-link" href="#bom"><i className="bi bi-window"></i> BOM</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to JavaScript</h2>
              <ul className="mb-3">
                <li>Used to convert a static webpage to dynamic webpage</li>
                <li>It is a scripting language</li>
                <li>It is loosely coupled language</li>
                <li>Invented by Brendon Eich in 1995</li>
                <li>Initial name was LiveScript; renamed to JavaScript due to Java's popularity</li>
                <li>Latest version is ECMAScript 7 (ES7)</li>
              </ul>
            </section>

            <section id="inclusion" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Including JavaScript in HTML</h2>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> Internal Scripting</h3>
                <h4 className="h5 mt-3">Inside head tag:</h4>
                <pre className="mb-3"><code>{`<head>
  <script>
    //JS code
  </script>
</head>`}</code></pre>
                <h4 className="h5 mt-3">Inside body tag:</h4>
                <pre className="mb-3"><code>{`<body>
  <script>
    //JS code
  </script>
</body>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> External Scripting</h3>
                <pre className="mb-3"><code>{`// Create script.js file
// Include in HTML:
<head>
  <script src="script.js"></script>
</head>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-terminal"></i> Running JavaScript without Browser</h3>
                <ol>
                  <li>Download Node.js runtime environment</li>
                  <li>Check version: <code>node --version</code></li>
                  <li>Run file: <code>node filename.js</code></li>
                </ol>
              </div>
            </section>

            <section id="output" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-terminal"></i> Displaying Output in JavaScript</h2>
              <div className="property-card">
                <pre className="mb-3"><code>{`document.write("message"); // Display in HTML document
alert("message"); // Display in popup window
console.log("message"); // Display in console
document.getElementById("id").innerHTML="message"; // Display in HTML element`}</code></pre>
              </div>
            </section>

            <section id="datatypes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-list-check"></i> JavaScript Data Types</h2>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Primitive Data Types</h3>
                <ul>
                  <li><code>number</code> - whole numbers, decimals, positive, negative</li>
                  <li><code>string</code> - collection of characters</li>
                  <li><code>null</code> - empty value</li>
                  <li><code>undefined</code> - variable not initialized</li>
                  <li><code>bigint</code> - very large numbers</li>
                  <li><code>boolean</code> - true/false</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Non-Primitive Data Types</h3>
                <ul>
                  <li><code>Array</code> - collection of values in []</li>
                  <li><code>Object</code> - collection of key-value pairs</li>
                </ul>
              </div>
            </section>

            <section id="variables" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box"></i> Variables in JavaScript</h2>
              <p className="mb-3">It is a container used to store the value.</p>
              <h3 className="h3 mb-3">Types of Keyword:</h3>
              <ul>
                <li>var - Global Scope/Global Variable: If a variable is created outside the function.</li>
                <li>let - Local Scope/Local Variable: If a variable is created inside the function.</li>
                <li>const - constant (unchangeable values)</li>
              </ul>
              <div className="property-card">
                <pre className="mb-3"><code>{`// Variable syntax:
keyword varName = value;

// Variable keywords:
var a = 10; // Global scope
let b = 20; // Local scope (block-scoped)
const c = 30; // Constant (cannot be changed)`}</code></pre>
              </div>
            </section>

            <section id="operators" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> JavaScript Operators</h2>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Unary Operators</h3>
                <pre className="mb-3"><code>{`var a = 10;
a++; // Increment (11)
a--; // Decrement (9)`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Arithmetic Operators</h3>
                <table className="operator-table">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>+</td>
                      <td>Addition</td>
                      <td>10 + 20 = 30</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>Subtraction</td>
                      <td>20 - 10 = 10</td>
                    </tr>
                    <tr>
                      <td>*</td>
                      <td>Multiplication</td>
                      <td>10 * 20 = 200</td>
                    </tr>
                    <tr>
                      <td>/</td>
                      <td>Division</td>
                      <td>20 / 10 = 2</td>
                    </tr>
                    <tr>
                      <td>%</td>
                      <td>Modulus</td>
                      <td>20 % 10 = 0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Assignment Operators</h3>
                <table className="operator-table">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Example</th>
                      <th>Equivalent To</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>=</td>
                      <td>x = y</td>
                      <td>x = y</td>
                    </tr>
                    <tr>
                      <td>+=</td>
                      <td>x += y</td>
                      <td>x = x + y</td>
                    </tr>
                    <tr>
                      <td>-=</td>
                      <td>x -= y</td>
                      <td>x = x - y</td>
                    </tr>
                    <tr>
                      <td>*=</td>
                      <td>x *= y</td>
                      <td>x = x * y</td>
                    </tr>
                    <tr>
                      <td>/=</td>
                      <td>x /= y</td>
                      <td>x = x / y</td>
                    </tr>
                    <tr>
                      <td>%=</td>
                      <td>x %= y</td>
                      <td>x = x % y</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> Comparison Operators</h3>
                <table className="operator-table">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>==</td>
                      <td>Equal to</td>
                      <td>10 == 20 → false</td>
                    </tr>
                    <tr>
                      <td>===</td>
                      <td>Strict equal (type and value)</td>
                      <td>10 === "10" → false</td>
                    </tr>
                    <tr>
                      <td>!=</td>
                      <td>Not equal</td>
                      <td>10 != 20 → true</td>
                    </tr>
                    <tr>
                      <td>!==</td>
                      <td>Strict not equal</td>
                      <td>10 !== "10" → true</td>
                    </tr>
                    <tr>
                      <td>&gt;</td>
                      <td>Greater than</td>
                      <td>20 &gt; 10 → true</td>
                    </tr>
                    <tr>
                      <td>&gt;=</td>
                      <td>Greater than or equal</td>
                      <td>20 &gt;= 10 → true</td>
                    </tr>
                    <tr>
                      <td>&lt;</td>
                      <td>Less than</td>
                      <td>20 &lt; 10 → false</td>
                    </tr>
                    <tr>
                      <td>&lt;=</td>
                      <td>Less than or equal</td>
                      <td>20 &lt;= 10 → false</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> Logical Operators</h3>
                <table className="operator-table">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&amp;&amp;</td>
                      <td>Logical AND</td>
                      <td>(10 == 10 &amp;&amp; 20 == 20) → true</td>
                    </tr>
                    <tr>
                      <td>||</td>
                      <td>Logical OR</td>
                      <td>(10 == 20 || 20 == 20) → true</td>
                    </tr>
                    <tr>
                      <td>!</td>
                      <td>Logical NOT</td>
                      <td>!(10 == 20) → true</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> Bitwise Operators</h3>
                <table className="operator-table">
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
                      <td><code>&amp;</code></td>
                      <td>Bitwise AND</td>
                      <td><code>10 &amp; 20</code></td>
                      <td><code>0</code></td>
                    </tr>
                    <tr>
                      <td><code>|</code></td>
                      <td>Bitwise OR</td>
                      <td><code>10 | 20</code></td>
                      <td><code>30</code></td>
                    </tr>
                    <tr>
                      <td><code>^</code></td>
                      <td>Bitwise XOR</td>
                      <td><code>10 ^ 20</code></td>
                      <td><code>30</code></td>
                    </tr>
                    <tr>
                      <td><code>~</code></td>
                      <td>Bitwise NOT</td>
                      <td><code>~10</code></td>
                      <td><code>-11</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;&lt;</code></td>
                      <td>Bitwise left shift</td>
                      <td><code>10 &lt;&lt; 2</code></td>
                      <td><code>40</code></td>
                    </tr>
                    <tr>
                      <td><code>&gt;&gt;</code></td>
                      <td>Bitwise right shift</td>
                      <td><code>10 &gt;&gt; 2</code></td>
                      <td><code>2</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> Ternary Operator</h3>
                <pre className="mb-3"><code>{`// Syntax:
(condition) ? expression1 : expression2;

// Example:
var marks = 70;
var result = (marks >= 35) ? "Pass" : "Fail";
console.log(result); // "Pass"`}</code></pre>
              </div>
            </section>

            <section id="conditionals" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-2"></i> Conditional Statements</h2>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> if Statement</h3>
                <p className="mb-3">If block will get executed whether the condition is true.</p>
                <pre className="mb-3"><code>{`// Syntax:
if(condition) {
  // statements
}

// Example:
var a = 18;
if(a >= 18) {
  console.log("You are adult");
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> if-else Statement</h3>
                <p className="mb-3">If block will get executed whether the condition is true and else block will get executed whether the condition is false.</p>
                <pre className="mb-3"><code>{`// Syntax:
if(condition) {
  // statements
} else {
  // statements
}

// Example:
var a = 15;
if(a >= 18) {
  console.log("You are adult");
} else {
  console.log("You are not adult");
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> if-else if Statement</h3>
                <pre className="mb-3"><code>{`// Syntax:
if(condition1) {
  // statements
} else if(condition2) {
  // statements
} else {
  // statements
}

// Example:
var marks = 85;
if(marks > 90) {
  console.log("Grade O");
} else if(marks > 80) {
  console.log("Grade A+");
} else if(marks > 70) {
  console.log("Grade A");
} else {
  console.log("Grade B");
}`}</code></pre>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> nested if Statement</h3>
                <pre className="mb-3"><code>{`// Syntax:
if(condition1) {
    if(condition2) {
      // statements
    } 
    else {
      // statements
    }
else{
  // statements
}

// Example:
var marks = 96;
if(marks > 90) {
  if(marks > 95) {
    console.log("Excellant");
  }
  else{
    console.log("Very Good");
  } 
} else {
  console.log("Good");
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> Switch Statement</h3>
                <pre className="mb-3"><code>{`// Syntax:
switch(expression) {
  case value1:
    // statements
    break;
  case value2:
    // statements
    break;
  default:
    // statements
}

// Example:
let a = 2;
switch(a) {
  case 1:
    console.log("Fan switch");
    break;
  case 2:
    console.log("Light switch");
    break;
  case 3:
    console.log("AC switch");
    break;
  default:
    console.log("Invalid switch");
}`}</code></pre>
              </div>
            </section>

            <section id="loops" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> Loops in JavaScript</h2>
              <p className="mb-3">It is a block of code which will be executed repeatedly until the condition becomes false.</p>
              <h4 className="h4 mb-3">Types of loop:</h4>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> for Loop</h3>
                <pre className="mb-3"><code>{`// Syntax:
for(initialization; condition; increment/decrement) {
  // statements
}

// Example:
for(var i = 0; i < 5; i++) {
  console.log(i); // 0,1,2,3,4
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> while Loop</h3>
                <pre className="mb-3"><code>{`// Syntax:
initialization;
while(condition) {
  // statements
  increment/decrement;
}

// Example:
let i = 1;
while(i <= 5) {
  console.log(i); // 1,2,3,4,5
  i++;
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> do-while Loop</h3>
                <pre className="mb-3"><code>{`// Syntax:
initialization;
do {
  // statements
  increment/decrement;
} while(condition);

// Example:
let i = 1;
do {
  console.log(i); // 1,2,3,4,5
  i++;
} while(i <= 5);`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4 mb-3"><i className="bi bi-4-circle"></i> Jump Statements</h3>
                <h5 className="h5 mb-3">Types of jump statements:</h5>
                <h6 className="h5 mb-3"><i className="bi bi-1-circle"></i> break</h6>
                <p className="mb-3">It is used to break the loop.</p>
                <h6 className="h5 mb-3"><i className="bi bi-2-circle"></i> continue</h6>
                <p className="mb-3">It is used to skip the item and move to next item.</p>
                <pre className="mb-3"><code>{`// break statement
for(let i = 1; i <= 5; i++) {
  if(i == 3) {
    break; // exits loop
  }
  console.log(i); // 1,2
}

// continue statement
for(let i = 1; i <= 5; i++) {
  if(i == 3) {
    continue; // skips current iteration
  }
  console.log(i); // 1,2,4,5
}`}</code></pre>
              </div>
            </section>

            <section className="mb-5" id="dialogue-boxes">
              <h2 className="h2 mb-3"><i className="bi bi-chat"></i> Dialogue Boxes</h2>
              <p>Dialogue boxes are used to get input from the user.</p>
              <h4 className="mb-3">Types of dialogue boxes:</h4>
              <ol>
                  <li>Alert box</li>
                  <li>Confirm box</li>
                  <li>Prompt box</li>
              </ol>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Alert Box</h3>
                <pre className="mb-3"><code>{`// Example:
alert("Alert Message");`}</code></pre>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Confirm Box</h3>
                <p>It is used to ask the user to confirm something.</p>
                <pre className="mb-3"><code>{`// Example:
<button onclick="getConfirmation()">Delete</button>
function getConfirmation(){
    var file=confirm("Are you want to delete this file");
    if(file){
        alert("File deleted successfully");
    }
    else{
        alert("File not deleted");
    }
}`}</code></pre>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Prompt Box</h3>
                <p>It is used to ask the user to enter some information.</p>
                <pre className="mb-3"><code>{`// Example:
<button onclick="getPrompt()">Prompt</button>
function getPrompt(){
    var name=prompt("Enter your name");
    if(name){
        alert("Welcome "+name);
    }
    else{
        alert("Please enter your name");
    }
}`}</code></pre>
              </div>
            </section>

            <section id="functions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Functions in JavaScript</h2>
              <p className="mb-3">A function is a block of code that can be executed multiple times when it is called.</p>
              <p className="mb-3">It is used to perform a specific task.</p>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Function Declaration</h3>
                <pre className="mb-3"><code>{`// Syntax:
function functionName(parameters) {
  // code to execute
}

// Example:
function greet() {
  console.log("Hello!");
}
greet(); // "Hello!"`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Function with Parameters</h3>
                <p className="mb-3">Parameters are the information that are passed to a function parenthesis.</p>
                <pre className="mb-3"><code>{`function sum(a, b) {
  return a + b;
}
console.log(sum(10, 5)); // 15`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Arrow Functions</h3>
                <p className="mb-3">Arrow functions are a concise way to write functions in JavaScript.</p>
                <p className="mb-3">They are used to define small functions.</p>
                <pre className="mb-3"><code>{`// Single statement
let multiply = (a, b) => a * b;
console.log(multiply(10, 5)); // 50

// Multiple statements
let divide = (x, y) => {
  console.log("Dividing...");
  return x / y;
}
console.log(divide(10, 2)); // 5`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> Anonymous Functions</h3>
                <p className="mb-3">An anonymous function is a function that is defined without a function name.It is also called as self invoking function.</p>
                <pre className="mb-3"><code>{`// Self-invoking function
(function(a, b) {
  console.log(a + b); // 15
})(10, 5);`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> Recursion</h3>
                <p className="mb-3">A function that calls itself is called a recursive function.</p>
                <pre className="mb-3"><code>{`function factorial(n) {
  if(n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); // 120`}</code></pre>
              </div>
            </section>

            <section id="objects" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-collection"></i> Objects in JavaScript</h2>
              <p>Objects are used to store multiple values in a single variable.</p>
              <p>Objects are used to store property-value pairs.</p>
              <h4 className="mb-3">Ways to create an object:</h4>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Object Literal</h3>
                <pre className="mb-3"><code>{`// Syntax:
let obj = {
  property: value,
  property: value
}

// Example:
let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello!");
  }
};
console.log(person.name); // "John"
person.greet(); // "Hello!"`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Using new Keyword</h3>
                <pre className="mb-3"><code>{`let person = new Object();
person.name = "John";
person.age = 30;
console.log(person);`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Using Constructor</h3>
                <pre className="mb-3"><code>{`function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person = new Person("John", 30);
console.log(person);`}</code></pre>
              </div>
            </section>

            <section id="arrays" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-grid-3x3"></i> Arrays in JavaScript</h2>
              <ul>
                <li>Arrays are used to store multiple values in a single variable.</li>
                <li>Arrays are used to store values of same data type.</li>
                <li>It works based on the index values.</li>
                <li>Where index value starts from 0 to n-1, n is the length of the array.</li>
              </ul>
              <h3 className="mb-3">Advantages</h3>
              <ul>
                <li>Arrays are used to store multiple values in a single variable.</li>
                <li>Code optimization.</li>
                <li>Random access.</li>
              </ul>
              <h3 className="mb-3">Disadvantages</h3>
              <ul>
                <li>Fixed size.</li>
              </ul>
              <h4 className="mb-3">Ways to create an array:</h4>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Array Creation</h3>
                <pre className="mb-3"><code>{`// Literal syntax
let arr = [10, 20, 30];
console.log(arr[0]); // 10

// Using new keyword
let arr = new Array(10, 20, 30);

// Using constructor
let arr = new Array("John", "Jane", "Doe");`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Array Methods</h3>
                <pre className="mb-3"><code>{`let arr = [10, 20, 30, 40, 50];

arr.push(60); // Add to end
arr.pop(); // Remove from end
arr.unshift(0); // Add to beginning
arr.shift(); // Remove from beginning
arr.splice(2, 1); // Remove 1 item at index 2
arr.length; // Get length
arr.indexOf(30); // Find index
arr.lastIndexOf(30); // Find last index

// Advanced methods
arr.map(x => x * 2); // [20, 40, 60, 80, 100]
arr.filter(x => x > 30); // [40, 50]
arr.forEach(x => console.log(x)); // Logs each element`}</code></pre>
              </div>
            </section>

            <section id="strings" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-type"></i> Strings in JavaScript</h2>
              <ul>
                <li>String is a collection of characters(alphabets,numbers,symbols) stored within ' ' or " ".</li>
                <li>It is used to store the text data.</li>
              </ul>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> String Creation</h3>
                <pre className="mb-3"><code>{`// Literal syntax
let str = "Hello World";

// Using new keyword
let str = new String("Hello World");`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> String Methods</h3>
                <pre className="mb-3"><code>{`let str = "Hello World";

str.length; // 11
str.charAt(1); // 'e'
str.indexOf('l'); // 2
str.lastIndexOf('l'); // 9
str.substring(0, 5); // "Hello"
str.replace("World", "Everyone"); // "Hello Everyone"
str.split(" "); // ["Hello", "World"]
str.toLowerCase(); // "hello world"
str.toUpperCase(); // "HELLO WORLD"
str.trim(); // Removes whitespace`}</code></pre>
              </div>
            </section>

            <section id="classes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layers"></i> Classes in JavaScript</h2>
              <ul>
                <li>A class is a blueprint or template for creating objects.</li>
                <li>It is used to define the properties(variable) and methods(functions) of an object.</li>
                <li>Class name follows PascalCase.</li>
              </ul>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Class Definition</h3>
                <pre className="mb-3"><code>{`// syntax
class ClassName {
  constructor(parameters) {
    // statements
  }
  
  methods() {
    // statements
  }
}`}</code></pre>
                <pre className="mb-3"><code>{`//Example
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  display() {
    console.log("Name: "+ this.name+", Age: "+this.age);
  }
}

let student = new Student("John", 20);
student.display();`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h3"><i className="bi bi-2-circle"></i> Inheritance</h3>
                <p>All the properties and methods will be acquired from the parent class to child class.</p>
                <h3 className="h4">Parent Class</h3>
                <p>The class which gives properties and methods is called parent class, base class, super class.</p>
                <h3 className="h4">Child Class</h3>
                <p>The class which acquires the properties and methods is called child class, derived class, sub class, extended class.</p>
                <pre className="mb-3"><code>{`// Syntax
class ParentClass {
    constructor(){
      // code to be executed when an object is created
    }
    methods(){
      // code to be executed when the method is called
    }
}
class ChildClass extends ParentClass{
    constructor(){
      super();
      // code to be executed when an object is created
    }
    methods(){
      // code to be executed when the method is called
    }
}`}</code></pre>
                <pre className="mb-3"><code>{`// Example
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log("Hello "+this.name);
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  
  study() {
    console.log(this.name +" is studying");
  }
}

let student = new Student("John", 20);
student.greet(); // "Hello John"
student.study(); // "John is studying"`}</code></pre>
              </div>
            </section>

            <section id="dom" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> DOM (Document Object Model)</h2>
              <ul>
                <li>DOM stands for Document Object Model.</li>
                <li>It is a programming interface for HTML and XML documents.</li>
                <li>It defines the logical structure of documents and the way a document is accessed and manipulated.</li>
              </ul>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> DOM Methods</h3>
                <pre className="mb-3"><code>{`document.write("Content"); // Write to document
document.getElementById("id").innerHTML = "Content";
document.getElementsByClassName("class")[0].innerHTML = "Content";
document.getElementsByTagName("h1")[0].innerHTML = "Content";
document.querySelector("#id").style.color = "red";`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> DOM Events</h3>
                <pre className="mb-3"><code>{`// Mouse Events
<button onclick="alert('Clicked')">Click</button>
<button onmouseover="alert('Hovered')">Hover</button>
<button onmouseout="alert('Mouse Out')">Mouse Out</button>
<button ondblclick="alert('Double clicked')">Double Click</button>
<button oncontextmenu="alert('Right clicked')">Right Click</button>

// Keyboard Events
<input onkeyup="alert('Key Up')">
<input onkeydown="alert('Key Down')">
<input onkeypress="alert('Key pressed')">

// Form Events
<form onsubmit="alert('Submitted')" onreset="alert('Resetted')">
  <input type="submit">
  <input type="reset">
</form>

// Window Events
<body onload="alert('Page loaded')">`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> Event Listeners</h3>
                <pre className="mb-3"><code>{`document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked");
});`}</code></pre>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> Query Selector</h3>
                <pre className="mb-3"><code>{`<h2 id="query">Query selector</h2>
document.querySelector("#query").style.color="gold";`}</code></pre>
              </div>
            </section>

            <section id="bom" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-window"></i> BOM (Browser Object Model)</h2>
              <ul>
                <li>BOM stands for Browser Object Model.</li>
                <li>It is a programming interface for the browser.</li>
                <li>It is used to interact with the browser's window and its methods and properties.</li>
              </ul>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> Window Methods</h3>
                <pre className="mb-3"><code>{`window.alert("Alert message");
console.log(window.innerHeight); // Viewport height
console.log(window.innerWidth); // Viewport width`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Screen Methods</h3>
                <pre className="mb-3"><code>{`console.log(screen.width); // Screen width
console.log(screen.height); // Screen height`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> History Methods</h3>
                <pre className="mb-3"><code>{`history.back(); // Go back
history.forward(); // Go forward`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> Location Methods</h3>
                <pre className="mb-3"><code>{`console.log(location.href); // Current URL
console.log(location.host); // Hostname and port
console.log(location.pathname); // Path
console.log(location.protocol); // Protocol (http: or https:)
console.log(location.port); // Port`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> Timing Events</h3>
                <pre className="mb-3"><code>{`// setTimeout - execute once after delay
<button id="btn">Click By ID</button>
<p id="show"></p>
document.getElementById("btn").onclick = ()=>{
    setTimeout(()=>{
        document.getElementById("show").innerHTML=Date();
    },1000);
}

// setInterval - execute repeatedly
let timer = setInterval(function() {
  console.log(new Date());
}, 1000);

// To stop:
clearInterval(timer);`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>JavaScript Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default JavascriptNotes;