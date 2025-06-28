import React from 'react';

function FlutterSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-phone fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Flutter Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Flutter Development</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Flutter</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Flutter?</li>
                <li className="list-group-item">Flutter vs Other Frameworks</li>
                <li className="list-group-item">Advantages and Disadvantages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>Dart Programming Basics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Variables & Data Types</li>
                <li className="list-group-item">Functions & Control Flow</li>
                <li className="list-group-item">Collections (List, Set, Map)</li>
                <li className="list-group-item">Null Safety</li>
                <li className="list-group-item">Classes & Objects</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-folder text-primary me-2"></i>Flutter Project Structure</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Standard Folder Structure</li>
                <li className="list-group-item">main.dart - App Entry Point</li>
                <li className="list-group-item">pubspec.yaml Configuration</li>
                <li className="list-group-item">Platform-specific Folders</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layout-wtf text-primary me-2"></i>Widgets Fundamentals</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Stateless vs Stateful Widgets</li>
                <li className="list-group-item">Common Widgets (Text, Image, Container)</li>
                <li className="list-group-item">Layout Widgets (Row, Column, Stack)</li>
                <li className="list-group-item">Buttons & Interactive Widgets</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-grid text-primary me-2"></i>Layout & Styling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Padding & Margin</li>
                <li className="list-group-item">SizedBox & Alignments</li>
                <li className="list-group-item">BoxDecoration</li>
                <li className="list-group-item">Responsive Design</li>
                <li className="list-group-item">Flexible & Expanded Widgets</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-signpost text-primary me-2"></i>Navigation & Routing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic Navigation</li>
                <li className="list-group-item">Passing Data Between Screens</li>
                <li className="list-group-item">Named Routing</li>
                <li className="list-group-item">Navigation Methods</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-input-cursor-text text-primary me-2"></i>Forms & User Input</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">TextField & TextEditingController</li>
                <li className="list-group-item">Form Validation</li>
                <li className="list-group-item">Checkbox, Radio, Switch</li>
                <li className="list-group-item">Dropdown Button</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-primary me-2"></i>State Management</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">setState() Method</li>
                <li className="list-group-item">Provider Package</li>
                <li className="list-group-item">Other State Management Solutions</li>
                <li className="list-group-item">Comparison of Approaches</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-globe text-primary me-2"></i>Networking</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HTTP Package</li>
                <li className="list-group-item">GET & POST Requests</li>
                <li className="list-group-item">JSON Parsing</li>
                <li className="list-group-item">Model Classes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>Local Storage</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">SharedPreferences</li>
                <li className="list-group-item">SQLite Database</li>
                <li className="list-group-item">Hive</li>
                <li className="list-group-item">File Operations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-fire text-primary me-2"></i>Firebase Integration</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Firebase Setup</li>
                <li className="list-group-item">Authentication</li>
                <li className="list-group-item">Cloud Firestore</li>
                <li className="list-group-item">Firebase Storage</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-magic text-primary me-2"></i>Animations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Implicit Animations</li>
                <li className="list-group-item">Explicit Animations</li>
                <li className="list-group-item">Hero Animation</li>
                <li className="list-group-item">Lottie Animations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-box-seam text-primary me-2"></i>Packages & Plugins</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Popular Packages</li>
                <li className="list-group-item">Image Picker</li>
                <li className="list-group-item">URL Launcher</li>
                <li className="list-group-item">File Picker</li>
                <li className="list-group-item">PDF Generation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cloud-upload text-primary me-2"></i>Deployment</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">APK & App Bundle</li>
                <li className="list-group-item">Play Store Upload</li>
                <li className="list-group-item">App Signing</li>
                <li className="list-group-item">Release Configuration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightbulb text-primary me-2"></i>Project Ideas</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">To-Do App</li>
                <li className="list-group-item">E-Commerce App</li>
                <li className="list-group-item">Chat App</li>
                <li className="list-group-item">Weather App</li>
                <li className="list-group-item">Portfolio App</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlutterSyllabus;