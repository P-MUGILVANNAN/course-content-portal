import React from 'react';

function TailwindCssNotes() {
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
          .example-box {
            border: 1px solid #dee2e6;
            padding: 15px;
            margin: 10px 0;
            border-radius: 4px;
            background-color: white;
          }
        `}
      </style>

      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-wind"></i> Tailwind CSS Notes</h1>
          <p className="lead">Utility-First CSS Framework for Rapid UI Development</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#installation"><i className="bi bi-download"></i> Installation</a>
              <a className="nav-link" href="#configuration"><i className="bi bi-gear"></i> Configuration</a>
              <a className="nav-link" href="#utility-classes"><i className="bi bi-puzzle"></i> Utility Classes</a>
              <a className="nav-link" href="#typography"><i className="bi bi-type"></i> Typography</a>
              <a className="nav-link" href="#colors"><i className="bi bi-palette"></i> Colors</a>
              <a className="nav-link" href="#spacing"><i className="bi bi-arrows-angle-expand"></i> Spacing</a>
              <a className="nav-link" href="#flexbox"><i className="bi bi-layout-sidebar-inset"></i> Flexbox</a>
              <a className="nav-link" href="#grid"><i className="bi bi-grid-3x3"></i> Grid</a>
              <a className="nav-link" href="#responsive"><i className="bi bi-phone"></i> Responsive Design</a>
              <a className="nav-link" href="#sizing"><i className="bi bi-arrows-fullscreen"></i> Sizing</a>
              <a className="nav-link" href="#borders"><i className="bi bi-border"></i> Borders</a>
              <a className="nav-link" href="#shadows"><i className="bi bi-droplet"></i> Shadows & Opacity</a>
              <a className="nav-link" href="#positioning"><i className="bi bi-arrows-move"></i> Positioning</a>
              <a className="nav-link" href="#pseudo"><i className="bi bi-magic"></i> Pseudo-Classes</a>
              <a className="nav-link" href="#transitions"><i className="bi bi-hourglass-split"></i> Transitions</a>
              <a className="nav-link" href="#darkmode"><i className="bi bi-moon-stars"></i> Dark Mode</a>
              <a className="nav-link" href="#customization"><i className="bi bi-tools"></i> Customization</a>
              <a className="nav-link" href="#forms"><i className="bi bi-input-cursor-text"></i> Forms</a>
              <a className="nav-link" href="#projects"><i className="bi bi-lightbulb"></i> Project Ideas</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Tailwind CSS</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS is a <strong>utility-first CSS framework</strong> used to design custom user interfaces quickly. Instead of writing custom CSS, you use pre-defined classes directly in your HTML.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Key Features</h3>
                <ul>
                  <li>Utility-first (e.g., p-4, text-center, bg-blue-500)</li>
                  <li>Highly customizable via config file</li>
                  <li>Mobile-first and responsive</li>
                  <li>No need to switch between HTML and CSS files</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Tailwind CSS?</h3>
                <ul>
                  <li>Speeds up development</li>
                  <li>Great control over design</li>
                  <li>Reduces writing custom CSS</li>
                  <li>Easy to maintain and scale</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example</h3>
                <div className="example-box">
                  <pre><code>{`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>`}</code></pre>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Click Me
                  </button>
                  <p className="mt-2">This creates a blue button with hover effect, padding, and rounded corners using just utility classes.</p>
                </div>
              </div>
            </section>

            <section id="installation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-download"></i> Installation & Setup</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Using CDN (Quick Test or Small Projects)</h3>
                <pre><code>{`<link href="https://cdn.tailwindcss.com" rel="stylesheet">`}</code></pre>
                <p><strong>Pros:</strong> No build tools needed</p>
                <p><strong>Cons:</strong> Limited customization, not suitable for production</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Using Tailwind via NPM (Recommended for Projects)</h3>
                <p>Step-by-step:</p>
                <pre><code>{`1. Initialize project:
npm init -y

2. Install Tailwind via npm:
npm install -D tailwindcss

3. Create config file:
npx tailwindcss init

4. Create input CSS file (e.g., input.css):
@tailwind base;
@tailwind components;
@tailwind utilities;

5. Build the CSS:
npx tailwindcss -i ./input.css -o ./output.css --watch

6. Link output.css in your HTML:
<link href="output.css" rel="stylesheet">`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Using Tailwind with Frameworks (React, Vue, etc.)</h3>
                <p>Tailwind can be easily added to frameworks like:</p>
                <ul>
                  <li>React with Vite or CRA</li>
                  <li>Vue with Vite</li>
                  <li>Laravel (PHP)</li>
                  <li>Next.js, Nuxt.js, etc.</li>
                </ul>
                <p className="mt-2"><strong>Note:</strong> Using Tailwind with a build setup (npm) gives full access to configuration, purging unused CSS, plugins, and dark mode.</p>
              </div>
            </section>

            <section id="configuration" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Tailwind Configuration File</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>The <code>tailwind.config.js</code> file is where you customize the <strong>default Tailwind behavior</strong> – such as colors, fonts, breakpoints, and enabling plugins or dark mode.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">How to Create</h3>
                <pre><code>{`npx tailwindcss init`}</code></pre>
                <p>This creates:</p>
                <pre><code>{`// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Key Sections</h3>
                
                <h5 className="h5 mt-3">1. Content</h5>
                <p>Defines the file paths where Tailwind should scan for class names.</p>
                <pre><code>{`content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]`}</code></pre>
                
                <h5 className="h5 mt-3">2. Theme</h5>
                <p>Customize or extend default values (colors, spacing, fonts, etc.)</p>
                <pre><code>{`theme: {
  extend: {
    colors: {
      brandBlue: '#1E40AF',
    },
    spacing: {
      '72': '18rem',
    }
  }
}`}</code></pre>
                
                <h5 className="h5 mt-3">3. Plugins</h5>
                <p>Add official or third-party plugins like forms, typography, etc.</p>
                <pre><code>{`plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography')
]`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Config</h3>
                <pre><code>{`module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1DB954',
      },
    },
  },
  plugins: [],
}`}</code></pre>
                <p>This adds a custom primary color and sets up scanning of .html and .js files inside src.</p>
              </div>
            </section>

            <section id="utility-classes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-puzzle"></i> Utility Classes Overview</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS uses utility classes — small, single-purpose classes — to style elements directly in HTML, removing the need for separate CSS files.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Utility Class Format</h3>
                <pre><code>{`<element class="property-value another-property-value">`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example</h3>
                <pre><code>{`<h1 class="text-3xl font-bold text-center text-blue-600">
  Welcome!
</h1>`}</code></pre>
                <p>This uses:</p>
                <ul>
                  <li><code>text-3xl</code>: font size</li>
                  <li><code>font-bold</code>: font weight</li>
                  <li><code>text-center</code>: text alignment</li>
                  <li><code>text-blue-600</code>: text color</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Benefits of Utility Classes</h3>
                <ul>
                  <li>No need to write custom CSS</li>
                  <li>Reusable and consistent</li>
                  <li>Faster UI development</li>
                  <li>Easy to maintain</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common Categories</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Property Type</th>
                      <th>Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Text</td>
                      <td><code>text-xl, text-red-500</code></td>
                    </tr>
                    <tr>
                      <td>Font</td>
                      <td><code>font-bold, font-light</code></td>
                    </tr>
                    <tr>
                      <td>Margin & Padding</td>
                      <td><code>m-4, px-2, my-1</code></td>
                    </tr>
                    <tr>
                      <td>Flexbox</td>
                      <td><code>flex, items-center</code></td>
                    </tr>
                    <tr>
                      <td>Background</td>
                      <td><code>bg-gray-100, bg-green-500</code></td>
                    </tr>
                    <tr>
                      <td>Width & Height</td>
                      <td><code>w-1/2, h-screen</code></td>
                    </tr>
                    <tr>
                      <td>Border</td>
                      <td><code>border, rounded-md</code></td>
                    </tr>
                    <tr>
                      <td>Positioning</td>
                      <td><code>absolute, z-10, top-0</code></td>
                    </tr>
                    <tr>
                      <td>Responsive</td>
                      <td><code>md:text-lg, sm:w-full</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Comparison</h3>
                <h5 className="h5">Without Tailwind (CSS):</h5>
                <pre><code>{`.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: blue;
}`}</code></pre>
                <h5 className="h5 mt-3">With Tailwind (HTML):</h5>
                <pre><code>{`<h1 class="text-2xl font-bold text-center text-blue-600">
  Title
</h1>`}</code></pre>
              </div>
            </section>

            <section id="typography" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-type"></i> Typography Utilities</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS provides a wide range of utility classes to control text appearance, including size, color, alignment, line-height, letter-spacing, weight, style, and more.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common Typography Utilities</h3>
                
                <h5 className="h5 mt-3">1. Text Size (text-$size)</h5>
                <p>Sets font size.</p>
                <pre><code>{`<p class="text-xs">Extra Small</p>
<p class="text-lg">Large</p>
<p class="text-3xl">3x Extra Large</p>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>text-sm</code></td>
                      <td>Small</td>
                    </tr>
                    <tr>
                      <td><code>text-base</code></td>
                      <td>Default (16px)</td>
                    </tr>
                    <tr>
                      <td><code>text-xl</code></td>
                      <td>Extra Large</td>
                    </tr>
                    <tr>
                      <td><code>text-6xl</code></td>
                      <td>Very Large</td>
                    </tr>
                  </tbody>
                </table>
                
                <h5 className="h5 mt-3">{`2. Font Weight (font-{weight})`}</h5>
                <pre><code>{`<p class="font-thin">Thin</p>
<p class="font-bold">Bold</p>
<p class="font-black">Black</p>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>font-light</code></td>
                      <td>300</td>
                    </tr>
                    <tr>
                      <td><code>font-normal</code></td>
                      <td>400</td>
                    </tr>
                    <tr>
                      <td><code>font-bold</code></td>
                      <td>700</td>
                    </tr>
                    <tr>
                      <td><code>font-black</code></td>
                      <td>900</td>
                    </tr>
                  </tbody>
                </table>
                
                <h5 className="h5 mt-3">{`3. Text Alignment (text-{alignment})`}</h5>
                <pre><code>{`<p class="text-left">Left</p>
<p class="text-center">Center</p>
<p class="text-right">Right</p>`}</code></pre>
                
                <h5 className="h5 mt-3">{`4. Text Color (text-{color})`}</h5>
                <pre><code>{`<p class="text-red-500">Red Text</p>
<p class="text-green-600">Green Text</p>`}</code></pre>
                <p>Tailwind supports hundreds of color shades like <code>text-blue-100</code> to <code>text-blue-900</code>.</p>
                
                <h5 className="h5 mt-3">{`5. Line Height (leading-{value})`}</h5>
                <pre><code>{`<p class="leading-tight">Tight line height</p>
<p class="leading-loose">Loose line height</p>`}</code></pre>
                
                <h5 className="h5 mt-3">{`6. Letter Spacing (tracking-{value})`}</h5>
                <pre><code>{`<p class="tracking-wide">Wide letter spacing</p>
<p class="tracking-tight">Tight spacing</p>`}</code></pre>
                
                <h5 className="h5 mt-3">7. Font Style</h5>
                <pre><code>{`<p class="italic">Italic text</p>
<p class="not-italic">Normal text</p>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Full Example</h3>
                <pre><code>{`<h2 class="text-2xl font-bold text-center text-indigo-600 tracking-wide leading-relaxed italic">
  Tailwind Typography Example
</h2>`}</code></pre>
                <div className="example-box">
                  <h2 className="text-2xl font-bold text-center text-indigo-600 tracking-wide leading-relaxed italic">
                    Tailwind Typography Example
                  </h2>
                </div>
              </div>
            </section>

            <section id="colors" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-palette"></i> Background & Colors</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS offers a wide set of color utility classes for setting background color, text color, borders, gradients, and hover/focus effects using consistent naming conventions.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">{`1. Background Color (bg-{color})`}</h3>
                <pre><code>{`<div class="bg-blue-500 p-4 text-white">Blue Background</div>`}</code></pre>
                <div className="example-box">
                  <div className="bg-blue-500 p-4 text-white">Blue Background</div>
                </div>
                <table className="table table-bordered mt-3">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>bg-red-500</code></td>
                      <td>Medium red background</td>
                    </tr>
                    <tr>
                      <td><code>bg-green-100</code></td>
                      <td>Light green background</td>
                    </tr>
                    <tr>
                      <td><code>bg-yellow-900</code></td>
                      <td>Very dark yellow</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">{`2. Text Color (text-{color})`}</h3>
                <pre><code>{`<p class="text-green-600">Success message</p>`}</code></pre>
                <div className="example-box">
                  <p className="text-green-600">Success message</p>
                </div>
                <p>Colors range from 100 (light) to 900 (dark)</p>
                <p>Example: <code>text-blue-100</code> to <code>text-blue-900</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Hover & Focus States</h3>
                <pre><code>{`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Hover Me
</button>`}</code></pre>
                <div className="example-box">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Hover Me
                  </button>
                </div>
                <table className="table table-bordered mt-3">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>hover:bg-red-600</code></td>
                      <td>Changes background on hover</td>
                    </tr>
                    <tr>
                      <td><code>focus:bg-yellow-400</code></td>
                      <td>On focus state</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">{`4. Opacity (bg-opacity-{amount})`}</h3>
                <pre><code>{`<div class="bg-black bg-opacity-50 text-white p-4">
  Semi-transparent black
</div>`}</code></pre>
                <div className="example-box">
                  <div className="bg-black bg-opacity-50 text-white p-4">
                    Semi-transparent black
                  </div>
                </div>
                <p>Values: <code>bg-opacity-0</code>, <code>bg-opacity-25</code>, <code>bg-opacity-50</code>, <code>bg-opacity-75</code>, <code>bg-opacity-100</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Gradient Backgrounds</h3>
                <pre><code>{`<div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4">
  Gradient Background
</div>`}</code></pre>
                <div className="example-box">
                  <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4">
                    Gradient Background
                  </div>
                </div>
                <table className="table table-bordered mt-3">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>bg-gradient-to-r</code></td>
                      <td>Direction (right)</td>
                    </tr>
                    <tr>
                      <td><code>from-, via-, to-</code></td>
                      <td>Gradient color stops</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Use Case</h3>
                <pre><code>{`<section class="bg-green-100 text-green-800 p-6 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold">Success!</h2>
  <p>Your account was created successfully.</p>
</section>`}</code></pre>
                <div className="example-box">
                  <section className="bg-green-100 text-green-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold">Success!</h2>
                    <p>Your account was created successfully.</p>
                  </section>
                </div>
              </div>
            </section>

            <section id="spacing" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrows-angle-expand"></i> Spacing Utilities</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS provides utility classes for managing <strong>spacing between and within elements</strong>, using margin (m) and padding (p) classes.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Margin (m, mt, mb, ml, mr, mx, my)</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>m-4</code></td>
                      <td>Margin on all sides</td>
                    </tr>
                    <tr>
                      <td><code>mt-2</code></td>
                      <td>Margin-top</td>
                    </tr>
                    <tr>
                      <td><code>mb-6</code></td>
                      <td>Margin-bottom</td>
                    </tr>
                    <tr>
                      <td><code>ml-1</code></td>
                      <td>Margin-left</td>
                    </tr>
                    <tr>
                      <td><code>mr-5</code></td>
                      <td>Margin-right</td>
                    </tr>
                    <tr>
                      <td><code>mx-auto</code></td>
                      <td>Horizontal margin (left & right)</td>
                    </tr>
                    <tr>
                      <td><code>my-3</code></td>
                      <td>Vertical margin (top & bottom)</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`<div class="mt-4 mb-2">Margin top and bottom</div>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Padding (p, pt, pb, pl, pr, px, py)</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>p-4</code></td>
                      <td>Padding on all sides</td>
                    </tr>
                    <tr>
                      <td><code>pt-2</code></td>
                      <td>Padding-top</td>
                    </tr>
                    <tr>
                      <td><code>pb-6</code></td>
                      <td>Padding-bottom</td>
                    </tr>
                    <tr>
                      <td><code>pl-3</code></td>
                      <td>Padding-left</td>
                    </tr>
                    <tr>
                      <td><code>pr-1</code></td>
                      <td>Padding-right</td>
                    </tr>
                    <tr>
                      <td><code>px-5</code></td>
                      <td>Horizontal padding</td>
                    </tr>
                    <tr>
                      <td><code>py-2</code></td>
                      <td>Vertical padding</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`<div class="p-4 py-6 px-8">Box with padding</div>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Spacing Scale</h3>
                <p>Tailwind uses a consistent spacing scale:</p>
                <p><code>0, 0.5, 1, 1.5, 2, ..., 96, px, auto</code></p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>p-1</code></td>
                      <td>0.25rem</td>
                    </tr>
                    <tr>
                      <td><code>p-4</code></td>
                      <td>1rem</td>
                    </tr>
                    <tr>
                      <td><code>p-10</code></td>
                      <td>2.5rem</td>
                    </tr>
                    <tr>
                      <td><code>m-auto</code></td>
                      <td>auto margin</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example</h3>
                <pre><code>{`<div class="mt-10 p-4 bg-gray-100 text-center">
  <p class="mb-4">Spacing example</p>
  <button class="px-6 py-2 bg-blue-600 text-white rounded">Click</button>
</div>`}</code></pre>
                <div className="example-box">
                  <div className="mt-3 p-4 bg-gray-100 text-center">
                    <p className="mb-4">Spacing example</p>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded">Click</button>
                  </div>
                </div>
              </div>
            </section>

            <section id="flexbox" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layout-sidebar-inset"></i> Flexbox Utilities</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS provides a complete set of utility classes to implement <strong>flexbox layouts</strong> easily for building responsive and flexible UI structures.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Display Flex</h3>
                <pre><code>{`<div class="flex">Flex container</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>flex</code></td>
                      <td>Applies display: flex</td>
                    </tr>
                    <tr>
                      <td><code>inline-flex</code></td>
                      <td>display: inline-flex</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Flex Direction (flex-row, flex-col)</h3>
                <pre><code>{`<div class="flex flex-col">Column layout</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Direction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>flex-row</code></td>
                      <td>Horizontal (default)</td>
                    </tr>
                    <tr>
                      <td><code>flex-col</code></td>
                      <td>Vertical</td>
                    </tr>
                    <tr>
                      <td><code>flex-row-reverse</code></td>
                      <td>Reversed row</td>
                    </tr>
                    <tr>
                      <td><code>flex-col-reverse</code></td>
                      <td>Reversed column</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Justify Content (justify-*)</h3>
                <pre><code>{`<div class="flex justify-between">...</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Aligns along main axis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>justify-start</code></td>
                      <td>Left/top</td>
                    </tr>
                    <tr>
                      <td><code>justify-center</code></td>
                      <td>Center</td>
                    </tr>
                    <tr>
                      <td><code>justify-end</code></td>
                      <td>Right/bottom</td>
                    </tr>
                    <tr>
                      <td><code>justify-between</code></td>
                      <td>Space between items</td>
                    </tr>
                    <tr>
                      <td><code>justify-around</code></td>
                      <td>Equal space around</td>
                    </tr>
                    <tr>
                      <td><code>justify-evenly</code></td>
                      <td>Equal space between and around</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Align Items (items-*)</h3>
                <pre><code>{`<div class="flex items-center">...</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Aligns along cross axis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>items-start</code></td>
                      <td>Align to top</td>
                    </tr>
                    <tr>
                      <td><code>items-center</code></td>
                      <td>Center vertically</td>
                    </tr>
                    <tr>
                      <td><code>items-end</code></td>
                      <td>Bottom alignment</td>
                    </tr>
                    <tr>
                      <td><code>items-stretch</code></td>
                      <td>Stretch</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Gap Between Items</h3>
                <pre><code>{`<div class="flex gap-4">...</div>`}</code></pre>
                <p>Use <code>{`gap-{size}`}</code> to set space between flex items.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Flex Wrap</h3>
                <pre><code>{`<div class="flex flex-wrap">...</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>flex-wrap</code></td>
                      <td>Allows wrapping</td>
                    </tr>
                    <tr>
                      <td><code>flex-nowrap</code></td>
                      <td>Prevents wrapping</td>
                    </tr>
                    <tr>
                      <td><code>flex-wrap-reverse</code></td>
                      <td>Wrap in reverse</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example</h3>
                <pre><code>{`<div class="flex flex-wrap justify-between items-center gap-4 bg-gray-100 p-4">
  <div class="bg-blue-200 p-4">Item 1</div>
  <div class="bg-green-200 p-4">Item 2</div>
  <div class="bg-pink-200 p-4">Item 3</div>
</div>`}</code></pre>
                <div className="example-box">
                  <div className="flex flex-wrap justify-between items-center gap-4 bg-gray-100 p-4">
                    <div className="bg-blue-200 p-4">Item 1</div>
                    <div className="bg-green-200 p-4">Item 2</div>
                    <div className="bg-pink-200 p-4">Item 3</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="grid" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-grid-3x3"></i> Grid Utilities</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS offers powerful CSS <strong>Grid utilities</strong> to build complex, responsive layouts with minimal effort.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Enable Grid Display</h3>
                <pre><code>{`<div class="grid"></div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>grid</code></td>
                      <td>Applies display: grid</td>
                    </tr>
                    <tr>
                      <td><code>inline-grid</code></td>
                      <td>Applies display: inline-grid</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Define Number of Columns</h3>
                <pre><code>{`<div class="grid grid-cols-3">3 equal columns</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>grid-cols-1</code></td>
                      <td>1 column</td>
                    </tr>
                    <tr>
                      <td><code>grid-cols-2</code></td>
                      <td>2 columns</td>
                    </tr>
                    <tr>
                      <td><code>grid-cols-3</code></td>
                      <td>3 columns</td>
                    </tr>
                    <tr>
                      <td><code>...</code></td>
                      <td>up to grid-cols-12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Define Number of Rows</h3>
                <pre><code>{`<div class="grid grid-rows-2">2 rows</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>grid-rows-1</code></td>
                      <td>1 row</td>
                    </tr>
                    <tr>
                      <td><code>grid-rows-6</code></td>
                      <td>up to 6 rows</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Gap Between Grid Items</h3>
                <pre><code>{`<div class="grid grid-cols-2 gap-4">...</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>gap-4</code></td>
                      <td>Sets both row and column gaps</td>
                    </tr>
                    <tr>
                      <td><code>gap-x-4</code></td>
                      <td>Horizontal gap only</td>
                    </tr>
                    <tr>
                      <td><code>gap-y-4</code></td>
                      <td>Vertical gap only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Grid Item Placement</h3>
                <pre><code>{`<div class="col-span-2 row-span-1">Span columns/rows</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>col-span-2</code></td>
                      <td>Item spans 2 columns</td>
                    </tr>
                    <tr>
                      <td><code>row-span-3</code></td>
                      <td>Item spans 3 rows</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Justify & Align Items</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>justify-items-start</code></td>
                      <td>Align items horizontally</td>
                    </tr>
                    <tr>
                      <td><code>justify-items-center</code></td>
                      <td>Center horizontally</td>
                    </tr>
                    <tr>
                      <td><code>items-start</code></td>
                      <td>Align items vertically (top)</td>
                    </tr>
                    <tr>
                      <td><code>items-end</code></td>
                      <td>Align items vertically (bottom)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example</h3>
                <pre><code>{`<div class="grid grid-cols-3 gap-4 p-4">
  <div class="bg-red-200 p-4">Item 1</div>
  <div class="bg-blue-200 p-4 col-span-2">Item 2 (2 columns)</div>
  <div class="bg-green-200 p-4 row-span-2">Item 3 (2 rows)</div>
  <div class="bg-yellow-200 p-4">Item 4</div>
</div>`}</code></pre>
                <div className="example-box">
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <div className="bg-red-200 p-4">Item 1</div>
                    <div className="bg-blue-200 p-4 col-span-2">Item 2 (2 columns)</div>
                    <div className="bg-green-200 p-4 row-span-2">Item 3 (2 rows)</div>
                    <div className="bg-yellow-200 p-4">Item 4</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="responsive" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-phone"></i> Responsive Design (Breakpoints)</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS makes responsive design super easy using breakpoint prefixes to apply styles at specific screen widths.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Default Breakpoints in Tailwind</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Breakpoint Prefix</th>
                      <th>Min Width</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>sm:</code></td>
                      <td>Small (640px)</td>
                    </tr>
                    <tr>
                      <td><code>md:</code></td>
                      <td>Medium (768px)</td>
                    </tr>
                    <tr>
                      <td><code>lg:</code></td>
                      <td>Large (1024px)</td>
                    </tr>
                    <tr>
                      <td><code>xl:</code></td>
                      <td>X-Large (1280px)</td>
                    </tr>
                    <tr>
                      <td><code>2xl:</code></td>
                      <td>2X-Large (1536px)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. How It Works</h3>
                <p>You prefix a class with the breakpoint you want to start applying it from.</p>
                <pre><code>{`<p class="text-sm md:text-lg lg:text-xl">
  This text size changes based on screen width.
</p>`}</code></pre>
                <p>Explanation:</p>
                <ul>
                  <li>On small screens: <code>text-sm</code></li>
                  <li>On medium screens (&gt;=768px): <code>text-lg</code></li>
                  <li>On large screens (&gt;=1024px): <code>text-xl</code></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Responsive Utility Examples</h3>
                <pre><code>{`<div class="p-2 sm:p-4 md:p-6 lg:p-8">
  Responsive Padding  
</div>

<button class="bg-blue-400 sm:bg-green-400 md:bg-yellow-400">
  Responsive Background  
</button>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Use Cases</h3>
                <ul>
                  <li>Adjust text size, padding, margins for different devices.</li>
                  <li>Change layout direction or column count.</li>
                  <li>Show/hide elements using hidden, block, flex classes conditionally.</li>
                </ul>
                <pre><code>{`<div class="hidden md:block">Only visible on medium & larger screens</div>`}</code></pre>
                <p>Tailwind's responsive system is mobile-first and highly scalable!</p>
              </div>
            </section>

            <section id="sizing" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrows-fullscreen"></i> Sizing Utilities</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS provides utility classes to control the size of elements like width, height, max-width, and min-height using a simple and consistent naming system.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">{`1. Width (w-{value})`}</h3>
                <pre><code>{`<div class="w-1/2">50% width</div>
<div class="w-96">Fixed width (24rem)</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>w-1/2</code></td>
                      <td>50% of parent width</td>
                    </tr>
                    <tr>
                      <td><code>w-full</code></td>
                      <td>100% width</td>
                    </tr>
                    <tr>
                      <td><code>w-screen</code></td>
                      <td>Full screen width</td>
                    </tr>
                    <tr>
                      <td><code>w-auto</code></td>
                      <td>Auto width</td>
                    </tr>
                    <tr>
                      <td><code>w-0 to w-96</code></td>
                      <td>Fixed width in rem (e.g., w-20 = 5rem)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">{`2. Height (h-{value})`}</h3>
                <pre><code>{`<div class="h-32">Fixed height</div>
<div class="h-screen">Full viewport height</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>h-full</code></td>
                      <td>100% height</td>
                    </tr>
                    <tr>
                      <td><code>h-screen</code></td>
                      <td>Full screen height</td>
                    </tr>
                    <tr>
                      <td><code>h-auto</code></td>
                      <td>Auto height</td>
                    </tr>
                    <tr>
                      <td><code>h-0 to h-96</code></td>
                      <td>Fixed height in rem</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Min/Max Width & Height</h3>
                <pre><code>{`<div class="min-w-full max-w-lg">Responsive Width</div>
<div class="min-h-screen max-h-64">Responsive Height</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>min-w-0, min-w-full</code></td>
                      <td>Minimum width</td>
                    </tr>
                    <tr>
                      <td><code>max-w-xs, max-w-4xl</code></td>
                      <td>Maximum width</td>
                    </tr>
                    <tr>
                      <td><code>min-h-0, min-h-screen</code></td>
                      <td>Minimum height</td>
                    </tr>
                    <tr>
                      <td><code>max-h-64</code></td>
                      <td>Maximum height (16rem)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Common Real-Life Use Cases</h3>
                
                <h5 className="h5 mt-3">Cards / Boxes:</h5>
                <pre><code>{`<div class="w-full max-w-md p-4 bg-white shadow">Responsive Card</div>`}</code></pre>
                
                <h5 className="h5 mt-3">Images / Videos:</h5>
                <pre><code>{`<img class="w-48 h-48 object-cover" src="..." />`}</code></pre>
                
                <h5 className="h5 mt-3">Full Page Sections:</h5>
                <pre><code>{`<section class="h-screen w-screen bg-blue-100">Full viewport</section>`}</code></pre>
              </div>
            </section>

            <section id="borders" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-border"></i> Border & Radius Utilities</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS provides utility classes for adding and customizing <strong>borders</strong>, <strong>border widths</strong>, <strong>border colors</strong>, and <strong>border radius</strong> to create smooth, sharp, or rounded UI elements.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Add Border</h3>
                <pre><code>{`<div class="border">Default border</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>border</code></td>
                      <td>1px border on all sides</td>
                    </tr>
                    <tr>
                      <td><code>border-2 to border-8</code></td>
                      <td>Sets border width</td>
                    </tr>
                    <tr>
                      <td><code>border-t / border-b / border-l / border-r</code></td>
                      <td>Border on specific side</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Border Color</h3>
                <pre><code>{`<div class="border border-red-500">Red Border</div>`}</code></pre>
                <p>Use <code>{`border-{color}`}</code> to change the color.</p>
                <p>Examples:</p>
                <ul>
                  <li><code>border-blue-400</code></li>
                  <li><code>border-green-600</code></li>
                  <li><code>border-gray-300</code></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Border Style</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>border-solid</code></td>
                      <td>Default solid style</td>
                    </tr>
                    <tr>
                      <td><code>border-dashed</code></td>
                      <td>Dashed lines</td>
                    </tr>
                    <tr>
                      <td><code>border-dotted</code></td>
                      <td>Dotted border</td>
                    </tr>
                    <tr>
                      <td><code>border-none</code></td>
                      <td>Removes border</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`<div class="border-2 border-dashed border-blue-400">Dashed Box</div>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Border Radius (Rounded Corners)</h3>
                <pre><code>{`<div class="rounded-lg">Rounded corners</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Radius size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>rounded-none</code></td>
                      <td>No rounding</td>
                    </tr>
                    <tr>
                      <td><code>rounded-sm</code></td>
                      <td>Small</td>
                    </tr>
                    <tr>
                      <td><code>rounded</code></td>
                      <td>Default (medium)</td>
                    </tr>
                    <tr>
                      <td><code>rounded-lg</code></td>
                      <td>Large</td>
                    </tr>
                    <tr>
                      <td><code>rounded-full</code></td>
                      <td>Circle/fully rounded</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Rounded Specific Corners</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>rounded-t-lg</code></td>
                      <td>Top corners rounded</td>
                    </tr>
                    <tr>
                      <td><code>rounded-b-full</code></td>
                      <td>Bottom full rounding</td>
                    </tr>
                    <tr>
                      <td><code>rounded-l-md</code></td>
                      <td>Left side only</td>
                    </tr>
                    <tr>
                      <td><code>rounded-r-sm</code></td>
                      <td>Right side small</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`<div class="rounded-t-lg">Top rounded only</div>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example</h3>
                <pre><code>{`<div class="border-2 border-green-600 rounded-xl p-4">
  <h2 class="text-green-700 font-semibold">Success Box</h2>
</div>`}</code></pre>
                <div className="example-box">
                  <div className="border-2 border-green-600 rounded-xl p-4">
                    <h2 className="text-green-700 font-semibold">Success Box</h2>
                  </div>
                </div>
              </div>
            </section>

            <section id="shadows" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-droplet"></i> Shadow & Opacity Utilities</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS offers easy-to-use classes for adding <strong>box shadows</strong> and controlling <strong>opacity</strong> to create visual depth and focus in your UI.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Box Shadow (shadow)</h3>
                <pre><code>{`<div class="shadow">Default shadow</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Shadow Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>shadow-sm</code></td>
                      <td>Small shadow</td>
                    </tr>
                    <tr>
                      <td><code>shadow</code></td>
                      <td>Default shadow</td>
                    </tr>
                    <tr>
                      <td><code>shadow-md</code></td>
                      <td>Medium shadow</td>
                    </tr>
                    <tr>
                      <td><code>shadow-lg</code></td>
                      <td>Large shadow</td>
                    </tr>
                    <tr>
                      <td><code>shadow-xl</code></td>
                      <td>Extra large</td>
                    </tr>
                    <tr>
                      <td><code>shadow-2xl</code></td>
                      <td>2X extra large</td>
                    </tr>
                    <tr>
                      <td><code>shadow-inner</code></td>
                      <td>Inner shadow</td>
                    </tr>
                    <tr>
                      <td><code>shadow-none</code></td>
                      <td>Removes shadow</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`<div class="p-4 bg-white shadow-lg">Elevated Card</div>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">{`2. Opacity (opacity-{value})`}</h3>
                <p>Use to control transparency of elements.</p>
                <pre><code>{`<div class="opacity-50">50% Transparent</div>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>opacity-0</code></td>
                      <td>Fully transparent</td>
                    </tr>
                    <tr>
                      <td><code>opacity-25</code></td>
                      <td>25% visible</td>
                    </tr>
                    <tr>
                      <td><code>opacity-50</code></td>
                      <td>50% visible</td>
                    </tr>
                    <tr>
                      <td><code>opacity-75</code></td>
                      <td>75% visible</td>
                    </tr>
                    <tr>
                      <td><code>opacity-100</code></td>
                      <td>Fully visible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Use Cases</h3>
                <ul>
                  <li>Add depth to cards, modals, buttons</li>
                  <li>Dim or fade elements (e.g., overlays, loaders)</li>
                  <li>Improve UI hierarchy with shadows & opacity</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example</h3>
                <pre><code>{`<div class="bg-blue-100 p-6 rounded-lg shadow-md opacity-90">
  <h2 class="text-blue-800 font-bold">Shadow + Opacity Box</h2>
</div>`}</code></pre>
                <div className="example-box">
                  <div className="bg-blue-100 p-6 rounded-lg shadow-md opacity-90">
                    <h2 className="text-blue-800 font-bold">Shadow + Opacity Box</h2>
                  </div>
                </div>
              </div>
            </section>

            <section id="positioning" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrows-move"></i> Position & Z-Index Utilities</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS provides utility classes to control <strong>element positioning</strong> (static, relative, absolute, fixed, sticky) and <strong>stacking order</strong> using z-index.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Positioning Classes</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>CSS Equivalent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>static</code></td>
                      <td>position: static (default)</td>
                    </tr>
                    <tr>
                      <td><code>relative</code></td>
                      <td>position: relative</td>
                    </tr>
                    <tr>
                      <td><code>absolute</code></td>
                      <td>position: absolute</td>
                    </tr>
                    <tr>
                      <td><code>fixed</code></td>
                      <td>position: fixed</td>
                    </tr>
                    <tr>
                      <td><code>sticky</code></td>
                      <td>position: sticky</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`<div class="relative">
  <div class="absolute top-0 left-0">I'm positioned!</div>
</div>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Offset Utilities (top, bottom, left, right)</h3>
                <p>Used with relative, absolute, fixed, or sticky.</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>top-0 / bottom-4</code></td>
                      <td>Sets top/bottom offset</td>
                    </tr>
                    <tr>
                      <td><code>left-2 / right-8</code></td>
                      <td>Sets left/right offset</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`<div class="absolute top-4 right-4">Positioned Box</div>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Z-Index Utilities</h3>
                <p>Controls stacking order of elements.</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>z-0</code></td>
                      <td>Base layer</td>
                    </tr>
                    <tr>
                      <td><code>z-10</code></td>
                      <td>Higher than base</td>
                    </tr>
                    <tr>
                      <td><code>z-20</code></td>
                      <td>Higher than z-10</td>
                    </tr>
                    <tr>
                      <td><code>z-50</code></td>
                      <td>Very high layer</td>
                    </tr>
                    <tr>
                      <td><code>z-auto</code></td>
                      <td>Default stacking</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`<div class="z-50 fixed top-0">Always on top</div>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Use Cases</h3>
                <ul>
                  <li>Build modals, sticky headers, tooltips</li>
                  <li>Create overlapping elements (image overlays, cards)</li>
                  <li>Positioning badges or notification bubbles</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example</h3>
                <pre><code>{`<div class="relative h-32 bg-gray-100">
  <div class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full z-10">
    Notification
  </div>
</div>`}</code></pre>
                <div className="example-box">
                  <div className="relative h-32 bg-gray-100">
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full z-10">
                      Notification
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="display" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layout-three-columns"></i> Display & Visibility Utilities</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS provides utility classes to control how elements are displayed (like block, flex, grid) and their visibility (show/hide) easily.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Display Utilities</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>block</code></td>
                      <td>display: block</td>
                    </tr>
                    <tr>
                      <td><code>inline-block</code></td>
                      <td>display: inline-block</td>
                    </tr>
                    <tr>
                      <td><code>inline</code></td>
                      <td>display: inline</td>
                    </tr>
                    <tr>
                      <td><code>flex</code></td>
                      <td>display: flex</td>
                    </tr>
                    <tr>
                      <td><code>inline-flex</code></td>
                      <td>display: inline-flex</td>
                    </tr>
                    <tr>
                      <td><code>grid</code></td>
                      <td>display: grid</td>
                    </tr>
                    <tr>
                      <td><code>inline-grid</code></td>
                      <td>display: inline-grid</td>
                    </tr>
                    <tr>
                      <td><code>hidden</code></td>
                      <td>display: none</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`<div class="flex">This is a flex container</div>
<div class="hidden md:block">Hidden on small screens</div>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Visibility Utilities</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>visible</code></td>
                      <td>Makes element visible</td>
                    </tr>
                    <tr>
                      <td><code>invisible</code></td>
                      <td>Hides element (still takes space)</td>
                    </tr>
                  </tbody>
                </table>
                <pre className="mt-3"><code>{`<div class="invisible">You can't see me</div>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Conditional Visibility (Responsive)</h3>
                <pre><code>{`<div class="block md:hidden">Visible only on small screens</div>
<div class="hidden md:block">Visible only on medium and up</div>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Use Cases</h3>
                <ul>
                  <li>Create responsive layouts</li>
                  <li>Show/hide sections like mobile menus, modals, alerts</li>
                  <li>Use invisible for animation timing or logic without removing from layout</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example</h3>
                <pre><code>{`<div class="flex justify-between items-center">
  <h1 class="text-xl">Logo</h1>
  <nav class="hidden md:flex space-x-4">
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
</div>`}</code></pre>
                <div className="example-box">
                  <div className="flex justify-between items-center">
                    <h1 className="text-xl">Logo</h1>
                    <nav className="hidden md:flex space-x-4">
                      <a href="#">Home</a>
                      <a href="#">About</a>
                    </nav>
                  </div>
                </div>
              </div>
            </section>

            <section id="pseudo" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-magic"></i> Pseudo-Class Variants</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind CSS allows you to apply styles based on <strong>pseudo-class states</strong> like hover, focus, active, visited, etc., by prefixing them to utility classes.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Common Pseudo-Class Prefixes</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Prefix</th>
                      <th>Trigger State</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>hover:</code></td>
                      <td>When mouse hovers</td>
                    </tr>
                    <tr>
                      <td><code>focus:</code></td>
                      <td>When element is focused (e.g., input)</td>
                    </tr>
                    <tr>
                      <td><code>active:</code></td>
                      <td>When element is clicked</td>
                    </tr>
                    <tr>
                      <td><code>visited:</code></td>
                      <td>After visiting a link</td>
                    </tr>
                    <tr>
                      <td><code>disabled:</code></td>
                      <td>When element is disabled</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Examples</h3>
                
                <h5 className="h5 mt-3">Hover Effect:</h5>
                <pre><code>{`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Hover Me
</button>`}</code></pre>
                <div className="example-box">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Hover Me
                  </button>
                </div>
                
                <h5 className="h5 mt-3">Focus Effect (Inputs):</h5>
                <pre><code>{`<input class="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />`}</code></pre>
                <div className="example-box">
                  <input className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Focus me" />
                </div>
                
                <h5 className="h5 mt-3">Active Button:</h5>
                <pre><code>{`<button class="bg-green-500 active:bg-green-700">Active Button</button>`}</code></pre>
                <div className="example-box">
                  <button className="bg-green-500 active:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Active Button
                  </button>
                </div>
                
                <h5 className="h5 mt-3">Disabled State:</h5>
                <pre><code>{`<button class="bg-gray-400 text-white cursor-not-allowed disabled:opacity-50" disabled>
  Disabled
</button>`}</code></pre>
                <div className="example-box">
                  <button className="bg-gray-400 text-white cursor-not-allowed disabled:opacity-50" disabled>
                    Disabled
                  </button>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Customizing Multiple States Together</h3>
                <pre><code>{`<a class="text-blue-500 hover:text-red-500 focus:underline active:text-green-500">
  Fancy Link
</a>`}</code></pre>
                <div className="example-box">
                  <a href="#" className="text-blue-500 hover:text-red-500 focus:underline active:text-green-500">
                    Fancy Link
                  </a>
                </div>
              </div>
            </section>

            <section id="transitions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-hourglass-split"></i> Transition & Animation Utilities</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p>Tailwind provides utility classes to <strong>animate elements</strong> and apply <strong>smooth transitions</strong> between styles on interaction (like hover, focus, etc.).</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Transition Utilities</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>transition</code></td>
                      <td>Apply transition to all properties</td>
                    </tr>
                    <tr>
                      <td><code>transition-colors</code></td>
                      <td>Only color-related props (text/bg/border)</td>
                    </tr>
                    <tr>
                      <td><code>transition-opacity</code></td>
                      <td>Only opacity</td>
                    </tr>
                    <tr>
                      <td><code>transition-transform</code></td>
                      <td>Only transform props</td>
                    </tr>
                    <tr>
                      <td><code>{`duration-{ms}`}</code></td>
                      <td>Duration in ms (e.g., duration-500)</td>
                    </tr>
                    <tr>
                      <td><code>ease-in, ease-out, ease-in-out</code></td>
                      <td>Timing functions</td>
                    </tr>
                    <tr>
                      <td><code>delay-{`{ms}`}</code></td>
                      <td>Delay before transition starts</td>
                    </tr>
                  </tbody>
                </table>
                
                <h5 className="h5 mt-3">Example – Button with Hover Transition</h5>
                <pre><code>{`<button class="bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-300 ease-in-out px-4 py-2 rounded">
  Hover Me
</button>`}</code></pre>
                <div className="example-box">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-300 ease-in-out px-4 py-2 rounded">
                    Hover Me
                  </button>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Animation Utilities</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>animate-spin</code></td>
                      <td>Rotates element continuously</td>
                    </tr>
                    <tr>
                      <td><code>animate-ping</code></td>
                      <td>Pulse effect</td>
                    </tr>
                    <tr>
                      <td><code>animate-pulse</code></td>
                      <td>Fades in/out repeatedly</td>
                    </tr>
                    <tr>
                      <td><code>animate-bounce</code></td>
                      <td>Bounces element up/down</td>
                    </tr>
                    <tr>
                      <td><code>animate-none</code></td>
                      <td>No animation</td>
                    </tr>
                  </tbody>
                </table>
                
                <h5 className="h5 mt-3">Example – Spinning Loader</h5>
                <pre><code>{`<div class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>`}</code></pre>
                <div className="example-box">
                  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Use Cases</h3>
                <ul>
                  <li>Transitions: buttons, links, modals, input focus</li>
                  <li>Animations: loaders, attention-grabbing elements, effects</li>
                </ul>
                <pre className="mt-3"><code>{`<div class="hover:scale-105 transition-transform duration-300">
  Zoom on Hover
</div>`}</code></pre>
              </div>
            </section>

            <section id="darkmode" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-moon-stars"></i> Dark Mode Support</h2>
              
              <div className="property-card">
                <h3 className="h4">Enabling Dark Mode</h3>
                <p>In <code>tailwind.config.js</code>:</p>
                <pre><code>{`module.exports = {
  darkMode: 'class', // or 'media'
  // ...
}`}</code></pre>
                <ul>
                  <li><code>'media'</code> → based on user system setting</li>
                  <li><code>'class'</code> → manually toggle using <code>class="dark"</code></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Usage Examples</h3>
                <pre><code>{`<div class="bg-white text-black dark:bg-black dark:text-white p-4">
  This supports dark mode!
</div>`}</code></pre>
                <p>To toggle:</p>
                <pre><code>{`<body class="dark"><!-- Dark mode activated --></body>`}</code></pre>
              </div>
            </section>

            <section id="customization" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-tools"></i> Custom Utilities</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Creating Custom Colors / Spacing</h3>
                <p>In <code>tailwind.config.js</code>:</p>
                <pre><code>{`module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#1e40af',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
    },
  }
}`}</code></pre>
                <p>Now you can use:</p>
                <pre><code>{`<div class="bg-brand p-72">Custom color & spacing</div>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Using @apply Directive</h3>
                <p>Use in custom CSS files (with Tailwind's PostCSS setup):</p>
                <pre><code>{`.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700;
}`}</code></pre>
                <p>Usage in HTML:</p>
                <pre><code>{`<button class="btn">Click Me</button>`}</code></pre>
              </div>
            </section>

            <section id="forms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-input-cursor-text"></i> Forms Styling with Tailwind</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Install Tailwind Forms Plugin</h3>
                <pre><code>{`npm install @tailwindcss/forms`}</code></pre>
                <p>In <code>tailwind.config.js</code>:</p>
                <pre><code>{`plugins: [
  require('@tailwindcss/forms'),
],`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Form Styling Examples</h3>
                <pre><code>{`<input type="text" class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />

<button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Submit</button>`}</code></pre>
                <p>You can also style:</p>
                <ul>
                  <li>Textarea</li>
                  <li>Select</li>
                  <li>Checkbox, radio using utility classes</li>
                </ul>
              </div>
            </section>

            <section id="projects" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-lightbulb"></i> Project Ideas</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Responsive Portfolio Website</h3>
                <p><strong>Skills Used:</strong> Layouts (flex/grid), navbar, dark mode, transitions</p>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Hero section with image</li>
                  <li>Skills, Projects, Contact form</li>
                  <li>Dark mode toggle</li>
                </ul>
                <p><strong>Bonus:</strong> Add animation on scroll using AOS + Tailwind!</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Landing Page for Product/Startup</h3>
                <p><strong>Skills Used:</strong> Spacing, buttons, cards, responsiveness</p>
                <p><strong>Sections:</strong></p>
                <ul>
                  <li>Hero with call-to-action</li>
                  <li>Features section (cards)</li>
                  <li>Testimonials</li>
                  <li>Footer</li>
                </ul>
                <p><strong>Bonus:</strong> Use Tailwind's @apply for reusable button styles</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Login / Register UI Page</h3>
                <p><strong>Skills Used:</strong> Forms, focus states, plugins</p>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Styled input boxes</li>
                  <li>Show/hide password toggle</li>
                  <li>Error validation messages</li>
                </ul>
                <p><strong>Bonus:</strong> Add form animation and responsive layout</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. E-commerce Product Card Grid</h3>
                <p><strong>Skills Used:</strong> Flex/grid, hover effects, buttons</p>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Grid of cards with product info</li>
                  <li>Hover zoom or shadow effect</li>
                  <li>Add to cart button style</li>
                </ul>
                <p><strong>Bonus:</strong> Add dark mode + filter by category</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Dashboard UI Layout</h3>
                <p><strong>Skills Used:</strong> Sidebar, z-index, layout, responsive design</p>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Left nav sidebar + top header</li>
                  <li>Cards with statistics</li>
                  <li>Responsive layout</li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Tailwind CSS Notes &copy; 2025 | Designed with Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default TailwindCssNotes;