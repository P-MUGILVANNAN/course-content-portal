import React from 'react';

function CssNotes() {
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
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-css"></i> CSS Notes</h1>
          <p className="lead">Your Comprehensive Guide to Cascading Style Sheets</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> What is CSS?</a>
              <a className="nav-link" href="#inclusion"><i className="bi bi-code-square"></i> Including CSS</a>
              <a className="nav-link" href="#syntax"><i className="bi bi-file-earmark-code"></i> CSS Syntax</a>
              <a className="nav-link" href="#selectors"><i className="bi bi-filter-square"></i> Selectors</a>
              <a className="nav-link" href="#text"><i className="bi bi-type"></i> Text Properties</a>
              <a className="nav-link" href="#background"><i className="bi bi-image"></i> Background</a>
              <a className="nav-link" href="#border"><i className="bi bi-square"></i> Border</a>
              <a className="nav-link" href="#font"><i className="bi bi-fonts"></i> Font</a>
              <a className="nav-link" href="#box-model"><i className="bi bi-border"></i> Box Model</a>
              <a className="nav-link" href="#table"><i className="bi bi-table"></i> Table</a>
              <a className="nav-link" href="#list"><i className="bi bi-list-ul"></i> List</a>
              <a className="nav-link" href="#display"><i className="bi bi-layout-three-columns"></i> Display</a>
              <a className="nav-link" href="#position"><i className="bi bi-arrows-move"></i> Position</a>
              <a className="nav-link" href="#pseudo"><i className="bi bi-magic"></i> Pseudo Classes</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is CSS?</h2>
              <ul className="mb-3">
                <li>CSS stands for Cascading Style Sheets</li>
                <li>CSS is used to style web pages (to create an attractive webpage)</li>
                <li>It was invented by Hakon Wium Lee in 1996</li>
                <li>Its latest version is CSS3</li>
              </ul>
            </section>

            <section id="inclusion" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> How to include CSS into our webpage?</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> Inline styling</h3>
                <pre className="mb-3"><code>{`<h1 style="color: #184157;">Inline styling</h1>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> Internal styling</h3>
                <pre className="mb-3"><code>{`<style>
.one {
    color: blue;
}
</style>

<h2 class="one">Internal Styling</h2>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> External styling</h3>
                <pre className="mb-3"><code>{`<link rel="stylesheet" href="filename.css">`}</code></pre>
                <p><code>rel</code> -&gt; relation</p>
              </div>
            </section>

            <section id="syntax" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> CSS Syntax</h2>
              <pre className="mb-3"><code>{`selector {
    property: value;
}`}</code></pre>
              <p>CSS is made up of properties and values.</p>
            </section>

            <section id="selectors" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-filter-square"></i> Selectors</h2>
              <p className="mb-3">Types of selectors:</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-1-circle"></i> Element selector (tag)</h4>
                    <pre className="mb-2"><code>{`h1 {
    color: blue;
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-2-circle"></i> Class selector (.)</h4>
                    <pre className="mb-2"><code>{`.my-class {
    color: red;
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-3-circle"></i> ID selector (#)</h4>
                    <pre className="mb-2"><code>{`#my-id {
    color: green;
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-4-circle"></i> Group selector (,)</h4>
                    <pre className="mb-2"><code>{`h1, h2, h3 {
    color: purple;
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-5-circle"></i> Universal selector (*)</h4>
                    <pre className="mb-2"><code>{`* {
    margin: 0;
    padding: 0;
}`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            <section id="text" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-type"></i> Text Properties</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-fonts"></i> Color</h4>
                    <p><code>color: blue, hexadecimal(0-9 &amp; a-f), rgb(256,256,256);</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-text-center"></i> Text Alignment</h4>
                    <p><code>text-align: center, left, right;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-text-decoration"></i> Text Decoration</h4>
                    <p><code>text-decoration-line: overline, underline, line-through;</code></p>
                    <p><code>text-decoration-color: red;</code></p>
                    <p><code>text-decoration-style: solid, dashed, dotted, double, wavy, none;</code></p>
                    <p><code>text-decoration-thickness: measurements(px, cm, rem, %);</code></p>
                    <p className="mt-2"><strong>Shorthand:</strong></p>
                    <p><code>text-decoration: overline red solid 2px;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-text-indent-left"></i> Text Indent &amp; Spacing</h4>
                    <p><code>text-indent: measurements(left space)</code></p>
                    <p><code>letter-spacing: measurements(space between letters)</code></p>
                    <p><code>word-spacing: measurements(space between words)</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-text-uppercase"></i> Text Transform</h4>
                    <p><code>text-transform: uppercase, lowercase, capitalize, none;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-droplet"></i> Text Shadow</h4>
                    <p><code>text-shadow: measurements;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-distribute-vertical"></i> Line Height</h4>
                    <p><code>line-height: measurements;</code></p>
                  </div>
                </div>
              </div>
            </section>

            <section id="background" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-image"></i> Background Properties</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-palette"></i> Background Color</h4>
                    <p><code>background-color: color;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-image-fill"></i> Background Image</h4>
                    <p><code>background-image: url();</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-repeat"></i> Background Repeat</h4>
                    <p><code>background-repeat: repeat, repeat-x, repeat-y, no-repeat;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-pin-angle"></i> Background Attachment</h4>
                    <p><code>background-attachment: fixed, scroll;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-arrows-move"></i> Background Position</h4>
                    <p><code>background-position: top, center, bottom, left, right, measurements;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-arrows-fullscreen"></i> Background Size</h4>
                    <p><code>background-size: measurements;</code></p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-file-earmark-code"></i> Shorthand Property</h4>
                    <p><code>background: color url() repeat position attachment;</code></p>
                  </div>
                </div>
              </div>
            </section>

            <section id="border" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-square"></i> Border Properties</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-border-width"></i> Border Width</h4>
                    <p><code>border-width: measurements;</code></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-border-style"></i> Border Style</h4>
                    <p><code>border-style: solid, dashed, dotted, double;</code></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-palette"></i> Border Color</h4>
                    <p><code>border-color: color;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-border-outer"></i> Border Radius</h4>
                    <p><code>border-radius: measurements;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-file-earmark-code"></i> Shorthand Property</h4>
                    <p><code>border: width style color;</code></p>
                    <p><code>border-top: width style color;</code></p>
                    <p><code>border-right: width style color;</code></p>
                    <p><code>border-bottom: width style color;</code></p>
                    <p><code>border-left: width style color;</code></p>
                  </div>
                </div>
              </div>
            </section>

            <section id="font" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-fonts"></i> Font Properties</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-fonts"></i> Font Family</h4>
                    <p><code>font-family: font-family-name;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-textarea-resize"></i> Font Size</h4>
                    <p><code>font-size: measurements;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-type-italic"></i> Font Style</h4>
                    <p><code>font-style: italic, oblique, normal;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-type-bold"></i> Font Weight</h4>
                    <p><code>font-weight: lighter, bolder, bold, normal, measurements;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-textarea-t"></i> Font Variant</h4>
                    <p><code>font-variant: small-caps, normal;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-file-earmark-code"></i> Shorthand Property</h4>
                    <p><code>font: font-style font-variant font-weight font-size font-family;</code></p>
                  </div>
                </div>
              </div>
            </section>

            <section id="box-model" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-border"></i> Box Model</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-arrows-angle-expand"></i> Height and Width</h4>
                    <p><code>height: measurements;</code></p>
                    <p><code>width: measurements;</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-border-outer"></i> Margin</h4>
                    <p><code>margin: measurements;</code></p>
                    <p><code>margin-top: measurements;</code></p>
                    <p><code>margin-right: measurements;</code></p>
                    <p><code>margin-bottom: measurements;</code></p>
                    <p><code>margin-left: measurements;</code></p>
                    <p className="mt-2"><strong>Shorthand:</strong></p>
                    <p><code>margin: top right bottom left;</code></p>
                    <p><code>margin: top right&amp;left bottom;</code></p>
                    <p><code>margin: top&amp;bottom left&amp;right;</code></p>
                    <p><code>margin: 100px; (all sides)</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-border-inner"></i> Padding</h4>
                    <p>Used to create space between the border and content</p>
                    <p><code>padding: measurements;</code></p>
                    <p><code>padding-top: measurements;</code></p>
                    <p><code>padding-right: measurements;</code></p>
                    <p><code>padding-bottom: measurements;</code></p>
                    <p><code>padding-left: measurements;</code></p>
                    <p className="mt-2"><strong>Shorthand:</strong></p>
                    <p><code>padding: top right bottom left;</code></p>
                    <p><code>padding: top right&amp;left bottom;</code></p>
                    <p><code>padding: top&amp;bottom left&amp;right;</code></p>
                    <p><code>padding: 100px; (all sides)</code></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-box-seam"></i> Box Model Components</h4>
                    <ol>
                      <li>Margin</li>
                      <li>Padding</li>
                      <li>Border</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <section id="table" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-table"></i> Table Properties</h2>
              <div className="property-card">
                <h4 className="h5"><i className="bi bi-border-all"></i> Border Collapse</h4>
                <p><code>border-collapse: collapse, separate;</code></p>
              </div>
              <pre className="mb-3"><code>{`/* table properties */
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}

table {
    width: 50%;
    height: 150px;
    background-color: blanchedalmond;
}

td {
    text-align: center;
    vertical-align: bottom;
}

th {
    background-color: darkgray;
    color: white;
}`}</code></pre>
              <pre className="mb-3"><code>{`<table>
    <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>1</td>
        <td>John</td>
        <td>25</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Smith</td>
        <td>30</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Harry</td>
        <td>28</td>
    </tr>
</table>`}</code></pre>
            </section>

            <section id="list" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-list-ul"></i> List Properties</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-list-ol"></i> List Style Type</h4>
                    <p><code>list-style-type: decimal, upper-alpha, lower-alpha, upper-roman, lower-roman, etc;</code></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-list-nested"></i> List Style Position</h4>
                    <p><code>list-style-position: outside, inside;</code></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-image"></i> List Style Image</h4>
                    <p><code>list-style-image: url(image_url);</code></p>
                  </div>
                </div>
              </div>
              <pre className="mb-3"><code>{`<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>PHP</li>
    <li>Python</li>
</ul>

list-style-type: lower-roman;
list-style-position: inside;
list-style-image: url('https://www.w3schools.com/cssref/sqpurple.gif');`}</code></pre>
            </section>

            <section id="display" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layout-three-columns"></i> Display Properties</h2>
              <div className="property-card">
                <h4 className="h5"><i className="bi bi-layout-split"></i> Display</h4>
                <p><code>display: block, inline, inline-block, none, flex, grid;</code></p>
              </div>
              
              <div className="property-card">
                <h4 className="h5"><i className="bi bi-distribute-vertical"></i> Flexbox</h4>
                <p><code>flex-direction: row, column;</code></p>
                <p><code>justify-content: left, right, center, space-between, space-around, space-evenly;</code></p>
                <p><code>align-items: center, flex-start, flex-end, baseline, stretch;</code></p>
              </div>
              
              <div className="property-card">
                <h4 className="h5"><i className="bi bi-grid-3x3-gap"></i> Grid</h4>
                <p><code>grid-template-columns: measurements;</code></p>
                <p><code>gap: measurements; (both rows and columns)</code></p>
                <p><code>column-gap: measurements;</code></p>
                <p><code>row-gap: measurements;</code></p>
              </div>
            </section>

            <section id="position" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrows-move"></i> Position &amp; Other Properties</h2>
              
              <div className="property-card">
                <h4 className="h5"><i className="bi bi-border"></i> Outline Properties</h4>
                <p><code>outline-width: measurements;</code></p>
                <p><code>outline-style: solid, dashed, dotted, double;</code></p>
                <p><code>outline-color: color;</code></p>
                <p><strong>Shorthand:</strong> <code>outline: width style color;</code></p>
              </div>
              
              <div className="property-card">
                <h4 className="h5"><i className="bi bi-fullscreen"></i> Overflow Properties</h4>
                <p><code>overflow: visible, hidden, scroll, auto;</code></p>
                <p><code>overflow-x: visible, hidden, scroll, auto;</code></p>
                <p><code>overflow-y: visible, hidden, scroll, auto;</code></p>
              </div>
              
              <div className="property-card">
                <h4 className="h5"><i className="bi bi-float"></i> Float Property</h4>
                <p><code>float: left, right, none;</code></p>
              </div>
              
              <div className="property-card">
                <h4 className="h5"><i className="bi bi-geo-alt"></i> Position Properties</h4>
                <p><code>position: static, relative, absolute, fixed, sticky;</code></p>
              </div>
              
              <div className="property-card">
                <h4 className="h5"><i className="bi bi-eye"></i> Opacity</h4>
                <p>Used to create blurriness for the objects</p>
                <p>Default value is 1</p>
                <p><code>opacity: 0-1;</code></p>
              </div>
              
              <div className="property-card">
                <h4 className="h5"><i className="bi bi-icons"></i> Icons</h4>
                <ol>
                  <li>Go to chrome and copy Font Awesome CDN (Common Delivery Network)</li>
                  <li>Paste the CDN in the head of your HTML file</li>
                  <li>Use the icon class in your HTML file</li>
                </ol>
              </div>
            </section>

            <section id="pseudo" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-magic"></i> Pseudo Classes &amp; Elements</h2>
              
              <div className="property-card">
                <h4 className="h5"><i className="bi bi-pseudo"></i> Pseudo Class</h4>
                <p>A pseudo-class is used to define a special state of an element.</p>
                <pre className="mb-3"><code>{`selector:pseudo-class {
    property: value;
}`}</code></pre>
                <p>Examples:</p>
                <ul>
                  <li><code>:link</code></li>
                  <li><code>:visited</code></li>
                  <li><code>:hover</code></li>
                  <li><code>:active</code></li>
                  <li><code>:first-child</code></li>
                  <li><code>:last-child</code></li>
                  <li><code>:nth-child(odd or even)</code></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h4 className="h5"><i className="bi bi-pseudo-element"></i> Pseudo Elements</h4>
                <p>A CSS pseudo-element is used to style specific parts of an element.</p>
                <pre className="mb-3"><code>{`selector::pseudo-element {
    property: value;
}`}</code></pre>
                <p>Examples:</p>
                <ul>
                  <li><code>::first-letter</code></li>
                  <li><code>::first-line</code></li>
                  <li><code>::before</code></li>
                  <li><code>::after</code></li>
                  <li><code>::marker</code></li>
                  <li><code>::selection</code></li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>CSS Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default CssNotes;