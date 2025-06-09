import React from 'react'

function Urls() {
    return (
        <div>
            <section id="urls" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-link"></i> URLs</h2>
                <p className="mb-3">URL stands for Uniform Resource Locator, used to locate websites.</p>
                <p className="mb-3">A website is a collection of webpages, and a webpage is an HTML document.</p>
                <p className="mb-3">Example: <code>https://www.flipkart.com/path/?queries...</code></p>
                <ul className="mb-3">
                    <li><code>https</code>: Hypertext Transfer Protocol Secure</li>
                    <li><code>www</code>: World Wide Web (subdomain)</li>
                    <li><code>flipkart</code>: Domain name</li>
                    <li><code>.com</code>: Top-level domain</li>
                </ul>
                <h3 className="h4 mb-2"><i className="bi bi-list-check"></i> Types of URLs</h3>
                <ul className="mb-3">
                    <li>Text URL</li>
                    <li>Image URL</li>
                    <li>Bookmark URL</li>
                    <li>Email URL</li>
                </ul>
            </section>

            <section id="links" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-link-45deg"></i> HTML Links</h2>
                <p className="mb-3">Links are created using the <code>{`<a>`}</code> tag with the <code>href</code> attribute.</p>
                <pre className="mb-3"><code>{`<a href="url"></a>`}</code></pre>
                <h3 className="h4 mb-2"><i className="bi bi-text-paragraph"></i> Text URL</h3>
                <pre className="mb-3"><code>{`<a href="https://www.shopify.com">Shopify</a>`}</code></pre>
                <p className="mb-3">Link colors:</p>
                <ul className="mb-3">
                    <li>Unvisited: Blue with underline</li>
                    <li>Visited: Purple with underline</li>
                    <li>Active: Red</li>
                </ul>
                <h3 className="h4 mb-2"><i className="bi bi-bookmark"></i> Bookmark URL</h3>
                <pre className="mb-3"><code>{`<a href="#idname"></a>
<p id="idname"></p>`}</code></pre>
                <h3 className="h4 mb-2"><i className="bi bi-envelope"></i> Email URL</h3>
                <pre className="mb-3"><code>{`<a href="mailto:emailid">Send Email</a>`}</code></pre>
            </section>

            <section id="images" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-image"></i> HTML Images</h2>
                <p className="mb-3">Images are added using the <code>{`<img>`}</code> tag with <code>src</code> and <code>alt</code> attributes.</p>
                <pre className="mb-3"><code>{`<img src="" alt="">`}</code></pre>
                <p className="mb-3">Image sources can be:</p>
                <ul className="mb-3">
                    <li>URL (e.g., copied from Google)</li>
                    <li>File name (same folder)</li>
                    <li>File path (another folder)</li>
                </ul>
                <p className="mb-3">Height and width can be set in pixels, cm, %, or rem.</p>
                <h3 className="h4 mb-2"><i className="bi bi-image-alt"></i> Image URL Example</h3>
                <pre className="mb-3"><code>{`<a href="https://www.crunchyroll.com/"><img src="https://staticg.sportskeeda.com/editor/2022/08/53e1516596004347246.png?w=640" alt=""></a>`}</code></pre>
                <h3 className="h4 mb-2"><i className="bi bi-window"></i> Target Attribute</h3>
                <p className="mb-3">Specifies where to open the link:</p>
                <ul className="mb-3">
                    <li><code>_blank</code>: New tab</li>
                    <li><code>_self</code>: Same tab</li>
                    <li><code>_parent</code>: Parent frame</li>
                    <li><code>_top</code>: Top frame</li>
                </ul>
            </section>
        </div>
    )
}

export default Urls