import React from 'react';

function CNotes() {
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

      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-c"></i> C Programming Notes</h1>
          <p className="lead">Comprehensive Guide to C Programming Language</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#environment"><i className="bi bi-gear"></i> Environment Setup</a>
              <a className="nav-link" href="#structure"><i className="bi bi-file-code"></i> Structure</a>
              <a className="nav-link" href="#functions"><i className="bi bi-boxes"></i> Functions</a>
              <a className="nav-link" href="#datatypes"><i className="bi bi-card-text"></i> Data Types</a>
              <a className="nav-link" href="#variables"><i className="bi bi-tag"></i> Variables</a>
              <a className="nav-link" href="#operators"><i className="bi bi-calculator"></i> Operators</a>
              <a className="nav-link" href="#conditionals"><i className="bi bi-diagram-2"></i> Conditionals</a>
              <a className="nav-link" href="#loops"><i className="bi bi-arrow-repeat"></i> Loops</a>
              <a className="nav-link" href="#arrays"><i className="bi bi-collection"></i> Arrays</a>
              <a className="nav-link" href="#strings"><i className="bi bi-textarea-t"></i> Strings</a>
              <a className="nav-link" href="#pointers"><i className="bi bi-cursor"></i> Pointers</a>
              <a className="nav-link" href="#structures"><i className="bi bi-box"></i> Structures</a>
              <a className="nav-link" href="#file"><i className="bi bi-file-earmark"></i> File Handling</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to C Programming</h2>
              
              <div className="property-card">
                <h3 className="h4">What is C programming?</h3>
                <ul>
                  <li>It is a high-level procedural oriented programming language used to create system applications</li>
                  <li>Developed by Dennis Ritchie in 1972 at Bell Labs</li>
                  <li>Considered as the base for other programming languages</li>
                  <li>Often called the "mother language" of programming</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why learn C?</h3>
                <ul>
                  <li>C is very fast compared to other programming languages</li>
                  <li>Provides low-level access to memory</li>
                  <li>Forms the basis for understanding more complex languages</li>
                  <li>Knowledge of C makes learning other languages like Python, C++, Java easier</li>
                  <li>Used extensively in system programming, embedded systems, and operating systems</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Difference between C & C++</h3>
                <ul>
                  <li>C++ is an extension of C with object-oriented features</li>
                  <li>C++ supports classes and objects while C does not</li>
                  <li>C++ has function overloading and operator overloading which C lacks</li>
                  <li>C++ supports exception handling while C uses traditional error handling</li>
                  <li>C++ has namespaces while C does not</li>
                </ul>
              </div>
            </section>

            <section id="environment" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Environment Setup</h2>
              
              <div className="property-card">
                <h3 className="h4">Steps to set up C environment</h3>
                <ol>
                  <li>Install an IDE (Integrated Development Environment)</li>
                  <li>Download Code::Blocks (popular and free)</li>
                  <li>Install the mingw-setup.exe file which includes the GCC compiler</li>
                  <li>Configure the IDE to use the GCC compiler</li>
                  <li>Create a new C project and start coding</li>
                </ol>
              </div>
            </section>

            <section id="structure" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-code"></i> Basic Structure of C Program</h2>
              
              <div className="property-card">
                <h3 className="h4">Standard Structure</h3>
                <pre><code>{`#include <stdio.h>   // Standard input/output library
#include <stdlib.h>  // Standard library

// Main function - program execution starts here
int main() {
    // Your code goes here
    printf("Hello, World!"); // Print statement
    return 0; // Indicates successful execution
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Explanation</h3>
                <ul>
                  <li><code>#include</code> directives tell the compiler to include header files</li>
                  <li><code>stdio.h</code> contains standard input/output functions like printf(), scanf()</li>
                  <li><code>stdlib.h</code> contains general utilities like memory allocation</li>
                  <li><code>main()</code> is the entry point of every C program</li>
                  <li><code>return 0</code> indicates successful program execution</li>
                </ul>
              </div>
            </section>

            <section id="functions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-boxes"></i> Functions in C</h2>
              
              <div className="property-card">
                <h3 className="h4">What are Functions?</h3>
                <ul>
                  <li>A block of code that performs a specific task</li>
                  <li>Executed when called from another function</li>
                  <li>Helps in modular programming and code reusability</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Types of Functions</h3>
                <h4 className="h5 mt-3">1. Predefined Functions (Library Functions)</h4>
                <ul>
                  <li><code>main()</code> - Entry point of program execution</li>
                  <li><code>printf()</code> - Outputs formatted text to console</li>
                  <li><code>scanf()</code> - Reads formatted input from console</li>
                  <li><code>strlen()</code> - Returns length of string</li>
                  <li><code>sqrt()</code> - Calculates square root</li>
                </ul>
                
                <h4 className="h5 mt-3">2. User-defined Functions</h4>
                <pre><code>{`// Function declaration
return_type function_name(parameters);

// Function definition
return_type function_name(parameters) {
    // Function body
    return value; // if return_type is not void
}

// Function call
function_name(arguments);`}</code></pre>
                
                <h5 className="h6 mt-3">Example:</h5>
                <pre><code>{`#include <stdio.h>

// Function declaration
void greet();

int main() {
    greet(); // Function call
    return 0;
}

// Function definition
void greet() {
    printf("Hello, World!");
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Function Parameters and Return Values</h3>
                <pre><code>{`#include <stdio.h>

// Function with parameters and return value
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3); // Passing arguments
    printf("Sum: %d", result);
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="datatypes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-card-text"></i> Data Types in C</h2>
              
              <div className="property-card">
                <h3 className="h4">Classification of Data Types</h3>
                <ul>
                  <li><strong>Primitive Data Types:</strong> Basic types provided by the language</li>
                  <li><strong>Derived Data Types:</strong> Derived from primitive types (arrays, pointers, etc.)</li>
                  <li><strong>User-defined Data Types:</strong> Created by the programmer (structures, unions, enums)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Primitive Data Types</h3>
                
                <h4 className="h5">Integer Types</h4>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Size (bytes)</th>
                      <th>Range</th>
                      <th>Format Specifier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>short int</code></td>
                      <td>2</td>
                      <td>-32,768 to 32,767</td>
                      <td><code>%hd</code></td>
                    </tr>
                    <tr>
                      <td><code>int</code></td>
                      <td>4</td>
                      <td>-2,147,483,648 to 2,147,483,647</td>
                      <td><code>%d</code></td>
                    </tr>
                    <tr>
                      <td><code>long int</code></td>
                      <td>4</td>
                      <td>-2,147,483,648 to 2,147,483,647</td>
                      <td><code>%ld</code></td>
                    </tr>
                    <tr>
                      <td><code>unsigned int</code></td>
                      <td>4</td>
                      <td>0 to 4,294,967,295</td>
                      <td><code>%u</code></td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="h5 mt-3">Floating Point Types</h4>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Size (bytes)</th>
                      <th>Precision</th>
                      <th>Format Specifier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>float</code></td>
                      <td>4</td>
                      <td>6-7 decimal digits</td>
                      <td><code>%f</code></td>
                    </tr>
                    <tr>
                      <td><code>double</code></td>
                      <td>8</td>
                      <td>15 decimal digits</td>
                      <td><code>%lf</code></td>
                    </tr>
                    <tr>
                      <td><code>long double</code></td>
                      <td>10</td>
                      <td>19 decimal digits</td>
                      <td><code>%Lf</code></td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="h5 mt-3">Character Type</h4>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Size (bytes)</th>
                      <th>Range</th>
                      <th>Format Specifier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>char</code></td>
                      <td>1</td>
                      <td>-128 to 127 or 0 to 255</td>
                      <td><code>%c</code></td>
                    </tr>
                    <tr>
                      <td><code>unsigned char</code></td>
                      <td>1</td>
                      <td>0 to 255</td>
                      <td><code>%c</code></td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="h5 mt-3">Boolean Type</h4>
                <p>Requires <code>#include &lt;stdbool.h&gt;</code></p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Size</th>
                      <th>Values</th>
                      <th>Format Specifier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>bool</code></td>
                      <td>1 byte</td>
                      <td>true (1) or false (0)</td>
                      <td><code>%d</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="variables" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-tag"></i> Variables in C</h2>
              
              <div className="property-card">
                <h3 className="h4">What are Variables?</h3>
                <ul>
                  <li>Containers for storing data values</li>
                  <li>Must be declared before use</li>
                  <li>Have a specific type that determines size and layout</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Variable Declaration and Initialization</h3>
                <pre><code>{`// Declaration
data_type variable_name;

// Initialization
data_type variable_name = value;

// Examples:
int age = 25;
float price = 19.99;
char grade = 'A';
bool is_active = true;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Variable Scope</h3>
                
                <h4 className="h5">1. Local Variables</h4>
                <ul>
                  <li>Declared inside a function or block</li>
                  <li>Only accessible within that function/block</li>
                  <li>Memory allocated when function is called, deallocated when function exits</li>
                </ul>
                <pre><code>{`#include <stdio.h>

int main() {
    int x = 10; // Local variable
    printf("%d", x);
    return 0;
}`}</code></pre>
                
                <h4 className="h5 mt-3">2. Global Variables</h4>
                <ul>
                  <li>Declared outside all functions</li>
                  <li>Accessible throughout the program</li>
                  <li>Exist for the entire program lifetime</li>
                </ul>
                <pre><code>{`#include <stdio.h>

int globalVar = 50; // Global variable

int main() {
    printf("%d", globalVar);
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Constants</h3>
                <ul>
                  <li>Variables whose values cannot be changed after initialization</li>
                  <li>Declared using <code>const</code> keyword</li>
                </ul>
                <pre><code>{`#include <stdio.h>

int main() {
    const float PI = 3.14159;
    // PI = 3.14; // This would cause an error
    printf("Value of PI: %f", PI);
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="operators" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> Operators in C</h2>
              
              <div className="property-card">
                <h3 className="h4">Types of Operators</h3>
                <ol>
                  <li>Arithmetic Operators</li>
                  <li>Assignment Operators</li>
                  <li>Comparison Operators</li>
                  <li>Logical Operators</li>
                  <li>Bitwise Operators</li>
                  <li>Ternary Operator</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Arithmetic Operators</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>+</code></td>
                      <td>Addition</td>
                      <td><code>10 + 20 = 30</code></td>
                    </tr>
                    <tr>
                      <td><code>-</code></td>
                      <td>Subtraction</td>
                      <td><code>20 - 10 = 10</code></td>
                    </tr>
                    <tr>
                      <td><code>*</code></td>
                      <td>Multiplication</td>
                      <td><code>10 * 20 = 200</code></td>
                    </tr>
                    <tr>
                      <td><code>/</code></td>
                      <td>Division</td>
                      <td><code>20 / 10 = 2</code></td>
                    </tr>
                    <tr>
                      <td><code>%</code></td>
                      <td>Modulus (Remainder)</td>
                      <td><code>20 % 10 = 0</code></td>
                    </tr>
                    <tr>
                      <td><code>++</code></td>
                      <td>Increment</td>
                      <td><code>a++</code> (post-increment) or <code>++a</code> (pre-increment)</td>
                    </tr>
                    <tr>
                      <td><code>--</code></td>
                      <td>Decrement</td>
                      <td><code>a--</code> (post-decrement) or <code>--a</code> (pre-decrement)</td>
                    </tr>
                  </tbody>
                </table>
                <pre><code>{`#include <stdio.h>

int main() {
    int a = 10, b = 3;
    printf("Addition: %d\n", a + b);
    printf("Subtraction: %d\n", a - b);
    printf("Multiplication: %d\n", a * b);
    printf("Division: %d\n", a / b);
    printf("Modulus: %d\n", a % b);
    
    a++; // Post-increment
    printf("After increment: %d\n", a);
    
    --b; // Pre-decrement
    printf("After decrement: %d\n", b);
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Assignment Operators</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Equivalent To</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>=</code></td>
                      <td>Simple assignment</td>
                      <td><code>a = 10</code></td>
                      <td><code>a = 10</code></td>
                    </tr>
                    <tr>
                      <td><code>+=</code></td>
                      <td>Add and assign</td>
                      <td><code>a += 5</code></td>
                      <td><code>a = a + 5</code></td>
                    </tr>
                    <tr>
                      <td><code>-=</code></td>
                      <td>Subtract and assign</td>
                      <td><code>a -= 5</code></td>
                      <td><code>a = a - 5</code></td>
                    </tr>
                    <tr>
                      <td><code>*=</code></td>
                      <td>Multiply and assign</td>
                      <td><code>a *= 5</code></td>
                      <td><code>a = a * 5</code></td>
                    </tr>
                    <tr>
                      <td><code>/=</code></td>
                      <td>Divide and assign</td>
                      <td><code>a /= 5</code></td>
                      <td><code>a = a / 5</code></td>
                    </tr>
                    <tr>
                      <td><code>%=</code></td>
                      <td>Modulus and assign</td>
                      <td><code>a %= 5</code></td>
                      <td><code>a = a % 5</code></td>
                    </tr>
                  </tbody>
                </table>
                <pre><code>{`#include <stdio.h>

int main() {
    int a = 10;
    a += 5; // a = a + 5
    printf("After +=: %d\n", a);
    
    a *= 2; // a = a * 2
    printf("After *=: %d\n", a);
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Comparison Operators</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>==</code></td>
                      <td>Equal to</td>
                      <td><code>10 == 20</code> → false (0)</td>
                    </tr>
                    <tr>
                      <td><code>!=</code></td>
                      <td>Not equal to</td>
                      <td><code>10 != 20</code> → true (1)</td>
                    </tr>
                    <tr>
                      <td><code>&gt;</code></td>
                      <td>Greater than</td>
                      <td><code>20 &gt; 10</code> → true (1)</td>
                    </tr>
                    <tr>
                      <td><code>&gt;=</code></td>
                      <td>Greater than or equal to</td>
                      <td><code>20 &gt;= 10</code> → true (1)</td>
                    </tr>
                    <tr>
                      <td><code>&lt;</code></td>
                      <td>Less than</td>
                      <td><code>20 &lt; 10</code> → false (0)</td>
                    </tr>
                    <tr>
                      <td><code>&lt;=</code></td>
                      <td>Less than or equal to</td>
                      <td><code>20 &lt;= 10</code> → false (0)</td>
                    </tr>
                  </tbody>
                </table>
                <pre><code>{`#include <stdio.h>

int main() {
    int a = 10, b = 20;
    printf("Equal to: %d\n", a == b);
    printf("Not equal to: %d\n", a != b);
    printf("Greater than: %d\n", a > b);
    printf("Less than: %d\n", a < b);
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Logical Operators</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>&amp;&amp;</code></td>
                      <td>Logical AND (true if both operands are true)</td>
                      <td><code>(10 == 10) &amp;&amp; (20 &gt; 10)</code> → true (1)</td>
                    </tr>
                    <tr>
                      <td><code>||</code></td>
                      <td>Logical OR (true if either operand is true)</td>
                      <td><code>(10 == 20) || (20 &gt; 10)</code> → true (1)</td>
                    </tr>
                    <tr>
                      <td><code>!</code></td>
                      <td>Logical NOT (reverses the logical state)</td>
                      <td><code>!(10 == 20)</code> → true (1)</td>
                    </tr>
                  </tbody>
                </table>
                <pre><code>{`#include <stdio.h>

int main() {
    int a = 10, b = 20;
    printf("Logical AND: %d\n", (a == 10) && (b > 10));
    printf("Logical OR: %d\n", (a == 20) || (b > 10));
    printf("Logical NOT: %d\n", !(a == 20));
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Bitwise Operators</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>&amp;</code></td>
                      <td>Bitwise AND</td>
                      <td><code>5 &amp; 3</code> → 1 (0101 &amp; 0011 = 0001)</td>
                    </tr>
                    <tr>
                      <td><code>|</code></td>
                      <td>Bitwise OR</td>
                      <td><code>5 | 3</code> → 7 (0101 | 0011 = 0111)</td>
                    </tr>
                    <tr>
                      <td><code>^</code></td>
                      <td>Bitwise XOR</td>
                      <td><code>5 ^ 3</code> → 6 (0101 ^ 0011 = 0110)</td>
                    </tr>
                    <tr>
                      <td><code>~</code></td>
                      <td>Bitwise NOT (one's complement)</td>
                      <td><code>~5</code> → -6 (~0101 = 1010 in 4-bit system)</td>
                    </tr>
                    <tr>
                      <td><code>&lt;&lt;</code></td>
                      <td>Left shift</td>
                      <td><code>5 &lt;&lt; 1</code> → 10 (0101 → 1010)</td>
                    </tr>
                    <tr>
                      <td><code>&gt;&gt;</code></td>
                      <td>Right shift</td>
                      <td><code>5 &gt;&gt; 1</code> → 2 (0101 → 0010)</td>
                    </tr>
                  </tbody>
                </table>
                <pre><code>{`#include <stdio.h>

int main() {
    unsigned char a = 5, b = 3; // 0101 and 0011 in binary
    
    printf("Bitwise AND: %d\n", a & b);  // 0001 → 1
    printf("Bitwise OR: %d\n", a | b);   // 0111 → 7
    printf("Bitwise XOR: %d\n", a ^ b);  // 0110 → 6
    printf("Bitwise NOT: %d\n", ~a);     // 11111010 → 250 (unsigned char)
    printf("Left shift: %d\n", a << 1);  // 1010 → 10
    printf("Right shift: %d\n", a >> 1); // 0010 → 2
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Ternary Operator</h3>
                <p>Also known as conditional operator</p>
                <pre><code>{`condition ? expression_if_true : expression_if_false;`}</code></pre>
                <pre><code>{`#include <stdio.h>

int main() {
    int age = 18;
    (age >= 18) ? printf("Eligible to vote") : printf("Not eligible");
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="conditionals" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-2"></i> Conditional Statements</h2>
              
              <div className="property-card">
                <h3 className="h4">1. if statement</h3>
                <pre><code>{`if (condition) {
    // code to execute if condition is true
}`}</code></pre>
                <pre><code>{`#include <stdio.h>

int main() {
    int marks = 40;
    if (marks >= 35) {
        printf("Passed\n");
    }
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. if-else statement</h3>
                <pre><code>{`if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}`}</code></pre>
                <pre><code>{`#include <stdio.h>

int main() {
    int marks = 20;
    if (marks >= 35) {
        printf("Passed\n");
    } else {
        printf("Failed\n");
    }
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. if-else if ladder</h3>
                <pre><code>{`if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else if (condition3) {
    // code if condition3 is true
} else {
    // code if all conditions are false
}`}</code></pre>
                <pre><code>{`#include <stdio.h>

int main() {
    int marks = 85;
    if (marks > 90) {
        printf("O Grade\n");
    } else if (marks > 80) {
        printf("A+ Grade\n");
    } else if (marks > 70) {
        printf("A Grade\n");
    } else if (marks > 60) {
        printf("B+ Grade\n");
    } else if (marks > 50) {
        printf("B Grade\n");
    } else {
        printf("Fail\n");
    }
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Nested if statement</h3>
                <pre><code>{`if (condition1) {
    if (condition2) {
        // code if both conditions are true
    }
}`}</code></pre>
                <pre><code>{`#include <stdio.h>

int main() {
    int marks = 97;
    if (marks > 90) {
        if (marks > 95) {
            printf("O Grade\n");
        } else {
            printf("A+ Grade\n");
        }
    } else {
        printf("Other grades\n");
    }
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. switch statement</h3>
                <pre><code>{`switch (expression) {
    case constant1:
        // code
        break;
    case constant2:
        // code
        break;
    ...
    default:
        // code if no case matches
}`}</code></pre>
                <pre><code>{`#include <stdio.h>

int main() {
    int choice = 2;
    switch (choice) {
        case 1:
            printf("Fan switch\n");
            break;
        case 2:
            printf("AC switch\n");
            break;
        case 3:
            printf("Light switch\n");
            break;
        default:
            printf("Invalid switch\n");
    }
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="loops" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> Loops in C</h2>
              
              <div className="property-card">
                <h3 className="h4">Types of Loops</h3>
                <ol>
                  <li>for loop</li>
                  <li>while loop</li>
                  <li>do-while loop</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. for loop</h3>
                <pre><code>{`for (initialization; condition; increment/decrement) {
    // code to repeat
}`}</code></pre>
                <pre><code>{`#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        printf("%d\n", i);
    }
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. while loop</h3>
                <pre><code>{`initialization;
while (condition) {
    // code to repeat
    increment/decrement;
}`}</code></pre>
                <pre><code>{`#include <stdio.h>

int main() {
    int i = 0;
    while (i < 5) {
        printf("%d\n", i);
        i++;
    }
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. do-while loop</h3>
                <pre><code>{`initialization;
do {
    // code to repeat
    increment/decrement;
} while (condition);`}</code></pre>
                <pre><code>{`#include <stdio.h>

int main() {
    int i = 0;
    do {
        printf("%d\n", i);
        i++;
    } while (i < 5);
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Jump Statements</h3>
                
                <h4 className="h5">1. break statement</h4>
                <p>Terminates the loop or switch statement</p>
                <pre><code>{`#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            break; // Exit the loop when i is 3
        }
        printf("%d\n", i);
    }
    return 0;
}`}</code></pre>
                
                <h4 className="h5 mt-3">2. continue statement</h4>
                <p>Skips the current iteration and continues with the next</p>
                <pre><code>{`#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            continue; // Skip iteration when i is 3
        }
        printf("%d\n", i);
    }
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="arrays" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-collection"></i> Arrays in C</h2>
              
              <div className="property-card">
                <h3 className="h4">What are Arrays?</h3>
                <ul>
                  <li>Collection of elements of the same data type</li>
                  <li>Stored in contiguous memory locations</li>
                  <li>Accessed using index (starting from 0)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Array Declaration and Initialization</h3>
                <pre><code>{`// Declaration
data_type array_name[size];

// Initialization
data_type array_name[size] = {value1, value2, ..., valueN};
data_type array_name[] = {value1, value2, ..., valueN}; // size inferred

// Examples:
int numbers[5]; // Declaration
int numbers[5] = {1, 2, 3, 4, 5}; // Declaration with initialization
int numbers[] = {1, 2, 3, 4, 5}; // Size automatically set to 5`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Accessing Array Elements</h3>
                <pre><code>{`#include <stdio.h>

int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    
    // Accessing elements
    printf("First element: %d\n", numbers[0]);
    printf("Third element: %d\n", numbers[2]);
    
    // Modifying elements
    numbers[1] = 25;
    printf("Modified second element: %d\n", numbers[1]);
    
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Single Dimensional Array Example</h3>
                <pre><code>{`#include <stdio.h>

int main() {
    int size, sum = 0;
    
    printf("Enter the size of array: ");
    scanf("%d", &size);
    
    int arr[size];
    printf("Enter array elements: ");
    
    // Input array elements
    for (int i = 0; i < size; i++) {
        scanf("%d", &arr[i]);
    }
    
    // Calculate sum
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    
    printf("Sum of array elements: %d\n", sum);
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Multi-dimensional Arrays (2D Arrays)</h3>
                <pre><code>{`// Declaration
data_type array_name[rows][columns];

// Initialization
data_type array_name[rows][columns] = {
    {val11, val12, ..., val1N},
    {val21, val22, ..., val2N},
    ...
    {valM1, valM2, ..., valMN}
};`}</code></pre>
                
                <pre><code>{`#include <stdio.h>

int main() {
    int matrix1[2][2] = {{1, 2}, {3, 4}};
    int matrix2[2][2] = {{5, 6}, {7, 8}};
    int result[2][2];
    
    // Matrix addition
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    
    // Display result
    printf("Resultant Matrix:\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            printf("%d ", result[i][j]);
        }
        printf("\n");
    }
    
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="strings" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-textarea-t"></i> Strings in C</h2>
              
              <div className="property-card">
                <h3 className="h4">What are Strings?</h3>
                <ul>
                  <li>Sequence of characters terminated with null character '\0'</li>
                  <li>Implemented as arrays of characters</li>
                  <li>Require <code>#include &lt;string.h&gt;</code> for string functions</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">String Declaration and Initialization</h3>
                <pre><code>{`// Method 1: Array of characters
char str[] = "Hello"; // Automatically adds '\0'

// Method 2: Explicit array with null terminator
char str[] = {'H', 'e', 'l', 'l', 'o', '\0'};

// Method 3: Pointer to string literal
char *str = "Hello";`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">String Input/Output</h3>
                <pre><code>{`#include <stdio.h>

int main() {
    char name[50];
    
    printf("Enter your name: ");
    scanf("%s", name); // Reads until whitespace
    printf("Hello, %s!\n", name);
    
    // To read with spaces
    printf("Enter your full name: ");
    scanf(" %[^\n]", name); // Reads until newline
    printf("Hello, %s!\n", name);
    
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common String Functions</h3>
                
                <h4 className="h5">1. strlen() - String Length</h4>
                <pre><code>{`#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello";
    printf("Length: %zu\n", strlen(str)); // 5
    return 0;
}`}</code></pre>
                
                <h4 className="h5 mt-3">2. strcpy() - String Copy</h4>
                <pre><code>{`#include <stdio.h>
#include <string.h>

int main() {
    char src[] = "Hello";
    char dest[20];
    
    strcpy(dest, src);
    printf("Copied string: %s\n", dest);
    return 0;
}`}</code></pre>
                
                <h4 className="h5 mt-3">3. strcat() - String Concatenation</h4>
                <pre><code>{`#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello";
    char str2[] = " World";
    
    strcat(str1, str2);
    printf("Concatenated string: %s\n", str1);
    return 0;
}`}</code></pre>
                
                <h4 className="h5 mt-3">4. strcmp() - String Comparison</h4>
                <pre><code>{`#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "hello";
    char str2[] = "hello";
    char str3[] = "world";
    
    printf("Comparison 1: %d\n", strcmp(str1, str2)); // 0 (equal)
    printf("Comparison 2: %d\n", strcmp(str1, str3)); // negative (str1 < str3)
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="pointers" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cursor"></i> Pointers in C</h2>
              
              <div className="property-card">
                <h3 className="h4">What are Pointers?</h3>
                <ul>
                  <li>Variables that store memory addresses</li>
                  <li>Allow direct memory access and manipulation</li>
                  <li>Essential for dynamic memory allocation</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Pointer Basics</h3>
                <pre><code>{`#include <stdio.h>

int main() {
    int var = 20;
    int *ptr; // Pointer declaration
    
    ptr = &var; // Assign address of var to pointer
    
    printf("Address of var: %p\n", &var);
    printf("Value stored in ptr: %p\n", ptr);
    printf("Value pointed by ptr: %d\n", *ptr);
    
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Pointer Arithmetic</h3>
                <pre><code>{`#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr; // Points to first element
    
    printf("Element at ptr: %d\n", *ptr);
    ptr++; // Move to next element
    printf("Element after increment: %d\n", *ptr);
    ptr--; // Move back
    printf("Element after decrement: %d\n", *ptr);
    
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Pointers and Arrays</h3>
                <pre><code>{`#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;
    
    for (int i = 0; i < 5; i++) {
        printf("Element %d: %d\n", i, *(ptr + i));
    }
    
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Pointer to Pointer (Double Pointer)</h3>
                <pre><code>{`#include <stdio.h>

int main() {
    int var = 20;
    int *ptr = &var;
    int **dptr = &ptr; // Pointer to pointer
    
    printf("Value of var: %d\n", var);
    printf("Value using ptr: %d\n", *ptr);
    printf("Value using dptr: %d\n", **dptr);
    
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="structures" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box"></i> Structures in C</h2>
              
              <div className="property-card">
                <h3 className="h4">What are Structures?</h3>
                <ul>
                  <li>User-defined data type that groups related variables</li>
                  <li>Can contain variables of different data types</li>
                  <li>Declared using <code>struct</code> keyword</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Structure Definition and Usage</h3>
                <pre><code>{`#include <stdio.h>
#include <string.h>

// Structure definition
struct Student {
    int roll_no;
    char name[50];
    float marks;
};

int main() {
    // Structure variable declaration
    struct Student s1;
    
    // Assigning values
    s1.roll_no = 101;
    strcpy(s1.name, "John Doe");
    s1.marks = 85.5;
    
    // Accessing values
    printf("Roll No: %d\n", s1.roll_no);
    printf("Name: %s\n", s1.name);
    printf("Marks: %.2f\n", s1.marks);
    
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Array of Structures</h3>
                <pre><code>{`#include <stdio.h>

struct Book {
    char title[100];
    char author[50];
    int pages;
};

int main() {
    struct Book library[3];
    
    // Input book details
    for (int i = 0; i < 3; i++) {
        printf("Enter title, author, and pages for book %d: ", i+1);
        scanf("%s %s %d", library[i].title, library[i].author, &library[i].pages);
    }
    
    // Display book details
    printf("\nLibrary Catalog:\n");
    for (int i = 0; i < 3; i++) {
        printf("Book %d: %s by %s, %d pages\n", 
               i+1, library[i].title, library[i].author, library[i].pages);
    }
    
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Structures with Pointers</h3>
                <pre><code>{`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Employee {
    int id;
    char name[50];
    float salary;
};

int main() {
    struct Employee *emp;
    
    // Allocate memory
    emp = (struct Employee*) malloc(sizeof(struct Employee));
    
    if (emp == NULL) {
        printf("Memory allocation failed\n");
        return 1;
    }
    
    // Assign values
    emp->id = 1001;
    strcpy(emp->name, "Alice Smith");
    emp->salary = 50000.0;
    
    // Display values
    printf("Employee ID: %d\n", emp->id);
    printf("Employee Name: %s\n", emp->name);
    printf("Employee Salary: %.2f\n", emp->salary);
    
    // Free memory
    free(emp);
    
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Enumeration</h3>
                <pre><code>{`#include <stdio.h>

// Enum definition
enum Weekday {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};

int main() {
    enum Weekday today = Wednesday;
    
    printf("Today is day number %d\n", today);
    
    if (today == Wednesday) {
        printf("It's Wednesday!\n");
    }
    
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="file" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark"></i> File Handling in C</h2>
              
              <div className="property-card">
                <h3 className="h4">File Operations</h3>
                <ul>
                  <li>File handling allows permanent storage of data</li>
                  <li>Common operations: create, read, write, append</li>
                  <li>Requires <code>FILE</code> pointer for file operations</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">File Modes</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Mode</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>"r"</code></td>
                      <td>Read (file must exist)</td>
                    </tr>
                    <tr>
                      <td><code>"w"</code></td>
                      <td>Write (creates or truncates file)</td>
                    </tr>
                    <tr>
                      <td><code>"a"</code></td>
                      <td>Append (creates file if doesn't exist)</td>
                    </tr>
                    <tr>
                      <td><code>"r+"</code></td>
                      <td>Read and write (file must exist)</td>
                    </tr>
                    <tr>
                      <td><code>"w+"</code></td>
                      <td>Write and read (creates or truncates file)</td>
                    </tr>
                    <tr>
                      <td><code>"a+"</code></td>
                      <td>Append and read (creates file if doesn't exist)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Writing to a File</h3>
                <pre><code>{`#include <stdio.h>

int main() {
    FILE *file;
    file = fopen("example.txt", "w");
    
    if (file == NULL) {
        printf("Error opening file!\n");
        return 1;
    }
    
    fprintf(file, "Hello, File Handling in C!\n");
    fprintf(file, "This is a second line.\n");
    
    fclose(file);
    printf("File written successfully.\n");
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Reading from a File</h3>
                <pre><code>{`#include <stdio.h>

int main() {
    FILE *file;
    char buffer[255];
    
    file = fopen("example.txt", "r");
    
    if (file == NULL) {
        printf("Error opening file!\n");
        return 1;
    }
    
    printf("File contents:\n");
    while (fgets(buffer, 255, file) != NULL) {
        printf("%s", buffer);
    }
    
    fclose(file);
    return 0;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Appending to a File</h3>
                <pre><code>{`#include <stdio.h>

int main() {
    FILE *file;
    file = fopen("example.txt", "a");
    
    if (file == NULL) {
        printf("Error opening file!\n");
        return 1;
    }
    
    fprintf(file, "This line is appended.\n");
    
    fclose(file);
    printf("File appended successfully.\n");
    return 0;
}`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>C Programming Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default CNotes;