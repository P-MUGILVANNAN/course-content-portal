import React from 'react';

function AllCourses() {
    const courses = [
        // Web Development
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
            title: "Bootstrap",
            description: "Add responsive across all design",
            icon: "filetype-bootstrap",
            templateLink: "/trainer/bs-course"
        },
        {
            title: "React JS",
            description: "Build modern web applications",
            icon: "react",
            templateLink: "/trainer/react-course"
        },
        {
            title: "Node.js",
            description: "Server-side JavaScript development",
            icon: "node-plus",
            templateLink: "/trainer/node-course"
        },
        {
            title: "Express.js",
            description: "Build robust backend services",
            icon: "server",
            templateLink: "/trainer/express-course"
        },
        
        // Java Ecosystem
        {
            title: "Core Java",
            description: "Master Java programming fundamentals",
            icon: "filetype-java",
            templateLink: "/trainer/java-course"
        },
        {
            title: "Java Servlets",
            description: "Web development with Java Servlets",
            icon: "file-earmark-code",
            templateLink: "/trainer/servlets-course"
        },
        {
            title: "JSP",
            description: "Java Server Pages development",
            icon: "filetype-jsp",
            templateLink: "/trainer/jsp-course"
        },
        {
            title: "Spring Boot",
            description: "Enterprise Java applications",
            icon: "springboot",
            templateLink: "/trainer/springboot-course"
        },
        
        // Python Ecosystem
        {
            title: "Core Python",
            description: "Python programming fundamentals",
            icon: "filetype-py",
            templateLink: "/trainer/python-course"
        },
        {
            title: "Django",
            description: "Python web framework",
            icon: "filetype-django",
            templateLink: "/trainer/django-course"
        },
        
        // C Family
        {
            title: "C Programming",
            description: "Learn foundational C programming",
            icon: "filetype-c",
            templateLink: "/trainer/c-course"
        },
        {
            title: "C++ Programming",
            description: "Object-oriented C++ development",
            icon: "filetype-cpp",
            templateLink: "/trainer/cpp-course"
        },
        {
            title: "C# Programming",
            description: ".NET development with C#",
            icon: "filetype-cs",
            templateLink: "/trainer/csharp-course"
        },
        
        // PHP Ecosystem
        {
            title: "PHP Programming",
            description: "Server-side web development",
            icon: "filetype-php",
            templateLink: "/trainer/php-course"
        },
        {
            title: "Laravel",
            description: "PHP web framework",
            icon: "laravel",
            templateLink: "/trainer/laravel-course"
        },
        
        // Databases
        {
            title: "SQL Fundamentals",
            description: "Database querying with SQL",
            icon: "filetype-sql",
            templateLink: "/trainer/sql-course"
        },
        {
            title: "MongoDB",
            description: "NoSQL database development",
            icon: "database",
            templateLink: "/trainer/db-mongodb"
        },
        {
            title: "MySQL",
            description: "Relational database management",
            icon: "database",
            templateLink: "/trainer/db-mysql"
        }
    ];

    return (
        <div className="all-courses-page">
            {/* Courses Section */}
            <section id="courses" className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">
                            <i className="bi bi-stack me-2 text-primary"></i>
                            All Available Courses
                        </h2>
                        <p className="lead text-muted">Browse our comprehensive collection of programming courses</p>
                    </div>
                    
                    {/* Categories Filter */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="d-flex flex-wrap justify-content-center gap-2">
                                <button className="btn btn-sm btn-outline-primary">All</button>
                                <button className="btn btn-sm btn-outline-primary">Web Development</button>
                                <button className="btn btn-sm btn-outline-primary">Java</button>
                                <button className="btn btn-sm btn-outline-primary">Python</button>
                                <button className="btn btn-sm btn-outline-primary">C Family</button>
                                <button className="btn btn-sm btn-outline-primary">PHP</button>
                                <button className="btn btn-sm btn-outline-primary">Databases</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {courses.map((course, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm hover-effect">
                                    <div className="card-body p-4 text-center">
                                        <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                                             style={{ width: '70px', height: '70px' }}>
                                            <i className={`bi bi-${course.icon} fs-3 text-primary`}></i>
                                        </div>
                                        <h4 className="card-title mb-2">{course.title}</h4>
                                        <p className="text-muted mb-3">{course.description}</p>
                                        <div className="badge bg-primary bg-opacity-10 text-primary p-2 mb-3">
                                            <i className="bi bi-files me-1"></i> Templates Available
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 text-center pb-3">
                                        <a href={course.templateLink} className="btn btn-outline-primary">
                                            <i className="bi bi-arrow-right me-2"></i>Access Course
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Pagination */}
                    <div className="d-flex justify-content-center mt-5">
                        <nav aria-label="Course pagination">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
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
        </div>
    );
}

export default AllCourses;