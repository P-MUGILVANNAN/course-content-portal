import React from 'react';

function ServletSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-java fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Java Servlets Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Java Servlet Technology</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Servlets</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What are Servlets?</li>
                <li className="list-group-item">Servlet Architecture</li>
                <li className="list-group-item">Advantages of Servlets over CGI</li>
                <li className="list-group-item">Servlet Lifecycle</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Servlet Setup and Configuration</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Servlet Environment Setup</li>
                <li className="list-group-item">Creating a Simple Servlet</li>
                <li className="list-group-item">web.xml Configuration</li>
                <li className="list-group-item">Annotations in Servlets</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-primary me-2"></i>Servlet Lifecycle</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">init() method</li>
                <li className="list-group-item">service() method</li>
                <li className="list-group-item">doGet() and doPost() methods</li>
                <li className="list-group-item">destroy() method</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-box-arrow-in-right text-primary me-2"></i>Handling Client Requests</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">ServletRequest Interface</li>
                <li className="list-group-item">HttpServletRequest Interface</li>
                <li className="list-group-item">Reading Form Data</li>
                <li className="list-group-item">Request Parameters and Headers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-box-arrow-left text-primary me-2"></i>Generating Server Responses</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">ServletResponse Interface</li>
                <li className="list-group-item">HttpServletResponse Interface</li>
                <li className="list-group-item">Setting Response Headers</li>
                <li className="list-group-item">Content Type and Character Encoding</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-share text-primary me-2"></i>Request Dispatching</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">RequestDispatcher Interface</li>
                <li className="list-group-item">Forwarding Requests</li>
                <li className="list-group-item">Including Responses</li>
                <li className="list-group-item">Difference between forward and include</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-left-right text-primary me-2"></i>Redirecting Requests</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">sendRedirect() method</li>
                <li className="list-group-item">Difference between forward and redirect</li>
                <li className="list-group-item">URL Rewriting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cookie text-primary me-2"></i>Session Tracking</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cookies</li>
                <li className="list-group-item">Hidden Form Fields</li>
                <li className="list-group-item">URL Rewriting</li>
                <li className="list-group-item">HttpSession Interface</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>Database Access with Servlets</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">JDBC with Servlets</li>
                <li className="list-group-item">CRUD Operations</li>
                <li className="list-group-item">Connection Pooling</li>
                <li className="list-group-item">Prepared Statements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-upload text-primary me-2"></i>File Uploading</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Multipart Requests</li>
                <li className="list-group-item">Apache Commons FileUpload</li>
                <li className="list-group-item">Handling File Uploads</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-files text-primary me-2"></i>Filters</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Filter Interface</li>
                <li className="list-group-item">Filter Configuration</li>
                <li className="list-group-item">Filter Chaining</li>
                <li className="list-group-item">Practical Uses of Filters</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-ear text-primary me-2"></i>Listeners</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">ServletContextListener</li>
                <li className="list-group-item">HttpSessionListener</li>
                <li className="list-group-item">ServletRequestListener</li>
                <li className="list-group-item">Event Handling in Servlets</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-globe text-primary me-2"></i>Web Application Security</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Authentication and Authorization</li>
                <li className="list-group-item">Form-Based Authentication</li>
                <li className="list-group-item">Security Roles</li>
                <li className="list-group-item">Secure Communication (HTTPS)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-speedometer2 text-primary me-2"></i>Performance Considerations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Servlet Caching</li>
                <li className="list-group-item">Thread Safety</li>
                <li className="list-group-item">Connection Pooling</li>
                <li className="list-group-item">Load Balancing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-patch-check text-primary me-2"></i>Best Practices</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Servlet Design Patterns</li>
                <li className="list-group-item">Error Handling</li>
                <li className="list-group-item">Logging</li>
                <li className="list-group-item">Internationalization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-journal-code text-primary me-2"></i>Integration with Other Technologies</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Servlets and JSP</li>
                <li className="list-group-item">Servlets and JDBC</li>
                <li className="list-group-item">Servlets and AJAX</li>
                <li className="list-group-item">Servlets and Web Services</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightning-charge text-primary me-2"></i>Asynchronous Servlets</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">AsyncContext</li>
                <li className="list-group-item">AsyncListener</li>
                <li className="list-group-item">Use Cases for Async Servlets</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-code text-primary me-2"></i>Servlet API 6.0 Features</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HTTP/2 Support</li>
                <li className="list-group-item">Server Push</li>
                <li className="list-group-item">New Annotations</li>
                <li className="list-group-item">Enhanced Security</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bug text-primary me-2"></i>Debugging and Troubleshooting</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Common Servlet Errors</li>
                <li className="list-group-item">Logging Techniques</li>
                <li className="list-group-item">Debugging Tools</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-clipboard-check text-primary me-2"></i>Practical Applications</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Login System</li>
                <li className="list-group-item">Registration System</li>
                <li className="list-group-item">File Upload System</li>
                <li className="list-group-item">Database Reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServletSyllabus;