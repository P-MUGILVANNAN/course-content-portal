import React from 'react';

function HtmlSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-html fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">HTML Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of HyperText Markup Language</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to HTML</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is HTML?</li>
                <li className="list-group-item">Types of Webpages (Static vs Dynamic)</li>
                <li className="list-group-item">Advantages and Disadvantages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-question-circle text-primary me-2"></i>HTML Basics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">How to Use HTML</li>
                <li className="list-group-item">Development Tools</li>
                <li className="list-group-item">Basic Document Structure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-clock-history text-primary me-2"></i>HTML Versions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HTML Evolution</li>
                <li className="list-group-item">HTML5 Features</li>
                <li className="list-group-item">Future of HTML</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-3 text-primary me-2"></i>HTML Document Structure</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">DOCTYPE Declaration</li>
                <li className="list-group-item">HTML Element</li>
                <li className="list-group-item">Head Section</li>
                <li className="list-group-item">Body Section</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tags text-primary me-2"></i>HTML Tags & Attributes</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HTML Tags Syntax</li>
                <li className="list-group-item">Common Attributes</li>
                <li className="list-group-item">Nested Elements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-type-h1 text-primary me-2"></i>HTML Headings & Paragraphs</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Heading Tags (h1-h6)</li>
                <li className="list-group-item">Paragraph Tag</li>
                <li className="list-group-item">Best Practices</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-type-bold text-primary me-2"></i>Text Formatting</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Physical Tags (b, i, etc.)</li>
                <li className="list-group-item">Logical Tags (strong, em, etc.)</li>
                <li className="list-group-item">Special Formatting Tags</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-link text-primary me-2"></i>Links & URLs</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">URL Structure</li>
                <li className="list-group-item">Anchor Tag</li>
                <li className="list-group-item">Link Attributes</li>
                <li className="list-group-item">Link Types</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-image text-primary me-2"></i>Images</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Image Tag</li>
                <li className="list-group-item">Image Attributes</li>
                <li className="list-group-item">Responsive Images</li>
                <li className="list-group-item">Image Maps</li>
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
                <li className="list-group-item">Table Structure</li>
                <li className="list-group-item">Table Elements</li>
                <li className="list-group-item">Table Attributes</li>
                <li className="list-group-item">Spanning Rows/Columns</li>
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
                <li className="list-group-item">Ordered Lists</li>
                <li className="list-group-item">Unordered Lists</li>
                <li className="list-group-item">Description Lists</li>
                <li className="list-group-item">Nested Lists</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-input-cursor-text text-primary me-2"></i>Forms</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Form Structure</li>
                <li className="list-group-item">Form Elements</li>
                <li className="list-group-item">Input Types</li>
                <li className="list-group-item">Form Validation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-window text-primary me-2"></i>Iframes</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Iframe Basics</li>
                <li className="list-group-item">Iframe Attributes</li>
                <li className="list-group-item">Responsive Iframes</li>
                <li className="list-group-item">Security Considerations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layout-text-sidebar text-primary me-2"></i>Block & Inline Elements</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Block-level Elements</li>
                <li className="list-group-item">Inline Elements</li>
                <li className="list-group-item">Display Property</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layout-text-sidebar-reverse text-primary me-2"></i>Semantic HTML</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Semantic Elements</li>
                <li className="list-group-item">Semantic Layout</li>
                <li className="list-group-item">Benefits of Semantic HTML</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-minus text-primary me-2"></i>Void Elements</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Self-closing Tags</li>
                <li className="list-group-item">Common Void Elements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-chat-quote text-primary me-2"></i>Quotations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Blockquote</li>
                <li className="list-group-item">Inline Quotes</li>
                <li className="list-group-item">Citation Attributes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-play-circle text-primary me-2"></i>Multimedia</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Audio Element</li>
                <li className="list-group-item">Video Element</li>
                <li className="list-group-item">Supported Formats</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tags-fill text-primary me-2"></i>Meta Tags</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Common Meta Tags</li>
                <li className="list-group-item">Viewport Meta Tag</li>
                <li className="list-group-item">Open Graph Meta Tags</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-vector-pen text-primary me-2"></i>SVG</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Inline SVG</li>
                <li className="list-group-item">SVG vs Canvas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bounding-box text-primary me-2"></i>Canvas</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Canvas Basics</li>
                <li className="list-group-item">Drawing with JavaScript</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-universal-access text-primary me-2"></i>Accessibility</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Accessibility Best Practices</li>
                <li className="list-group-item">ARIA Attributes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-search text-primary me-2"></i>SEO Basics</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">SEO Best Practices</li>
                <li className="list-group-item">Structured Data</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-check-circle-fill text-primary me-2"></i>HTML Validation</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Validation Tools</li>
                <li className="list-group-item">Common Validation Errors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HtmlSyllabus;