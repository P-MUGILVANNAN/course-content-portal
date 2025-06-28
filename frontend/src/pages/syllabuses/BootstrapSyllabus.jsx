import React from 'react';

function BootstrapSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-bootstrap fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">Bootstrap Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of Bootstrap Framework</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to Bootstrap</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is Bootstrap?</li>
                <li className="list-group-item">Advantages of using Bootstrap</li>
                <li className="list-group-item">Bootstrap vs other frameworks</li>
                <li className="list-group-item">Bootstrap version history</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-code-square text-primary me-2"></i>Getting Started</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Setting up Bootstrap</li>
                <li className="list-group-item">CDN vs Local installation</li>
                <li className="list-group-item">Bootstrap starter template</li>
                <li className="list-group-item">Understanding the file structure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layout-wtf text-primary me-2"></i>Bootstrap Grid System</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Grid fundamentals</li>
                <li className="list-group-item">Rows and columns</li>
                <li className="list-group-item">Responsive breakpoints</li>
                <li className="list-group-item">Nested grids</li>
                <li className="list-group-item">Column ordering</li>
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
                <li className="list-group-item">Headings and display headings</li>
                <li className="list-group-item">Text alignment and transformation</li>
                <li className="list-group-item">Font weight and italics</li>
                <li className="list-group-item">Text colors and utilities</li>
                <li className="list-group-item">Lists and description lists</li>
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
                <li className="list-group-item">Theme colors</li>
                <li className="list-group-item">Text colors</li>
                <li className="list-group-item">Background colors</li>
                <li className="list-group-item">Color utilities</li>
                <li className="list-group-item">Opacity</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-border-width text-primary me-2"></i>Borders and Shadows</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Border utilities</li>
                <li className="list-group-item">Border radius</li>
                <li className="list-group-item">Border colors</li>
                <li className="list-group-item">Shadow utilities</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-arrows-angle-expand text-primary me-2"></i>Spacing and Sizing</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Margin and padding utilities</li>
                <li className="list-group-item">Horizontal and vertical spacing</li>
                <li className="list-group-item">Width and height utilities</li>
                <li className="list-group-item">Viewport sizing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-image text-primary me-2"></i>Images and Figures</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Responsive images</li>
                <li className="list-group-item">Image thumbnails</li>
                <li className="list-group-item">Image alignment</li>
                <li className="list-group-item">Figures and captions</li>
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
                <li className="list-group-item">Basic tables</li>
                <li className="list-group-item">Table variants</li>
                <li className="list-group-item">Table borders</li>
                <li className="list-group-item">Responsive tables</li>
                <li className="list-group-item">Table sizing</li>
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
                <li className="list-group-item">Form controls</li>
                <li className="list-group-item">Form layouts</li>
                <li className="list-group-item">Form validation</li>
                <li className="list-group-item">Input groups</li>
                <li className="list-group-item">Custom forms</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-joystick text-primary me-2"></i>Buttons</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Button styles</li>
                <li className="list-group-item">Button sizes</li>
                <li className="list-group-item">Outline buttons</li>
                <li className="list-group-item">Button groups</li>
                <li className="list-group-item">Toggle buttons</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-collection text-primary me-2"></i>Components</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Alerts</li>
                <li className="list-group-item">Badges</li>
                <li className="list-group-item">Breadcrumbs</li>
                <li className="list-group-item">Cards</li>
                <li className="list-group-item">Carousel</li>
                <li className="list-group-item">Dropdowns</li>
                <li className="list-group-item">List group</li>
                <li className="list-group-item">Modal</li>
                <li className="list-group-item">Navbar</li>
                <li className="list-group-item">Pagination</li>
                <li className="list-group-item">Progress</li>
                <li className="list-group-item">Spinners</li>
                <li className="list-group-item">Toasts</li>
                <li className="list-group-item">Tooltips</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-tools text-primary me-2"></i>Utilities</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Display utilities</li>
                <li className="list-group-item">Flex utilities</li>
                <li className="list-group-item">Float utilities</li>
                <li className="list-group-item">Position utilities</li>
                <li className="list-group-item">Overflow utilities</li>
                <li className="list-group-item">Text utilities</li>
                <li className="list-group-item">Vertical alignment</li>
                <li className="list-group-item">Visibility utilities</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-emoji-smile text-primary me-2"></i>Bootstrap Icons</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Including Bootstrap Icons</li>
                <li className="list-group-item">Basic icon usage</li>
                <li className="list-group-item">Icon sizing</li>
                <li className="list-group-item">Icon coloring</li>
                <li className="list-group-item">Using icons in buttons</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-layout-text-sidebar text-primary me-2"></i>Layout</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Containers</li>
                <li className="list-group-item">Responsive breakpoints</li>
                <li className="list-group-item">Z-index</li>
                <li className="list-group-item">CSS Grid</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightning-charge text-primary me-2"></i>Customizing Bootstrap</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Using Sass variables</li>
                <li className="list-group-item">Theme colors</li>
                <li className="list-group-item">Custom components</li>
                <li className="list-group-item">Build tools</li>
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
                <li className="list-group-item">Accessibility best practices</li>
                <li className="list-group-item">ARIA attributes</li>
                <li className="list-group-item">Keyboard navigation</li>
                <li className="list-group-item">Color contrast</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-search text-primary me-2"></i>SEO Best Practices</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Semantic HTML with Bootstrap</li>
                <li className="list-group-item">Structured data</li>
                <li className="list-group-item">Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BootstrapSyllabus;