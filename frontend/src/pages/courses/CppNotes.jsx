import React from 'react';
import single from '../../assets/Single-Inheritance.jpg';
import multilevel from '../../assets/Multilevel-Inheritance.jpg';
import hierarchical from '../../assets/Hierarchical-Inheritance-in-Java.jpg';
import multiple from '../../assets/multiple_inheritance.png';
import hybrid from '../../assets/Hybrid-Inheritance.jpg';

function CppNotes() {
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
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
          }
          .comparison-table th, .comparison-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          .comparison-table th {
            background-color: #f2f2f2;
          }
        `}
      </style>

      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-cpp"></i> C++ Notes</h1>
          <p className="lead">Your Comprehensive Guide to C++ Programming</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#setup"><i className="bi bi-gear"></i> Environment Setup</a>
              <a className="nav-link" href="#structure"><i className="bi bi-file-earmark-code"></i> C++ Structure</a>
              <a className="nav-link" href="#datatypes"><i className="bi bi-card-list"></i> Data Types</a>
              <a className="nav-link" href="#variables"><i className="bi bi-tag"></i> Variables</a>
              <a className="nav-link" href="#operators"><i className="bi bi-calculator"></i> Operators</a>
              <a className="nav-link" href="#conditionals"><i className="bi bi-diagram-2"></i> Conditionals</a>
              <a className="nav-link" href="#loops"><i className="bi bi-arrow-repeat"></i> Loops</a>
              <a className="nav-link" href="#functions"><i className="bi bi-code-square"></i> Functions</a>
              <a className="nav-link" href="#arrays"><i className="bi bi-collection"></i> Arrays</a>
              <a className="nav-link" href="#strings"><i className="bi bi-textarea-t"></i> Strings</a>
              <a className="nav-link" href="#oops"><i className="bi bi-boxes"></i> OOP Concepts</a>
              <a className="nav-link" href="#pointers"><i className="bi bi-cursor"></i> Pointers</a>
              <a className="nav-link" href="#structures"><i className="bi bi-file-earmark-binary"></i> Structures</a>
              <a className="nav-link" href="#enums"><i className="bi bi-list-check"></i> Enumerations</a>
              <a className="nav-link" href="#exception-handling"><i className="bi bi-exclamation-triangle"></i> Exception Handling</a>
              <a className="nav-link" href="#files"><i className="bi bi-file-earmark"></i> File Handling</a>
              <a className="nav-link" href="#multithreading"><i className="bi bi-shuffle"></i> Multithreading</a>
              <a className="nav-link" href="#stl"><i className="bi bi-collection"></i> STL (Standard Template Library)</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is C++ Programming?</h2>
              <div className="property-card">
                <ul>
                  <li>C++ is a high-level object-oriented programming language used to create high-performance applications</li>
                  <li>Developed by Bjarne Stroustrup in 1979 as an extension of the C language</li>
                  <li>Major addition was the introduction of classes and objects</li>
                  <li>Supports both procedural and object-oriented programming paradigms</li>
                </ul>
              </div>

              <h3 className="h4 mt-4">Difference between C and C++</h3>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>C Language</th>
                    <th>C++ Language</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Procedural oriented language</td>
                    <td>Object-oriented language</td>
                  </tr>
                  <tr>
                    <td>Does not support OOP concepts</td>
                    <td>Supports OOP concepts (classes, objects, inheritance, etc.)</td>
                  </tr>
                  <tr>
                    <td>No virtual functions</td>
                    <td>Supports virtual functions (polymorphism)</td>
                  </tr>
                  <tr>
                    <td>Uses scanf() for input</td>
                    <td>Uses cin &gt;&gt; for input</td>
                  </tr>
                  <tr>
                    <td>Uses printf() for output</td>
                    <td>Uses cout &lt;&lt; for output</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section id="setup" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Environment Setup</h2>
              <div className="property-card">
                <h3 className="h4">Steps to set up C++ development environment:</h3>
                <ol>
                  <li>Install an IDE (Integrated Development Environment)</li>
                  <li>Download and install Code::Blocks (popular free IDE)</li>
                  <li>During installation, select the mingw-setup.exe file to get the GNU compiler</li>
                  <li>After installation, create a new C++ project and start coding</li>
                </ol>
              </div>
            </section>

            <section id="structure" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> Basic Structure of C++ Program</h2>
              <div className="property-card">
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    // Your code here
    return 0;
}`}</code></pre>
                <h3 className="h4 mt-3">Explanation:</h3>
                <ul>
                  <li><code>#include &lt;iostream&gt;</code> - Header file for input/output operations</li>
                  <li><code>using namespace std;</code> - Allows use of names from the standard library without prefixing with std::</li>
                  <li><code>int main()</code> - Main function where program execution begins</li>
                  <li><code>return 0;</code> - Indicates successful program termination</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Example Program</h3>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to C++ Programming";
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Namespace Notes</h3>
                <p>If you omit <code>using namespace std;</code>, you need to prefix standard library elements with <code>std::</code></p>
                <pre><code>{`#include <iostream>

int main() {
    std::cout << "Welcome to C Programming";
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="datatypes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-card-list"></i> Data Types in C++</h2>
              <div className="property-card">
                <h3 className="h4">Categories of Data Types:</h3>
                <ul>
                  <li><strong>Primitive Data Types</strong> - Basic built-in types</li>
                  <li><strong>Non-Primitive Data Types</strong> - Derived types (arrays, structures, etc.)</li>
                  <li><strong>User-Defined Data Types</strong> - Created using classes, structures, etc.</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Primitive Data Types</h3>
                <h4 className="h5 mt-3">Integer Types</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Size</th>
                      <th>Range</th>
                      <th>Default Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>short int</td>
                      <td>2 bytes</td>
                      <td>-32,768 to 32,767</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>int</td>
                      <td>4 bytes</td>
                      <td>-2,147,483,648 to 2,147,483,647</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>long</td>
                      <td>4 bytes</td>
                      <td>-2,147,483,648 to 2,147,483,647</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Floating Point Types</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Size</th>
                      <th>Precision</th>
                      <th>Default Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>float</td>
                      <td>4 bytes</td>
                      <td>6-7 decimal digits</td>
                      <td>0.0</td>
                    </tr>
                    <tr>
                      <td>double</td>
                      <td>8 bytes</td>
                      <td>15 decimal digits</td>
                      <td>0.0</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Character Type</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Size</th>
                      <th>Range</th>
                      <th>Default Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>char</td>
                      <td>1 byte</td>
                      <td>0 to 255</td>
                      <td>White space</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Boolean Type</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Size</th>
                      <th>Values</th>
                      <th>Default Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>bool</td>
                      <td>1 bit</td>
                      <td>true (1) or false (0)</td>
                      <td>0 (false)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="variables" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-tag"></i> Variables in C++</h2>
              <div className="property-card">
                <h3 className="h4">What is a Variable?</h3>
                <p>A variable is a container used to store values in memory.</p>
                <p><strong>Syntax:</strong> <code>datatype varName = value;</code></p>
                <pre><code>{`int a = 10;`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Types of Variables</h3>
                <h4 className="h5 mt-3">Global Variables</h4>
                <p>Variables declared outside all functions. Accessible throughout the program.</p>
                <pre><code>{`#include <iostream>
using namespace std;

int a = 10; // Global variable

int main() {
    cout << a; // Accessing global variable
    return 0;
}`}</code></pre>

                <h4 className="h5 mt-3">Local Variables</h4>
                <p>Variables declared inside a function. Accessible only within that function.</p>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    float f = 80.545; // Local variable
    cout << f; // Accessing local variable
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Constants</h3>
                <p>Variables whose values cannot be changed after initialization.</p>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    const int a = 80; // Constant variable
    // a = 100; // This would cause an error
    cout << a;
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="operators" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> Operators in C++</h2>
              <div className="property-card">
                <h3 className="h4">Types of Operators</h3>
                <ul>
                  <li>Unary Operators (work on one operand)</li>
                  <li>Binary Operators (work on two operands)</li>
                  <li>Ternary Operator (works on three operands)</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Unary Operators</h3>
                <p>Increment (++) and Decrement (--) operators</p>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    int a = 10;
    a++; // Increment by 1
    cout << a; // Output: 11
    
    a--; // Decrement by 1
    cout << a; // Output: 10
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Binary Operators</h3>
                <h4 className="h5 mt-3">Arithmetic Operators</h4>
                <table className="comparison-table">
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
                      <td>Modulus (Remainder)</td>
                      <td>20 % 10 = 0</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Assignment Operators</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>=</td>
                      <td>Assign</td>
                      <td>int a = 10;</td>
                    </tr>
                    <tr>
                      <td>+=</td>
                      <td>Add and assign</td>
                      <td>a += 5; // a = a + 5</td>
                    </tr>
                    <tr>
                      <td>-=</td>
                      <td>Subtract and assign</td>
                      <td>a -= 5; // a = a - 5</td>
                    </tr>
                    <tr>
                      <td>*=</td>
                      <td>Multiply and assign</td>
                      <td>a *= 5; // a = a * 5</td>
                    </tr>
                    <tr>
                      <td>/=</td>
                      <td>Divide and assign</td>
                      <td>a /= 5; // a = a / 5</td>
                    </tr>
                    <tr>
                      <td>%=</td>
                      <td>Modulus and assign</td>
                      <td>a %= 5; // a = a % 5</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Comparison/Relational Operators</h4>
                <table className="comparison-table">
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
                      <td>!=</td>
                      <td>Not equal to</td>
                      <td>10 != 20 → true</td>
                    </tr>
                    <tr>
                      <td>&gt;</td>
                      <td>Greater than</td>
                      <td>20 &gt; 10 → true</td>
                    </tr>
                    <tr>
                      <td>&gt;=</td>
                      <td>Greater than or equal to</td>
                      <td>20 &gt;= 10 → true</td>
                    </tr>
                    <tr>
                      <td>&lt;</td>
                      <td>Less than</td>
                      <td>20 &lt; 10 → false</td>
                    </tr>
                    <tr>
                      <td>&lt;=</td>
                      <td>Less than or equal to</td>
                      <td>20 &lt;= 10 → false</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Logical Operators</h4>
                <table className="comparison-table">
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

                <h4 className="h5 mt-3">Bitwise Operators</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&amp;</td>
                      <td>Bitwise AND</td>
                      <td>10 &amp; 20</td>
                    </tr>
                    <tr>
                      <td>|</td>
                      <td>Bitwise OR</td>
                      <td>10 | 20</td>
                    </tr>
                    <tr>
                      <td>^</td>
                      <td>Bitwise XOR</td>
                      <td>10 ^ 20</td>
                    </tr>
                    <tr>
                      <td>~</td>
                      <td>Bitwise NOT</td>
                      <td>~10</td>
                    </tr>
                    <tr>
                      <td>&lt;&lt;</td>
                      <td>Left shift</td>
                      <td>10 &lt;&lt; 2</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt;</td>
                      <td>Right shift</td>
                      <td>10 &gt;&gt; 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Ternary Operator (Conditional Operator)</h3>
                <p><strong>Syntax:</strong> <code>(condition) ? expression1 : expression2;</code></p>
                <pre><code>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 18;
    string x = (age >= 18) ? "Eligible to vote" : "Not eligible";
    cout << x;
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="conditionals" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-2"></i> Conditional Statements</h2>
              <div className="property-card">
                <h3 className="h4">Types of Conditional Statements</h3>
                <ul>
                  <li>if statement</li>
                  <li>if-else statement</li>
                  <li>if-else-if ladder</li>
                  <li>nested if statement</li>
                  <li>switch statement</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">if Statement</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`if(condition) {
    // statements to execute if condition is true
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    int marks = 40;
    if(marks >= 35) {
        cout << "Passed";
    }
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">if-else Statement</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`if(condition) {
    // statements if true
} else {
    // statements if false
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    int marks = 20;
    if(marks >= 35) {
        cout << "Passed";
    } else {
        cout << "Failed";
    }
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">if-else-if Ladder</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`if(condition1) {
    // statements
} else if(condition2) {
    // statements
} else if(condition3) {
    // statements
} else {
    // default statements
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    int marks = 85;
    if(marks > 90) {
        cout << "O Grade";
    } else if(marks > 80) {
        cout << "A+ Grade";
    } else if(marks > 70) {
        cout << "A Grade";
    } else if(marks > 60) {
        cout << "B+ Grade";
    } else if(marks > 50) {
        cout << "B Grade";
    } else {
        cout << "Fail";
    }
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Nested if Statement</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`if(condition1) {
    if(condition2) {
        // statements
    }
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    int marks = 97;
    if(marks > 90) {
        if(marks > 95) {
            cout << "O Grade";
        } else {
            cout << "A+ Grade";
        }
    } else {
        cout << "Other grades";
    }
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">switch Statement</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`switch(expression) {
    case value1:
        // statements
        break;
    case value2:
        // statements
        break;
    default:
        // default statements
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    int a = 1;
    switch(a) {
        case 1:
            cout << "Fan switch";
            break;
        case 2:
            cout << "AC switch";
            break;
        case 3:
            cout << "Light switch";
            break;
        default:
            cout << "Invalid switch";
    }
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="loops" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> Loops in C++</h2>
              <div className="property-card">
                <h3 className="h4">Types of Loops</h3>
                <ul>
                  <li>for loop</li>
                  <li>while loop</li>
                  <li>do-while loop</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">for Loop</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`for(initialization; condition; increment/decrement) {
    // statements
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    for(int i = 0; i < 5; i++) {
        cout << i << "endl";
    }
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">while Loop</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`initialization;
while(condition) {
    // statements
    increment/decrement;
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    int i = 1;
    while(i <= 5) {
        cout << i << "endl";
        i++;
    }
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">do-while Loop</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`initialization;
do {
    // statements
    increment/decrement;
} while(condition);`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    int i = 1;
    do {
        cout << i << "endl";
        i++;
    } while(i <= 5);
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Jump Statements</h3>
                <h4 className="h5 mt-3">break Statement</h4>
                <p>Used to exit a loop immediately</p>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    for(int i = 1; i <= 5; i++) {
        cout << i << "endl";
        if(i == 3) {
            break; // Exit loop when i is 3
        }
    }
    return 0;
}`}</code></pre>

                <h4 className="h5 mt-3">continue Statement</h4>
                <p>Used to skip the current iteration and continue with the next iteration</p>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    for(int i = 1; i <= 5; i++) {
        if(i == 3) {
            continue; // Skip when i is 3
        }
        cout << i << "endl";
    }
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="functions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Functions in C++</h2>
              <div className="property-card">
                <h3 className="h4">What is a Function?</h3>
                <ul>
                  <li>A block of code that performs a specific task</li>
                  <li>Executed when called</li>
                  <li>Promotes code reusability</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Types of Functions</h3>
                <ul>
                  <li><strong>Predefined functions:</strong> Built-in functions like main()</li>
                  <li><strong>User-defined functions:</strong> Created by the programmer</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">User-defined Function Syntax</h3>
                <pre><code>{`returnType functionName(parameters) {
    // statements
    return value; // if returnType is not void
}`}</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>{`#include <iostream>
using namespace std;

void greet() { // void means no return value
    cout << "Hello, World!";
}

int main() {
    greet(); // Function call
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Function Parameters</h3>
                <p>Information passed to functions through parameters</p>
                <pre><code>{`#include <iostream>
using namespace std;

int add(int a, int b) { // Parameters a and b
    return a + b;
}

int main() {
    cout << add(10, 5); // Passing arguments 10 and 5
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Recursion</h3>
                <p>A function that calls itself</p>
                <pre><code>{`#include <iostream>
using namespace std;

int factorial(int n) {
    if(n == 0) {
        return 1; // Base case
    } else {
        return n * factorial(n - 1); // Recursive call
    }
}

int main() {
    cout << factorial(5); // Output: 120
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Math Functions</h3>
                <p>C++ provides math functions in the <code>cmath</code> library</p>
                <pre><code>{`#include <iostream>
#include <cmath>
using namespace std;

int main() {
    cout << sqrt(64) << "endl"; // Square root
    cout << ceil(4.137) << "endl"; // Round up
    cout << floor(4.768) << "endl"; // Round down
    cout << pow(2, 3) << "endl"; // Power (2^3)
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="arrays" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-collection"></i> Arrays in C++</h2>
              <div className="property-card">
                <h3 className="h4">What is an Array?</h3>
                <ul>
                  <li>Used to store multiple values in a single variable</li>
                  <li>Works based on index values (0 to n-1)</li>
                  <li>Fixed size once declared</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Advantages and Disadvantages</h3>
                <p><strong>Advantages:</strong></p>
                <ul>
                  <li>Code optimization (process data efficiently)</li>
                  <li>Random access (access any element directly)</li>
                </ul>
                <p><strong>Disadvantages:</strong></p>
                <ul>
                  <li>Fixed size</li>
                  <li>Only similar data types can be stored</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Declaring and Initializing Arrays</h3>
                <p><strong>Declaration:</strong> <code>datatype arrayName[size];</code></p>
                <p><strong>Initialization:</strong></p>
                <pre><code>{`// Direct initialization
int arr[] = {10, 20, 30, 40, 50};

// Indirect initialization
int arr[5];
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Types of Arrays</h3>
                <h4 className="h5 mt-3">Single Dimension Array</h4>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    cout << "Enter the size of an array:";
    int size;
    cin >> size;
    
    int sum = 0;
    int arr[size];
    
    cout << "Enter the array values:";
    for(int i = 0; i < size; i++) {
        cin >> arr[i];
    }
    
    for(int i = 0; i < size; i++) {
        sum = sum + arr[i];
    }
    
    cout << "The sum of array values is: " << sum;
    return 0;
}`}</code></pre>

                <h4 className="h5 mt-3">Multi-Dimension Array (2D Array)</h4>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    cout << "Enter the size of an array:";
    int size;
    cin >> size;
    
    int arr1[size][size];
    int arr2[size][size];
    int arr3[size][size];
    
    cout << "Enter array 1 values: ";
    for(int i = 0; i < size; i++) {
        for(int j = 0; j < size; j++) {
            cin >> arr1[i][j];
        }
    }
    
    cout << "Enter array 2 values: ";
    for(int i = 0; i < size; i++) {
        for(int j = 0; j < size; j++) {
            cin >> arr2[i][j];
        }
    }
    
    for(int i = 0; i < size; i++) {
        for(int j = 0; j < size; j++) {
            arr3[i][j] = arr1[i][j] + arr2[i][j];
            cout << arr3[i][j] << " ";
        }
        cout << "endl";
    }
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="strings" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-textarea-t"></i> Strings in C++</h2>
              <div className="property-card">
                <h3 className="h4">What is a String?</h3>
                <ul>
                  <li>Collection of characters (alphabets, symbols, numbers) stored within double quotes</li>
                  <li>Need to include <code>&lt;string&gt;</code> header file</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Creating and Using Strings</h3>
                <pre><code>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    string a = "Dhoni";
    cout << a; // Output: Dhoni
    cout << a[3]; // Output: n (4th character)
    cout << a.length(); // Output: 5 (length of string)
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">String Concatenation</h3>
                <pre><code>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    string a = "Mahendra Singh";
    string b = "Dhoni";
    string c = a + " " + b; // Concatenation
    cout << c; // Output: Mahendra Singh Dhoni
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="oops" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-boxes"></i> Object-Oriented Programming (OOP) Concepts</h2>
              <div className="property-card">
                <h3 className="h4">Main OOP Concepts</h3>
                <ul>
                  <li>Class</li>
                  <li>Object</li>
                  <li>Inheritance</li>
                  <li>Polymorphism</li>
                  <li>Abstraction</li>
                  <li>Encapsulation</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Class</h3>
                <p>Class is the blueprint/template used for creating an objects. It consists of properties and methods.</p>
                <pre><code>{`Syntax:
class ClassName
{
    access modifier:
       properties;
       functions(){
          //statements;
       }
};`}</code></pre>
                <h3 className="h4">Object</h3>
                <p>It is a real world entity which consists of state and behaviour. State represents characteristics of an object and behaviour represents functionality of an objects. It is an instance of the class.</p>
                <pre><code>{`Syntax:
ClassName objName;`}</code></pre>
                <h5 className="h5">Example using class and objects:</h5>
                <pre><code>{`#include <iostream>
#include <string>
using namespace std;

class Student {
    public:
        int id = 1;
        string name = "Jaddu";
        void greeting() {
            cout << "Good Evening";
        }
};

int main() {
    Student obj; // Creating object
    cout << obj.id << "endl"; // Accessing property
    cout << obj.name << "endl"; // Accessing property
    obj.greeting(); // Calling method
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Access Modifiers</h3>
                <ul>
                  <li><strong>public:</strong> Accessible from anywhere</li>
                  <li><strong>private:</strong> Accessible only within the class (default)</li>
                  <li><strong>protected:</strong> Accessible within class and by derived classes</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Constructors</h3>
                <p>It is a special type of function which will be called automatically whenever an object is created. It does not have an explicit return type.</p>
                <h5 className="h5">Types of Constructors:</h5>
                <ol>
                  <li>Default Constructor/Non Parameterized Constructor</li>
                  <li>Parameterized Constructor</li>
                </ol>
                <h4 className="h5 mt-3">1. Default Constructor</h4>
                <pre><code>{`#include <iostream>
using namespace std;

class Operator {
    public:
        Operator() { // Default constructor
            int a = 10;
            int b = 100;
            cout << (a + b) << "endl";
            cout << "Constructor is called";
        }
};

int main() {
    Operator obj; // Constructor called automatically
    return 0;
}`}</code></pre>

                <h4 className="h5 mt-3">2. Parameterized Constructor</h4>
                <pre><code>{`#include <iostream>
using namespace std;

class Operator {
    public:
        Operator(int a, int b) { // Parameterized constructor
            cout << (a + b) << "endl";
            cout << "Parameterized Constructor is called";
        }
};

int main() {
    Operator obj(100, 50); // Passing arguments
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h3">Inheritance</h3>
                <p>All the properties and methods will be acquired from parent class to child class is called inheritance.</p>
                <h4>Parent Class</h4>
                <p>The class which gives properties and methods are called parent class / base class and superclass.</p>
                <h4>Child Class</h4>
                <p>The class which acquires properties and methods from parent class is called child class / sub class / derived class and extended class.</p>

                <h4 className="h5 mt-3">Types of Inheritance</h4>
                <ol>
                  <li>Single level inheritance - one parent one child</li>
                  <li>Multi level inheritance - multiple parents at different levels</li>
                  <li>Multiple inheritance - multiple parents at same level</li>
                  <li>Hierarchical inheritance - one parent many children</li>
                  <li>Hybrid inheritance - combination of multiple and hierarchical</li>
                </ol>

                <h4 className="h5 mt-3">Single Level Inheritance</h4>
                <img src={single} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`#include <iostream>
using namespace std;

class Parent {
    public:
        void abc() {
            cout << "Parent Method"<<endl;
        }
};

class Child : public Parent {
    public:
        void def() {
            cout << "Child Method"<<endl;
        }
};

int main() {
    Child obj;
    obj.abc(); // Inherited from Parent
    obj.def(); // Child's own method
    return 0;
}`}</code></pre>

                <h4 className="h5 mt-3">Multi-Level Inheritance</h4>
                <img src={multilevel} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`#include <iostream>
using namespace std;

class Grandpa {
    public:
        void xyz() {
            cout << "Grandpa Method"<<endl;
        }
};

class Parent : public Grandpa {
    public:
        void abc() {
            cout << "Parent Method"<<endl;
        }
};

class Child : public Parent {
    public:
        void def() {
            cout << "Child Method"<<endl;
        }
};

int main() {
    Child obj;
    obj.xyz(); // From Grandpa
    obj.abc(); // From Parent
    obj.def(); // Child's own method
    return 0;
}`}</code></pre>

                <h4 className="h5 mt-3">Multiple Inheritance</h4>
                <img src={multiple} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`#include <iostream>
using namespace std;

class Father {
    public:
        void xyz() {
            cout << "Father Method"<<endl;
        }
};

class Mother {
    public:
        void abc() {
            cout << "Mother Method"<<endl;
        }
};

class Child : public Father, public Mother {
    public:
        void def() {
            cout << "Child Method"<<endl;
        }
};

int main() {
    Child obj;
    obj.xyz(); // From Father
    obj.abc(); // From Mother
    obj.def(); // Child's own method
    return 0;
}`}</code></pre>
                <h4 className="h5 mt-3">Heirarchical Inheritance</h4>
                <img src={hierarchical} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`#include <iostream>
using namespace std;

class Parent {
    public:
        void xyz() {
            cout << "Parent Method"<<endl;
        }
};

class Child1:public Parent {
    public:
        void abc() {
            cout << "Child1 Method"<<endl;
        }
};

class Child2 : public Parent {
    public:
        void def() {
            cout << "Child2 Method"<<endl;
        }
};

int main() {
    Child1 obj1;
    Child2 obj2;
    obj1.xyz(); // From Parent
    obj1.abc(); // Child1's own method
    obj2.xyz(); // From Parent
    obj2.def(); // Child2's own method
    return 0;
}`}</code></pre>
                <h4 className="h5 mt-3">Hybrid Inheritance</h4>
                <img src={hybrid} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`#include <iostream>
using namespace std;

class Z {
    public:
        void xyz() {
            cout << "Z Method"<<endl;
        }
};

class A : public Z {
    public:
        void abc() {
            cout << "A Method"<<endl;
        }
};

class B : public Z {
    public:
        void def() {
            cout << "B Method"<<endl;
        }
};

class C : public A, public B {
    public:
        void lmn() {
            cout << "C Method"<<endl;
        }
};

int main() {
    C obj;
    obj.abc(); // From A
    obj.def(); // From B
    obj.lmn(); // C's own method
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Polymorphism</h3>
                <p>"Poly" means many, "morph" means forms - ability to take many forms</p>
                <p>By using polymorphism we can execute different functionalities with same function name.</p>
                <h4 className="h5 mt-3">Types of Polymorphism</h4>
                <ol>
                  <li><strong>Compile-time polymorphism (method overloading)</strong> - It will be achieved by method overloading(Same function name, different parameters and present in same class).</li>
                  <li><strong>Run-time polymorphism (method overriding)</strong> - It will be achieved by method overriding(Same function name, same parameters but present in different class).</li>
                </ol>

                <h4 className="h5 mt-3">Method Overloading</h4>
                <pre><code>{`#include <iostream>
using namespace std;

class Overload {
    public:
        void add(int a, int b) {
            cout << (a + b) << "endl";
        }
        void add(int a, int b, int c) {
            cout << (a + b + c) << "endl";
        }
};

int main() {
    Overload obj;
    obj.add(100, 50); // Calls first add()
    obj.add(100, 50, 20); // Calls second add()
    return 0;
}`}</code></pre>

                <h4 className="h5 mt-3">Method Overriding</h4>
                <pre><code>{`#include <iostream>
using namespace std;

class Java {
    public:
        void level() {
            cout << "Hard";
        }
};

class CPP : public Java {
    public:
        void level() { // Overrides parent's level()
            cout << "Easy";
        }
};

int main() {
    Java obj1;
    CPP obj2;
    obj1.level(); // Output: Hard
    cout << "endl";
    obj2.level(); // Output: Easy
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Abstraction</h3>
                <p>Showing only essential information and hiding implementation details</p>
                <p>Achieved using abstract classes and pure virtual functions</p>
                <pre><code>{`#include <iostream>
using namespace std;

class Demo { // Abstract class
    public:
        virtual void abc() = 0; // Pure virtual function
};

class Sample : public Demo {
    public:
        void abc() { // Implementation of pure virtual function
            cout << "Abstract Method";
        }
};

int main() {
    Sample obj;
    obj.abc();
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Encapsulation</h3>
                <p>Wrapping data and methods together, protecting data from outside access</p>
                <pre><code>{`#include <iostream>
using namespace std;

class ATM {
    private:
        int amount; // Private data member
    public:
        void setAmount(int a) { // Public method to set value
            amount = a;
        }
        int getAmount() { // Public method to get value
            return amount;
        }
};

int main() {
    ATM obj;
    obj.setAmount(2000);
    cout << obj.getAmount(); // Output: 2000
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="pointers" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cursor"></i> Pointers in C++</h2>
              <div className="property-card">
                <h3 className="h4">What is a Pointer?</h3>
                <ul>
                  <li>Variable that stores memory address of another variable</li>
                  <li>Declared using <code>*</code> operator</li>
                  <li>Address of variable obtained using <code>&amp;</code> operator</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Pointer Example</h3>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
    int a = 20;
    int *p; // Pointer declaration
    p = &a; // Assigning address of a to p
    
    cout << "The address of a is: " << p;
    cout << "The value of a = " << *p; // Dereferencing
    return 0;
}`}</code></pre>
                <p><strong>Note:</strong></p>
                <ul>
                  <li><code>&amp;</code> - Reference operator (gets address of variable)</li>
                  <li><code>*</code> - Dereference operator (gets value at address)</li>
                </ul>
              </div>
            </section>

            <section id="structures" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-binary"></i> Structures in C++</h2>
              <div className="property-card">
                <h3 className="h4">What is a Structure?</h3>
                <ul>
                  <li>User-defined data type that groups different data types</li>
                  <li>Each element is called a member</li>
                  <li>Defined using <code>struct</code> keyword</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Structure Example</h3>
                <pre><code>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    struct {
        int id;
        string name;
        float fees;
    } s1;
    
    s1.id = 36;
    s1.name = "Dhoni";
    s1.fees = 15000.00;
    
    cout << s1.id << "endl";
    cout << s1.name << "endl";
    cout << s1.fees << "endl";
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="enums" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-list-check"></i> Enumerations in C++</h2>
              <div className="property-card">
                <h3 className="h4">What is an Enumeration?</h3>
                <ul>
                  <li>User-defined data type with constant values</li>
                  <li>Defined using <code>enum</code> keyword</li>
                  <li>Improves code readability</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Enumeration Example</h3>
                <pre><code>{`#include <iostream>
using namespace std;

enum Direction {
    North,
    South,
    East,
    West
};

int main() {
    enum Direction x = North; // Creating enum variable
    cout << x; // Output: 0 (North's index)
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="exception-handling" className="mb-5">
              <h2 className="h2 mb-3">
                <i className="bi bi-exclamation-triangle"></i> Exception Handling in C++
              </h2>

              {/* What is Exception Handling? */}
              <div className="property-card">
                <h3 className="h4">What is Exception Handling?</h3>
                <ul>
                  <li>Mechanism to handle runtime errors gracefully without crashing the program.</li>
                  <li>Uses <code>try</code>, <code>throw</code>, and <code>catch</code> blocks.</li>
                  <li>Helps write robust and fault-tolerant code.</li>
                </ul>
              </div>

              {/* Basic Syntax */}
              <div className="property-card mt-4">
                <h3 className="h4">1. Basic Syntax</h3>
                <pre><code>{`try {
  // Code that may throw an exception
  throw exception_type;
} catch (exception_type e) {
  // Handle exception
}`}</code></pre>
              </div>

              {/* Example: Division by Zero */}
              <div className="property-card mt-4">
                <h3 className="h4">2. Example: Division by Zero</h3>
                <pre><code>{`#include <iostream>
using namespace std;

int main() {
  int a = 10, b = 0;
  try {
    if (b == 0)
      throw "Division by zero error!";
    cout << a / b;
  } catch (const char* msg) {
    cout << "Exception caught: " << msg;
  }
  return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>Exception caught: Division by zero error!</code></p>
              </div>

              {/* Using std::exception */}
              <div className="property-card mt-4">
                <h3 className="h4">3. Using std::exception</h3>
                <pre><code>{`#include <iostream>
#include <stdexcept>
using namespace std;

int main() {
  try {
    throw runtime_error("Runtime error occurred!");
  } catch (const exception& e) {
    cout << "Caught exception: " << e.what();
  }
  return 0;
}`}</code></pre>
              </div>

              {/* Catch-All Block */}
              <div className="property-card mt-4">
                <h3 className="h4">5. Catch-All Block</h3>
                <p>Used to catch any type of exception:</p>
                <pre><code>{`try {
  throw "Error!";
} catch (...) {
  cout << "Caught some exception";
}`}</code></pre>
              </div>
            </section>

            <section id="files" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark"></i> File Handling in C++</h2>
              <div className="property-card">
                <h3 className="h4">File Handling Basics</h3>
                <ul>
                  <li>Need to include <code>&lt;fstream&gt;</code> library</li>
                  <li>Three main classes:
                    <ul>
                      <li><code>ofstream</code> - Write to files</li>
                      <li><code>ifstream</code> - Read from files</li>
                      <li><code>fstream</code> - Both read and write</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Writing to a File</h3>
                <pre><code>{`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream file("demo.txt"); // Create/open file
    file << "My name is Dhoni";
    file << "endl" << "My age is 43";
    file.close(); // Close file
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Reading from a File</h3>
                <pre><code>{`#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    string text;
    ifstream rfile("demo.txt"); // Open file for reading
    
    while(getline(rfile, text)) { // Read line by line
        cout << text << "endl";
    }
    
    rfile.close(); // Close file
    return 0;
}`}</code></pre>
              </div>
            </section>

            <section id="multithreading" className="mb-5">
              <h2 className="h2 mb-3">
                <i className="bi bi-shuffle"></i> Multithreading in C++
              </h2>

              {/* What is Multithreading */}
              <div className="property-card">
                <h3 className="h4">What is Multithreading?</h3>
                <ul>
                  <li>Multithreading allows concurrent execution of two or more parts of a program.</li>
                  <li>Introduced in C++11 via the &lt;thread&gt; library.</li>
                  <li>Each part of such a program is called a thread.</li>
                </ul>
              </div>

              {/* Creating a Thread */}
              <div className="property-card mt-4">
                <h3 className="h4">1. Creating a Thread</h3>
                <p><strong>Syntax:</strong></p>
                <pre><code>{`#include <thread>
std::thread t(function_name, arguments);`}</code></pre>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <iostream>
#include <thread>
using namespace std;

void display() {
    cout << "Hello from thread!" << endl;
}

int main() {
    thread t1(display);
    t1.join();
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>Hello from thread!</code></p>
              </div>

              {/* Join vs Detach */}
              <div className="property-card mt-4">
                <h3 className="h4">2. Join vs Detach</h3>
                <ul>
                  <li><code>join()</code>: Main thread waits for thread to complete.</li>
                  <li><code>detach()</code>: Thread runs independently in the background.</li>
                </ul>
                <pre><code>{`t1.join();   // blocking
t2.detach(); // non-blocking`}</code></pre>
              </div>

              {/* Passing Arguments */}
              <div className="property-card mt-4">
                <h3 className="h4">3. Passing Arguments to Thread</h3>

                <h4 className="h5 mt-3">By Value:</h4>
                <pre><code>{`void print(int x) {
    cout << x;
}

int main() {
    thread t(print, 100);
    t.join();
}`}</code></pre>

                <h4 className="h5 mt-3">By Reference (using std::ref):</h4>
                <pre><code>{`void add(int &x) {
    x += 10;
}

int main() {
    int val = 5;
    thread t(add, ref(val));
    t.join();
    cout << val;
}`}</code></pre>
              </div>

              {/* Lambda Thread */}
              <div className="property-card mt-4">
                <h3 className="h4">4. Lambda Thread</h3>
                <pre><code>{`int main() {
    thread t([](){
        cout << "Lambda thread" << endl;
    });
    t.join();
}`}</code></pre>
              </div>
            </section>

            <section id="stl" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-collection"></i> STL (Standard Template Library)</h2>

              <div className="property-card">
                <h3 className="h4">What is STL?</h3>
                <ul>
                  <li>A powerful set of C++ template classes to provide general-purpose classes and functions</li>
                  <li>Implements many popular and commonly used algorithms and data structures</li>
                  <li>Four components: Containers, Algorithms, Iterators, and Functions</li>
                </ul>
              </div>

              {/* Vector */}
              <div className="property-card mt-4">
                <h3 className="h4">1. Vector</h3>
                <p><strong>Definition:</strong> A dynamic array that can resize itself automatically when elements are inserted or deleted.</p>

                <h4 className="h5 mt-3">Syntax:</h4>
                <pre><code>{`#include <vector>
vector<int> v;`}</code></pre>

                <h4 className="h5 mt-3">Methods:</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>push_back()</code></td>
                      <td>Add element at end</td>
                      <td><code>v.push_back(5);</code></td>
                    </tr>
                    <tr>
                      <td><code>pop_back()</code></td>
                      <td>Remove last element</td>
                      <td><code>v.pop_back();</code></td>
                    </tr>
                    <tr>
                      <td><code>size()</code></td>
                      <td>Return size</td>
                      <td><code>v.size();</code></td>
                    </tr>
                    <tr>
                      <td><code>empty()</code></td>
                      <td>Check if empty</td>
                      <td><code>v.empty();</code></td>
                    </tr>
                    <tr>
                      <td><code>clear()</code></td>
                      <td>Remove all elements</td>
                      <td><code>v.clear();</code></td>
                    </tr>
                    <tr>
                      <td><code>at()</code></td>
                      <td>Access element with bounds checking</td>
                      <td><code>v.at(2);</code></td>
                    </tr>
                    <tr>
                      <td><code>front()</code></td>
                      <td>First element</td>
                      <td><code>v.front();</code></td>
                    </tr>
                    <tr>
                      <td><code>back()</code></td>
                      <td>Last element</td>
                      <td><code>v.back();</code></td>
                    </tr>
                    <tr>
                      <td><code>insert()</code></td>
                      <td>Insert at position</td>
                      <td><code>v.insert(v.begin()+1, 10);</code></td>
                    </tr>
                    <tr>
                      <td><code>erase()</code></td>
                      <td>Remove element(s)</td>
                      <td><code>v.erase(v.begin());</code></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3};
    v.push_back(4);
    v.insert(v.begin()+1, 5);
    v.pop_back();
    
    cout << "Size: " << v.size() << endl;
    cout << "Elements: ";
    for (int i : v) cout << i << " ";
    
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>Size: 4endlElements: 1 5 2 3</code></p>
              </div>

              {/* Pair */}
              <div className="property-card mt-4">
                <h3 className="h4">2. Pair</h3>
                <p><strong>Definition:</strong> A container that stores two data elements or objects.</p>

                <h4 className="h5 mt-3">Syntax:</h4>
                <pre><code>{`#include <utility>
pair<int, string> p;`}</code></pre>

                <h4 className="h5 mt-3">Methods:</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>make_pair()</code></td>
                      <td>Create pair</td>
                      <td><code>auto p = make_pair(1, "one");</code></td>
                    </tr>
                    <tr>
                      <td><code>first</code></td>
                      <td>Access first element</td>
                      <td><code>p.first;</code></td>
                    </tr>
                    <tr>
                      <td><code>second</code></td>
                      <td>Access second element</td>
                      <td><code>p.second;</code></td>
                    </tr>
                    <tr>
                      <td><code>tie()</code></td>
                      <td>Unpack pair</td>
                      <td><code>tie(x, y) = p;</code></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <iostream>
#include <utility>
using namespace std;

int main() {
    pair<int, string> p = {1, "Mugil"};
    auto p2 = make_pair(2, "Two");
    
    cout << p.first << " " << p.second << endl;
    cout << p2.first << " " << p2.second << endl;
    
    int x; string y;
    tie(x, y) = p;
    cout << "Unpacked: " << x << " " << y;
    
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>1 Mugilendl2 TwoendlUnpacked: 1 Mugil</code></p>
              </div>

              {/* Set */}
              <div className="property-card mt-4">
                <h3 className="h4">3. Set</h3>
                <p><strong>Definition:</strong> A container that stores unique elements in sorted order.</p>

                <h4 className="h5 mt-3">Syntax:</h4>
                <pre><code>{`#include <set>
set<int> s;`}</code></pre>

                <h4 className="h5 mt-3">Methods:</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>insert()</code></td>
                      <td>Add element</td>
                      <td><code>s.insert(5);</code></td>
                    </tr>
                    <tr>
                      <td><code>erase()</code></td>
                      <td>Remove element</td>
                      <td><code>s.erase(5);</code></td>
                    </tr>
                    <tr>
                      <td><code>find()</code></td>
                      <td>Find element</td>
                      <td><code>s.find(5);</code></td>
                    </tr>
                    <tr>
                      <td><code>count()</code></td>
                      <td>Check existence</td>
                      <td><code>s.count(5);</code></td>
                    </tr>
                    <tr>
                      <td><code>size()</code></td>
                      <td>Return size</td>
                      <td><code>s.size();</code></td>
                    </tr>
                    <tr>
                      <td><code>empty()</code></td>
                      <td>Check if empty</td>
                      <td><code>s.empty();</code></td>
                    </tr>
                    <tr>
                      <td><code>clear()</code></td>
                      <td>Remove all elements</td>
                      <td><code>s.clear();</code></td>
                    </tr>
                    <tr>
                      <td><code>lower_bound()</code></td>
                      <td>First element ≥ value</td>
                      <td><code>s.lower_bound(3);</code></td>
                    </tr>
                    <tr>
                      <td><code>upper_bound()</code></td>
                      <td>{`First element > value`}</td>
                      <td><code>s.upper_bound(3);</code></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> s = {5, 2, 3, 2};
    s.insert(4);
    s.erase(2);
    
    cout << "Size: " << s.size() << endl;
    cout << "Elements: ";
    for (int i : s) cout << i << " ";
    
    if (s.find(3) != s.end())
        cout << "endl3 found in set";
    
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>Size: 3endlElements: 3 4 5endl3 found in set</code></p>
              </div>

              {/* Map */}
              <div className="property-card mt-4">
                <h3 className="h4">4. Map</h3>
                <p><strong>Definition:</strong> Stores elements as key-value pairs. Keys are unique and sorted.</p>

                <h4 className="h5 mt-3">Syntax:</h4>
                <pre><code>{`#include <map>
map<int, string> m;`}</code></pre>

                <h4 className="h5 mt-3">Methods:</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>insert()</code></td>
                      <td>Add key-value pair</td>
                      <td><code>{`m.insert({1, "one"});`}</code></td>
                    </tr>
                    <tr>
                      <td><code>erase()</code></td>
                      <td>Remove by key</td>
                      <td><code>m.erase(1);</code></td>
                    </tr>
                    <tr>
                      <td><code>find()</code></td>
                      <td>Find by key</td>
                      <td><code>m.find(1);</code></td>
                    </tr>
                    <tr>
                      <td><code>count()</code></td>
                      <td>Check key existence</td>
                      <td><code>m.count(1);</code></td>
                    </tr>
                    <tr>
                      <td><code>size()</code></td>
                      <td>Return size</td>
                      <td><code>m.size();</code></td>
                    </tr>
                    <tr>
                      <td><code>empty()</code></td>
                      <td>Check if empty</td>
                      <td><code>m.empty();</code></td>
                    </tr>
                    <tr>
                      <td><code>clear()</code></td>
                      <td>Remove all elements</td>
                      <td><code>m.clear();</code></td>
                    </tr>
                    <tr>
                      <td><code>operator[]</code></td>
                      <td>Access or add element</td>
                      <td><code>m[1] = "one";</code></td>
                    </tr>
                    <tr>
                      <td><code>lower_bound()</code></td>
                      <td>First key ≥ value</td>
                      <td><code>m.lower_bound(3);</code></td>
                    </tr>
                    <tr>
                      <td><code>upper_bound()</code></td>
                      <td>{`First key > value`}</td>
                      <td><code>m.upper_bound(3);</code></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <iostream>
#include <map>
using namespace std;

int main() {
    map<int, string> m;
    m[1] = "One";
    m[2] = "Two";
    m.insert({3, "Three"});
    
    cout << "Size: " << m.size() << endl;
    for (auto p : m)
        cout << p.first << " -> " << p.second << endl;
    
    if (m.find(2) != m.end())
        cout << "Key 2 found";
    
    m.erase(1);
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>{`Size: 3endl1 -> Oneendl2 -> Twoendl3 -> ThreeendlKey 2 found`}</code></p>
              </div>

              {/* Unordered Map/Set */}
              <div className="property-card mt-4">
                <h3 className="h4">5. Unordered Map / Set</h3>
                <p><strong>Definition:</strong> Same as map/set but no sorting, faster average access (hash table based).</p>

                <h4 className="h5 mt-3">Syntax:</h4>
                <pre><code>{`#include <unordered_map>
#include <unordered_set>
unordered_set<int> us;
unordered_map<string, int> um;`}</code></pre>

                <h4 className="h5 mt-3">Methods:</h4>
                <p>Similar to map/set but without ordered operations like <code>lower_bound()</code></p>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>insert()</code></td>
                      <td>Add element</td>
                      <td><code>us.insert(5);</code></td>
                    </tr>
                    <tr>
                      <td><code>erase()</code></td>
                      <td>Remove element</td>
                      <td><code>us.erase(5);</code></td>
                    </tr>
                    <tr>
                      <td><code>find()</code></td>
                      <td>Find element</td>
                      <td><code>us.find(5);</code></td>
                    </tr>
                    <tr>
                      <td><code>count()</code></td>
                      <td>Check existence</td>
                      <td><code>us.count(5);</code></td>
                    </tr>
                    <tr>
                      <td><code>size()</code></td>
                      <td>Return size</td>
                      <td><code>us.size();</code></td>
                    </tr>
                    <tr>
                      <td><code>empty()</code></td>
                      <td>Check if empty</td>
                      <td><code>us.empty();</code></td>
                    </tr>
                    <tr>
                      <td><code>clear()</code></td>
                      <td>Remove all elements</td>
                      <td><code>us.clear();</code></td>
                    </tr>
                    <tr>
                      <td><code>operator[]</code> (map only)</td>
                      <td>Access or add element</td>
                      <td><code>um["key"] = 5;</code></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <iostream>
#include <unordered_set>
#include <unordered_map>
using namespace std;

int main() {
    unordered_set<int> us = {3, 1, 7, 1};
    us.insert(5);
    us.erase(1);
    
    cout << "Elements: ";
    for (int i : us) cout << i << " ";
    
    unordered_map<string, int> um;
    um["a"] = 10;
    um["b"] = 20;
    
    cout << "endlMap values: " << um["a"] << " " << um["b"];
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>Elements: 7 3 5endlMap values: 10 20</code></p>
              </div>

              {/* Stack */}
              <div className="property-card mt-4">
                <h3 className="h4">6. Stack</h3>
                <p><strong>Definition:</strong> LIFO (Last In First Out) data structure.</p>

                <h4 className="h5 mt-3">Syntax:</h4>
                <pre><code>{`#include <stack>
stack<int> st;`}</code></pre>

                <h4 className="h5 mt-3">Methods:</h4>
                <table className="comparison-table">
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
                      <td>Add element</td>
                      <td><code>st.push(5);</code></td>
                    </tr>
                    <tr>
                      <td><code>pop()</code></td>
                      <td>Remove top element</td>
                      <td><code>st.pop();</code></td>
                    </tr>
                    <tr>
                      <td><code>top()</code></td>
                      <td>Access top element</td>
                      <td><code>st.top();</code></td>
                    </tr>
                    <tr>
                      <td><code>size()</code></td>
                      <td>Return size</td>
                      <td><code>st.size();</code></td>
                    </tr>
                    <tr>
                      <td><code>empty()</code></td>
                      <td>Check if empty</td>
                      <td><code>st.empty();</code></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> st;
    st.push(1); st.push(2); st.push(3);
    
    cout << "Top: " << st.top() << endl;
    cout << "Size: " << st.size() << endl;
    
    cout << "Elements: ";
    while (!st.empty()) {
        cout << st.top() << " ";
        st.pop();
    }
    
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>Top: 3endlSize: 3endlElements: 3 2 1</code></p>
              </div>

              {/* Queue */}
              <div className="property-card mt-4">
                <h3 className="h4">7. Queue</h3>
                <p><strong>Definition:</strong> FIFO (First In First Out) data structure.</p>

                <h4 className="h5 mt-3">Syntax:</h4>
                <pre><code>{`#include <queue>
queue<int> q;`}</code></pre>

                <h4 className="h5 mt-3">Methods:</h4>
                <table className="comparison-table">
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
                      <td>Add element</td>
                      <td><code>q.push(5);</code></td>
                    </tr>
                    <tr>
                      <td><code>pop()</code></td>
                      <td>Remove front element</td>
                      <td><code>q.pop();</code></td>
                    </tr>
                    <tr>
                      <td><code>front()</code></td>
                      <td>Access front element</td>
                      <td><code>q.front();</code></td>
                    </tr>
                    <tr>
                      <td><code>back()</code></td>
                      <td>Access back element</td>
                      <td><code>q.back();</code></td>
                    </tr>
                    <tr>
                      <td><code>size()</code></td>
                      <td>Return size</td>
                      <td><code>q.size();</code></td>
                    </tr>
                    <tr>
                      <td><code>empty()</code></td>
                      <td>Check if empty</td>
                      <td><code>q.empty();</code></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;
    q.push(10); q.push(20); q.push(30);
    
    cout << "Front: " << q.front() << endl;
    cout << "Back: " << q.back() << endl;
    cout << "Size: " << q.size() << endl;
    
    cout << "Elements: ";
    while (!q.empty()) {
        cout << q.front() << " ";
        q.pop();
    }
    
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>Front: 10endlBack: 30endlSize: 3endlElements: 10 20 30</code></p>
              </div>

              {/* Priority Queue */}
              <div className="property-card mt-4">
                <h3 className="h4">8. Priority Queue</h3>
                <p><strong>Definition:</strong> A max heap by default (highest element on top).</p>

                <h4 className="h5 mt-3">Syntax:</h4>
                <pre><code>{`#include <queue>
priority_queue<int> pq;  // max heap
priority_queue<int, vector<int>, greater<int>> minpq;  // min heap`}</code></pre>

                <h4 className="h5 mt-3">Methods:</h4>
                <table className="comparison-table">
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
                      <td>Add element</td>
                      <td><code>pq.push(5);</code></td>
                    </tr>
                    <tr>
                      <td><code>pop()</code></td>
                      <td>Remove top element</td>
                      <td><code>pq.pop();</code></td>
                    </tr>
                    <tr>
                      <td><code>top()</code></td>
                      <td>Access top element</td>
                      <td><code>pq.top();</code></td>
                    </tr>
                    <tr>
                      <td><code>size()</code></td>
                      <td>Return size</td>
                      <td><code>pq.size();</code></td>
                    </tr>
                    <tr>
                      <td><code>empty()</code></td>
                      <td>Check if empty</td>
                      <td><code>pq.empty();</code></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <iostream>
#include <queue>
using namespace std;

int main() {
    // Max heap
    priority_queue<int> pq;
    pq.push(3); pq.push(5); pq.push(1);
    
    cout << "Max heap top: " << pq.top() << endl;
    
    // Min heap
    priority_queue<int, vector<int>, greater<int>> minpq;
    minpq.push(3); minpq.push(5); minpq.push(1);
    
    cout << "Min heap top: " << minpq.top() << endl;
    
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>Max heap top: 5endlMin heap top: 1</code></p>
              </div>

              {/* Deque */}
              <div className="property-card mt-4">
                <h3 className="h4">9. Deque</h3>
                <p><strong>Definition:</strong> Double Ended Queue - insertion/deletion from both ends.</p>

                <h4 className="h5 mt-3">Syntax:</h4>
                <pre><code>{`#include <deque>
deque<int> dq;`}</code></pre>

                <h4 className="h5 mt-3">Methods:</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>push_back()</code></td>
                      <td>Add element at end</td>
                      <td><code>dq.push_back(5);</code></td>
                    </tr>
                    <tr>
                      <td><code>push_front()</code></td>
                      <td>Add element at front</td>
                      <td><code>dq.push_front(1);</code></td>
                    </tr>
                    <tr>
                      <td><code>pop_back()</code></td>
                      <td>Remove last element</td>
                      <td><code>dq.pop_back();</code></td>
                    </tr>
                    <tr>
                      <td><code>pop_front()</code></td>
                      <td>Remove first element</td>
                      <td><code>dq.pop_front();</code></td>
                    </tr>
                    <tr>
                      <td><code>front()</code></td>
                      <td>Access first element</td>
                      <td><code>dq.front();</code></td>
                    </tr>
                    <tr>
                      <td><code>back()</code></td>
                      <td>Access last element</td>
                      <td><code>dq.back();</code></td>
                    </tr>
                    <tr>
                      <td><code>size()</code></td>
                      <td>Return size</td>
                      <td><code>dq.size();</code></td>
                    </tr>
                    <tr>
                      <td><code>empty()</code></td>
                      <td>Check if empty</td>
                      <td><code>dq.empty();</code></td>
                    </tr>
                    <tr>
                      <td><code>clear()</code></td>
                      <td>Remove all elements</td>
                      <td><code>dq.clear();</code></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> dq;
    dq.push_back(1);
    dq.push_front(2);
    dq.push_back(3);
    
    cout << "Front: " << dq.front() << endl;
    cout << "Back: " << dq.back() << endl;
    
    dq.pop_front();
    cout << "After pop_front: " << dq.front();
    
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>Front: 2endlBack: 3endlAfter pop_front: 1</code></p>
              </div>

              {/* Algorithms Header */}
              <div className="property-card mt-4">
                <h3 className="h4">10. Algorithms Header (&lt;algorithm&gt;)</h3>
                <p>Common STL functions:</p>

                <h4 className="h5 mt-3">Methods:</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Function</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>sort()</code></td>
                      <td>Sort elements in a range</td>
                      <td><code>sort(v.begin(), v.end());</code></td>
                    </tr>
                    <tr>
                      <td><code>reverse()</code></td>
                      <td>Reverse range</td>
                      <td><code>reverse(v.begin(), v.end());</code></td>
                    </tr>
                    <tr>
                      <td><code>count()</code></td>
                      <td>Count occurrences</td>
                      <td><code>count(v.begin(), v.end(), 5);</code></td>
                    </tr>
                    <tr>
                      <td><code>find()</code></td>
                      <td>Find element</td>
                      <td><code>find(v.begin(), v.end(), 5);</code></td>
                    </tr>
                    <tr>
                      <td><code>binary_search()</code></td>
                      <td>Check if element exists (sorted)</td>
                      <td><code>binary_search(v.begin(), v.end(), 5);</code></td>
                    </tr>
                    <tr>
                      <td><code>lower_bound()</code></td>
                      <td>First pos ≥ element (sorted)</td>
                      <td><code>lower_bound(v.begin(), v.end(), 5);</code></td>
                    </tr>
                    <tr>
                      <td><code>upper_bound()</code></td>
                      <td>{`First pos > element (sorted)`}</td>
                      <td><code>upper_bound(v.begin(), v.end(), 5);</code></td>
                    </tr>
                    <tr>
                      <td><code>max_element()</code></td>
                      <td>Find max in range</td>
                      <td><code>*max_element(v.begin(), v.end());</code></td>
                    </tr>
                    <tr>
                      <td><code>min_element()</code></td>
                      <td>Find min in range</td>
                      <td><code>*min_element(v.begin(), v.end());</code></td>
                    </tr>
                    <tr>
                      <td><code>accumulate()</code></td>
                      <td>Sum range values (&lt;numeric&gt;)</td>
                      <td><code>accumulate(v.begin(), v.end(), 0);</code></td>
                    </tr>
                    <tr>
                      <td><code>fill()</code></td>
                      <td>Fill range with value</td>
                      <td><code>fill(v.begin(), v.end(), 0);</code></td>
                    </tr>
                    <tr>
                      <td><code>copy()</code></td>
                      <td>Copy range</td>
                      <td><code>copy(src.begin(), src.end(), dest.begin());</code></td>
                    </tr>
                    <tr>
                      <td><code>unique()</code></td>
                      <td>Remove consecutive duplicates</td>
                      <td><code>unique(v.begin(), v.end());</code></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <algorithm>
#include <vector>
#include <iostream>
#include <numeric>
using namespace std;

int main() {
    vector<int> v = {4, 2, 1, 3, 2, 5};
    
    sort(v.begin(), v.end());
    reverse(v.begin(), v.end());
    
    cout << "Sorted reversed: ";
    for (int i : v) cout << i << " ";
    
    cout << "endlCount of 2: " << count(v.begin(), v.end(), 2);
    cout << "endlMax: " << *max_element(v.begin(), v.end());
    cout << "endlSum: " << accumulate(v.begin(), v.end(), 0);
    
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>Sorted reversed: 5 4 3 2 2 1endlCount of 2: 2endlMax: 5endlSum: 17</code></p>
              </div>

              {/* Iterators */}
              <div className="property-card mt-4">
                <h3 className="h4">11. Iterators</h3>
                <p><strong>Definition:</strong> An iterator is like a pointer used to access elements in STL containers.</p>

                <h4 className="h5 mt-3">Types:</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Iterator</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>begin()</code></td>
                      <td>Iterator to first element</td>
                    </tr>
                    <tr>
                      <td><code>end()</code></td>
                      <td>Iterator to position after last element</td>
                    </tr>
                    <tr>
                      <td><code>rbegin()</code></td>
                      <td>Reverse iterator to last element</td>
                    </tr>
                    <tr>
                      <td><code>rend()</code></td>
                      <td>Reverse iterator to position before first</td>
                    </tr>
                    <tr>
                      <td><code>cbegin()</code>, <code>cend()</code></td>
                      <td>Const iterators</td>
                    </tr>
                    <tr>
                      <td><code>crbegin()</code>, <code>crend()</code></td>
                      <td>Const reverse iterators</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {10, 20, 30};
    
    // Forward iteration
    cout << "Forward: ";
    for (vector<int>::iterator it = v.begin(); it != v.end(); ++it)
        cout << *it << " ";
    
    // Reverse iteration
    cout << "endlReverse: ";
    for (vector<int>::reverse_iterator it = v.rbegin(); it != v.rend(); ++it)
        cout << *it << " ";
    
    // Auto keyword
    cout << "endlAuto: ";
    for (auto it = v.begin(); it != v.end(); ++it)
        cout << *it << " ";
    
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>Forward: 10 20 30endlReverse: 30 20 10endlAuto: 10 20 30</code></p>
              </div>

              {/* Lambda Functions */}
              <div className="property-card mt-4">
                <h3 className="h4">12. Lambda Functions</h3>
                <p><strong>Definition:</strong> Anonymous functions used as arguments to STL algorithms.</p>

                <h4 className="h5 mt-3">Syntax:</h4>
                <pre><code>{`[capture](parameters) -> return_type { body }`}</code></pre>

                <h4 className="h5 mt-3">Capture Options:</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Capture</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>[]</code></td>
                      <td>Capture nothing</td>
                    </tr>
                    <tr>
                      <td><code>[&]</code></td>
                      <td>Capture all by reference</td>
                    </tr>
                    <tr>
                      <td><code>[=]</code></td>
                      <td>Capture all by value</td>
                    </tr>
                    <tr>
                      <td><code>[var]</code></td>
                      <td>Capture var by value</td>
                    </tr>
                    <tr>
                      <td><code>[&var]</code></td>
                      <td>Capture var by reference</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <algorithm>
#include <vector>
#include <iostream>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3, 4, 5};
    int threshold = 3;
    
    // Count elements greater than threshold
    int count = count_if(v.begin(), v.end(), [threshold](int x) {
        return x > threshold;
    });
    cout << "Count: " << count << endl;
    
    // Sort in descending order
    sort(v.begin(), v.end(), [](int a, int b) {
        return a > b;
    });
    
    cout << "Sorted: ";
    for (int i : v) cout << i << " ";
    
    // Modify elements with capture by reference
    int sum = 0;
    for_each(v.begin(), v.end(), [&sum](int x) {
        sum += x;
    });
    cout << "endlSum: " << sum;
    
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>Count: 2endlSorted: 5 4 3 2 1endlSum: 15</code></p>
              </div>

              {/* Custom Sorting */}
              <div className="property-card mt-4">
                <h3 className="h4">13. Custom Sorting with Comparator</h3>

                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`#include <algorithm>
#include <vector>
#include <iostream>
using namespace std;

// Custom comparator function
bool customCompare(int a, int b) {
    return a > b;  // descending order
}

// Custom comparator for pairs
bool pairCompare(const pair<int, int>& a, const pair<int, int>& b) {
    if (a.first == b.first)
        return a.second < b.second;
    return a.first > b.first;
}

int main() {
    vector<int> v = {5, 2, 9, 1};
    sort(v.begin(), v.end(), customCompare);
    
    cout << "Descending: ";
    for (int i : v) cout << i << " ";
    
    vector<pair<int, int>> pairs = {{1, 2}, {3, 1}, {1, 1}, {3, 2}};
    sort(pairs.begin(), pairs.end(), pairCompare);
    
    cout << "endlPairs sorted: ";
    for (auto p : pairs)
        cout << "(" << p.first << "," << p.second << ") ";
    
    // Using lambda for custom sort
    sort(v.begin(), v.end(), [](int a, int b) {
        return abs(a) < abs(b);  // sort by absolute value
    });
    
    return 0;
}`}</code></pre>
                <p><strong>Output:</strong> <code>Descending: 9 5 2 1endlPairs sorted: (3,1) (3,2) (1,1) (1,2)</code></p>
              </div>

              {/* STL Container Summary */}
              <div className="property-card mt-4">
                <h3 className="h4">14. STL Container Summary</h3>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Container</th>
                      <th>Ordered</th>
                      <th>Allows Duplicate</th>
                      <th>Access Time</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>vector</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>O(1) random access</td>
                      <td>Dynamic array, frequent access</td>
                    </tr>
                    <tr>
                      <td>deque</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>O(1) random access</td>
                      <td>Frequent insert/delete at both ends</td>
                    </tr>
                    <tr>
                      <td>list</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>O(n) access</td>
                      <td>Frequent insert/delete anywhere</td>
                    </tr>
                    <tr>
                      <td>set</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>O(log n)</td>
                      <td>Unique sorted elements</td>
                    </tr>
                    <tr>
                      <td>multiset</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>O(log n)</td>
                      <td>Sorted elements with duplicates</td>
                    </tr>
                    <tr>
                      <td>unordered_set</td>
                      <td>No</td>
                      <td>No</td>
                      <td>O(1) average</td>
                      <td>Fast access, unique items</td>
                    </tr>
                    <tr>
                      <td>map</td>
                      <td>Yes</td>
                      <td>No (key)</td>
                      <td>O(log n)</td>
                      <td>Key-value pairs, sorted by key</td>
                    </tr>
                    <tr>
                      <td>multimap</td>
                      <td>Yes</td>
                      <td>Yes (key)</td>
                      <td>O(log n)</td>
                      <td>Key-value with duplicate keys</td>
                    </tr>
                    <tr>
                      <td>unordered_map</td>
                      <td>No</td>
                      <td>No (key)</td>
                      <td>O(1) average</td>
                      <td>Fast key-value lookup</td>
                    </tr>
                    <tr>
                      <td>stack</td>
                      <td>N/A</td>
                      <td>N/A</td>
                      <td>O(1) top access</td>
                      <td>LIFO access</td>
                    </tr>
                    <tr>
                      <td>queue</td>
                      <td>N/A</td>
                      <td>N/A</td>
                      <td>O(1) front/back</td>
                      <td>FIFO access</td>
                    </tr>
                    <tr>
                      <td>priority_queue</td>
                      <td>N/A</td>
                      <td>N/A</td>
                      <td>O(1) top access</td>
                      <td>Max/Min element on top</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Common STL Algorithms */}
              <div className="property-card mt-4">
                <h3 className="h4">15. Common STL Algorithms</h3>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Algorithm</th>
                      <th>Description</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>sort()</code></td>
                      <td>Sort elements</td>
                      <td>O(n log n)</td>
                    </tr>
                    <tr>
                      <td><code>stable_sort()</code></td>
                      <td>Sort with stable ordering</td>
                      <td>O(n log n)</td>
                    </tr>
                    <tr>
                      <td><code>partial_sort()</code></td>
                      <td>Partially sort range</td>
                      <td>O(n log k)</td>
                    </tr>
                    <tr>
                      <td><code>nth_element()</code></td>
                      <td>Put nth element in sorted position</td>
                      <td>O(n)</td>
                    </tr>
                    <tr>
                      <td><code>binary_search()</code></td>
                      <td>Check if element exists</td>
                      <td>O(log n)</td>
                    </tr>
                    <tr>
                      <td><code>lower_bound()</code></td>
                      <td>First element ≥ value</td>
                      <td>O(log n)</td>
                    </tr>
                    <tr>
                      <td><code>upper_bound()</code></td>
                      <td>{`First element > value`}</td>
                      <td>O(log n)</td>
                    </tr>
                    <tr>
                      <td><code>merge()</code></td>
                      <td>Merge two sorted ranges</td>
                      <td>O(n)</td>
                    </tr>
                    <tr>
                      <td><code>inplace_merge()</code></td>
                      <td>Merge consecutive sorted ranges</td>
                      <td>O(n log n)</td>
                    </tr>
                    <tr>
                      <td><code>includes()</code></td>
                      <td>Check if sorted range includes another</td>
                      <td>O(n)</td>
                    </tr>
                    <tr>
                      <td><code>set_union()</code></td>
                      <td>Union of two sorted ranges</td>
                      <td>O(n)</td>
                    </tr>
                    <tr>
                      <td><code>set_intersection()</code></td>
                      <td>Intersection of two sorted ranges</td>
                      <td>O(n)</td>
                    </tr>
                    <tr>
                      <td><code>set_difference()</code></td>
                      <td>Difference of two sorted ranges</td>
                      <td>O(n)</td>
                    </tr>
                    <tr>
                      <td><code>set_symmetric_difference()</code></td>
                      <td>Symmetric difference</td>
                      <td>O(n)</td>
                    </tr>
                    <tr>
                      <td><code>min(), max()</code></td>
                      <td>Find min/max of two values</td>
                      <td>O(1)</td>
                    </tr>
                    <tr>
                      <td><code>minmax()</code></td>
                      <td>Find both min and max</td>
                      <td>O(1)</td>
                    </tr>
                    <tr>
                      <td><code>min_element()</code></td>
                      <td>Find smallest element in range</td>
                      <td>O(n)</td>
                    </tr>
                    <tr>
                      <td><code>max_element()</code></td>
                      <td>Find largest element in range</td>
                      <td>O(n)</td>
                    </tr>
                    <tr>
                      <td><code>lexicographical_compare()</code></td>
                      <td>Lexicographical comparison</td>
                      <td>O(n)</td>
                    </tr>
                    <tr>
                      <td><code>next_permutation()</code></td>
                      <td>Transform to next permutation</td>
                      <td>O(n)</td>
                    </tr>
                    <tr>
                      <td><code>prev_permutation()</code></td>
                      <td>Transform to previous permutation</td>
                      <td>O(n)</td>
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
          <p>C++ Notes &copy; 2025 | Created by Mugilvannan P.</p>
        </div>
      </footer>
    </div>
  );
}

export default CppNotes;