import React from 'react';
import Intro from './Intro';
import Tags from './Tags';
import Urls from './Urls';
import Tables from './Tables';
import Lists from './Lists';
import Forms from './Forms';
import Sidebar from './Sidebar';
import Elements from './Elements';
import Quotations from './Quotations';
import Multimedia from './Multimedia';
import Header from './Header';
import Footer from './Footer';

function Html() {
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

          .nav-link {
            color: #495057;
          }

          .nav-link:hover {
            color: #0d6efd;
          }

          @media (max-width: 991.98px) {
            .sidebar {
              position: relative;
              height: auto;
              top: auto;
              margin-bottom: 20px;
              overflow-y: visible;
            }
            
            .main-content {
              width: 100%;
            }
          }
        `}
      </style>
      <Header />
      <div className="container py-4">
        <div className="row">
          <Sidebar />
          <main className="col-lg-9">
            <Intro />
            <Tags />
            <Urls />
            <Tables />
            <Lists />
            <Forms />
            <Elements />
            <Quotations />
            <Multimedia />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Html;