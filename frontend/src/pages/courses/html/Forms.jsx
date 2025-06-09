import React from 'react'

function Forms() {
    return (
        <div>
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
        </div>
    )
}

export default Forms