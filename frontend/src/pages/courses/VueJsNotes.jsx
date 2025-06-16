import React from 'react';

function VueJsNotes() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-js"></i> Vue.js Notes</h1>
          <p className="lead">Your Comprehensive Guide to Vue.js Framework (2025 Edition)</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#versions"><i className="bi bi-arrow-up-circle"></i> Vue.js Versions</a>
              <a className="nav-link" href="#comparison"><i className="bi bi-grid-3x3"></i> Vue vs React vs Angular</a>
              <a className="nav-link" href="#instance"><i className="bi bi-cpu"></i> Vue Instance</a>
              <a className="nav-link" href="#syntax"><i className="bi bi-file-earmark-code"></i> Template Syntax</a>
              <a className="nav-link" href="#directives"><i className="bi bi-code-slash"></i> Directives</a>
              <a className="nav-link" href="#methods"><i className="bi bi-gear"></i> Methods & Events</a>
              <a className="nav-link" href="#computed"><i className="bi bi-calculator"></i> Computed Properties</a>
              <a className="nav-link" href="#class-style"><i className="bi bi-palette"></i> Class & Style Binding</a>
              <a className="nav-link" href="#forms"><i className="bi bi-input-cursor-text"></i> Form Handling</a>
              <a className="nav-link" href="#components"><i className="bi bi-puzzle"></i> Components</a>
              <a className="nav-link" href="#props"><i className="bi bi-arrow-down-circle"></i> Props</a>
              <a className="nav-link" href="#events"><i className="bi bi-arrow-up-circle"></i> Custom Events</a>
              <a className="nav-link" href="#lifecycle"><i className="bi bi-arrow-repeat"></i> Lifecycle Hooks</a>
              <a className="nav-link" href="#router"><i className="bi bi-signpost-split"></i> Vue Router</a>
              <a className="nav-link" href="#api"><i className="bi bi-plug"></i> API Handling</a>
              <a className="nav-link" href="#cli"><i className="bi bi-terminal"></i> Vue CLI</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Vue.js</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <ul>
                  <li><strong>Vue.js</strong> is a progressive JavaScript framework used to build user interfaces and single-page applications (SPAs).</li>
                  <li>It focuses on the <strong>view layer</strong> and is easy to integrate with other libraries or existing projects.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Key Features:</h3>
                <ul>
                  <li><strong>Reactive Data Binding</strong></li>
                  <li><strong>Component-Based Architecture</strong></li>
                  <li><strong>Directives (v-if, v-for, etc.)</strong></li>
                  <li><strong>Vue CLI & Vue Router Support</strong></li>
                  <li><strong>Lightweight and Performant</strong></li>
                  <li><strong>Composition API (Introduced in Vue 3)</strong></li>
                  <li><strong>TypeScript Support</strong></li>
                </ul>
              </div>
            </section>

            <section id="versions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-up-circle"></i> Vue.js Versions</h2>
              
              <div className="property-card">
                <table>
                  <thead>
                    <tr>
                      <th>Version</th>
                      <th>Release Year</th>
                      <th>Notable Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vue 2</td>
                      <td>2016</td>
                      <td>Options API, Virtual DOM, Directives</td>
                    </tr>
                    <tr>
                      <td>Vue 3</td>
                      <td>2020</td>
                      <td>Composition API, Fragments, Teleport</td>
                    </tr>
                    <tr>
                      <td>Vue 3.4+</td>
                      <td>2024-2025</td>
                      <td>Better TypeScript support, Vite integration</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-3"><strong>Vue 3.x is the current stable and recommended version (2025).</strong></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Use Vue.js in 2025?</h3>
                <ol>
                  <li><strong>Simple to Learn</strong> – Beginner-friendly.</li>
                  <li>Supports both <strong>Options API</strong> and <strong>Composition API</strong>.</li>
                  <li>Two-way binding using v-model.</li>
                  <li>Fast rendering with Virtual DOM.</li>
                  <li>Mobile & Desktop-ready (with Vue Native, Quasar, etc.)</li>
                  <li>Integrates well with REST APIs and GraphQL.</li>
                  <li>Powered by <strong>Vite</strong> – fast modern build tool.</li>
                </ol>
              </div>
            </section>

            <section id="comparison" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-grid-3x3"></i> Vue vs React vs Angular (2025)</h2>
              
              <div className="property-card">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Vue.js</th>
                      <th>React</th>
                      <th>Angular</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Type</td>
                      <td>Framework</td>
                      <td>Library</td>
                      <td>Framework</td>
                    </tr>
                    <tr>
                      <td>Learning Curve</td>
                      <td>Easy</td>
                      <td>Medium</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Size</td>
                      <td>Small</td>
                      <td>Small</td>
                      <td>Large</td>
                    </tr>
                    <tr>
                      <td>Data Binding</td>
                      <td>Two-way</td>
                      <td>One-way</td>
                      <td>Two-way</td>
                    </tr>
                    <tr>
                      <td>Tooling</td>
                      <td>Vue CLI / Vite</td>
                      <td>CRA / Vite</td>
                      <td>Angular CLI</td>
                    </tr>
                    <tr>
                      <td>Flexibility</td>
                      <td>High</td>
                      <td>Very High</td>
                      <td>Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Basic Vue Example:</h3>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
  <title>Vue Example</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <h1>Hello, {{ name }}!</h1>
  </div>

  <script>
    const { createApp } = Vue;

    createApp({
      data() {
        return {
          name: 'Mugilvannan'
        }
      }
    }).mount('#app');
  </script>
</body>
</html>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Time Use Cases of Vue.js (2025):</h3>
                <ul>
                  <li>Admin Dashboards</li>
                  <li>E-commerce sites</li>
                  <li>CRM systems</li>
                  <li>Portfolio Websites</li>
                  <li>Hybrid Mobile Apps</li>
                </ul>
              </div>
            </section>

            <section id="instance" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cpu"></i> Vue Instance</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p>The <strong>Vue instance</strong> is the heart of every Vue application. It connects the <strong>DOM</strong> and the <strong>Vue logic</strong> using the createApp() method in Vue 3.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Vue 2 vs Vue 3 Syntax</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Vue 2</th>
                      <th>Vue 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Create App</td>
                      <td><code>{`new Vue({...})`}</code></td>
                      <td><code>{`createApp({...}).mount()`}</code></td>
                    </tr>
                    <tr>
                      <td>Lifecycle</td>
                      <td><code>mounted() {}</code></td>
                      <td><code>{`onMounted(() => {})`}</code> (Comp API)</td>
                    </tr>
                    <tr>
                      <td>Mounting</td>
                      <td><code>el: '#app'</code> inside options</td>
                      <td><code>.mount('#app')</code> outside</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Basic Vue 3 Instance Example:</h3>
                <pre><code>{`<div id="app">
  <h2>{{ message }}</h2>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: "Welcome to Vue 3!"
      }
    }
  }).mount('#app');
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Main Options in Vue Instance:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Option</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>data()</code></td>
                      <td>Returns reactive data object</td>
                    </tr>
                    <tr>
                      <td><code>methods</code></td>
                      <td>Defines custom methods/functions</td>
                    </tr>
                    <tr>
                      <td><code>computed</code></td>
                      <td>Creates cached values based on data</td>
                    </tr>
                    <tr>
                      <td><code>mounted</code></td>
                      <td>Lifecycle hook – Runs when component is mounted</td>
                    </tr>
                    <tr>
                      <td><code>watch</code></td>
                      <td>React to changes in data</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example with All Options:</h3>
                <pre><code>{`<div id="app">
  <p>{{ message }}</p>
  <button @click="changeMessage">Change</button>
</div>

<script>
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: "Hello Vue!"
      }
    },
    methods: {
      changeMessage() {
        this.message = "Message Changed!";
      }
    },
    mounted() {
      console.log("App mounted!");
    }
  }).mount("#app");
</script>`}</code></pre>
              </div>
            </section>

            <section id="syntax" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> Template Syntax</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <ul>
                  <li>Vue's <strong>template syntax</strong> allows you to declaratively bind the DOM to the Vue instance's data.</li>
                  <li>It's similar to HTML but enhanced with Vue-specific directives and expressions.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Text Interpolation</h3>
                <p>Use double curly braces <code>{`{ }`}</code> to display data.</p>
                <pre><code>{`<p>{{ message }}</p>

data() {
  return {
    message: 'Hello Vue!'
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Raw HTML Binding</h3>
                <p>Use <code>v-html</code> to render HTML content.</p>
                <pre><code>{`<p v-html="rawHtml"></p>

data() {
  return {
    rawHtml: "<strong>Bold Text</strong>"
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Attribute Binding (v-bind)</h3>
                <p>Bind dynamic values to HTML attributes.</p>
                <pre><code>{`<img v-bind:src="imageUrl">
<!-- shorthand -->
<img :src="imageUrl">`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Event Handling (v-on)</h3>
                <p>Bind JavaScript functions to DOM events.</p>
                <pre><code>{`<button v-on:click="sayHello">Click Me</button>
<!-- shorthand -->
<button @click="sayHello">Click Me</button>

methods: {
  sayHello() {
    alert("Hello from Vue!");
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Expressions in Template</h3>
                <p>You can use simple expressions directly inside <code>{`{ }`}</code>:</p>
                <pre><code>{`<p>{{ 5 + 5 }}</p> <!-- Output: 10 -->
<p>{{ message.toUpperCase() }}</p>`}</code></pre>
                <p className="mt-2"><strong>Note:</strong> Do not put statements (like if, for, assignments) inside <code>{`{ }`}</code> – only expressions.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Binding Classes and Styles</h3>
                <pre><code>{`<!-- Class Binding -->
<div :class="{ active: isActive }"></div>

<!-- Style Binding -->
<div :style="{ color: textColor, fontSize: fontSize + 'px' }"></div>

data() {
  return {
    isActive: true,
    textColor: 'red',
    fontSize: 20
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">7. Shorthands Recap:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Full Syntax</th>
                      <th>Shorthand</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>v-bind:href</code></td>
                      <td><code>:href</code></td>
                    </tr>
                    <tr>
                      <td><code>v-on:click</code></td>
                      <td><code>@click</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">8. Comments in Template</h3>
                <pre><code>{`<!-- This is a Vue template comment -->`}</code></pre>
              </div>
            </section>

            <section id="directives" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-slash"></i> Vue Directives</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <ul>
                  <li><strong>Directives</strong> are special attributes in Vue prefixed with <code>v-</code> that apply reactive behavior to the DOM.</li>
                  <li>They help control rendering, looping, binding, and more.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. v-if – Conditional Rendering</h3>
                <p>Renders an element only if the condition is true.</p>
                <pre><code>{`<p v-if="isLoggedIn">Welcome back!</p>

data() {
  return {
    isLoggedIn: true
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. v-else and v-else-if</h3>
                <p>Used with v-if for multiple conditions.</p>
                <pre><code>{`<p v-if="age >= 18">Adult</p>
<p v-else-if="age > 12">Teenager</p>
<p v-else>Child</p>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. v-show – Toggle Visibility</h3>
                <p>Unlike v-if, v-show doesn't remove the element from the DOM; it just toggles visibility with CSS (display: none).</p>
                <pre><code>{`<p v-show="visible">Now you see me!</p>`}</code></pre>
                <p className="mt-2"><strong>When to use:</strong></p>
                <ul>
                  <li>Use <code>v-show</code> for elements that toggle often.</li>
                  <li>Use <code>v-if</code> for one-time or rare rendering.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. v-for – List Rendering</h3>
                <p>Used to render items in an array.</p>
                <pre><code>{`<ul>
  <li v-for="(item, index) in items" :key="index">{{ item }}</li>
</ul>

data() {
  return {
    items: ['Apple', 'Banana', 'Cherry']
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. v-bind – Attribute Binding</h3>
                <p>Binds data to attributes dynamically.</p>
                <pre><code>{`<img v-bind:src="imageUrl">
<!-- shorthand -->
<img :src="imageUrl">`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. v-on – Event Binding</h3>
                <p>Used to listen for DOM events.</p>
                <pre><code>{`<button v-on:click="doSomething">Click me</button>
<!-- shorthand -->
<button @click="doSomething">Click me</button>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">7. v-model – Two-Way Binding</h3>
                <p>Synchronizes form inputs with data.</p>
                <pre><code>{`<input v-model="username" placeholder="Enter name">
<p>Hi, {{ username }}</p>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">8. v-pre – Skip Compilation</h3>
                <p>Displays raw template instead of compiling it.</p>
                <pre><code>{`<span v-pre>{{ rawData }}</span>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">9. v-once – Render Once</h3>
                <p>Renders the element once and skips future updates.</p>
                <pre><code>{`<h1 v-once>{{ title }}</h1>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">10. v-cloak – Hide until Vue is ready</h3>
                <p>Avoids seeing raw <code>{`{}`}</code> before Vue loads (used with CSS).</p>
                <pre><code>{`<div v-cloak>{{ message }}</div>
<style>
  [v-cloak] { display: none; }
</style>`}</code></pre>
              </div>
            </section>

            <section id="methods" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Methods and Events in Vue.js</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <ul>
                  <li><strong>Methods</strong> are functions defined inside the methods section of a Vue instance/component.</li>
                  <li><strong>Events</strong> are browser actions (like click, keypress) we can listen to using <code>@event</code>.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Defining Methods</h3>
                <p>Methods are written inside the methods object.</p>
                <pre><code>{`methods: {
  greet() {
    return "Hello from method!";
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Calling Methods in Template</h3>
                <p>Use <code>@event</code> or <code>v-on:event</code> to trigger methods.</p>
                <pre><code>{`<button @click="greetUser">Click Me</button>

methods: {
  greetUser() {
    alert("Hello Mugilvannan!");
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Using this Keyword</h3>
                <p><code>this</code> refers to the current Vue instance and gives access to data.</p>
                <pre><code>{`data() {
  return {
    name: 'Vue Master'
  }
},
methods: {
  showName() {
    alert(this.name);
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Event Object</h3>
                <p>You can access the native event object by passing <code>$event</code>.</p>
                <pre><code>{`<input @keyup="handleKey($event)">

methods: {
  handleKey(event) {
    console.log(event.key);
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Event Modifiers</h3>
                <p>Vue provides special modifiers to handle events smartly:</p>
                <table>
                  <thead>
                    <tr>
                      <th>Modifier</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>.stop</code></td>
                      <td>Stops event bubbling</td>
                    </tr>
                    <tr>
                      <td><code>.prevent</code></td>
                      <td>Prevents default browser behavior</td>
                    </tr>
                    <tr>
                      <td><code>.once</code></td>
                      <td>Trigger event only once</td>
                    </tr>
                    <tr>
                      <td><code>.capture</code></td>
                      <td>Use capture mode in event flow</td>
                    </tr>
                    <tr>
                      <td><code>.self</code></td>
                      <td>Only trigger if event.target is the element itself</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`<!-- Example -->
<form @submit.prevent="submitForm">
  <button type="submit">Submit</button>
</form>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Inline Expressions</h3>
                <p>You can use simple JS expressions inline.</p>
                <pre><code>{`<button @click="count++">Add</button>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">7. Passing Parameters</h3>
                <p>Pass arguments to methods easily.</p>
                <pre><code>{`<button @click="greet('Mugil')">Greet</button>
methods: {
  greet(name) {
    alert('Hello, ${name}');
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Time Example:</h3>
                <pre><code>{`<div id="app">
  <p>{{ message }}</p>
  <button @click="reverseMessage">Reverse</button>
</div>

<script>
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: "Hello Vue!"
      }
    },
    methods: {
      reverseMessage() {
        this.message = this.message.split('').reverse().join('');
      }
    }
  }).mount("#app");
</script>`}</code></pre>
              </div>
            </section>

            <section id="computed" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> Computed Properties & Watchers</h2>
              
              <div className="property-card">
                <h3 className="h4">Part 1: Computed Properties</h3>
                <h4 className="h5">Definition:</h4>
                <p>Computed properties are used to define properties based on existing data that automatically update when the dependencies change.</p>
                <h4 className="h5 mt-3">Use Case:</h4>
                <ul>
                  <li>For derived/cached values based on reactive data.</li>
                  <li>Automatically recomputed when reactive dependencies change.</li>
                </ul>
                <pre className="mt-3"><code>{`<div id="app">
  <p>First Name: <input v-model="firstName"></p>
  <p>Last Name: <input v-model="lastName"></p>
  <p>Full Name: {{ fullName }}</p>
</div>

<script>
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        firstName: "Mugil",
        lastName: "Vannan"
      };
    },
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      }
    }
  }).mount("#app");
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Benefits of Computed Properties:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Computed Property</th>
                      <th>Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Caches result?</strong></td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td><strong>Reactive?</strong></td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td><strong>Ideal for?</strong></td>
                      <td>Derived values</td>
                      <td>One-time calculations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Part 2: Watchers</h3>
                <h4 className="h5">Definition:</h4>
                <p><strong>Watchers</strong> are used to watch and respond to data changes in a Vue component.</p>
                <h4 className="h5 mt-3">Use Case:</h4>
                <ul>
                  <li>Trigger a function whenever a specific data property changes.</li>
                  <li>Good for API calls, timers, side-effects, etc.</li>
                </ul>
                <pre className="mt-3"><code>{`<div id="app">
  <input v-model="age" type="number" />
  <p>{{ status }}</p>
</div>

<script>
  createApp({
    data() {
      return {
        age: 20,
        status: ""
      }
    },
    watch: {
      age(newAge) {
        if (newAge >= 18) {
          this.status = "Adult";
        } else {
          this.status = "Minor";
        }
      }
    }
  }).mount('#app');
</script>`}</code></pre>
              </div>
            </section>

            <section id="class-style" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-palette"></i> Class & Style Binding</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p>Vue lets you dynamically bind class and style attributes to elements using the <code>v-bind:</code> directive or its shorthand <code>:</code>.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Part 1: Class Binding</h3>
                <h4 className="h5">1. Object Syntax</h4>
                <pre><code>{`<div :class="{ active: isActive, 'text-danger': hasError }">Hello</div>

data() {
  return {
    isActive: true,
    hasError: false
  }
}`}</code></pre>
                <p>Adds <code>active</code> class if <code>isActive</code> is true<br />
                Adds <code>text-danger</code> class if <code>hasError</code> is true</p>
                
                <h4 className="h5 mt-3">2. Array Syntax</h4>
                <pre><code>{`<div :class="[isActive ? 'active' : '', 'default-class']">Hi</div>`}</code></pre>
                
                <h4 className="h5 mt-3">3. Using Class from Data</h4>
                <pre><code>{`<div :class="customClass"></div>

data() {
  return {
    customClass: 'highlight'
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Part 2: Style Binding</h3>
                <h4 className="h5">1. Object Syntax</h4>
                <pre><code>{`<div :style="{ color: textColor, fontSize: fontSize + 'px' }">Stylish Text</div>

data() {
  return {
    textColor: 'blue',
    fontSize: 18
  }
}`}</code></pre>
                
                <h4 className="h5 mt-3">2. Array Syntax</h4>
                <pre><code>{`<div :style="[styleOne, styleTwo]"></div>

data() {
  return {
    styleOne: { color: 'red' },
    styleTwo: { fontSize: '20px' }
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Time Example</h3>
                <pre><code>{`<div id="app">
  <button :class="{ active: isActive }" @click="isActive = !isActive">Toggle Class</button>
  <p :style="{ color: isActive ? 'green' : 'gray', fontWeight: 'bold' }">Dynamic Style Text</p>
</div>

<script>
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        isActive: false
      }
    }
  }).mount("#app");
</script>

<style>
  .active {
    background-color: yellow;
    padding: 10px;
  }
</style>`}</code></pre>
              </div>
            </section>

            <section id="forms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-input-cursor-text"></i> Form Handling with v-model</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p><code>v-model</code> is a directive used for <strong>two-way data binding</strong> on form inputs like textboxes, checkboxes, radios, selects, etc.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Text Input</h3>
                <pre><code>{`<input v-model="username" placeholder="Enter your name" />

<p>Hello, {{ username }}</p>

data() {
  return {
    username: ""
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Textarea</h3>
                <pre><code>{`<textarea v-model="message" placeholder="Type here..."></textarea>

<p>{{ message }}</p>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Checkbox (Single)</h3>
                <pre><code>{`<input type="checkbox" v-model="isChecked" />

<p>Checked: {{ isChecked }}</p>

data() {
  return {
    isChecked: false
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Checkbox (Multiple)</h3>
                <pre><code>{`<input type="checkbox" value="HTML" v-model="skills" /> HTML
<input type="checkbox" value="CSS" v-model="skills" /> CSS
<input type="checkbox" value="JavaScript" v-model="skills" /> JavaScript

<p>Selected: {{ skills }}</p>

data() {
  return {
    skills: []
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Radio Buttons</h3>
                <pre><code>{`<input type="radio" value="Male" v-model="gender" /> Male
<input type="radio" value="Female" v-model="gender" /> Female
<p>Gender: {{ gender }}</p>

data() {
  return {
    gender: ""
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Select Dropdown</h3>
                <pre><code>{`<select v-model="country">
  <option value="India">India</option>
  <option value="USA">USA</option>
</select>
<p>Selected Country: {{ country }}</p>

data() {
  return {
    country: ""
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">7. Modifiers in v-model</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Modifier</th>
                      <th>Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>.lazy</code></td>
                      <td>Updates on change instead of input</td>
                    </tr>
                    <tr>
                      <td><code>.number</code></td>
                      <td>Converts value to number</td>
                    </tr>
                    <tr>
                      <td><code>.trim</code></td>
                      <td>Trims whitespace</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`<input v-model.lazy="email" />
<input v-model.number="age" />
<input v-model.trim="name" />`}</code></pre>
              </div>
            </section>

            <section id="components" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-puzzle"></i> Vue Components</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p>Vue components are reusable, self-contained blocks of UI and logic. Each component can manage its own template, data, and behavior.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Creating a Component</h3>
                <pre><code>{`// Registering globally
app.component('welcome-message', {
  template: '<h2>Welcome, {{ name }}</h2>',
  data() {
    return {
      name: 'Mugilvannan'
    }
  }
});

// Usage
<welcome-message></welcome-message>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Local Registration</h3>
                <pre><code>{`const Welcome = {
  template: '<h2>Hello, {{ user }}</h2>',
  data() {
    return {
      user: "Vue Developer"
    }
  }
}

createApp({
  components: {
    Welcome
  }
}).mount("#app");`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Single File Components (SFC) – Vue CLI</h3>
                <pre><code>{`<!-- Welcome.vue -->
<template>
  <h2>Welcome, {{ name }}</h2>
</template>

<script>
export default {
  data() {
    return {
      name: "Vue Master"
    };
  }
}
</script>

<!-- Use in parent -->
<script>
import Welcome from './components/Welcome.vue'

export default {
  components: { Welcome }
}
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Best Practices:</h3>
                <ul>
                  <li>Always use <strong>kebab-case</strong> for custom component tags.</li>
                  <li>Keep components <strong>small and reusable</strong>.</li>
                  <li>Split into <strong>Base, Layout, Page</strong>, and <strong>Feature</strong> components.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Time Example</h3>
                <pre><code>{`app.component('greet-box', {
  props: ['username'],
  template: '<h3>Hello, {{ username }}!</h3>'
});

createApp({
  data() {
    return {
      user: 'Mugil'
    }
  }
}).mount('#app');

<!-- Usage -->
<greet-box :username="user"></greet-box>`}</code></pre>
              </div>
            </section>

            <section id="props" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-down-circle"></i> Props (Passing Data to Child Components)</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <ul>
                  <li><strong>Props</strong> (short for "properties") are custom attributes passed from a parent component to a child component.</li>
                  <li>They allow the parent to send data into the child.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Passing Props</h3>
                <pre><code>{`// Child.vue
export default {
  props: ['username'],
  template: '<h2>Welcome, {{ username }}!</h2>'
}

// Parent Component
<Child username="Mugilvannan" />`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Dynamic Props with Binding</h3>
                <pre><code>{`<Child :username="userName" />

data() {
  return {
    userName: "Mugil"
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Prop Validation</h3>
                <p>You can define the type, required, and default value.</p>
                <pre><code>{`props: {
  username: {
    type: String,
    required: true,
    default: "Guest"
  },
  age: {
    type: Number
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Passing Numbers, Arrays, Objects</h3>
                <pre><code>{`<Child :score="100" :skills="['HTML', 'Vue']" :user="{ name: 'Mugil', id: 1 }" />

props: ['score', 'skills', 'user']`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Using Props in Template</h3>
                <pre><code>{`<template>
  <div>
    <p>Name: {{ user.name }}</p>
    <p>Skills: {{ skills.join(', ') }}</p>
  </div>
</template>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real Example:</h3>
                <pre><code>{`// Child.vue
export default {
  props: ['msg'],
  template: '<p> {{ msg }} </p>'
}

// Parent.vue
<Child :msg="Hello from Parent!" />`}</code></pre>
              </div>
            </section>

            <section id="events" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-up-circle"></i> Custom Events & Emit (Child to Parent Communication)</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p>In Vue, <strong>custom events</strong> are used by <strong>child components</strong> to send data or trigger actions in their <strong>parent components</strong> using the <code>$emit()</code> method.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Basic Event Emitting</h3>
                <pre><code>{`// Child Component
// Child.vue
<template>
  <button @click="sendMessage">Click Me</button>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      this.$emit('greet', 'Hello Appa (Parent)!!')
    }
  }
}
</script>

// Parent Component
<Child @greet="handleGreeting" />

<script>
export default {
  methods: {
    handleGreeting(message) {
      alert(message); // Output: Hello Appa (Parent)!
    }
  }
}
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Emitting Data</h3>
                <pre><code>{`this.$emit('send-data', {
  id: 1,
  name: 'Mugil'
});

// In parent:
<Child @send-data="getData" />

methods: {
  getData(data) {
    console.log(data.name); // Mugil
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Using in Buttons & Forms</h3>
                <pre><code>{`<!-- Child.vue -->
<template>
  <input v-model="text" />
  <button @click="$emit('submit-input', text)">Submit</button>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    }
  }
}
</script>

<!-- In parent -->
<Child @submit-input="saveInput" />

methods: {
  saveInput(data) {
    console.log("Child sent:", data);
  }
}`}</code></pre>
              </div>
            </section>

            <section id="lifecycle" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> Vue Lifecycle Hooks</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p>Vue components go through a <strong>lifecycle</strong> from creation to destruction. Vue provides <strong>hooks</strong> (functions) that allow you to run custom code at specific stages.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Lifecycle Phases & Hooks</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Phase</th>
                      <th>Hook</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Creation</td>
                      <td><code>beforeCreate()</code></td>
                      <td>Runs before data/reactivity is set up</td>
                    </tr>
                    <tr>
                      <td>Creation</td>
                      <td><code>created()</code></td>
                      <td>Data is available, DOM is not yet mounted</td>
                    </tr>
                    <tr>
                      <td>Mounting</td>
                      <td><code>beforeMount()</code></td>
                      <td>Runs before component is added to DOM</td>
                    </tr>
                    <tr>
                      <td>Mounting</td>
                      <td><code>mounted()</code></td>
                      <td>Runs after component is added to DOM</td>
                    </tr>
                    <tr>
                      <td>Updating</td>
                      <td><code>beforeUpdate()</code></td>
                      <td>Before DOM updates after reactive data changes</td>
                    </tr>
                    <tr>
                      <td>Updating</td>
                      <td><code>updated()</code></td>
                      <td>After DOM updates after data change</td>
                    </tr>
                    <tr>
                      <td>Unmounting</td>
                      <td><code>beforeUnmount()</code></td>
                      <td>Before component is removed</td>
                    </tr>
                    <tr>
                      <td>Unmounting</td>
                      <td><code>unmounted()</code></td>
                      <td>After component is removed from DOM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Lifecycle Flow Chart (Simple Order)</h3>
                <p><code>beforeCreate → created → beforeMount → mounted → (on data change) beforeUpdate → updated → beforeUnmount → unmounted</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example:</h3>
                <pre><code>{`export default {
  data() {
    return {
      message: "Lifecycle Demo"
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  }
}`}</code></pre>
                <p className="mt-2">Try changing message with a button to see update hooks trigger.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common Use Cases</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Hook</th>
                      <th>Typical Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>created</code></td>
                      <td>API call, set intervals, initial logic</td>
                    </tr>
                    <tr>
                      <td><code>mounted</code></td>
                      <td>DOM access, chart rendering</td>
                    </tr>
                    <tr>
                      <td><code>beforeUpdate</code></td>
                      <td>Data validation or optimization</td>
                    </tr>
                    <tr>
                      <td><code>unmounted</code></td>
                      <td>Clear timers, clean up listeners</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Vue 3 Composition API Lifecycle</h3>
                <p>If you're using <strong>Composition API</strong> (<code>setup()</code>), use <code>onMounted</code>, <code>onUpdated</code>, etc.</p>
                <pre><code>{`import { onMounted, onUnmounted } from 'vue';

setup() {
  onMounted(() => {
    console.log('Mounted using Composition API');
  });
  
  onUnmounted(() => {
    console.log('Cleaned up!');
  });
}`}</code></pre>
              </div>
            </section>

            <section id="router" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-signpost-split"></i> Vue Router (Navigation & Routing)</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p>Vue Router is the official routing library for Vue. It lets you create <strong>SPAs (Single Page Applications)</strong> with multiple pages/views using routes.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Installation</h3>
                <pre><code>{`npm install vue-router`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Setting Up Routes</h3>
                <pre><code>{`// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Using Router in App</h3>
                <pre><code>{`// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Router View & Link</h3>
                <pre><code>{`<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>

<router-view></router-view>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Dynamic Route Params</h3>
                <pre><code>{`{ path: '/user/:id', component: User }

// In User.vue:
setup(props) {
  const route = useRoute();
  console.log(route.params.id);
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Navigation Guards</h3>
                <pre><code>{`router.beforeEach((to, from, next) => {
  if (to.path === '/admin' && !authUser) {
    next('/login');
  } else {
    next();
  }
});`}</code></pre>
                <p className="mt-2">That's the core of <strong>Vue Router</strong>! Now moving to API Handling.</p>
              </div>
            </section>

            <section id="api" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-plug"></i> Handling APIs with Axios</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p>Axios is a promise-based HTTP client used in Vue to fetch or send data to/from a server (e.g., REST APIs).</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Installing Axios</h3>
                <pre><code>{`npm install axios`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Basic GET Request</h3>
                <pre><code>{`<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.posts = response.data;
      });
  }
}
</script>

<ul>
  <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
</ul>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. POST Request</h3>
                <pre><code>{`axios.post('https://api.example.com/data', {
  name: 'Mugil',
  age: 23
}).then(response => {
  console.log('Posted successfully');
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Global Axios Config (Optional)</h3>
                <pre><code>{`axios.defaults.baseURL = 'https://api.example.com/';
axios.defaults.headers.common['Authorization'] = 'Bearer your-token';`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Using Async/Await</h3>
                <pre><code>{`async mounted() {
  const response = await axios.get('https://api.example.com/users');
  this.users = response.data;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Error Handling</h3>
                <pre><code>{`axios.get('/wrong-url')
  .then(res => console.log(res))
  .catch(err => {
    console.error("API Error:", err);
  });`}</code></pre>
              </div>
            </section>

            <section id="cli" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-terminal"></i> Vue CLI & Single File Components</h2>
              
              <div className="property-card">
                <h3 className="h4">What is Vue CLI?</h3>
                <p>Vue CLI (Command Line Interface) is a standard tool to create and manage Vue projects quickly. It helps set up <strong>Single File Components</strong>, routing, state management, testing, and more.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Install Vue CLI</h3>
                <pre><code>{`npm install -g @vue/cli

# Check version:
vue --version`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Create a New Project</h3>
                <pre><code>{`vue create my-vue-app`}</code></pre>
                <p className="mt-2">You will get options:</p>
                <ul>
                  <li>Default preset</li>
                  <li>Manually select features (Router, Vuex, Linter, etc.)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Project Folder Structure</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Folder/File</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>/src</code></td>
                      <td>All source files</td>
                    </tr>
                    <tr>
                      <td><code>App.vue</code></td>
                      <td>Root component</td>
                    </tr>
                    <tr>
                      <td><code>main.js</code></td>
                      <td>Entry point of app</td>
                    </tr>
                    <tr>
                      <td><code>/components</code></td>
                      <td>Reusable components</td>
                    </tr>
                    <tr>
                      <td><code>/views</code></td>
                      <td>Page-level components (if using Vue Router)</td>
                    </tr>
                    <tr>
                      <td><code>/router</code></td>
                      <td>Vue Router config</td>
                    </tr>
                    <tr>
                      <td><code>/store</code></td>
                      <td>Vuex store (if enabled)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Run the Project</h3>
                <pre><code>{`cd my-vue-app
npm run serve`}</code></pre>
                <p className="mt-2">Runs at <code>http://localhost:8080</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Single File Component (SFC)</h3>
                <p>In Vue CLI projects, each component has .vue extension and contains:</p>
                <pre><code>{`<!-- HelloWorld.vue -->
<template>
  <h1>Hello, {{ name }}</h1>
</template>

<script>
export default {
  data() {
    return {
      name: "Mugil"
    };
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>`}</code></pre>
                <h4 className="h5 mt-3">Advantages of SFC:</h4>
                <ul>
                  <li>Clean separation of template, logic, and styles</li>
                  <li>Scoped styling support</li>
                  <li>Auto syntax highlighting in IDEs</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Importing & Using a Component</h3>
                <pre><code>{`// App.vue
<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">7. Customizing Vue Config (Optional)</h3>
                <p>In <code>vue.config.js</code>, you can:</p>
                <pre><code>{`module.exports = {
  publicPath: '/',
  devServer: {
    proxy: 'http://localhost:5000'
  }
}`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Vue.js Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default VueJsNotes;