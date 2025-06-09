import React from 'react'

function Sidebar() {
    return (
        <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
                <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> What is HTML?</a>
                <a className="nav-link" href="#usage"><i className="bi bi-question-circle"></i> How to Use HTML</a>
                <a className="nav-link" href="#versions"><i className="bi bi-clock-history"></i> HTML Versions</a>
                <a className="nav-link" href="#structure"><i className="bi bi-diagram-3"></i> HTML Structure</a>
                <a className="nav-link" href="#tags"><i className="bi bi-tags"></i> Tags & Attributes</a>
                <a className="nav-link" href="#heading-tags"><i className="bi bi-type-h1"></i> Heading Tags</a>
                <a className="nav-link" href="#formatting-tags"><i className="bi bi-type-bold"></i> Formatting Tags</a>
                <a className="nav-link" href="#logical-tags"><i className="bi bi-code-square"></i> Logical Tags</a>
                <a className="nav-link" href="#urls"><i className="bi bi-link"></i> URLs</a>
                <a className="nav-link" href="#links"><i className="bi bi-link-45deg"></i> HTML Links</a>
                <a className="nav-link" href="#images"><i className="bi bi-image"></i> HTML Images</a>
                <a className="nav-link" href="#tables"><i className="bi bi-table"></i> HTML Tables</a>
                <a className="nav-link" href="#lists"><i className="bi bi-list-ul"></i> HTML Lists</a>
                <a className="nav-link" href="#forms"><i className="bi bi-input-cursor-text"></i> HTML Forms</a>
                <a className="nav-link" href="#iframe"><i className="bi bi-window"></i> Iframe Tag</a>
                <a className="nav-link" href="#class-id"><i className="bi bi-pencil-square"></i> Class & ID</a>
                <a className="nav-link" href="#elements"><i className="bi bi-layout-text-sidebar"></i> Block & Inline Elements</a>
                <a className="nav-link" href="#semantic"><i className="bi bi-layout-text-sidebar-reverse"></i> Semantic Elements</a>
                <a className="nav-link" href="#layout"><i className="bi bi-layout-wtf"></i> Webpage Layout</a>
                <a className="nav-link" href="#void-elements"><i className="bi bi-file-minus"></i> Void Elements</a>
                <a className="nav-link" href="#quotations"><i className="bi bi-chat-quote"></i> Quotations</a>
                <a className="nav-link" href="#marquee"><i className="bi bi-arrow-left-right"></i> Marquee Tag</a>
                <a className="nav-link" href="#pre"><i className="bi bi-file-text"></i> Pre Tag</a>
                <a className="nav-link" href="#entities"><i className="bi bi-symbol"></i> HTML Entities</a>
                <a className="nav-link" href="#multimedia"><i className="bi bi-play-circle"></i> Multimedia</a>
            </nav>
        </aside>
    )
}

export default Sidebar