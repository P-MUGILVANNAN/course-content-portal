import React, { useState } from 'react';

function AllCourses() {
    const courses = [
        // Web Development
        {
            title: "HTML Fundamentals",
            description: "Master the building blocks of web development",
            icon: "filetype-html",
            templateLink: "/trainer/html-course",
            category: "Web Development"
        },
        {
            title: "CSS Styling",
            description: "Learn to style beautiful websites",
            icon: "filetype-css",
            templateLink: "/trainer/css-course",
            category: "Web Development"
        },
        {
            title: "JavaScript Programming",
            description: "Add interactivity to your websites",
            icon: "filetype-js",
            templateLink: "/trainer/js-course",
            category: "Web Development"
        },
        {
            title: "TypeScript Programming",
            description: "Superset of JS",
            icon: "filetype-tsx",
            templateLink: "/trainer/ts-course",
            category: "Web Development"
        },
        {
            title: "JQuery",
            description: "Superset of JS",
            icon: "filetype-js",
            templateLink: "/trainer/jq-course",
            category: "Web Development"
        },
        {
            title: "Bootstrap",
            description: "Add responsive across all design",
            icon: "bootstrap",
            templateLink: "/trainer/bs-course",
            category: "Web Development"
        },
        {
            title: "Tailwind CSS",
            description: "Add responsive across all design",
            icon: "code-slash",
            templateLink: "/trainer/tailwind-course",
            category: "Web Development"
        },
        {
            title: "React JS",
            description: "Build modern web applications",
            icon: "filetype-jsx",
            templateLink: "/trainer/react-course",
            category: "Web Development"
        },
        {
            title: "Angular",
            description: "Build modern web applications",
            icon: "box-seam",
            templateLink: "/trainer/angular-course",
            category: "Web Development"
        },
        {
            title: "Vue Js",
            description: "Build modern web applications",
            icon: "filetype-js",
            templateLink: "/trainer/vue-course",
            category: "Web Development"
        },
        {
            title: "Node.js",
            description: "Server-side JavaScript development",
            icon: "node-plus",
            templateLink: "/trainer/node-course",
            category: "Web Development"
        },
        {
            title: "Express.js",
            description: "Build robust backend services",
            icon: "server",
            templateLink: "/trainer/express-course",
            category: "Web Development"
        },
        
        // Java Ecosystem
        {
            title: "Core Java",
            description: "Master Java programming fundamentals",
            icon: "filetype-java",
            templateLink: "/trainer/java-course",
            category: "Java"
        },
        {
            title: "Java Servlets",
            description: "Web development with Java Servlets",
            icon: "file-earmark-code",
            templateLink: "/trainer/servlets-course",
            category: "Java"
        },
        {
            title: "JSP",
            description: "Java Server Pages development",
            icon: "file-earmark-code",
            templateLink: "/trainer/jsp-course",
            category: "Java"
        },
        {
            title: "Spring Boot",
            description: "Enterprise Java applications",
            icon: "flower1",
            templateLink: "/trainer/springboot-course",
            category: "Java"
        },
        
        // Python Ecosystem
        {
            title: "Core Python",
            description: "Python programming fundamentals",
            icon: "filetype-py",
            templateLink: "/trainer/python-course",
            category: "Python"
        },
        {
            title: "Django",
            description: "Python web framework",
            icon: "terminal-fill",
            templateLink: "/trainer/django-course",
            category: "Python"
        },
        {
            title: "Flask",
            description: "Python web framework",
            icon: "terminal",
            templateLink: "/trainer/flask-course",
            category: "Python"
        },
        {
            title: "Numpy",
            description: "Python module",
            icon: "calculator",
            templateLink: "/trainer/numpy-course",
            category: "Python"
        },
        {
            title: "Scipy",
            description: "Python module",
            icon: "gear",
            templateLink: "/trainer/scipy-course",
            category: "Python"
        },
        {
            title: "Pandas",
            description: "Python module",
            icon: "table",
            templateLink: "/trainer/pandas-course",
            category: "Python"
        },
        {
            title: "MatPlotLib",
            description: "Python module",
            icon: "pie-chart",
            templateLink: "/trainer/matplot-course",
            category: "Python"
        },
        {
            title: "Seaborn",
            description: "Python module",
            icon: "bar-chart",
            templateLink: "/trainer/seaborn-course",
            category: "Python"
        },
        // AI Fundamentals
        {
            title: "Artificial Intelligence",
            description: "AI",
            icon: "cpu",
            templateLink: "/trainer/ai-course",
            category: "AI/ML"
        },
        {
            title: "Machine Learning",
            description: "Dive into machine learning",
            icon: "diagram-3",
            templateLink: "/trainer/ml-course",
            category: "AI/ML"
        },
        
        // C Family
        {
            title: "C Programming",
            description: "Learn foundational C programming",
            icon: "filetype-cs",
            templateLink: "/trainer/c-course",
            category: "C Family"
        },
        {
            title: "C++ Programming",
            description: "Object-oriented C++ development",
            icon: "filetype-cs",
            templateLink: "/trainer/cpp-course",
            category: "C Family"
        },
        {
            title: "C# Programming",
            description: "Object-oriented C## development",
            icon: "filetype-cs",
            templateLink: "/trainer/csharp-course",
            category: "C Family"
        },
        // PHP Ecosystem
        {
            title: "PHP",
            description: "Object-oriented PHP development",
            icon: "filetype-php",
            templateLink: "/trainer/php-course",
            category: "PHP"
        },
        {
            title: "Laravel",
            description: "PHP Web Framework",
            icon: "box-seam",
            templateLink: "/trainer/laravel-course",
            category: "PHP"
        },
        // Databases
        {
            title: "SQL Fundamentals",
            description: "Database querying with SQL",
            icon: "filetype-sql",
            templateLink: "/trainer/sql-course",
            category: "Databases"
        },
        {
            title: "MongoDB",
            description: "NoSQL database development",
            icon: "database",
            templateLink: "/trainer/db-mongodb",
            category: "Databases"
        },
        {
            title: "MySQL",
            description: "Relational database management",
            icon: "database",
            templateLink: "/trainer/db-mysql",
            category: "Databases"
        },
        {
            title: "MSSQL",
            description: "Relational database management",
            icon: "database",
            templateLink: "/trainer/db-mssql",
            category: "Databases"
        },
        {
            title: "SQLite",
            description: "Relational database management",
            icon: "database",
            templateLink: "/trainer/db-sqlite",
            category: "Databases"
        },
        {
            title: "POSTGRESQL",
            description: "Relational database management",
            icon: "database",
            templateLink: "/trainer/db-postgresql",
            category: "Databases"
        },
        // Mobile App Development
        {
            title: "Flutter",
            description: "Mobile App Developing using Flutter",
            icon: "layers",
            templateLink: "/trainer/flutter-course",
            category: "Mobile App"
        },
        {
            title: "React-Native",
            description: "Mobile App Developing using React-native",
            icon: "filetype-jsx",
            templateLink: "/trainer/reactnative-course",
            category: "Mobile App"
        },
        
        // Github
        {
            title: "Git & GitHub",
            description: "Version control system",
            icon: "github",
            templateLink: "/trainer/github-course",
            category: "Tools"
        }
    ];

    // State for pagination and filtering
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const coursesPerPage = 7;

    // Filter courses by category
    const filteredCourses = selectedCategory === "All" 
        ? courses 
        : courses.filter(course => course.category === selectedCategory);

    // Get current courses
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Categories for filter buttons
    const categories = ["All", "Web Development", "Java", "Python", "C Family", "PHP", "Databases", "AI/ML", "Mobile App", "Tools"];

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
                                {categories.map((category, index) => (
                                    <button 
                                        key={index}
                                        className={`btn btn-sm ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setCurrentPage(1); // Reset to first page when changing category
                                        }}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {currentCourses.map((course, index) => (
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
                    {filteredCourses.length > coursesPerPage && (
                        <div className="d-flex justify-content-center mt-5">
                            <nav aria-label="Course pagination">
                                <ul className="pagination">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button 
                                            className="page-link" 
                                            onClick={() => paginate(currentPage - 1)}
                                            disabled={currentPage === 1}
                                        >
                                            Previous
                                        </button>
                                    </li>
                                    {pageNumbers.map(number => (
                                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                            <button 
                                                className="page-link" 
                                                onClick={() => paginate(number)}
                                            >
                                                {number}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                        <button 
                                            className="page-link" 
                                            onClick={() => paginate(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                        >
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    )}
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