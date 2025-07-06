import React from 'react';

function AspNetCoreNotes() {
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
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
          }
          .comparison-table th, .comparison-table td {
            border: 1px solid #dee2e6;
            padding: 8px;
            text-align: left;
          }
          .comparison-table th {
            background-color: #f8f9fa;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-cs"></i> ASP.NET Core Notes</h1>
          <p className="lead">Comprehensive Guide to ASP.NET Core Development</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#features"><i className="bi bi-star"></i> Key Features</a>
              <a className="nav-link" href="#comparison"><i className="bi bi-arrow-left-right"></i> ASP.NET Core vs Framework</a>
              <a className="nav-link" href="#project-structure"><i className="bi bi-folder"></i> Project Structure</a>
              <a className="nav-link" href="#mvc"><i className="bi bi-layers"></i> MVC Pattern</a>
              <a className="nav-link" href="#model-binding"><i className="bi bi-bounding-box"></i> Model Binding</a>
              <a className="nav-link" href="#di"><i className="bi bi-plug"></i> Dependency Injection</a>
              <a className="nav-link" href="#ef-core"><i className="bi bi-database"></i> Entity Framework Core</a>
              <a className="nav-link" href="#web-api"><i className="bi bi-server"></i> Web API</a>
              <a className="nav-link" href="#middleware"><i className="bi bi-gear"></i> Middleware</a>
              <a className="nav-link" href="#auth"><i className="bi bi-shield-lock"></i> Authentication</a>
              <a className="nav-link" href="#configuration"><i className="bi bi-sliders"></i> Configuration</a>
              <a className="nav-link" href="#razor-mvc-blazor"><i className="bi bi-code-slash"></i> Razor vs MVC vs Blazor</a>
              <a className="nav-link" href="#deployment"><i className="bi bi-cloud-upload"></i> Deployment</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to ASP.NET Core</h2>
              
              <div className="property-card">
                <h3 className="h4">What is ASP.NET Core?</h3>
                <ul>
                  <li>ASP.NET Core is a <strong>cross-platform, open-source</strong>, high-performance framework for building modern web applications, APIs, and microservices</li>
                  <li>It is the <strong>next generation of ASP.NET</strong>, designed to run on multiple platforms like Windows, Linux, and macOS</li>
                  <li>Unified framework that supports MVC, Web API, and Razor Pages in one</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Hello World Example (Minimal API - .NET 6+)</h3>
                <pre><code>{`var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello, ASP.NET Core!");
app.Run();`}</code></pre>
                <p>This demonstrates the minimal hosting model introduced in .NET 6+</p>
              </div>
            </section>

            <section id="features" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-star"></i> Key Features of ASP.NET Core</h2>
              
              <div className="table-responsive">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cross-Platform</td>
                      <td>Runs on Windows, Linux, and macOS</td>
                    </tr>
                    <tr>
                      <td>High Performance</td>
                      <td>Built for scalability and performance</td>
                    </tr>
                    <tr>
                      <td>Unified Framework</td>
                      <td>Supports MVC, Web API, Razor Pages in one</td>
                    </tr>
                    <tr>
                      <td>Built-in DI</td>
                      <td>Dependency Injection is built-in</td>
                    </tr>
                    <tr>
                      <td>Secure</td>
                      <td>Supports Identity, Authentication, and Authorization</td>
                    </tr>
                    <tr>
                      <td>Modular</td>
                      <td>Uses NuGet packages; you only add what you need</td>
                    </tr>
                    <tr>
                      <td>Minimal Hosting Model</td>
                      <td>From .NET 6+, simplified Program.cs</td>
                    </tr>
                    <tr>
                      <td>Testable</td>
                      <td>Easy to test because of clean separation of concerns</td>
                    </tr>
                    <tr>
                      <td>Cloud-Ready</td>
                      <td>Easily deployable to Azure and Docker</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="comparison" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-left-right"></i> ASP.NET Core vs ASP.NET Framework</h2>
              
              <div className="table-responsive">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>ASP.NET Framework</th>
                      <th>ASP.NET Core</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Platform</td>
                      <td>Windows only</td>
                      <td>Cross-platform</td>
                    </tr>
                    <tr>
                      <td>Open Source</td>
                      <td>Partially</td>
                      <td>Fully open-source</td>
                    </tr>
                    <tr>
                      <td>Performance</td>
                      <td>Slower</td>
                      <td>Much faster</td>
                    </tr>
                    <tr>
                      <td>Hosting</td>
                      <td>IIS only</td>
                      <td>IIS, Kestrel, or self-hosted</td>
                    </tr>
                    <tr>
                      <td>Project Types</td>
                      <td>Web Forms, MVC</td>
                      <td>MVC, Razor Pages, Blazor, API</td>
                    </tr>
                    <tr>
                      <td>Dependency Injection</td>
                      <td>Limited</td>
                      <td>Built-in support</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card mt-4">
                <h3 className="h4">.NET Core vs .NET 5/6+</h3>
                <ul>
                  <li>.NET Core was the earlier cross-platform version</li>
                  <li>Starting from .NET 5, Microsoft unified everything under ".NET", replacing .NET Framework and .NET Core</li>
                  <li>Example: ASP.NET Core 6 = ASP.NET Core built on top of .NET 6</li>
                </ul>
              </div>
            </section>

            <section id="project-structure" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-folder"></i> Project Structure and Startup Flow</h2>
              
              <div className="property-card">
                <h3 className="h4">Default Project Structure (ASP.NET Core MVC)</h3>
                <pre><code>{`MyWebApp/
├── Controllers/       # Handles incoming requests
├── Models/           # Business models / data classes
├── Views/            # UI (Razor files)
├── wwwroot/          # Static files (CSS, JS, Images)
├── Program.cs        # Entry point (Main method)
├── appsettings.json  # Configuration settings
└── MyWebApp.csproj   # Project file`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Program.cs (Minimal Hosting in .NET 6+)</h3>
                <pre><code>{`var builder = WebApplication.CreateBuilder(args);

// Register services here
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure middleware
if (!app.Environment.IsDevelopment()) {
    app.UseExceptionHandler("/Home/Error");
}

app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

// Define route pattern
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();`}</code></pre>
                <p>Key Parts:</p>
                <ul>
                  <li><code>builder.Services</code> → Register services (DI container)</li>
                  <li><code>app.Use...()</code> → Middleware pipeline</li>
                  <li><code>app.MapControllerRoute()</code> → Defines default URL pattern</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Routing Flow Example</h3>
                <p>URL: <code>https://localhost:5001/product/details/2</code></p>
                <p>Pattern: <code>{`{controller=Product}/{action=Details}/{id=2}`}</code></p>
                <p>This calls:</p>
                <pre><code>{`public class ProductController : Controller {
    public IActionResult Details(int id) {
        // logic to fetch product by id
        return View();
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">appsettings.json Example</h3>
                <pre><code>{`{
  "Logging": {
    "LogLevel": {
      "Default": "Information"
    }
  },
  "ConnectionStrings": {
    "DefaultConnection": "Server=.;Database=MyDB;Trusted_Connection=True;"
  }
}`}</code></pre>
                <p>Usage in code:</p>
                <pre><code>{`var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");`}</code></pre>
              </div>
            </section>

            <section id="mvc" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layers"></i> ASP.NET Core MVC</h2>
              
              <div className="property-card">
                <h3 className="h4">What is MVC?</h3>
                <p>MVC stands for:</p>
                <ul>
                  <li><strong>M</strong> – Model (Data)</li>
                  <li><strong>V</strong> – View (UI)</li>
                  <li><strong>C</strong> – Controller (Logic)</li>
                </ul>
                <p>It is a design pattern that separates an application into 3 main components to make development easier, testable, and scalable.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">MVC Flow Diagram</h3>
                <pre><code>{`📌 Request
↓
[Controller] → calls → [Model] → returns data
↓
[View] ← renders UI using Model data`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Creating MVC Components</h3>
                
                <h4 className="h5 mt-3">1. Controller</h4>
                <pre><code>{`public class HomeController : Controller {
    public IActionResult Index() {
        return View();
    }
    
    public IActionResult About() {
        return View();
    }
}`}</code></pre>
                <ul>
                  <li>Controller class must inherit from <code>Controller</code></li>
                  <li>Each method = action (maps to URL path)</li>
                  <li><code>return View()</code> → looks for a .cshtml file in <code>Views/Home/Index.cshtml</code></li>
                </ul>
                
                <h4 className="h5 mt-3">2. View (Razor)</h4>
                <p>Located in <code>{`Views/{ControllerName}/{ActionName}.cshtml`}</code></p>
                <p>Uses Razor syntax to write HTML + C# together</p>
                <pre><code>{`@* Views/Home/Index.cshtml *@
@{
    ViewData["Title"] = "Home Page";
}

<h1>Welcome to ASP.NET Core MVC!</h1>`}</code></pre>
                
                <h4 className="h5 mt-3">3. Model</h4>
                <pre><code>{`public class Product {
    public int Id { get; set; }
    public string Name { get; set; }
    public double Price { get; set; }
}`}</code></pre>
                <p>Used in the controller and passed to the view:</p>
                <pre><code>{`public IActionResult Details() {
    var product = new Product { Id = 1, Name = "Mouse", Price = 299.00 };
    return View(product);
}`}</code></pre>
                <p>Strongly Typed View:</p>
                <pre><code>{`@* Views/Home/Details.cshtml *@
@model Product

<h2>@Model.Name - $@Model.Price</h2>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Passing Data to Views</h3>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Method</th>
                        <th>Use</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ViewBag</td>
                        <td>Dynamic object</td>
                        <td><code>ViewBag.Name = "John";</code></td>
                      </tr>
                      <tr>
                        <td>ViewData</td>
                        <td>Dictionary</td>
                        <td><code>ViewData["Name"] = "John";</code></td>
                      </tr>
                      <tr>
                        <td>Model</td>
                        <td>Strongly typed</td>
                        <td><code>return View(product);</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Return Types in Controller</h3>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Return Type</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>View()</td>
                        <td>Return a Razor view</td>
                      </tr>
                      <tr>
                        <td>RedirectToAction()</td>
                        <td>Redirect to another action</td>
                      </tr>
                      <tr>
                        <td>Json()</td>
                        <td>Return JSON (used in APIs)</td>
                      </tr>
                      <tr>
                        <td>Content()</td>
                        <td>Return raw string</td>
                      </tr>
                      <tr>
                        <td>File()</td>
                        <td>Return file download</td>
                      </tr>
                      <tr>
                        <td>NotFound()</td>
                        <td>404 error</td>
                      </tr>
                      <tr>
                        <td>BadRequest()</td>
                        <td>400 error</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="model-binding" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bounding-box"></i> Model Binding and Validation</h2>
              
              <div className="property-card">
                <h3 className="h4">What is Model Binding?</h3>
                <p>Model binding in ASP.NET Core automatically maps HTTP request data (like form inputs, query strings, route values, or JSON) to C# model objects.</p>
                
                <h4 className="h5 mt-3">Example: Binding Form Data to Model</h4>
                <pre><code>{`// Model: User.cs
public class User {
    public string Name { get; set; }
    public int Age { get; set; }
}

// Controller
[HttpPost]
public IActionResult Submit(User user) {
    // user.Name and user.Age are auto-filled from form
    return View(user);
}

// View: Submit.cshtml
<form method="post" asp-action="Submit">
    <input type="text" name="Name"/>
    <input type="number" name="Age"/>
    <button type="submit">Submit</button>
</form>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Model Validation</h3>
                <p>ASP.NET Core provides a <strong>built-in validation system using data annotations</strong>.</p>
                
                <h4 className="h5 mt-3">Common Data Annotation Attributes</h4>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Attribute</th>
                        <th>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>[Required]</td>
                        <td>Field must not be empty</td>
                      </tr>
                      <tr>
                        <td>[StringLength]</td>
                        <td>Set min and max string length</td>
                      </tr>
                      <tr>
                        <td>[Range]</td>
                        <td>Set numeric range</td>
                      </tr>
                      <tr>
                        <td>[EmailAddress]</td>
                        <td>Validate email format</td>
                      </tr>
                      <tr>
                        <td>[Compare]</td>
                        <td>Compare two fields (e.g., passwords)</td>
                      </tr>
                      <tr>
                        <td>[RegularExpression]</td>
                        <td>Match pattern</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className="h5 mt-3">Example with Validation</h4>
                <pre><code>{`public class User {
    [Required(ErrorMessage = "Name is required")]
    public string Name { get; set; }

    [Range(18, 60, ErrorMessage = "Age must be between 18 and 60")]
    public int Age { get; set; }

    [EmailAddress(ErrorMessage = "Invalid email format")]
    public string Email { get; set; }
}

// Controller
[HttpPost]
public IActionResult Register(User user) {
    if (ModelState.IsValid) {
        // Proceed
        return View("Success");
    }
    else {
        // Return form with errors
        return View(user);
    }
}`}</code></pre>
                
                <h4 className="h5 mt-3">Razor View: Display Validation Errors</h4>
                <pre><code>{`@model User

<form method="post">
  <label>Name:</label>
  <input asp-for="Name" />
  <span asp-validation-for="Name" class="text-danger"></span>

  <label>Age:</label>
  <input asp-for="Age" />
  <span asp-validation-for="Age" class="text-danger"></span>

  <label>Email:</label>
  <input asp-for="Email" />
  <span asp-validation-for="Email" class="text-danger"></span>

  <button type="submit">Register</button>
</form>

@section Scripts {
    <partial name="_ValidationScriptsPartial" />
}`}</code></pre>
                
                <h4 className="h5 mt-3">Client-Side Validation</h4>
                <p>ASP.NET Core uses <strong>jQuery Unobtrusive Validation</strong> for client-side checks.</p>
                <p>Make sure these are included in the layout file:</p>
                <pre><code>{`<script src="~/lib/jquery-validation/dist/jquery.validate.min.js"></script>
<script src="~/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js"></script>`}</code></pre>
              </div>
            </section>

            <section id="di" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-plug"></i> Dependency Injection (DI) in ASP.NET Core</h2>
              
              <div className="property-card">
                <h3 className="h4">What is Dependency Injection?</h3>
                <ul>
                  <li>Dependency Injection is a design pattern used to implement loose coupling between classes</li>
                  <li>ASP.NET Core has built-in support for DI throughout the application</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why use DI?</h3>
                <ul>
                  <li>Improves <strong>testability</strong></li>
                  <li>Encourages <strong>modular and maintainable</strong> code</li>
                  <li>Follows <strong>SOLID principles</strong> (especially "D" – Dependency Inversion)</li>
                  <li>Makes it easy to replace services without changing the consumer</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common DI Lifetime Scopes</h3>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Lifetime</th>
                        <th>Scope</th>
                        <th>When to use</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Singleton</td>
                        <td>Single instance for the entire app</td>
                        <td>App-wide settings or caches</td>
                      </tr>
                      <tr>
                        <td>Scoped</td>
                        <td>One instance per request</td>
                        <td>Database context</td>
                      </tr>
                      <tr>
                        <td>Transient</td>
                        <td>New instance every time</td>
                        <td>Lightweight, stateless services</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Basic DI Flow in ASP.NET Core</h3>
                <ol>
                  <li><strong>Create Interface</strong></li>
                  <li><strong>Create Class that Implements Interface</strong></li>
                  <li><strong>Register in Program.cs</strong></li>
                  <li><strong>Inject it in a Controller or another class</strong></li>
                </ol>
                
                <h4 className="h5 mt-3">Example: DI in Action</h4>
                <pre><code>{`// 1. Create Interface
public interface IMessageService {
    string GetMessage();
}

// 2. Implement the Service
public class MessageService : IMessageService {
    public string GetMessage() {
        return "Hello from DI!";
    }
}

// 3. Register Service in Program.cs
builder.Services.AddScoped<IMessageService, MessageService>();

// 4. Inject and Use in Controller
public class HomeController : Controller {
    private readonly IMessageService _messageService;
    
    public HomeController(IMessageService messageService) {
        _messageService = messageService;
    }
    
    public IActionResult Index() {
        var message = _messageService.GetMessage();
        ViewBag.Message = message;
        return View();
    }
}

// 5. Display in View
<h2>@ViewBag.Message</h2>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Time Example: Injecting DbContext</h3>
                <pre><code>{`// Register DbContext in Program.cs
builder.Services.AddDbContext<MyDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Now you can inject MyDbContext directly into controllers or services
public class ProductController : Controller {
    private readonly MyDbContext _context;
    
    public ProductController(MyDbContext context) {
        _context = context;
    }
    
    public IActionResult Index() {
        var products = _context.Products.ToList();
        return View(products);
    }
}`}</code></pre>
              </div>
            </section>

            <section id="ef-core" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> Entity Framework Core (EF Core)</h2>
              
              <div className="property-card">
                <h3 className="h4">What is EF Core?</h3>
                <ul>
                  <li><strong>Entity Framework Core</strong> is an <strong>Object Relational Mapper (ORM)</strong> that allows you to interact with a database using C# objects instead of SQL queries</li>
                  <li>It simplifies data access code and supports <strong>LINQ</strong>, <strong>migrations</strong>, and <strong>Code-First</strong> or <strong>Database-First</strong> development</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">EF Core Workflow (Code-First Approach)</h3>
                <ol>
                  <li>Define Model</li>
                  <li>Configure DbContext</li>
                  <li>Create DB via Migration</li>
                  <li>Perform CRUD</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Step-by-Step Setup</h3>
                
                <h4 className="h5 mt-3">1. Install EF Core NuGet Packages</h4>
                <pre><code>{`dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools`}</code></pre>
                
                <h4 className="h5 mt-3">2. Define the Model Class</h4>
                <pre><code>{`public class Product {
    public int Id { get; set; }
    public string Name { get; set; }
    public double Price { get; set; }
}`}</code></pre>
                
                <h4 className="h5 mt-3">3. Create the DbContext</h4>
                <pre><code>{`public class AppDbContext : DbContext {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}
    
    public DbSet<Product> Products { get; set; }
}`}</code></pre>
                
                <h4 className="h5 mt-3">4. Configure Connection in Program.cs</h4>
                <pre><code>{`builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));`}</code></pre>
                <p>Add connection string in appsettings.json:</p>
                <pre><code>{`"ConnectionStrings": {
    "DefaultConnection": "Server=.;Database=MyStoreDB;Trusted_Connection=True;"
}`}</code></pre>
                
                <h4 className="h5 mt-3">5. Add Migration and Create DB</h4>
                <pre><code>{`dotnet ef migrations add InitialCreate
dotnet ef database update`}</code></pre>
                <p>This will create a database based on your model.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Performing CRUD Operations</h3>
                
                <h4 className="h5 mt-3">Create (Insert)</h4>
                <pre><code>{`public IActionResult AddProduct() {
    var product = new Product { Name = "Mouse", Price = 299 };
    _context.Products.Add(product);
    _context.SaveChanges();
    return View();
}`}</code></pre>
                
                <h4 className="h5 mt-3">Read (Retrieve)</h4>
                <pre><code>{`public IActionResult AllProducts() {
    var products = _context.Products.ToList();
    return View(products);
}`}</code></pre>
                
                <h4 className="h5 mt-3">Update</h4>
                <pre><code>{`public IActionResult UpdateProduct(int id) {
    var product = _context.Products.Find(id);
    product.Price = 399;
    _context.SaveChanges();
    return RedirectToAction("AllProducts");
}`}</code></pre>
                
                <h4 className="h5 mt-3">Delete</h4>
                <pre><code>{`public IActionResult DeleteProduct(int id) {
    var product = _context.Products.Find(id);
    _context.Products.Remove(product);
    _context.SaveChanges();
    return RedirectToAction("AllProducts");
}`}</code></pre>
                
                <h4 className="h5 mt-3">Using LINQ with EF Core</h4>
                <pre><code>{`var expensive = _context.Products.Where(p => p.Price > 1000).ToList();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">EF Core Migrations – Commands Recap</h3>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Command</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>dotnet ef migrations add Name</code></td>
                        <td>Creates migration file</td>
                      </tr>
                      <tr>
                        <td><code>dotnet ef database update</code></td>
                        <td>Applies migration to DB</td>
                      </tr>
                      <tr>
                        <td><code>dotnet ef migrations remove</code></td>
                        <td>Removes last migration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="web-api" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-server"></i> ASP.NET Core Web API</h2>
              
              <div className="property-card">
                <h3 className="h4">What is a Web API?</h3>
                <ul>
                  <li>A <strong>Web API (Application Programming Interface)</strong> is a set of HTTP endpoints that allow systems to <strong>send and receive data</strong> — usually in <strong>JSON format</strong></li>
                  <li>ASP.NET Core Web API is ideal for building <strong>RESTful services</strong></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Creating a Web API Project</h3>
                <pre><code>{`dotnet new webapi -n MyApiApp
cd MyApiApp
dotnet run`}</code></pre>
                <p>This creates a minimal API with built-in Swagger (for API testing).</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Folder Structure</h3>
                <pre><code>{`MyApiApp/
├── Controllers/
│   └── WeatherForecastController.cs
├── Program.cs
├── Models/
│   └── Product.cs
└── appsettings.json`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Create a Model</h3>
                <pre><code>{`public class Product {
    public int Id { get; set; }
    public string Name { get; set; }
    public double Price { get; set; }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Create an API Controller</h3>
                <pre><code>{`[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase {
    private static List<Product> _products = new List<Product> {
        new Product { Id = 1, Name = "Mouse", Price = 299 },
        new Product { Id = 2, Name = "Keyboard", Price = 499 }
    };

    [HttpGet]
    public IActionResult GetAll() => Ok(_products);

    [HttpGet("{id}")]
    public IActionResult GetById(int id) {
        var product = _products.FirstOrDefault(p => p.Id == id);
        return product == null ? NotFound() : Ok(product);
    }

    [HttpPost]
    public IActionResult Create(Product product) {
        product.Id = _products.Count + 1;
        _products.Add(product);
        return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Product updated) {
        var product = _products.FirstOrDefault(p => p.Id == id);
        if (product == null) return NotFound();
        product.Name = updated.Name;
        product.Price = updated.Price;
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id) {
        var product = _products.FirstOrDefault(p => p.Id == id);
        if (product == null) return NotFound();
        _products.Remove(product);
        return NoContent();
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">HTTP Methods and Usage</h3>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>HTTP Method</th>
                        <th>API Route</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>GET</td>
                        <td>/api/products</td>
                        <td>Get all products</td>
                      </tr>
                      <tr>
                        <td>GET</td>
                        <td>/api/products/1</td>
                        <td>Get product by ID</td>
                      </tr>
                      <tr>
                        <td>POST</td>
                        <td>/api/products</td>
                        <td>Add new product</td>
                      </tr>
                      <tr>
                        <td>PUT</td>
                        <td>/api/products/1</td>
                        <td>Update product</td>
                      </tr>
                      <tr>
                        <td>DELETE</td>
                        <td>/api/products/1</td>
                        <td>Delete product</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Using Postman or Swagger</h3>
                <ul>
                  <li>Use <strong>Postman</strong> to test API endpoints (POST, PUT, DELETE, etc.)</li>
                  <li>Swagger is built-in: run the app and visit <code>https://localhost:xxxx/swagger</code></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Return Types in Web API</h3>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Return Type</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ok(data)</td>
                        <td>200 OK with response</td>
                      </tr>
                      <tr>
                        <td>NotFound()</td>
                        <td>404</td>
                      </tr>
                      <tr>
                        <td>BadRequest()</td>
                        <td>400</td>
                      </tr>
                      <tr>
                        <td>NoContent()</td>
                        <td>204</td>
                      </tr>
                      <tr>
                        <td>CreatedAtAction()</td>
                        <td>201 with location header</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Enable CORS (Cross-Origin Resource Sharing)</h3>
                <p>If calling API from frontend (e.g., React/Angular):</p>
                <pre><code>{`builder.Services.AddCors(options => {
    options.AddPolicy("AllowAll", policy => {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

app.UseCors("AllowAll");`}</code></pre>
              </div>
            </section>

            <section id="middleware" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Middleware in ASP.NET Core</h2>
              
              <div className="property-card">
                <h3 className="h4">What is Middleware?</h3>
                <ul>
                  <li>Middleware is software that's executed in the request/response pipeline</li>
                  <li>Each middleware component:
                    <ul>
                      <li>Can handle the request</li>
                      <li>Can modify the response</li>
                      <li>Can pass control to the next middleware</li>
                    </ul>
                  </li>
                  <li>In ASP.NET Core, the request goes through a pipeline of middlewares defined in Program.cs</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example of Middleware Pipeline</h3>
                <pre><code>{`var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles();    // Serve CSS, JS, images
app.UseRouting();        // Enables routing
app.UseAuthorization();  // Check user access
app.MapControllers();    // Match controller routes

app.Run();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Built-in Middlewares</h3>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Middleware</th>
                        <th>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>UseStaticFiles()</td>
                        <td>Serve files from wwwroot folder</td>
                      </tr>
                      <tr>
                        <td>UseRouting()</td>
                        <td>Enables endpoint routing</td>
                      </tr>
                      <tr>
                        <td>UseAuthorization()</td>
                        <td>Enforces authorization</td>
                      </tr>
                      <tr>
                        <td>UseAuthentication()</td>
                        <td>Handles login/session/token</td>
                      </tr>
                      <tr>
                        <td>UseCors()</td>
                        <td>Enables CORS policy</td>
                      </tr>
                      <tr>
                        <td>UseExceptionHandler()</td>
                        <td>Global error handler</td>
                      </tr>
                      <tr>
                        <td>UseHttpsRedirection()</td>
                        <td>Redirects HTTP to HTTPS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Middleware Execution Flow</h3>
                <pre><code>{`Request → Middleware A → Middleware B → Controller → Response ← Middleware B ← Middleware A`}</code></pre>
                <p>Middlewares run in order — so <strong>order matters!</strong></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Custom Middleware Example</h3>
                <p>You can create your own middleware:</p>
                
                <h4 className="h5 mt-3">Create Middleware Class</h4>
                <pre><code>{`public class LoggingMiddleware {
    private readonly RequestDelegate _next;
    
    public LoggingMiddleware(RequestDelegate next) {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context) {
        Console.WriteLine($"Request: {context.Request.Path}");
        await _next(context); // Call next middleware
        Console.WriteLine($"Response: {context.Response.StatusCode}");
    }
}`}</code></pre>
                
                <h4 className="h5 mt-3">Register in Program.cs</h4>
                <pre><code>{`app.UseMiddleware<LoggingMiddleware>();`}</code></pre>
                <p>This logs every request path and response status code.</p>
                
                <h4 className="h5 mt-3">Short Inline Middleware</h4>
                <pre><code>{`app.Use(async (context, next) => {
    Console.WriteLine("Before request");
    await next();
    Console.WriteLine("After response");
});`}</code></pre>
                
                <h4 className="h5 mt-3">Exception Handling Middleware</h4>
                <pre><code>{`if (!app.Environment.IsDevelopment()) {
    app.UseExceptionHandler("/Home/Error");
}`}</code></pre>
                <p>Creates a global error page when exceptions occur.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Request Processing Order (Typical)</h3>
                <pre><code>{`app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();`}</code></pre>
                <p><strong>Order matters</strong> — putting UseRouting() before UseStaticFiles() will break file serving.</p>
              </div>
            </section>

            <section id="auth" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> Authentication and Authorization</h2>
              
              <div className="property-card">
                <h3 className="h4">What's the Difference?</h3>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Concept</th>
                        <th>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Authentication</strong></td>
                        <td>Verifying who the user is (login)</td>
                      </tr>
                      <tr>
                        <td><strong>Authorization</strong></td>
                        <td>Verifying what the user can access (permissions/roles)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Authentication Types in ASP.NET Core</h3>
                <ol>
                  <li><strong>ASP.NET Core Identity</strong> – Full user registration/login system with roles</li>
                  <li><strong>JWT (JSON Web Token)</strong> – For APIs (token-based login)</li>
                  <li><strong>External Providers</strong> – Google, Facebook, Microsoft, etc.</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">PART 1: ASP.NET Core Identity (for MVC apps)</h3>
                
                <h4 className="h5 mt-3">1. Install Identity NuGet Package</h4>
                <pre><code>{`dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.SqlServer`}</code></pre>
                
                <h4 className="h5 mt-3">2. Create Identity DbContext</h4>
                <pre><code>{`public class AppDbContext : IdentityDbContext<IdentityUser> {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}`}</code></pre>
                
                <h4 className="h5 mt-3">3. Register Identity in Program.cs</h4>
                <pre><code>{`builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddIdentity<IdentityUser, IdentityRole>()
    .AddEntityFrameworkStores<AppDbContext>();

app.UseAuthentication();
app.UseAuthorization();`}</code></pre>
                
                <h4 className="h5 mt-3">4. Scaffold Identity UI (optional)</h4>
                <pre><code>{`dotnet aspnet-codegenerator identity -dc AppDbContext`}</code></pre>
                <p>This adds login, register, logout, forgot password views.</p>
                
                <h4 className="h5 mt-3">5. Protect Routes with Authorization</h4>
                <pre><code>{`[Authorize]
public IActionResult Dashboard() {
    return View();
}

// Or restrict to roles:
[Authorize(Roles = "Admin")]
public IActionResult AdminPanel() {
    return View();
}`}</code></pre>
                
                <h4 className="h5 mt-3">6. Add Login/Logout/Register Links</h4>
                <pre><code>{`@if (User.Identity.IsAuthenticated) {
    <p>Hello, @User.Identity.Name!</p>
    <form asp-controller="Account" asp-action="Logout" method="post">
        <button type="submit">Logout</button>
    </form>
}
else {
    <a asp-controller="Account" asp-action="Login">Login</a>
    <a asp-controller="Account" asp-action="Register">Register</a>
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">PART 2: JWT Authentication (for Web API)</h3>
                
                <h4 className="h5 mt-3">1. Install JWT Package</h4>
                <pre><code>{`dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer`}</code></pre>
                
                <h4 className="h5 mt-3">2. Configure JWT in Program.cs</h4>
                <pre><code>{`builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
        options.TokenValidationParameters = new TokenValidationParameters {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = "yourapp.com",
            ValidAudience = "yourapp.com",
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes("super_secret_key"))
        };
    });

app.UseAuthentication();
app.UseAuthorization();`}</code></pre>
                
                <h4 className="h5 mt-3">3. Generate JWT Token</h4>
                <pre><code>{`var tokenHandler = new JwtSecurityTokenHandler();
var key = Encoding.UTF8.GetBytes("super_secret_key");

var token = new JwtSecurityToken(
    issuer: "yourapp.com",
    audience: "yourapp.com",
    expires: DateTime.UtcNow.AddHours(1),
    signingCredentials: new SigningCredentials(
        new SymmetricSecurityKey(key), 
        SecurityAlgorithms.HmacSha256)
);

var tokenString = tokenHandler.WriteToken(token);`}</code></pre>
                
                <h4 className="h5 mt-3">4. Protect API Endpoint</h4>
                <pre><code>{`[Authorize]
[HttpGet("profile")]
public IActionResult GetProfile() {
    return Ok("This is a protected endpoint");
}`}</code></pre>
                <p>Send the token via Authorization Header:</p>
                <pre><code>{`Authorization: Bearer <token>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Policy-based Authorization (Advanced)</h3>
                <pre><code>{`builder.Services.AddAuthorization(options => {
    options.AddPolicy("AdminOnly", policy => 
        policy.RequireRole("Admin"));
});

[Authorize(Policy = "AdminOnly")]
public IActionResult AdminDashboard() {
    return View();
}`}</code></pre>
              </div>
            </section>

            <section id="configuration" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-sliders"></i> Configuration & Environment Management</h2>
              
              <div className="property-card">
                <h3 className="h4">What is Configuration in ASP.NET Core?</h3>
                <p>ASP.NET Core supports a flexible configuration system that loads settings from multiple sources:</p>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Source Type</th>
                        <th>Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>appsettings.json</td>
                        <td>Static config file</td>
                      </tr>
                      <tr>
                        <td>Environment variables</td>
                        <td>ASPNETCORE_ENVIRONMENT</td>
                      </tr>
                      <tr>
                        <td>User secrets</td>
                        <td>For dev secrets</td>
                      </tr>
                      <tr>
                        <td>Command-line args</td>
                        <td>Passed at runtime</td>
                      </tr>
                      <tr>
                        <td>Azure Key Vault</td>
                        <td>For production secrets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">appsettings.json Example</h3>
                <pre><code>{`{
  "AppSettings": {
    "AppName": "My ASP.NET Core App",
    "Version": "1.0.0"
  },
  "ConnectionStrings": {
    "DefaultConnection": "Server=.;Database=MyDB;Trusted_Connection=True;"
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Reading Configuration in Code</h3>
                <pre><code>{`var appName = builder.Configuration["AppSettings:AppName"];
var connStr = builder.Configuration.GetConnectionString("DefaultConnection");

// Or inject IConfiguration
public class HomeController : Controller {
    private readonly IConfiguration _config;
    
    public HomeController(IConfiguration config) {
        _config = config;
    }
    
    public IActionResult Index() {
        var version = _config["AppSettings:Version"];
        ViewBag.Version = version;
        return View();
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Environment Variables</h3>
                <p>Set via OS or hosting provider.</p>
                <p>Example: set development environment in terminal</p>
                <pre><code>{`# Windows
set ASPNETCORE_ENVIRONMENT=Development

# Linux/macOS
export ASPNETCORE_ENVIRONMENT=Production`}</code></pre>
                <p>Then use it in code:</p>
                <pre><code>{`if (app.Environment.IsDevelopment()) {
    // Dev-only config
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Multiple appsettings files</h3>
                <p>ASP.NET Core supports <strong>environment-specific config</strong>:</p>
                <ul>
                  <li>appsettings.json</li>
                  <li>appsettings.Development.json</li>
                  <li>appsettings.Production.json</li>
                </ul>
                <p>Only the matching one will override default values based on current environment.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Using Secrets in Development (User Secrets)</h3>
                <p>For sensitive info (API keys, SMTP credentials) during local development:</p>
                <pre><code>{`dotnet user-secrets init
dotnet user-secrets set "Jwt:SecretKey" "super_secret_key_123"`}</code></pre>
                <p>Read it like normal config:</p>
                <pre><code>{`builder.Configuration["Jwt:SecretKey"]`}</code></pre>
                <p>Stored outside the project so it's not committed to Git.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Binding Settings to Class</h3>
                <p>Create a strongly-typed class:</p>
                <pre><code>{`public class AppSettings {
    public string AppName { get; set; }
    public string Version { get; set; }
}`}</code></pre>
                <p>Then bind it:</p>
                <pre><code>{`builder.Services.Configure<AppSettings>(
    builder.Configuration.GetSection("AppSettings"));`}</code></pre>
                <p>Inject it:</p>
                <pre><code>{`public class HomeController : Controller {
    private readonly AppSettings _settings;
    
    public HomeController(IOptions<AppSettings> settings) {
        _settings = settings.Value;
    }
}`}</code></pre>
              </div>
            </section>

            <section id="razor-mvc-blazor" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-slash"></i> Razor Pages vs MVC vs Blazor</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Razor Pages</h3>
                <p><strong>Razor Pages</strong> is a page-based model in ASP.NET Core for building UI with minimal ceremony.</p>
                <p><strong>Characteristics:</strong></p>
                <ul>
                  <li>Each page = one .cshtml file + optional PageModel.cs</li>
                  <li>Clean folder structure</li>
                  <li>Great for <strong>simple CRUD apps</strong></li>
                </ul>
                
                <h4 className="h5 mt-3">File Example:</h4>
                <pre><code>{`Pages/
    ├── Products/
    │   └── Index.cshtml
    └── Index.cshtml.cs ← PageModel (logic behind the view)`}</code></pre>
                
                <h4 className="h5 mt-3">PageModel Example:</h4>
                <pre><code>{`public class IndexModel : PageModel {
    public void OnGet() {
        // Runs on page load (GET request)
    }
}`}</code></pre>
                <p><strong>Great for:</strong></p>
                <ul>
                  <li>Beginners</li>
                  <li>CRUD-based admin panels</li>
                  <li>Simpler routing (/products/index)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. MVC (Model-View-Controller)</h3>
                <p>MVC is the classic separation of concerns pattern:</p>
                <ul>
                  <li><strong>Model</strong> – Data & business logic</li>
                  <li><strong>View</strong> – UI</li>
                  <li><strong>Controller</strong> – Handles requests</li>
                </ul>
                
                <h4 className="h5 mt-3">Structure:</h4>
                <pre><code>{`Controllers/
└── ProductController.cs

Models/
└── Product.cs

Views/
└── Product/
    └── Index.cshtml`}</code></pre>
                
                <h4 className="h5 mt-3">Controller Example:</h4>
                <pre><code>{`public class ProductController : Controller {
    public IActionResult Index() {
        return View();
    }
}`}</code></pre>
                <p><strong>Best for:</strong></p>
                <ul>
                  <li>Complex web apps</li>
                  <li>Clean separation of layers</li>
                  <li>Large teams</li>
                  <li>Flexibility with route handling</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Blazor (Server & WebAssembly)</h3>
                <p>Blazor lets you build interactive web UIs with C# instead of JavaScript.</p>
                
                <h4 className="h5 mt-3">Types of Blazor:</h4>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Runs on</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Blazor Server</td>
                        <td>Server-side (signalR)</td>
                        <td>Fast load, real-time UI, backend dependency</td>
                      </tr>
                      <tr>
                        <td>Blazor WebAssembly</td>
                        <td>In browser (like SPA)</td>
                        <td>Offline capable, slower initial load</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className="h5 mt-3">Component Example:</h4>
                <pre><code>{`<h3>Hello, @name!</h3>

@code {
    private string name = "John";
}`}</code></pre>
                <p><strong>Best for:</strong></p>
                <ul>
                  <li>Full C# development (no JS needed)</li>
                  <li>Interactive SPAs</li>
                  <li>Real-time dashboards</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Comparison Table</h3>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Feature</th>
                        <th>Razor Pages</th>
                        <th>MVC</th>
                        <th>Blazor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Architecture</td>
                        <td>Page-based</td>
                        <td>Controller-based</td>
                        <td>Component-based</td>
                      </tr>
                      <tr>
                        <td>Code-Behind</td>
                        <td>.cshtml.cs</td>
                        <td>Controllers</td>
                        <td>@code {} in .razor</td>
                      </tr>
                      <tr>
                        <td>SPA Support</td>
                        <td>No</td>
                        <td>No</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Routing</td>
                        <td>File-based</td>
                        <td>Attribute/Convention</td>
                        <td>Component routing</td>
                      </tr>
                      <tr>
                        <td>Real-Time UI</td>
                        <td>No</td>
                        <td>No</td>
                        <td>(Blazor Server)</td>
                      </tr>
                      <tr>
                        <td>Learning Curve</td>
                        <td>Easy</td>
                        <td>Moderate</td>
                        <td>Moderate–High</td>
                      </tr>
                      <tr>
                        <td>JS Dependency</td>
                        <td>Optional</td>
                        <td>Optional</td>
                        <td>(pure C#)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">When to Choose What?</h3>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>You Need</th>
                        <th>Go With</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Simple CRUD admin dashboard</td>
                        <td>Razor Pages</td>
                      </tr>
                      <tr>
                        <td>Large, layered app with clear logic/UI separation</td>
                        <td>MVC</td>
                      </tr>
                      <tr>
                        <td>SPA like Angular/React but in C#</td>
                        <td>Blazor</td>
                      </tr>
                      <tr>
                        <td>Real-time dashboard or interactive UI</td>
                        <td>Blazor Server</td>
                      </tr>
                      <tr>
                        <td>SEO & classic multi-page navigation</td>
                        <td>MVC or Razor Pages</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="deployment" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cloud-upload"></i> Deployment in ASP.NET Core</h2>
              
              <div className="property-card">
                <h3 className="h4">Deployment Targets Overview</h3>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Platform</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>IIS (Windows)</td>
                        <td>Host on-premise or VPS server using Internet Information Services</td>
                      </tr>
                      <tr>
                        <td>Azure App Service</td>
                        <td>Microsoft cloud hosting for ASP.NET Core</td>
                      </tr>
                      <tr>
                        <td>Render / Railway / Vercel</td>
                        <td>Free/paid cloud platforms supporting .NET</td>
                      </tr>
                      <tr>
                        <td>Docker + Linux</td>
                        <td>Host inside containers for Linux-based cloud</td>
                      </tr>
                      <tr>
                        <td>Self-hosted EXE</td>
                        <td>Run app like a console service (Kestrel)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="property-card">
                <h3 className="h4">IIS Deployment (Windows Hosting)</h3>
                <h4 className="h5 mt-3">Step-by-Step (IIS Hosting)</h4>
                <ol>
                  <li><strong>Install Hosting Bundle</strong><br />
                    Install .NET Core Hosting Bundle on the server (IIS + runtime)</li>
                  <li><strong>Publish the Project</strong><br />
                    <code>dotnet publish -c Release -o ./publish</code></li>
                  <li><strong>Copy publish/ folder</strong> to IIS physical path (e.g., C:\inetpub\wwwroot\MyApp)</li>
                  <li><strong>In IIS Manager:</strong>
                    <ul>
                      <li>Create a new site or use Default Web Site</li>
                      <li>Point to published folder</li>
                      <li>Set binding (e.g., port 80, or domain)</li>
                      <li>App Pool → No Managed Code + Integrated</li>
                    </ul>
                  </li>
                  <li><strong>Give Permissions</strong><br />
                    Grant IIS_IUSRS or NETWORK SERVICE access to folder</li>
                  <li><strong>Access App</strong><br />
                    Visit http://localhost/MyApp or mapped domain</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Azure App Service Deployment</h3>
                <h4 className="h5 mt-3">Steps (via Visual Studio or CLI)</h4>
                <ol>
                  <li>Create App Service in Azure Portal (select .NET stack)</li>
                  <li>Publish via Visual Studio
                    <ul>
                      <li>{`Right-click project > Publish > Azure > App Service`}</li>
                    </ul>
                  </li>
                  <li>Or use CLI
                    <pre><code>{`dotnet publish -c Release -o ./publish
az webapp deploy --resource-group <group> --name <app-name> --src-path ./publish`}</code></pre>
                  </li>
                  <li>Manage Settings
                    <ul>
                      <li>Go to Azure Portal → Configuration</li>
                      <li>Set Connection Strings, Secrets, etc.</li>
                    </ul>
                  </li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Render (Free Modern Hosting)</h3>
                <h4 className="h5 mt-3">Steps:</h4>
                <ol>
                  <li>Go to <a href="https://render.com" target="_blank" rel="noopener noreferrer">https://render.com</a></li>
                  <li>Create New → Web Service</li>
                  <li>Connect GitHub repo with ASP.NET Core project</li>
                  <li>Set Build Command:
                    <pre><code>{`dotnet publish -c Release -o out`}</code></pre>
                  </li>
                  <li>Set Start Command:
                    <pre><code>{`dotnet out/YourApp.dll`}</code></pre>
                  </li>
                  <li>It auto-deploys on push! 😊</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Self-Hosted / Console EXE Hosting</h3>
                <h4 className="h5 mt-3">Steps:</h4>
                <ol>
                  <li>Publish project as <strong>self-contained</strong>
                    <pre><code>{`dotnet publish -c Release -r win-x64 --self-contained true -o ./publish`}</code></pre>
                  </li>
                  <li>It creates an EXE file (no need for .NET on target machine)</li>
                  <li>Run via:
                    <pre><code>{`MyApp.exe`}</code></pre>
                  </li>
                  <li>Access from browser: http://localhost:5000 or https://localhost:5001</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Docker Deployment (Optional Advanced)</h3>
                <h4 className="h5 mt-3">Dockerfile Example</h4>
                <pre><code>{`FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ..
RUN dotnet publish -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "MyApp.dll"]`}</code></pre>
                
                <h4 className="h5 mt-3">Build & Run</h4>
                <pre><code>{`docker build -t myapp .
docker run -p 8080:80 myapp`}</code></pre>
                <p>Access at http://localhost:8080</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Environment Variables in Deployment</h3>
                <p>Set ASPNETCORE_ENVIRONMENT to:</p>
                <ul>
                  <li>Development</li>
                  <li>Staging</li>
                  <li>Production</li>
                </ul>
                <p>Affects which config files load (e.g., appsettings.Production.json)</p>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>ASP.NET Core Notes &copy; 2025 | Created by Mugilvannan P.</p>
        </div>
      </footer>
    </div>
  );
}

export default AspNetCoreNotes;