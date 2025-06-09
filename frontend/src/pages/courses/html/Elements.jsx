import React from 'react'

function Elements() {
    return (
        <div>
            <section id="class-id" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-pencil-square"></i> Class & ID Attributes</h2>
                <p className="mb-3">Used to style elements with CSS.</p>
                <ul className="mb-3">
                    <li><code>class</code>: Defines a class for multiple elements</li>
                    <li><code>id</code>: Defines a unique identifier for an element</li>
                </ul>
                <p>Example:</p>
                <pre className="mb-3"><code>{`<head>
    <style>
        .one {
            color: blue;
        }
        #two {
            color: red;
        }
    </style>
</head>
<h1 class="one">Hello I'm Class attribute</h1>
<h1 class="one">Hello I'm Class attribute</h1>
<h1 class="one">Hello I'm Class attribute</h1>`}</code></pre>
            </section>

            <section id="elements" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-layout-text-sidebar"></i> Block & Inline Elements</h2>
                <h3 className="h4 mb-2"><i className="bi bi-square"></i> Block-Level Elements</h3>
                <p className="mb-3">Take up the full width available.</p>
                <p>Examples: <code>{`<address>`}</code>, <code>{`<article>`}</code>, <code>{`<aside>`}</code>, <code>{`<blockquote>`}</code>, <code>{`<dd>`}</code>, <code>{`<div>`}</code>, <code>{`<dl>`}</code>, <code>{`<dt>`}</code>, <code>{`<figcaption>`}</code>, <code>{`<figure>`}</code>, <code>{`<footer>`}</code>, <code>{`<form>`}</code>, <code>{`<h1>`}</code>-<code>{`<h6>`}</code>, <code>{`<header>`}</code>, <code>{`<hr>`}</code>, <code>{`<li>`}</code>, <code>{`<main>`}</code>, <code>{`<nav>`}</code>, <code>{`<ol>`}</code>, <code>{`<p>`}</code>, <code>{`<section>`}</code>, <code>{`<table>`}</code>, <code>{`<ul>`}</code>, <code>{`<video>`}</code>, etc.</p>
                <h3 className="h4 mb-2"><i className="bi bi-justify-left"></i> Inline-Level Elements</h3>
                <p className="mb-3">Take up only the space needed.</p>
                <p>Examples: <code>{`<a>`}</code>, <code>{`<abbr>`}</code>, <code>{`<acronym>`}</code>, <code>{`<b>`}</code>, <code>{`<big>`}</code>, <code>{`<br>`}</code>, <code>{`<button>`}</code>, <code>{`<cite>`}</code>, <code>{`<code>`}</code>, <code>{`<em>`}</code>, <code>{`<i>`}</code>, <code>{`<img>`}</code>, <code>{`<input>`}</code>, <code>{`<span>`}</code>, <code>{`<q>`}</code>, <code>{`<label>`}</code>, <code>{`<strong>`}</code>, etc.</p>
            </section>

            <section id="semantic" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-layout-text-sidebar-reverse"></i> Semantic & Non-Semantic Elements</h2>
                <h3 className="h4 mb-2"><i className="bi bi-layout-text-window-reverse"></i> Semantic Elements</h3>
                <p className="mb-3">Provide meaning to both browsers and users.</p>
                <ul className="mb-3">
                    <li><code>{`<header>`}</code>: Webpage header</li>
                    <li><code>{`<footer>`}</code>: Webpage footer</li>
                    <li><code>{`<nav>`}</code>: Navigation bar</li>
                    <li><code>{`<main>`}</code>: Main content</li>
                    <li><code>{`<section>`}</code>: Section of the webpage</li>
                    <li><code>{`<article>`}</code>: Article content</li>
                    <li><code>{`<aside>`}</code>: Sidebar content</li>
                    <li><code>{`<figure>`}</code>: Image container</li>
                    <li><code>{`<figcaption>`}</code>: Image caption</li>
                </ul>
                <h3 className="h4 mb-2"><i className="bi bi-layout-text-window"></i> Non-Semantic Elements</h3>
                <p className="mb-3">Do not provide specific meaning.</p>
                <ul className="mb-3">
                    <li><code>{`<div>`}</code>: Container for tags</li>
                    <li><code>{`<span>`}</code>: Small portion of text</li>
                </ul>
            </section>

            <section id="layout" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-layout-wtf"></i> Webpage Layout</h2>
                <p className="mb-3">Typical webpage structure:</p>
                <pre className="mb-3"><code>{`| <header> |
| <nav> |
| <section> |
| <article> |
| <footer> |`}</code></pre>
            </section>

            <section id="void-elements" className="mb-5">
                <h2 className="h2 mb-3"><i className="bi bi-file-minus"></i> Void Elements</h2>
                <p className="mb-3">Elements without closing tags (self-closing).</p>
                <p>Examples: <code>{`<img>`}</code>, <code>{`<br>`}</code>, <code>{`<meta>`}</code>, <code>{`<link>`}</code>, <code>{`<input>`}</code></p>
            </section>
        </div>
    )
}

export default Elements