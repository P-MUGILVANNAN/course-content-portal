import React from 'react';

function SpringbootSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-spring"></i> Spring Boot Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Spring Boot Framework</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Spring Boot</h2>
            <ul>
              <li>What is Spring Boot?</li>
              <li>Spring Boot vs Spring Framework</li>
              <li>Advantages and Features</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Spring Boot Basics</h2>
            <ul>
              <li>Spring Boot Architecture</li>
              <li>Spring Boot Starters</li>
              <li>Auto-configuration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> Creating Spring Boot Application</h2>
            <ul>
              <li>Spring Initializr</li>
              <li>Project Structure</li>
              <li>@SpringBootApplication</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> Spring IOC & Dependency Injection</h2>
            <ul>
              <li>Inversion of Control</li>
              <li>Dependency Injection Types</li>
              <li>@Autowired Annotation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box"></i> Spring Beans</h2>
            <ul>
              <li>Bean Definition</li>
              <li>Bean Scopes</li>
              <li>@Component vs @Bean</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-filetype-properties"></i> Spring Boot Configuration</h2>
            <ul>
              <li>application.properties</li>
              <li>application.yml</li>
              <li>Profile-specific Properties</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-controller"></i> Spring MVC</h2>
            <ul>
              <li>@Controller vs @RestController</li>
              <li>Request Mapping</li>
              <li>Model Attributes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-globe"></i> REST API Development</h2>
            <ul>
              <li>REST Principles</li>
              <li>HTTP Methods</li>
              <li>ResponseEntity</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database"></i> Spring Data JPA</h2>
            <ul>
              <li>JPA Annotations</li>
              <li>Repository Interfaces</li>
              <li>CRUD Operations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-check-circle"></i> Validation</h2>
            <ul>
              <li>Hibernate Validator</li>
              <li>Common Validation Annotations</li>
              <li>Custom Validation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-filetype-html"></i> Thymeleaf</h2>
            <ul>
              <li>Thymeleaf Basics</li>
              <li>Template Processing</li>
              <li>Form Handling</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> Spring Security</h2>
            <ul>
              <li>Authentication & Authorization</li>
              <li>JWT Authentication</li>
              <li>OAuth2</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cloud-upload"></i> File Handling</h2>
            <ul>
              <li>File Upload/Download</li>
              <li>Multipart Requests</li>
              <li>Storage Services</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-envelope"></i> Email Services</h2>
            <ul>
              <li>JavaMailSender</li>
              <li>Email Templates</li>
              <li>Attachment Handling</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-graph-up"></i> Actuator & Monitoring</h2>
            <ul>
              <li>Spring Boot Actuator</li>
              <li>Health Indicators</li>
              <li>Custom Endpoints</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-hdd-network"></i> Microservices</h2>
            <ul>
              <li>Microservices Architecture</li>
              <li>Spring Cloud</li>
              <li>Service Discovery</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightning"></i> Caching</h2>
            <ul>
              <li>Spring Cache Abstraction</li>
              <li>Cache Providers</li>
              <li>Cache Annotations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bug"></i> Exception Handling</h2>
            <ul>
              <li>@ControllerAdvice</li>
              <li>Custom Exceptions</li>
              <li>Global Exception Handler</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-text"></i> Logging</h2>
            <ul>
              <li>Logback Configuration</li>
              <li>SLF4J</li>
              <li>Log Levels</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-left-right"></i> API Documentation</h2>
            <ul>
              <li>Swagger/OpenAPI</li>
              <li>SpringDoc</li>
              <li>API Documentation Best Practices</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-database-check"></i> Database Migration</h2>
            <ul>
              <li>Flyway</li>
              <li>Liquibase</li>
              <li>Schema Versioning</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-speedometer2"></i> Performance Optimization</h2>
            <ul>
              <li>Connection Pooling</li>
              <li>Lazy Loading</li>
              <li>Query Optimization</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box-arrow-up"></i> Deployment</h2>
            <ul>
              <li>JAR vs WAR Packaging</li>
              <li>Docker Integration</li>
              <li>Cloud Deployment</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-clipboard2-check"></i> Testing</h2>
            <ul>
              <li>Unit Testing</li>
              <li>Integration Testing</li>
              <li>Mocking with Mockito</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpringbootSyllabus;