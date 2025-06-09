import React from 'react'

function Tags() {
    return (
        <div>
            <section id="tags" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-tags"></i> Tags & Attributes</h2>
                <p className="mb-3">HTML is made up of tags and attributes.</p>
                <h3 className="h4 mb-2"><i className="bi bi-tag"></i> Tags</h3>
                <p className="mb-3">Tags are the primary component of the HTML that defines how the content will be structured/formatted.</p>
                <h3 className="h4 mb-2"><i className="bi bi-gear"></i> Attributes</h3>
                <p className="mb-3">Attributes are used along with the HTML tags to define characteristics or modify the behavior of elements.</p>
                <h3 className="h4 mb-2"><i className="bi bi-code-slash"></i> Syntax</h3>
                <pre className="mb-3"><code>{`<tagname attribute1="value1">
    content
</tagname>`}</code></pre>
                <p>Example:</p>
                <pre className="mb-3"><code>{`<h1 align="center">
    Content
</h1>`}</code></pre>
                <h2 className="h2 mb-3">HTML Elements:</h2>
                <p className="mb-3">An HTML element is defined by an open tag, some content, and a close tag.</p>
                <pre className="mb-3"><code>{`<opentag>Content</opentag>`}</code></pre>
            </section>

            <section id="heading-tags" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-type-h1"></i> Heading Tags</h2>
                <p className="mb-3">Heading tags are block-level elements (displayed on a new line).</p>
                <pre className="mb-3"><code>{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}</code></pre>
                <h3 className="h4 mb-2"><i className="bi bi-paragraph"></i> Paragraph Tag</h3>
                <pre className="mb-3"><code>{`<p>This is a paragraph tag</p>`}</code></pre>
            </section>

            <section id="formatting-tags" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-type-bold"></i> Formatting Tags</h2>
                <p className="mb-3">Formatting tags are inline-level elements (displayed on the same line).</p>
                <ul className="mb-3">
                    <li><code>{`<b>`}</code>: Bold text</li>
                    <li><code>{`<i>`}</code>: Italic text</li>
                    <li><code>{`<s>`}</code>: Strike text</li>
                    <li><code>{`<u>`}</code>: Underline text</li>
                    <li><code>{`<sub>`}</code>: Subscript text</li>
                    <li><code>{`<sup>`}</code>: Superscript text</li>
                    <li><code>{`<br>`}</code>: Line break (self-closing)</li>
                    <li><code>{`<hr>`}</code>: Horizontal line (self-closing)</li>
                    <li><code>{`<em>`}</code>: Emphasized text</li>
                    <li><code>{`<big>`}</code>: Increase font size (deprecated)</li>
                    <li><code>{`<small>`}</code>: Decrease font size</li>
                </ul>
                <p>Example:</p>
                <pre className="mb-3"><code>{`<b>This is bold text</b><br>
<i>This is italic text</i><br>
<u>This is underline text</u><br>
<s>This is strike text</s><br>
<em>This is emphasized text</em><br>
<p>H<sub>2</sub>O</p>
<p>(a+b)<sup>2</sup></p>
<big>This is big text</big><br>
<small>This is small text</small>
<hr>`}</code></pre>
            </section>

            <section id="logical-tags" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Logical Tags</h2>
                <ul className="mb-3">
                    <li><code>{`<code>`}</code>: Code text</li>
                    <li><code>{`<abbr title="">`}</code>: Abbreviation</li>
                    <li><code>{`<acronym title="">`}</code>: Acronym (deprecated)</li>
                    <li><code>{`<mark>`}</code>: Highlighted text (default yellow)</li>
                    <li><code>{`<address>`}</code>: Address</li>
                    <li><code>{`<cite>`}</code>: Citation (e.g., poem or author names)</li>
                    <li><code>{`<del>`}</code>: Deleted text</li>
                    <li><code>{`<strike>`}</code>: Strike text (deprecated)</li>
                    <li><code>{`<strong>`}</code>: Bold text</li>
                    <li><code>{`<center>`}</code>: Center text (deprecated)</li>
                </ul>
                <p>Example:</p>
                <pre className="mb-3"><code>{`<code>168.12.45.192</code><br>
<abbr title="Hyper Text Markup Language">HTML</abbr>
<acronym title="World Health Organization">WHO</acronym>
<center>This is center content</center>
<address>2/100</address>
<address>Mount road</address>
<address>Iyyappanthangal</address>
<mark>This is highlighted text</mark><br>
<cite>Tim Berners-Lee</cite><br>
<del>This is delete text</del><br>
<strike>This is strike text</strike><br>
<strong>This is bold text</strong><br>`}</code></pre>
            </section>
        </div>
    )
}

export default Tags