import React from 'react';

function GitSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-git"></i> Git & GitHub Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Version Control with Git and GitHub</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Version Control</h2>
            <ul>
              <li>What is Version Control?</li>
              <li>Centralized vs Distributed VCS</li>
              <li>Git vs GitHub</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-download"></i> Installation & Setup</h2>
            <ul>
              <li>Installing Git</li>
              <li>Configuring Git</li>
              <li>Git CLI vs GUI</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-terminal"></i> Basic Git Commands</h2>
            <ul>
              <li>Initializing a repository</li>
              <li>Tracking changes (add, commit)</li>
              <li>Checking status and history</li>
              <li>Viewing differences</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-folder"></i> Working with Repositories</h2>
            <ul>
              <li>Local vs Remote repositories</li>
              <li>Cloning repositories</li>
              <li>Pushing and pulling changes</li>
              <li>Working with remotes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> Branching</h2>
            <ul>
              <li>Creating and switching branches</li>
              <li>Merging branches</li>
              <li>Merge conflicts</li>
              <li>Branch management</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-github"></i> GitHub Concepts</h2>
            <ul>
              <li>Repositories</li>
              <li>Pull Requests</li>
              <li>Forks</li>
              <li>Issues</li>
              <li>Stars and Watching</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-excel"></i> Git Ignore</h2>
            <ul>
              <li>Purpose of .gitignore</li>
              <li>Common patterns</li>
              <li>Global gitignore</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tag"></i> Tags & Releases</h2>
            <ul>
              <li>Lightweight vs Annotated tags</li>
              <li>Creating and managing tags</li>
              <li>GitHub Releases</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-counterclockwise"></i> Undoing Changes</h2>
            <ul>
              <li>Checking out files</li>
              <li>Resetting commits</li>
              <li>Reverting commits</li>
              <li>Reset vs Revert</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-stack"></i> Git Stash</h2>
            <ul>
              <li>Stashing changes</li>
              <li>Applying stashed changes</li>
              <li>Managing multiple stashes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightning"></i> GitHub Actions</h2>
            <ul>
              <li>Introduction to CI/CD</li>
              <li>Workflow files</li>
              <li>Common actions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightbulb"></i> Best Practices</h2>
            <ul>
              <li>Commit strategies</li>
              <li>Branch naming</li>
              <li>Code review practices</li>
              <li>Collaborative workflows</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-3"></i> Workflow Examples</h2>
            <ul>
              <li>Feature branch workflow</li>
              <li>Gitflow workflow</li>
              <li>Forking workflow</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitSyllabus;