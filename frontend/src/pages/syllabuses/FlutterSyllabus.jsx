import React from 'react';

function FlutterSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-phone"></i> Flutter Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Flutter Development</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Flutter</h2>
            <ul>
              <li>What is Flutter?</li>
              <li>Flutter vs Other Frameworks</li>
              <li>Advantages and Disadvantages</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> Dart Programming Basics</h2>
            <ul>
              <li>Variables & Data Types</li>
              <li>Functions & Control Flow</li>
              <li>Collections (List, Set, Map)</li>
              <li>Null Safety</li>
              <li>Classes & Objects</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-folder"></i> Flutter Project Structure</h2>
            <ul>
              <li>Standard Folder Structure</li>
              <li>main.dart - App Entry Point</li>
              <li>pubspec.yaml Configuration</li>
              <li>Platform-specific Folders</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-layout-wtf"></i> Widgets Fundamentals</h2>
            <ul>
              <li>Stateless vs Stateful Widgets</li>
              <li>Common Widgets (Text, Image, Container)</li>
              <li>Layout Widgets (Row, Column, Stack)</li>
              <li>Buttons & Interactive Widgets</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-grid"></i> Layout & Styling</h2>
            <ul>
              <li>Padding & Margin</li>
              <li>SizedBox & Alignments</li>
              <li>BoxDecoration</li>
              <li>Responsive Design</li>
              <li>Flexible & Expanded Widgets</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-signpost"></i> Navigation & Routing</h2>
            <ul>
              <li>Basic Navigation</li>
              <li>Passing Data Between Screens</li>
              <li>Named Routing</li>
              <li>Navigation Methods</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-input-cursor-text"></i> Forms & User Input</h2>
            <ul>
              <li>TextField & TextEditingController</li>
              <li>Form Validation</li>
              <li>Checkbox, Radio, Switch</li>
              <li>Dropdown Button</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> State Management</h2>
            <ul>
              <li>setState() Method</li>
              <li>Provider Package</li>
              <li>Other State Management Solutions</li>
              <li>Comparison of Approaches</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-globe"></i> Networking</h2>
            <ul>
              <li>HTTP Package</li>
              <li>GET & POST Requests</li>
              <li>JSON Parsing</li>
              <li>Model Classes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> Local Storage</h2>
            <ul>
              <li>SharedPreferences</li>
              <li>SQLite Database</li>
              <li>Hive</li>
              <li>File Operations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-fire"></i> Firebase Integration</h2>
            <ul>
              <li>Firebase Setup</li>
              <li>Authentication</li>
              <li>Cloud Firestore</li>
              <li>Firebase Storage</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-magic"></i> Animations</h2>
            <ul>
              <li>Implicit Animations</li>
              <li>Explicit Animations</li>
              <li>Hero Animation</li>
              <li>Lottie Animations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box-seam"></i> Packages & Plugins</h2>
            <ul>
              <li>Popular Packages</li>
              <li>Image Picker</li>
              <li>URL Launcher</li>
              <li>File Picker</li>
              <li>PDF Generation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cloud-upload"></i> Deployment</h2>
            <ul>
              <li>APK & App Bundle</li>
              <li>Play Store Upload</li>
              <li>App Signing</li>
              <li>Release Configuration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightbulb"></i> Project Ideas</h2>
            <ul>
              <li>To-Do App</li>
              <li>E-Commerce App</li>
              <li>Chat App</li>
              <li>Weather App</li>
              <li>Portfolio App</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlutterSyllabus;