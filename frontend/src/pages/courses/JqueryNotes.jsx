import React from 'react';

function JqueryNotes() {
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
          @media (max-width: 991.98px) {
            .sidebar {
              position: static;
              height: auto;
              margin-bottom: 20px;
              overflow-y: visible;
            }
          }
          .nav-link {
            color: #495057;
          }
          .nav-link:hover {
            color: #0d6efd;
          }
          .property-card {
            background-color: #f8f9fa;
            border-left: 4px solid #0d6efd;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 4px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1rem;
          }
          table, th, td {
            border: 1px solid #dee2e6;
          }
          th, td {
            padding: 0.75rem;
            text-align: left;
          }
          th {
            background-color: #f8f9fa;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-js"></i> jQuery Notes</h1>
          <p className="lead">Your Comprehensive Guide to jQuery Library</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#syntax-selectors"><i className="bi bi-file-earmark-code"></i> Syntax & Selectors</a>
              <a className="nav-link" href="#events"><i className="bi bi-mouse"></i> Events</a>
              <a className="nav-link" href="#effects"><i className="bi bi-magic"></i> Effects & Animations</a>
              <a className="nav-link" href="#dom"><i className="bi bi-file-earmark-text"></i> DOM Manipulation</a>
              <a className="nav-link" href="#traversing"><i className="bi bi-diagram-3"></i> Traversing</a>
              <a className="nav-link" href="#validation"><i className="bi bi-check-circle"></i> Form Validation</a>
              <a className="nav-link" href="#ajax"><i className="bi bi-arrow-repeat"></i> AJAX</a>
              <a className="nav-link" href="#plugins"><i className="bi bi-puzzle"></i> Plugins</a>
              <a className="nav-link" href="#json"><i className="bi bi-filetype-json"></i> jQuery & JSON</a>
              <a className="nav-link" href="#projects"><i className="bi bi-lightbulb"></i> Mini Projects</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Topic 1: Introduction to jQuery</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <ul>
                  <li>jQuery is a fast, lightweight, and feature-rich JavaScript library</li>
                  <li>It simplifies HTML document traversal, event handling, animation, and Ajax interactions for rapid web development</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Advantages of jQuery:</h3>
                <ul>
                  <li>Write less, do more (very concise code)</li>
                  <li>Cross-browser compatibility</li>
                  <li>Easy DOM manipulation</li>
                  <li>Built-in effects and animations</li>
                  <li>Simplifies AJAX calls</li>
                  <li>Large plugin ecosystem</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">How to Include jQuery in HTML:</h3>
                <h4 className="h5 mt-3">Using CDN:</h4>
                <pre><code>{`<!-- Include latest jQuery from Google CDN -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>`}</code></pre>
                
                <h4 className="h5 mt-3">Using Local File:</h4>
                <pre><code>{`<!-- Include jQuery from downloaded file -->
<script src="js/jquery.min.js"></script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Basic jQuery Syntax:</h3>
                <pre><code>{`$(document).ready(function(){
    // Your code here
});`}</code></pre>
                <ul>
                  <li><code>$</code> → jQuery function</li>
                  <li><code>document.ready()</code> → runs the code once DOM is fully loaded</li>
                </ul>
                
                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
<title>jQuery Intro</title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function(){
    alert("jQuery is ready!");
});
</script>
</head>
<body>
<h2>Welcome to jQuery</h2>
</body>
</html>`}</code></pre>
              </div>
            </section>

            <section id="syntax-selectors" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> Topic 2: jQuery Syntax & Selectors</h2>
              
              <div className="property-card">
                <h3 className="h4">jQuery Syntax Format:</h3>
                <pre><code>{`$(selector).action();`}</code></pre>
                <ul>
                  <li><code>$</code> → jQuery function</li>
                  <li><code>selector</code> → selects the HTML element(s)</li>
                  <li><code>action()</code> → jQuery function to perform on selected elements</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common jQuery Selectors:</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Selector</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>*</code></td>
                      <td>All elements</td>
                      <td><code>$("*")</code></td>
                    </tr>
                    <tr>
                      <td><code>#id</code></td>
                      <td>Select element by ID</td>
                      <td><code>$("#myId")</code></td>
                    </tr>
                    <tr>
                      <td><code>.class</code></td>
                      <td>Select elements by class</td>
                      <td><code>$(".box")</code></td>
                    </tr>
                    <tr>
                      <td><code>element</code></td>
                      <td>Tag-based selector</td>
                      <td><code>$("p")</code></td>
                    </tr>
                    <tr>
                      <td><code>this</code></td>
                      <td>Refers to current element</td>
                      <td><code>$(this)</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Advanced Selectors:</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Selector</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>:first</code></td>
                      <td>Selects first matched element</td>
                      <td><code>$("p:first")</code></td>
                    </tr>
                    <tr>
                      <td><code>:last</code></td>
                      <td>Selects last matched element</td>
                      <td><code>$("p:last")</code></td>
                    </tr>
                    <tr>
                      <td><code>:even</code></td>
                      <td>Selects even index elements</td>
                      <td><code>$("li:even")</code></td>
                    </tr>
                    <tr>
                      <td><code>:odd</code></td>
                      <td>Selects odd index elements</td>
                      <td><code>$("li:odd")</code></td>
                    </tr>
                    <tr>
                      <td><code>[attribute=value]</code></td>
                      <td>Attribute-based selection</td>
                      <td><code>$("input[type='text']")</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example: Change Text Color using Class Selector</h3>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
<title>jQuery Selectors</title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function(){
    $(".highlight").css("color", "red");
});
</script>
</head>
<body>
<p class="highlight">This is red text.</p>
<p>This is normal text.</p>
</body>
</html>`}</code></pre>
              </div>
            </section>

            <section id="events" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-mouse"></i> Topic 3: jQuery Events</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p>Events in jQuery are actions that occur in the browser like clicking, submitting, hovering, etc. jQuery makes it easy to handle these events using simple methods.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common jQuery Events:</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>click()</code></td>
                      <td>Triggered when an element is clicked</td>
                    </tr>
                    <tr>
                      <td><code>dblclick()</code></td>
                      <td>Double-click on an element</td>
                    </tr>
                    <tr>
                      <td><code>mouseenter() / mouseleave()</code></td>
                      <td>Mouse over / Mouse out</td>
                    </tr>
                    <tr>
                      <td><code>hover()</code></td>
                      <td>Combines mouseenter and mouseleave</td>
                    </tr>
                    <tr>
                      <td><code>keydown() / keyup() / keypress()</code></td>
                      <td>Keyboard key actions</td>
                    </tr>
                    <tr>
                      <td><code>focus() / blur()</code></td>
                      <td>Input focus gained/lost</td>
                    </tr>
                    <tr>
                      <td><code>submit()</code></td>
                      <td>Form submission</td>
                    </tr>
                    <tr>
                      <td><code>change()</code></td>
                      <td>Value change in input/select</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Using on() Method (Event Delegation):</h3>
                <pre><code>{`$(document).on("click", "button", function(){
    alert("Button clicked dynamically!");
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 1: Button Click Event</h3>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
<title>Click Event</title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function(){
    $("#btn").click(function(){
        alert("You clicked the button!");
    });
});
</script>
</head>
<body>
<button id="btn">Click Me</button>
</body>
</html>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 2: Form Change Event</h3>
                <pre><code>{`<input type="text" id="name" placeholder="Enter name">
<script>
$("#name").change(function() {
    alert("Text changed!");
});
</script>`}</code></pre>
              </div>
            </section>

            <section id="effects" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-magic"></i> Topic 4: jQuery Effects & Animations</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p>jQuery provides built-in methods to create effects like show/hide, fade, slide, and animate. These are used to improve UI/UX without writing complex JavaScript.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common Effects:</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>show() / hide()</code></td>
                      <td>Show or hide elements</td>
                    </tr>
                    <tr>
                      <td><code>toggle()</code></td>
                      <td>Toggle between show/hide</td>
                    </tr>
                    <tr>
                      <td><code>fadeIn() / fadeOut() / fadeToggle()</code></td>
                      <td>Fade in or out elements</td>
                    </tr>
                    <tr>
                      <td><code>slideDown() / slideUp() / slideToggle()</code></td>
                      <td>Slide animation</td>
                    </tr>
                    <tr>
                      <td><code>animate()</code></td>
                      <td>Custom animation by changing CSS properties</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 1: Show and Hide</h3>
                <pre><code>{`<button id="hideBtn">Hide</button>
<button id="showBtn">Show</button>
<p id="text">This is a paragraph</p>

<script>
$("#hideBtn").click(function(){
    $("#text").hide();
});
$("#showBtn").click(function(){
    $("#text").show();
});
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 2: Fade Effect</h3>
                <pre><code>{`<button id="fadeBtn">Fade Out</button>
<div id="box" style="width:100px;height:100px;background:red;"></div>

<script>
$("#fadeBtn").click(function(){
    $("#box").fadeOut();
});
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 3: Animate (Custom Effect)</h3>
                <pre><code>{`<button id="moveBtn">Move Box</button>
<div id="box" style="width:100px;height:100px;background:blue;position:relative;"></div>

<script>
$("#moveBtn").click(function() {
    $("#box").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
});
</script>`}</code></pre>
              </div>
            </section>

            <section id="dom" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-text"></i> Topic 5: jQuery DOM Manipulation</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p>DOM manipulation means dynamically changing the content, attributes, and structure of HTML elements using jQuery methods.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Content & Value Manipulation Methods:</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>html()</code></td>
                      <td>Get/set HTML content</td>
                    </tr>
                    <tr>
                      <td><code>text()</code></td>
                      <td>Get/set text content</td>
                    </tr>
                    <tr>
                      <td><code>val()</code></td>
                      <td>Get/set form values</td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`<p id="para">Old Text</p>
<script>
$("#para").text("New Text");
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Attribute Manipulation:</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>attr()</code></td>
                      <td>Get/set attribute</td>
                    </tr>
                    <tr>
                      <td><code>removeAttr()</code></td>
                      <td>Remove attribute</td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`<img id="logo" src="old.jpg">
<script>
$("#logo").attr("src", "new.jpg");
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Class Manipulation:</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>addClass()</code></td>
                      <td>Adds class</td>
                    </tr>
                    <tr>
                      <td><code>removeClass()</code></td>
                      <td>Removes class</td>
                    </tr>
                    <tr>
                      <td><code>toggleClass()</code></td>
                      <td>Toggles class on/off</td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`<div id="box"></div>
<script>
$("#box").addClass("highlight");
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Element Insertion:</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>append()</code></td>
                      <td>Adds content at the end</td>
                    </tr>
                    <tr>
                      <td><code>prepend()</code></td>
                      <td>Adds content at the beginning</td>
                    </tr>
                    <tr>
                      <td><code>after()</code></td>
                      <td>Inserts content after element</td>
                    </tr>
                    <tr>
                      <td><code>before()</code></td>
                      <td>Inserts content before element</td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`<ul id="list"><li>Item 1</li></ul>
<script>
$("#list").append("<li>Item 2</li>");
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Removing Elements:</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>remove()</code></td>
                      <td>Removes the selected element</td>
                    </tr>
                    <tr>
                      <td><code>empty()</code></td>
                      <td>Clears all content inside the element</td>
                    </tr>
                  </tbody>
                </table>
                
                <h4 className="h5 mt-3">Example:</h4>
                <pre><code>{`$("#box").remove(); // Removes entire element
$("#box").empty(); // Removes content only`}</code></pre>
              </div>
            </section>

            <section id="traversing" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> Topic 6: jQuery Traversing</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p>jQuery traversing methods are used to move through (or "walk") the DOM tree to find, filter, and select related elements based on hierarchy or relationships.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Traversal Methods by Relationship:</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>parent()</code></td>
                      <td>Gets the immediate parent</td>
                      <td><code>$("span").parent()</code></td>
                    </tr>
                    <tr>
                      <td><code>parents()</code></td>
                      <td>Gets all ancestors</td>
                      <td><code>$("span").parents()</code></td>
                    </tr>
                    <tr>
                      <td><code>children()</code></td>
                      <td>Gets all direct children</td>
                      <td><code>$("div").children()</code></td>
                    </tr>
                    <tr>
                      <td><code>siblings()</code></td>
                      <td>Gets all siblings</td>
                      <td><code>$("h2").siblings()</code></td>
                    </tr>
                    <tr>
                      <td><code>next()</code></td>
                      <td>Gets next sibling</td>
                      <td><code>$("h2").next()</code></td>
                    </tr>
                    <tr>
                      <td><code>prev()</code></td>
                      <td>Gets previous sibling</td>
                      <td><code>$("h2").prev()</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Filtering Methods:</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>first()</code></td>
                      <td>Selects the first element</td>
                      <td><code>$("li").first()</code></td>
                    </tr>
                    <tr>
                      <td><code>last()</code></td>
                      <td>Selects the last element</td>
                      <td><code>$("li").last()</code></td>
                    </tr>
                    <tr>
                      <td><code>eq(index)</code></td>
                      <td>Selects element by index</td>
                      <td><code>$("li").eq(1)</code></td>
                    </tr>
                    <tr>
                      <td><code>filter()</code></td>
                      <td>Filters matching elements</td>
                      <td><code>$("li").filter(".active")</code></td>
                    </tr>
                    <tr>
                      <td><code>not()</code></td>
                      <td>Excludes specified elements</td>
                      <td><code>$("li").not(".active")</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Finding Descendants:</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>find()</code></td>
                      <td>Finds descendants</td>
                      <td><code>$("div").find("p")</code></td>
                    </tr>
                    <tr>
                      <td><code>closest()</code></td>
                      <td>Finds the closest ancestor that matches</td>
                      <td><code>$("span").closest("div")</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example: DOM Traversal</h3>
                <pre><code>{`<div>
<ul>
<li>Apple</li>
<li class="fav">Mango</li>
<li>Orange</li>
</ul>
</div>

<script>
$("li").first().css("color", "green");    // Apple
$("li").last().css("color", "orange");    // Orange
$("li").eq(1).css("font-weight", "bold");    // Mango
$(".fav").parent().css("background", "#eee");  // UL parent
</script>`}</code></pre>
              </div>
            </section>

            <section id="validation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-check-circle"></i> Topic 7: jQuery Form Validation (Basic)</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p>Form validation ensures user input is correct before submitting a form. jQuery helps in performing client-side validation easily without refreshing the page.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common Validation Use Cases:</h3>
                <ul>
                  <li>Required fields not empty</li>
                  <li>Valid email format</li>
                  <li>Password length</li>
                  <li>Confirm password match</li>
                  <li>Select dropdown values</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Basic Validation Example:</h3>
                <pre><code>{`<form id="myForm">
<input type="text" id="name" placeholder="Enter Name"><br>
<input type="email" id="email" placeholder="Enter Email"><br>
<input type="submit" value="Submit">
</form>

<script>
$("#myForm").submit(function(e){
    let name = $("#name").val();
    let email = $("#email").val();

    if(name == "" || email == ""){
        alert("All fields are required!");
        e.preventDefault(); // Stop form submission
    }
});
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Validating Email Format (Using Regex):</h3>
                <pre><code>{`let pattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/;

if (!email.match(pattern)) {
    alert("Enter a valid email address");
    e.preventDefault();
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Visual Feedback Example:</h3>
                <pre><code>{`if(name == ""){
    $("#name").css("border", "2px solid red");
} else {
    $("#name").css("border", "");
}`}</code></pre>
              </div>
            </section>

            <section id="ajax" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> Topic 8: jQuery AJAX</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <ul>
                  <li>AJAX (Asynchronous JavaScript and XML) allows you to send and receive data from a server without reloading the page</li>
                  <li>jQuery makes AJAX very simple to use with built-in methods</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Common AJAX Methods in jQuery:</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>$.get()</code></td>
                      <td>Sends HTTP GET request</td>
                    </tr>
                    <tr>
                      <td><code>$.post()</code></td>
                      <td>Sends HTTP POST request</td>
                    </tr>
                    <tr>
                      <td><code>$.ajax()</code></td>
                      <td>Full customizable AJAX call</td>
                    </tr>
                    <tr>
                      <td><code>load()</code></td>
                      <td>Load content from server into an element</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. $.get() Example:</h3>
                <pre><code>{`$.get("data.txt", function(response){
    $("#result").html(response);
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. $.post() Example:</h3>
                <pre><code>{`$.post("submit.php", {name: "Mugil", age: 22}, function(response){
    alert("Data saved: " + response);
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. $.ajax() Full Example:</h3>
                <pre><code>{`$.ajax({
    url: "data.json",
    method: "GET",
    success: function(result){
        console.log(result);
    },
    error: function(){
        alert("Error loading data");
    }
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. load() Example:</h3>
                <pre><code>{`$("#content").load("about.html");`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example UI Using AJAX:</h3>
                <pre><code>{`<button id="loadBtn">Load Data</button>
<div id="data"></div>

<script>
$("#loadBtn").click(function(){
    $.get("data.txt", function(res){
        $("#data").html(res);
    });
});
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">AJAX is super useful in modern apps for:</h3>
                <ul>
                  <li>Live search</li>
                  <li>Chat apps</li>
                  <li>Data fetch without reload</li>
                  <li>Form submissions in the background</li>
                </ul>
              </div>
            </section>

            <section id="plugins" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-puzzle"></i> Topic 9: jQuery Plugins</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition:</h3>
                <p>A jQuery plugin is a reusable piece of code written using jQuery that extends its functionality. It allows you to perform complex tasks with minimal code.</p>
                <p>Example: Sliders, image galleries, form validations, carousels, date pickers, etc.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Using a jQuery Plugin (Steps):</h3>
                <ol>
                  <li>Include jQuery library</li>
                  <li>Include the plugin's JS and CSS files</li>
                  <li>Initialize the plugin using its function</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 1: jQuery UI Datepicker Plugin</h3>
                <h4 className="h5 mt-3">Step 1: Include CDN</h4>
                <pre><code>{`<link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>`}</code></pre>
                
                <h4 className="h5 mt-3">Step 2: HTML</h4>
                <pre><code>{`<input type="text" id="dob" placeholder="Select Date">`}</code></pre>
                
                <h4 className="h5 mt-3">Step 3: Initialize Plugin</h4>
                <pre><code>{`$(function(){
    $("#dob").datepicker();
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example 2: Owl Carousel Plugin (Image Slider)</h3>
                <h4 className="h5 mt-3">Step 1: Include Files</h4>
                <pre><code>{`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`}</code></pre>
                
                <h4 className="h5 mt-3">Step 2: HTML Structure</h4>
                <pre><code>{`<div class="owl-carousel">
<div><img src="img1.jpg"></div>
<div><img src="img2.jpg"></div>
</div>`}</code></pre>
                
                <h4 className="h5 mt-3">Step 3: Initialize Carousel</h4>
                <pre><code>{`$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true
    });
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Creating Your Own jQuery Plugin (Basic):</h3>
                <pre><code>{`(function($){
    $.fn.highlight = function(color){
        this.css("background-color", color);
        return this;
    };
})(jQuery);

// Usage:
$("p").highlight("yellow");`}</code></pre>
              </div>
            </section>

            <section id="json" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-filetype-json"></i> Topic 10: jQuery and JSON</h2>
              
              <div className="property-card">
                <h3 className="h4">What is JSON?</h3>
                <ul>
                  <li>JSON (JavaScript Object Notation) is a lightweight format for storing and transferring data, commonly used in APIs and AJAX</li>
                  <li>It is easy to read, write, and parse using jQuery</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Sample JSON Format:</h3>
                <pre><code>{`[
    {"name": "Mugil", "age": 22},
    {"name": "John", "age": 25}
]`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Parsing JSON using jQuery:</h3>
                <pre><code>{`let jsonData = '[{"name":"Mugil","age":22},{"name":"John","age":25}]';
let parsedData = JSON.parse(jsonData);

$.each(parsedData, function(index, obj){
    console.log(obj.name + " is " + obj.age + " years old");
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Populate Table using JSON:</h3>
                <pre><code>{`<table border="1" id="userTable">
<tr><th>Name</th><th>Age</th></tr>
</table>

<script>
let users = [
    { "name": "Mugil", "age": 22 },
    { "name": "John", "age": 25 }
];

$.each(users, function(i, user){
    $("#userTable").append("<tr><td>"+user.name+"</td><td>"+user.age+"</td></tr>");
});
</script>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Populate List using JSON:</h3>
                <pre><code>{`<ul id="userList"></ul>

<script>
$.each(users, function(i, user){
    $("#userList").append("<li>"+user.name+" ("+user.age+")</li>");
});
</script>`}</code></pre>
              </div>
            </section>

            <section id="projects" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-lightbulb"></i> Mini Project Ideas (with jQuery)</h2>
              
              <div className="property-card">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Idea</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Todo List App</strong></td>
                      <td>Add/edit/delete tasks, save to localStorage or JSON</td>
                    </tr>
                    <tr>
                      <td><strong>Contact Form</strong></td>
                      <td>Form with name, email, message + jQuery validation</td>
                    </tr>
                    <tr>
                      <td><strong>Accordion / FAQ</strong></td>
                      <td>Expand/collapse sections with .slideToggle()</td>
                    </tr>
                    <tr>
                      <td><strong>Image Gallery + Lightbox</strong></td>
                      <td>Show thumbnails, enlarge image in modal</td>
                    </tr>
                    <tr>
                      <td><strong>Live Search</strong></td>
                      <td>Filter list/table with keyup + AJAX/JSON support</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Mini Project: To-Do List App using jQuery</h3>
                <h4 className="h5 mt-3">Features:</h4>
                <ul>
                  <li>Add a new task</li>
                  <li>Mark task as completed</li>
                  <li>Delete individual task</li>
                  <li>Clear all tasks</li>
                </ul>
                
                <h4 className="h5 mt-3">Step 1: Basic HTML Structure</h4>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
<title>jQuery To-Do List</title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<style>
body { font-family: Arial; margin: 30px; }
#taskList li.done { text-decoration: line-through; color: gray; }
button { margin-left: 10px; }
</style>
</head>
<body>
<h2>My To-Do List</h2>
<input type="text" id="taskInput" placeholder="Enter task">
<button id="addBtn">Add</button>
<button id="clearAll">Clear All</button>
<ul id="taskList"></ul>
</body>
</html>`}</code></pre>
                
                <h4 className="h5 mt-3">Step 2: jQuery Logic</h4>
                <pre><code>{`<script>
$(document).ready(function(){
    // Add Task
    $("#addBtn").click(function(){
        let task = $("#taskInput").val().trim();
        if(task !== ""){
            $("#taskList").append("<li>"+task+" <button class='doneBtn'>Done</button> <button class='delBtn'>Delete</button></li>");
            $("#taskInput").val(""); // Clear input
        }
    });

    // Mark as Done
    $(document).on("click", ".doneBtn", function(){
        $(this).parent().toggleClass("done");
    });

    // Delete Task
    $(document).on("click", ".delBtn", function(){
        $(this).parent().remove();
    });

    // Clear All
    $("#clearAll").click(function(){
        $("#taskList").empty();
    });
});
</script>`}</code></pre>
                
                <h4 className="h5 mt-3">How it Works:</h4>
                <ul>
                  <li><code>$("#addBtn").click()</code> → Adds a new list item (<code>&lt;li&gt;</code>) with task and buttons</li>
                  <li><code>toggleClass("done")</code> → Adds/removes line-through on clicking "Done"</li>
                  <li><code>remove()</code> → Deletes the specific task</li>
                  <li><code>empty()</code> → Clears all tasks in the list</li>
                </ul>
                
                <h4 className="h5 mt-3">Output Preview:</h4>
                <ul>
                  <li>Type a task, click "Add" → It appears in the list</li>
                  <li>Click "Done" → Task is strikethrough</li>
                  <li>Click "Delete" → Task removed</li>
                  <li>Click "Clear All" → All tasks removed</li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>jQuery Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default JqueryNotes;