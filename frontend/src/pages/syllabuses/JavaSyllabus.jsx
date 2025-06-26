import React from 'react';

function JavaSyllabus() {
  return (
    <div className="bg-light">
      <style>
        {`
          .syllabus-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          .syllabus-header {
            background-color: #6c757d;
            color: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
          }
          .topic-list {
            list-style-type: none;
            padding: 0;
          }
          .topic-item {
            background-color: white;
            margin-bottom: 10px;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .topic-item i {
            margin-right: 10px;
          }
        `}
      </style>
      <div className="syllabus-container">
        <header className="syllabus-header">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-java"></i> Java Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Java Programming Language</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Java</h2>
            <ul>
              <li>What is Java?</li>
              <li>History and Features</li>
              <li>Java Editions (SE, EE, ME)</li>
              <li>JVM, JRE, JDK</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Environment Setup</h2>
            <ul>
              <li>Installing JDK</li>
              <li>Setting PATH variable</li>
              <li>Java IDEs (Eclipse, IntelliJ, NetBeans)</li>
              <li>First Java Program</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-code"></i> Java Basics</h2>
            <ul>
              <li>Java Syntax</li>
              <li>Keywords and Identifiers</li>
              <li>Data Types</li>
              <li>Variables</li>
              <li>Type Casting</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calculator"></i> Operators</h2>
            <ul>
              <li>Arithmetic Operators</li>
              <li>Assignment Operators</li>
              <li>Comparison Operators</li>
              <li>Logical Operators</li>
              <li>Bitwise Operators</li>
              <li>Ternary Operator</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-2"></i> Control Statements</h2>
            <ul>
              <li>if-else</li>
              <li>switch-case</li>
              <li>for loop</li>
              <li>while loop</li>
              <li>do-while loop</li>
              <li>break and continue</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Arrays</h2>
            <ul>
              <li>Single Dimensional Arrays</li>
              <li>Multidimensional Arrays</li>
              <li>Jagged Arrays</li>
              <li>Array Methods</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-textarea-t"></i> Strings</h2>
            <ul>
              <li>String Class</li>
              <li>String Methods</li>
              <li>StringBuffer</li>
              <li>StringBuilder</li>
              <li>String vs StringBuffer vs StringBuilder</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shapes"></i> OOP Concepts</h2>
            <ul>
              <li>Classes and Objects</li>
              <li>Constructors</li>
              <li>this keyword</li>
              <li>static keyword</li>
              <li>final keyword</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-3"></i> Inheritance</h2>
            <ul>
              <li>Single Inheritance</li>
              <li>Multilevel Inheritance</li>
              <li>Hierarchical Inheritance</li>
              <li>Multiple Inheritance (through interfaces)</li>
              <li>Hybrid Inheritance</li>
              <li>super keyword</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-left-right"></i> Polymorphism</h2>
            <ul>
              <li>Method Overloading</li>
              <li>Method Overriding</li>
              <li>Runtime Polymorphism</li>
              <li>Dynamic Method Dispatch</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-eye-slash"></i> Abstraction</h2>
            <ul>
              <li>Abstract Classes</li>
              <li>Abstract Methods</li>
              <li>Interfaces</li>
              <li>Interface vs Abstract Class</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-capsule"></i> Encapsulation</h2>
            <ul>
              <li>Access Modifiers</li>
              <li>Getters and Setters</li>
              <li>Data Hiding</li>
              <li>Java Beans</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-exclamation-triangle"></i> Exception Handling</h2>
            <ul>
              <li>Try-Catch Block</li>
              <li>Multiple Catch Blocks</li>
              <li>Finally Block</li>
              <li>throw and throws</li>
              <li>Custom Exceptions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Collections Framework</h2>
            <ul>
              <li>List (ArrayList, LinkedList)</li>
              <li>Set (HashSet, LinkedHashSet, TreeSet)</li>
              <li>Queue (PriorityQueue)</li>
              <li>Map (HashMap, LinkedHashMap, TreeMap)</li>
              <li>Comparable and Comparator</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cpu"></i> Multithreading</h2>
            <ul>
              <li>Thread Life Cycle</li>
              <li>Creating Threads</li>
              <li>Thread Synchronization</li>
              <li>Inter-thread Communication</li>
              <li>Thread Pool</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-right-square"></i> Lambda Expressions</h2>
            <ul>
              <li>Functional Interfaces</li>
              <li>Lambda Syntax</li>
              <li>Method References</li>
              <li>Stream API</li>
              <li>forEach() Method</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-binary"></i> File Handling</h2>
            <ul>
              <li>File Class</li>
              <li>FileReader and FileWriter</li>
              <li>BufferedReader and BufferedWriter</li>
              <li>Serialization and Deserialization</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> JDBC</h2>
            <ul>
              <li>JDBC Architecture</li>
              <li>JDBC Drivers</li>
              <li>CRUD Operations</li>
              <li>PreparedStatement</li>
              <li>Transaction Management</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-window"></i> Swing</h2>
            <ul>
              <li>Swing Components</li>
              <li>Layout Managers</li>
              <li>Event Handling</li>
              <li>JFrame, JPanel</li>
              <li>Buttons, TextFields, etc.</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-question-circle"></i> Miscellaneous</h2>
            <ul>
              <li>Wrapper Classes</li>
              <li>Autoboxing and Unboxing</li>
              <li>Annotations</li>
              <li>Generics</li>
              <li>Reflection API</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavaSyllabus;