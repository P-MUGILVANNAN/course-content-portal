import React from 'react';

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
              <a className="nav-link" href="#files"><i className="bi bi-file-earmark"></i> File Handling</a>
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
        cout << i << "\n";
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
        cout << i << "\n";
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
        cout << i << "\n";
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
        cout << i << "\n";
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
        cout << i << "\n";
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
    cout << sqrt(64) << "\n"; // Square root
    cout << ceil(4.137) << "\n"; // Round up
    cout << floor(4.768) << "\n"; // Round down
    cout << pow(2, 3) << "\n"; // Power (2^3)
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
        cout << "\n";
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
                <h3 className="h4">Class and Object</h3>
                <p><strong>Class:</strong> Blueprint for creating objects (defines properties and behaviors)</p>
                <p><strong>Object:</strong> Instance of a class (real-world entity with state and behavior)</p>
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
    cout << obj.id << "\n"; // Accessing property
    cout << obj.name << "\n"; // Accessing property
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
                <p>Special methods called automatically when an object is created</p>
                <h4 className="h5 mt-3">Default Constructor</h4>
                <pre><code>{`#include <iostream>
using namespace std;

class Operator {
    public:
        Operator() { // Default constructor
            int a = 10;
            int b = 100;
            cout << (a + b) << "\n";
            cout << "Constructor is called";
        }
};

int main() {
    Operator obj; // Constructor called automatically
    return 0;
}`}</code></pre>

                <h4 className="h5 mt-3">Parameterized Constructor</h4>
                <pre><code>{`#include <iostream>
using namespace std;

class Operator {
    public:
        Operator(int a, int b) { // Parameterized constructor
            cout << (a + b) << "\n";
            cout << "Parameterized Constructor is called";
        }
};

int main() {
    Operator obj(100, 50); // Passing arguments
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Inheritance</h3>
                <p>Mechanism where a new class acquires properties and behaviors from an existing class</p>
                <p><strong>Parent Class:</strong> Base class (superclass)</p>
                <p><strong>Child Class:</strong> Derived class (subclass)</p>
                
                <h4 className="h5 mt-3">Types of Inheritance</h4>
                <ol>
                  <li>Single level inheritance - one parent one child</li>
                  <li>Multi level inheritance - multiple parents at different levels</li>
                  <li>Multiple inheritance - multiple parents at same level</li>
                  <li>Hierarchical inheritance - one parent many children</li>
                  <li>Hybrid inheritance - combination of multiple and hierarchical</li>
                </ol>

                <h4 className="h5 mt-3">Single Level Inheritance</h4>
                <pre><code>{`#include <iostream>
using namespace std;

class Parent {
    public:
        void abc() {
            cout << "Parent Method";
        }
};

class Child : public Parent {
    public:
        void def() {
            cout << "Child Method";
        }
};

int main() {
    Child obj;
    obj.abc(); // Inherited from Parent
    cout << "\n";
    obj.def(); // Child's own method
    return 0;
}`}</code></pre>

                <h4 className="h5 mt-3">Multi-Level Inheritance</h4>
                <pre><code>{`#include <iostream>
using namespace std;

class Grandpa {
    public:
        void xyz() {
            cout << "Grandpa Method";
        }
};

class Parent : public Grandpa {
    public:
        void abc() {
            cout << "Parent Method";
        }
};

class Child : public Parent {
    public:
        void def() {
            cout << "Child Method";
        }
};

int main() {
    Child obj;
    obj.xyz(); // From Grandpa
    cout << "\n";
    obj.abc(); // From Parent
    cout << "\n";
    obj.def(); // Child's own method
    return 0;
}`}</code></pre>

                <h4 className="h5 mt-3">Multiple Inheritance</h4>
                <pre><code>{`#include <iostream>
using namespace std;

class Father {
    public:
        void xyz() {
            cout << "Father Method";
        }
};

class Mother {
    public:
        void abc() {
            cout << "Mother Method";
        }
};

class Child : public Father, public Mother {
    public:
        void def() {
            cout << "Child Method";
        }
};

int main() {
    Child obj;
    obj.xyz(); // From Father
    cout << "\n";
    obj.abc(); // From Mother
    cout << "\n";
    obj.def(); // Child's own method
    return 0;
}`}</code></pre>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Polymorphism</h3>
                <p>"Poly" means many, "morph" means forms - ability to take many forms</p>
                <h4 className="h5 mt-3">Types of Polymorphism</h4>
                <ol>
                  <li>Compile-time polymorphism (method overloading)</li>
                  <li>Run-time polymorphism (method overriding)</li>
                </ol>

                <h4 className="h5 mt-3">Method Overloading</h4>
                <pre><code>{`#include <iostream>
using namespace std;

class Overload {
    public:
        void add(int a, int b) {
            cout << (a + b) << "\n";
        }
        void add(int a, int b, int c) {
            cout << (a + b + c) << "\n";
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
    cout << "\n";
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
    
    cout << s1.id << "\n";
    cout << s1.name << "\n";
    cout << s1.fees << "\n";
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
    file << "\n" << "My age is 43";
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
        cout << text << "\n";
    }
    
    rfile.close(); // Close file
    return 0;
}`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>C++ Notes &copy; 2025 | Comprehensive C++ Programming Guide</p>
        </div>
      </footer>
    </div>
  );
}

export default CppNotes;