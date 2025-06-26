import React from 'react';

function AngularSyllabus() {
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
            background-color: #dd0031;
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
          <h1 className="display-4 fw-bold"><i className="bi bi-angular"></i> Angular Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Angular Framework</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Angular</h2>
            <ul>
              <li>What is Angular?</li>
              <li>Client-Side vs Server-Side Frameworks</li>
              <li>Angular vs AngularJS</li>
              <li>Comparison with React and Vue</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-star-fill"></i> Angular Features</h2>
            <ul>
              <li>Component-Based Architecture</li>
              <li>Two-Way Data Binding</li>
              <li>Dependency Injection</li>
              <li>Directives</li>
              <li>Routing</li>
              <li>TypeScript Support</li>
              <li>Reactive Forms</li>
              <li>Pipes</li>
              <li>Angular CLI</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Angular Setup</h2>
            <ul>
              <li>Installing Angular CLI</li>
              <li>Creating a new Angular project</li>
              <li>Project Structure</li>
              <li>Running the Development Server</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> Components</h2>
            <ul>
              <li>Component Architecture</li>
              <li>Creating Components</li>
              <li>Component Decorator</li>
              <li>Templates and Styles</li>
              <li>Component Communication</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-left-right"></i> Data Binding</h2>
            <ul>
              <li>Interpolation</li>
              <li>Property Binding</li>
              <li>Event Binding</li>
              <li>Two-Way Binding</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-slash"></i> Directives</h2>
            <ul>
              <li>Component Directives</li>
              <li>Structural Directives (*ngIf, *ngFor, *ngSwitch)</li>
              <li>Attribute Directives (ngClass, ngStyle)</li>
              <li>Custom Directives</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-filter"></i> Pipes</h2>
            <ul>
              <li>Built-in Pipes (date, uppercase, currency, etc.)</li>
              <li>Pipe Parameters</li>
              <li>Custom Pipes</li>
              <li>Pure vs Impure Pipes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-input-cursor-text"></i> Forms</h2>
            <ul>
              <li>Template-driven Forms</li>
              <li>Reactive Forms</li>
              <li>Form Validation</li>
              <li>FormBuilder</li>
              <li>Custom Validators</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cloud-arrow-down"></i> HTTP Client</h2>
            <ul>
              <li>HttpClientModule</li>
              <li>Making GET/POST/PUT/DELETE requests</li>
              <li>Handling Responses</li>
              <li>Error Handling</li>
              <li>Interceptors</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-signpost-split"></i> Routing</h2>
            <ul>
              <li>Router Module</li>
              <li>Route Configuration</li>
              <li>Router Outlet</li>
              <li>Router Links</li>
              <li>Route Parameters</li>
              <li>Child Routes</li>
              <li>Route Guards</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> Lifecycle Hooks</h2>
            <ul>
              <li>ngOnChanges</li>
              <li>ngOnInit</li>
              <li>ngDoCheck</li>
              <li>ngAfterContentInit</li>
              <li>ngAfterContentChecked</li>
              <li>ngAfterViewInit</li>
              <li>ngAfterViewChecked</li>
              <li>ngOnDestroy</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-3"></i> Dependency Injection</h2>
            <ul>
              <li>Providers</li>
              <li>Services</li>
              <li>Injectable Decorator</li>
              <li>Hierarchical Injectors</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-layout-text-sidebar"></i> Modules</h2>
            <ul>
              <li>Root Module</li>
              <li>Feature Modules</li>
              <li>Shared Modules</li>
              <li>Lazy Loading</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-universal-access"></i> Advanced Topics</h2>
            <ul>
              <li>Change Detection</li>
              <li>ViewChild and ContentChild</li>
              <li>Dynamic Components</li>
              <li>Angular Elements</li>
              <li>Server-Side Rendering</li>
              <li>Testing</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AngularSyllabus;