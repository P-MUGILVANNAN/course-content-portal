import React from 'react';

function PythonNotes() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-py"></i> Python Notes</h1>
          <p className="lead">Your Comprehensive Guide to Python Programming</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#setup"><i className="bi bi-download"></i> Environment Setup</a>
              <a className="nav-link" href="#syntax"><i className="bi bi-file-earmark-code"></i> Basic Syntax</a>
              <a className="nav-link" href="#variables"><i className="bi bi-code-square"></i> Variables</a>
              <a className="nav-link" href="#datatypes"><i className="bi bi-list-check"></i> Data Types</a>
              <a className="nav-link" href="#operators"><i className="bi bi-calculator"></i> Operators</a>
              <a className="nav-link" href="#decision"><i className="bi bi-diagram-2"></i> Decision Making</a>
              <a className="nav-link" href="#loops"><i className="bi bi-arrow-repeat"></i> Loops</a>
              <a className="nav-link" href="#functions"><i className="bi bi-box-arrow-in-right"></i> Functions</a>
              <a className="nav-link" href="#oops"><i className="bi bi-box"></i> OOP Concepts</a>
              <a className="nav-link" href="#exceptions"><i className="bi bi-exclamation-triangle"></i> Exception Handling</a>
              <a className="nav-link" href="#file"><i className="bi bi-file-earmark"></i> File Handling</a>
              <a className="nav-link" href="#modules"><i className="bi bi-box-seam"></i> Modules</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Python</h2>
              
              <div className="property-card">
                <h3 className="h4">What is Python?</h3>
                <ul>
                  <li>Python is a high-level, object-oriented programming language</li>
                  <li>Developed by Guido van Rossum in 1991</li>
                  <li>Known for its simple syntax and readability</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Python Uses</h3>
                <ul>
                  <li>Web development (server-side)</li>
                  <li>Software development</li>
                  <li>Mathematics and scientific computing</li>
                  <li>System scripting</li>
                  <li>Data analysis and machine learning</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Learn Python?</h3>
                <ul>
                  <li>Works on different platforms (Windows, Mac, Linux)</li>
                  <li>Simple syntax similar to English</li>
                  <li>Large standard library</li>
                  <li>Free and open source</li>
                  <li>Strong community support</li>
                </ul>
              </div>
            </section>

            <section id="setup" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-download"></i> Environment Setup</h2>
              
              <div className="property-card">
                <h3 className="h4">Installation Steps</h3>
                <ol>
                  <li>Download Python from <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">python.org</a></li>
                  <li>Run the installer and check "Add Python to PATH"</li>
                  <li>Verify installation by running <code>python --version</code> in command prompt</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">IDEs for Python</h3>
                <ul>
                  <li>VS Code</li>
                  <li>PyCharm</li>
                  <li>IDLE (comes with Python)</li>
                  <li>Jupyter Notebook</li>
                  <li>Sublime Text</li>
                </ul>
              </div>
            </section>

            <section id="syntax" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> Basic Syntax</h2>
              
              <div className="property-card">
                <h3 className="h4">Hello World Example</h3>
                <pre><code>{`print("Hello, World!")`}</code></pre>
                <p>Output: <code>Hello, World!</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Indentation</h3>
                <p>Python uses indentation to define code blocks (instead of curly braces)</p>
                <pre><code>{`if 5 > 2:
    print("Five is greater than two!")`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Comments</h3>
                <pre><code>{`# This is a single line comment

"""
This is a 
multi-line comment
"""`}</code></pre>
              </div>
            </section>

            <section id="variables" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Variables</h2>
              
              <div className="property-card">
                <h3 className="h4">Variable Declaration</h3>
                <pre><code>{`# Variable assignment
x = 5
y = "Hello"
z = 3.14`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Variable Scope</h3>
                <p><strong>Global Scope:</strong> Variables declared outside functions</p>
                <p><strong>Local Scope:</strong> Variables declared inside functions</p>
                <pre><code>{`# Global variable
global_var = "I'm global"

def my_func():
    # Local variable
    local_var = "I'm local"
    print(global_var)  # Accessible
    
my_func()
# print(local_var)  # Error - not accessible`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Variable Naming Rules</h3>
                <ul>
                  <li>Must start with a letter or underscore</li>
                  <li>Can only contain alphanumeric characters and underscores</li>
                  <li>Case-sensitive</li>
                  <li>Avoid Python keywords (like <code>if</code>, <code>for</code>, etc.)</li>
                </ul>
              </div>
            </section>

            <section id="datatypes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-list-check"></i> Data Types</h2>
              
              <div className="property-card">
                <h3 className="h4">Basic Data Types</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>int</code></td>
                      <td>Integer numbers</td>
                      <td><code>x = 10</code></td>
                    </tr>
                    <tr>
                      <td><code>float</code></td>
                      <td>Decimal numbers</td>
                      <td><code>y = 10.5</code></td>
                    </tr>
                    <tr>
                      <td><code>str</code></td>
                      <td>Text (string)</td>
                      <td><code>s = "Hello"</code></td>
                    </tr>
                    <tr>
                      <td><code>bool</code></td>
                      <td>Boolean (True/False)</td>
                      <td><code>b = True</code></td>
                    </tr>
                    <tr>
                      <td><code>complex</code></td>
                      <td>Complex numbers</td>
                      <td><code>c = 1 + 2j</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Collection Data Types</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>list</code></td>
                      <td>Ordered, mutable collection</td>
                      <td><code>lst = [1, 2, 3]</code></td>
                    </tr>
                    <tr>
                      <td><code>tuple</code></td>
                      <td>Ordered, immutable collection</td>
                      <td><code>tup = (1, 2, 3)</code></td>
                    </tr>
                    <tr>
                      <td><code>set</code></td>
                      <td>Unordered, unique elements</td>
                      <td><code>{`s = {1, 2, 3}`}</code></td>
                    </tr>
                    <tr>
                      <td><code>dict</code></td>
                      <td>Key-value pairs</td>
                      <td><code>{`d = {"name": "John", "age": 30}`}</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Type Conversion</h3>
                <pre><code>{`# Convert between types
x = 10
print(float(x))  # 10.0
print(str(x))    # "10"

y = "20"
print(int(y))    # 20

lst = [1, 2, 3]
print(tuple(lst))  # (1, 2, 3)`}</code></pre>
              </div>
            </section>

            <section id="operators" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> Operators</h2>
              
              <div className="property-card">
                <h3 className="h4">Arithmetic Operators</h3>
                <table>
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
                      <td><code>+</code></td>
                      <td>Addition</td>
                      <td><code>10 + 20</code></td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td><code>-</code></td>
                      <td>Subtraction</td>
                      <td><code>20 - 10</code></td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td><code>*</code></td>
                      <td>Multiplication</td>
                      <td><code>10 * 20</code></td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td><code>/</code></td>
                      <td>Division</td>
                      <td><code>20 / 10</code></td>
                      <td>2.0</td>
                    </tr>
                    <tr>
                      <td><code>%</code></td>
                      <td>Modulus (Remainder)</td>
                      <td><code>20 % 10</code></td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td><code>**</code></td>
                      <td>Exponentiation</td>
                      <td><code>10 ** 2</code></td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td><code>//</code></td>
                      <td>Floor Division</td>
                      <td><code>20 // 10</code></td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Assignment Operators</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Equivalent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>=</code></td>
                      <td>Assign</td>
                      <td><code>x = 10</code></td>
                      <td><code>x = 10</code></td>
                    </tr>
                    <tr>
                      <td><code>+=</code></td>
                      <td>Add and assign</td>
                      <td><code>x += 5</code></td>
                      <td><code>x = x + 5</code></td>
                    </tr>
                    <tr>
                      <td><code>-=</code></td>
                      <td>Subtract and assign</td>
                      <td><code>x -= 5</code></td>
                      <td><code>x = x - 5</code></td>
                    </tr>
                    <tr>
                      <td><code>*=</code></td>
                      <td>Multiply and assign</td>
                      <td><code>x *= 5</code></td>
                      <td><code>x = x * 5</code></td>
                    </tr>
                    <tr>
                      <td><code>/=</code></td>
                      <td>Divide and assign</td>
                      <td><code>x /= 5</code></td>
                      <td><code>x = x / 5</code></td>
                    </tr>
                    <tr>
                      <td><code>%=</code></td>
                      <td>Modulus and assign</td>
                      <td><code>x %= 5</code></td>
                      <td><code>x = x % 5</code></td>
                    </tr>
                    <tr>
                      <td><code>**=</code></td>
                      <td>Exponentiation and assign</td>
                      <td><code>x **= 2</code></td>
                      <td><code>x = x ** 2</code></td>
                    </tr>
                    <tr>
                      <td><code>//=</code></td>
                      <td>Floor division and assign</td>
                      <td><code>x //= 2</code></td>
                      <td><code>x = x // 2</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Comparison Operators</h3>
                <table>
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
                      <td><code>==</code></td>
                      <td>Equal to</td>
                      <td><code>10 == 20</code></td>
                      <td><code>False</code></td>
                    </tr>
                    <tr>
                      <td><code>!=</code></td>
                      <td>Not equal to</td>
                      <td><code>10 != 20</code></td>
                      <td><code>True</code></td>
                    </tr>
                    <tr>
                      <td><code>&gt;</code></td>
                      <td>Greater than</td>
                      <td><code>20 &gt; 10</code></td>
                      <td><code>True</code></td>
                    </tr>
                    <tr>
                      <td><code>&gt;=</code></td>
                      <td>Greater than or equal to</td>
                      <td><code>20 &gt;= 10</code></td>
                      <td><code>True</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;</code></td>
                      <td>Less than</td>
                      <td><code>20 &lt; 10</code></td>
                      <td><code>False</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;=</code></td>
                      <td>Less than or equal to</td>
                      <td><code>20 &lt;= 10</code></td>
                      <td><code>False</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Logical Operators</h3>
                <table>
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
                      <td><code>and</code></td>
                      <td>Logical AND</td>
                      <td><code>(10 == 20) and (20 == 33)</code></td>
                      <td><code>False</code></td>
                    </tr>
                    <tr>
                      <td><code>or</code></td>
                      <td>Logical OR</td>
                      <td><code>(10 == 20) or (20 == 33)</code></td>
                      <td><code>False</code></td>
                    </tr>
                    <tr>
                      <td><code>not</code></td>
                      <td>Logical NOT</td>
                      <td><code>not(10 == 20)</code></td>
                      <td><code>True</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Bitwise Operators</h3>
                <table>
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
            </section>

            <section id="decision" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-2"></i> Decision Making Statements</h2>
              
              <div className="property-card">
                <h3 className="h4">if statement</h3>
                <pre><code>{`# Syntax:
if condition:
    # statements

# Example:
age = 18
if age >= 18:
    print("You are an Adult")`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">if-else statement</h3>
                <pre><code>{`# Syntax:
if condition:
    # statements
else:
    # statements

# Example:
age = 18
if age >= 18:
    print("You are an Adult")
else:
    print("You are Minor")`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">elif statement</h3>
                <pre><code>{`# Syntax:
if condition1:
    # statements
elif condition2:
    # statements
else:
    # statements

# Example:
a = 10
b = 25
c = 100
if a > b and a > c:
    print("A is greater")
elif b > a and b > c:
    print("B is greater")
else:
    print("C is greater")`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Nested if statement</h3>
                <pre><code>{`# Syntax:
if condition1:
    if condition2:
        # statements

# Example:
marks = 97
if marks > 90:
    if marks > 95:
        print("O Grade")
    else:
        print("A+ Grade")
else:
    print("Other grades")`}</code></pre>
              </div>
            </section>

            <section id="loops" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> Loops</h2>
              
              <div className="property-card">
                <h3 className="h4">for loop</h3>
                <pre><code>{`# Syntax:
for val in sequence:
    # statements

# Example 1:
x = [10, 20, 30, 40, 50]
for i in x:
    print(i)

# Example 2: Using range()
for i in range(5):  # 0 to 4
    print(i)

for i in range(1, 6):  # 1 to 5
    print(i)

for i in range(2, 7, 2):  # 2, 4, 6
    print(i)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">while loop</h3>
                <pre><code>{`# Syntax:
initialization
while condition:
    # statements
    increment/decrement

# Example:
i = 0
while i < 5:
    print(i)
    i += 1`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Nested loops</h3>
                <pre><code>{`# Example:
for i in range(3):
    for j in range(3):
        print(i, j)

# Output:
# 0 0
# 0 1
# 0 2
# 1 0
# 1 1
# 1 2
# 2 0
# 2 1
# 2 2`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Loop Control Statements</h3>
                <pre><code>{`# break statement
for i in range(5):
    print(i)
    if i == 2:
        break

# Output: 0 1 2

# continue statement
for i in range(5):
    if i == 2:
        continue
    print(i)

# Output: 0 1 3 4`}</code></pre>
              </div>
            </section>

            <section id="functions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box-arrow-in-right"></i> Functions</h2>
              
              <div className="property-card">
                <h3 className="h4">Function Definition</h3>
                <pre><code>{`# Syntax:
def function_name(parameters):
    # statements
    return value  # optional

# Example:
def greet():
    print("Good morning")

# Function call
greet()`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Parameters and Arguments</h3>
                <pre><code>{`# Example with parameters
def add(a, b):
    return a + b

print(add(100, 40))  # 140`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Recursion</h3>
                <pre><code>{`# Example: Factorial function
def fact(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * fact(n-1)

print(fact(4))  # 24`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Lambda Functions</h3>
                <pre><code>{`# Syntax:
lambda arguments: expression

# Example:
x = lambda a, b: a + b
print(x(10, 5))  # 15`}</code></pre>
              </div>
            </section>

            <section id="oops" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box"></i> Object-Oriented Programming (OOP)</h2>
              
              <div className="property-card">
                <h3 className="h4">Class and Object</h3>
                <pre><code>{`# Class definition
class Student:
    id = 1
    name = "Raina"
    
    def rank(self):
        print("O grade")

# Object creation
obj1 = Student()
print(obj1.id)    # 1
print(obj1.name)  # Raina
obj1.rank()       # O grade`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Constructor</h3>
                <pre><code>{`# Default constructor
class Student:
    def __init__(self):
        print("Non-Parameterized constructor")

obj = Student()  # Non-Parameterized constructor

# Parameterized constructor
class Student:
    def __init__(self, name):
        print("Parameterized constructor")
        print(name)

obj = Student("Rutu")  # Parameterized constructor and Rutu`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Inheritance</h3>
                <pre><code>{`# Single level inheritance
class Parent:
    def abc(self):
        print("Parent property")

class Child(Parent):
    def lmn(self):
        print("Child property")

obj = Child()
obj.abc()  # Parent property
obj.lmn()  # Child property

# Multi-level inheritance
class Grandpa:
    def xyz(self):
        print("Grandpa property")

class Parent(Grandpa):
    def abc(self):
        print("Parent property")

class Child(Parent):
    def lmn(self):
        print("Child property")

obj = Child()
obj.xyz()  # Grandpa property
obj.abc()  # Parent property
obj.lmn()  # Child property`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Polymorphism</h3>
                <pre><code>{`# Method Overloading (Python doesn't support directly)
def add(a, b):
    return a + b

def add(a, b, c):
    return a + b + c

print(add(10, 50))    # Error, last definition is used
print(add(10, 5, 2))  # 17

# Method Overriding
class Java:
    def level(self):
        print("Hard")

class JavaScript(Java):
    def level(self):
        print("Easy")

obj1 = Java()
obj2 = JavaScript()
obj1.level()  # Hard
obj2.level()  # Easy`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Abstraction</h3>
                <pre><code>{`from abc import ABC, abstractmethod

class School(ABC):
    @abstractmethod
    def studentName(self):
        pass

class Student1(School):
    def studentName(self):
        print("Narusuco")

class Student2(School):
    def studentName(self):
        print("Inosuki")

obj1 = Student1()
obj2 = Student2()
obj1.studentName()  # Narusuco
obj2.studentName()  # Inosuki`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Encapsulation</h3>
                <pre><code>{`# Public method
class ATM:
    def __init__(self):
        self.amount = 10000

obj = ATM()
print(obj.amount)  # 10000

# Private method (using double underscore)
class ATM:
    def __init__(self):
        self.__amount = 10000
    
    def show(self):
        print(self.__amount)

obj = ATM()
obj.show()  # 10000
# print(obj.__amount)  # Error`}</code></pre>
              </div>
            </section>

            <section id="exceptions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-exclamation-triangle"></i> Exception Handling</h2>
              
              <div className="property-card">
                <h3 className="h4">Try-Except Block</h3>
                <pre><code>{`# Syntax:
try:
    # code that may raise exception
except ExceptionType:
    # code to handle exception
else:
    # code if no exception
finally:
    # code that always executes

# Example 1: ZeroDivisionError
try:
    print(10/0)
except ZeroDivisionError:
    print("Infinity")
finally:
    print("Exception is handled")

# Example 2: NameError
try:
    print(a)
except NameError:
    print("Exception Occurred")
finally:
    print("Exception is handled")`}</code></pre>
              </div>
            </section>

            <section id="file" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark"></i> File Handling</h2>
              
              <div className="property-card">
                <h3 className="h4">File Modes</h3>
                <ul>
                  <li><code>'r'</code> - Read (default)</li>
                  <li><code>'w'</code> - Write (creates new or truncates existing)</li>
                  <li><code>'a'</code> - Append</li>
                  <li><code>'r+'</code> - Read and write</li>
                  <li><code>'w+'</code> - Write and read</li>
                  <li><code>'a+'</code> - Append and read</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Reading Files</h3>
                <pre><code>{`# Method 1: Reading line by line
f = open('file.txt', 'r')
for x in f:
    print(x)
f.close()

# Method 2: Reading entire file
f = open('file.txt', 'r')
print(f.read())
f.close()`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Writing Files</h3>
                <pre><code>{`# Writing to a file
f = open("file1.txt", "w")  # creates if doesn't exist
f.write("My name is Rutu")
f.write("\nI'm an opening batsman")
f.close()`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Appending to Files</h3>
                <pre><code>{`# Appending to a file
f = open("file1.txt", "a")
f.write("\nMy age is 33")
f.close()`}</code></pre>
              </div>
            </section>

            <section id="modules" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box-seam"></i> Modules</h2>
              
              <div className="property-card">
                <h3 className="h4">Creating and Using Modules</h3>
                <pre><code>{`# operators.py (module file)
def add(a, b):
    return a + b

def sub(a, b):
    return a - b

def mul(a, b):
    return a * b

def div(a, b):
    return a / b

# example.py (main file)
import operators

print(operators.add(10, 5))  # 15
print(operators.sub(15, 5))  # 10
print(operators.mul(10, 5))  # 50
print(operators.div(10, 5))  # 2.0`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Database Connectivity</h3>
                <pre><code>{`# Install MySQL connector
# python -m pip install mysql-connector-python

import mysql.connector

# Connect to MySQL
x = mysql.connector.connect(
    host="localhost",
    user="yourusername",
    password="yourpassword",
    port="yourport"
)

print(x)  # Connection object

# Create a database
z = x.cursor()
z.execute("CREATE DATABASE demo")`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Python Notes &copy; 2025 | Comprehensive Python Programming Guide</p>
        </div>
      </footer>
    </div>
  );
}

export default PythonNotes;