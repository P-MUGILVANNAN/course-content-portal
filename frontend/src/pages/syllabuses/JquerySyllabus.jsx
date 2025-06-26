import React from 'react';

function JquerySyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-js"></i> jQuery Syllabus</h1>
          <p className="lead">Comprehensive Coverage of jQuery Library</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to jQuery</h2>
            <ul>
              <li>What is jQuery?</li>
              <li>Advantages of jQuery</li>
              <li>How to include jQuery in HTML</li>
              <li>Basic jQuery syntax</li>
              <li>Document ready function</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-code"></i> jQuery Syntax & Selectors</h2>
            <ul>
              <li>jQuery syntax format</li>
              <li>Common jQuery selectors (ID, class, element)</li>
              <li>Advanced selectors (first, last, even, odd)</li>
              <li>Attribute-based selectors</li>
              <li>Filtering elements</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-mouse"></i> jQuery Events</h2>
            <ul>
              <li>Common events (click, dblclick, hover)</li>
              <li>Keyboard events (keydown, keyup, keypress)</li>
              <li>Form events (submit, change, focus, blur)</li>
              <li>Event delegation with on() method</li>
              <li>Event object properties</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-magic"></i> jQuery Effects & Animations</h2>
            <ul>
              <li>Show/hide/toggle methods</li>
              <li>Fade effects (fadeIn, fadeOut, fadeToggle)</li>
              <li>Slide effects (slideDown, slideUp, slideToggle)</li>
              <li>Custom animations with animate()</li>
              <li>Animation queue and chaining</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-file-earmark-text"></i> jQuery DOM Manipulation</h2>
            <ul>
              <li>Content manipulation (html(), text(), val())</li>
              <li>Attribute manipulation (attr(), removeAttr())</li>
              <li>Class manipulation (addClass, removeClass, toggleClass)</li>
              <li>Element insertion (append, prepend, after, before)</li>
              <li>Removing elements (remove, empty)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-diagram-3"></i> jQuery Traversing</h2>
            <ul>
              <li>Parent-child relationships</li>
              <li>Traversal methods (parent, children, siblings)</li>
              <li>Finding elements (find, closest)</li>
              <li>Filtering elements (first, last, eq, filter, not)</li>
              <li>Chaining traversal methods</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-check-circle"></i> jQuery Form Validation</h2>
            <ul>
              <li>Basic form validation</li>
              <li>Required field validation</li>
              <li>Email format validation with regex</li>
              <li>Password validation</li>
              <li>Providing visual feedback</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrow-repeat"></i> jQuery AJAX</h2>
            <ul>
              <li>Introduction to AJAX</li>
              <li>AJAX methods ($.get, $.post, $.ajax)</li>
              <li>Loading content with load()</li>
              <li>Handling AJAX responses</li>
              <li>Error handling in AJAX</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> jQuery Plugins</h2>
            <ul>
              <li>Introduction to plugins</li>
              <li>Using popular plugins (datepicker, carousel)</li>
              <li>Plugin initialization and configuration</li>
              <li>Creating custom plugins</li>
              <li>Plugin best practices</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-filetype-json"></i> jQuery and JSON</h2>
            <ul>
              <li>JSON format overview</li>
              <li>Parsing JSON with jQuery</li>
              <li>Populating tables with JSON data</li>
              <li>Creating lists from JSON</li>
              <li>Working with JSON APIs</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightbulb"></i> jQuery Mini Projects</h2>
            <ul>
              <li>To-Do List Application</li>
              <li>Contact Form with Validation</li>
              <li>FAQ Accordion</li>
              <li>Image Gallery with Lightbox</li>
              <li>Live Search Functionality</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JquerySyllabus;