import React from 'react';

function TypeScriptNotes() {
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
            background-color: #f8f9fa;
          }
        `}
      </style>

      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-tsx"></i> TypeScript Notes</h1>
          <p className="lead">Your Comprehensive Guide to TypeScript Programming</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#variables"><i className="bi bi-code-square"></i> Variables & Types</a>
              <a className="nav-link" href="#functions"><i className="bi bi-file-earmark-code"></i> Functions</a>
              <a className="nav-link" href="#arrays"><i className="bi bi-list-ul"></i> Arrays</a>
              <a className="nav-link" href="#enums"><i className="bi bi-collection"></i> Enums</a>
              <a className="nav-link" href="#typecasting"><i className="bi bi-arrow-left-right"></i> Type Casting</a>
              <a className="nav-link" href="#interfaces"><i className="bi bi-file-earmark-text"></i> Interfaces</a>
              <a className="nav-link" href="#classes"><i className="bi bi-file-earmark-ruled"></i> Classes</a>
              <a className="nav-link" href="#inheritance"><i className="bi bi-diagram-2"></i> Inheritance</a>
              <a className="nav-link" href="#polymorphism"><i className="bi bi-shapes"></i> Polymorphism</a>
              <a className="nav-link" href="#abstraction"><i className="bi bi-eye-slash"></i> Abstraction</a>
              <a className="nav-link" href="#encapsulation"><i className="bi bi-shield-lock"></i> Encapsulation</a>
              <a className="nav-link" href="#decorators"><i className="bi bi-tag"></i> Decorators</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to TypeScript</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is TypeScript?</h3>
                <ul>
                  <li>TypeScript is a <strong>superset of JavaScript</strong></li>
                  <li>Developed and maintained by <strong>Microsoft</strong></li>
                  <li>Adds <strong>static typing</strong>, <strong>interfaces</strong>, and <strong>advanced tooling</strong> on top of JavaScript</li>
                  <li>TypeScript files use the extension <code>.ts</code></li>
                </ul>
                <pre className="mb-3"><code>{`// Example
let name: string = "Mugil";
console.log(name);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check-circle"></i> Why Use TypeScript?</h3>
                <ol>
                  <li><strong>Type Safety</strong> – Detect errors during development (compile-time)</li>
                  <li><strong>Better IntelliSense</strong> – Code completion, suggestions, and tooltips</li>
                  <li><strong>Improved Readability</strong> – Makes code more self-documented</li>
                  <li><strong>Scalability</strong> – Useful for large-scale applications</li>
                  <li><strong>Early Bug Detection</strong> – Prevents runtime errors by checking types</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left-right"></i> JavaScript vs TypeScript</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>JavaScript</th>
                      <th>TypeScript</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Typing</td>
                      <td>Dynamic (runtime)</td>
                      <td>Static (compile-time)</td>
                    </tr>
                    <tr>
                      <td>Error Detection</td>
                      <td>At runtime</td>
                      <td>At compile-time</td>
                    </tr>
                    <tr>
                      <td>File Extension</td>
                      <td>.js</td>
                      <td>.ts</td>
                    </tr>
                    <tr>
                      <td>Browser Support</td>
                      <td>Directly supported</td>
                      <td>Needs compilation to JS</td>
                    </tr>
                    <tr>
                      <td>IDE Support</td>
                      <td>Basic</td>
                      <td>Advanced with IntelliSense</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> How TypeScript Works?</h3>
                <ul>
                  <li>TypeScript is <strong>compiled</strong> into JavaScript using the <code>tsc</code> (TypeScript Compiler)</li>
                  <li>Browsers can't run TypeScript directly</li>
                </ul>
                <pre className="mb-3"><code>{`# Example compilation
tsc file.ts
# Output: file.js`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-download"></i> Installation</h3>
                <pre className="mb-3"><code>{`npm install -g typescript
tsc --version`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-play-circle"></i> Compile & Run</h3>
                <ol>
                  <li>Write code in <code>.ts</code> file</li>
                  <li>Compile: <code>tsc app.ts</code></li>
                  <li>Run: <code>node app.js</code></li>
                </ol>
              </div>
            </section>

            <section id="variables" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Variables and Basic Types</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-box"></i> What is a Variable?</h3>
                <p>A <strong>variable</strong> is a container which is used to store values. TypeScript variables are similar to JavaScript but allow <strong>type annotations</strong>.</p>
                <pre className="mb-3"><code>{`// Syntax to Declare a Variable
keyword variableName: type = value;

// Examples:
let name: string = "Mugil";
const age: number = 22;
var isOnline: boolean = true;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-key"></i> Variable Declaration Keywords</h3>
                <div className="row">
                  <div className="col-md-4">
                    <h4 className="h5"><i className="bi bi-1-circle"></i> let</h4>
                    <ul>
                      <li>Introduced in ES6</li>
                      <li>Block-scoped</li>
                      <li>Preferred for most use cases</li>
                    </ul>
                    <pre className="mb-2"><code>{`let city: string = "Chennai";`}</code></pre>
                  </div>
                  <div className="col-md-4">
                    <h4 className="h5"><i className="bi bi-2-circle"></i> const</h4>
                    <ul>
                      <li>Value cannot be changed (constant)</li>
                      <li>Block-scoped</li>
                      <li>Must be initialized at declaration</li>
                    </ul>
                    <pre className="mb-2"><code>{`const pi: number = 3.14;`}</code></pre>
                  </div>
                  <div className="col-md-4">
                    <h4 className="h5"><i className="bi bi-3-circle"></i> var</h4>
                    <ul>
                      <li>Old way (before ES6)</li>
                      <li>Function-scoped (not recommended)</li>
                      <li>Can be re-declared and updated</li>
                    </ul>
                    <pre className="mb-2"><code>{`var country: string = "India";`}</code></pre>
                  </div>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-type"></i> Type Annotation vs Inference</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-pen"></i> Explicit Type Annotation</h4>
                    <pre className="mb-2"><code>{`let studentName: string = "Mugilvannan";
let marks: number = 85;
let isPassed: boolean = true;`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-magic"></i> Type Inference</h4>
                    <pre className="mb-2"><code>{`let status = "active"; // inferred as string
// status = 123; ✗ Error`}</code></pre>
                  </div>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-check"></i> Basic Data Types</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-123"></i> number</h4>
                    <p>Represents both integers and floating-point numbers</p>
                    <pre className="mb-2"><code>{`let age: number = 25;
let price: number = 99.99;`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-text-left"></i> string</h4>
                    <p>Used for text data</p>
                    <pre className="mb-2"><code>{`let firstName: string = "Mugil";
let greeting: string = \`Hello, \${firstName}\`;`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-toggle-on"></i> boolean</h4>
                    <p>Represents true or false values</p>
                    <pre className="mb-2"><code>{`let isLoggedIn: boolean = true;
let isAdmin: boolean = false;`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-question-diamond"></i> any</h4>
                    <p>Allows any type of value (not recommended unless necessary)</p>
                    <pre className="mb-2"><code>{`let data: any = 5;
data = "Now it's a string";
data = true;`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-exclamation-diamond"></i> unknown</h4>
                    <p>Like any but safer — must check type before use</p>
                    <pre className="mb-2"><code>{`let input: unknown = "Hello";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-x-circle"></i> void</h4>
                    <p>Used for functions that do not return a value</p>
                    <pre className="mb-2"><code>{`function logMessage(): void {
    console.log("This function returns nothing");
}`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-slash-circle"></i> null & undefined</h4>
                    <p>Can be assigned to variables, depending on settings</p>
                    <pre className="mb-2"><code>{`let u: undefined = undefined;
let n: null = null;`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-collection"></i> Arrays</h4>
                    <p>Collections of items of the same type</p>
                    <pre className="mb-2"><code>{`// Syntax 1
let numbers: number[] = [1, 2, 3];

// Syntax 2
let fruits: Array<string> = ["apple", "banana"];`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-list-ol"></i> Tuples</h4>
                    <p>Fixed-length array with specific types</p>
                    <pre className="mb-2"><code>{`let person: [string, number] = ["Mugil", 23];`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            <section id="functions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> Functions in TypeScript</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is a Function?</h3>
                <p>A <strong>function</strong> is a reusable block of code that performs a specific task. In TypeScript, we can define <strong>parameter types</strong> and <strong>return types</strong> to ensure type safety.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-syntax"></i> Basic Syntax</h3>
                <pre className="mb-3"><code>{`function functionName(param1: type, param2: type): returnType {
    // function body
    return value;
}`}</code></pre>
                <pre className="mb-3"><code>{`// Example
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 3)); // Output: 8`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-x-circle"></i> Function Without Return (void)</h3>
                <pre className="mb-3"><code>{`function greet(name: string): void {
    console.log(\`Hello, \${name}\`);
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> Optional Parameters</h3>
                <p>Use <code>?</code> to mark a parameter as optional</p>
                <pre className="mb-3"><code>{`function fullName(first: string, last?: string): string {
    return last ? \`\${first} \${last}\` : first;
}

console.log(fullName("Mugil")); // Mugil
console.log(fullName("Mugil", "Vannan")); // Mugil Vannan`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-sliders"></i> Default Parameters</h3>
                <p>Provide default value to parameters</p>
                <pre className="mb-3"><code>{`function greetUser(name: string = "Guest"): void {
    console.log(\`Welcome, \${name}\`);
}

greetUser(); // Welcome, Guest
greetUser("Mugil"); // Welcome, Mugil`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right"></i> Arrow Functions (ES6 Style)</h3>
                <pre className="mb-3"><code>{`const multiply = (x: number, y: number): number => x * y;
console.log(multiply(4, 3)); // Output: 12`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-repeat"></i> Anonymous Functions & Callbacks</h3>
                <pre className="mb-3"><code>{`let sayHello = function(name: string): string {
    return \`Hello, \${name}\`;
};

function callMeBack(callback: (msg: string) => void) {
    callback("Hi Mugil!");
}`}</code></pre>
              </div>
            </section>

            <section id="arrays" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-list-ul"></i> Arrays in TypeScript</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is an Array?</h3>
                <p>An array is a collection of items of the same type stored in a single variable. TypeScript allows you to define the type of array elements for better type safety.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-syntax"></i> Syntax</h3>
                <pre className="mb-3"><code>{`let arrayName: type[] = [item1, item2, ...];
// OR
let arrayName: Array<type> = [item1, item2, ...];`}</code></pre>
                <pre className="mb-3"><code>{`// Examples
let numbers: number[] = [10, 20, 30];
let names: Array<string> = ["Mugil", "Ajay", "Ravi"];

// Array with Mixed Types (Using Union)
let mixed: (number | string)[] = [1, "two", 3, "four"];

// Array of Objects
let students: { name: string; age: number }[] = [
    { name: "Mugil", age: 22 },
    { name: "Harish", age: 23 }
];`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-collection"></i> Accessing & Modifying Array Elements</h3>
                <pre className="mb-3"><code>{`let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits[0]); // apple

fruits[1] = "mango"; // Change banana to mango
console.log(fruits); // ["apple", "mango", "orange"]`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-tools"></i> Useful Array Methods</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>push()</code></td>
                      <td>Add item to end</td>
                      <td><code>arr.push(10)</code></td>
                    </tr>
                    <tr>
                      <td><code>pop()</code></td>
                      <td>Remove item from end</td>
                      <td><code>arr.pop()</code></td>
                    </tr>
                    <tr>
                      <td><code>shift()</code></td>
                      <td>Remove first element</td>
                      <td><code>arr.shift()</code></td>
                    </tr>
                    <tr>
                      <td><code>unshift()</code></td>
                      <td>Add item to beginning</td>
                      <td><code>arr.unshift(5)</code></td>
                    </tr>
                    <tr>
                      <td><code>map()</code></td>
                      <td>Transform each item</td>
                      <td><code>{`arr.map(x => x * 2)`}</code></td>
                    </tr>
                    <tr>
                      <td><code>filter()</code></td>
                      <td>Filter items by condition</td>
                      <td><code>{`arr.filter(x => x > 10)`}</code></td>
                    </tr>
                    <tr>
                      <td><code>forEach()</code></td>
                      <td>Run code for each item</td>
                      <td><code>{`arr.forEach(x => console.log(x))`}</code></td>
                    </tr>
                    <tr>
                      <td><code>length</code></td>
                      <td>Get array length</td>
                      <td><code>arr.length</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-repeat"></i> Looping Through Arrays</h3>
                <pre className="mb-3"><code>{`let scores: number[] = [85, 90, 75];

for (let score of scores) {
    console.log(score);
}`}</code></pre>
              </div>
            </section>

            <section id="enums" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-collection"></i> Enums in TypeScript</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is an Enum?</h3>
                <p>An Enum (short for Enumeration) is a special data type that allows you to define a set of named constants. Useful when you want to represent a fixed set of values like days, roles, statuses, etc.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-123"></i> Numeric Enums (Default)</h3>
                <p>By default, the first value starts from 0 and auto-increments</p>
                <pre className="mb-3"><code>{`enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right // 3
}

let move: Direction = Direction.Left;
console.log(move); // 2`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-sliders"></i> Custom Numeric Enums</h3>
                <p>You can assign custom starting values</p>
                <pre className="mb-3"><code>{`enum Status {
    Pending = 1,
    InProgress = 3,
    Completed = 5
}

console.log(Status.InProgress); // 3`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-text-left"></i> String Enums</h3>
                <p>Use when you want exact string values instead of numbers</p>
                <pre className="mb-3"><code>{`enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

let userRole: Role = Role.User;
console.log(userRole); // "USER"`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-collection"></i> Heterogeneous Enums</h3>
                <p>Mixing string and number values (not recommended)</p>
                <pre className="mb-3"><code>{`enum Mixed {
    Yes = 1,
    No = "NO"
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightning"></i> Const Enums</h3>
                <p>Use <code>const enum</code> for performance. Gets fully inlined during compilation (no enum object created).</p>
                <pre className="mb-3"><code>{`const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;
console.log(c); // 1`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> Enum with Functions</h3>
                <pre className="mb-3"><code>{`enum Priority {
    Low = 1,
    Medium,
    High
}

function logPriority(p: Priority) {
    console.log("Priority level:", p);
}

logPriority(Priority.High); // Priority level: 3`}</code></pre>
              </div>
            </section>

            <section id="typecasting" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-left-right"></i> Type Casting / Type Assertion</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is Type Casting?</h3>
                <p>Type Casting or Type Assertion in TypeScript is a way to tell the compiler the type of a variable when you're sure of it — even if TypeScript can't detect it automatically. It's like saying: "Trust me, I know the type!"</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-syntax"></i> Syntax</h3>
                <p>There are two ways to perform type assertions:</p>
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-chevron-right"></i> Using angle brackets (&lt;&gt;)</h4>
                    <pre className="mb-2"><code>{`let someValue: any = "Hello TypeScript";
let strLength: number = (<string>someValue).length;
console.log(strLength); // 16`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-as"></i> Using as keyword (Recommended)</h4>
                    <pre className="mb-2"><code>{`let someValue: any = "Hello";
let strLength: number = (someValue as string).length;
console.log(strLength); // 5`}</code></pre>
                  </div>
                </div>
                <div className="alert alert-warning mt-3">
                  <strong>Note:</strong> You can <strong>only use as syntax</strong> in <strong>TSX/React</strong> files. Use type assertion only when you're confident about the value type.
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-input-cursor-text"></i> Example with DOM Elements</h3>
                <pre className="mb-3"><code>{`let inputElement = document.getElementById("username") as HTMLInputElement;
inputElement.value = "Mugil";`}</code></pre>
                <p>Here we assert that <code>getElementById</code> will return an <strong>HTMLInputElement</strong>, not just a generic HTMLElement.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-exclamation-triangle"></i> Example with any Type</h3>
                <pre className="mb-3"><code>{`let data: any = "100";
let numericData: number = <number><unknown>data;
// First cast to unknown, then to number — safe way`}</code></pre>
              </div>
            </section>

            <section id="interfaces" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-text"></i> Interfaces in TypeScript</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is an Interface?</h3>
                <p>An <strong>Interface</strong> defines the <strong>structure of an object</strong> — what properties and methods it should have. It acts like a <strong>contract</strong> for objects and classes. It doesn't contain actual implementation — only structure.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-syntax"></i> Basic Syntax</h3>
                <pre className="mb-3"><code>{`interface Person {
    name: string;
    age: number;
}

let user: Person = {
    name: "Mugil",
    age: 22
};`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question"></i> Optional Properties (?)</h3>
                <p>You can make properties optional using <code>?</code></p>
                <pre className="mb-3"><code>{`interface Student {
    name: string;
    grade?: string;
}

let stu: Student = {
    name: "Ajay"
};`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> Interface with Methods</h3>
                <pre className="mb-3"><code>{`interface Calculator {
    add(a: number, b: number): number;
    sub(a: number, b: number): number;
}

let calc: Calculator = {
    add: (x, y) => x + y,
    sub: (x, y) => x - y
};

console.log(calc.add(5, 3)); // 8`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-2"></i> Interface Inheritance (extends)</h3>
                <pre className="mb-3"><code>{`interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

let pet: Dog = {
    name: "Tommy",
    breed: "Labrador"
};`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-ruled"></i> Implement Interface in Class</h3>
                <pre className="mb-3"><code>{`interface Shape {
    area(): number;
}

class Circle implements Shape {
    radius: number;
    
    constructor(r: number) {
        this.radius = r;
    }
    
    area(): number {
        return 3.14 * this.radius * this.radius;
    }
}

let c = new Circle(5);
console.log(c.area()); // 78.5`}</code></pre>
              </div>
            </section>

            <section id="classes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-ruled"></i> Classes in TypeScript</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is a Class?</h3>
                <p>A <strong>class</strong> is a blueprint for creating objects with shared structure and behavior.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-syntax"></i> Syntax</h3>
                <pre className="mb-3"><code>{`class ClassName {
    property1: type;
    property2: type;

    constructor(param1: type, param2: type) {
        this.property1 = param1;
        this.property2 = param2;
    }

    methodName(): returnType {
        // logic
    }
}`}</code></pre>
                <pre className="mb-3"><code>{`// Example
class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): void {
        console.log(\`Name: \${this.name}, Age: \${this.age}\`);
    }
}

let stu1 = new Student("Mugil", 22);
stu1.display(); // Name: Mugil, Age: 22`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-shield-lock"></i> Access Modifiers</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Modifier</th>
                      <th>Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>public</code></td>
                      <td>Accessible from anywhere (default)</td>
                    </tr>
                    <tr>
                      <td><code>private</code></td>
                      <td>Accessible only within the class</td>
                    </tr>
                    <tr>
                      <td><code>protected</code></td>
                      <td>Accessible in class and subclasses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-box"></i> What is an Object?</h3>
                <p>An object is an instance of a class. It holds actual values for the properties defined in the class.</p>
                <pre className="mb-3"><code>{`// Creating an Object
let objName = new ClassName(args);

// Example
class Car {
    brand: string;
    year: number;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    showDetails(): void {
        console.log(\`\${this.brand} - \${this.year}\`);
    }
}

let myCar = new Car("Toyota", 2020);
myCar.showDetails(); // Toyota - 2020`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> What is a Constructor?</h3>
                <p>A constructor is a special method in a class that is automatically called when an object is created. It is used to initialize the properties of the class.</p>
                <pre className="mb-3"><code>{`// Syntax
class ClassName {
    constructor(param1: type, param2: type) {
        // initialization
    }
}

// Example
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): void {
        console.log(\`Name: \${this.name}, Age: \${this.age}\`);
    }
}

let p1 = new Person("Mugil", 22);
p1.display(); // Name: Mugil, Age: 22`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear-wide-connected"></i> Types of Constructors</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-1-circle"></i> Default Constructor</h4>
                    <p>Constructor with no parameters</p>
                    <pre className="mb-2"><code>{`class Demo {
    constructor() {
        console.log("Default constructor called!");
    }
}

let d = new Demo(); // Output: Default constructor called!`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-2-circle"></i> Parameterized Constructor</h4>
                    <p>Constructor with parameters used to initialize values</p>
                    <pre className="mb-2"><code>{`class Product {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    show() {
        console.log(\`Product: \${this.name}\`);
    }
}

let p = new Product("Phone");
p.show(); // Product: Phone`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            <section id="inheritance" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-2"></i> Inheritance in TypeScript</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is Inheritance?</h3>
                <p>Inheritance is a core concept in OOP that allows a class (child/subclass) to inherit properties and methods from another class (parent/superclass). It promotes code reusability and reduces redundancy.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-up"></i> Parent Class / Superclass</h3>
                <p>A class that shares its properties and methods to another class</p>
                <pre className="mb-3"><code>{`class Animal {
    move() {
        console.log("Animal is moving");
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-down"></i> Child Class / Subclass</h3>
                <p>A class that inherits from the parent class using the <code>extends</code> keyword</p>
                <pre className="mb-3"><code>{`class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-2"></i> Types of Inheritance</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-1-circle"></i> Single Inheritance</h4>
                    <p>One child class inherits from one parent class</p>
                    <pre className="mb-2"><code>{`class Parent {
    greet() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {
    sayName() {
        console.log("I am Child");
    }
}

let obj = new Child();
obj.greet(); // Hello from Parent
obj.sayName(); // I am Child`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-2-circle"></i> Multilevel Inheritance</h4>
                    <p>A class inherits from a class, which itself inherits from another class</p>
                    <pre className="mb-2"><code>{`class GrandParent {
    showGP() {
        console.log("I am Grandparent");
    }
}

class Parent extends GrandParent {
    showP() {
        console.log("I am Parent");
    }
}

class Child extends Parent {
    showC() {
        console.log("I am Child");
    }
}

let obj = new Child();
obj.showGP(); // I am Grandparent
obj.showP(); // I am Parent
obj.showC(); // I am Child`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-3-circle"></i> Multiple Inheritance (via Interface)</h4>
                    <p>One class implements multiple interfaces (TS doesn't support class-to-class multiple inheritance)</p>
                    <pre className="mb-2"><code>{`interface Father {
    skills(): void;
}

interface Mother {
    care(): void;
}

class Child implements Father, Mother {
    skills() {
        console.log("Father's skills inherited");
    }

    care() {
        console.log("Mother's care inherited");
    }
}

let obj = new Child();
obj.skills(); // Father's skills inherited
obj.care(); // Mother's care inherited`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5"><i className="bi bi-4-circle"></i> Hierarchical Inheritance</h4>
                    <p>Multiple child classes inherit from a single parent</p>
                    <pre className="mb-2"><code>{`class Vehicle {
    move() {
        console.log("Vehicle is moving");
    }
}

class Car extends Vehicle {
    speed() {
        console.log("Car speed is 120 km/h");
    }
}

class Bike extends Vehicle {
    type() {
        console.log("Bike type is Sport");
    }
}

let c = new Car();
let b = new Bike();

c.move(); // Vehicle is moving
c.speed(); // Car speed is 120 km/h

b.move(); // Vehicle is moving
b.type(); // Bike type is Sport`}</code></pre>
                  </div>
                  <div className="col-md-12">
                    <h4 className="h5"><i className="bi bi-5-circle"></i> Hybrid Inheritance</h4>
                    <p>Combination of multiple + multilevel + hierarchical using class & interface</p>
                    <pre className="mb-2"><code>{`class Animal {
    sound() {
        console.log("Animal sound");
    }
}

interface Fly {
    fly(): void;
}

interface Swim {
    swim(): void;
}

class Bird extends Animal implements Fly {
    fly() {
        console.log("Bird can fly");
    }
}

class Fish extends Animal implements Swim {
    swim() {
        console.log("Fish can swim");
    }
}

let b = new Bird();
b.sound(); // Animal sound
b.fly(); // Bird can fly

let f = new Fish();
f.sound(); // Animal sound
f.swim(); // Fish can swim`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            <section id="polymorphism" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shapes"></i> Polymorphism in TypeScript</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is Polymorphism?</h3>
                <p>The word Polymorphism means "many forms". In OOP, polymorphism allows one method or function to behave differently based on the object or data it interacts with.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-slash"></i> Types of Polymorphism</h3>
                <ol>
                  <li><strong>Compile-time Polymorphism</strong> (Method Overloading – simulated)</li>
                  <li><strong>Runtime Polymorphism</strong> (Method Overriding using inheritance)</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Compile-time Polymorphism (Method Overloading)</h3>
                <p>Method/function <strong>overloading</strong> – multiple functions with the <strong>same name</strong> but <strong>different parameters</strong>. TypeScript does <strong>not support true overloading</strong> like Java, but we can simulate it.</p>
                <pre className="mb-3"><code>{`// Function Overloading
function greet(name: string): void;
function greet(age: number): void;
function greet(value: any): void {
    if (typeof value === "string") {
        console.log("Hello, " + value);
    } else if (typeof value === "number") {
        console.log("You are " + value + " years old");
    }
}

greet("Mugil");    // Hello, Mugil
greet(22);         // You are 22 years old

// Method Overloading (Class)
class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }
}

let calc = new Calculator();
console.log(calc.add(10, 5));    // 15
console.log(calc.add("Hi ", "Mugil")); // Hi Mugil`}</code></pre>
                <p>This is compile-time polymorphism — resolved during compilation.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-repeat"></i> Runtime Polymorphism (Method Overriding)</h3>
                <p><strong>Method overriding</strong> — child class provides a different implementation of a method already defined in parent class. Executed at <strong>runtime</strong> based on the object type.</p>
                <pre className="mb-3"><code>{`class Animal {
    makeSound() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}

let a1: Animal = new Dog();
let a2: Animal = new Cat();

a1.makeSound(); // Dog barks
a2.makeSound(); // Cat meows`}</code></pre>
              </div>
            </section>

            <section id="abstraction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-eye-slash"></i> Abstraction in TypeScript</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is Abstraction?</h3>
                <p>Abstraction is the process of hiding internal implementation details and showing only the necessary features to the user. It helps in reducing complexity and improving security by exposing only what is required.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> How to Achieve Abstraction in TypeScript?</h3>
                <p>TypeScript provides two ways to achieve abstraction:</p>
                <ol>
                  <li>Using abstract classes</li>
                  <li>Using interfaces</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-ruled"></i> Using abstract class</h3>
                <p>An abstract class:</p>
                <ul>
                  <li>Cannot be instantiated directly</li>
                  <li>May have both <strong>abstract</strong> and <strong>concrete</strong> (normal) methods</li>
                  <li>Abstract methods must be implemented in child classes</li>
                </ul>
                <pre className="mb-3"><code>{`// Syntax
abstract class Shape {
    abstract area(): number; // Abstract method

    display(): void {
        console.log("This is a shape");
    }
}

// Example
abstract class Shape {
    abstract area(): number;

    display(): void {
        console.log("Shape class called");
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

let c = new Circle(5);
c.display(); // Shape class called
console.log(c.area()); // 78.5398...

// Shape is abstract, so we can't create new Shape(), only its child (Circle)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-text"></i> Using interface for abstraction</h3>
                <p>An interface:</p>
                <ul>
                  <li>Only contains method declarations (no implementation)</li>
                  <li>Any class that implements it must provide the method logic</li>
                  <li>No constructor, no property initialization</li>
                </ul>
                <pre className="mb-3"><code>{`// Example
interface Vehicle {
    start(): void;
}

class Bike implements Vehicle {
    start(): void {
        console.log("Bike started");
    }
}

let b = new Bike();
b.start(); // Bike started`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left-right"></i> Abstract Class vs Interface</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Abstract Class</th>
                      <th>Interface</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Can have methods</td>
                      <td>Yes (abstract + normal)</td>
                      <td>Only method declarations</td>
                    </tr>
                    <tr>
                      <td>Constructor</td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Property init</td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Multiple inheritance</td>
                      <td>No (only one class)</td>
                      <td>Yes (multiple interfaces)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="encapsulation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> Encapsulation in TypeScript</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is Encapsulation?</h3>
                <ul>
                  <li><strong>Encapsulation means binding data and methods</strong> that operate on the data into a single unit (i.e., class), and <strong>restricting direct access</strong> to some of the object's components.</li>
                  <li>It protects the internal state of an object from unauthorized access.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-key"></i> Key Idea:</h3>
                <ul>
                  <li><strong>Private properties</strong> can't be accessed directly from outside</li>
                  <li>Access them through <strong>getter</strong> and <strong>setter</strong> methods</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> How to Achieve Encapsulation?</h3>
                <ol>
                  <li>Use <code>private</code> or <code>protected</code> keywords for variables</li>
                  <li>Use <code>get</code> and <code>set</code> methods to access/update them</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Example with getter and setter</h3>
                <pre className="mb-3"><code>{`class Student {
    private _name: string = "";

    // Setter method to update value
    set name(value: string) {
        this._name = value;
    }

    // Getter method to read value
    get name(): string {
        return this._name;
    }
}

let s = new Student();

s.name = "Mugil";    // Set value using setter
console.log(s.name);  // Get value using getter => Mugil`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-exclamation-triangle"></i> Without Getter/Setter (Invalid Access)</h3>
                <pre className="mb-3"><code>{`s._name = "Mugil"; // Error: Property '_name' is private`}</code></pre>
                <p>That's the power of encapsulation – data is <strong>safe and controlled</strong>.</p>
              </div>
            </section>

            <section id="decorators" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-tag"></i> Decorators in TypeScript</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is a Decorator?</h3>
                <ul>
                  <li>A <strong>Decorator</strong> is a <strong>special function</strong> that can be <strong>attached to a class or class member</strong> (like properties, methods, accessors, etc.) to modify or enhance its behavior at runtime.</li>
                  <li>It's like putting a "tag" on a class or method that adds extra functionality.</li>
                  <li>It starts with <code>@</code> symbol (like <code>@Component</code>, <code>@Injectable</code> in Angular).</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-check"></i> Types of Decorators</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Applies To</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Class Decorator</td>
                      <td>Classes</td>
                    </tr>
                    <tr>
                      <td>Property Decorator</td>
                      <td>Class Properties</td>
                    </tr>
                    <tr>
                      <td>Method Decorator</td>
                      <td>Class Methods</td>
                    </tr>
                    <tr>
                      <td>Parameter Decorator</td>
                      <td>Method Parameters</td>
                    </tr>
                    <tr>
                      <td>Accessor Decorator</td>
                      <td>Getter/Setter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Class Decorator Example</h3>
                <pre className="mb-3"><code>{`// Step 1: Create a decorator function
function Logger(constructor: Function) {
    console.log("Class is being created: ", constructor.name);
}

// Step 2: Apply it to a class using @Logger
@Logger
class Person {
    constructor() {
        console.log("Person object created");
    }
}

const p1 = new Person();

// Output:
// Class is being created: Person
// Person object created`}</code></pre>
                <p>The Logger decorator executes when the class is defined, not when it's instantiated!</p>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>TypeScript Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default TypeScriptNotes;