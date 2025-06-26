import React from 'react';

function VueSyllabus() {
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
            background-color: #42b883;
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
          <h1 className="display-4 fw-bold"><i className="bi bi-vue"></i> Vue.js Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Vue.js Framework</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Vue.js</h2>
            <ul>
              <li>What is Vue.js?</li>
              <li>Vue.js Features and Advantages</li>
              <li>Comparison with React and Angular</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-up-circle"></i> Vue.js Versions</h2>
            <ul>
              <li>Vue 2 vs Vue 3</li>
              <li>Composition API vs Options API</li>
              <li>Vue 3.4+ Features</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cpu"></i> Vue Instance</h2>
            <ul>
              <li>Creating a Vue Application</li>
              <li>Data and Methods</li>
              <li>Template Syntax</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-slash"></i> Directives</h2>
            <ul>
              <li>v-if, v-else, v-show</li>
              <li>v-for (List Rendering)</li>
              <li>v-bind (Attribute Binding)</li>
              <li>v-on (Event Handling)</li>
              <li>v-model (Two-way Binding)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Methods & Events</h2>
            <ul>
              <li>Defining Methods</li>
              <li>Event Handling</li>
              <li>Event Modifiers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calculator"></i> Computed Properties & Watchers</h2>
            <ul>
              <li>Computed vs Methods</li>
              <li>Watchers for Reactive Changes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-palette"></i> Class & Style Binding</h2>
            <ul>
              <li>Dynamic Class Binding</li>
              <li>Inline Style Binding</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-input-cursor-text"></i> Form Handling</h2>
            <ul>
              <li>v-model with Form Inputs</li>
              <li>Form Validation</li>
              <li>Modifiers (.lazy, .number, .trim)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> Components</h2>
            <ul>
              <li>Component Architecture</li>
              <li>Single File Components</li>
              <li>Global vs Local Registration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-down-circle"></i> Props</h2>
            <ul>
              <li>Parent to Child Communication</li>
              <li>Prop Validation</li>
              <li>Dynamic Props</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-up-circle"></i> Custom Events</h2>
            <ul>
              <li>Child to Parent Communication</li>
              <li>Event Emitting</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> Lifecycle Hooks</h2>
            <ul>
              <li>Creation Hooks</li>
              <li>Mounting Hooks</li>
              <li>Updating Hooks</li>
              <li>Destruction Hooks</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-signpost-split"></i> Vue Router</h2>
            <ul>
              <li>Setting Up Routes</li>
              <li>Navigation</li>
              <li>Route Params</li>
              <li>Navigation Guards</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-plug"></i> API Handling</h2>
            <ul>
              <li>Axios Integration</li>
              <li>Making HTTP Requests</li>
              <li>Error Handling</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-terminal"></i> Vue CLI</h2>
            <ul>
              <li>Project Setup</li>
              <li>Single File Components</li>
              <li>Build Process</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-3"></i> State Management</h2>
            <ul>
              <li>Vuex Basics</li>
              <li>Pinia (Modern Alternative)</li>
              <li>State, Getters, Mutations, Actions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-layout-wtf"></i> Advanced Components</h2>
            <ul>
              <li>Slots</li>
              <li>Dynamic Components</li>
              <li>Async Components</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tools"></i> Mixins & Custom Directives</h2>
            <ul>
              <li>Creating Mixins</li>
              <li>Custom Directives</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-check"></i> Testing</h2>
            <ul>
              <li>Unit Testing with Jest</li>
              <li>Component Testing</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-phone"></i> Vue for Mobile</h2>
            <ul>
              <li>Vue Native</li>
              <li>Ionic Vue</li>
              <li>Quasar Framework</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-server"></i> Server-Side Rendering</h2>
            <ul>
              <li>Nuxt.js Basics</li>
              <li>SSR Benefits</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up"></i> Performance Optimization</h2>
            <ul>
              <li>Lazy Loading</li>
              <li>Code Splitting</li>
              <li>Performance Tools</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-share"></i> Deployment</h2>
            <ul>
              <li>Building for Production</li>
              <li>Deploying to Various Platforms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VueSyllabus;