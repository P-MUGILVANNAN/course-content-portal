import React from 'react';

function JavaSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-java fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Java Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Java Programming Language</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Java</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Java?</li>
                <li className="list-group-item">History and Features</li>
                <li className="list-group-item">Java Editions (SE, EE, ME)</li>
                <li className="list-group-item">JVM, JRE, JDK</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Environment Setup</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Installing JDK</li>
                <li className="list-group-item">Setting PATH variable</li>
                <li className="list-group-item">Java IDEs (Eclipse, IntelliJ, NetBeans)</li>
                <li className="list-group-item">First Java Program</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-code text-primary me-2"></i>Java Basics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Java Syntax</li>
                <li className="list-group-item">Keywords and Identifiers</li>
                <li className="list-group-item">Data Types</li>
                <li className="list-group-item">Variables</li>
                <li className="list-group-item">Type Casting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-calculator text-primary me-2"></i>Operators</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Arithmetic Operators</li>
                <li className="list-group-item">Assignment Operators</li>
                <li className="list-group-item">Comparison Operators</li>
                <li className="list-group-item">Logical Operators</li>
                <li className="list-group-item">Bitwise Operators</li>
                <li className="list-group-item">Ternary Operator</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-2 text-primary me-2"></i>Control Statements</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">if-else</li>
                <li className="list-group-item">switch-case</li>
                <li className="list-group-item">for loop</li>
                <li className="list-group-item">while loop</li>
                <li className="list-group-item">do-while loop</li>
                <li className="list-group-item">break and continue</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-collection text-primary me-2"></i>Arrays</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Single Dimensional Arrays</li>
                <li className="list-group-item">Multidimensional Arrays</li>
                <li className="list-group-item">Jagged Arrays</li>
                <li className="list-group-item">Array Methods</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-textarea-t text-primary me-2"></i>Strings</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">String Class</li>
                <li className="list-group-item">String Methods</li>
                <li className="list-group-item">StringBuffer</li>
                <li className="list-group-item">StringBuilder</li>
                <li className="list-group-item">String vs StringBuffer vs StringBuilder</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shapes text-primary me-2"></i>OOP Concepts</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Classes and Objects</li>
                <li className="list-group-item">Constructors</li>
                <li className="list-group-item">this keyword</li>
                <li className="list-group-item">static keyword</li>
                <li className="list-group-item">final keyword</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-3 text-primary me-2"></i>Inheritance</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Single Inheritance</li>
                <li className="list-group-item">Multilevel Inheritance</li>
                <li className="list-group-item">Hierarchical Inheritance</li>
                <li className="list-group-item">Multiple Inheritance (through interfaces)</li>
                <li className="list-group-item">Hybrid Inheritance</li>
                <li className="list-group-item">super keyword</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-left-right text-primary me-2"></i>Polymorphism</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Method Overloading</li>
                <li className="list-group-item">Method Overriding</li>
                <li className="list-group-item">Runtime Polymorphism</li>
                <li className="list-group-item">Dynamic Method Dispatch</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-eye-slash text-primary me-2"></i>Abstraction</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Abstract Classes</li>
                <li className="list-group-item">Abstract Methods</li>
                <li className="list-group-item">Interfaces</li>
                <li className="list-group-item">Interface vs Abstract Class</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-capsule text-primary me-2"></i>Encapsulation</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Access Modifiers</li>
                <li className="list-group-item">Getters and Setters</li>
                <li className="list-group-item">Data Hiding</li>
                <li className="list-group-item">Java Beans</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-exclamation-triangle text-primary me-2"></i>Exception Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Try-Catch Block</li>
                <li className="list-group-item">Multiple Catch Blocks</li>
                <li className="list-group-item">Finally Block</li>
                <li className="list-group-item">throw and throws</li>
                <li className="list-group-item">Custom Exceptions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-collection text-primary me-2"></i>Collections Framework</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">List (ArrayList, LinkedList)</li>
                <li className="list-group-item">Set (HashSet, LinkedHashSet, TreeSet)</li>
                <li className="list-group-item">Queue (PriorityQueue)</li>
                <li className="list-group-item">Map (HashMap, LinkedHashMap, TreeMap)</li>
                <li className="list-group-item">Comparable and Comparator</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cpu text-primary me-2"></i>Multithreading</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Thread Life Cycle</li>
                <li className="list-group-item">Creating Threads</li>
                <li className="list-group-item">Thread Synchronization</li>
                <li className="list-group-item">Inter-thread Communication</li>
                <li className="list-group-item">Thread Pool</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-right-square text-primary me-2"></i>Lambda Expressions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Functional Interfaces</li>
                <li className="list-group-item">Lambda Syntax</li>
                <li className="list-group-item">Method References</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-binary text-primary me-2"></i>File Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">File Class</li>
                <li className="list-group-item">FileReader and FileWriter</li>
                <li className="list-group-item">BufferedReader and BufferedWriter</li>
                <li className="list-group-item">Serialization and Deserialization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavaSyllabus;