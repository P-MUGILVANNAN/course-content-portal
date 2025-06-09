import React from 'react'

function Tables() {
    return (
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
    )
}

export default Tables