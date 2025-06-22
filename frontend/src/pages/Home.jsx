import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const courses = [
    {
      title: "HTML Fundamentals",
      description: "Master the building blocks of web development",
      icon: "filetype-html",
      templateLink: "/trainer/html-course"
    },
    {
      title: "CSS Styling",
      description: "Learn to style beautiful websites",
      icon: "filetype-css",
      templateLink: "/trainer/css-course"
    },
    {
      title: "JavaScript Programming",
      description: "Add interactivity to your websites",
      icon: "filetype-js",
      templateLink: "/trainer/js-course"
    },
    {
      title: "React JS",
      description: "Build modern web applications",
      icon: "filetype-jsx",
      templateLink: "/trainer/react-course"
    },
    {
      title: "Node.js",
      description: "Server-side JavaScript development",
      icon: "node-plus",
      templateLink: "/trainer/node-course"
    },
    {
      title: "MongoDB",
      description: "NoSQL database development",
      icon: "database",
      templateLink: "/trainer/db-mongodb"
    },
  ];

  return (
    <div className="course-portal">
      {/* Hero Section */}
      <header className="bg-info text-white py-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold mb-3">
                <i className="bi bi-journal-code me-2"></i>
                FIIT - Course Content Portal
              </h1>
              <p className="lead mb-4">
                Access practical course templates and build real projects.
                Click any course to view its interactive learning materials.
              </p>
              <div className="d-flex gap-3">
                <Link to={'/trainer/all-courses'} className="btn btn-light btn-lg px-4">
                  <i className="bi bi-book me-2"></i>Browse Courses
                </Link>
                <button className="btn btn-outline-light btn-lg px-4">
                  <i className="bi bi-play-circle me-2"></i>How It Works
                </button>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Coding on laptop"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Courses Section */}
      <section id="courses" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              <i className="bi bi-collection me-2 text-primary"></i>
              Available Courses
            </h2>
            <p className="lead text-muted">Click any course to access its learning materials</p>
          </div>
          <div className="row g-4">
            {courses.map((course, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <a href={course.templateLink} className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm hover-shadow hover-effect transition-all">
                    <div className="card-body p-4 text-center">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                        <i className={`bi bi-${course.icon} fs-3 text-primary`}></i>
                      </div>
                      <h4 className="card-title mb-2">{course.title}</h4>
                      <p className="text-muted mb-3">{course.description}</p>
                      <div className="badge bg-primary bg-opacity-10 text-primary p-2">
                        <i className="bi bi-files me-1"></i> Templates Available
                      </div>
                    </div>
                    <div className="card-footer bg-transparent border-0 text-center pb-3">
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-arrow-right me-2"></i>Access Course
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to={'/trainer/all-courses'}><button className='btn btn-primary'>Explore More</button></Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              <i className="bi bi-question-circle-fill me-2 text-primary"></i>
              How Our Portal Works
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 bg-white shadow-sm hover-effect h-100">
                <div className="card-body p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-search fs-3 text-primary"></i>
                  </div>
                  <h4>1. Choose Course</h4>
                  <p className="text-muted mb-0">Browse our collection of course materials and select what you want to learn</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 bg-white shadow-sm hover-effect h-100">
                <div className="card-body p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-file-earmark-code fs-3 text-primary"></i>
                  </div>
                  <h4>2. Access Templates</h4>
                  <p className="text-muted mb-0">Get instant access to HTML templates and practical examples</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 bg-white shadow-sm hover-effect h-100">
                <div className="card-body p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-laptop fs-3 text-primary"></i>
                  </div>
                  <h4>3. Practice & Learn</h4>
                  <p className="text-muted mb-0">Modify templates, experiment with code, and build your skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
                .hover-effect {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .hover-effect:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }
                .page-item.active .page-link {
                    background-color: #0d6efd;
                    border-color: #0d6efd;
                }
                .page-link {
                    color: #0d6efd;
                }
            `}</style>

      {/* Featured HTML Course */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="HTML code"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <h2 className="fw-bold mb-4">
                  <i className="bi bi-filetype-html text-primary me-2"></i>
                  Featured HTML Course
                </h2>
                <p className="lead mb-4">Get started with our comprehensive HTML learning materials</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    15+ ready-to-use HTML templates
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Step-by-step practical examples
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Beginner to advanced concepts
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Downloadable code samples
                  </li>
                </ul>
                <a href="/trainer/html-course" className="btn btn-primary btn-lg px-4">
                  <i className="bi bi-arrow-right me-2"></i>Start Learning HTML
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;