import React from 'react';

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
      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-html"></i> HTML Notes</h1>
          <p className="lead">Your Stylish Guide to HyperText Markup Language</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
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

          <main className="col-lg-9">
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

            <section id="tables" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-table"></i> HTML Tables</h2>
              <p className="mb-3">Tables display data in a tabular format.</p>
              <ul className="mb-3">
                <li><code>{`<table>`}</code>: Defines a table</li>
                <li><code>{`<tr>`}</code>: Defines a table row</li>
                <li><code>{`<td>`}</code>: Defines a table data cell</li>
                <li><code>{`<th>`}</code>: Defines a table header cell</li>
              </ul>
              <h3 className="h4 mb-2"><i className="bi bi-gear"></i> Table Attributes</h3>
              <ul className="mb-3">
                <li><code>border</code>: Sets table border (deprecated)</li>
                <li><code>align</code>: Horizontal alignment</li>
                <li><code>width</code>: Table width</li>
                <li><code>height</code>: Table height</li>
                <li><code>cellpadding</code>: Space between border and content</li>
                <li><code>cellspacing</code>: Space between cells</li>
                <li><code>rowspan</code>: Merge rows</li>
                <li><code>colspan</code>: Merge columns</li>
              </ul>
              <p>Example:</p>
              <pre className="mb-3"><code>{`<table border="1" height="200px" width="40%" align="center">
    <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Age</th>
        <th>Phone</th>
    </tr>
    <tr align="center">
        <td>1</td>
        <td>ABC</td>
        <td>12</td>
        <td>12345</td>
    </tr>
    <tr align="center">
        <td>2</td>
        <td>DEF</td>
        <td>13</td>
        <td>67890</td>
    </tr>
    <tr align="center">
        <td>3</td>
        <td>GHI</td>
        <td>15</td>
        <td>12345</td>
    </tr>
</table>`}</code></pre>
              <p>Example with cellpadding and cellspacing:</p>
              <pre className="mb-3"><code>{`<table border="1" cellpadding="40" cellspacing="10">
    <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Age</th>
        <th>Phone</th>
    </tr>
    <tr>
        <td>1</td>
        <td>ABC</td>
        <td>12</td>
        <td>12345</td>
    </tr>
    <tr>
        <td>2</td>
        <td>DEF</td>
        <td>13</td>
        <td>67890</td>
    </tr>
</table>`}</code></pre>
              <p>Example with rowspan and colspan:</p>
              <pre className="mb-3"><code>{`<table border="1">
    <tr>
        <th colspan="2">Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>ABC</td>
        <td rowspan="2">P</td>
        <td>10</td>
    </tr>
    <tr>
        <td>DEF</td>
        <td>15</td>
    </tr>
</table>`}</code></pre>
            </section>

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

            <section id="forms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-input-cursor-text"></i> HTML Forms</h2>
              <p className="mb-3">Forms collect user input using the <code>{`<form>`}</code> and <code>{`<input>`}</code> tags.</p>
              <h3 className="h4 mb-2"><i className="bi bi-keyboard"></i> Input Types</h3>
              <ul className="mb-3">
                <li><code>text</code></li>
                <li><code>password</code></li>
                <li><code>checkbox</code></li>
                <li><code>radio</code></li>
                <li><code>submit</code></li>
                <li><code>reset</code></li>
                <li><code>range</code></li>
                <li><code>button</code></li>
                <li><code>date</code></li>
                <li><code>datetime-local</code></li>
                <li><code>number</code></li>
                <li><code>email</code></li>
                <li><code>month</code></li>
                <li><code>search</code></li>
                <li><code>tel</code></li>
                <li><code>time</code></li>
                <li><code>url</code></li>
                <li><code>color</code></li>
                <li><code>file</code></li>
              </ul>
              <h3 className="h4 mb-2"><i className="bi bi-sliders"></i> Input Attributes</h3>
              <ul className="mb-3">
                <li><code>name</code>: Names the input field</li>
                <li><code>value</code>: Sets default value</li>
                <li><code>type</code>: Defines input type</li>
                <li><code>required</code>: Makes input mandatory</li>
                <li><code>placeholder</code>: Displays placeholder text</li>
              </ul>
              <h3 className="h4 mb-2"><i className="bi bi-gear"></i> Form Attributes</h3>
              <ul className="mb-3">
                <li><code>action</code>: Specifies form submission action</li>
                <li><code>method</code>: Defines submission method</li>
              </ul>
              <p>Example:</p>
              <pre className="mb-3"><code>{`<form action="https://www.google.com">
    <label for="firstname">First Name: </label>
    <input type="text" name="firstname" value="" placeholder="Enter firstname" required>
    <br>
    <label for="lastname">Last Name: </label>
    <input type="text" name="lastname" value="" placeholder="Enter lastname" required>
    <br>
    <label for="pass">Password: </label>
    <input type="password" placeholder="Enter 8 digit">
</form>`}</code></pre>
            </section>

            <section id="iframe" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-window"></i> Iframe Tag</h2>
              <p className="mb-3">The <code>{`<iframe>`}</code> tag embeds another webpage within the current webpage.</p>
              <pre className="mb-3"><code>{`<iframe src="https://www.flipkart.com" height="300px" width="30%"></iframe>`}</code></pre>
            </section>

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

            <section id="multimedia" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-play-circle"></i> Multimedia</h2>
              <h3 className="h4 mb-2"><i className="bi bi-film"></i> Video Tag</h3>
              <p className="mb-3">The <code>{`<video>`}</code> tag embeds videos.</p>
              <p>Attributes: <code>controls</code>, <code>src</code>, <code>width</code>, <code>height</code>, <code>autoplay</code>, <code>muted</code></p>
              <pre className="mb-3"><code>{`<video src="videoplayback.mp4" controls autoplay muted height="400px" width="50%"></video>`}</code></pre>
              <h3 className="h4 mb-2"><i className="bi bi-music-note-beamed"></i> Audio Tag</h3>
              <p className="mb-3">The <code>{`<audio>`}</code> tag embeds audio.</p>
              <p>Attributes: <code>controls</code>, <code>autoplay</code>, <code>muted</code></p>
              <pre className="mb-3"><code>{`<audio src="Vaa-Kannamma-MassTamilan.dev.mp3" controls autoplay muted></audio>`}</code></pre>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>HTML Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default Html;