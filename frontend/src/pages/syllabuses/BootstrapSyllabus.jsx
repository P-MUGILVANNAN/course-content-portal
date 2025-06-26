import React from 'react';

function BootstrapSyllabus() {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-bootstrap"></i> Bootstrap Syllabus</h1>
          <p className="lead">Comprehensive Coverage of Bootstrap Framework</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to Bootstrap</h2>
            <ul>
              <li>What is Bootstrap?</li>
              <li>Advantages of using Bootstrap</li>
              <li>Bootstrap vs other frameworks</li>
              <li>Bootstrap version history</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-code-square"></i> Getting Started</h2>
            <ul>
              <li>Setting up Bootstrap</li>
              <li>CDN vs Local installation</li>
              <li>Bootstrap starter template</li>
              <li>Understanding the file structure</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-layout-wtf"></i> Bootstrap Grid System</h2>
            <ul>
              <li>Grid fundamentals</li>
              <li>Rows and columns</li>
              <li>Responsive breakpoints</li>
              <li>Nested grids</li>
              <li>Column ordering</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-type"></i> Typography</h2>
            <ul>
              <li>Headings and display headings</li>
              <li>Text alignment and transformation</li>
              <li>Font weight and italics</li>
              <li>Text colors and utilities</li>
              <li>Lists and description lists</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-palette"></i> Colors and Backgrounds</h2>
            <ul>
              <li>Theme colors</li>
              <li>Text colors</li>
              <li>Background colors</li>
              <li>Color utilities</li>
              <li>Opacity</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-border-width"></i> Borders and Shadows</h2>
            <ul>
              <li>Border utilities</li>
              <li>Border radius</li>
              <li>Border colors</li>
              <li>Shadow utilities</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-arrows-angle-expand"></i> Spacing and Sizing</h2>
            <ul>
              <li>Margin and padding utilities</li>
              <li>Horizontal and vertical spacing</li>
              <li>Width and height utilities</li>
              <li>Viewport sizing</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-image"></i> Images and Figures</h2>
            <ul>
              <li>Responsive images</li>
              <li>Image thumbnails</li>
              <li>Image alignment</li>
              <li>Figures and captions</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-table"></i> Tables</h2>
            <ul>
              <li>Basic tables</li>
              <li>Table variants</li>
              <li>Table borders</li>
              <li>Responsive tables</li>
              <li>Table sizing</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-input-cursor-text"></i> Forms</h2>
            <ul>
              <li>Form controls</li>
              <li>Form layouts</li>
              <li>Form validation</li>
              <li>Input groups</li>
              <li>Custom forms</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-joystick"></i> Buttons</h2>
            <ul>
              <li>Button styles</li>
              <li>Button sizes</li>
              <li>Outline buttons</li>
              <li>Button groups</li>
              <li>Toggle buttons</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-collection"></i> Components</h2>
            <ul>
              <li>Alerts</li>
              <li>Badges</li>
              <li>Breadcrumbs</li>
              <li>Cards</li>
              <li>Carousel</li>
              <li>Dropdowns</li>
              <li>List group</li>
              <li>Modal</li>
              <li>Navbar</li>
              <li>Pagination</li>
              <li>Progress</li>
              <li>Spinners</li>
              <li>Toasts</li>
              <li>Tooltips</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-tools"></i> Utilities</h2>
            <ul>
              <li>Display utilities</li>
              <li>Flex utilities</li>
              <li>Float utilities</li>
              <li>Position utilities</li>
              <li>Overflow utilities</li>
              <li>Text utilities</li>
              <li>Vertical alignment</li>
              <li>Visibility utilities</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-emoji-smile"></i> Bootstrap Icons</h2>
            <ul>
              <li>Including Bootstrap Icons</li>
              <li>Basic icon usage</li>
              <li>Icon sizing</li>
              <li>Icon coloring</li>
              <li>Using icons in buttons</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-layout-text-sidebar"></i> Layout</h2>
            <ul>
              <li>Containers</li>
              <li>Responsive breakpoints</li>
              <li>Z-index</li>
              <li>CSS Grid</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightning-charge"></i> Customizing Bootstrap</h2>
            <ul>
              <li>Using Sass variables</li>
              <li>Theme colors</li>
              <li>Custom components</li>
              <li>Build tools</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-universal-access"></i> Accessibility</h2>
            <ul>
              <li>Accessibility best practices</li>
              <li>ARIA attributes</li>
              <li>Keyboard navigation</li>
              <li>Color contrast</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-search"></i> SEO Best Practices</h2>
            <ul>
              <li>Semantic HTML with Bootstrap</li>
              <li>Structured data</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BootstrapSyllabus;