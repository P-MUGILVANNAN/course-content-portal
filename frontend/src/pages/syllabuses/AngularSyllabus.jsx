import React from 'react';

function AngularSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-danger text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-angular fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Angular Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Angular Framework</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-danger me-2"></i>Introduction to Angular</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Angular?</li>
                <li className="list-group-item">Client-Side vs Server-Side Frameworks</li>
                <li className="list-group-item">Angular vs AngularJS</li>
                <li className="list-group-item">Comparison with React and Vue</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-star-fill text-danger me-2"></i>Angular Features</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Component-Based Architecture</li>
                <li className="list-group-item">Two-Way Data Binding</li>
                <li className="list-group-item">Dependency Injection</li>
                <li className="list-group-item">Directives</li>
                <li className="list-group-item">Routing</li>
                <li className="list-group-item">TypeScript Support</li>
                <li className="list-group-item">Reactive Forms</li>
                <li className="list-group-item">Pipes</li>
                <li className="list-group-item">Angular CLI</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-danger me-2"></i>Angular Setup</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Installing Angular CLI</li>
                <li className="list-group-item">Creating a new Angular project</li>
                <li className="list-group-item">Project Structure</li>
                <li className="list-group-item">Running the Development Server</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-puzzle text-danger me-2"></i>Components</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Component Architecture</li>
                <li className="list-group-item">Creating Components</li>
                <li className="list-group-item">Component Decorator</li>
                <li className="list-group-item">Templates and Styles</li>
                <li className="list-group-item">Component Communication</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-left-right text-danger me-2"></i>Data Binding</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Interpolation</li>
                <li className="list-group-item">Property Binding</li>
                <li className="list-group-item">Event Binding</li>
                <li className="list-group-item">Two-Way Binding</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-slash text-danger me-2"></i>Directives</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Component Directives</li>
                <li className="list-group-item">Structural Directives (*ngIf, *ngFor, *ngSwitch)</li>
                <li className="list-group-item">Attribute Directives (ngClass, ngStyle)</li>
                <li className="list-group-item">Custom Directives</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-filter text-danger me-2"></i>Pipes</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Built-in Pipes (date, uppercase, currency, etc.)</li>
                <li className="list-group-item">Pipe Parameters</li>
                <li className="list-group-item">Custom Pipes</li>
                <li className="list-group-item">Pure vs Impure Pipes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-input-cursor-text text-danger me-2"></i>Forms</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Template-driven Forms</li>
                <li className="list-group-item">Reactive Forms</li>
                <li className="list-group-item">Form Validation</li>
                <li className="list-group-item">FormBuilder</li>
                <li className="list-group-item">Custom Validators</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cloud-arrow-down text-danger me-2"></i>HTTP Client</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HttpClientModule</li>
                <li className="list-group-item">Making GET/POST/PUT/DELETE requests</li>
                <li className="list-group-item">Handling Responses</li>
                <li className="list-group-item">Error Handling</li>
                <li className="list-group-item">Interceptors</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-signpost-split text-danger me-2"></i>Routing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Router Module</li>
                <li className="list-group-item">Route Configuration</li>
                <li className="list-group-item">Router Outlet</li>
                <li className="list-group-item">Router Links</li>
                <li className="list-group-item">Route Parameters</li>
                <li className="list-group-item">Child Routes</li>
                <li className="list-group-item">Route Guards</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-danger me-2"></i>Lifecycle Hooks</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">ngOnChanges</li>
                <li className="list-group-item">ngOnInit</li>
                <li className="list-group-item">ngDoCheck</li>
                <li className="list-group-item">ngAfterContentInit</li>
                <li className="list-group-item">ngAfterContentChecked</li>
                <li className="list-group-item">ngAfterViewInit</li>
                <li className="list-group-item">ngAfterViewChecked</li>
                <li className="list-group-item">ngOnDestroy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-3 text-danger me-2"></i>Dependency Injection</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Providers</li>
                <li className="list-group-item">Services</li>
                <li className="list-group-item">Injectable Decorator</li>
                <li className="list-group-item">Hierarchical Injectors</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layout-text-sidebar text-danger me-2"></i>Modules</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Root Module</li>
                <li className="list-group-item">Feature Modules</li>
                <li className="list-group-item">Shared Modules</li>
                <li className="list-group-item">Lazy Loading</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-universal-access text-danger me-2"></i>Advanced Topics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Change Detection</li>
                <li className="list-group-item">ViewChild and ContentChild</li>
                <li className="list-group-item">Dynamic Components</li>
                <li className="list-group-item">Angular Elements</li>
                <li className="list-group-item">Server-Side Rendering</li>
                <li className="list-group-item">Testing</li>
                <li className="list-group-item">Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AngularSyllabus;