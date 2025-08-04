import React from 'react'

function FloatingButtons() {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
            <a
                href="https://wa.me/918940668116"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-success bg-opacity-90 hover:bg-opacity-100 text-white p-3 rounded-circle shadow-lg transition-all duration-300 hover-scale-110"
                title="WhatsApp"
            >
                <i className="bi bi-whatsapp fs-4"></i>
            </a>
            <a
                href="tel:+918940668116"
                className="bg-primary bg-opacity-90 hover:bg-opacity-100 text-white p-3 rounded-circle shadow-lg transition-all duration-300 hover-scale-110"
                title="Call Now"
            >
                <i className="bi bi-telephone fs-4"></i>
            </a>
        </div>
    )
}

export default FloatingButtons