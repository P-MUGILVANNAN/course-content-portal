import React, { useState } from 'react';

function AllSyllabuses() {
    const syllabuses = [
        // Web Development
        {
            title: "HTML Fundamentals Syllabus",
            description: "Complete syllabus for HTML course",
            icon: "filetype-html",
            templateLink: "/trainer/html-syllabus",
            category: "Web Development"
        },
        {
            title: "CSS Styling Syllabus",
            description: "Complete syllabus for CSS course",
            icon: "filetype-css",
            templateLink: "/trainer/css-syllabus",
            category: "Web Development"
        },
        {
            title: "JavaScript Programming Syllabus",
            description: "Complete syllabus for JavaScript course",
            icon: "filetype-js",
            templateLink: "/trainer/js-syllabus",
            category: "Web Development"
        },
        {
            title: "TypeScript Programming Syllabus",
            description: "Complete syllabus for TypeScript course",
            icon: "filetype-tsx",
            templateLink: "/trainer/ts-syllabus",
            category: "Web Development"
        },
        {
            title: "JQuery Syllabus",
            description: "Complete syllabus for JQuery course",
            icon: "filetype-js",
            templateLink: "/trainer/jq-syllabus",
            category: "Web Development"
        },
        {
            title: "Bootstrap Syllabus",
            description: "Complete syllabus for Bootstrap course",
            icon: "bootstrap",
            templateLink: "/trainer/bs-syllabus",
            category: "Web Development"
        },
        {
            title: "Tailwind CSS Syllabus",
            description: "Complete syllabus for Tailwind CSS course",
            icon: "code-slash",
            templateLink: "/trainer/tailwind-syllabus",
            category: "Web Development"
        },
        {
            title: "React JS Syllabus",
            description: "Complete syllabus for React JS course",
            icon: "filetype-jsx",
            templateLink: "/trainer/react-syllabus",
            category: "Web Development"
        },
        {
            title: "Angular Syllabus",
            description: "Complete syllabus for Angular course",
            icon: "box-seam",
            templateLink: "/trainer/angular-syllabus",
            category: "Web Development"
        },
        {
            title: "Vue Js Syllabus",
            description: "Complete syllabus for Vue Js course",
            icon: "filetype-js",
            templateLink: "/trainer/vue-syllabus",
            category: "Web Development"
        },
        {
            title: "Node.js Syllabus",
            description: "Complete syllabus for Node.js course",
            icon: "node-plus",
            templateLink: "/trainer/node-syllabus",
            category: "Web Development"
        },
        {
            title: "Express.js Syllabus",
            description: "Complete syllabus for Express.js course",
            icon: "server",
            templateLink: "/trainer/express-syllabus",
            category: "Web Development"
        },
        
        // Java Ecosystem
        {
            title: "Core Java Syllabus",
            description: "Complete syllabus for Java course",
            icon: "filetype-java",
            templateLink: "/trainer/java-syllabus",
            category: "Java"
        },
        {
            title: "Java Servlets Syllabus",
            description: "Complete syllabus for Java Servlets course",
            icon: "file-earmark-code",
            templateLink: "/trainer/servlets-syllabus",
            category: "Java"
        },
        {
            title: "JSP Syllabus",
            description: "Complete syllabus for JSP course",
            icon: "file-earmark-code",
            templateLink: "/trainer/jsp-syllabus",
            category: "Java"
        },
        {
            title: "Spring Boot Syllabus",
            description: "Complete syllabus for Spring Boot course",
            icon: "flower1",
            templateLink: "/trainer/springboot-syllabus",
            category: "Java"
        },
        
        // Python Ecosystem
        {
            title: "Core Python Syllabus",
            description: "Complete syllabus for Python course",
            icon: "filetype-py",
            templateLink: "/trainer/python-syllabus",
            category: "Python"
        },
        {
            title: "Django Syllabus",
            description: "Complete syllabus for Django course",
            icon: "terminal-fill",
            templateLink: "/trainer/django-syllabus",
            category: "Python"
        },
        {
            title: "Flask Syllabus",
            description: "Complete syllabus for Flask course",
            icon: "terminal",
            templateLink: "/trainer/flask-syllabus",
            category: "Python"
        },
        {
            title: "Numpy Syllabus",
            description: "Complete syllabus for Numpy course",
            icon: "calculator",
            templateLink: "/trainer/numpy-syllabus",
            category: "Python"
        },
        {
            title: "Scipy Syllabus",
            description: "Complete syllabus for Scipy course",
            icon: "gear",
            templateLink: "/trainer/scipy-syllabus",
            category: "Python"
        },
        {
            title: "Pandas Syllabus",
            description: "Complete syllabus for Pandas course",
            icon: "table",
            templateLink: "/trainer/pandas-syllabus",
            category: "Python"
        },
        {
            title: "MatPlotLib Syllabus",
            description: "Complete syllabus for MatPlotLib course",
            icon: "pie-chart",
            templateLink: "/trainer/matplot-syllabus",
            category: "Python"
        },
        {
            title: "Seaborn Syllabus",
            description: "Complete syllabus for Seaborn course",
            icon: "bar-chart",
            templateLink: "/trainer/seaborn-syllabus",
            category: "Python"
        },
        // AI Fundamentals
        {
            title: "Artificial Intelligence Syllabus",
            description: "Complete syllabus for AI course",
            icon: "cpu",
            templateLink: "/trainer/ai-syllabus",
            category: "AI/ML"
        },
        {
            title: "Machine Learning Syllabus",
            description: "Complete syllabus for ML course",
            icon: "diagram-3",
            templateLink: "/trainer/ml-syllabus",
            category: "AI/ML"
        },
        
        // C Family
        {
            title: "C Programming Syllabus",
            description: "Complete syllabus for C course",
            icon: "filetype-cs",
            templateLink: "/trainer/c-syllabus",
            category: "C Family"
        },
        {
            title: "C++ Programming Syllabus",
            description: "Complete syllabus for C++ course",
            icon: "filetype-cs",
            templateLink: "/trainer/cpp-syllabus",
            category: "C Family"
        },
        {
            title: "C# Programming Syllabus",
            description: "Complete syllabus for C# course",
            icon: "filetype-cs",
            templateLink: "/trainer/csharp-syllabus",
            category: "C Family"
        },
        // PHP Ecosystem
        {
            title: "PHP Syllabus",
            description: "Complete syllabus for PHP course",
            icon: "filetype-php",
            templateLink: "/trainer/php-syllabus",
            category: "PHP"
        },
        {
            title: "Laravel Syllabus",
            description: "Complete syllabus for Laravel course",
            icon: "box-seam",
            templateLink: "/trainer/laravel-syllabus",
            category: "PHP"
        },
        // Databases
        {
            title: "SQL Fundamentals Syllabus",
            description: "Complete syllabus for SQL course",
            icon: "filetype-sql",
            templateLink: "/trainer/sql-syllabus",
            category: "Databases"
        },
        {
            title: "MongoDB Syllabus",
            description: "Complete syllabus for MongoDB course",
            icon: "database",
            templateLink: "/trainer/db-mongodb-syllabus",
            category: "Databases"
        },
        {
            title: "MySQL Syllabus",
            description: "Complete syllabus for MySQL course",
            icon: "database",
            templateLink: "/trainer/db-mysql-syllabus",
            category: "Databases"
        },
        {
            title: "MSSQL Syllabus",
            description: "Complete syllabus for MSSQL course",
            icon: "database",
            templateLink: "/trainer/db-mssql-syllabus",
            category: "Databases"
        },
        {
            title: "SQLite Syllabus",
            description: "Complete syllabus for SQLite course",
            icon: "database",
            templateLink: "/trainer/db-sqlite-syllabus",
            category: "Databases"
        },
        {
            title: "POSTGRESQL Syllabus",
            description: "Complete syllabus for POSTGRESQL course",
            icon: "database",
            templateLink: "/trainer/db-postgresql-syllabus",
            category: "Databases"
        },
        // Mobile App Development
        {
            title: "Flutter Syllabus",
            description: "Complete syllabus for Flutter course",
            icon: "layers",
            templateLink: "/trainer/flutter-syllabus",
            category: "Mobile App"
        },
        {
            title: "React-Native Syllabus",
            description: "Complete syllabus for React-Native course",
            icon: "filetype-jsx",
            templateLink: "/trainer/reactnative-syllabus",
            category: "Mobile App"
        },
        
        // Github
        {
            title: "Git & GitHub Syllabus",
            description: "Complete syllabus for GitHub course",
            icon: "github",
            templateLink: "/trainer/github-syllabus",
            category: "Tools"
        }
    ];

    // State for pagination and filtering
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const coursesPerPage = 6;

    // Filter syllabuses by category
    const filteredSyllabuses = selectedCategory === "All" 
        ? syllabuses 
        : syllabuses.filter(syllabus => syllabus.category === selectedCategory);

    // Get current syllabuses
    const indexOfLastSyllabus = currentPage * coursesPerPage;
    const indexOfFirstSyllabus = indexOfLastSyllabus - coursesPerPage;
    const currentSyllabuses = filteredSyllabuses.slice(indexOfFirstSyllabus, indexOfLastSyllabus);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(filteredSyllabuses.length / coursesPerPage);

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Categories for filter buttons
    const categories = ["All", "Web Development", "Java", "Python", "C Family", "PHP", "Databases", "AI/ML", "Mobile App", "Tools"];

    return (
        <div className="all-syllabuses-page bg-light">
            {/* Header Section */}
            <div className="py-5 bg-primary text-white">
                <div className="container text-center">
                    <h1 className="display-5 fw-bold mb-3">
                        <i className="bi bi-journal-bookmark-fill me-2"></i>
                        Course Syllabuses
                    </h1>
                    <p className="lead mb-0">Explore our comprehensive collection of course outlines and learning paths</p>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="container py-5">
                {/* Category Filter */}
                <div className="row mb-5">
                    <div className="col-12">
                        <div className="card shadow-sm">
                            <div className="card-body p-4">
                                <h3 className="h5 mb-4">Filter by Technology</h3>
                                <div className="d-flex flex-wrap gap-2">
                                    {categories.map((category, index) => (
                                        <button 
                                            key={index}
                                            className={`btn btn-sm ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                                            onClick={() => {
                                                setSelectedCategory(category);
                                                setCurrentPage(1);
                                            }}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Results Count */}
                <div className="mb-4">
                    <h3 className="h5">
                        Showing {filteredSyllabuses.length} {filteredSyllabuses.length === 1 ? 'syllabus' : 'syllabuses'} 
                        {selectedCategory !== "All" && ` in ${selectedCategory}`}
                    </h3>
                </div>
                
                {/* Syllabus Cards */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {currentSyllabuses.map((syllabus, index) => (
                        <div key={index} className="col">
                            <div className="card h-100 border-0 shadow-sm syllabus-card">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="bg-primary bg-opacity-10 rounded p-2 me-3">
                                            <i className={`bi bi-${syllabus.icon} fs-4 text-primary`}></i>
                                        </div>
                                        <div>
                                            <span className="badge bg-primary bg-opacity-10 text-primary">
                                                {syllabus.category}
                                            </span>
                                        </div>
                                    </div>
                                    <h4 className="card-title mb-3">{syllabus.title}</h4>
                                    <p className="card-text text-muted">{syllabus.description}</p>
                                </div>
                                <div className="card-footer bg-transparent border-top-0 pb-3 px-4">
                                    <a href={syllabus.templateLink} className="btn btn-primary w-100">
                                        <i className="bi bi-eye-fill me-2"></i>View Syllabus
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Pagination */}
                {filteredSyllabuses.length > coursesPerPage && (
                    <div className="d-flex justify-content-center mt-5">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button 
                                        className="page-link" 
                                        onClick={() => paginate(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        <i className="bi bi-chevron-left"></i>
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
                                        <i className="bi bi-chevron-right"></i>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
            
            {/* Empty State */}
            {filteredSyllabuses.length === 0 && (
                <div className="container py-5 text-center">
                    <div className="card shadow-sm py-5">
                        <div className="card-body">
                            <i className="bi bi-journal-x display-4 text-muted mb-4"></i>
                            <h3 className="h4 mb-3">No syllabuses found</h3>
                            <p className="text-muted mb-4">We couldn't find any syllabuses matching your criteria.</p>
                            <button 
                                className="btn btn-primary"
                                onClick={() => {
                                    setSelectedCategory("All");
                                    setCurrentPage(1);
                                }}
                            >
                                Show All Syllabuses
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            <style jsx>{`
                .syllabus-card {
                    transition: all 0.2s ease;
                    border-radius: 10px;
                }
                .syllabus-card:hover {
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

export default AllSyllabuses;