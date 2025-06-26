import React from 'react';

function ServletSyllabus() {
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
            background-color: #6c757d;
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-java"></i> Java Servlets Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Java Servlet Technology</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Servlets</h2>
            <ul>
              <li>What are Servlets?</li>
              <li>Servlet Architecture</li>
              <li>Advantages of Servlets over CGI</li>
              <li>Servlet Lifecycle</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Servlet Setup and Configuration</h2>
            <ul>
              <li>Servlet Environment Setup</li>
              <li>Creating a Simple Servlet</li>
              <li>web.xml Configuration</li>
              <li>Annotations in Servlets</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> Servlet Lifecycle</h2>
            <ul>
              <li>init() method</li>
              <li>service() method</li>
              <li>doGet() and doPost() methods</li>
              <li>destroy() method</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box-arrow-in-right"></i> Handling Client Requests</h2>
            <ul>
              <li>ServletRequest Interface</li>
              <li>HttpServletRequest Interface</li>
              <li>Reading Form Data</li>
              <li>Request Parameters and Headers</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box-arrow-left"></i> Generating Server Responses</h2>
            <ul>
              <li>ServletResponse Interface</li>
              <li>HttpServletResponse Interface</li>
              <li>Setting Response Headers</li>
              <li>Content Type and Character Encoding</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-share"></i> Request Dispatching</h2>
            <ul>
              <li>RequestDispatcher Interface</li>
              <li>Forwarding Requests</li>
              <li>Including Responses</li>
              <li>Difference between forward and include</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-left-right"></i> Redirecting Requests</h2>
            <ul>
              <li>sendRedirect() method</li>
              <li>Difference between forward and redirect</li>
              <li>URL Rewriting</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cookie"></i> Session Tracking</h2>
            <ul>
              <li>Cookies</li>
              <li>Hidden Form Fields</li>
              <li>URL Rewriting</li>
              <li>HttpSession Interface</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> Database Access with Servlets</h2>
            <ul>
              <li>JDBC with Servlets</li>
              <li>CRUD Operations</li>
              <li>Connection Pooling</li>
              <li>Prepared Statements</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-upload"></i> File Uploading</h2>
            <ul>
              <li>Multipart Requests</li>
              <li>Apache Commons FileUpload</li>
              <li>Handling File Uploads</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-files"></i> Filters</h2>
            <ul>
              <li>Filter Interface</li>
              <li>Filter Configuration</li>
              <li>Filter Chaining</li>
              <li>Practical Uses of Filters</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-ear"></i> Listeners</h2>
            <ul>
              <li>ServletContextListener</li>
              <li>HttpSessionListener</li>
              <li>ServletRequestListener</li>
              <li>Event Handling in Servlets</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-globe"></i> Web Application Security</h2>
            <ul>
              <li>Authentication and Authorization</li>
              <li>Form-Based Authentication</li>
              <li>Security Roles</li>
              <li>Secure Communication (HTTPS)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-speedometer2"></i> Performance Considerations</h2>
            <ul>
              <li>Servlet Caching</li>
              <li>Thread Safety</li>
              <li>Connection Pooling</li>
              <li>Load Balancing</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-patch-check"></i> Best Practices</h2>
            <ul>
              <li>Servlet Design Patterns</li>
              <li>Error Handling</li>
              <li>Logging</li>
              <li>Internationalization</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-journal-code"></i> Integration with Other Technologies</h2>
            <ul>
              <li>Servlets and JSP</li>
              <li>Servlets and JDBC</li>
              <li>Servlets and AJAX</li>
              <li>Servlets and Web Services</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightning-charge"></i> Asynchronous Servlets</h2>
            <ul>
              <li>AsyncContext</li>
              <li>AsyncListener</li>
              <li>Use Cases for Async Servlets</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-code"></i> Servlet API 6.0 Features</h2>
            <ul>
              <li>HTTP/2 Support</li>
              <li>Server Push</li>
              <li>New Annotations</li>
              <li>Enhanced Security</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bug"></i> Debugging and Troubleshooting</h2>
            <ul>
              <li>Common Servlet Errors</li>
              <li>Logging Techniques</li>
              <li>Debugging Tools</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-clipboard-check"></i> Practical Applications</h2>
            <ul>
              <li>Login System</li>
              <li>Registration System</li>
              <li>File Upload System</li>
              <li>Database Reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServletSyllabus;