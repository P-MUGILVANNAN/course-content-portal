import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://fiit.co.in/wp-content/uploads/2024/10/fiit-logo.png"
                alt="FIIT Logo"
                style={{ height: '40px', marginRight: '10px' }}
              />
              <h5 className="mb-0">
                <i className="bi bi-journal-code me-2 text-primary"></i>
                Course Content Portal
              </h5>
            </div>
            <p>Your gateway to practical coding education through templates and examples.</p>
            <div className="mt-3">
              <a href="https://www.facebook.com/fiit.co.in" target='_blank' className="text-white me-3" style={{ fontSize: '1.2rem' }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://fiit.co.in/" target='_blank' className="text-white me-3" style={{ fontSize: '1.2rem' }}>
                <i class="bi bi-browser-chrome"></i>
              </a>
              <a href="https://www.linkedin.com/company/fiit-formacion/" target='_blank' className="text-white me-3" style={{ fontSize: '1.2rem' }}>
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/fiit.co.in/" target='_blank' className="text-white" style={{ fontSize: '1.2rem' }}>
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="mb-3">Courses</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/trainer/html-course" className="text-white text-decoration-none">HTML</a></li>
              <li className="mb-2"><a href="/trainer/css-course" className="text-white text-decoration-none">CSS</a></li>
              <li className="mb-2"><a href="/trainer/js-course" className="text-white text-decoration-none">JavaScript</a></li>
              <li><a href="/trainer/react-course" className="text-white text-decoration-none">React</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="mb-3">Help</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Documentation</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Tutorials</a></li>
              <li><a href="#" className="text-white text-decoration-none">Support</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-envelope me-2 text-primary"></i>
                fiit.iyyappanthangal@gmail.com
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2 text-primary"></i>
                +91 8695577650
              </li>
              <li>
                <i className="bi bi-geo-alt me-2 text-primary"></i>
                FIIT Iyyappanthangal, Chennai.
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} FIIT Course Content Portal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;