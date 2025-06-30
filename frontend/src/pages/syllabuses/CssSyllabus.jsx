import React from 'react';

function CssSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-css fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">CSS Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Cascading Style Sheets</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to CSS</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is CSS?</li>
                <li className="list-group-item">History of CSS</li>
                <li className="list-group-item">Advantages of CSS</li>
                <li className="list-group-item">CSS vs Inline Styles</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>CSS Syntax</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">CSS Rule Structure</li>
                <li className="list-group-item">Selectors and Declarations</li>
                <li className="list-group-item">Properties and Values</li>
                <li className="list-group-item">CSS Comments</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-link-45deg text-primary me-2"></i>Including CSS</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Inline Styles</li>
                <li className="list-group-item">Internal Style Sheets</li>
                <li className="list-group-item">External Style Sheets</li>
                <li className="list-group-item">@import Rule</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-filter-square text-primary me-2"></i>CSS Selectors</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Element Selectors</li>
                <li className="list-group-item">Class and ID Selectors</li>
                <li className="list-group-item">Attribute Selectors</li>
                <li className="list-group-item">Pseudo-classes and Pseudo-elements</li>
                <li className="list-group-item">Combinators</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-rulers text-primary me-2"></i>CSS Units</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Absolute Units (px, pt, cm, etc.)</li>
                <li className="list-group-item">Relative Units (em, rem, %, vw, vh)</li>
                <li className="list-group-item">When to Use Which Unit</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-type text-primary me-2"></i>Text Styling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Font Properties (family, size, weight)</li>
                <li className="list-group-item">Text Properties (color, alignment, decoration)</li>
                <li className="list-group-item">Text Shadow</li>
                <li className="list-group-item">Web Fonts and Google Fonts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-palette text-primary me-2"></i>Colors and Backgrounds</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Color Values (hex, rgb, hsl)</li>
                <li className="list-group-item">Background Properties (color, image, repeat)</li>
                <li className="list-group-item">Background Gradients</li>
                <li className="list-group-item">Background Shorthand</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-border text-primary me-2"></i>Box Model</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Understanding the Box Model</li>
                <li className="list-group-item">Margin, Border, Padding</li>
                <li className="list-group-item">Width and Height</li>
                <li className="list-group-item">Box Sizing Property</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-square text-primary me-2"></i>Borders and Outlines</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Border Properties (width, style, color)</li>
                <li className="list-group-item">Border Radius</li>
                <li className="list-group-item">Border Images</li>
                <li className="list-group-item">Outline vs Border</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-table text-primary me-2"></i>Tables</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Table Styling</li>
                <li className="list-group-item">Border Collapse</li>
                <li className="list-group-item">Table Layout</li>
                <li className="list-group-item">Styling Table Cells</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-list-ul text-primary me-2"></i>Lists</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">List Style Properties</li>
                <li className="list-group-item">Custom List Markers</li>
                <li className="list-group-item">Navigation Menus with Lists</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layout-three-columns text-primary me-2"></i>Display and Positioning</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Display Property (block, inline, flex, grid)</li>
                <li className="list-group-item">Position Property (static, relative, absolute, fixed)</li>
                <li className="list-group-item">Z-index</li>
                <li className="list-group-item">Float and Clear</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-distribute-vertical text-primary me-2"></i>Flexbox</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Flex Container Properties</li>
                <li className="list-group-item">Flex Item Properties</li>
                <li className="list-group-item">Flexbox Alignment</li>
                <li className="list-group-item">Practical Flexbox Layouts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-grid-3x3 text-primary me-2"></i>CSS Grid</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Grid Container Properties</li>
                <li className="list-group-item">Grid Item Properties</li>
                <li className="list-group-item">Grid Template Areas</li>
                <li className="list-group-item">Responsive Grid Layouts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-display text-primary me-2"></i>Responsive Design</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Media Queries</li>
                <li className="list-group-item">Viewport Meta Tag</li>
                <li className="list-group-item">Mobile-first Approach</li>
                <li className="list-group-item">Responsive Units</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-magic text-primary me-2"></i>Pseudo-classes & Elements</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Link-related Pseudo-classes</li>
                <li className="list-group-item">Form-related Pseudo-classes</li>
                <li className="list-group-item">Structural Pseudo-classes</li>
                <li className="list-group-item">Pseudo-elements (::before, ::after)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-universal-access text-primary me-2"></i>CSS Best Practices</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">CSS Methodologies (BEM, OOCSS)</li>
                <li className="list-group-item">Performance Optimization</li>
                <li className="list-group-item">Browser Compatibility</li>
                <li className="list-group-item">CSS Preprocessors (SASS, LESS)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssSyllabus;