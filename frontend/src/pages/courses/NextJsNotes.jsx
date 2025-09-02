import React from 'react';

function NextJsNotes() {
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
          .rendering-table {
            width: 100%;
            border-collapse: collapse;
          }
          .rendering-table th, .rendering-table td {
            border: 1px solid #dee2e6;
            padding: 8px;
            text-align: left;
          }
          .rendering-table th {
            background-color: #e9ecef;
          }
        `}
      </style>

      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-jsx"></i> Next.js Notes</h1>
          <p className="lead">Your Comprehensive Guide to Next.js Framework</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#setup"><i className="bi bi-gear"></i> Project Setup</a>
              <a className="nav-link" href="#routing"><i className="bi bi-signpost"></i> Routing</a>
              <a className="nav-link" href="#app-router"><i className="bi bi-folder"></i> App Router</a>
              <a className="nav-link" href="#rendering"><i className="bi bi-layers"></i> Rendering Methods</a>
              <a className="nav-link" href="#data-fetching"><i className="bi bi-database"></i> Data Fetching</a>
              <a className="nav-link" href="#styling"><i className="bi bi-palette"></i> Styling</a>
              <a className="nav-link" href="#api-routes"><i className="bi bi-hdd-stack"></i> API Routes</a>
              <a className="nav-link" href="#authentication"><i className="bi bi-shield-lock"></i> Authentication</a>
              <a className="nav-link" href="#database"><i className="bi bi-server"></i> Database Integration</a>
              <a className="nav-link" href="#state-management"><i className="bi bi-diagram-3"></i> State Management</a>
              <a className="nav-link" href="#images-fonts"><i className="bi bi-image"></i> Images & Fonts</a>
              <a className="nav-link" href="#deployment"><i className="bi bi-cloud-upload"></i> Deployment</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Next.js</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <ul>
                  <li><strong>Next.js</strong> is a <strong>React-based framework</strong> for building fast, scalable, and SEO-friendly web applications.</li>
                  <li>It extends React by providing features like <strong>server-side rendering (SSR)</strong>, <strong>static site generation (SSG)</strong>, <strong>incremental static regeneration (ISR)</strong>, and <strong>API routes</strong> out of the box.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> Why Next.js?</h3>
                <ul>
                  <li><strong>React alone</strong> only supports client-side rendering (CSR).</li>
                  <li><strong>Next.js</strong> adds powerful features like routing, rendering modes, and performance optimization.</li>
                  <li>Perfect for <strong>production-ready full-stack apps</strong>.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-star"></i> Key Features of Next.js</h3>
                <ol>
                  <li><strong>File-based Routing</strong> – Pages are created automatically inside the pages or app directory.</li>
                  <li><strong>Pre-rendering</strong> – Pages are generated in advance for better SEO & performance.</li>
                  <li><strong>API Routes</strong> – Backend APIs can be written directly inside Next.js project.</li>
                  <li><strong>Image Optimization</strong> – Built-in &lt;Image /&gt; component for faster images.</li>
                  <li><strong>Built-in CSS & Styling Support</strong> – CSS Modules, Tailwind, styled-components.</li>
                  <li><strong>App Router (Next.js 13+)</strong> – Supports layouts, nested routing, server & client components.</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-layers"></i> Rendering Modes Comparison</h3>
                <table className="rendering-table">
                  <thead>
                    <tr>
                      <th>Rendering Mode</th>
                      <th>Description</th>
                      <th>Example Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>CSR</strong></td>
                      <td>Page rendered completely on client using React</td>
                      <td>Dashboard, SPA apps</td>
                    </tr>
                    <tr>
                      <td><strong>SSR</strong></td>
                      <td>Page rendered on server for every request (getServerSideProps)</td>
                      <td>News websites</td>
                    </tr>
                    <tr>
                      <td><strong>SSG</strong></td>
                      <td>Page generated once at build time (getStaticProps)</td>
                      <td>Blogs, Docs</td>
                    </tr>
                    <tr>
                      <td><strong>ISR</strong></td>
                      <td>Pages updated after a time interval (revalidate)</td>
                      <td>E-commerce product pages</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-slash"></i> Example 1 – Simple Next.js Page (CSR)</h3>
                <pre className="mb-3"><code>{`// pages/index.js  
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <p>This is a client-side rendered page.</p>
    </div>
  );
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-slash"></i> Example 2 – Server-Side Rendering (SSR)</h3>
                <pre className="mb-3"><code>{`// pages/ssr.js  
export async function getServerSideProps() {
  const data = { message: "Hello from SSR!" };
  return { props: { data } };
}

export default function SSRPage({ data }) {
  return <h1>{data.message}</h1>;
}`}</code></pre>
                <p>Here, data is fetched on the server before rendering the page.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-slash"></i> Example 3 – Static Site Generation (SSG)</h3>
                <pre className="mb-3"><code>{`// pages/ssg.js
export async function getStaticProps() {
  const data = { message: "Hello from SSG!" };
  return { props: { data } };
}

export default function SSGPage({ data }) {
  return <h1>{data.message}</h1>;
}`}</code></pre>
                <p>This page is generated at build time and served as static HTML.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-slash"></i> Example 4 – Incremental Static Regeneration (ISR)</h3>
                <pre className="mb-3"><code>{`// pages/isr.js
export async function getStaticProps() {
  const data = { time: new Date().toISOString() };
  return {
    props: { data },
    revalidate: 10, // page regenerates every 10 sec
  };
}

export default function ISRPage({ data }) {
  return <h1>Page regenerated at: {data.time}</h1>;
}`}</code></pre>
                <p>Page updates automatically every 10 seconds without full rebuild.</p>
              </div>
            </section>

            <section id="setup" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Project Setup</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <ul>
                  <li>Project setup in Next.js means installing and configuring a Next.js app with all necessary dependencies (React, React-DOM, and Next.js itself).</li>
                  <li>Next.js provides an official command <strong>create-next-app</strong> to scaffold projects quickly.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-ol"></i> Steps to Setup Next.js</h3>
                
                <h4 className="h5 mt-3">1. Install Node.js</h4>
                <ul>
                  <li>Make sure <strong>Node.js (LTS)</strong> and <strong>npm</strong> or <strong>yarn</strong> are installed.</li>
                  <li>Check versions:</li>
                </ul>
                <pre className="mb-3"><code>{`node -v  
npm -v`}</code></pre>
                
                <h4 className="h5 mt-3">2. Create a New Next.js App</h4>
                <p>Run the following command:</p>
                <pre className="mb-3"><code>{`npx create-next-app@latest my-next-app`}</code></pre>
                <p>It will ask some questions:</p>
                <ul>
                  <li>TypeScript (Yes/No)</li>
                  <li>ESLint (Yes/No)</li>
                  <li>Tailwind CSS (optional)</li>
                  <li>App Router (recommended for Next.js 13+)</li>
                </ul>
                
                <h4 className="h5 mt-3">3. Move into the Project Folder</h4>
                <pre className="mb-3"><code>{`cd my-next-app`}</code></pre>
                
                <h4 className="h5 mt-3">4. Run the Development Server</h4>
                <pre className="mb-3"><code>{`npm run dev
# OR
yarn dev`}</code></pre>
                <p>The app runs at http://localhost:3000.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-folder"></i> Project Structure</h3>
                <p>When you create a project, you get something like this:</p>
                <pre className="mb-3"><code>{`my-next-app/
├── app/           # App Router (Next.js 13+)
│   ├── page.js    # Default home page
│   ├── layout.js  # Root layout
│   └── globals.css # Global styles
├── public/        # Static assets (images, icons, etc.)
├── .gitignore
├── package.json
├── next.config.js
└── README.md`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-slash"></i> Example – First Next.js Page</h3>
                <p>App Router (Next.js 13+):</p>
                <pre className="mb-3"><code>{`// app/page.js
export default function Home() {
  return (
    <main>
      <h1>Hello Next.js</h1>
      <p>Project setup successful!</p>
    </main>
  );
}`}</code></pre>
                
                <p>Pages Router (older version):</p>
                <pre className="mb-3"><code>{`// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
    </div>
  );
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-palette"></i> Adding Tailwind CSS (Optional but Common)</h3>
                <p>If you selected Tailwind during setup, it's auto-configured. Otherwise:</p>
                <pre className="mb-3"><code>{`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}</code></pre>
                
                <p>Update tailwind.config.js:</p>
                <pre className="mb-3"><code>{`content: [
  "./app/**/*.{js,ts,jsx,tsx},",
  "./pages/**/*.{js,ts,jsx,tsx},",
]`}</code></pre>
                
                <p>Add Tailwind to globals.css:</p>
                <pre className="mb-3"><code>{`@tailwind base;
@tailwind components;
@tailwind utilities;`}</code></pre>
                
                <p>Now you can use Tailwind classes like:</p>
                <pre className="mb-3"><code>{`<h1 className="text-3xl font-bold text-blue-600">Hello Tailwind + Next.js</h1>`}</code></pre>
              </div>
            </section>

            <section id="routing" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-signpost"></i> Routing</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <ul>
                  <li>Routing in Next.js is file-based.</li>
                  <li>Each file inside the pages/ (old router) or app/ (new App Router) folder automatically becomes a route.</li>
                  <li>No need for react-router-dom.</li>
                  <li>Next.js handles nested routes, dynamic routes, and API routes automatically.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-ol"></i> Types of Routing</h3>
                
                <h4 className="h5 mt-3">1. Static Routes</h4>
                <ul>
                  <li>A file about.js inside pages/ → /about</li>
                  <li>A file contact.js inside pages/ → /contact</li>
                </ul>
                <p>Example (pages router):</p>
                <pre className="mb-3"><code>{`// pages/about.js
export default function About() {
  return <h1>About Page</h1>;
}`}</code></pre>
                <p>URL → http://localhost:3000/about</p>
                
                <h4 className="h5 mt-3">2. Nested Routes</h4>
                <ul>
                  <li>You can create folders for nested paths.</li>
                </ul>
                <p>Example:</p>
                <pre className="mb-3"><code>{`pages/
└── blog/
    ├── index.js   → /blog
    └── first.js   → /blog/first`}</code></pre>
                
                <pre className="mb-3"><code>{`// pages/blog/index.js
export default function Blog() {
  return <h1>Blog Home</h1>;
}`}</code></pre>
                <p>URL → /blog</p>
                
                <h4 className="h5 mt-3">3. Dynamic Routes</h4>
                <ul>
                  <li>Use square brackets [ ] in filenames.</li>
                </ul>
                <p>Example:</p>
                <pre className="mb-3"><code>{`pages/
└── blog/
    └── [id].js   → /blog/1, /blog/2`}</code></pre>
                
                <pre className="mb-3"><code>{`// pages/blog/[id].js
import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Blog Post ID: {id}</h1>;
}`}</code></pre>
                <p>URL → /blog/5 → Output: <strong>Blog Post ID: 5</strong></p>
                
                <h4 className="h5 mt-3">4. Catch-All Routes</h4>
                <ul>
                  <li>Use [...slug].js for multiple dynamic segments.</li>
                </ul>
                <p>Example:</p>
                <pre className="mb-3"><code>{`pages/
└── docs/
    └── [...slug].js`}</code></pre>
                
                <pre className="mb-3"><code>{`// pages/docs/[...slug].js
import { useRouter } from "next/router";

export default function Docs() {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Docs Path: {slug?.join("/")}</h1>;
}`}</code></pre>
                <p>URL → /docs/nextjs/routing → Output: <strong>Docs Path: nextjs/routing</strong></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-link"></i> Linking Between Pages</h3>
                <ul>
                  <li>Use the <strong>Link</strong> component from next/link.</li>
                </ul>
                <pre className="mb-3"><code>{`import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/1">Blog 1</Link>
    </nav>
  );
}`}</code></pre>
                <p>Faster navigation because Next.js prefetches pages.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-folder"></i> App Router (Next.js 13+) – New Way</h3>
                <p>Example:</p>
                <pre className="mb-3"><code>{`app/
├── page.js          → /
├── about/
│   └── page.js      → /about
└── blog/
    └── [id]/
        └── page.js  → /blog/1`}</code></pre>
                
                <pre className="mb-3"><code>{`// app/about/page.js
export default function About() {
  return <h1>About Page (App Router)</h1>;
}`}</code></pre>
                <p>Works the same, but uses nested folders and layouts.</p>
              </div>
            </section>

            <section id="app-router" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-folder"></i> App Router (Next.js 13+)</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <ul>
                  <li>The <strong>App Router</strong> (introduced in Next.js 13) is the <strong>latest way of building applications</strong> in Next.js.</li>
                  <li>It uses the <strong>app/ directory</strong> instead of the old pages/ directory, giving:</li>
                  <ul>
                    <li><strong>Nested layouts</strong></li>
                    <li><strong>Server & Client Components</strong></li>
                    <li><strong>Streaming & Suspense</strong></li>
                    <li><strong>Route Handlers (API inside app/)</strong></li>
                  </ul>
                  <li>It makes Next.js a <strong>full-stack React framework</strong>.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-compare"></i> App Router vs Pages Router</h3>
                <table className="rendering-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Pages Router (pages/)</th>
                      <th>App Router (app/)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Introduced</strong></td>
                      <td>Next.js 1</td>
                      <td>Next.js 13</td>
                    </tr>
                    <tr>
                      <td><strong>Routing</strong></td>
                      <td>File-based with .js files</td>
                      <td>Nested folders + page.js</td>
                    </tr>
                    <tr>
                      <td><strong>Layouts</strong></td>
                      <td>Custom _app.js</td>
                      <td>Built-in layout.js</td>
                    </tr>
                    <tr>
                      <td><strong>Data Fetching</strong></td>
                      <td>getStaticProps, getServerSideProps</td>
                      <td>fetch() in Server Components</td>
                    </tr>
                    <tr>
                      <td><strong>Components</strong></td>
                      <td>All Client</td>
                      <td>Server + Client Components</td>
                    </tr>
                    <tr>
                      <td><strong>Streaming</strong></td>
                      <td>Not Supported</td>
                      <td>Supported</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-folder"></i> Folder Structure Example</h3>
                <pre className="mb-3"><code>{`app/
├── layout.js       # Root layout
├── page.js        # Homepage
├── about/
│   └── page.js    # /about
├── blog/
│   ├── page.js    # /blog
│   └── [id]/
│       └── page.js # /blog/1
└── globals.css    # Global styles`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-layout-sidebar"></i> Layouts</h3>
                <p>Layouts wrap multiple pages (like a template).</p>
                <pre className="mb-3"><code>{`// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>My Website</header>
        <main>{children}</main>
        <footer>© 2025</footer>
      </body>
    </html>
  );
}`}</code></pre>
                <p>Every page inside app/ will use this layout.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-layout-sidebar-inset"></i> Nested Layouts Example</h3>
                <pre className="mb-3"><code>{`app/
└── dashboard/
    ├── layout.js   # Layout only for dashboard
    ├── page.js     # /dashboard
    └── settings/
        └── page.js # /dashboard/settings`}</code></pre>
                
                <pre className="mb-3"><code>{`// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <section>
      <h2>Dashboard Menu</h2>
      {children}
    </section>
  );
}`}</code></pre>
                <p>/dashboard/settings will have both Root Layout + Dashboard Layout.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-cpu"></i> Server & Client Components</h3>
                <p>By default, <strong>all components are Server Components</strong>.</p>
                <p>If you need client-side features (state, effects, event handlers), use:</p>
                <pre className="mb-3"><code>{`"use client"; // at the top of the file

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</code></pre>
                <p>Without "use client", Next.js assumes it's a Server Component.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-hourglass-split"></i> Loading UI</h3>
                <p>Create a loading.js inside a route folder → automatically shows while the page loads.</p>
                <pre className="mb-3"><code>{`// app/dashboard/loading.js
export default function Loading() {
  return <p>Loading dashboard...</p>;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-exclamation-triangle"></i> Error Handling</h3>
                <p>Create an error.js file to handle errors gracefully.</p>
                <pre className="mb-3"><code>{`// app/dashboard/error.js
"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-hdd-stack"></i> Route Handlers (API inside App Router)</h3>
                <pre className="mb-3"><code>{`// app/api/hello/route.js
export async function GET() {
  return Response.json({ message: "Hello from App Router API" });
}`}</code></pre>
                <p>Now /api/hello will return JSON.</p>
              </div>
            </section>

            <section id="rendering" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layers"></i> Rendering Methods</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <ul>
                  <li>Rendering methods define how a page is generated and delivered to the user.</li>
                  <li>Next.js supports multiple rendering strategies:</li>
                  <ol>
                    <li>CSR – Client-Side Rendering</li>
                    <li>SSR – Server-Side Rendering</li>
                    <li>SSG – Static Site Generation</li>
                    <li>ISR – Incremental Static Regeneration</li>
                  </ol>
                  <li>This makes Next.js flexible for both <strong>static websites</strong> and <strong>dynamic web apps</strong>.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-display"></i> 1. Client-Side Rendering (CSR)</h3>
                <ul>
                  <li>The page is rendered in the browser using React.</li>
                  <li>HTML is empty at first; JS takes over.</li>
                  <li>SEO not great (search engines may not see content immediately).</li>
                </ul>
                <p>Example:</p>
                <pre className="mb-3"><code>{`// app/csr/page.js
"use client";
import { useState, useEffect } from "react";

export default function CSRPage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  return <h1>Client Time: {time}</h1>;
}`}</code></pre>
                <p>Rendering happens only on the client side.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-server"></i> 2. Server-Side Rendering (SSR)</h3>
                <ul>
                  <li>Page is rendered on the server for every request.</li>
                  <li>Great for dynamic content (e.g., news, weather).</li>
                  <li>SEO friendly.</li>
                </ul>
                <p>Example (Pages Router):</p>
                <pre className="mb-3"><code>{`// pages/ssr.js
export async function getServerSideProps() {
  return { props: { time: new Date().toISOString() } };
}

export default function SSRPage({ time }) {
  return <h1>Server Time: {time}</h1>;
}`}</code></pre>
                <p>Every refresh → New server-rendered HTML.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-arrow-down"></i> 3. Static Site Generation (SSG)</h3>
                <ul>
                  <li>Page is generated <strong>once at build time</strong> → served as static HTML.</li>
                  <li>Super fast and SEO friendly.</li>
                  <li>Best for blogs, docs, landing pages.</li>
                </ul>
                <p>Example (Pages Router):</p>
                <pre className="mb-3"><code>{`// pages/ssg.js
export async function getStaticProps() {
  return { props: { message: "Generated at build time" } };
}

export default function SSGPage({ message }) {
  return <h1>{message}</h1>;
}`}</code></pre>
                <p>Content does not change unless you rebuild.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-repeat"></i> 4. Incremental Static Regeneration (ISR)</h3>
                <ul>
                  <li>Combination of SSG + SSR.</li>
                  <li>Page is built at <strong>build time</strong>, but <strong>updates after a set interval</strong>.</li>
                  <li>Great for e-commerce, blogs with frequent updates.</li>
                </ul>
                <p>Example:</p>
                <pre className="mb-3"><code>{`// pages/isr.js
export async function getStaticProps() {
  return {
    props: { time: new Date().toISOString() },
    revalidate: 10, // Page regenerates every 10s
  };
}

export default function ISRPage({ time }) {
  return <h1>Last Updated: {time}</h1>;
}`}</code></pre>
                <p>First request → static HTML, After 10s → page auto-regenerates.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-compare"></i> Comparison</h3>
                <table className="rendering-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Rendered At</th>
                      <th>SEO</th>
                      <th>Performance</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>CSR</strong></td>
                      <td>Browser</td>
                      <td>Weak</td>
                      <td>Fast after load</td>
                      <td>Dashboards, SPAs</td>
                    </tr>
                    <tr>
                      <td><strong>SSR</strong></td>
                      <td>Server (Every request)</td>
                      <td>Good</td>
                      <td>Medium</td>
                      <td>News, Weather</td>
                    </tr>
                    <tr>
                      <td><strong>SSG</strong></td>
                      <td>Build Time</td>
                      <td>Excellent</td>
                      <td>Super Fast</td>
                      <td>Blogs, Docs</td>
                    </tr>
                    <tr>
                      <td><strong>ISR</strong></td>
                      <td>Build + Revalidate</td>
                      <td>Good</td>
                      <td>Fast</td>
                      <td>E-commerce, CMS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="data-fetching" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> Data Fetching</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <ul>
                  <li><strong>Data fetching</strong> in Next.js is the process of retrieving data (from APIs, databases, etc.) to render pages.</li>
                  <li>Next.js supports <strong>multiple ways of fetching data</strong> depending on the rendering method (CSR, SSR, SSG, ISR).</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-ol"></i> Data Fetching Methods</h3>
                
                <h4 className="h5 mt-3">1. Fetching in App Router (Next.js 13+)</h4>
                <ul>
                  <li>In the <strong>app/ directory</strong>, you can directly use fetch() in <strong>Server Components</strong>.</li>
                </ul>
                <p>Example:</p>
                <pre className="mb-3"><code>{`// app/posts/page.js
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`}</code></pre>
                <p>By default, fetch() caches the data (like SSG).</p>
                
                <h4 className="h5 mt-3">2. No-Cache Fetching (SSR-like)</h4>
                <pre className="mb-3"><code>{`const res = await fetch("https://api.example.com/data", {
  cache: "no-store", // Don't cache
});`}</code></pre>
                
                <h4 className="h5 mt-3">3. Revalidate Fetching (ISR-like)</h4>
                <pre className="mb-3"><code>{`const res = await fetch("https://api.example.com/data", {
  next: { revalidate: 60 }, // Revalidate every 60s
});`}</code></pre>
                
                <h4 className="h5 mt-3">4. getStaticProps (SSG) – Pages Router</h4>
                <pre className="mb-3"><code>{`// pages/posts.js
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return { props: { posts } };
}

export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`}</code></pre>
                
                <h4 className="h5 mt-3">5. getServerSideProps (SSR) – Pages Router</h4>
                <pre className="mb-3"><code>{`// pages/posts.js
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return { props: { posts } };
}

export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`}</code></pre>
                
                <h4 className="h5 mt-3">6. Client-Side Data Fetching (CSR)</h4>
                <pre className="mb-3"><code>{`"use client";
import { useState, useEffect } from "react";

export default function ClientPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-hourglass-split"></i> Loading States</h3>
                <p>In App Router, you can create loading.js:</p>
                <pre className="mb-3"><code>{`// app/posts/loading.js
export default function Loading() {
  return <p>Loading posts...</p>;
}`}</code></pre>
                <p>It automatically shows while data is being fetched.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-exclamation-triangle"></i> Error Handling</h3>
                <p>Create error.js:</p>
                <pre className="mb-3"><code>{`// app/posts/error.js
"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Failed to load posts</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}`}</code></pre>
              </div>
            </section>

            <section id="styling" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-palette"></i> Styling</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <ul>
                  <li>Next.js supports multiple styling methods:</li>
                  <ol>
                    <li>Global CSS</li>
                    <li>CSS Modules</li>
                    <li>Tailwind CSS</li>
                    <li>Styled Components</li>
                    <li>CSS-in-JS Libraries</li>
                  </ol>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-filetype-css"></i> 1. Global CSS</h3>
                <p>Import a global CSS file in your layout or _app.js:</p>
                <pre className="mb-3"><code>{`// app/globals.css
body {
  font-family: sans-serif;
  margin: 0;
}

.header {
  background: blue;
  color: white;
}`}</code></pre>
                
                <pre className="mb-3"><code>{`// app/layout.js
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header className="header">My Site</header>
        {children}
      </body>
    </html>
  );
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-filetype-css"></i> 2. CSS Modules</h3>
                <p>Create a file with .module.css suffix:</p>
                <pre className="mb-3"><code>{`// components/Button.module.css
.button {
  background: blue;
  color: white;
  padding: 10px 20px;
}`}</code></pre>
                
                <pre className="mb-3"><code>{`// components/Button.js
import styles from "./Button.module.css";

export default function Button() {
  return <button className={styles.button}>Click Me</button>;
}`}</code></pre>
                <p>CSS Modules are scoped (no class name collisions).</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-wind"></i> 3. Tailwind CSS</h3>
                <p>Install and configure Tailwind (as shown in setup section).</p>
                <pre className="mb-3"><code>{`export default function Home() {
  return (
    <h1 className="text-3xl font-bold text-blue-600">
      Hello Tailwind
    </h1>
  );
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-brush"></i> 4. Styled Components</h3>
                <p>Install styled-components:</p>
                <pre className="mb-3"><code>{`npm install styled-components`}</code></pre>
                
                <p>Create a styled component:</p>
                <pre className="mb-3"><code>{`"use client";
import styled from "styled-components";

const Button = styled.button\`
  background: blue;
  color: white;
  padding: 10px 20px;
\`;

export default function StyledButton() {
  return <Button>Click Me</Button>;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-filetype-scss"></i> 5. SASS/SCSS Support</h3>
                <p>Install SASS:</p>
                <pre className="mb-3"><code>{`npm install sass`}</code></pre>
                
                <p>Create .scss files:</p>
                <pre className="mb-3"><code>{`// styles/variables.scss
$primary-color: blue;

// styles/Button.module.scss
@import "variables";

.button {
  background: $primary-color;
}`}</code></pre>
              </div>
            </section>

            <section id="api-routes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-hdd-stack"></i> API Routes</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <ul>
                  <li><strong>API Routes</strong> allow you to create backend endpoints inside your Next.js app.</li>
                  <li>You can build a <strong>full-stack app</strong> without a separate backend server.</li>
                  <li>Files inside <strong>pages/api/</strong> or <strong>app/api/</strong> become API endpoints.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code"></i> Pages Router API Example</h3>
                <pre className="mb-3"><code>{`// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from API!" });
}`}</code></pre>
                <p>Now /api/hello returns JSON.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code"></i> App Router API Example</h3>
                <pre className="mb-3"><code>{`// app/api/hello/route.js
export async function GET() {
  return Response.json({ message: "Hello from App Router API" });
}`}</code></pre>
                <p>Same endpoint, different structure.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code"></i> HTTP Methods</h3>
                <p>You can handle different HTTP methods:</p>
                <pre className="mb-3"><code>{`// app/api/users/route.js
export async function GET() {
  // Get users
  return Response.json(users);
}

export async function POST(request) {
  const body = await request.json();
  // Create user
  return Response.json({ success: true });
}

export async function PUT(request) {
  // Update user
}

export async function DELETE(request) {
  // Delete user
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code"></i> Dynamic API Routes</h3>
                <pre className="mb-3"><code>{`// pages/api/users/[id].js
export default function handler(req, res) {
  const { id } = req.query;
  res.json({ user: \`User \${id}\` });
}`}</code></pre>
                <p>{`/api/users/123 → { user: "User 123" }`}</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-database"></i> Connecting to a Database</h3>
                <pre className="mb-3"><code>{`// app/api/users/route.js
import { sql } from "@vercel/postgres";

export async function GET() {
  const { rows } = await sql\`SELECT * FROM users\`;
  return Response.json(rows);
}`}</code></pre>
              </div>
            </section>

            <section id="authentication" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> Authentication</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <ul>
                  <li><strong>Authentication</strong> is the process of verifying a user's identity.</li>
                  <li>Next.js supports multiple auth strategies:</li>
                  <ol>
                    <li>Cookie-based sessions</li>
                    <li>JWT (JSON Web Tokens)</li>
                    <li>OAuth (Google, GitHub, etc.)</li>
                    <li>NextAuth.js (popular library)</li>
                  </ol>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-key"></i> Using NextAuth.js</h3>
                <p>Install NextAuth.js:</p>
                <pre className="mb-3"><code>{`npm install next-auth`}</code></pre>
                
                <p>Create API route:</p>
                <pre className="mb-3"><code>{`// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});`}</code></pre>
                
                <p>Add environment variables:</p>
                <pre className="mb-3"><code>{`// .env.local
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret`}</code></pre>
                
                <p>Use in components:</p>
                <pre className="mb-3"><code>{`"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        Signed in as {session.user.email} 
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return <button onClick={() => signIn()}>Sign in</button>;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-shield"></i> Protecting Routes</h3>
                <p>Use getServerSideProps or middleware:</p>
                <pre className="mb-3"><code>{`// pages/protected.js
import { getServerSession } from "next-auth/next";

export async function getServerSideProps(context) {
  const session = await getServerSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return { props: { session } };
}

export default function Protected({ session }) {
  return <h1>Protected Page for {session.user.email}</h1>;
}`}</code></pre>
              </div>
            </section>

            <section id="database" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-server"></i> Database Integration</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <ul>
                  <li>Next.js can connect to any database (SQL or NoSQL).</li>
                  <li>Popular choices:</li>
                  <ul>
                    <li>PostgreSQL (with Prisma ORM)</li>
                    <li>MongoDB (with Mongoose)</li>
                    <li>MySQL</li>
                    <li>SQLite</li>
                    <li>Supabase (Backend as a Service)</li>
                  </ul>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-database"></i> Example: MongoDB with Mongoose</h3>
                <p>Install Mongoose:</p>
                <pre className="mb-3"><code>{`npm install mongoose`}</code></pre>
                
                <p>Create a model:</p>
                <pre className="mb-3"><code>{`// lib/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;`}</code></pre>
                
                <p>Define a schema:</p>
                <pre className="mb-3"><code>{`// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);`}</code></pre>
                
                <p>Use in API route:</p>
                <pre className="mb-3"><code>{`// pages/api/users.js
import dbConnect from "../../lib/mongodb";
import User from "../../models/User";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const users = await User.find({});
    res.json(users);
  }

  if (req.method === "POST") {
    const user = await User.create(req.body);
    res.json(user);
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-database"></i> Example: PostgreSQL with Prisma</h3>
                <p>Install Prisma:</p>
                <pre className="mb-3"><code>{`npm install prisma --save-dev
npx prisma init`}</code></pre>
                
                <p>Configure schema:</p>
                <pre className="mb-3"><code>{`// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}`}</code></pre>
                
                <p>Generate client:</p>
                <pre className="mb-3"><code>{`npx prisma generate
npx prisma db push`}</code></pre>
                
                <p>Use in API:</p>
                <pre className="mb-3"><code>{`// pages/api/users.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    res.json(users);
  }
}`}</code></pre>
              </div>
            </section>

            <section id="state-management" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> State Management</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <ul>
                  <li><strong>State management</strong> is how you manage data (state) across components.</li>
                  <li>Next.js supports all React state management solutions:</li>
                  <ol>
                    <li>useState (local state)</li>
                    <li>useContext (global state)</li>
                    <li>Redux</li>
                    <li>Zustand</li>
                    <li>Recoil</li>
                  </ol>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left-right"></i> useState (Local State)</h3>
                <pre className="mb-3"><code>{`"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left-right"></i> useContext (Global State)</h3>
                <pre className="mb-3"><code>{`"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}`}</code></pre>
                
                <p>Wrap your app:</p>
                <pre className="mb-3"><code>{`// app/layout.js
import { AppProvider } from "./context";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}`}</code></pre>
                
                <p>Use in components:</p>
                <pre className="mb-3"><code>{`"use client";
import { useAppContext } from "./context";

export default function UserProfile() {
  const { user } = useAppContext();

  return <div>{user ? user.name : "Not logged in"}</div>;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left-right"></i> Zustand (Lightweight State)</h3>
                <p>Install Zustand:</p>
                <pre className="mb-3"><code>{`npm install zustand`}</code></pre>
                
                <p>Create a store:</p>
                <pre className="mb-3"><code>{`// store/useStore.js
import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));`}</code></pre>
                
                <p>Use in components:</p>
                <pre className="mb-3"><code>{`"use client";
import { useStore } from "../store/useStore";

export default function Counter() {
  const { count, increment } = useStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`}</code></pre>
              </div>
            </section>

            <section id="images-fonts" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-image"></i> Images & Fonts</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <ul>
                  <li>Next.js provides optimized components for images and fonts.</li>
                  <li>These components improve performance and SEO.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-image"></i> Image Optimization</h3>
                <p>Use the built-in Image component:</p>
                <pre className="mb-3"><code>{`import Image from "next/image";

export default function MyImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={500}
      height={300}
      priority // Optional: for above-the-fold images
    />
  );
}`}</code></pre>
                <p>Benefits:</p>
                <ul>
                  <li>Lazy loading</li>
                  <li>Responsive images</li>
                  <li>WebP format (if supported)</li>
                  <li>Placeholder while loading</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-fonts"></i> Font Optimization</h3>
                <p>Use next/font to optimize Google Fonts or custom fonts:</p>
                <pre className="mb-3"><code>{`// app/layout.js
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}`}</code></pre>
                <p>Benefits:</p>
                <ul>
                  <li>Self-hosting fonts (faster)</li>
                  <li>No layout shift</li>
                  <li>Better performance</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-image"></i> Remote Images</h3>
                <p>For images from external domains, configure next.config.js:</p>
                <pre className="mb-3"><code>{`// next.config.js
module.exports = {
  images: {
    domains: ["example.com"],
  },
};`}</code></pre>
                
                <p>Then use:</p>
                <pre className="mb-3"><code>{`<Image
  src="https://example.com/image.jpg"
  alt="Remote Image"
  width={500}
  height={300}
/>`}</code></pre>
              </div>
            </section>

            <section id="deployment" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cloud-upload"></i> Deployment</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bookmark-check"></i> Definition</h3>
                <ul>
                  <li>Deployment is the process of making your Next.js app available on the internet.</li>
                  <li>Popular platforms:</li>
                  <ol>
                    <li>Vercel (recommended)</li>
                    <li>Netlify</li>
                    <li>Railway</li>
                    <li>AWS</li>
                    <li>Heroku</li>
                  </ol>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-cloud"></i> Deploying to Vercel</h3>
                <p>Vercel is the company behind Next.js → best integration.</p>
                
                <h4 className="h5 mt-3">Steps:</h4>
                <ol>
                  <li>Push your code to GitHub</li>
                  <li>Go to vercel.com</li>
                  <li>Sign in with GitHub</li>
                  <li>Click "New Project"</li>
                  <li>Import your repository</li>
                  <li>Vercel auto-detects Next.js</li>
                  <li>Click "Deploy"</li>
                </ol>
                <p>Your app will be live in minutes!</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> Environment Variables</h3>
                <p>Add environment variables in Vercel dashboard:</p>
                <pre className="mb-3"><code>{`// .env.local (for development)
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret

// In Vercel: Settings → Environment Variables`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-repeat"></i> Custom Domain</h3>
                <p>In Vercel project settings:</p>
                <ol>
                  <li>Go to "Domains"</li>
                  <li>Add your domain</li>
                  <li>Update DNS records as instructed</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-slash"></i> Build Command</h3>
                <p>Vercel automatically runs:</p>
                <pre className="mb-3"><code>{`npm run build`}</code></pre>
                <p>Which creates:</p>
                <ul>
                  <li>Static HTML files (for SSG)</li>
                  <li>Serverless functions (for API routes)</li>
                  <li>Optimized bundles</li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Next.js Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default NextJsNotes;