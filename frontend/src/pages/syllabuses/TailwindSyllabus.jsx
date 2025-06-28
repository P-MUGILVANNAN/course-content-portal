import React from 'react';

function TailwindSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-wind fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Tailwind CSS Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Utility-First CSS Framework</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Tailwind CSS</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Tailwind CSS?</li>
                <li className="list-group-item">Utility-First Approach</li>
                <li className="list-group-item">Advantages and Disadvantages</li>
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
                <li className="list-group-item">Using CDN</li>
                <li className="list-group-item">Installation via NPM</li>
                <li className="list-group-item">Framework Integration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Configuration</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Tailwind Config File</li>
                <li className="list-group-item">Customizing Defaults</li>
                <li className="list-group-item">Plugins</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-puzzle text-primary me-2"></i>Utility Classes Overview</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Utility Class Format</li>
                <li className="list-group-item">Common Categories</li>
                <li className="list-group-item">Benefits of Utility Classes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-type text-primary me-2"></i>Typography</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Text Size and Weight</li>
                <li className="list-group-item">Text Alignment</li>
                <li className="list-group-item">Line Height and Letter Spacing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-palette text-primary me-2"></i>Colors</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Background Colors</li>
                <li className="list-group-item">Text Colors</li>
                <li className="list-group-item">Hover & Focus States</li>
                <li className="list-group-item">Opacity</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrows-angle-expand text-primary me-2"></i>Spacing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Margin Utilities</li>
                <li className="list-group-item">Padding Utilities</li>
                <li className="list-group-item">Spacing Scale</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layout-sidebar-inset text-primary me-2"></i>Flexbox</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Display Flex</li>
                <li className="list-group-item">Flex Direction</li>
                <li className="list-group-item">Justify Content</li>
                <li className="list-group-item">Align Items</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-grid-3x3 text-primary me-2"></i>Grid</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Grid Display</li>
                <li className="list-group-item">Grid Columns and Rows</li>
                <li className="list-group-item">Gap Utilities</li>
                <li className="list-group-item">Item Placement</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-phone text-primary me-2"></i>Responsive Design</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Breakpoints</li>
                <li className="list-group-item">Mobile-First Approach</li>
                <li className="list-group-item">Responsive Utilities</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrows-fullscreen text-primary me-2"></i>Sizing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Width Utilities</li>
                <li className="list-group-item">Height Utilities</li>
                <li className="list-group-item">Min/Max Width & Height</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-border text-primary me-2"></i>Borders</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Border Width</li>
                <li className="list-group-item">Border Color</li>
                <li className="list-group-item">Border Style</li>
                <li className="list-group-item">Border Radius</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-droplet text-primary me-2"></i>Shadows & Opacity</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Box Shadow</li>
                <li className="list-group-item">Opacity Utilities</li>
                <li className="list-group-item">Gradient Backgrounds</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrows-move text-primary me-2"></i>Positioning</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Position Classes</li>
                <li className="list-group-item">Offset Utilities</li>
                <li className="list-group-item">Z-Index</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layout-three-columns text-primary me-2"></i>Display & Visibility</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Display Utilities</li>
                <li className="list-group-item">Visibility Utilities</li>
                <li className="list-group-item">Conditional Visibility</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-magic text-primary me-2"></i>Pseudo-Classes</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Hover, Focus, Active States</li>
                <li className="list-group-item">Disabled State</li>
                <li className="list-group-item">Combining States</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-hourglass-split text-primary me-2"></i>Transitions & Animations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Transition Utilities</li>
                <li className="list-group-item">Animation Utilities</li>
                <li className="list-group-item">Timing Functions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-moon-stars text-primary me-2"></i>Dark Mode</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Enabling Dark Mode</li>
                <li className="list-group-item">Dark Mode Classes</li>
                <li className="list-group-item">Toggle Implementation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tools text-primary me-2"></i>Customization</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Custom Colors & Spacing</li>
                <li className="list-group-item">@apply Directive</li>
                <li className="list-group-item">Extending Configuration</li>
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
                <li className="list-group-item">Forms Plugin</li>
                <li className="list-group-item">Input Styling</li>
                <li className="list-group-item">Button Styling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightbulb text-primary me-2"></i>Project Ideas</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Portfolio Website</li>
                <li className="list-group-item">Landing Page</li>
                <li className="list-group-item">Login/Register UI</li>
                <li className="list-group-item">E-commerce Components</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TailwindSyllabus;