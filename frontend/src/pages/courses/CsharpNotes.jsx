import React from 'react';

function CsharpNotes() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-cs"></i> C# Notes</h1>
          <p className="lead">Your Comprehensive Guide to C# Programming</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction to C#</a>
              <a className="nav-link" href="#syntax"><i className="bi bi-file-earmark-code"></i> Basic Syntax</a>
              <a className="nav-link" href="#operators"><i className="bi bi-calculator"></i> Operators</a>
              <a className="nav-link" href="#control"><i className="bi bi-code-square"></i> Control Statements</a>
              <a className="nav-link" href="#arrays"><i className="bi bi-collection"></i> Arrays</a>
              <a className="nav-link" href="#strings"><i className="bi bi-type"></i> Strings</a>
              <a className="nav-link" href="#classes"><i className="bi bi-box"></i> Classes & Objects</a>
              <a className="nav-link" href="#inheritance"><i className="bi bi-diagram-2"></i> Inheritance</a>
              <a className="nav-link" href="#polymorphism"><i className="bi bi-shapes"></i> Polymorphism</a>
              <a className="nav-link" href="#abstraction"><i className="bi bi-eye-slash"></i> Abstraction</a>
              <a className="nav-link" href="#encapsulation"><i className="bi bi-shield-lock"></i> Encapsulation</a>
              <a className="nav-link" href="#exceptions"><i className="bi bi-exclamation-triangle"></i> Exception Handling</a>
              <a className="nav-link" href="#files"><i className="bi bi-file-earmark"></i> File Handling</a>
              <a className="nav-link" href="#collections"><i className="bi bi-collection"></i> Collections</a>
              <a className="nav-link" href="#linq"><i className="bi bi-search"></i> LINQ</a>
              <a className="nav-link" href="#delegates"><i className="bi bi-arrow-left-right"></i> Delegates</a>
              <a className="nav-link" href="#generics"><i className="bi bi-braces"></i> Generics</a>
              <a className="nav-link" href="#threading"><i className="bi bi-cpu"></i> Multithreading</a>
              <a className="nav-link" href="#async"><i className="bi bi-hourglass-split"></i> Async Programming</a>
              <a className="nav-link" href="#ado"><i className="bi bi-database"></i> ADO.NET</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to C#</h2>
              
              <div className="property-card">
                <h3 className="h4">What is C#?</h3>
                <ul>
                  <li>C# (pronounced "C-Sharp") is a <strong>modern, object-oriented programming language</strong> developed by <strong>Microsoft</strong></li>
                  <li>It runs on the .NET <strong>platform</strong> and is widely used to build <strong>Windows applications</strong>, <strong>web apps</strong>, <strong>game development (Unity)</strong>, and more</li>
                  <li>C# is syntactically similar to Java and C++</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Features of C#</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Object-Oriented</td>
                      <td>Everything is treated as an object</td>
                    </tr>
                    <tr>
                      <td>Type-Safe</td>
                      <td>Prevents illegal memory access</td>
                    </tr>
                    <tr>
                      <td>Rich Library</td>
                      <td>.NET offers built-in libraries for I/O, DB, UI, etc.</td>
                    </tr>
                    <tr>
                      <td>Automatic Garbage Collection</td>
                      <td>Unused objects are cleaned automatically</td>
                    </tr>
                    <tr>
                      <td>Interoperability</td>
                      <td>Works with COM and native APIs</td>
                    </tr>
                    <tr>
                      <td>Modern & Scalable</td>
                      <td>Supports modern constructs like async/await, LINQ, etc.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">History of C#</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Version</th>
                      <th>Year</th>
                      <th>Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>C# 1.0</td>
                      <td>2002</td>
                      <td>Basic OOP, Value Types, Classes</td>
                    </tr>
                    <tr>
                      <td>C# 2.0</td>
                      <td>2005</td>
                      <td>Generics, Anonymous Methods</td>
                    </tr>
                    <tr>
                      <td>C# 3.0</td>
                      <td>2007</td>
                      <td>LINQ, Lambda Expressions</td>
                    </tr>
                    <tr>
                      <td>C# 5.0</td>
                      <td>2012</td>
                      <td>async / await</td>
                    </tr>
                    <tr>
                      <td>C# 7.x</td>
                      <td>2017</td>
                      <td>Tuples, Pattern Matching</td>
                    </tr>
                    <tr>
                      <td>C# 8.0</td>
                      <td>2019</td>
                      <td>Nullable Types, Async Streams</td>
                    </tr>
                    <tr>
                      <td>C# 10/11</td>
                      <td>2021-22</td>
                      <td>Global usings, Record structs, etc.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">C# Program Structure</h3>
                <p>Here's a simple C# "Hello World" program:</p>
                <pre><code>{`using System;

namespace HelloWorldApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}`}</code></pre>
                <p>Explanation:</p>
                <ul>
                  <li><code>using System;</code> → Imports the System namespace (like #include in C++)</li>
                  <li><code>namespace HelloWorldApp</code> → Logical grouping of classes</li>
                  <li><code>class Program</code> → Declares a class named Program</li>
                  <li><code>static void Main(string[] args)</code> → Entry point of the program</li>
                  <li><code>Console.WriteLine()</code> → Prints text to the console</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">.NET Framework vs .NET Core vs .NET 5+</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>.NET Framework</th>
                      <th>.NET Core</th>
                      <th>.NET (5/6/7+)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Platform</td>
                      <td>Windows-only</td>
                      <td>Cross-platform</td>
                      <td>Cross-platform</td>
                    </tr>
                    <tr>
                      <td>Performance</td>
                      <td>Moderate</td>
                      <td>Faster</td>
                      <td>Fastest</td>
                    </tr>
                    <tr>
                      <td>Future Support</td>
                      <td>Limited</td>
                      <td>Legacy</td>
                      <td>Actively developed</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2">Modern C# apps are built on .NET 6/7/8 (not .NET Framework)</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">How C# Works?</h3>
                <ol>
                  <li><strong>Source Code</strong> (.cs) → written by developer</li>
                  <li><strong>Compiler</strong> (csc) compiles it into <strong>Intermediate Language (IL)</strong></li>
                  <li>IL is executed by <strong>CLR (Common Language Runtime)</strong></li>
                  <li>CLR handles:
                    <ul>
                      <li>Just-In-Time (JIT) compilation</li>
                      <li>Garbage Collection</li>
                      <li>Exception Handling</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </section>

            <section id="syntax" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> Basic Syntax & Data Types</h2>
              
              <div className="property-card">
                <h3 className="h4">C# Syntax Overview</h3>
                <ul>
                  <li><strong>C# is case-sensitive</strong></li>
                  <li>Every statement ends with a <strong>semicolon (;)</strong></li>
                  <li>The main function is always <code>static void Main(string[] args)</code></li>
                  <li>Curly braces <code>{}</code> define blocks like classes, methods, loops, etc.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Variables in C#</h3>
                <p>Variables store data. You must declare them with a <strong>data type</strong> before use.</p>
                <pre><code>{`int age = 25;
string name = "Mugil";
bool isActive = true;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Data Types in C#</h3>
                <h4>Value Types (stored in stack – fixed size)</h4>
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
                      <td>int</td>
                      <td>Integer</td>
                      <td><code>int x = 10;</code></td>
                    </tr>
                    <tr>
                      <td>float</td>
                      <td>Floating point</td>
                      <td><code>float f = 3.14f;</code></td>
                    </tr>
                    <tr>
                      <td>double</td>
                      <td>Double precision</td>
                      <td><code>double d = 5.678;</code></td>
                    </tr>
                    <tr>
                      <td>char</td>
                      <td>Single character</td>
                      <td><code>char c = 'A';</code></td>
                    </tr>
                    <tr>
                      <td>bool</td>
                      <td>Boolean</td>
                      <td><code>bool b = true;</code></td>
                    </tr>
                    <tr>
                      <td>byte</td>
                      <td>0 to 255</td>
                      <td><code>byte b = 100;</code></td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="mt-4">Reference Types (stored in heap – dynamic memory)</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>string</td>
                      <td>Sequence of characters</td>
                    </tr>
                    <tr>
                      <td>object</td>
                      <td>Base type of all types</td>
                    </tr>
                    <tr>
                      <td>array</td>
                      <td>Group of elements</td>
                    </tr>
                    <tr>
                      <td>class / interface</td>
                      <td>Custom objects</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Type Conversion</h3>
                <h4>Implicit Conversion (smaller to larger type)</h4>
                <pre><code>{`int a = 10;
double b = a; // automatic`}</code></pre>
                
                <h4>Explicit Conversion (Casting) (larger to smaller)</h4>
                <pre><code>{`double x = 12.5;
int y = (int)x; // manual`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Boxing and Unboxing</h3>
                <p>Boxing = Value Type → Object</p>
                <pre><code>{`int num = 100;
object obj = num; // Boxing`}</code></pre>
                
                <p>Unboxing = Object → Value Type</p>
                <pre><code>{`object obj = 100;
int num = (int)obj; // Unboxing`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Constants and Readonly</h3>
                <ul>
                  <li><code>const</code> = compile-time constant</li>
                  <li><code>readonly</code> = runtime constant (mostly used in classes)</li>
                </ul>
                <pre><code>{`const double PI = 3.14;
readonly int id;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">String Interpolation & Verbatim Strings</h3>
                <pre><code>{`string name = "Mugil";
int age = 22;
Console.WriteLine($"Name: {name}, Age: {age}");
// Interpolation

string path = @"C:\Users\Mugil\Desktop"; // Verbatim`}</code></pre>
                
                <h4 className="mt-3">Example Program</h4>
                <pre><code>{`using System;

class Program
{
    static void Main()
    {
        int age = 25;
        string name = "Mugil";
        double salary = 20000.50;

        Console.WriteLine($"Name: {name}, Age: {age}, Salary: {salary}");
    }
}`}</code></pre>
              </div>
            </section>

            <section id="operators" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> Operators in C#</h2>
              <p>Operators are symbols that perform operations on variables and values.</p>
              
              <div className="property-card">
                <h3 className="h4">1. Arithmetic Operators</h3>
                <table>
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
                      <td>a + b</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>Subtraction</td>
                      <td>a - b</td>
                    </tr>
                    <tr>
                      <td>*</td>
                      <td>Multiplication</td>
                      <td>a * b</td>
                    </tr>
                    <tr>
                      <td>/</td>
                      <td>Division</td>
                      <td>a / b</td>
                    </tr>
                    <tr>
                      <td>%</td>
                      <td>Modulus (remainder)</td>
                      <td>a % b</td>
                    </tr>
                    <tr>
                      <td>++</td>
                      <td>Increment</td>
                      <td>a++ or ++a</td>
                    </tr>
                    <tr>
                      <td>--</td>
                      <td>Decrement</td>
                      <td>a-- or --a</td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="mt-3">Example:</h4>
                <pre><code>{`int a = 10, b = 3;

Console.WriteLine(a + b); // 13
Console.WriteLine(a % b); // 1`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Relational / Comparison Operators</h3>
                <table>
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
                      <td>a == b</td>
                    </tr>
                    <tr>
                      <td>!=</td>
                      <td>Not equal to</td>
                      <td>a != b</td>
                    </tr>
                    <tr>
                      <td>&gt;</td>
                      <td>Greater than</td>
                      <td>a &gt; b</td>
                    </tr>
                    <tr>
                      <td>&lt;</td>
                      <td>Less than</td>
                      <td>a &lt; b</td>
                    </tr>
                    <tr>
                      <td>&gt;=</td>
                      <td>Greater or equal</td>
                      <td>a &gt;= b</td>
                    </tr>
                    <tr>
                      <td>&lt;=</td>
                      <td>Less or equal</td>
                      <td>a &lt;= b</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Logical Operators</h3>
                <table>
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
                      <td>a &gt; 5 &amp;&amp; b &lt; 10</td>
                    </tr>
                    <tr>
                      <td>||</td>
                      <td>Logical OR</td>
                      <td>a &gt; 5 || b &lt; 10</td>
                    </tr>
                    <tr>
                      <td>!</td>
                      <td>Logical NOT</td>
                      <td>!(a &gt; 5)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Bitwise Operators</h3>
                <p>Used to perform bit-level operations.</p>
                <table>
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Name</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&amp;</td>
                      <td>AND</td>
                      <td>1 if both bits are 1</td>
                    </tr>
                    <tr>
                      <td>|</td>
                      <td>OR</td>
                      <td>1 if any bit is 1</td>
                    </tr>
                    <tr>
                      <td>^</td>
                      <td>XOR</td>
                      <td>1 if bits are different</td>
                    </tr>
                    <tr>
                      <td>~</td>
                      <td>NOT</td>
                      <td>Inverts all bits</td>
                    </tr>
                    <tr>
                      <td>&lt;&lt;</td>
                      <td>Left Shift</td>
                      <td>Shifts bits left</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt;</td>
                      <td>Right Shift</td>
                      <td>Shifts bits right</td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="mt-3">Example:</h4>
                <pre><code>{`int a = 5;    // 0101
int b = 3;    // 0011

Console.WriteLine(a & b); // 0001 = 1
Console.WriteLine(a | b); // 0111 = 7`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Assignment Operators</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Equivalent To</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>=</td>
                      <td>Assignment</td>
                      <td>a = b</td>
                    </tr>
                    <tr>
                      <td>+=</td>
                      <td>Add and assign</td>
                      <td>a = a + b</td>
                    </tr>
                    <tr>
                      <td>-=</td>
                      <td>Subtract and assign</td>
                      <td>a = a - b</td>
                    </tr>
                    <tr>
                      <td>*=</td>
                      <td>Multiply and assign</td>
                      <td>a = a * b</td>
                    </tr>
                    <tr>
                      <td>/=</td>
                      <td>Divide and assign</td>
                      <td>a = a / b</td>
                    </tr>
                    <tr>
                      <td>%=</td>
                      <td>Modulus and assign</td>
                      <td>a = a % b</td>
                    </tr>
                    <tr>
                      <td>&lt;&lt;=</td>
                      <td>Left shift and assign</td>
                      <td>a = a &lt;&lt; b</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt;=</td>
                      <td>Right shift and assign</td>
                      <td>a = a &gt;&gt; b</td>
                    </tr>
                    <tr>
                      <td>&amp;=</td>
                      <td>Bitwise AND and assign</td>
                      <td>a = a &amp; b</td>
                    </tr>
                    <tr>
                      <td>|=</td>
                      <td>Bitwise OR and assign</td>
                      <td>a = a | b</td>
                    </tr>
                    <tr>
                      <td>^=</td>
                      <td>Bitwise XOR and assign</td>
                      <td>a = a ^ b</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Conditional (Ternary) Operator</h3>
                <p>Used to evaluate expressions in a single line:</p>
                <pre><code>{`condition ? expression1 : expression2;`}</code></pre>
                
                <h4 className="mt-3">Example:</h4>
                <pre><code>{`int a = 10;
string result = (a > 5) ? "Big" : "Small";`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">7. Null-Coalescing Operators</h3>
                <p><code>??</code> → Returns left value if not null, else right.</p>
                <pre><code>{`string name = null;
string result = name ?? "Guest"; // result = "Guest"`}</code></pre>
                
                <p><code>??=</code> → Assigns value if variable is null.</p>
                <pre><code>{`string name = null;
name ??= "Default";`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">8. Type Checking & Casting Operators</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Use</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>is</td>
                      <td>Checks object type</td>
                      <td><code>if (x is int)</code></td>
                    </tr>
                    <tr>
                      <td>as</td>
                      <td>Safe cast, returns null if fails</td>
                      <td><code>obj as string</code></td>
                    </tr>
                    <tr>
                      <td>typeof</td>
                      <td>Returns Type object</td>
                      <td><code>typeof(int)</code></td>
                    </tr>
                    <tr>
                      <td>sizeof</td>
                      <td>Returns size of value type</td>
                      <td><code>sizeof(int)</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">9. Other Special Operators</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>=&gt;</td>
                      <td>Lambda operator</td>
                    </tr>
                    <tr>
                      <td>$""</td>
                      <td>String interpolation</td>
                    </tr>
                    <tr>
                      <td>@""</td>
                      <td>Verbatim string (ignores escape)</td>
                    </tr>
                    <tr>
                      <td>.</td>
                      <td>Member access</td>
                    </tr>
                    <tr>
                      <td>[]</td>
                      <td>Indexer / Array access</td>
                    </tr>
                    <tr>
                      <td>()</td>
                      <td>Method call / Grouping</td>
                    </tr>
                    <tr>
                      <td>new</td>
                      <td>Object or array instantiation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Program (All Operators)</h3>
                <pre><code>{`using System;

class Program  
{  
    static void Main()  
    {  
        int a = 10, b = 3;  
        Console.WriteLine($"Add: {a + b}");  
        Console.WriteLine($"Bitwise AND: {a & b}");  
        Console.WriteLine($"Ternary: {(a > b ? "A is big" : "B is big")}");

        string name = null;
        Console.WriteLine(name ?? "No name");
    }
}`}</code></pre>
              </div>
            </section>

            <section id="control" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Control Statements</h2>
              
              <div className="property-card">
                <h3 className="h4">1. if Statement</h3>
                <p>Executes a block if the condition is true.</p>
                <pre><code>{`int num = 10;

if (num > 5)
{
    Console.WriteLine("Number is greater than 5");
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. if-else Statement</h3>
                <p>Executes one of two blocks based on condition.</p>
                <pre><code>{`int age = 17;

if (age >= 18)
{
    Console.WriteLine("Eligible to vote");
}
else
{
    Console.WriteLine("Not eligible to vote");
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. if-else if Ladder</h3>
                <p>Used to check multiple conditions one by one.</p>
                <pre><code>{`int mark = 75;

if (mark >= 90)
{
    Console.WriteLine("Grade A");
}
else if (mark >= 75)
{
    Console.WriteLine("Grade B");
}
else if (mark >= 60)
{
    Console.WriteLine("Grade C");
}
else
{
    Console.WriteLine("Fail");
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Nested if</h3>
                <p>An if inside another if.</p>
                <pre><code>{`int a = 10, b = 5;

if (a > 0)
{
    if (b > 0)
    {
        Console.WriteLine("Both numbers are positive");
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. switch Statement</h3>
                <p>Used to choose one block from many options.</p>
                <pre><code>{`int day = 3;

switch (day)  
{  
    case 1:  
        Console.WriteLine("Monday");  
        break;  
    case 2:  
        Console.WriteLine("Tuesday");  
        break;  
    case 3:  
        Console.WriteLine("Wednesday");  
        break;  
    default:  
        Console.WriteLine("Invalid day");  
        break;  
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Loops in C#</h3>
                
                <h4>1. for Loop</h4>
                <p>Executes a block of code <strong>a specific number of times</strong>.</p>
                <pre><code>{`for (initialization; condition; increment)  
{  
    // code to execute  
}`}</code></pre>
                <p>Example:</p>
                <pre><code>{`for (int i = 1; i <= 5; i++)  
{  
    Console.WriteLine("Value: " + i);  
}`}</code></pre>
                
                <h4 className="mt-3">2. while Loop</h4>
                <p>Executes a block <strong>as long as the condition is true</strong>.<br />Entry-controlled loop.</p>
                <pre><code>{`while (condition)
{
    // code to execute
}`}</code></pre>
                <p>Example:</p>
                <pre><code>{`int i = 1;
while (i <= 5)
{
    Console.WriteLine("Count: " + i);
    i++;
}`}</code></pre>
                
                <h4 className="mt-3">3. do-while Loop</h4>
                <p>Executes the block at least once, and then checks the condition.<br />Exit-controlled loop.</p>
                <pre><code>{`do
{
    // code to execute
} while (condition);`}</code></pre>
                <p>Example:</p>
                <pre><code>{`int i = 1;

do
{
    Console.WriteLine("Number: " + i);
    i++;
} while (i <= 5);`}</code></pre>
                
                <h4 className="mt-3">4. foreach Loop</h4>
                <p>Used to <strong>iterate through a collection or array</strong> easily.</p>
                <pre><code>{`foreach (datatype variable in collection)
{
    // code to execute
}`}</code></pre>
                <p>Example:</p>
                <pre><code>{`string[] fruits = { "Apple", "Banana", "Mango" };

foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}`}</code></pre>
                
                <h4 className="mt-3">5. Nested Loops</h4>
                <p>A loop inside another loop. Used for matrix, pattern, etc.</p>
                <pre><code>{`for (int i = 1; i <= 3; i++)
{
    for (int j = 1; j <= 2; j++)
    {
        Console.WriteLine($"i={i}, j={j}");
    }
}`}</code></pre>
                
                <h4 className="mt-3">6. break and continue</h4>
                <p><code>break</code>: Exits the loop immediately.</p>
                <pre><code>{`for (int i = 1; i <= 5; i++)
{
    if (i == 3)
        break;
    Console.WriteLine(i);
}`}</code></pre>
                
                <p><code>continue</code>: Skips the current iteration and goes to the next.</p>
                <pre><code>{`for (int i = 1; i <= 5; i++)
{
    if (i == 3)
        continue;
    Console.WriteLine(i);
}`}</code></pre>
              </div>
            </section>

            <section id="arrays" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-collection"></i> Arrays in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition of Array</h3>
                <ul>
                  <li>An array is a fixed-size collection of elements of the same data type, stored in contiguous memory locations</li>
                  <li>Arrays help store multiple values in a single variable instead of declaring separate variables</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Advantages of Arrays</h3>
                <ul>
                  <li>Stores multiple values using a single name</li>
                  <li>Access elements using index easily</li>
                  <li>Supports iteration using loops (for, foreach)</li>
                  <li>Faster access due to index-based referencing</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Disadvantages of Arrays</h3>
                <ul>
                  <li>Fixed size (cannot grow dynamically)</li>
                  <li>Can store only one data type</li>
                  <li>Wastage of memory if not fully used</li>
                  <li>Insertion and deletion is complex (especially in between elements)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Types of Arrays in C#</h3>
                <ol>
                  <li>Single Dimensional Array</li>
                  <li>Multi-Dimensional Array (Matrix)</li>
                  <li>Jagged Array (Array of Arrays)</li>
                </ol>
                
                <h4 className="mt-3">1. Single Dimensional Array</h4>
                <p>Declaration:</p>
                <pre><code>{`int[] numbers;`}</code></pre>
                
                <p>Initialization:</p>
                <pre><code>{`numbers = new int[5]; // Size = 5`}</code></pre>
                
                <p>Declaration + Initialization:</p>
                <pre><code>{`int[] numbers = { 10, 20, 30, 40, 50 };`}</code></pre>
                
                <p>Example:</p>
                <pre><code>{`int[] marks = { 85, 90, 78 };

foreach (int mark in marks)
{
    Console.WriteLine(mark);
}`}</code></pre>
                
                <h4 className="mt-3">2. Multi-Dimensional Array (Rectangular Array)</h4>
                <p>It is like a matrix with <strong>rows and columns</strong> (e.g. 2D array).</p>
                <p>Declaration:</p>
                <pre><code>{`int[,] matrix = new int[2, 3];`}</code></pre>
                
                <p>Initialization:</p>
                <pre><code>{`int[,] matrix = {
    { 1, 2, 3 },
    { 4, 5, 6 }
};`}</code></pre>
                
                <p>Example:</p>
                <pre><code>{`int[,] grid = {
    { 10, 20 },
    { 30, 40 }
};

for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++)
    {
        Console.Write(grid[i, j] + " ");
    }
    Console.WriteLine();
}`}</code></pre>
                
                <h4 className="mt-3">3. Jagged Array (Array of Arrays)</h4>
                <p>An array where each row can have different number of columns.</p>
                <p>Declaration:</p>
                <pre><code>{`int[][] jagged = new int[2][];`}</code></pre>
                
                <p>Initialization:</p>
                <pre><code>{`jagged[0] = new int[] { 1, 2 };
jagged[1] = new int[] { 3, 4, 5 };`}</code></pre>
                
                <p>Example:</p>
                <pre><code>{`int[][] jagged = new int[2][];
jagged[0] = new int[] { 1, 2 };
jagged[1] = new int[] { 3, 4, 5 };

for (int i = 0; i < jagged.Length; i++)
{
    for (int j = 0; j < jagged[i].Length; j++)
    {
        Console.Write(jagged[i][j] + " ");
    }
    Console.WriteLine();
}`}</code></pre>
              </div>
            </section>

            <section id="strings" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-type"></i> Strings in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>A string is a sequence of characters used to represent text.</p>
                <p>In C#, string is an alias for <code>System.String</code>.</p>
                <pre><code>{`string message = "Hello, World!";`}</code></pre>
                <p>Note: Strings are immutable in C# (once created, cannot be changed).</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">How to Declare and Initialize</h3>
                <p>Declaration:</p>
                <pre><code>{`string name;`}</code></pre>
                
                <p>Initialization:</p>
                <pre><code>{`name = "Mugilvannan";`}</code></pre>
                
                <p>Declaration + Initialization:</p>
                <pre><code>{`string greeting = "Welcome to C#";`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common String Methods in C#</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example Output</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Length</td>
                      <td>Returns number of characters</td>
                      <td>"Hello".Length → 5</td>
                    </tr>
                    <tr>
                      <td>ToUpper()</td>
                      <td>Converts to uppercase</td>
                      <td>"hello".ToUpper() → HELLO</td>
                    </tr>
                    <tr>
                      <td>ToLower()</td>
                      <td>Converts to lowercase</td>
                      <td>"HELLO".ToLower() → hello</td>
                    </tr>
                    <tr>
                      <td>Substring(start, len)</td>
                      <td>Extracts part of string</td>
                      <td>"Hello".Substring(1, 3) → ell</td>
                    </tr>
                    <tr>
                      <td>Replace(old, new)</td>
                      <td>Replaces characters/words</td>
                      <td>"car".Replace("c", "b") → bar</td>
                    </tr>
                    <tr>
                      <td>Contains()</td>
                      <td>Checks if string contains substring</td>
                      <td>"hello".Contains("el") → true</td>
                    </tr>
                    <tr>
                      <td>StartsWith()</td>
                      <td>Checks if string starts with given text</td>
                      <td>"hello".StartsWith("he") → true</td>
                    </tr>
                    <tr>
                      <td>EndsWith()</td>
                      <td>Checks if ends with given text</td>
                      <td>"hello".EndsWith("o") → true</td>
                    </tr>
                    <tr>
                      <td>Trim()</td>
                      <td>Removes whitespace</td>
                      <td>" hello ".Trim() → hello</td>
                    </tr>
                    <tr>
                      <td>IndexOf()</td>
                      <td>Returns index of character</td>
                      <td>"hello".IndexOf('e') → 1</td>
                    </tr>
                    <tr>
                      <td>Equals()</td>
                      <td>Compares strings</td>
                      <td>"hi".Equals("hi") → true</td>
                    </tr>
                    <tr>
                      <td>Split()</td>
                      <td>Splits string into array</td>
                      <td>"a,b,c".Split(',') → [a,b,c]</td>
                    </tr>
                    <tr>
                      <td>Join()</td>
                      <td>Joins string array with separator</td>
                      <td>string.Join("-", arr)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">String Concatenation</h3>
                <p>Using + operator:</p>
                <pre><code>{`string fullName = "Mugil" + " " + "Vannan";`}</code></pre>
                
                <p>Using string.Concat():</p>
                <pre><code>{`string name = string.Concat("Hello", " ", "Bro");`}</code></pre>
                
                <p>Using String Interpolation:</p>
                <pre><code>{`string name = "Mugil";
Console.WriteLine($"Welcome {name}!");`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Escape Sequences</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>\n</td>
                      <td>New line</td>
                    </tr>
                    <tr>
                      <td>\t</td>
                      <td>Tab</td>
                    </tr>
                    <tr>
                      <td>\\</td>
                      <td>Backslash</td>
                    </tr>
                    <tr>
                      <td>\"</td>
                      <td>Double quote</td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="mt-3">Example:</h4>
                <pre><code>{`Console.WriteLine("Hi\nBro\nWelcome to \"C#\"");`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Difference: string vs StringBuilder</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>string</th>
                      <th>StringBuilder</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mutability</td>
                      <td>Immutable</td>
                      <td>Mutable</td>
                    </tr>
                    <tr>
                      <td>Performance</td>
                      <td>Slower for multiple changes</td>
                      <td>Faster for multiple modifications</td>
                    </tr>
                    <tr>
                      <td>Namespace</td>
                      <td>System</td>
                      <td>System.Text</td>
                    </tr>
                    <tr>
                      <td>Use Case</td>
                      <td>Simple, static text</td>
                      <td>When updating string in loop</td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="mt-3">StringBuilder Example:</h4>
                <pre><code>{`using System.Text;

StringBuilder sb = new StringBuilder("Hello");
sb.Append(" World");
sb.Replace("World", "C#");

Console.WriteLine(sb); // Hello C#`}</code></pre>
              </div>
            </section>

            <section id="classes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box"></i> Classes and Objects in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition of Class</h3>
                <ul>
                  <li>A class is a user-defined blueprint or prototype for creating <strong>objects</strong>. It contains <strong>fields (variables)</strong> and <strong>methods (functions)</strong> that define the behavior of an object</li>
                  <li>In simple terms: <strong>Class = Design, Object = Actual item from the design</strong></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Definition of Object</h3>
                <p>An <strong>object</strong> is an <strong>instance of a class</strong>. It has its own memory and can access class members using the . (dot) operator.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Syntax of Class</h3>
                <pre><code>{`class ClassName  
{  
    // Fields  
    data_type variable_name;  
    // Method  
    return_type MethodName()  
    {  
        // Method body  
    }  
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Creating an Object</h3>
                <pre><code>{`ClassName obj = new ClassName();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example: Simple Class and Object</h3>
                <pre><code>{`using System;

class Student  
{  
    // Field  
    public string name;  

    // Method  
    public void Display()  
    {  
        Console.WriteLine("Student Name: " + name);  
    }  
}  

class Program  
{  
    static void Main(string[] args)  
    {  
        Student s1 = new Student();  // Creating object  
        s1.name = "Mugilvannan";   // Assigning value  
        s1.Display();    // Calling method  
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Features of a Class</h3>
                <ul>
                  <li>Can contain fields, methods, properties, constructors, etc.</li>
                  <li>Supports encapsulation (OOP principle)</li>
                  <li>Can be public, private, etc. using access modifiers</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Life Example</h3>
                <p>Class: Car<br />Objects: BMW, Toyota, Tata</p>
                <pre><code>{`class Car
{
    public string brand;
    public void Start()
    {
        Console.WriteLine(brand + " is starting...");
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Use Classes?</h3>
                <ul>
                  <li>Code Reusability</li>
                  <li>Data Grouping</li>
                  <li>Real-world modeling</li>
                  <li>Foundation for OOP (inheritance, polymorphism, etc.)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Memory Note</h3>
                <ul>
                  <li>Class is <strong>reference type</strong></li>
                  <li>Stored in <strong>heap memory</strong></li>
                  <li>Objects access class members through reference</li>
                </ul>
              </div>
            </section>

            <section id="constructors" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-hammer"></i> Constructors in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>A <strong>constructor</strong> is a <strong>special method</strong> in a class that is <strong>automatically called when an object is created</strong>. It is used to <strong>initialize objects</strong>.</p>
                <p>Constructor name = class name<br />No return type (not even void)</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Syntax</h3>
                <pre><code>{`class ClassName
{
    public ClassName() // Constructor
    {
        // Initialization code
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example: Default Constructor</h3>
                <pre><code>{`class Student
{
    public Student()
    {
        Console.WriteLine("Default Constructor Called");
    }
}

class Program
{
    static void Main()
    {
        Student s1 = new Student(); // Constructor called automatically
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Types of Constructors in C#</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Default</td>
                      <td>No parameters, used for default initialization</td>
                    </tr>
                    <tr>
                      <td>Parameterized</td>
                      <td>Takes parameters to initialize object</td>
                    </tr>
                    <tr>
                      <td>Copy Constructor</td>
                      <td>Copies values from another object (manual)</td>
                    </tr>
                    <tr>
                      <td>Static Constructor</td>
                      <td>Initializes static members of the class</td>
                    </tr>
                    <tr>
                      <td>Private Constructor</td>
                      <td>Used in Singleton patterns (only inside class)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Default Constructor</h3>
                <p>Constructor without parameters, assigns default values.</p>
                <pre><code>{`class Car
{
    public Car()
    {
        Console.WriteLine("Car Object Created!");
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Parameterized Constructor</h3>
                <p>Takes arguments to assign custom values during object creation.</p>
                <pre><code>{`class Person
{
    string name;
    int age;

    public Person(string n, int a)
    {
        name = n;
        age = a;
    }

    public void Show()
    {
        Console.WriteLine($"Name: {name}, Age: {age}");
    }
}

// Usage:
Person p1 = new Person("Mugil", 21);
p1.Show();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Copy Constructor</h3>
                <p>Copies data from one object to another. C# doesn't have a built-in copy constructor, we define it manually.</p>
                <pre><code>{`class Book
{
    public string title;

    // Parameterized Constructor
    public Book(string t)
    {
        title = t;
    }

    // Copy Constructor
    public Book(Book b)
    {
        title = b.title;
    }

    public void Display()
    {
        Console.WriteLine("Title: " + title);
    }
}

// Usage:
Book b1 = new Book("C# Guide");
Book b2 = new Book(b1); // Copying b1 to b2
b2.Display();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Static Constructor</h3>
                <p>Used to initialize static data members. It runs only once when the class is accessed for the first time.</p>
                <pre><code>{`class App
{
    static App()
    {
        Console.WriteLine("Static Constructor Called");
    }

    public static void Show()
    {
        Console.WriteLine("App Started!");
    }
}

// Usage:
App.Show(); // Static constructor runs once before this`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Private Constructor</h3>
                <p>Used to prevent object creation from outside the class. Mainly used in Singleton pattern.</p>
                <pre><code>{`class Config
{
    private Config() // Can't create object from outside
    {
    }

    public static void Display()
    {
        Console.WriteLine("Private Constructor Example");
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Constructor Overloading</h3>
                <p>You can have <strong>multiple constructors with different parameters</strong> (overloading).</p>
                <pre><code>{`class Box
{
    public Box() { Console.WriteLine("Default"); }
    public Box(int size) { Console.WriteLine("Size: " + size); }
}`}</code></pre>
              </div>
            </section>

            <section id="inheritance" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-2"></i> Inheritance in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <ul>
                  <li><strong>Inheritance</strong> is an object-oriented feature where a class acquires properties and behaviors of another class</li>
                  <li>It allows code reusability, method overriding, and supports hierarchical relationships</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Syntax</h3>
                <pre><code>{`class Parent  
{  
    // Parent members  
}  

class Child : Parent  
{  
    // Child members (inherits from Parent)  
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Benefits of Inheritance</h3>
                <ul>
                  <li>Code Reusability</li>
                  <li>Better Code Organization</li>
                  <li>Easy to Maintain and Extend</li>
                  <li>Supports Polymorphism and Overriding</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Types of Inheritance in C#</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Single Inheritance</td>
                      <td>One base → One derived class</td>
                    </tr>
                    <tr>
                      <td>Multilevel</td>
                      <td>Base → Derived → Sub-Derived</td>
                    </tr>
                    <tr>
                      <td>Hierarchical</td>
                      <td>One base → Multiple derived classes</td>
                    </tr>
                    <tr>
                      <td>Multiple</td>
                      <td>Not directly supported in C#</td>
                    </tr>
                    <tr>
                      <td>Hybrid</td>
                      <td>Mix of above (via interfaces)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Single Inheritance</h3>
                <p>One child class inherits from one parent class.</p>
                <pre><code>{`class Animal
{
    public void Eat() { Console.WriteLine("Eating..."); }
}

class Dog : Animal
{
    public void Bark() { Console.WriteLine("Barking..."); }
}

// Usage:
Dog d = new Dog();
d.Eat();    // Inherited from Animal
d.Bark();   // Own method`}</code></pre>
                <p>Output:<br />Eating...<br />Barking...</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Multilevel Inheritance</h3>
                <p>A class inherits from a class, which itself inherits from another class.</p>
                <pre><code>{`class Grandparent
{
    public void Speak() { Console.WriteLine("I am Grandpa!"); }
}

class Parent : Grandparent
{
    public void Work() { Console.WriteLine("I am Working"); }
}

class Child : Parent
{
    public void Play() { Console.WriteLine("I am Playing"); }
}

// Usage:
Child c = new Child();
c.Speak();  // From Grandparent
c.Work();   // From Parent
c.Play();   // Own method`}</code></pre>
                <p>Output:<br />I am Grandpa!<br />I am Working<br />I am Playing</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Hierarchical Inheritance</h3>
                <p>Multiple child classes inherit from one parent class.</p>
                <pre><code>{`class Vehicle
{
    public void Start() { Console.WriteLine("Vehicle Started"); }
}

class Car : Vehicle
{
    public void Drive() { Console.WriteLine("Car Driving"); }
}

class Bike : Vehicle
{
    public void Ride() { Console.WriteLine("Bike Riding"); }
}

// Usage:
Car car = new Car();
car.Start();  // From Vehicle
car.Drive();  // Own method

Bike bike = new Bike();
bike.Start(); // From Vehicle
bike.Ride();  // Own method`}</code></pre>
                <p>Output:<br />Vehicle Started<br />Car Driving<br />Vehicle Started<br />Bike Riding</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Multiple Inheritance</h3>
                <ul>
                  <li>Not directly supported in C# using classes</li>
                  <li>But can be achieved using interfaces</li>
                </ul>
                <pre><code>{`interface IPrinter
{
    void Print();
}

interface IScanner
{
    void Scan();
}

class Machine : IPrinter, IScanner
{
    public void Print() {
        Console.WriteLine("Printing...");
    }
    public void Scan() {
        Console.WriteLine("Scanning...");
    }
}

// Usage:
Machine m = new Machine();
m.Print();
m.Scan();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Hybrid Inheritance</h3>
                <p>It's a combination of multiple types — supported via interfaces.</p>
                <pre><code>{`interface IReadable
{
    void Read();
}

class Book
{
    public void Open() { Console.WriteLine("Opening Book"); }
}

class EBook : Book, IReadable
{
    public void Read() { Console.WriteLine("Reading eBook"); }
}

// Usage:
EBook eb = new EBook();
eb.Open();  // From Book
eb.Read();  // From IReadable`}</code></pre>
              </div>
            </section>

            <section id="polymorphism" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shapes"></i> Polymorphism in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <ul>
                  <li><strong>Polymorphism</strong> means "many forms". It allows methods to have different behaviors based on the object that is calling them</li>
                  <li>In simple terms: Same method name, different implementation</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Types of Polymorphism in C#</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Also Known As</th>
                      <th>Achieved Using</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Compile-Time</td>
                      <td>Static Polymorphism</td>
                      <td>Method Overloading</td>
                    </tr>
                    <tr>
                      <td>Run-Time</td>
                      <td>Dynamic Polymorphism</td>
                      <td>Method Overriding</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Compile-Time Polymorphism (Method Overloading)</h3>
                <p>Multiple methods with same name but different parameters in the same class.</p>
                <pre><code>{`class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }

    public float Add(float a, float b)
    {
        return a + b;
    }

    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }
}

// Usage:
Calculator c = new Calculator();
Console.WriteLine(c.Add(2, 3));       // 5
Console.WriteLine(c.Add(2.5f, 3.5f)); // 6.0
Console.WriteLine(c.Add(1, 2, 3));    // 6`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Run-Time Polymorphism (Method Overriding)</h3>
                <p>Derived class overrides a method in base class using override keyword.</p>
                <pre><code>{`class Animal
{
    public virtual void Sound()
    {
        Console.WriteLine("Animal makes sound");
    }
}

class Dog : Animal
{
    public override void Sound()
    {
        Console.WriteLine("Dog barks");
    }
}

// Usage:
Animal a = new Dog();
a.Sound(); // Output: Dog barks (Run-time decision)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Important Keywords</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Keyword</th>
                      <th>Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>virtual</td>
                      <td>Declares a method as overridable in the base class</td>
                    </tr>
                    <tr>
                      <td>override</td>
                      <td>Overrides a virtual method in the derived class</td>
                    </tr>
                    <tr>
                      <td>new</td>
                      <td>Hides the base class method without overriding (method hiding)</td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="mt-3">Example using new Keyword</h4>
                <pre><code>{`class A
{
    public void Show() { Console.WriteLine("A Show"); }
}

class B : A
{
    public new void Show() { Console.WriteLine("B Show"); }
}

// Usage:
A obj = new B();
obj.Show(); // Output: A Show (method hiding)`}</code></pre>
              </div>
            </section>

            <section id="abstraction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-eye-slash"></i> Abstraction in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Abstraction means hiding internal implementation and showing only essential details to the user.<br />"What it does" instead of "How it does it".</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Abstraction in C# is achieved by</h3>
                <ol>
                  <li>Abstract Classes</li>
                  <li>Interfaces</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Abstract Class in C#</h3>
                <p>An abstract class is a class that cannot be instantiated. It can contain abstract methods (without body) and non-abstract methods (with body).</p>
                <pre><code>{`abstract class Shape
{
    public abstract void Draw(); // Abstract method

    public void Display()
    {
        Console.WriteLine("Shape Displayed");
    }
}`}</code></pre>
                
                <h4 className="mt-3">Example</h4>
                <pre><code>{`abstract class Animal
{
    public abstract void Sound(); // No body
    public void Eat() => Console.WriteLine("Eating...");
}

class Dog : Animal
{
    public override void Sound()
    {
        Console.WriteLine("Dog Barks");
    }
}

class Program
{
    static void Main()
    {
        Dog d = new Dog();
        d.Sound();
        d.Eat();
    }
}`}</code></pre>
                
                <h4 className="mt-3">Key Points</h4>
                <ul>
                  <li>Cannot create object of abstract class</li>
                  <li>Must be inherited</li>
                  <li>Can have constructors, fields, properties</li>
                  <li>Can contain both abstract and non-abstract methods</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Interface in C#</h3>
                <p>An interface is a completely abstract class. It only contains method declarations (no implementation).</p>
                <pre><code>{`interface IShape  
{  
    void Draw(); // No body  
}`}</code></pre>
                
                <h4 className="mt-3">Example</h4>
                <pre><code>{`interface IPrinter  
{  
    void Print();  
}  

class Document : IPrinter  
{  
    public void Print()  
    {  
        Console.WriteLine("Printing document...");
    }  
}

// Usage:
Document d = new Document();
d.Print();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Abstract Class vs Interface</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Abstract Class</th>
                      <th>Interface</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Inheritance</td>
                      <td>Single</td>
                      <td>Multiple</td>
                    </tr>
                    <tr>
                      <td>Implementation</td>
                      <td>Partial (can have body)</td>
                      <td>None (only declarations)</td>
                    </tr>
                    <tr>
                      <td>Constructor</td>
                      <td>Allowed</td>
                      <td>Not Allowed</td>
                    </tr>
                    <tr>
                      <td>Access Modifiers</td>
                      <td>Allowed</td>
                      <td>Not allowed (all are public)</td>
                    </tr>
                    <tr>
                      <td>Fields/Properties</td>
                      <td>Can have</td>
                      <td>Cannot have fields (C# 8.0+ allows default methods)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Life Analogy</h3>
                <ul>
                  <li><strong>Abstract class</strong>: A general vehicle blueprint with some common implementation</li>
                  <li><strong>Interface</strong>: A contract like IDrivable, which says "you must implement Drive()"</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Interface Inheritance Example</h3>
                <pre><code>{`interface IReadable
{
    void Read();
}

interface IWritable
{
    void Write();
}

class Notebook : IReadable, IWritable
{
    public void Read() => Console.WriteLine("Reading Notebook");
    public void Write() => Console.WriteLine("Writing Notebook");
}`}</code></pre>
              </div>
            </section>

            <section id="encapsulation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> Encapsulation in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Encapsulation is the process of binding data (variables) and methods (functions) that operate on the data into a single unit (class) and restricting direct access to it.<br />"Data Hiding" using private fields and public properties (get/set)</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Encapsulation?</h3>
                <ul>
                  <li>Protects data from unauthorized access</li>
                  <li>Helps in data hiding</li>
                  <li>Makes the class modular and maintainable</li>
                  <li>Controls how values are assigned/read</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Syntax</h3>
                <pre><code>{`class ClassName
{
    private datatype fieldName;

    public datatype PropertyName
    {
        get { return fieldName; }
        set { fieldName = value; }
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example: Encapsulation with Getters and Setters</h3>
                <pre><code>{`class Student
{
    private string name;
    private int age;

    public string Name
    {
        get { return name; }
        set { name = value; }
    }

    public int Age
    {
        get { return age; }
        set
        {
            if (value > 0)
                age = value;
        }
    }
}

class Program
{
    static void Main()
    {
        Student s1 = new Student();
        s1.Name = "Mugil";
        s1.Age = 20;

        Console.WriteLine($"Name: {s1.Name}");
        Console.WriteLine($"Age: {s1.Age}");
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Key Points</h3>
                <ul>
                  <li>Variables declared as private</li>
                  <li>Access controlled using public <strong>get/set properties</strong></li>
                  <li>set can have validation logic</li>
                  <li>Improves security and flexibility</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Life Analogy</h3>
                <p>ATM card = encapsulated system</p>
                <p>📍 You <strong>can't access the PIN directly</strong>. You must go through the <strong>interface (ATM machine)</strong> which verifies and provides limited, secure access.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Auto-Implemented Properties (Short Cut)</h3>
                <pre><code>{`class Employee
{
    public string Name { get; set; }
    public int Salary { get; set; }
}`}</code></pre>
                <p>C# automatically creates private backing fields in the background.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Data Validation Example</h3>
                <pre><code>{`public int Age
{
    get { return age; }
    set
    {
        if (value >= 18)
            age = value;
        else
            Console.WriteLine("Age must be 18 or above.");
    }
}`}</code></pre>
              </div>
            </section>

            <section id="access-modifiers" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-lock"></i> Access Modifiers in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <ul>
                  <li><strong>Access Modifiers</strong> define the <strong>scope</strong> or <strong>visibility</strong> of a class, method, or variable in C#</li>
                  <li>They help in <strong>encapsulation</strong>, <strong>data hiding</strong>, and <strong>controlled access</strong> to the members</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Types of Access Modifiers in C#</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Modifier</th>
                      <th>Access Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>public</td>
                      <td>Accessible everywhere</td>
                    </tr>
                    <tr>
                      <td>private</td>
                      <td>Accessible only inside the class</td>
                    </tr>
                    <tr>
                      <td>protected</td>
                      <td>Accessible in the class and derived classes</td>
                    </tr>
                    <tr>
                      <td>internal</td>
                      <td>Accessible within the same assembly/project</td>
                    </tr>
                    <tr>
                      <td>protected internal</td>
                      <td>Accessible within same assembly or in derived classes (anywhere)</td>
                    </tr>
                    <tr>
                      <td>private protected</td>
                      <td>Accessible only in the derived class inside the same assembly</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. public</h3>
                <p>Accessible from anywhere (inside or outside the class/assembly)</p>
                <pre><code>{`public class Car  
{  
    public string model = "BMW";  
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. private</h3>
                <p>Most restrictive. Accessible only within the same class.</p>
                <pre><code>{`class Car  
{  
    private int speed = 100;  
    void ShowSpeed()  
    {  
        Console.WriteLine(speed);  
    }  
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. protected</h3>
                <p>Accessible within the same class and its derived classes.</p>
                <pre><code>{`class Animal
{
    protected void Speak() => Console.WriteLine("Animal sound");
}

class Dog : Animal
{
    public void Bark() => Speak(); // Accessible here
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. internal</h3>
                <p>Accessible only within the same project/assembly.</p>
                <pre><code>{`internal class Engine
{
    public void Start() => Console.WriteLine("Engine started");
}`}</code></pre>
                <p>Not accessible outside the project (like in a different DLL).</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. protected internal</h3>
                <p>Combination of protected + internal</p>
                <ul>
                  <li>Accessible in derived classes</li>
                  <li>Or anywhere in the same project</li>
                </ul>
                <pre><code>{`class Vehicle  
{  
    protected internal void Run() => Console.WriteLine("Running...");  
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. private protected (C# 7.2+)</h3>
                <p>Accessible in derived class, but only inside the same assembly</p>
                <pre><code>{`class Base  
{  
    private protected void Display() => Console.WriteLine("Base Display");
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Comparison Table</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Modifier</th>
                      <th>Same Class</th>
                      <th>Derived Class (Same Assembly)</th>
                      <th>Other Class (Same Assembly)</th>
                      <th>Other Assembly</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>public</td>
                      <td>✅</td>
                      <td>✅</td>
                      <td>✅</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>private</td>
                      <td>✅</td>
                      <td>❌</td>
                      <td>❌</td>
                      <td>❌</td>
                    </tr>
                    <tr>
                      <td>protected</td>
                      <td>✅</td>
                      <td>✅</td>
                      <td>❌</td>
                      <td>✅ (if derived)</td>
                    </tr>
                    <tr>
                      <td>internal</td>
                      <td>✅</td>
                      <td>✅</td>
                      <td>✅</td>
                      <td>❌</td>
                    </tr>
                    <tr>
                      <td>protected internal</td>
                      <td>✅</td>
                      <td>✅</td>
                      <td>✅</td>
                      <td>✅ (if derived)</td>
                    </tr>
                    <tr>
                      <td>private protected</td>
                      <td>✅</td>
                      <td>✅</td>
                      <td>❌</td>
                      <td>❌</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Life Analogy</h3>
                <ul>
                  <li><strong>public</strong> → Like a public road (anyone can use)</li>
                  <li><strong>private</strong> → Personal diary (only you can read)</li>
                  <li><strong>protected</strong> → Family access (you and your children)</li>
                  <li><strong>internal</strong> → Inside the same company/project</li>
                  <li><strong>protected internal</strong> → Company + family</li>
                  <li><strong>private protected</strong> → Inside family, in same house</li>
                </ul>
              </div>
            </section>

            <section id="exceptions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-exclamation-triangle"></i> Exception Handling in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <ul>
                  <li><strong>Exception Handling</strong> in C# is a process of handling <strong>runtime errors</strong> to ensure the program doesn't crash unexpectedly</li>
                  <li>Handle errors gracefully using try, catch, finally, and throw</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common Runtime Errors (Exceptions)</h3>
                <ul>
                  <li>Division by zero</li>
                  <li>File not found</li>
                  <li>Null reference</li>
                  <li>Array index out of bounds</li>
                  <li>Invalid type casting</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Basic Syntax</h3>
                <pre><code>{`try  
{  
    // Code that might throw an exception  
}  
catch (ExceptionType ex)  
{  
    // Code to handle the exception  
}  
finally  
{  
    // Cleanup code (runs always)  
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example</h3>
                <pre><code>{`class Program  
{  
    static void Main()  
    {  
        int a = 10, b = 0;  
        int result;

        try
        {
            result = a / b;
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine("Cannot divide by zero: " + ex.Message);
        }
        finally
        {
            Console.WriteLine("Finished Exception Handling Block.");
        }
    }
}`}</code></pre>
                <p>Output:<br />Cannot divide by zero: Attempted to divide by zero.<br />Finished Exception Handling Block.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Multiple Catch Blocks</h3>
                <pre><code>{`try
{
    int[] nums = { 1, 2, 3 };
    Console.WriteLine(nums[5]);
}
catch (IndexOutOfRangeException ex)
{
    Console.WriteLine("Index Error: " + ex.Message);
}
catch (Exception ex)
{
    Console.WriteLine("General Error: " + ex.Message);
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">finally Block</h3>
                <ul>
                  <li>Always executes (whether or not exception occurs)</li>
                  <li>Used for closing files, releasing connections, cleanup</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">throw Keyword</h3>
                <p>Used to manually throw an exception</p>
                <pre><code>{`int age = 10;
if (age < 18)
{
    throw new Exception("You must be 18 or older.");
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Custom Exception</h3>
                <pre><code>{`class MyException : Exception
{
    public MyException(string message) : base(message)
    {
    }
}

class Program
{
    static void Main()
    {
        throw new MyException("This is a custom exception");
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common Exception Types in C#</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Exception</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DivideByZeroException</td>
                      <td>Division by zero</td>
                    </tr>
                    <tr>
                      <td>NullReferenceException</td>
                      <td>Using object with null value</td>
                    </tr>
                    <tr>
                      <td>IndexOutOfRangeException</td>
                      <td>Invalid array index</td>
                    </tr>
                    <tr>
                      <td>FormatException</td>
                      <td>Wrong format conversion</td>
                    </tr>
                    <tr>
                      <td>InvalidCastException</td>
                      <td>Illegal type casting</td>
                    </tr>
                    <tr>
                      <td>IOException</td>
                      <td>File I/O related errors</td>
                    </tr>
                    <tr>
                      <td>FileNotFoundException</td>
                      <td>File not found during access</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Life Analogy</h3>
                <p>Like having a fire extinguisher (catch) in place when a fire (exception) breaks out.<br />And always cleaning up (finally) after the fire is handled.</p>
              </div>
            </section>

            <section id="files" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark"></i> File Handling in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>File Handling in C# means creating, reading, writing, updating, and deleting files on the system using the <code>System.IO</code> namespace.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Commonly Used Classes in System.IO</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>File</td>
                      <td>Static methods to create, copy, delete</td>
                    </tr>
                    <tr>
                      <td>FileInfo</td>
                      <td>Instance-based file operations</td>
                    </tr>
                    <tr>
                      <td>StreamReader</td>
                      <td>For reading text files</td>
                    </tr>
                    <tr>
                      <td>StreamWriter</td>
                      <td>For writing to text files</td>
                    </tr>
                    <tr>
                      <td>Directory</td>
                      <td>Create, move, and enumerate directories</td>
                    </tr>
                    <tr>
                      <td>Path</td>
                      <td>Work with file and folder paths</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 1: Write Text to File (using File)</h3>
                <pre><code>{`using System;
using System.IO;

class Program
{
    static void Main()
    {
        string path = "test.txt";
        File.WriteAllText(path, "Hello Mugil! Welcome to C# File Handling.");
        Console.WriteLine("File written successfully!");
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 2: Read Text from File (using File)</h3>
                <pre><code>{`string content = File.ReadAllText("test.txt");
Console.WriteLine("File Content: " + content);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 3: Using StreamWriter (Append Mode)</h3>
                <pre><code>{`using (StreamWriter writer = new StreamWriter("test.txt", true)) // true = append
{
    writer.WriteLine("This is a new line added!");
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 4: Using StreamReader (Line by Line)</h3>
                <pre><code>{`using (StreamReader reader = new StreamReader("test.txt"))
{
    string line;
    while ((line = reader.ReadLine()) != null)
    {
        Console.WriteLine(line);
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 5: File Checking Before Access</h3>
                <pre><code>{`if (File.Exists("test.txt"))
{
    Console.WriteLine("File exists.");
}
else
{
    Console.WriteLine("File not found.");
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 6: Delete a File</h3>
                <pre><code>{`File.Delete("test.txt");
Console.WriteLine("File deleted.");`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Using FileInfo (Instance-Based)</h3>
                <pre><code>{`FileInfo fi = new FileInfo("testinfo.txt");
using (StreamWriter sw = fi.CreateText())
{
    sw.WriteLine("File created using FileInfo class.");
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Working with Directories</h3>
                <pre><code>{`Directory.CreateDirectory("MyFolder!");
Directory.Delete("MyFolder", true); // true = delete even if not empty`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common File Methods</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>File.Create(path)</td>
                      <td>Creates a new file</td>
                    </tr>
                    <tr>
                      <td>File.WriteAllText()</td>
                      <td>Writes string to file</td>
                    </tr>
                    <tr>
                      <td>File.ReadAllText()</td>
                      <td>Reads all content from file</td>
                    </tr>
                    <tr>
                      <td>File.AppendAllText()</td>
                      <td>Appends text to file</td>
                    </tr>
                    <tr>
                      <td>File.Copy(source, dest)</td>
                      <td>Copies file</td>
                    </tr>
                    <tr>
                      <td>File.Delete()</td>
                      <td>Deletes file</td>
                    </tr>
                    <tr>
                      <td>File.Exists(path)</td>
                      <td>Checks if file exists</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Life Analogy</h3>
                <p>Just like writing to a notebook (creating and saving content) and reading it back later, file handling helps store and retrieve data permanently.</p>
              </div>
            </section>

            <section id="collections" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-collection"></i> Collections in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <ul>
                  <li><strong>Collections</strong> in C# are dynamic data structures used to store, manage, and manipulate groups of related objects</li>
                  <li>Unlike arrays, collections are resizable, type-flexible, and come with built-in methods</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Types of Collections in C#</h3>
                <ol>
                  <li><strong>Non-Generic Collections</strong> (Old Style) — in System.Collections
                    <ul>
                      <li>ArrayList, Hashtable, Stack, Queue</li>
                    </ul>
                  </li>
                  <li><strong>Generic Collections</strong> (Modern, Type-Safe) — in System.Collections.Generic
                    <ul>
                      <li>List&lt;T&gt;, Dictionary&lt;TKey, TValue&gt;, Stack&lt;T&gt;, Queue&lt;T&gt;, HashSet&lt;T&gt;</li>
                    </ul>
                  </li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. List&lt;T&gt; – Dynamic Array</h3>
                <pre><code>{`List<string> names = new List<string>();
names.Add("Mugil");
names.Add("Arun");

foreach (string name in names)  
    Console.WriteLine(name);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Dictionary&lt;TKey, TValue&gt; – Key-Value Pair</h3>
                <pre><code>{`Dictionary<int, string> students = new Dictionary<int, string>();
students.Add(1, "Mugil");
students.Add(2, "Arjun");

foreach (var s in students)
    Console.WriteLine($"ID: {s.Key}, Name: {s.Value}");`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Stack&lt;T&gt; – Last-In-First-Out (LIFO)</h3>
                <pre><code>{`Stack<string> stack = new Stack<string>();
stack.Push("One");
stack.Push("Two");

Console.WriteLine(stack.Pop());
// Output: Two`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Queue&lt;T&gt; – First-In-First-Out (FIFO)</h3>
                <pre><code>{`Queue<string> queue = new Queue<string>();
queue.Enqueue("A");
queue.Enqueue("B");

Console.WriteLine(queue.Dequeue());
// Output: A`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. HashSet&lt;T&gt; – Unique Items Only</h3>
                <pre><code>{`HashSet<string> set = new HashSet<string>();
set.Add("Apple");
set.Add("Apple"); // Duplicate – not added
set.Add("Banana");

foreach (var item in set)
    Console.WriteLine(item);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Array vs Collection</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Array</th>
                      <th>Collection</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fixed size</td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Type-safe</td>
                      <td>Only with typed arrays</td>
                      <td>Yes (in generic collections)</td>
                    </tr>
                    <tr>
                      <td>Performance</td>
                      <td>Faster</td>
                      <td>Slightly slower</td>
                    </tr>
                    <tr>
                      <td>Flexibility</td>
                      <td>Less</td>
                      <td>More (methods, resizing)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Life Analogy</h3>
                <p>Think of List&lt;T&gt; as a resizable bag, Stack as a pile of plates, Queue as a ticket line, and Dictionary as a phonebook.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common Methods for List&lt;T&gt;</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Add(item)</td>
                      <td>Adds an item</td>
                    </tr>
                    <tr>
                      <td>Remove(item)</td>
                      <td>Removes first match</td>
                    </tr>
                    <tr>
                      <td>Count</td>
                      <td>Returns number of items</td>
                    </tr>
                    <tr>
                      <td>Contains(item)</td>
                      <td>Checks if item exists</td>
                    </tr>
                    <tr>
                      <td>Clear()</td>
                      <td>Removes all items</td>
                    </tr>
                    <tr>
                      <td>Insert(index, val)</td>
                      <td>Inserts at specific index</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="properties" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Properties in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <ul>
                  <li><strong>Properties</strong> in C# are <strong>members of a class</strong> that provide a flexible mechanism to read, write, or compute the value of a private field</li>
                  <li>They act like <strong>getter/setter methods</strong> but are accessed like <strong>variables</strong></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Use Properties?</h3>
                <ul>
                  <li>Protect fields with get and set</li>
                  <li>Control access (read-only/write-only)</li>
                  <li>Validation before setting value</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Syntax</h3>
                <pre><code>{`private int age; // field  

public int Age  // property  
{  
    get { return age; }  
    set { age = value; }  
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example</h3>
                <pre><code>{`class Person  
{  
    private string name;  
    public string Name  
    {  
        get { return name; }  
        set { name = value; }  
    }  
}

class Program
{
    static void Main()
    {
        Person p = new Person();
        p.Name = "Mugil";
        Console.WriteLine(p.Name);
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Auto-Implemented Properties</h3>
                <p>Shortcut way of writing properties without defining a field.</p>
                <pre><code>{`public string City { get; set; }

class Program
{
    static void Main()
    {
        var obj = new Program();
        obj.City = "Chennai";
        Console.WriteLine(obj.City);
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Readonly Property</h3>
                <p>Use get only — no set.</p>
                <pre><code>{`public string Country { get; } = "India";`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Write-Only Property</h3>
                <p>Use set only — no get.</p>
                <pre><code>{`private string secret;

public string Secret
{
    set { secret = value; }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Life Analogy</h3>
                <p>Properties = Gatekeepers to your class's internal data. Only allow what you want to go in or out.</p>
              </div>
            </section>

            <section id="delegates" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-left-right"></i> Delegates in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <ul>
                  <li>A delegate is a type-safe function pointer in C#</li>
                  <li>It can reference a method, pass it as a parameter, or even call it dynamically. Think of it as a variable that holds a method</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Use Delegates?</h3>
                <ul>
                  <li>For callback methods</li>
                  <li>To implement event handling</li>
                  <li>Used in LINQ, anonymous methods, and lambda expressions</li>
                  <li>Enables loose coupling between caller and method</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Basic Syntax</h3>
                <pre><code>{`// Step 1: Declare a delegate
delegate void GreetDelegate(string name);

// Step 2: Create a method that matches the delegate
void Greet(string name)
{
    Console.WriteLine("Hello " + name);
}

// Step 3: Use the delegate
GreetDelegate gd = Greet;
gd("Mugil");`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Full Example</h3>
                <pre><code>{`using System;

delegate void WelcomeDelegate(string name);

class Program
{
    static void GreetUser(string name)
    {
        Console.WriteLine("Welcome, " + name + "!");
    }

    static void Main()
    {
        WelcomeDelegate wd = GreetUser;
        wd("Mugil");
    }
}`}</code></pre>
                <p>Output:<br />Welcome, Mugil!</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Types of Delegates</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Single-cast</td>
                      <td>Points to one method</td>
                    </tr>
                    <tr>
                      <td>Multi-cast</td>
                      <td>Points to multiple methods (using +=)</td>
                    </tr>
                    <tr>
                      <td>Anonymous Delegate</td>
                      <td>Declared inline without method name</td>
                    </tr>
                    <tr>
                      <td>Func / Action / Predicate</td>
                      <td>Predefined generic delegates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Multicast Delegate Example</h3>
                <pre><code>{`delegate void ShowMessage();

class Program
{
    static void Msg1() => Console.WriteLine("Hello");
    static void Msg2() => Console.WriteLine("World");

    static void Main()
    {
        ShowMessage sm = Msg1;
        sm += Msg2; // Multicast

        sm(); // Output: Hello \n World
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Anonymous Method (Without Declaring Named Method)</h3>
                <pre><code>{`delegate void MyDelegate(string msg);

class Program
{
    static void Main()
    {
        MyDelegate d = delegate (string msg)
        {
            Console.WriteLine("Anonymous says: " + msg);
        };
        d("Hello Mugil");
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Built-in Delegates (No Need to Declare)</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Delegate</th>
                      <th>Purpose</th>
                      <th>Syntax</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Action&lt;T&gt;</td>
                      <td>No return, only input</td>
                      <td><code>{`Action&lt;string&gt; greet = {...}`}</code></td>
                    </tr>
                    <tr>
                      <td>Func&lt;T, TResult&gt;</td>
                      <td>Input + return value</td>
                      <td><code>Func&lt;int, int&gt; square = x =&gt; x*x;</code></td>
                    </tr>
                    <tr>
                      <td>Predicate&lt;T&gt;</td>
                      <td>Returns bool (true/false)</td>
                      <td><code>Predicate&lt;int&gt; isEven = x =&gt; x%2==0;</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="events" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bell"></i> Events in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <ul>
                  <li>An event in C# is a <strong>wrapper over a delegate</strong> that enables a class to <strong>notify other classes or objects when something happens</strong></li>
                  <li>Think of it like ringing a bell — whoever is listening will respond!</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Use Events?</h3>
                <ul>
                  <li>Enable <strong>event-driven programming</strong></li>
                  <li>Provide <strong>encapsulation</strong> for delegate access</li>
                  <li>Used in <strong>GUI frameworks</strong>, <strong>button clicks</strong>, <strong>file changes</strong>, etc.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Syntax</h3>
                <pre><code>{`public delegate void MyDelegate(); // Declare a delegate

public event MyDelegate MyEvent; // Declare an event`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Step-by-Step Example</h3>
                <pre><code>{`using System;

public class Alarm  
{  
    public delegate void AlarmHandler(); // Step 1: Delegate  
    public event AlarmHandler Ring; // Step 2: Event  

    public void Trigger()  
    {  
        Console.WriteLine("Alarm ringing...");  
        Ring?.Invoke(); // Step 3: Raise the event  
    }  
}

public class Listener
{
    public void Respond()
    {
        Console.WriteLine("Listener: I heard the alarm!");
    }
}

class Program
{
    static void Main()
    {
        Alarm alarm = new Alarm();
        Listener listener = new Listener();

        alarm.Ring += listener.Respond; // Step 4: Subscribe to the event

        alarm.Trigger();    // Step 5: Trigger the event
    }
}`}</code></pre>
                <p>Output:<br />Alarm ringing...<br />Listener: I heard the alarm!</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Life Example: Button Click</h3>
                <pre><code>{`public class Button
{
    public event Action Click;

    public void OnClick()
    {
        Console.WriteLine("Button clicked!");
        Click?.Invoke(); // Raise the event
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Rules of Events</h3>
                <ul>
                  <li>Only the <strong>declaring class</strong> can <strong>raise</strong> (invoke) the event</li>
                  <li>Other classes can subscribe or <strong>unsubscribe</strong> using += or -=</li>
                  <li>Events provide <strong>encapsulation</strong> over delegates</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Event vs Delegate</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Delegate</th>
                      <th>Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Purpose</td>
                      <td>Holds reference to method(s)</td>
                      <td>Notifies subscribers</td>
                    </tr>
                    <tr>
                      <td>Access</td>
                      <td>Can be invoked anywhere</td>
                      <td>Can only be invoked within class</td>
                    </tr>
                    <tr>
                      <td>Usage</td>
                      <td>delegate.Invoke()</td>
                      <td>event.Invoke() inside class</td>
                    </tr>
                    <tr>
                      <td>Subscriber</td>
                      <td>Anyone using += or -=</td>
                      <td>Controlled and safe subscription</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Custom EventArgs Example</h3>
                <pre><code>{`public class MyEventArgs : EventArgs  
{  
    public string Message { get; set; }  
}  

public class Publisher
{
    public event EventHandler<MyEventArgs> CustomEvent;

    public void Raise()
    {
        CustomEvent?.Invoke(this, new MyEventArgs { Message = "Hi!" });
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Life Analogy</h3>
                <p><strong>Delegate</strong> = Who to call<br /><strong>Event</strong> = When something happens, call them</p>
              </div>
            </section>

            <section id="linq" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-search"></i> What is LINQ?</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p><strong>LINQ</strong> (Language Integrated Query) allows you to <strong>query collections (arrays, lists, etc.) using SQL-like syntax</strong> — directly in C#.</p>
                <pre><code>{`// Traditional loop  
foreach (int i in nums) { if (i > 5) result.Add(i); }

// LINQ
var result = from n in nums where n > 5 select n;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why LINQ?</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Benefit</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SQL-like</td>
                      <td>Easy to read and write queries</td>
                    </tr>
                    <tr>
                      <td>Less code</td>
                      <td>Reduces boilerplate loops</td>
                    </tr>
                    <tr>
                      <td>Type-safe</td>
                      <td>Errors caught at compile-time</td>
                    </tr>
                    <tr>
                      <td>Unified syntax</td>
                      <td>Works on arrays, lists, DB, XML, etc.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">LINQ Query Syntax vs Method Syntax</h3>
                <pre><code>{`// Query Syntax (SQL-like)
var result = from n in nums where n > 10 select n;

// Method Syntax (using lambda)
var result = nums.Where(n => n > 10).ToList();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Syntax Structure (Query Syntax)</h3>
                <pre><code>{`from <rangeVariable> in <collection>
where <condition>
select <result>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 1: Basic Filtering</h3>
                <pre><code>{`int[] numbers = { 2, 5, 8, 1, 10 };

var evenNums = from n in numbers  
    where n % 2 == 0  
    select n;

foreach (var n in evenNums)  
    Console.WriteLine(n);`}</code></pre>
                <p>Output:<br />2<br />8<br />10</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 2: LINQ on List of Objects</h3>
                <pre><code>{`class Student  
{  
    public string Name;  
    public int Marks;
}

List<Student> students = new List<Student>()
{
    new Student { Name = "Arun", Marks = 90 },
    new Student { Name = "Priya", Marks = 60 },
    new Student { Name = "John", Marks = 30 }
};

var passed = from s in students
    where s.Marks >= 50
    select s.Name;

foreach (var name in passed)
    Console.WriteLine(name);`}</code></pre>
                <p>Output:<br />Arun<br />Priya</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">LINQ Clauses Overview</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Keyword</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>from</td>
                      <td>Defines the source</td>
                    </tr>
                    <tr>
                      <td>where</td>
                      <td>Adds condition/filter</td>
                    </tr>
                    <tr>
                      <td>select</td>
                      <td>Specifies what to return</td>
                    </tr>
                    <tr>
                      <td>orderby</td>
                      <td>Sorts results</td>
                    </tr>
                    <tr>
                      <td>group by</td>
                      <td>Groups data</td>
                    </tr>
                    <tr>
                      <td>join</td>
                      <td>Joins 2 collections based on key</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 3: orderby</h3>
                <pre><code>{`var sorted = from n in numbers  
orderby n descending  
select n;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 4: group by</h3>
                <pre><code>{`var grouped = from s in students  
group s by s.Marks >= 50 into g  
select new { Key = g.Key, Students = g };

foreach (var grp in grouped)
{
    Console.WriteLine(grp.Key ? "Passed" : "Failed");
    foreach (var stu in grp.Students)
        Console.WriteLine(" - " + stu.Name);
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 5: join</h3>
                <pre><code>{`var emp = new[] {
    new { Id = 1, Name = "Arun" },
    new { Id = 2, Name = "Priya" }
};

var dept = new[] {
    new { EmpId = 1, Dept = "IT" },
    new { EmpId = 2, Dept = "HR" }
};

var result = from e in emp
    join d in dept on e.Id equals d.EmpId
    select new { e.Name, d.Dept };

foreach (var r in result)
    Console.WriteLine($"{r.Name} - {r.Dept}");`}</code></pre>
                <p>Output:<br />Arun - IT<br />Priya - HR</p>
              </div>
            </section>

            <section id="lambda" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-right"></i> Lambda Expressions in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <ul>
                  <li>A lambda expression is a short way to write anonymous methods using the <code>=&gt;</code> symbol (arrow operator)</li>
                  <li>It's commonly used in LINQ, delegates, and event handlers</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Format</h3>
                <pre><code>{`(parameters) => expression or block`}</code></pre>
                <p>Example:</p>
                <pre><code>{`Func<int, int, int> add = (a, b) => a + b;
Console.WriteLine(add(5, 3)); // Output: 8`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real Usage in LINQ</h3>
                <pre><code>{`List<int> nums = new List<int> { 1, 2, 3, 4, 5 };

var even = nums.Where(n => n % 2 == 0);

foreach (var n in even)
    Console.WriteLine(n); // Output: 2 4`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Anonymous Methods</h3>
                <p>Definition:</p>
                <p>An anonymous method is a method without a name, defined using the delegate keyword.</p>
                <pre><code>{`delegate (parameters)
{
    // body
};`}</code></pre>
                <p>Example:</p>
                <pre><code>{`Action greet = delegate ()  
{  
    Console.WriteLine("Hello from anonymous method");  
};  
greet();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Lambda vs Anonymous Method</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Lambda Expression</th>
                      <th>Anonymous Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Syntax</td>
                      <td><code>(x) =&gt; x + 1</code></td>
                      <td><code>{`delegate(int x) { return x + 1; }`}</code></td>
                    </tr>
                    <tr>
                      <td>Introduced in</td>
                      <td>C# 3.0</td>
                      <td>C# 2.0</td>
                    </tr>
                    <tr>
                      <td>Common Usage</td>
                      <td>LINQ, events, delegates</td>
                      <td>Simple inline methods</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Use in Delegates</h3>
                <pre><code>{`delegate int MyDelegate(int x);

class Program
{
    static void Main()
    {
        // Lambda
        MyDelegate square = x => x * x;
        Console.WriteLine(square(4)); // Output: 16

        // Anonymous Method
        MyDelegate cube = delegate (int x)
        {
            return x * x * x;
        };
        Console.WriteLine(cube(3)); // Output: 27
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-World Use: Sorting Example</h3>
                <pre><code>{`List<string> names = new List<string> { "Kiran", "Ajay", "Zara" };

names.Sort((a, b) => a.CompareTo(b));

foreach (var name in names)
    Console.WriteLine(name); // Output: Ajay, Kiran, Zara`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Use Lambda?</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Advantage</th>
                      <th>Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Short syntax</td>
                      <td>Write less, do more</td>
                    </tr>
                    <tr>
                      <td>Readable</td>
                      <td>Especially in LINQ and List filters</td>
                    </tr>
                    <tr>
                      <td>Inline logic</td>
                      <td>No need to define extra methods</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="generics" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-braces"></i> Generics in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p><strong>Generics</strong> allow you to create <strong>classes</strong>, <strong>methods</strong>, and <strong>data structures</strong> that work with any data type — without repeating code for each type.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real Example</h3>
                <pre><code>{`List<int> numbers = new List<int>();
// List of int
List<string> names = new List<string>();
// List of string`}</code></pre>
                <p>Here, <code>List&lt;T&gt;</code> is a <strong>generic class</strong> — it works for any type T.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Generics?</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Type safety</td>
                      <td>Catches errors at compile-time</td>
                    </tr>
                    <tr>
                      <td>Reusability</td>
                      <td>Write once, use for all data types</td>
                    </tr>
                    <tr>
                      <td>Performance</td>
                      <td>No boxing/unboxing (like object)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Syntax</h3>
                <pre><code>{`// Generic Method  
void Display<T>(T value)  
{  
    Console.WriteLine(value);  
}  

// Usage
Display<int>(100);
Display<string>("Hello");`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Generic Class Example</h3>
                <pre><code>{`class MyBox<T>
{
    public T Value;

    public void Show()
    {
        Console.WriteLine("Value is: " + Value);
    }
}

class Program
{
    static void Main()
    {
        MyBox<int> intBox = new MyBox<int>();
        intBox.Value = 10;
        intBox.Show(); // Output: Value is: 10

        MyBox<string> strBox = new MyBox<string>();
        strBox.Value = "C# Generics";
        strBox.Show(); // Output: Value is: C# Generics
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Generic Method Example</h3>
                <pre><code>{`public class Utility
{
    public void Print<T>(T data)
    {
        Console.WriteLine("Data: " + data);
    }
}

// Usage
Utility u = new Utility();
u.Print<int>(123);    // Data: 123
u.Print<string>("Hello"); // Data: Hello`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Built-in Generic Collections</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Collection</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>List&lt;T&gt;</td>
                      <td>Dynamic array</td>
                    </tr>
                    <tr>
                      <td>Dictionary&lt;TKey, TValue&gt;</td>
                      <td>Key-value pairs</td>
                    </tr>
                    <tr>
                      <td>Queue&lt;T&gt;</td>
                      <td>FIFO collection</td>
                    </tr>
                    <tr>
                      <td>Stack&lt;T&gt;</td>
                      <td>LIFO collection</td>
                    </tr>
                    <tr>
                      <td>HashSet&lt;T&gt;</td>
                      <td>Unique values only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Dictionary Example</h3>
                <pre><code>{`Dictionary<int, string> students = new Dictionary<int, string>();

students.Add(1, "Arun");  
students.Add(2, "Priya");

foreach (var item in students) {  
    Console.WriteLine(item.Key + "__" + item.Value);  
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Advantages of Generics</h3>
                <ul>
                  <li>No need for casting</li>
                  <li>Catch type mismatches at <strong>compile time</strong></li>
                  <li>Better performance than ArrayList, Hashtable</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Without Generics (Old Way - Not Recommended)</h3>
                <pre><code>{`ArrayList list = new ArrayList();

list.Add(10);    // Works  
list.Add("Hello");    // Also works - but not type safe!`}</code></pre>
                <p>May lead to <strong>runtime errors</strong> if we assume wrong data type.</p>
              </div>
            </section>

            <section id="threading" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cpu"></i> Multithreading in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">What is Multithreading?</h3>
                <p><strong>Multithreading</strong> allows a program to <strong>perform multiple tasks (threads)</strong> at the same time, improving performance and responsiveness.</p>
                <p>Like:</p>
                <ul>
                  <li>✓ One thread downloads a file</li>
                  <li>✓ Another updates UI</li>
                  <li>✓ Another plays music — all at once</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Multithreading?</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Benefit</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Efficient CPU use</td>
                      <td>Utilizes multiple CPU cores</td>
                    </tr>
                    <tr>
                      <td>Faster performance</td>
                      <td>Runs tasks in parallel</td>
                    </tr>
                    <tr>
                      <td>Smooth user experience</td>
                      <td>UI doesn't freeze during heavy tasks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Threading Basics</h3>
                <p>Namespace used:</p>
                <pre><code>{`using System.Threading;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Creating Threads using Thread class</h3>
                <pre><code>{`using System;  
using System.Threading;  

class Program  
{  
    static void PrintNumbers()  
    {  
        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine("Number: " + i);
            Thread.Sleep(1000); // Wait for 1 second
        }
    }

    static void Main()
    {
        Thread t = new Thread(PrintNumbers); // Create thread
        t.Start(); // Start thread
    }

    Console.WriteLine("Main method done!");
}`}</code></pre>
                <p>Output:<br />Main method done!<br />Number: 1<br />Number: 2<br />...</p>
                <p>Even while PrintNumbers() is running, Main() continues — that's parallel execution.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Thread with Lambda Expression</h3>
                <pre><code>{`Thread t = new Thread(() =>
{
    Console.WriteLine("Running inside a thread...");
});
t.Start();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Foreground vs Background Threads</h3>
                <pre><code>{`Thread t = new Thread(PrintNumbers);
t.IsBackground = true; // Background thread ends when main ends
t.Start();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Thread.Sleep()</h3>
                <p>Pauses the current thread temporarily.</p>
                <pre><code>{`Thread.Sleep(2000); // Pauses for 2 seconds`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Thread.Join()</h3>
                <p>Main thread waits for another thread to finish.</p>
                <pre><code>{`t.Join(); // Waits until thread t finishes`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Thread Priority</h3>
                <pre><code>{`t.Priority = ThreadPriority.Highest;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">7. Multithreading with Task (Modern Way)</h3>
                <pre><code>{`using System.Threading.Tasks;

Task t1 = Task.Run(() => 
    Console.WriteLine("Task 1 running...");`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-World Example: Parallel Downloads</h3>
                <pre><code>{`Task.Run(() => Download("File1"));
Task.Run(() => Download("File2"));`}</code></pre>
              </div>
            </section>

            <section id="async" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-hourglass-split"></i> Asynchronous Programming</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Asynchronous programming allows you to perform long-running tasks (e.g., API calls, DB access, file operations) without blocking the main thread.</p>
                <p>It's like:</p>
                <ul>
                  <li>Cooking food (background task)</li>
                  <li>Chatting with someone (main task)</li>
                  <li>Food ready → You get notified (callback)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Keywords</h3>
                <ul>
                  <li><code>async</code> → Marks a method as asynchronous</li>
                  <li><code>await</code> → Waits for the task to complete without freezing the main thread</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Basic Syntax</h3>
                <pre><code>{`async Task MethodName()
{
    await Task.Delay(1000); // Simulates a 1 sec delay
    Console.WriteLine("Async work done");
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example: Simple Async Method</h3>
                <pre><code>{`using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        Console.WriteLine("Before async call");

        await PrintAsync(); // Non-blocking

        Console.WriteLine("After async call");
    }

    static async Task PrintAsync()
    {
        await Task.Delay(2000); // Wait for 2 seconds
        Console.WriteLine("Inside async method");
    }
}`}</code></pre>
                <p>Output:<br />Before async call<br />(wait 2 seconds)<br />Inside async method<br />After async call</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example: Fetch Data (Simulated API Call)</h3>
                <pre><code>{`async Task<string> GetData()
{
    await Task.Delay(1000); // Simulate delay
    return "Data from server";
}

async Task Main()
{
    string result = await GetData();
    Console.WriteLine(result);
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Return Types</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Return Type</th>
                      <th>Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Task</td>
                      <td>Returns nothing (void in async)</td>
                    </tr>
                    <tr>
                      <td>Task&lt;T&gt;</td>
                      <td>Returns a value (T) after completion</td>
                    </tr>
                    <tr>
                      <td>void</td>
                      <td>Only for event handlers (not recommended)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-World Use Case: File Read</h3>
                <pre><code>{`string text = await File.ReadAllTextAsync("data.txt");
Console.WriteLine(text);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Parallel Async Example</h3>
                <pre><code>{`async Task Main()
{
    Task<string> t1 = GetData1();
    Task<string> t2 = GetData2();

    string[] results = await Task.WhenAll(t1, t2);

    Console.WriteLine(results[0]);
    Console.WriteLine(results[1]);
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Best Practices</h3>
                <p>Use async for:</p>
                <ul>
                  <li>File I/O</li>
                  <li>HTTP requests</li>
                  <li>DB queries</li>
                  <li>Any long task</li>
                </ul>
                <p>Don't use async in:</p>
                <ul>
                  <li>Constructors</li>
                  <li>Properties</li>
                </ul>
              </div>
            </section>

            <section id="ado" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> ADO.NET – Database Connectivity in C#</h2>
              
              <div className="property-card">
                <h3 className="h4">What is ADO.NET?</h3>
                <p>ADO.NET (ActiveX Data Objects) is a .NET framework used to connect C# applications to databases like SQL Server, MySQL, etc., and perform CRUD operations (Create, Read, Update, Delete).</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Use ADO.NET?</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Direct DB access</td>
                      <td>Connect and control your own database</td>
                    </tr>
                    <tr>
                      <td>Lightweight</td>
                      <td>No need for extra ORM libraries</td>
                    </tr>
                    <tr>
                      <td>Full control</td>
                      <td>Write custom SQL queries easily</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Required Namespace</h3>
                <pre><code>{`using System.Data;  
using System.Data.SqlClient;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Connection String Example</h3>
                <pre><code>{`string connectionString = "Data Source=SERVER_NAME;Initial Catalog=DATABASE_NAME;Integrated Security=True;";`}</code></pre>
                <p>OR using SQL Authentication:</p>
                <pre><code>{`string connectionString = "Server=SERVER_NAME;Database=DB_NAME;UserId=USERNAME;Password=PASSWORD;";`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Open Connection</h3>
                <pre><code>{`SqlConnection con = new SqlConnection(connectionString);
con.Open();
Console.WriteLine("Connected");
con.Close();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Insert Data</h3>
                <pre><code>{`string query = "INSERT INTO Students(Name, Age) VALUES('Kiran', 22)";
SqlCommand cmd = new SqlCommand(query, con);
cmd.ExecuteNonQuery();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Read Data</h3>
                <pre><code>{`string query = "SELECT * FROM Students";
SqlCommand cmd = new SqlCommand(query, con);
SqlDataReader reader = cmd.ExecuteReader();

while (reader.Read())
{
    Console.WriteLine(reader["Name"] + " - " + reader["Age"]);
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Update Data</h3>
                <pre><code>{`string query = "UPDATE Students SET Age=23 WHERE Name='Kiran'";
SqlCommand cmd = new SqlCommand(query, con);
cmd.ExecuteNonQuery();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Delete Data</h3>
                <pre><code>{`string query = "DELETE FROM Students WHERE Name='Kiran'";
SqlCommand cmd = new SqlCommand(query, con);
cmd.ExecuteNonQuery();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Full CRUD Example (Simple)</h3>
                <pre><code>{`SqlConnection con = new SqlConnection("your_connection_string");
con.Open();

// Insert
SqlCommand insert = new SqlCommand("INSERT INTO Users(Name) VALUES('Mugil')", con);
insert.ExecuteNonQuery();

// Select
SqlCommand select = new SqlCommand("SELECT * FROM Users", con);
SqlDataReader reader = select.ExecuteReader();
while (reader.Read())
    Console.WriteLine(reader["Name"]);
reader.Close();

// Update
SqlCommand update = new SqlCommand("UPDATE Users SET Name='Mugilvannan' WHERE Name='Mugil'", con);
update.ExecuteNonQuery();

// Delete
SqlCommand delete = new SqlCommand("DELETE FROM Users WHERE Name='Mugilvannan'", con);
delete.ExecuteNonQuery();
con.Close();`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>C# Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default CsharpNotes;