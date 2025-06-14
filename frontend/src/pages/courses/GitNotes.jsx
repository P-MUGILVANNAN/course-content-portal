import React from 'react';

function GitNotes() {
  return (
    <div className="bg-light">
      <style>
        {`
          pre {
            background-color: #1f2937;
            color: #e5e7eb;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
          }
          code {
            font-family: 'Courier New', monospace;
          }
          .sidebar {
            position: sticky;
            top: 1rem;
            height: calc(100vh - 2rem);
            overflow-y: auto;
          }
          @media (max-width: 991.98px) {
            .sidebar {
              position: static;
              height: auto;
              margin-bottom: 20px;
              overflow-y: visible;
            }
          }
          .nav-link {
            color: #495057;
          }
          .nav-link:hover {
            color: #0d6efd;
          }
          .property-card {
            background-color: #f8f9fa;
            border-left: 4px solid #0d6efd;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 4px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1rem;
          }
          th, td {
            border: 1px solid #dee2e6;
            padding: 0.75rem;
            text-align: left;
          }
          th {
            background-color: #f8f9fa;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-git"></i> Git & GitHub Notes</h1>
          <p className="lead">Your Comprehensive Guide to Version Control</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#installation"><i className="bi bi-download"></i> Installation & Setup</a>
              <a className="nav-link" href="#basic-commands"><i className="bi bi-terminal"></i> Basic Commands</a>
              <a className="nav-link" href="#repositories"><i className="bi bi-folder"></i> Working with Repositories</a>
              <a className="nav-link" href="#branching"><i className="bi bi-code-square"></i> Branching</a>
              <a className="nav-link" href="#github-concepts"><i className="bi bi-github"></i> GitHub Concepts</a>
              <a className="nav-link" href="#gitignore"><i className="bi bi-file-earmark-excel"></i> Git Ignore</a>
              <a className="nav-link" href="#tags"><i className="bi bi-tag"></i> Tags & Releases</a>
              <a className="nav-link" href="#undoing"><i className="bi bi-arrow-counterclockwise"></i> Undoing Changes</a>
              <a className="nav-link" href="#stash"><i className="bi bi-stack"></i> Git Stash</a>
              <a className="nav-link" href="#actions"><i className="bi bi-lightning"></i> GitHub Actions</a>
              <a className="nav-link" href="#tips"><i className="bi bi-lightbulb"></i> Tips & Best Practices</a>
              <a className="nav-link" href="#workflow"><i className="bi bi-diagram-3"></i> Workflow Example</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-version"></i> Version Control System (VCS)</h3>
                <p>A tool that helps track and manage changes to code over time. It allows multiple developers to work on the same project without conflicts.</p>
                <p><strong>Example:</strong> Git, SVN, Mercurial</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-server"></i> Centralized VCS</h3>
                <p>A version control system where all file versions are stored on a central server. Users check out files from this central server.</p>
                <p><strong>Example:</strong> Subversion (SVN)</p>
                <p><strong>Limitation:</strong> Requires network connection to work with the repository.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-pc"></i> Distributed VCS</h3>
                <p>A version control system where every user has a complete local copy of the repository including its full history.</p>
                <p><strong>Example:</strong> Git, Mercurial</p>
                <p><strong>Advantage:</strong> Can work offline and has better performance.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-git"></i> Git</h3>
                <p>A free, open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.</p>
                <p><strong>Created by:</strong> Linus Torvalds in 2005 for Linux kernel development</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-github"></i> GitHub</h3>
                <p>A cloud-based hosting service that lets you manage Git repositories. It provides a web-based graphical interface and access control.</p>
                <p><strong>Features:</strong> Pull requests, issue tracking, project management tools</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-compare"></i> Git vs GitHub</h3>
                <p><strong>Git:</strong> A version control tool that you install and run locally on your computer</p>
                <p><strong>GitHub:</strong> A hosting service for Git repositories that adds web-based collaboration features</p>
                <p><strong>Analogy:</strong> Git is like a car's engine, GitHub is like the garage where you park the car.</p>
              </div>
            </section>

            <section id="installation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-download"></i> Installation & Setup</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-download"></i> Installing Git</h3>
                <p>Download Git from the official website: <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">https://git-scm.com</a></p>
                <p>Follow the installation wizard for your operating system (Windows, macOS, Linux).</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> Configuring Git</h3>
                <p>After installation, configure your username and email which will be associated with your commits:</p>
                <pre className="mb-3"><code>{`git config --global user.name "Your Name"
git config --global user.email "you@example.com"`}</code></pre>
                <p><strong>Note:</strong> The <code>--global</code> flag sets these configurations for all repositories on your system.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-terminal"></i> Git CLI vs GUI</h3>
                <p><strong>Git CLI (Command Line Interface):</strong> The original interface for Git, run from terminal/command prompt.</p>
                <p><strong>Git GUI:</strong> Graphical user interfaces that provide visual tools for Git operations (GitHub Desktop, GitKraken, Sourcetree).</p>
              </div>
            </section>

            <section id="basic-commands" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-terminal"></i> Basic Commands</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-ul"></i> Essential Git Commands</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Command</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>git init</code></td>
                      <td>Initialize a new local Git repository</td>
                      <td><code>git init</code> (creates .git folder)</td>
                    </tr>
                    <tr>
                      <td><code>git status</code></td>
                      <td>Check status of working directory (staged/unstaged files)</td>
                      <td><code>git status</code></td>
                    </tr>
                    <tr>
                      <td><code>git add .</code></td>
                      <td>Add all files to staging area</td>
                      <td><code>git add .</code> or <code>git add filename</code></td>
                    </tr>
                    <tr>
                      <td><code>git commit -m "msg"</code></td>
                      <td>Commit staged changes with a message</td>
                      <td><code>git commit -m "Initial commit"</code></td>
                    </tr>
                    <tr>
                      <td><code>git log</code></td>
                      <td>Show commit history</td>
                      <td><code>git log --oneline</code> (compact view)</td>
                    </tr>
                    <tr>
                      <td><code>git diff</code></td>
                      <td>Show changes between commits, commit and working tree, etc.</td>
                      <td><code>git diff</code> (unstaged changes)</td>
                    </tr>
                    <tr>
                      <td><code>git show</code></td>
                      <td>Show detailed information about a commit</td>
                      <td><code>git show commit_hash</code></td>
                    </tr>
                    <tr>
                      <td><code>git rm</code></td>
                      <td>Remove files from working tree and staging area</td>
                      <td><code>git rm filename</code></td>
                    </tr>
                    <tr>
                      <td><code>git mv</code></td>
                      <td>Move or rename a file</td>
                      <td><code>git mv oldname newname</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-3"></i> Git Workflow</h3>
                <ol>
                  <li>Make changes in your working directory</li>
                  <li>Stage changes with <code>git add</code></li>
                  <li>Commit changes with <code>git commit</code></li>
                  <li>Repeat the cycle</li>
                </ol>
              </div>
            </section>

            <section id="repositories" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-folder"></i> Working with Repositories</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-cloud-download"></i> Remote Repository Commands</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Command</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>git clone &lt;url&gt;</code></td>
                      <td>Copy a remote repository to your local machine</td>
                      <td><code>git clone https://github.com/user/repo.git</code></td>
                    </tr>
                    <tr>
                      <td><code>git remote -v</code></td>
                      <td>List remote connections</td>
                      <td><code>git remote -v</code></td>
                    </tr>
                    <tr>
                      <td><code>git push</code></td>
                      <td>Upload local commits to remote repository</td>
                      <td><code>git push origin main</code></td>
                    </tr>
                    <tr>
                      <td><code>git pull</code></td>
                      <td>Download changes from remote and merge into local branch</td>
                      <td><code>git pull origin main</code></td>
                    </tr>
                    <tr>
                      <td><code>git fetch</code></td>
                      <td>Download changes from remote but don't merge</td>
                      <td><code>git fetch origin</code></td>
                    </tr>
                    <tr>
                      <td><code>git merge</code></td>
                      <td>Combine changes from different branches</td>
                      <td><code>git merge feature-branch</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-repeat"></i> Push vs Pull vs Fetch</h3>
                <p><strong>Push:</strong> Sends your commits to the remote repository</p>
                <p><strong>Pull:</strong> Fetches changes from remote and immediately merges them into your local branch</p>
                <p><strong>Fetch:</strong> Downloads changes from remote but doesn't merge them (lets you review before merging)</p>
              </div>
            </section>

            <section id="branching" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Branching</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-2"></i> What is Branching?</h3>
                <p>Branching allows you to diverge from the main line of development and work independently without affecting the main codebase.</p>
                <p><strong>Common Use:</strong> Developing new features, fixing bugs, experimenting with ideas</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-terminal"></i> Branch Commands</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Command</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>git branch</code></td>
                      <td>List all local branches</td>
                      <td><code>git branch</code></td>
                    </tr>
                    <tr>
                      <td><code>git checkout -b &lt;branch&gt;</code></td>
                      <td>Create and switch to new branch</td>
                      <td><code>git checkout -b featureX</code></td>
                    </tr>
                    <tr>
                      <td><code>git switch &lt;branch&gt;</code></td>
                      <td>Switch to existing branch</td>
                      <td><code>git switch featureX</code></td>
                    </tr>
                    <tr>
                      <td><code>git merge &lt;branch&gt;</code></td>
                      <td>Merge branch into current branch</td>
                      <td><code>git merge featureX</code></td>
                    </tr>
                    <tr>
                      <td><code>git branch -d &lt;branch&gt;</code></td>
                      <td>Delete a branch</td>
                      <td><code>git branch -d featureX</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-exclamation-triangle"></i> Merge Conflicts</h3>
                <p>A merge conflict occurs when Git can't automatically resolve differences between commits. This typically happens when the same part of a file is modified in both branches.</p>
                <p><strong>How to resolve:</strong></p>
                <ol>
                  <li>Open the conflicted file(s)</li>
                  <li>Look for conflict markers (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>)</li>
                  <li>Edit the file to keep the desired changes</li>
                  <li>Remove the conflict markers</li>
                  <li>Add and commit the resolved file</li>
                </ol>
                <pre className="mb-3"><code>{`<<<<<<< HEAD
This is content from the current branch
=======
This is conflicting content from the other branch
>>>>>>> branch-name`}</code></pre>
              </div>
            </section>

            <section id="github-concepts" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-github"></i> GitHub Concepts</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-folder"></i> Repository</h3>
                <p>A project folder in GitHub that contains all of your project's files and each file's revision history.</p>
                <p><strong>Types:</strong> Public (visible to everyone) and Private (visible only to collaborators)</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-upload"></i> Push</h3>
                <p>The process of sending your committed changes to a remote repository like GitHub.</p>
                <p><strong>Example:</strong> <code>git push origin main</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-git"></i> Pull Request (PR)</h3>
                <p>A method of submitting contributions to a project. You propose your changes and request that someone review and pull in your contribution.</p>
                <p><strong>Workflow:</strong></p>
                <ol>
                  <li>Fork the repository</li>
                  <li>Create a feature branch</li>
                  <li>Make changes and commit them</li>
                  <li>Push to your fork</li>
                  <li>Open a pull request</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-copy"></i> Fork</h3>
                <p>A personal copy of another user's repository that lives on your GitHub account.</p>
                <p><strong>Purpose:</strong> Allows you to freely experiment with changes without affecting the original project.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bug"></i> Issues</h3>
                <p>Bug reports, feature requests, or tasks that need to be completed for a project.</p>
                <p><strong>Features:</strong> Labels, assignees, milestones, comments</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-star"></i> Star</h3>
                <p>A way to bookmark repositories you find interesting or want to keep track of.</p>
                <p><strong>Effect:</strong> Shows up in your "Starred repositories" list</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bell"></i> Watch</h3>
                <p>Get notifications for all conversations (issues, pull requests) in a repository.</p>
                <p><strong>Options:</strong> Not watching, Watching, Ignoring</p>
              </div>
            </section>

            <section id="gitignore" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-excel"></i> Git Ignore</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-x"></i> What is .gitignore?</h3>
                <p>A special file that tells Git which files or folders to ignore in a project.</p>
                <p><strong>Purpose:</strong> Avoid committing temporary files, secrets, or build artifacts to version control.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> .gitignore Examples</h3>
                <pre className="mb-3"><code>{`# Ignore node_modules folder
node_modules/

# Ignore environment variables file
.env

# Ignore all log files
*.log

# Ignore specific file
config.json

# Ignore all files in temp directory
temp/*`}</code></pre>
                <p><strong>Note:</strong> The .gitignore file should be committed to your repository.</p>
              </div>
            </section>

            <section id="tags" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-tag"></i> Tags & Releases</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-tag"></i> Git Tags</h3>
                <p>Tags are references to specific points in Git history, typically used for version releases.</p>
                <p><strong>Types:</strong></p>
                <ul>
                  <li><strong>Lightweight:</strong> Just a pointer to a specific commit</li>
                  <li><strong>Annotated:</strong> Stored as full objects with metadata (author, date, message)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-terminal"></i> Tag Commands</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Command</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>git tag v1.0</code></td>
                      <td>Create lightweight tag</td>
                      <td><code>git tag v1.0</code></td>
                    </tr>
                    <tr>
                      <td><code>git tag -a v1.0 -m "msg"</code></td>
                      <td>Create annotated tag with message</td>
                      <td><code>git tag -a v1.0 -m "First release"</code></td>
                    </tr>
                    <tr>
                      <td><code>git push origin --tags</code></td>
                      <td>Push tags to remote repository</td>
                      <td><code>git push origin --tags</code></td>
                    </tr>
                    <tr>
                      <td><code>git tag</code></td>
                      <td>List all tags</td>
                      <td><code>git tag</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-box-arrow-up"></i> GitHub Releases</h3>
                <p>Packages of software, documentation, and release notes associated with a specific tag.</p>
                <p><strong>Features:</strong> Attach binaries (compiled programs), release notes, links to issues fixed</p>
              </div>
            </section>

            <section id="undoing" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-counterclockwise"></i> Undoing Changes</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-return-left"></i> Undo Commands</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Command</th>
                      <th>Description</th>
                      <th>When to Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>git checkout filename</code></td>
                      <td>Discard changes in working directory</td>
                      <td>When you haven't staged the file yet</td>
                    </tr>
                    <tr>
                      <td><code>git reset --soft</code></td>
                      <td>Undo commit but keep changes staged</td>
                      <td>When you want to re-commit with different message</td>
                    </tr>
                    <tr>
                      <td><code>git reset --mixed</code></td>
                      <td>Undo commit and unstage changes (default)</td>
                      <td>When you want to review changes before committing</td>
                    </tr>
                    <tr>
                      <td><code>git reset --hard</code></td>
                      <td>Completely delete changes</td>
                      <td>When you want to completely discard changes</td>
                    </tr>
                    <tr>
                      <td><code>git revert &lt;commit&gt;</code></td>
                      <td>Create new commit that undoes changes</td>
                      <td>When changes are already pushed to remote</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-exclamation-triangle"></i> Reset vs Revert</h3>
                <p><strong>Reset:</strong> Moves the branch pointer backward (rewrites history - dangerous if already pushed)</p>
                <p><strong>Revert:</strong> Creates a new commit that reverses previous changes (safe for shared branches)</p>
              </div>
            </section>

            <section id="stash" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-stack"></i> Git Stash</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-stack"></i> What is Stashing?</h3>
                <p>Temporarily shelves (stashes) changes you've made to your working copy so you can work on something else, and then come back and re-apply them later.</p>
                <p><strong>Use Case:</strong> When you need to switch branches but aren't ready to commit your current changes.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-terminal"></i> Stash Commands</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Command</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>git stash</code></td>
                      <td>Stash changes in working directory</td>
                      <td><code>git stash</code></td>
                    </tr>
                    <tr>
                      <td><code>git stash list</code></td>
                      <td>View all stashes</td>
                      <td><code>git stash list</code></td>
                    </tr>
                    <tr>
                      <td><code>git stash pop</code></td>
                      <td>Apply most recent stash and remove it from stash list</td>
                      <td><code>git stash pop</code></td>
                    </tr>
                    <tr>
                      <td><code>git stash apply</code></td>
                      <td>Apply stash but keep it in stash list</td>
                      <td><code>git stash apply stash@{1}</code></td>
                    </tr>
                    <tr>
                      <td><code>git stash drop</code></td>
                      <td>Remove a stash from stash list</td>
                      <td><code>git stash drop stash@{0}</code></td>
                    </tr>
                    <tr>
                      <td><code>git stash clear</code></td>
                      <td>Remove all stashes</td>
                      <td><code>git stash clear</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="actions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-lightning"></i> GitHub Actions</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> What are GitHub Actions?</h3>
                <p>A CI/CD (Continuous Integration/Continuous Deployment) platform that allows you to automate your build, test, and deployment pipeline.</p>
                <p><strong>Features:</strong></p>
                <ul>
                  <li>Automatically run tests when code is pushed</li>
                  <li>Deploy to servers when tests pass</li>
                  <li>Run scripts on a schedule</li>
                  <li>Respond to GitHub events (issues, pull requests)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code"></i> Workflow Files</h3>
                <p>Workflows are defined in YAML files in the <code>.github/workflows</code> directory.</p>
                <pre className="mb-3"><code>{`name: CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Run tests
      run: npm test`}</code></pre>
              </div>
            </section>

            <section id="tips" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-lightbulb"></i> Tips & Best Practices</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check-circle"></i> Git Best Practices</h3>
                <ul>
                  <li><strong>Commit often:</strong> Small, focused commits with clear messages</li>
                  <li><strong>Write good commit messages:</strong> First line summary (50 chars), then detailed explanation</li>
                  <li><strong>Use .gitignore:</strong> Avoid tracking temporary files, secrets, or build artifacts</li>
                  <li><strong>Pull before push:</strong> Always pull latest changes before pushing to avoid conflicts</li>
                  <li><strong>Use feature branches:</strong> Never commit directly to main branch</li>
                  <li><strong>Review changes:</strong> Always use <code>git diff</code> before staging changes</li>
                  <li><strong>Atomic commits:</strong> Each commit should represent a single logical change</li>
                </ul>
              </div>
            </section>

            <section id="workflow" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> Real-Time Workflow Example</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-repeat"></i> Typical Git Workflow</h3>
                <p>Here's a common workflow for contributing to a project:</p>
                <pre className="mb-3"><code>{`# Initialize a new repository and push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/user/repo.git
git push -u origin main

# Create a new feature branch
git checkout -b featureX

# Make changes and commit them
git add .
git commit -m "Implemented feature X"

# Switch back to main branch
git checkout main

# Merge the feature branch
git merge featureX

# Push changes to GitHub
git push`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-git"></i> Collaborative Workflow</h3>
                <p>When working with a team:</p>
                <ol>
                  <li>Pull latest changes: <code>git pull origin main</code></li>
                  <li>Create feature branch: <code>git checkout -b feature-name</code></li>
                  <li>Make changes and commit: <code>git add .</code> then <code>git commit -m "message"</code></li>
                  <li>Push branch: <code>git push origin feature-name</code></li>
                  <li>Create pull request on GitHub</li>
                  <li>After approval, merge PR and delete branch</li>
                  <li>Locally: <code>git checkout main</code> and <code>git pull origin main</code></li>
                </ol>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Git & GitHub Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default GitNotes;