import React from 'react';

function TailwindSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-wind"></i> Tailwind CSS Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Utility-First CSS Framework</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Tailwind CSS</h2>
            <ul>
              <li>What is Tailwind CSS?</li>
              <li>Utility-First Approach</li>
              <li>Advantages and Disadvantages</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-download"></i> Installation & Setup</h2>
            <ul>
              <li>Using CDN</li>
              <li>Installation via NPM</li>
              <li>Framework Integration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Configuration</h2>
            <ul>
              <li>Tailwind Config File</li>
              <li>Customizing Defaults</li>
              <li>Plugins</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> Utility Classes Overview</h2>
            <ul>
              <li>Utility Class Format</li>
              <li>Common Categories</li>
              <li>Benefits of Utility Classes</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-type"></i> Typography</h2>
            <ul>
              <li>Text Size and Weight</li>
              <li>Text Alignment</li>
              <li>Line Height and Letter Spacing</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-palette"></i> Colors</h2>
            <ul>
              <li>Background Colors</li>
              <li>Text Colors</li>
              <li>Hover & Focus States</li>
              <li>Opacity</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrows-angle-expand"></i> Spacing</h2>
            <ul>
              <li>Margin Utilities</li>
              <li>Padding Utilities</li>
              <li>Spacing Scale</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-layout-sidebar-inset"></i> Flexbox</h2>
            <ul>
              <li>Display Flex</li>
              <li>Flex Direction</li>
              <li>Justify Content</li>
              <li>Align Items</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-grid-3x3"></i> Grid</h2>
            <ul>
              <li>Grid Display</li>
              <li>Grid Columns and Rows</li>
              <li>Gap Utilities</li>
              <li>Item Placement</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-phone"></i> Responsive Design</h2>
            <ul>
              <li>Breakpoints</li>
              <li>Mobile-First Approach</li>
              <li>Responsive Utilities</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrows-fullscreen"></i> Sizing</h2>
            <ul>
              <li>Width Utilities</li>
              <li>Height Utilities</li>
              <li>Min/Max Width & Height</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-border"></i> Borders</h2>
            <ul>
              <li>Border Width</li>
              <li>Border Color</li>
              <li>Border Style</li>
              <li>Border Radius</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-droplet"></i> Shadows & Opacity</h2>
            <ul>
              <li>Box Shadow</li>
              <li>Opacity Utilities</li>
              <li>Gradient Backgrounds</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrows-move"></i> Positioning</h2>
            <ul>
              <li>Position Classes</li>
              <li>Offset Utilities</li>
              <li>Z-Index</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-layout-three-columns"></i> Display & Visibility</h2>
            <ul>
              <li>Display Utilities</li>
              <li>Visibility Utilities</li>
              <li>Conditional Visibility</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-magic"></i> Pseudo-Classes</h2>
            <ul>
              <li>Hover, Focus, Active States</li>
              <li>Disabled State</li>
              <li>Combining States</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-hourglass-split"></i> Transitions & Animations</h2>
            <ul>
              <li>Transition Utilities</li>
              <li>Animation Utilities</li>
              <li>Timing Functions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-moon-stars"></i> Dark Mode</h2>
            <ul>
              <li>Enabling Dark Mode</li>
              <li>Dark Mode Classes</li>
              <li>Toggle Implementation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tools"></i> Customization</h2>
            <ul>
              <li>Custom Colors & Spacing</li>
              <li>@apply Directive</li>
              <li>Extending Configuration</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-input-cursor-text"></i> Forms</h2>
            <ul>
              <li>Forms Plugin</li>
              <li>Input Styling</li>
              <li>Button Styling</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightbulb"></i> Project Ideas</h2>
            <ul>
              <li>Portfolio Website</li>
              <li>Landing Page</li>
              <li>Login/Register UI</li>
              <li>E-commerce Components</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TailwindSyllabus;