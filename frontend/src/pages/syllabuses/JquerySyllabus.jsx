import React from 'react';

function JquerySyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-secondary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-filetype-js fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">jQuery Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of jQuery Library</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to jQuery</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is jQuery?</li>
                <li className="list-group-item">Advantages of jQuery</li>
                <li className="list-group-item">How to include jQuery in HTML</li>
                <li className="list-group-item">Basic jQuery syntax</li>
                <li className="list-group-item">Document ready function</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-code text-primary me-2"></i>jQuery Syntax & Selectors</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">jQuery syntax format</li>
                <li className="list-group-item">Common jQuery selectors (ID, class, element)</li>
                <li className="list-group-item">Advanced selectors (first, last, even, odd)</li>
                <li className="list-group-item">Attribute-based selectors</li>
                <li className="list-group-item">Filtering elements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-mouse text-primary me-2"></i>jQuery Events</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Common events (click, dblclick, hover)</li>
                <li className="list-group-item">Keyboard events (keydown, keyup, keypress)</li>
                <li className="list-group-item">Form events (submit, change, focus, blur)</li>
                <li className="list-group-item">Event delegation with on() method</li>
                <li className="list-group-item">Event object properties</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-magic text-primary me-2"></i>jQuery Effects & Animations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Show/hide/toggle methods</li>
                <li className="list-group-item">Fade effects (fadeIn, fadeOut, fadeToggle)</li>
                <li className="list-group-item">Slide effects (slideDown, slideUp, slideToggle)</li>
                <li className="list-group-item">Custom animations with animate()</li>
                <li className="list-group-item">Animation queue and chaining</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-file-earmark-text text-primary me-2"></i>jQuery DOM Manipulation</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Content manipulation (html(), text(), val())</li>
                <li className="list-group-item">Attribute manipulation (attr(), removeAttr())</li>
                <li className="list-group-item">Class manipulation (addClass, removeClass, toggleClass)</li>
                <li className="list-group-item">Element insertion (append, prepend, after, before)</li>
                <li className="list-group-item">Removing elements (remove, empty)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-diagram-3 text-primary me-2"></i>jQuery Traversing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Parent-child relationships</li>
                <li className="list-group-item">Traversal methods (parent, children, siblings)</li>
                <li className="list-group-item">Finding elements (find, closest)</li>
                <li className="list-group-item">Filtering elements (first, last, eq, filter, not)</li>
                <li className="list-group-item">Chaining traversal methods</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-check-circle text-primary me-2"></i>jQuery Form Validation</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic form validation</li>
                <li className="list-group-item">Required field validation</li>
                <li className="list-group-item">Email format validation with regex</li>
                <li className="list-group-item">Password validation</li>
                <li className="list-group-item">Providing visual feedback</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrow-repeat text-primary me-2"></i>jQuery AJAX</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Introduction to AJAX</li>
                <li className="list-group-item">AJAX methods ($.get, $.post, $.ajax)</li>
                <li className="list-group-item">Loading content with load()</li>
                <li className="list-group-item">Handling AJAX responses</li>
                <li className="list-group-item">Error handling in AJAX</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-puzzle text-primary me-2"></i>jQuery Plugins</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Introduction to plugins</li>
                <li className="list-group-item">Using popular plugins (datepicker, carousel)</li>
                <li className="list-group-item">Plugin initialization and configuration</li>
                <li className="list-group-item">Creating custom plugins</li>
                <li className="list-group-item">Plugin best practices</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-filetype-json text-primary me-2"></i>jQuery and JSON</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">JSON format overview</li>
                <li className="list-group-item">Parsing JSON with jQuery</li>
                <li className="list-group-item">Populating tables with JSON data</li>
                <li className="list-group-item">Creating lists from JSON</li>
                <li className="list-group-item">Working with JSON APIs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightbulb text-primary me-2"></i>jQuery Mini Projects</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">To-Do List Application</li>
                <li className="list-group-item">Contact Form with Validation</li>
                <li className="list-group-item">FAQ Accordion</li>
                <li className="list-group-item">Image Gallery with Lightbox</li>
                <li className="list-group-item">Live Search Functionality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JquerySyllabus;