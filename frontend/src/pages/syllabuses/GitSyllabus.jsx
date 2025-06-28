import React from 'react';

function GitSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-git fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Git & GitHub Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Version Control with Git and GitHub</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Version Control</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Version Control?</li>
                <li className="list-group-item">Centralized vs Distributed VCS</li>
                <li className="list-group-item">Git vs GitHub</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-download text-primary me-2"></i>Installation & Setup</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Installing Git</li>
                <li className="list-group-item">Configuring Git</li>
                <li className="list-group-item">Git CLI vs GUI</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-terminal text-primary me-2"></i>Basic Git Commands</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Initializing a repository</li>
                <li className="list-group-item">Tracking changes (add, commit)</li>
                <li className="list-group-item">Checking status and history</li>
                <li className="list-group-item">Viewing differences</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-folder text-primary me-2"></i>Working with Repositories</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Local vs Remote repositories</li>
                <li className="list-group-item">Cloning repositories</li>
                <li className="list-group-item">Pushing and pulling changes</li>
                <li className="list-group-item">Working with remotes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>Branching</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Creating and switching branches</li>
                <li className="list-group-item">Merging branches</li>
                <li className="list-group-item">Merge conflicts</li>
                <li className="list-group-item">Branch management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-github text-primary me-2"></i>GitHub Concepts</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Repositories</li>
                <li className="list-group-item">Pull Requests</li>
                <li className="list-group-item">Forks</li>
                <li className="list-group-item">Issues</li>
                <li className="list-group-item">Stars and Watching</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-excel text-primary me-2"></i>Git Ignore</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Purpose of .gitignore</li>
                <li className="list-group-item">Common patterns</li>
                <li className="list-group-item">Global gitignore</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tag text-primary me-2"></i>Tags & Releases</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Lightweight vs Annotated tags</li>
                <li className="list-group-item">Creating and managing tags</li>
                <li className="list-group-item">GitHub Releases</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-counterclockwise text-primary me-2"></i>Undoing Changes</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Checking out files</li>
                <li className="list-group-item">Resetting commits</li>
                <li className="list-group-item">Reverting commits</li>
                <li className="list-group-item">Reset vs Revert</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-stack text-primary me-2"></i>Git Stash</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Stashing changes</li>
                <li className="list-group-item">Applying stashed changes</li>
                <li className="list-group-item">Managing multiple stashes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightning text-primary me-2"></i>GitHub Actions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Introduction to CI/CD</li>
                <li className="list-group-item">Workflow files</li>
                <li className="list-group-item">Common actions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightbulb text-primary me-2"></i>Best Practices</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Commit strategies</li>
                <li className="list-group-item">Branch naming</li>
                <li className="list-group-item">Code review practices</li>
                <li className="list-group-item">Collaborative workflows</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-3 text-primary me-2"></i>Workflow Examples</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Feature branch workflow</li>
                <li className="list-group-item">Gitflow workflow</li>
                <li className="list-group-item">Forking workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitSyllabus;