import React from 'react';

function LaravelNotes() {
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
          .table-compare {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1rem;
          }
          .table-compare th, .table-compare td {
            border: 1px solid #dee2e6;
            padding: 0.75rem;
            text-align: left;
          }
          .table-compare th {
            background-color: #f8f9fa;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-php"></i> Laravel Notes</h1>
          <p className="lead">Your Comprehensive Guide to Laravel PHP Framework</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#features"><i className="bi bi-star"></i> Key Features</a>
              <a className="nav-link" href="#mvc"><i className="bi bi-diagram-3"></i> MVC Architecture</a>
              <a className="nav-link" href="#installation"><i className="bi bi-download"></i> Installation</a>
              <a className="nav-link" href="#routing"><i className="bi bi-signpost"></i> Routing</a>
              <a className="nav-link" href="#controllers"><i className="bi bi-cpu"></i> Controllers</a>
              <a className="nav-link" href="#views"><i className="bi bi-file-earmark-text"></i> Views & Blade</a>
              <a className="nav-link" href="#eloquent"><i className="bi bi-database"></i> Eloquent ORM</a>
              <a className="nav-link" href="#migrations"><i className="bi bi-arrow-repeat"></i> Migrations</a>
              <a className="nav-link" href="#forms"><i className="bi bi-input-cursor-text"></i> Forms & Validation</a>
              <a className="nav-link" href="#auth"><i className="bi bi-shield-lock"></i> Authentication</a>
              <a className="nav-link" href="#files"><i className="bi bi-file-earmark-arrow-up"></i> File Uploads</a>
              <a className="nav-link" href="#api"><i className="bi bi-plug"></i> API Development</a>
              <a className="nav-link" href="#middleware"><i className="bi bi-filter"></i> Middleware</a>
              <a className="nav-link" href="#errors"><i className="bi bi-bug"></i> Error Handling</a>
              <a className="nav-link" href="#artisan"><i className="bi bi-terminal"></i> Artisan Commands</a>
              <a className="nav-link" href="#projects"><i className="bi bi-lightbulb"></i> Project Ideas</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Laravel</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is Laravel?</h3>
                <ul>
                  <li><strong>Laravel is a free, open-source PHP web framework</strong> designed for building modern web applications easily and efficiently.</li>
                  <li>It follows the <strong>MVC (Model-View-Controller)</strong> architecture.</li>
                  <li>Developed by: <em>Taylor Otwell</em></li>
                  <li>First released: <em>2011</em></li>
                  <li>Current version (as of 2025): <em>Laravel 12</em></li>
                </ul>
              </div>
            </section>

            <section id="features" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-star"></i> Key Features of Laravel</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-3"></i> MVC Pattern</h3>
                <p>Separates business logic (Model), UI (View), and controller (routes/actions).</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-database"></i> Eloquent ORM</h3>
                <p>Elegant way to interact with databases using models.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-text"></i> Blade Templating</h3>
                <p>Powerful templating engine with clean syntax.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-signpost"></i> Routing System</h3>
                <p>Easy to define clean, RESTful routes.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-terminal"></i> Artisan CLI</h3>
                <p>Command line tool to automate tasks (e.g., migration, controller creation).</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-shield"></i> Security</h3>
                <p>Built-in protection from SQL injection, CSRF, and XSS.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-person-check"></i> Authentication</h3>
                <p>User registration, login, password reset – built-in support.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-clock"></i> Task Scheduling</h3>
                <p>Schedule jobs like sending emails, backups using schedule() function.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-plug"></i> RESTful API Ready</h3>
                <p>Easy to create APIs with JSON responses.</p>
              </div>
            </section>

            <section id="mvc" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> Laravel Architecture - MVC</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-box"></i> 1. Model (M)</h3>
                <p>Represents the database/table. Handles business logic.</p>
                <p><strong>Example:</strong> User.php model for users table.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-eye"></i> 2. View (V)</h3>
                <p>The UI seen by users. Written using Blade templates.</p>
                <p><strong>Example:</strong> welcome.blade.php</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-controller"></i> 3. Controller (C)</h3>
                <p>Handles requests, processes data from model and returns view.</p>
                <p><strong>Example:</strong> UserController.php</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-repeat"></i> Flow</h3>
                <p>User requests → Route → Controller → Model → View</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-compare"></i> Laravel vs Other PHP Frameworks</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Laravel</th>
                      <th>CodeIgniter</th>
                      <th>Symfony</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Templating</td>
                      <td>Blade</td>
                      <td>PHP Views</td>
                      <td>Twig</td>
                    </tr>
                    <tr>
                      <td>ORM</td>
                      <td>Eloquent ORM</td>
                      <td>Query Builder</td>
                      <td>Doctrine ORM</td>
                    </tr>
                    <tr>
                      <td>CLI Tool</td>
                      <td>Artisan</td>
                      <td>CLI</td>
                      <td>Console</td>
                    </tr>
                    <tr>
                      <td>Routing</td>
                      <td>Simple & RESTful</td>
                      <td>Basic</td>
                      <td>Advanced</td>
                    </tr>
                    <tr>
                      <td>Learning Curve</td>
                      <td>Medium</td>
                      <td>Easy</td>
                      <td>High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check-circle"></i> Why Use Laravel?</h3>
                <ul>
                  <li>Rapid development with less boilerplate</li>
                  <li>Built-in tools for routing, authentication, and mail</li>
                  <li>Secure and scalable</li>
                  <li>Active community + tons of packages</li>
                </ul>
              </div>
            </section>

            <section id="installation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-download"></i> Installation and Setup</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-check"></i> Requirements Before Installing Laravel</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Tool</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PHP</td>
                      <td>Version 8.1 or higher</td>
                    </tr>
                    <tr>
                      <td>Composer</td>
                      <td>PHP dependency manager</td>
                    </tr>
                    <tr>
                      <td>Web Server</td>
                      <td>Apache / Nginx / Laravel built-in server</td>
                    </tr>
                    <tr>
                      <td>Database</td>
                      <td>MySQL, SQLite, PostgreSQL, etc.</td>
                    </tr>
                    <tr>
                      <td>Node.js + NPM (optional)</td>
                      <td>For frontend scaffolding (like Laravel Mix)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-terminal"></i> Step-by-Step Installation</h3>
                <h4 className="h5 mt-3">Step 1: Install Composer</h4>
                <p>Check if it's installed:</p>
                <pre><code>composer -V</code></pre>
                <p>If not, download from <a href="https://getcomposer.org" target="_blank">https://getcomposer.org</a></p>
                
                <h4 className="h5 mt-3">Step 2: Create Laravel Project</h4>
                <pre><code>composer create-project laravel/laravel project-name</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>composer create-project laravel/laravel blog</code></pre>
                
                <h4 className="h5 mt-3">Step 3: Move into Project Directory</h4>
                <pre><code>cd blog</code></pre>
                
                <h4 className="h5 mt-3">Step 4: Run Development Server</h4>
                <pre><code>php artisan serve</code></pre>
                <p>This will serve your app at: <a href="http://127.0.0.1:8000" target="_blank">http://127.0.0.1:8000</a></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-folder"></i> Laravel Directory Structure (Basic Overview)</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Folder</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>app/</td>
                      <td>Contains controllers, models, etc.</td>
                    </tr>
                    <tr>
                      <td>routes/</td>
                      <td>All route files (like web.php, api.php)</td>
                    </tr>
                    <tr>
                      <td>resources/</td>
                      <td>Views (Blade), CSS, JS</td>
                    </tr>
                    <tr>
                      <td>public/</td>
                      <td>Entry point (index.php), images, assets</td>
                    </tr>
                    <tr>
                      <td>database/</td>
                      <td>Migrations, seeders</td>
                    </tr>
                    <tr>
                      <td>config/</td>
                      <td>Configuration files</td>
                    </tr>
                    <tr>
                      <td>.env</td>
                      <td>Environment-specific variables (DB, MAIL, etc.)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-server"></i> Laravel Built-in Server vs XAMPP</h3>
                <ul>
                  <li>You can use <code>php artisan serve</code> for quick dev environment.</li>
                  <li>Or set up using XAMPP:
                    <ul>
                      <li>Place project inside htdocs</li>
                      <li>Access via <code>http://localhost/project-name/public</code></li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> .env File Configuration</h3>
                <pre><code>{`APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:...
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=`}</code></pre>
                <p>Update DB settings based on your system.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-terminal"></i> Artisan Commands (Basic)</h3>
                <p>Laravel comes with a CLI tool called <strong>Artisan</strong>.</p>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Command</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>php artisan serve</code></td>
                      <td>Start dev server</td>
                    </tr>
                    <tr>
                      <td><code>php artisan make:controller</code></td>
                      <td>Create controller</td>
                    </tr>
                    <tr>
                      <td><code>php artisan make:model</code></td>
                      <td>Create model</td>
                    </tr>
                    <tr>
                      <td><code>php artisan migrate</code></td>
                      <td>Run DB migrations</td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="h5 mt-3">Output Example</h4>
                <p>After serving, browser will show:</p>
                <p><strong>Laravel Welcome Page</strong></p>
                <p>URL: <a href="http://127.0.0.1:8000" target="_blank">http://127.0.0.1:8000</a></p>
                <p>You can now build your app starting from routes/web.php.</p>
              </div>
            </section>

            <section id="routing" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-signpost"></i> Routing in Laravel</h2>
              <p>Routing is the process of directing a user's request (URL) to a specific controller or function in your app.</p>
              <p>Laravel's routes are defined in the file:</p>
              <ul>
                <li><code>routes/web.php</code> - For web (frontend) routes</li>
                <li><code>routes/api.php</code> - For API (backend) routes</li>
              </ul>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. Basic Routing</h3>
                <pre><code>{`Route::get('/', function () {
    return view('welcome');
});`}</code></pre>
                <p><strong>Explanation:</strong></p>
                <ul>
                  <li><code>Route::get()</code> — method (GET request)</li>
                  <li><code>'/'</code> — URL path</li>
                  <li><code>function()</code> — closure that returns view or data</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. Route Methods</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>Route::get()</code></td>
                      <td>For fetching a page</td>
                    </tr>
                    <tr>
                      <td><code>Route::post()</code></td>
                      <td>For form submission</td>
                    </tr>
                    <tr>
                      <td><code>Route::put()</code></td>
                      <td>For updating data</td>
                    </tr>
                    <tr>
                      <td><code>Route::delete()</code></td>
                      <td>For deleting data</td>
                    </tr>
                    <tr>
                      <td><code>Route::match()</code></td>
                      <td>For multiple methods</td>
                    </tr>
                    <tr>
                      <td><code>Route::any()</code></td>
                      <td>Accepts all methods</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>Example:</strong></p>
                <pre><code>{`Route::post('/submit', [FormController::class, 'submit']);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. Route Parameters</h3>
                <p><strong>Required Parameter:</strong></p>
                <pre><code>{`Route::get('/user/\${id}', function ($id) {
    return "User ID: ". $id;
});`}</code></pre>
                <p><strong>Optional Parameter:</strong></p>
                <pre><code>{`Route::get('/user/{name?}', function ($name = 'Guest') {
    return "Hello ". $name;
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. Named Routes</h3>
                <p>You can give a name to a route and reuse it in views or redirects.</p>
                <pre><code>{`Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');`}</code></pre>
                <p><strong>Redirect using:</strong></p>
                <pre><code>{`return redirect()->route('dashboard');`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> 5. Route Groups</h3>
                <p>Group routes using middleware, prefix, namespace, etc.</p>
                <pre><code>{`Route::prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return 'Admin Dashboard';
    });
});`}</code></pre>
                <p><strong>Output URL:</strong> /admin/dashboard</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> 6. Route Middleware</h3>
                <p>Middleware filters requests before reaching controller.</p>
                <pre><code>{`Route::get('/profile', function () {
    // Only authenticated users
})->middleware('auth');`}</code></pre>
                <p>Laravel includes built-in middlewares like auth, verified, guest, etc.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-7-circle"></i> 7. Route Caching</h3>
                <p>Used in production for better performance.</p>
                <pre><code>{`php artisan route:cache    // Cache all routes
php artisan route:clear    // Clear cached routes`}</code></pre>
                <p><strong>Example: web.php</strong></p>
                <pre><code>{`use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return 'About Page';
});

Route::get('/contact', [ContactController::class, 'index']);`}</code></pre>
              </div>
            </section>

            <section id="controllers" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cpu"></i> Controllers in Laravel</h2>
              <p>Controllers are used to <strong>handle the logic</strong> of requests. Instead of writing everything in routes/web.php, you move logic into a separate file (controller) for better structure and reusability.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. Creating a Controller</h3>
                <p>Use Artisan command:</p>
                <pre><code>{`php artisan make:controller PageController`}</code></pre>
                <p>This creates: <code>app/Http/Controllers/PageController.php</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. Basic Controller Example</h3>
                <pre><code>{`namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class PageController extends Controller
{
    public function home()
    {
        return view('home');
    }

    public function about()
    {
        return "This is the About page.";
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. Routing with Controller</h3>
                <p>In routes/web.php:</p>
                <pre><code>{`use App\\Http\\Controllers\\PageController;

Route::get('/', [PageController::class, 'home']);
Route::get('/about', [PageController::class, 'about']);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. Resource Controller</h3>
                <p>Use this to auto-generate common CRUD methods.</p>
                <pre><code>{`php artisan make:controller ProductController --resource`}</code></pre>
                <p>Creates functions like:</p>
                <pre><code>{`public function index() // GET /products
public function create() // GET /products/create
public function store(Request $request) // POST /products
public function show($id) // GET /products/$id
public function edit($id) // GET /products/$id/edit
public function update(Request $request, $id) // PUT/PATCH
public function destroy($id) // DELETE /products/$id`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> 5. Register Resource Routes</h3>
                <pre><code>{`Route::resource('products', ProductController::class);`}</code></pre>
                <p>This one line creates <strong>all 7 routes</strong> for a CRUD system!</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> 6. Dependency Injection in Controller</h3>
                <p>You can inject services, requests, or models:</p>
                <pre><code>{`public function store(Request $request)
{
    $data = $request->all();
    // Save to DB...
}`}</code></pre>
                <p>You can even inject custom services:</p>
                <pre><code>{`public function index(MyService $service)
{
    return $service->doSomething();
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check-circle"></i> Benefits of Using Controllers</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Advantage</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Reusability</td>
                      <td>Code organized in classes and methods</td>
                    </tr>
                    <tr>
                      <td>Scalability</td>
                      <td>Easy to manage large apps</td>
                    </tr>
                    <tr>
                      <td>Clean Code</td>
                      <td>Keeps route file short and neat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="views" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-text"></i> Views & Blade Templating in Laravel</h2>
              <p>Laravel uses a powerful templating engine called <strong>Blade</strong> to build clean and dynamic views (frontend screens).</p>
              <p>Blade files have the <code>.blade.php</code> extension and are stored in:</p>
              <pre><code>resources/views/</code></pre>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. Creating a Blade View</h3>
                <p><strong>Example: resources/views/home.blade.php</strong></p>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>Home Page</title>
</head>
<body>
    <h1>Welcome to Laravel, {{ $name }}</h1>
</body>
</html>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. Returning a View from Controller</h3>
                <pre><code>{`return view('home', ['name' => 'Mugilvannan']);`}</code></pre>
                <p>This will display: <code>"Welcome to Laravel, Mugilvannan"</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. Blade Syntax</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Blade Syntax</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Echo variable</td>
                      <td><code>{`{ $name }`}</code></td>
                    </tr>
                    <tr>
                      <td>If condition</td>
                      <td><code>@if, @elseif, @else, @endif</code></td>
                    </tr>
                    <tr>
                      <td>Loop</td>
                      <td><code>@for, @foreach, @while, @endforeach</code></td>
                    </tr>
                    <tr>
                      <td>Comments</td>
                      <td><code>{`{-- This is a comment --}`}</code></td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>Example:</strong></p>
                <pre><code>{`@if($age >= 18)
<p>You are eligible.</p>
@else
<p>Not eligible.</p>
@endif`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. Blade Layouts (Master Template)</h3>
                <p>You can create a master layout:</p>
                <p><strong>resources/views/layouts/app.blade.php</strong></p>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>My App - @yield('title')</title>
</head>
<body>
    <div class="container">
        @yield('content')
    </div>
</body>
</html>`}</code></pre>
                <p>Then extend it:</p>
                <p><strong>resources/views/home.blade.php</strong></p>
                <pre><code>{`@extends('layouts.app')

@section('title', 'Home')

@section('content')
<h1>This is Home Page</h1>
@endsection`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> 5. Including Blade Files</h3>
                <p>You can split UI into components and include them:</p>
                <p><strong>Example:</strong></p>
                <pre><code>{`@include('partials.navbar')`}</code></pre>
                <p>This will include the file: <code>resources/views/partials/navbar.blade.php</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> 6. Blade Components (Optional - Advanced)</h3>
                <p>Reusable component like button, card, etc.</p>
                <p>Create component:</p>
                <pre><code>{`php artisan make:component Alert`}</code></pre>
                <p>Use in blade:</p>
                <pre><code>{`<x-alert type="error" message="Invalid input"/>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-7-circle"></i> 7. Passing Data to Views</h3>
                <p><strong>From Controller:</strong></p>
                <pre><code>{`return view('profile', ['user' => $user]);`}</code></pre>
                <p><strong>In Blade:</strong></p>
                <pre><code>{`<h2>{{ $user->name }}</h2>`}</code></pre>
              </div>
            </section>

            <section id="eloquent" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> Eloquent ORM & Models</h2>
              <p>Eloquent is Laravel's built-in Object Relational Mapper (ORM) that lets you interact with your database using PHP classes instead of raw SQL.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. What is a Model?</h3>
                <p>A Model in Laravel represents a table in your database.</p>
                <p><strong>Example:</strong> A User model connects to the users table.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. Creating a Model</h3>
                <p>Use Artisan command:</p>
                <pre><code>{`php artisan make:model Product`}</code></pre>
                <p>Creates: <code>app/Models/Product.php</code></p>
                <p>To generate model + migration together:</p>
                <pre><code>{`php artisan make:model Product -m`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. Eloquent Model Structure</h3>
                <pre><code>{`namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Product extends Model
{
    // Table name (optional if it's not 'products')
    protected $table = 'products';
    
    // Fillable fields (mass assignment)
    protected $fillable = ['name', 'price', 'quantity'];
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. CRUD Using Eloquent</h3>
                <p><strong>Create (Insert)</strong></p>
                <pre><code>{`Product::create([
    'name' => 'Laptop',
    'price' => 40000,
    'quantity' => 2
]);`}</code></pre>
                
                <p><strong>Read (Select)</strong></p>
                <pre><code>{`$products = Product::all();    // Get all
$product = Product::find(1);    // Find by ID
$product = Product::where('price', '>', '1000')->get();`}</code></pre>
                
                <p><strong>Update</strong></p>
                <pre><code>{`$product = Product::find(1);
$product->price = 45000;
$product->save();`}</code></pre>
                
                <p><strong>Delete</strong></p>
                <pre><code>{`$product = Product::find(1);
$product->delete();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> 5. Database Configuration</h3>
                <p>In <code>.env</code> file:</p>
                <pre><code>{`DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=`}</code></pre>
                <p>Run migration to create tables:</p>
                <pre><code>{`php artisan migrate`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> 6. Model Relationships</h3>
                <p>Laravel makes relationships easy:</p>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Relationship</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>One to One</td>
                      <td>User → Profile</td>
                    </tr>
                    <tr>
                      <td>One to Many</td>
                      <td>Post → many Comments</td>
                    </tr>
                    <tr>
                      <td>Many to Many</td>
                      <td>Student ↔ Course</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>Example: One to Many (Post - Comments)</strong></p>
                <pre><code>{`// Post.php
public function comments()
{
    return $this->hasMany(Comment::class);
}

// Comment.php
public function post()
{
    return $this->belongsTo(Post::class);
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-7-circle"></i> 7. Mass Assignment Protection</h3>
                <p>To allow bulk inserts, use:</p>
                <pre><code>{`protected $fillable = ['name', 'price'];`}</code></pre>
                <p>Or block all:</p>
                <pre><code>{`protected $guarded = [];`}</code></pre>
              </div>
            </section>

            <section id="migrations" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> Database Migrations & Seeders</h2>
              <p>Laravel provides <strong>Migrations</strong> to manage your database schema and <strong>Seeders</strong> to insert test data — all using code!</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. What is a Migration?</h3>
                <p>A migration is a PHP file that defines the structure of a database table.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. Create a Migration</h3>
                <pre><code>{`php artisan make:migration create_products_table`}</code></pre>
                <p>This creates a file in: <code>database/migrations/</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. Writing Migration Code</h3>
                <pre><code>{`public function up()
{
    Schema::create('products', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->decimal('price', 8, 2);
        $table->integer('quantity');
        $table->timestamps();
    });
}

// down() function rolls back the table:
public function down()
{
    Schema::dropIfExists('products');
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. Run Migrations</h3>
                <pre><code>{`php artisan migrate`}</code></pre>
                <p><strong>Rollback:</strong></p>
                <pre><code>{`php artisan migrate:rollback`}</code></pre>
                <p><strong>Reset All:</strong></p>
                <pre><code>{`php artisan migrate:reset`}</code></pre>
                <p><strong>Fresh Start (drop all + re-run):</strong></p>
                <pre><code>{`php artisan migrate:fresh`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> 5. Add New Column (Update Table)</h3>
                <pre><code>{`php artisan make:migration add_status_to_products_table`}</code></pre>
                <p>Then in the migration file:</p>
                <pre><code>{`public function up()
{
    Schema::table('products', function (Blueprint $table) {
        $table->string('status')->default('available');
    });
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> 6. What is a Seeder?</h3>
                <p>Seeders are used to insert sample or test data into tables.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-7-circle"></i> 7. Create a Seeder</h3>
                <pre><code>{`php artisan make:seeder ProductSeeder`}</code></pre>
                <p>Inside <code>database/seeders/ProductSeeder.php</code>:</p>
                <pre><code>{`use App\\Models\\Product;

public function run()
{
    Product::create([
        'name' => 'Keyboard',
        'price' => 1200,
        'quantity' => 10
    ]);
}`}</code></pre>
                <p>Run the seeder:</p>
                <pre><code>{`php artisan db:seed --class=ProductSeeder`}</code></pre>
                <p>Or seed all:</p>
                <pre><code>{`php artisan db:seed`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-8-circle"></i> 8. Faker for Dummy Data</h3>
                <p>You can use Faker to generate fake data:</p>
                <pre><code>{`public function run()
{
    \\App\\Models\\Product::factory()->count(10)->create();
}`}</code></pre>
                <p>Don't forget to create a factory:</p>
                <pre><code>{`php artisan make:factory ProductFactory --model=Product`}</code></pre>
                <p>Then define fake data inside:</p>
                <pre><code>{`public function definition()
{
    return [
        'name' => $this->faker->word,
        'price' => $this->faker->randomFloat(2, 100, 1000),
        'quantity' => $this->faker->numberBetween(1, 50),
    ];
}`}</code></pre>
              </div>
            </section>

            <section id="forms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-input-cursor-text"></i> Form Handling & Validation in Laravel</h2>
              <p>In any Laravel app, you'll collect data from users using forms and validate them before storing it in the database.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. HTML Form in Blade</h3>
                <p>You can create a form in a Blade file like this:</p>
                <pre><code>{`<form action="{{ route('product.store') }}" method="POST">
    @csrf <!-- CSRF protection -->
    <label>Name:</label>
    <input type="text" name="name">
    <label>Price:</label>
    <input type="number" name="price">
    <button type="submit">Save</button>
</form>`}</code></pre>
                <p>Always include <code>@csrf</code> token for security.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. Handling Form Data in Controller</h3>
                <p>In <code>ProductController.php</code>:</p>
                <pre><code>{`public function store(Request $request)
{
    // Validate data
    $request->validate([
        'name' => 'required|string|max:255',
        'price' => 'required|numeric|min:1'
    ]);

    // Save to database
    Product::create([
        'name' => $request->name,
        'price' => $request->price
    ]);

    return redirect()->back()->with('success', 'Product added!');
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. Validation Rules in Laravel</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Rule</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>required</code></td>
                      <td>Field must be filled</td>
                    </tr>
                    <tr>
                      <td><code>string</code></td>
                      <td>Only string input</td>
                    </tr>
                    <tr>
                      <td><code>numeric</code></td>
                      <td>Number only</td>
                    </tr>
                    <tr>
                      <td><code>email</code></td>
                      <td>Must be a valid email format</td>
                    </tr>
                    <tr>
                      <td><code>max:255</code></td>
                      <td>Max length 255</td>
                    </tr>
                    <tr>
                      <td><code>min:3</code></td>
                      <td>Minimum value or length</td>
                    </tr>
                    <tr>
                      <td><code>unique:table</code></td>
                      <td>Unique value in DB table</td>
                    </tr>
                    <tr>
                      <td><code>confirmed</code></td>
                      <td>For passwords with confirmation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. Showing Validation Errors in Blade</h3>
                <pre><code>{`@if ($errors->any())
<ul>
    @foreach ($errors->all() as $error)
    <li>{{ $error }}</li>
    @endforeach
</ul>
@endif`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> 5. Displaying Old Input After Error</h3>
                <pre><code>{`<input type="text" name="name" value="{{ old('name') }}">`}</code></pre>
                <p>So if the form fails validation, the previous data stays in the input field.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> 6. Flash Message (Success Message)</h3>
                <p><strong>In controller:</strong></p>
                <pre><code>{`return redirect()->back()->with('success', 'Product added!');`}</code></pre>
                <p><strong>In Blade:</strong></p>
                <pre><code>{`@if(session('success'))
<p>{{ session('success') }}</p>
@endif`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-7-circle"></i> 7. Custom Request Validation (Optional)</h3>
                <p>Create a custom request class:</p>
                <pre><code>{`php artisan make:request StoreProductRequest`}</code></pre>
                <p>Inside <code>StoreProductRequest.php</code>:</p>
                <pre><code>{`public function rules()
{
    return [
        'name' => 'required|string',
        'price' => 'required|numeric|min:1'
    ];
}`}</code></pre>
                <p>Use in controller:</p>
                <pre><code>{`public function store(StoreProductRequest $request)
{
    Product::create($request->validated());
}`}</code></pre>
              </div>
            </section>

            <section id="auth" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> Authentication in Laravel (Login & Registration)</h2>
              <p>Laravel provides built-in support for authentication like login, register, logout, and password hashing.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. Laravel Breeze (Simple Auth Starter)</h3>
                <p>For basic login and register system:</p>
                <pre><code>{`composer require laravel/breeze --dev
php artisan breeze:install
npm install && npm run dev
php artisan migrate`}</code></pre>
                <p>Then run:</p>
                <pre><code>{`php artisan serve`}</code></pre>
                <p>You now get:</p>
                <ul>
                  <li><code>/register</code></li>
                  <li><code>/login</code></li>
                  <li><code>/logout</code></li>
                  <li>Authenticated dashboard (<code>/dashboard</code>)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. Auth Routes</h3>
                <p>Breeze automatically sets up routes:</p>
                <pre><code>{`// in routes/web.php
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth']);`}</code></pre>
                <p>This route is protected — users must be logged in.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. Manual Authentication (Optional Way)</h3>
                <p>You can manually create:</p>
                <ul>
                  <li>A User model</li>
                  <li>Registration/Login forms</li>
                  <li>Auth logic in the controller</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. Registration Example</h3>
                <p><strong>Blade Form (register.blade.php)</strong></p>
                <pre><code>{`<form method="POST" action="{{ route('register') }}">
    @csrf
    <input type="text" name="name">
    <input type="email" name="email">
    <input type="password" name="password">
    <input type="password" name="password_confirmation">
    <button type="submit">Register</button>
</form>`}</code></pre>
                <p><strong>Controller (RegisterController)</strong></p>
                <pre><code>{`use App\\Models\\User;
use Illuminate\\Support\\Facades\\Hash;

public function store(Request $request)
{
    $request->validate([
        'name' => 'required',
        'email' => 'required|email|unique:users',
        'password' => 'required|confirmed|min:6'
    ]);

    User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password)
    ]);
    return redirect()->route('login');
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> 5. Login Example</h3>
                <pre><code>{`if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
    return redirect()->intended('dashboard');
} else {
    return back()->with('error', 'Invalid Credentials');
}`}</code></pre>
                <p>To log out:</p>
                <pre><code>{`Auth::logout();
return redirect('/');`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> 6. Middleware Protection</h3>
                <p>Protect routes with auth middleware:</p>
                <pre><code>{`Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-7-circle"></i> 7. Auth Facades & Helpers</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Get logged-in user</td>
                      <td><code>Auth::user()</code> or <code>{`auth()->user()`}</code></td>
                    </tr>
                    <tr>
                      <td>Check if logged in</td>
                      <td><code>Auth::check()</code></td>
                    </tr>
                    <tr>
                      <td>Log out</td>
                      <td><code>Auth::logout()</code></td>
                    </tr>
                    <tr>
                      <td>Redirect to intended URL</td>
                      <td><code>{`redirect()->intended()`}</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-8-circle"></i> 8. User Migration Structure (default)</h3>
                <pre><code>{`$table->string('name');
$table->string('email')->unique();
$table->timestamp('email_verified_at')->nullable();
$table->string('password');`}</code></pre>
              </div>
            </section>

            <section id="files" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-arrow-up"></i> File Uploads & Storage</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. File Upload Handling in Laravel</h3>
                <p><strong>Blade Form Example</strong></p>
                <pre><code>{`<form action="{{ route('upload') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <input type="file" name="file">
    <button type="submit">Upload</button>
</form>`}</code></pre>
                <p><strong>Route</strong></p>
                <pre><code>{`Route::post('/upload', [UploadController::class, 'store'])->name('upload');`}</code></pre>
                <p><strong>Controller Logic</strong></p>
                <pre><code>{`public function store(Request $request)
{
    $request->validate([
        'file' => 'required|mimes:jpg,png,pdf|max:2048'
    ]);
    $file = $request->file('file');
    $filename = time().'.'.$file->getClientOriginalName();
    $file->storeAs('uploads', $filename, 'public');
    return back()->with('success', 'File Uploaded Successfully!');
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. Storage System in Laravel</h3>
                <ul>
                  <li>Laravel uses the Flysystem PHP package under the hood.</li>
                  <li>All file storage is handled in <code>storage/app</code> folder.</li>
                  <li>Laravel provides access via different disks configured in:</li>
                </ul>
                <pre><code>{`// config/filesystems.php
'disks' => [
    'local',  // Default
    'public',  // For browser accessible files
    's3',  // For AWS S3 cloud storage
],`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. Public vs Private Disk</h3>
                <p><strong>Public Disk</strong></p>
                <ul>
                  <li>Accessible from the browser</li>
                  <li>Store path: <code>storage/app/public</code></li>
                  <li>Access path: <code>public/storage</code></li>
                  <li>Command to create link:</li>
                </ul>
                <pre><code>{`php artisan storage:link`}</code></pre>
                <p><strong>Store File Example:</strong></p>
                <pre><code>{`$file->storeAs('uploads', $filename, 'public');`}</code></pre>
                
                <p><strong>Private Disk</strong></p>
                <ul>
                  <li>Not accessible directly from browser</li>
                  <li>Safer for confidential files</li>
                  <li>To access: use a download controller method</li>
                </ul>
                <pre><code>{`Storage::disk('local')->put('private/data.txt', 'Top secret data');`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. File Validation</h3>
                <p>Use Laravel's built-in validation:</p>
                <pre><code>{`$request->validate([
    'file' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048',
]);`}</code></pre>
                <p><strong>Common Rules</strong></p>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Rule</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>required</code></td>
                      <td>Must upload a file</td>
                    </tr>
                    <tr>
                      <td><code>file</code></td>
                      <td>Must be a valid file</td>
                    </tr>
                    <tr>
                      <td><code>mimes:jpg,png</code></td>
                      <td>Only allow specific file types</td>
                    </tr>
                    <tr>
                      <td><code>max:2048</code></td>
                      <td>Max size in KB (2 MB here)</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>Bonus: Access Uploaded File</strong></p>
                <pre><code>{`<img src="{{ asset('storage/uploads/'.$filename) }}" width="150">`}</code></pre>
              </div>
            </section>

            <section id="api" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-plug"></i> API Development in Laravel</h2>
              <p>This topic includes:</p>
              <ul>
                <li>Creating APIs in Laravel</li>
                <li>API Resources & Transformers</li>
                <li>Authentication with Passport or Sanctum</li>
                <li>API Versioning</li>
              </ul>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. Creating APIs with Laravel</h3>
                <p><strong>Step 1: API Route Setup (routes/api.php)</strong></p>
                <pre><code>{`Route::apiResource('products', ProductController::class);`}</code></pre>
                
                <p><strong>Step 2: Create API Controller</strong></p>
                <pre><code>{`php artisan make:controller ProductController --api`}</code></pre>
                <p><code>--api</code> flag removes create, edit methods (used only for web).</p>
                
                <p><strong>Step 3: Return JSON Response</strong></p>
                <pre><code>{`public function index()
{
    return response()->json(Product::all());
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. API Resources & Transformers</h3>
                <p>Helps you return clean, structured, formatted JSON output.</p>
                
                <p><strong>Step 1: Create Resource</strong></p>
                <pre><code>{`php artisan make:resource ProductResource`}</code></pre>
                
                <p><strong>Step 2: Use it in Controller</strong></p>
                <pre><code>{`use App\\Http\\Resources\\ProductResource;

public function show($id)
{
    $product = Product::find($id);
    return new ProductResource($product);
}`}</code></pre>
                
                <p><strong>Step 3: Define JSON Structure</strong></p>
                <p>In <code>ProductResource.php</code>:</p>
                <pre><code>{`public function toArray($request)
{
    return [
        'id' => $this->id,
        'title' => $this->name,
        'price' => $this->price,
        'created' => $this->created_at->diffForHumans(),
    ];
}`}</code></pre>
                <p>Now your output is controlled and clean.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. API Authentication: Sanctum or Passport</h3>
                <p><strong>Sanctum (Recommended for SPA & simple token auth)</strong></p>
                <p><strong>Step-by-Step:</strong></p>
                <pre><code>{`composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\\Sanctum\\SanctumServiceProvider"
php artisan migrate`}</code></pre>
                <p>In <code>app/Http/Kernel.php</code>, add:</p>
                <pre><code>{`'api' => [
    \\Laravel\\Sanctum\\Http\\Middleware\\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,
],`}</code></pre>
                <p>In User model:</p>
                <pre><code>{`use Laravel\\Sanctum\\HasApiTokens;
class User extends Authenticatable {
    use HasApiTokens, Notifiable;
}`}</code></pre>
                <p>Create token after login:</p>
                <pre><code>{`$user = User::where('email', $request->email)->first();
$token = $user->createToken('mytoken')->plainTextToken;`}</code></pre>
                <p>Use this token in Postman under Authorization → Bearer Token.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. API Versioning</h3>
                <p>Used when maintaining v1, v2 of your API separately.</p>
                <p><strong>Example:</strong></p>
                <pre><code>{`// routes/api.php
Route::prefix('v1')->group(function () {
    Route::apiResource('products', ProductController::class);
});

Route::prefix('v2')->group(function () {
    Route::apiResource('products', ProductV2Controller::class);
});`}</code></pre>
                <p><strong>Access via Postman:</strong></p>
                <ul>
                  <li><code>http://localhost:8000/api/v1/products</code></li>
                  <li><code>http://localhost:8000/api/v2/products</code></li>
                </ul>
              </div>
            </section>

            <section id="middleware" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-filter"></i> Middleware in Laravel</h2>
              <p>Middleware acts like a gatekeeper between the request and response. It can inspect, modify, or block the request.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. What is Middleware?</h3>
                <ul>
                  <li>Middleware is used to filter HTTP requests entering your application.</li>
                  <li>Examples:
                    <ul>
                      <li>Check if user is authenticated</li>
                      <li>Add logging or timing logic</li>
                      <li>Check user's locale or language</li>
                    </ul>
                  </li>
                </ul>
                <p><strong>Example: Built-in middleware</strong></p>
                <ul>
                  <li><code>auth</code> – restrict access to authenticated users</li>
                  <li><code>verified</code> – only allow verified users</li>
                  <li><code>throttle</code> – rate limit API calls</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. Creating Custom Middleware</h3>
                <p><strong>Step 1: Create Middleware</strong></p>
                <pre><code>{`php artisan make:middleware CheckAdmin`}</code></pre>
                
                <p><strong>Step 2: Write Logic in app/Http/Middleware/CheckAdmin.php</strong></p>
                <pre><code>{`public function handle($request, Closure $next)
{
    if (auth()->user() && auth()->user()->is_admin) {
        return $next($request); // allow request to continue
    }
    return response()->json(['error' => 'Unauthorized'], 403);
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. Registering Middleware</h3>
                <p>Add it in <code>app/Http/Kernel.php</code></p>
                <pre><code>{`protected $routeMiddleware = [
    // ...
    'check.admin' => \\App\\Http\\Middleware\\CheckAdmin::class,
];`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. Applying Middleware to Routes</h3>
                <p><strong>Single Route</strong></p>
                <pre><code>{`Route::get('/admin/dashboard', [AdminController::class, 'index'])->middleware('check.admin');`}</code></pre>
                
                <p><strong>Group Middleware</strong></p>
                <pre><code>{`Route::middleware(['auth', 'check.admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'index']);
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> 5. Useful Built-in Middleware</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Middleware</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>auth</code></td>
                      <td>Authenticate user</td>
                    </tr>
                    <tr>
                      <td><code>guest</code></td>
                      <td>Redirect if already logged in</td>
                    </tr>
                    <tr>
                      <td><code>verified</code></td>
                      <td>Email verified only</td>
                    </tr>
                    <tr>
                      <td><code>throttle</code></td>
                      <td>Rate limit API requests</td>
                    </tr>
                    <tr>
                      <td><code>signed</code></td>
                      <td>Ensure signed URLs only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> Real-World Use Cases</h3>
                <ul>
                  <li>Block non-admins from admin panel</li>
                  <li>Restrict certain pages to logged-in users</li>
                  <li>Force email verification before continuing</li>
                </ul>
              </div>
            </section>

            <section id="errors" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bug"></i> Error Handling & Debugging in Laravel</h2>
              <p>Error handling in Laravel is powerful and developer-friendly, with features for catching, logging, and customizing errors.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. Try-Catch for Exception Handling</h3>
                <p>Use try-catch when you expect a certain block of code might throw an exception:</p>
                <pre><code>{`try {
    $user = User::findOrFail($id);
} catch (Exception $e) {
    return response()->json(['error' => 'User Not Found'], 404);
}`}</code></pre>
                <p>Good for database operations, API calls, file uploads, etc.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. Custom Error Pages (404, 500, etc.)</h3>
                <p>Laravel shows default error pages. You can customize them.</p>
                <p><strong>Location:</strong> <code>resources/views/errors/</code></p>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Error Code</th>
                      <th>Description</th>
                      <th>Filename</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>404</td>
                      <td>Not Found</td>
                      <td>404.blade.php</td>
                    </tr>
                    <tr>
                      <td>500</td>
                      <td>Server Error</td>
                      <td>500.blade.php</td>
                    </tr>
                    <tr>
                      <td>403</td>
                      <td>Unauthorized</td>
                      <td>403.blade.php</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>Example:</strong></p>
                <pre><code>{`<!-- resources/views/errors/404.blade.php -->
<h2>Oops! Page Not Found</h2>
<a href="/">Back to Home</a>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. Global Error Handling</h3>
                <p>Laravel catches most exceptions via:</p>
                <p><code>app/Exceptions/Handler.php</code></p>
                <p>You can customize the render() method:</p>
                <pre><code>{`public function render($request, Throwable $exception)
{
    if ($exception instanceof \\Illuminate\\Database\\Eloquent\\ModelNotFoundException) {
        return response()->json(['message' => 'Record not found!'], 404);
    }
    return parent::render($request, $exception);
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. Logging Errors</h3>
                <p>Laravel uses Monolog under the hood.</p>
                <p><strong>Log files:</strong> <code>storage/logs/laravel.log</code></p>
                <p><strong>Log Examples:</strong></p>
                <pre><code>{`use Illuminate\\Support\\Facades\\Log;

Log::info('Something happened');
Log::warning('Something strange happened');
Log::error('Something failed!');`}</code></pre>
                <p>You can also log arrays or exceptions:</p>
                <pre><code>{`Log::error('User fetch failed', ['id' => $userId]);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> 5. Debug Mode</h3>
                <p>In <code>.env</code> file:</p>
                <pre><code>{`APP_DEBUG=true // Show error stack trace (for local)
APP_DEBUG=false // Hide stack trace (for production)`}</code></pre>
              </div>
            </section>

            <section id="artisan" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-terminal"></i> Laravel Artisan Commands</h2>
              <p>Artisan is Laravel's powerful command-line tool for automating tasks like creating controllers, models, running migrations, and more.</p>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list"></i> Most Common Artisan Commands</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Command</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>php artisan list</code></td>
                      <td>Show all Artisan commands</td>
                    </tr>
                    <tr>
                      <td><code>php artisan help migrate</code></td>
                      <td>Help for specific command</td>
                    </tr>
                    <tr>
                      <td><code>php artisan route:list</code></td>
                      <td>List all routes</td>
                    </tr>
                    <tr>
                      <td><code>php artisan make:controller</code></td>
                      <td>Create a controller</td>
                    </tr>
                    <tr>
                      <td><code>php artisan make:model</code></td>
                      <td>Create a model</td>
                    </tr>
                    <tr>
                      <td><code>php artisan make:migration</code></td>
                      <td>Create migration file</td>
                    </tr>
                    <tr>
                      <td><code>php artisan migrate</code></td>
                      <td>Run migrations</td>
                    </tr>
                    <tr>
                      <td><code>php artisan db:seed</code></td>
                      <td>Run seeders</td>
                    </tr>
                    <tr>
                      <td><code>php artisan tinker</code></td>
                      <td>Open REPL for Laravel</td>
                    </tr>
                    <tr>
                      <td><code>php artisan serve</code></td>
                      <td>Start local dev server</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="projects" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-lightbulb"></i> Laravel Mini Project Ideas</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> 1. Student Management System</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Add/edit/delete student records</li>
                  <li>Class & section assignment</li>
                  <li>Attendance tracking</li>
                  <li>File uploads for report cards</li>
                  <li>Admin authentication & dashboard</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> 2. Job Portal System</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Admin: Post jobs, approve/reject companies</li>
                  <li>Company: Register, post jobs, view applicants</li>
                  <li>User: Register, upload resume, apply for jobs</li>
                  <li>Email notifications</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> 3. Food Order App (Admin Panel)</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Admin: Add/Update/Delete food items</li>
                  <li>Category wise menu</li>
                  <li>Order management panel</li>
                  <li>Payment integration (dummy or Razorpay)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> 4. Blog System with Admin Panel</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Create, edit, delete blog posts</li>
                  <li>Comments & likes</li>
                  <li>Tags, categories</li>
                  <li>Admin dashboard</li>
                  <li>Public view and user authentication</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> 5. E-Commerce Cart System</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Product listing & filtering</li>
                  <li>Add to cart, checkout</li>
                  <li>Payment gateway integration</li>
                  <li>Admin: manage products, orders, users</li>
                  <li>Order tracking</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> 6. Online Voting System</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>User registration</li>
                  <li>Voting eligibility checks</li>
                  <li>Result chart (with Chart.js)</li>
                  <li>Admin panel to create elections</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-7-circle"></i> 7. Support Ticket System</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Users raise support tickets</li>
                  <li>Admin replies and closes tickets</li>
                  <li>Priority labels (High, Medium, Low)</li>
                  <li>Email notifications</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-8-circle"></i> 8. Event Booking System</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Create/manage events</li>
                  <li>User registration for events</li>
                  <li>Seat booking system</li>
                  <li>QR code generation for ticket</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-9-circle"></i> 9. Inventory Management System</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Product stock tracking</li>
                  <li>Supplier & customer database</li>
                  <li>Sales and purchase record</li>
                  <li>Low-stock alert system</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-10-circle"></i> 10. Course Enrollment System</h3>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Admin adds courses</li>
                  <li>Students enroll and make payments</li>
                  <li>View registered course list</li>
                  <li>Certificates (PDF generation)</li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Laravel Notes &copy; 2025 | Based on original content by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default LaravelNotes;