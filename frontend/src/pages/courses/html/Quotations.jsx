import React from 'react'

function Quotations() {
    return (
        <div>
            <section id="quotations" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-chat-quote"></i> Quotations</h2>
                <ul className="mb-3">
                    <li><code>{`<q>`}</code>: Short quotation</li>
                    <li><code>{`<blockquote>`}</code>: Long quotation</li>
                    <li><code>{`<cite>`}</code>: Citation</li>
                </ul>
                <p>Example:</p>
                <pre className="mb-3"><code>{`<p>Tomorrow is a <q>holiday</q></p>
<blockquote>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quae quibusdam sequi doloremque magnam, praesentium atque, ipsam culpa quos suscipit aspernatur quia neque consequuntur eaque corrupti tenetur. Maxime corrupti quaerat accusantium!</p>
</blockquote>
<cite>Tim Berners-Lee</cite>`}</code></pre>
            </section>

            <section id="marquee" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-arrow-left-right"></i> Marquee Tag</h2>
                <p className="mb-3">The <code>{`<marquee>`}</code> tag scrolls text horizontally (deprecated but still supported in some browsers).</p>
                <pre className="mb-3"><code>{`<marquee behavior="scroll" direction="right">Hi da This is my webpage</marquee>`}</code></pre>
            </section>

            <section id="pre" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-file-text"></i> Pre Tag</h2>
                <p className="mb-3">The <code>{`<pre>`}</code> tag displays preformatted text, preserving spaces and line breaks.</p>
                <pre className="mb-3"><code>{`<pre>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nostrum ea autem rerum error odio dolorum ab cumque libero dolor officiis consectetur repellendus porro, similique, laudantium necessitatibus commodi expedita distinctio corporis?
</pre>`}</code></pre>
            </section>

            <section id="entities" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-symbol"></i> HTML Entities</h2>
                <p className="mb-3">Reserved characters are represented as entities.</p>
                <ul className="mb-3">
                    <li><code>&amp;lt;</code>: Less than (&lt;)</li>
                    <li><code>&amp;gt;</code>: Greater than (&gt;)</li>
                    <li><code>&amp;amp;</code>: Ampersand (&amp;)</li>
                    <li><code>&amp;quot;</code>: Quotation mark (&quot;)</li>
                    <li><code>&amp;copy;</code>: Copyright (&copy;)</li>
                    <li><code>&amp;nbsp;</code>: Non-breaking space</li>
                </ul>
                <p>Example:</p>
                <pre className="mb-3"><code>{`<p>Hi da Im 90&amp;reg; 10&amp;nbsp;&amp;nbsp;hi</p>`}</code></pre>
            </section>
        </div>
    )
}

export default Quotations