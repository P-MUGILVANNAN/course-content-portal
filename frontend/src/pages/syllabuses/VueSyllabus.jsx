import React from 'react';

function VueSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-success text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-vue fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Vue.js Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Vue.js Framework</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-success me-2"></i>Introduction to Vue.js</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Vue.js?</li>
                <li className="list-group-item">Vue.js Features and Advantages</li>
                <li className="list-group-item">Comparison with React and Angular</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-up-circle text-success me-2"></i>Vue.js Versions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Vue 2 vs Vue 3</li>
                <li className="list-group-item">Composition API vs Options API</li>
                <li className="list-group-item">Vue 3.4+ Features</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cpu text-success me-2"></i>Vue Instance</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating a Vue Application</li>
                <li className="list-group-item">Data and Methods</li>
                <li className="list-group-item">Template Syntax</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-slash text-success me-2"></i>Directives</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">v-if, v-else, v-show</li>
                <li className="list-group-item">v-for (List Rendering)</li>
                <li className="list-group-item">v-bind (Attribute Binding)</li>
                <li className="list-group-item">v-on (Event Handling)</li>
                <li className="list-group-item">v-model (Two-way Binding)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-success me-2"></i>Methods & Events</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Defining Methods</li>
                <li className="list-group-item">Event Handling</li>
                <li className="list-group-item">Event Modifiers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-calculator text-success me-2"></i>Computed Properties & Watchers</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Computed vs Methods</li>
                <li className="list-group-item">Watchers for Reactive Changes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-palette text-success me-2"></i>Class & Style Binding</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Dynamic Class Binding</li>
                <li className="list-group-item">Inline Style Binding</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-input-cursor-text text-success me-2"></i>Form Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">v-model with Form Inputs</li>
                <li className="list-group-item">Form Validation</li>
                <li className="list-group-item">Modifiers (.lazy, .number, .trim)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-puzzle text-success me-2"></i>Components</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Component Architecture</li>
                <li className="list-group-item">Single File Components</li>
                <li className="list-group-item">Global vs Local Registration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-down-circle text-success me-2"></i>Props</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Parent to Child Communication</li>
                <li className="list-group-item">Prop Validation</li>
                <li className="list-group-item">Dynamic Props</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-up-circle text-success me-2"></i>Custom Events</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Child to Parent Communication</li>
                <li className="list-group-item">Event Emitting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-success me-2"></i>Lifecycle Hooks</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creation Hooks</li>
                <li className="list-group-item">Mounting Hooks</li>
                <li className="list-group-item">Updating Hooks</li>
                <li className="list-group-item">Destruction Hooks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-signpost-split text-success me-2"></i>Vue Router</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Setting Up Routes</li>
                <li className="list-group-item">Navigation</li>
                <li className="list-group-item">Route Params</li>
                <li className="list-group-item">Navigation Guards</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-plug text-success me-2"></i>API Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Axios Integration</li>
                <li className="list-group-item">Making HTTP Requests</li>
                <li className="list-group-item">Error Handling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-terminal text-success me-2"></i>Vue CLI</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Project Setup</li>
                <li className="list-group-item">Single File Components</li>
                <li className="list-group-item">Build Process</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-3 text-success me-2"></i>State Management</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Vuex Basics</li>
                <li className="list-group-item">Pinia (Modern Alternative)</li>
                <li className="list-group-item">State, Getters, Mutations, Actions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layout-wtf text-success me-2"></i>Advanced Components</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Slots</li>
                <li className="list-group-item">Dynamic Components</li>
                <li className="list-group-item">Async Components</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tools text-success me-2"></i>Mixins & Custom Directives</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating Mixins</li>
                <li className="list-group-item">Custom Directives</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-check text-success me-2"></i>Testing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Unit Testing with Jest</li>
                <li className="list-group-item">Component Testing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-phone text-success me-2"></i>Vue for Mobile</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Vue Native</li>
                <li className="list-group-item">Ionic Vue</li>
                <li className="list-group-item">Quasar Framework</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-server text-success me-2"></i>Server-Side Rendering</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Nuxt.js Basics</li>
                <li className="list-group-item">SSR Benefits</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-graph-up text-success me-2"></i>Performance Optimization</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Lazy Loading</li>
                <li className="list-group-item">Code Splitting</li>
                <li className="list-group-item">Performance Tools</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-share text-success me-2"></i>Deployment</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Building for Production</li>
                <li className="list-group-item">Deploying to Various Platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VueSyllabus;