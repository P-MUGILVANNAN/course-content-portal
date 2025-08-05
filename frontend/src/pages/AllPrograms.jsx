import React from 'react';
import { useNavigate } from 'react-router-dom';

function AllPrograms() {
    const navigate = useNavigate();

    const programmingLanguages = [
        {
            name: "Java",
            description: "Practice Java programming questions with solutions",
            icon: "filetype-java",
            color: "bg-danger bg-opacity-10 text-danger",
            programLink: 'programs/java'
        },
        {
            name: "Python",
            description: "Python programming problems and solutions",
            icon: "filetype-py",
            color: "bg-info bg-opacity-10 text-info",
            programLink: 'programs/python'
        },
        {
            name: "C",
            description: "C programming exercises with answers",
            icon: "filetype-c",
            color: "bg-primary bg-opacity-10 text-primary",
            programLink: 'programs/c'
        },
        {
            name: "C++",
            description: "C++ coding problems and solutions",
            icon: "filetype-cpp",
            color: "bg-primary bg-opacity-10 text-primary",
            programLink: 'programs/c++'
        },
        {
            name: "C#",
            description: "C# programming questions with examples",
            icon: "filetype-cs",
            color: "bg-success bg-opacity-10 text-success",
            programLink: 'programs/csharp'
        },
        {
            name: "PHP",
            description: "PHP coding exercises and solutions",
            icon: "filetype-php",
            color: "bg-warning bg-opacity-10 text-warning",
            programLink: 'programs/php'
        },
        {
            name: "JavaScript",
            description: "JavaScript problems with solutions",
            icon: "filetype-js",
            color: "bg-warning bg-opacity-10 text-warning",
            programLink: 'programs/javascript'
        }
    ];


    return (
        <div className="all-programs-page">
            {/* Programs Section */}
            <section id="programs" className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">
                            <i className="bi bi-code-square me-2 text-primary"></i>
                            Programming Practice Questions
                        </h2>
                        <p className="lead text-muted">Select a programming language to practice problems with solutions</p>
                    </div>

                    <div className="row g-4">
                        {programmingLanguages.map((language, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <div
                                    className={`card h-100 border-0 shadow-sm hover-effect cursor-pointer ${language.color}`}
                                >
                                    <div className="card-body p-4 text-center">
                                        <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                            style={{ width: '70px', height: '70px' }}>
                                            <i className={`bi bi-${language.icon} fs-3`}></i>
                                        </div>
                                        <h4 className="card-title mb-2">{language.name}</h4>
                                        <p className="text-muted mb-3">{language.description}</p>
                                        <div className="badge bg-white text-dark p-2 mb-3">
                                            <i className="bi bi-collection me-1"></i> {language.name} Programs
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 text-center pb-3">
                                        <a href={language.programLink}>
                                            <button className="btn btn-outline-dark">
                                                <i className="bi bi-arrow-right me-2"></i>Practice Now
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                .cursor-pointer {
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
}

export default AllPrograms;