import React from 'react';

function SpringbootSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-spring fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Spring Boot Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Spring Boot Framework</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Spring Boot</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Spring Boot?</li>
                <li className="list-group-item">Spring Boot vs Spring Framework</li>
                <li className="list-group-item">Advantages and Features</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Spring Boot Basics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Spring Boot Architecture</li>
                <li className="list-group-item">Spring Boot Starters</li>
                <li className="list-group-item">Auto-configuration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>Creating Spring Boot Application</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Spring Initializr</li>
                <li className="list-group-item">Project Structure</li>
                <li className="list-group-item">@SpringBootApplication</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-primary me-2"></i>Spring IOC & Dependency Injection</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Inversion of Control</li>
                <li className="list-group-item">Dependency Injection Types</li>
                <li className="list-group-item">@Autowired Annotation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-box text-primary me-2"></i>Spring Beans</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Bean Definition</li>
                <li className="list-group-item">Bean Scopes</li>
                <li className="list-group-item">@Component vs @Bean</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-filetype-properties text-primary me-2"></i>Spring Boot Configuration</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">application.properties</li>
                <li className="list-group-item">application.yml</li>
                <li className="list-group-item">Profile-specific Properties</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-controller text-primary me-2"></i>Spring MVC</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">@Controller vs @RestController</li>
                <li className="list-group-item">Request Mapping</li>
                <li className="list-group-item">Model Attributes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-globe text-primary me-2"></i>REST API Development</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">REST Principles</li>
                <li className="list-group-item">HTTP Methods</li>
                <li className="list-group-item">ResponseEntity</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-database text-primary me-2"></i>Spring Data JPA</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">JPA Annotations</li>
                <li className="list-group-item">Repository Interfaces</li>
                <li className="list-group-item">CRUD Operations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-check-circle text-primary me-2"></i>Validation</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Hibernate Validator</li>
                <li className="list-group-item">Common Validation Annotations</li>
                <li className="list-group-item">Custom Validation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-filetype-html text-primary me-2"></i>Thymeleaf</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Thymeleaf Basics</li>
                <li className="list-group-item">Template Processing</li>
                <li className="list-group-item">Form Handling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-lock text-primary me-2"></i>Spring Security</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Authentication & Authorization</li>
                <li className="list-group-item">JWT Authentication</li>
                <li className="list-group-item">OAuth2</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cloud-upload text-primary me-2"></i>File Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">File Upload/Download</li>
                <li className="list-group-item">Multipart Requests</li>
                <li className="list-group-item">Storage Services</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-envelope text-primary me-2"></i>Email Services</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">JavaMailSender</li>
                <li className="list-group-item">Email Templates</li>
                <li className="list-group-item">Attachment Handling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bug text-primary me-2"></i>Exception Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">@ControllerAdvice</li>
                <li className="list-group-item">Custom Exceptions</li>
                <li className="list-group-item">Global Exception Handler</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-box-arrow-up text-primary me-2"></i>Deployment</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">JAR vs WAR Packaging</li>
                <li className="list-group-item">Docker Integration</li>
                <li className="list-group-item">Cloud Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpringbootSyllabus;