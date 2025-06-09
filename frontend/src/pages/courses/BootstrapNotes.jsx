import React from 'react';

function BootstrapNotes() {
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
            .color-box {
            width: 100%;
            height: 40px;
            border-radius: 4px;
            margin-bottom: 5px;
        }
        `}
            </style>

            <header className="bg-secondary text-white py-4">
                <div className="container">
                    <h1 className="display-4 fw-bold"><i className="bi bi-bootstrap"></i> Bootstrap Notes</h1>
                    <p className="lead">Your Comprehensive Guide to Bootstrap Framework</p>
                </div>
            </header>

            <div className="container py-4">
                <div className="row">
                    <aside className="col-lg-3 sidebar">
                        <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
                        <nav className="nav flex-column">
                            <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
                            <a className="nav-link" href="#inclusion"><i className="bi bi-code-square"></i> Including Bootstrap</a>
                            <a className="nav-link" href="#colors"><i className="bi bi-palette"></i> Colors</a>
                            <a className="nav-link" href="#breakpoints"><i className="bi bi-grid"></i> Breakpoints</a>
                            <a className="nav-link" href="#containers"><i className="bi bi-border-all"></i> Containers</a>
                            <a className="nav-link" href="#grid"><i className="bi bi-grid-3x3"></i> Grid System</a>
                            <a className="nav-link" href="#typography"><i className="bi bi-type"></i> Typography</a>
                            <a className="nav-link" href="#images"><i className="bi bi-image"></i> Images</a>
                            <a className="nav-link" href="#tables"><i className="bi bi-table"></i> Tables</a>
                            <a className="nav-link" href="#forms"><i className="bi bi-input-cursor-text"></i> Forms</a>
                            <a className="nav-link" href="#buttons"><i className="bi bi-joystick"></i> Buttons</a>
                            <a className="nav-link" href="#utilities"><i className="bi bi-tools"></i> Utilities</a>
                        </nav>
                    </aside>

                    <main className="col-lg-9">
                        <section id="introduction" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is Bootstrap?</h2>
                            <ul className="mb-3">
                                <li>It is an HTML, CSS, JavaScript framework tool to provide responsive and mobile-first design</li>
                                <li>Its latest version is Bootstrap 5</li>
                                <li>It was invented by Twitter</li>
                            </ul>
                        </section>

                        <section id="inclusion" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> How to include Bootstrap into our webpage?</h2>
                            <div className="property-card">
                                <pre className="mb-3"><code>{`<head>
  <link rel="stylesheet" 
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <script 
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>`}</code></pre>
                                <p>Go to Bootstrap website and copy the CDN (Common Delivery Network) link and paste it into your HTML file.</p>
                            </div>
                        </section>

                        <section id="colors" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-palette"></i> Colors</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Text Colors</h4>
                                        <div class="color-box bg-primary"></div>
                                        <p><code>text-primary</code> - Blue</p>
                                        <div class="color-box bg-secondary"></div>
                                        <p><code>text-secondary</code> - Gray</p>
                                        <div class="color-box bg-success"></div>
                                        <p><code>text-success</code> - Green</p>
                                        <div class="color-box bg-danger"></div>
                                        <p><code>text-danger</code> - Red</p>
                                        <div class="color-box bg-warning"></div>
                                        <p><code>text-warning</code> - Yellow</p>
                                        <div class="color-box bg-info"></div>
                                        <p><code>text-info</code> - Sky Blue</p>
                                        <div class="color-box bg-light"></div>
                                        <p><code>text-light</code> - White</p>
                                        <div class="color-box bg-dark"></div>
                                        <p><code>text-dark</code> - Black</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Background Colors</h4>
                                        <pre className="mb-3"><code>{`<div class="bg-primary">blue</div>
<div class="bg-secondary">grey</div>
<div class="bg-success">green</div>
<div class="bg-danger">red</div>
<div class="bg-warning">yellow</div>
<div class="bg-info">sky-blue</div>
<div class="bg-light">white</div>
<div class="bg-dark">black</div>`}</code></pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="breakpoints" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-grid"></i> Breakpoints</h2>
                            <div className="property-card">
                                <p>Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.</p>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Breakpoint</th>
                                            <th>Class</th>
                                            <th>Dimensions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Extra small</td>
                                            <td>None</td>
                                            <td>&lt;=576px</td>
                                        </tr>
                                        <tr>
                                            <td>Small</td>
                                            <td>sm</td>
                                            <td>&gt;=576px</td>
                                        </tr>
                                        <tr>
                                            <td>Medium</td>
                                            <td>md</td>
                                            <td>&gt;=768px</td>
                                        </tr>
                                        <tr>
                                            <td>Large</td>
                                            <td>lg</td>
                                            <td>&gt;=992px</td>
                                        </tr>
                                        <tr>
                                            <td>Extra large</td>
                                            <td>xl</td>
                                            <td>&gt;=1200px</td>
                                        </tr>
                                        <tr>
                                            <td>Extra extra large</td>
                                            <td>xxl</td>
                                            <td>&gt;=1400px</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="containers" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-border-all"></i> Containers</h2>
                            <div className="property-card">
                                <h4 className="h5">Container vs Container-fluid</h4>
                                <pre className="mb-3"><code>{`<div class="container border border-3 border-primary">hello</div>
<div class="container-fluid border">hello</div>`}</code></pre>
                                <ul>
                                    <li><code>container</code> - left and right margin applied</li>
                                    <li><code>container-fluid</code> - no margin applied (full width)</li>
                                </ul>
                            </div>
                        </section>

                        <section id="grid" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-grid-3x3"></i> Grid System</h2>
                            <div className="property-card">
                                <p>The grid system is used to create responsive layout and is divided into 12 columns.</p>
                                <pre className="mb-3"><code>{`<div class="container-fluid">
  <div class="row row-gap-0 column-gap-0">
    <div class="col-12 col-lg-3 col-md-4 col-sm-6" style="background-color: goldenrod;">col1</div>
    <div class="col-12 col-lg-3 col-md-4 col-sm-6" style="background-color: indianred;">col2</div>
    <div class="col-12 col-lg-3 col-md-4 col-sm-6" style="background-color: greenyellow;">col3</div>
    <div class="col-12 col-lg-3 col-md-4 col-sm-6" style="background-color: rgb(47, 231, 255);">col4</div>
  </div>
</div>`}</code></pre>
                                <h4 className="h5 mt-4">Gap Utilities</h4>
                                <ul>
                                    <li><code>row-gap-0,1,2,3,4,5</code></li>
                                    <li><code>column-gap-0,1,2,3,4,5</code></li>
                                    <li><code>gap-0,1,2,3,4,5</code> (both row and columns gap)</li>
                                </ul>
                            </div>
                        </section>

                        <section id="typography" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-type"></i> Typography</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Headings</h4>
                                        <pre className="mb-3"><code>{`<p class="h1">content</p>
<p class="h2">content</p>
<p class="h3">content</p>
<p class="h4">content</p>
<p class="h5">content</p>
<p class="h6">content</p>`}</code></pre>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Display Headings</h4>
                                        <pre className="mb-3"><code>{`<p class="display-1">content</p>
<p class="display-2">content</p>
<p class="display-3">content</p>
<p class="display-4">content</p>
<p class="display-5">content</p>
<p class="display-6">content</p>`}</code></pre>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Text Decoration</h4>
                                        <pre className="mb-3"><code>{`<a href="" class="text-decoration-none">content</a>
<p class="text-decoration-line-through">content</p>
<p class="text-decoration-underline">content</p>`}</code></pre>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Text Alignment</h4>
                                        <pre className="mb-3"><code>{`<p class="text-center">center content</p>
<p class="text-start">start content</p>
<p class="text-end">end content</p>`}</code></pre>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="property-card">
                                        <h4 className="h5">Mark</h4>
                                        <pre className="mb-3"><code>{`<p class="mark">content highlighted</p>`}</code></pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="images" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-image"></i> Images</h2>
                            <div className="property-card">
                                <pre className="mb-3"><code>{`<img src="/Images/download.jpeg" class="img-fluid w-100 img-thumbnail rounded-4" alt="">`}</code></pre>
                                <ul>
                                    <li><code>img-fluid</code> (responsive image)</li>
                                    <li><code>img-thumbnail</code> (border around the image)</li>
                                    <li><code>rounded</code> -0,1,2,3,4,5, circle, pill (border radius)</li>
                                </ul>
                            </div>
                        </section>

                        <section id="tables" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-table"></i> Tables</h2>
                            <div className="property-card">
                                <pre className="mb-3"><code>{`<table class="table table-bordered table-striped table-hover">
  <tr class="table-active">
    <th>column 1</th>
    <th>column 2</th>
    <th>column 3</th>
  </tr>
  <tr>
    <td>cell 1</td>
    <td>cell 2</td>
    <td>cell 3</td>
  </tr>
  <tr>
    <td>cell 4</td>
    <td>cell 5</td>
    <td>cell 6</td>
  </tr>
</table>`}</code></pre>
                                <h4 className="h5 mt-4">Table Classes</h4>
                                <ul>
                                    <li><code>table</code></li>
                                    <li><code>table-striped</code></li>
                                    <li><code>table-hover</code></li>
                                    <li><code>table-bordered</code></li>
                                    <li><code>table-active</code></li>
                                    <li><code>table-borderless</code></li>
                                </ul>
                            </div>
                        </section>

                        <section id="forms" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-input-cursor-text"></i> Forms</h2>
                            <div className="property-card">
                                <pre className="mb-3"><code>{`<form action="" class="form">
  <label for="" class="form-label">Name</label>
  <input type="text" class="form-control" id="" placeholder="enter name"></br>
  <select name="" id="" class="form-select w-25">
    <option value="">TN</option>
    <option value="">TN</option>
    <option value="">TN</option>
    <option value="">TN</option>
  </select>
  <label for="" class="form-check-label"></type></label>
  <input type="checkbox" class="form-check-input">
</form>`}</code></pre>
                                <h4 className="h5 mt-4">Form Classes</h4>
                                <ul>
                                    <li><code>form</code></li>
                                    <li><code>input-group</code></li>
                                    <li><code>form-label</code></li>
                                    <li><code>form-control</code> (input field)</li>
                                    <li><code>form-select</code> (select field)</li>
                                    <li><code>form-check</code> (checkbox)</li>
                                    <li><code>form-check-label</code> (label for checkbox)</li>
                                    <li><code>form-check-input</code> (input for checkbox)</li>
                                </ul>
                            </div>
                            <div className="property-card">
                                <h4 className="h5">Input Group</h4>
                                <pre className="mb-3"><code>{`<div class="input-group">
  <input type="text" class="form-control">
  <input type="text" class="form-control">
  <input type="button" value="Click">
</div>`}</code></pre>
                            </div>
                        </section>

                        <section id="buttons" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-joystick"></i> Buttons</h2>
                            <div className="property-card">
                                <pre className="mb-3"><code>{`<a href="" class="btn btn-secondary btn-lg"></b></a>`}</code></pre>
                                <h4 className="h5 mt-4">Button Classes</h4>
                                <ul>
                                    <li><code>btn</code></li>
                                    <li><code>btn-colors</code> (primary, secondary, success, etc.)</li>
                                    <li><code>btn-size</code> [sm, lg, md]</li>
                                </ul>
                            </div>
                        </section>

                        <section id="utilities" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-tools"></i> Utility Classes</h2>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-border-width"></i> Border Properties</h4>
                                <pre className="mb-3"><code>{`<div class="border border-primary container">Content</div>`}</code></pre>
                                <ul>
                                    <li><code>border</code></li>
                                    <li><code>border-values</code> (0 to 5)</li>
                                    <li><code>border-top</code>, <code>border-bottom</code>, <code>border-start</code>, <code>border-end</code></li>
                                    <li><code>border-colors</code></li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-border-radius"></i> Rounded</h4>
                                <pre className="mb-3"><code>{`<button class="btn btn-primary rounded-4">Login</button>`}</code></pre>
                                <ul>
                                    <li><code>rounded</code></li>
                                    <li><code>rounded-values</code> (0 to 5)</li>
                                    <li><code>rounded-top</code>, <code>rounded-bottom</code>, <code>rounded-start</code>, <code>rounded-end</code></li>
                                    <li><code>rounded-circle</code>, <code>rounded-pill</code></li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-layout-three-columns"></i> Display Properties</h4>
                                <pre className="mb-3"><code>{`<a class="d-block" href="">hello</a>
<a class="d-block" href="">hello</a>
<a class="d-block" href="">hello</a>`}</code></pre>
                                <ul>
                                    <li><code>d-none</code></li>
                                    <li><code>d-inline</code>, <code>inline-block</code>, <code>block</code>, <code>grid</code>, <code>flex</code></li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-distribute-vertical"></i> Flex</h4>
                                <pre className="mb-3"><code>{`<div class="d-flex flex-row justify-content-around border align-items-center">
  <div class="bg-primary">hello</div>
  <div class="bg-success">hii</div>
  <div class="bg-warning">welcome</div>
</div>`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-float"></i> Float</h4>
                                <pre className="mb-3"><code>{`<div class="border w-25 float-start">float text</div>`}</code></pre>
                                <ul>
                                    <li><code>float-start</code>, <code>float-end</code></li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-eye"></i> Opacity</h4>
                                <pre className="mb-3"><code>{`<div class="opacity-100">Content</div>
<div class="opacity-75">Content</div>
<div class="opacity-50">Content</div>
<div class="opacity-25">Content</div>
<div class="opacity-0">Content</div>`}</code></pre>
                                <p>Values: 0, 25, 50, 75, 100</p>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-fullscreen"></i> Overflow</h4>
                                <pre className="mb-3"><code>{`<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-visible">...</div>
<div class="overflow-scroll">...</div>`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-geo-alt"></i> Position</h4>
                                <pre className="mb-3"><code>{`<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-arrows-angle-expand"></i> Width & Height</h4>
                                <ul>
                                    <li><code>w</code> - values (25,50,75,100, auto)</li>
                                    <li><code>h</code> - values (25,50,75,100, auto)</li>
                                    <li><code>mh</code> - 100</li>
                                    <li><code>mw</code> - 100</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-border-outer"></i> Margin</h4>
                                <ul>
                                    <li><code>m</code>-values (0,1,2,3,4,5, auto) - all sides</li>
                                    <li><code>ms</code>-values - margin start</li>
                                    <li><code>me</code>-values - margin right</li>
                                    <li><code>mt</code>-values - margin top</li>
                                    <li><code>mb</code>-values - margin bottom</li>
                                    <li><code>mx</code>-values - for both left and right</li>
                                    <li><code>my</code>-values - for both top and bottom</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-border-inner"></i> Padding</h4>
                                <ul>
                                    <li><code>p</code>-values (0,1,2,3,4,5, auto) - all sides</li>
                                    <li><code>ps</code>-values - padding start</li>
                                    <li><code>pe</code>-values - padding end</li>
                                    <li><code>pt</code>-values - padding top</li>
                                    <li><code>pb</code>-values - padding bottom</li>
                                    <li><code>px</code>-values - for both left and right</li>
                                    <li><code>py</code>-values - for both top and bottom</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-fonts"></i> Font</h4>
                                <ul>
                                    <li><code>fs</code> - values (1,2,3,4,5) – font size</li>
                                    <li><code>fw</code> - (bold, bolder, semibold, medium, normal, lighter) – font weight</li>
                                    <li><code>fst</code> - (normal,italic) – font style</li>
                                    <li><code>lh</code> - (1, sm,lg,base) – line height</li>
                                </ul>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            <footer className="bg-dark text-white py-4">
                <div className="container text-center">
                    <p>Bootstrap Notes &copy; 2025 | Designed by Mugilvannan P</p>
                </div>
            </footer>
        </div>
    );
}

export default BootstrapNotes;