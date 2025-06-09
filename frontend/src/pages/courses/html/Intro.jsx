import React from 'react'

function Intro() {
    return (
        <div>
            <section id="introduction" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is HTML?</h2>
                <p className="mb-3">HTML stands for Hyper Text Markup Language. It is used to create static webpages and defines their structure.</p>
                <h3 className="h4 mb-2"><i className="bi bi-file-earmark-text"></i> Types of Webpages</h3>
                <ul className="mb-3">
                    <li>Static Webpage</li>
                    <li>Dynamic Webpage</li>
                </ul>
                <h3 className="h4 mb-2"><i className="bi bi-check-circle"></i> Advantages</h3>
                <ul className="mb-3">
                    <li>Easy to create</li>
                    <li>Fast loading</li>
                </ul>
                <h3 className="h4 mb-2"><i className="bi bi-x-circle"></i> Disadvantages</h3>
                <ul className="mb-3">
                    <li>Requires CSS for attractive design</li>
                    <li>Requires JavaScript for interactivity/dynamic content</li>
                </ul>
            </section>
            <section id="usage" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-question-circle"></i> How to Use HTML</h2>
                <p className="mb-3">HTML can be written in a text editor, HTML editor, IDE, or Notepad. Save the file with a <code>.html</code> extension and open it in browsers like Google Chrome, Internet Explorer, or Mozilla Firefox.</p>
            </section>

            <section id="versions" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-clock-history"></i> HTML Versions</h2>
                <p className="mb-3">HTML was invented by Tim Berners-Lee in 1991.</p>
                <ul className="mb-3">
                    <li>HTML 1.0 - 1991</li>
                    <li>HTML + - 1993</li>
                    <li>HTML 2.0 - 1995</li>
                    <li>HTML 3.0 - 1997</li>
                    <li>HTML 4.0 - 1999</li>
                    <li>XHTML - 2000</li>
                    <li>HTML5 - 2012 (latest version)</li>
                </ul>
            </section>

            <section id="structure" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> HTML Structure</h2>
                <pre className="mb-3"><code>{`<!DOCTYPE html>
<html>
    <head>
        <!-- Information about the webpage -->
    </head>
    <body>
        <!-- Content of the webpage -->
    </body>
</html>`}</code></pre>
                <p><code>{`<!DOCTYPE html>`}</code>: Declares the HTML version.</p>
                <p><code>{`<html>`}</code>: Root element of the webpage.</p>
            </section>
        </div>
    )
}

export default Intro