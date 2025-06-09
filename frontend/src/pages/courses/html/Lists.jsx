import React from 'react'

function Lists() {
    return (
        <section id="lists" className="mb-5">
            <h2 className="h2 mb-3"><i className="bi bi-list-ul"></i> HTML Lists</h2>
            <p className="mb-3">Lists are used to organize items.</p>
            <h3 className="h4 mb-2"><i className="bi bi-list-ol"></i> Types of Lists</h3>
            <ul className="mb-3">
                <li>Ordered List: <code>{`<ol>`}</code> (numbered)</li>
                <li>Unordered List: <code>{`<ul>`}</code> (bulleted)</li>
                <li>Description List: <code>{`<dl>`}</code></li>
            </ul>
            <p>List items are defined with <code>{`<li>`}</code>.</p>
            <h3 className="h4 mb-2"><i className="bi bi-list-ol"></i> Ordered List Example</h3>
            <pre className="mb-3"><code>{`<ol type="i">
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
</ol>`}</code></pre>
            <p>Ordered list attributes: <code>type</code> (1, A, a, I, i)</p>
            <h3 className="h4 mb-2"><i className="bi bi-list-ul"></i> Unordered List Example</h3>
            <pre className="mb-3"><code>{`<ul type="disc">
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
</ul>`}</code></pre>
            <p>Unordered list attributes: <code>type</code> (disc, circle, square)</p>
            <h3 className="h4 mb-2"><i className="bi bi-list-check"></i> Description List Example</h3>
            <pre className="mb-3"><code>{`<dl>
    <dt>HTML</dt>
    <dd>Hyper Text Markup Language</dd>
</dl>`}</code></pre>
        </section>
    )
}

export default Lists