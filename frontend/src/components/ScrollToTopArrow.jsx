import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ScrollToTopArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  // Show/hide arrow based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`position-fixed bottom-0 end-0 p-3 ${showArrow ? 'd-block' : 'd-none'}`}
      style={{ zIndex: 1000, cursor: 'pointer' }}
    >
      <div 
        className="bg-primary text-white rounded-circle p-2 d-flex align-items-center justify-content-center"
        style={{ width: '50px', height: '50px' }}
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up fs-4 animate-bounce"></i>
      </div>
    </div>
  );
};

export default ScrollToTopArrow;

// Add this CSS in your global stylesheet or as a style tag
const styles = `
  .animate-bounce {
    animation: bounce 1s infinite;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`;

// Inject the styles
const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);