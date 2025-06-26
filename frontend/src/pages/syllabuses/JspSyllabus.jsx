import React from 'react';

function JspSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-jsp"></i> JSP Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Java Server Pages</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to JSP</h2>
            <ul>
              <li>What is JSP?</li>
              <li>Advantages of JSP over Servlet</li>
              <li>JSP Architecture</li>
              <li>JSP vs Servlet vs ASP vs PHP</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> JSP Life Cycle</h2>
            <ul>
              <li>Translation Phase</li>
              <li>Compilation Phase</li>
              <li>Initialization Phase</li>
              <li>Execution Phase</li>
              <li>Destruction Phase</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> JSP Scripting Elements</h2>
            <ul>
              <li>Scriptlet Tag</li>
              <li>Expression Tag</li>
              <li>Declaration Tag</li>
              <li>Comments in JSP</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box-seam"></i> JSP Implicit Objects</h2>
            <ul>
              <li>out Object</li>
              <li>request Object</li>
              <li>response Object</li>
              <li>config Object</li>
              <li>application Object</li>
              <li>session Object</li>
              <li>pageContext Object</li>
              <li>page Object</li>
              <li>exception Object</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-text"></i> JSP Directives</h2>
            <ul>
              <li>Page Directive</li>
              <li>Include Directive</li>
              <li>Taglib Directive</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-exclamation-triangle"></i> JSP Exception Handling</h2>
            <ul>
              <li>errorPage and isErrorPage Attributes</li>
              <li>Exception Implicit Object</li>
              <li>Try-Catch Blocks in JSP</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightning"></i> JSP Action Tags</h2>
            <ul>
              <li>jsp:forward</li>
              <li>jsp:include</li>
              <li>jsp:useBean</li>
              <li>jsp:setProperty</li>
              <li>jsp:getProperty</li>
              <li>jsp:plugin</li>
              <li>jsp:param</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-braces"></i> Expression Language (EL)</h2>
            <ul>
              <li>EL Syntax</li>
              <li>EL Implicit Objects</li>
              <li>EL Operators</li>
              <li>EL Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tags"></i> JSTL (JSP Standard Tag Library)</h2>
            <ul>
              <li>Core Tags</li>
              <li>Formatting Tags</li>
              <li>SQL Tags</li>
              <li>XML Tags</li>
              <li>Functions Tags</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> JSP with JDBC</h2>
            <ul>
              <li>Database Connection</li>
              <li>CRUD Operations</li>
              <li>Prepared Statements</li>
              <li>Connection Pooling</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-upload"></i> File Uploading in JSP</h2>
            <ul>
              <li>MultipartRequest Class</li>
              <li>File Upload Form</li>
              <li>Handling Uploaded Files</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-3"></i> MVC in JSP</h2>
            <ul>
              <li>MVC Architecture</li>
              <li>Model Components</li>
              <li>View Components</li>
              <li>Controller Components</li>
              <li>MVC Advantages</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-filter-square"></i> Custom Tags</h2>
            <ul>
              <li>Creating Custom Tags</li>
              <li>Tag Handler Class</li>
              <li>TLD (Tag Library Descriptor)</li>
              <li>Using Custom Tags</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-chat-square-text"></i> JSP Interview Questions</h2>
            <ul>
              <li>Basic JSP Questions</li>
              <li>Advanced JSP Concepts</li>
              <li>Performance Considerations</li>
              <li>Security Aspects</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> JSP Integration</h2>
            <ul>
              <li>JSP with AJAX</li>
              <li>JSP with JavaScript</li>
              <li>JSP with Frameworks (Spring, Struts)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> JSP Security</h2>
            <ul>
              <li>Authentication</li>
              <li>Authorization</li>
              <li>Secure Coding Practices</li>
              <li>Common Vulnerabilities</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-speedometer2"></i> JSP Performance</h2>
            <ul>
              <li>Caching Strategies</li>
              <li>Optimization Techniques</li>
              <li>Load Balancing</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-calendar-check"></i> JSP Best Practices</h2>
            <ul>
              <li>Coding Standards</li>
              <li>Separation of Concerns</li>
              <li>Maintainability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JspSyllabus;