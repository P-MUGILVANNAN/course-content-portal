import React from 'react';

function JspSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-jsp fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">JSP Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Java Server Pages</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to JSP</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is JSP?</li>
                <li className="list-group-item">Advantages of JSP over Servlet</li>
                <li className="list-group-item">JSP Architecture</li>
                <li className="list-group-item">JSP vs Servlet vs ASP vs PHP</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-primary me-2"></i>JSP Life Cycle</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Translation Phase</li>
                <li className="list-group-item">Compilation Phase</li>
                <li className="list-group-item">Initialization Phase</li>
                <li className="list-group-item">Execution Phase</li>
                <li className="list-group-item">Destruction Phase</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>JSP Scripting Elements</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Scriptlet Tag</li>
                <li className="list-group-item">Expression Tag</li>
                <li className="list-group-item">Declaration Tag</li>
                <li className="list-group-item">Comments in JSP</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-box-seam text-primary me-2"></i>JSP Implicit Objects</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">out Object</li>
                <li className="list-group-item">request Object</li>
                <li className="list-group-item">response Object</li>
                <li className="list-group-item">config Object</li>
                <li className="list-group-item">application Object</li>
                <li className="list-group-item">session Object</li>
                <li className="list-group-item">pageContext Object</li>
                <li className="list-group-item">page Object</li>
                <li className="list-group-item">exception Object</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-text text-primary me-2"></i>JSP Directives</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Page Directive</li>
                <li className="list-group-item">Include Directive</li>
                <li className="list-group-item">Taglib Directive</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-exclamation-triangle text-primary me-2"></i>JSP Exception Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">errorPage and isErrorPage Attributes</li>
                <li className="list-group-item">Exception Implicit Object</li>
                <li className="list-group-item">Try-Catch Blocks in JSP</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightning text-primary me-2"></i>JSP Action Tags</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">jsp:forward</li>
                <li className="list-group-item">jsp:include</li>
                <li className="list-group-item">jsp:useBean</li>
                <li className="list-group-item">jsp:setProperty</li>
                <li className="list-group-item">jsp:getProperty</li>
                <li className="list-group-item">jsp:plugin</li>
                <li className="list-group-item">jsp:param</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-braces text-primary me-2"></i>Expression Language (EL)</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">EL Syntax</li>
                <li className="list-group-item">EL Implicit Objects</li>
                <li className="list-group-item">EL Operators</li>
                <li className="list-group-item">EL Functions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>JSP with JDBC</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Database Connection</li>
                <li className="list-group-item">CRUD Operations</li>
                <li className="list-group-item">Prepared Statements</li>
                <li className="list-group-item">Connection Pooling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-upload text-primary me-2"></i>File Uploading in JSP</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">MultipartRequest Class</li>
                <li className="list-group-item">File Upload Form</li>
                <li className="list-group-item">Handling Uploaded Files</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-3 text-primary me-2"></i>MVC in JSP</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">MVC Architecture</li>
                <li className="list-group-item">Model Components</li>
                <li className="list-group-item">View Components</li>
                <li className="list-group-item">Controller Components</li>
                <li className="list-group-item">MVC Advantages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-chat-square-text text-primary me-2"></i>JSP Interview Questions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic JSP Questions</li>
                <li className="list-group-item">Advanced JSP Concepts</li>
                <li className="list-group-item">Performance Considerations</li>
                <li className="list-group-item">Security Aspects</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-calendar-check text-primary me-2"></i>JSP Best Practices</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Coding Standards</li>
                <li className="list-group-item">Separation of Concerns</li>
                <li className="list-group-item">Maintainability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JspSyllabus;