import React from 'react';

function MatplotlibNotes() {
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
          .example-img {
            max-width: 100%;
            height: auto;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 5px;
            background: white;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-graph-up"></i> Matplotlib Notes</h1>
          <p className="lead">Your Comprehensive Guide to Data Visualization in Python</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#installation"><i className="bi bi-download"></i> Installation</a>
              <a className="nav-link" href="#basic-plotting"><i className="bi bi-graph-up"></i> Basic Plotting</a>
              <a className="nav-link" href="#line-plots"><i className="bi bi-bar-chart-line"></i> Line Plots</a>
              <a className="nav-link" href="#bar-charts"><i className="bi bi-bar-chart"></i> Bar Charts</a>
              <a className="nav-link" href="#pie-charts"><i className="bi bi-pie-chart"></i> Pie Charts</a>
              <a className="nav-link" href="#histograms"><i className="bi bi-bar-chart-steps"></i> Histograms</a>
              <a className="nav-link" href="#scatter-plots"><i className="bi bi-scatter"></i> Scatter Plots</a>
              <a className="nav-link" href="#multiple-plots"><i className="bi bi-layers"></i> Multiple Plots</a>
              <a className="nav-link" href="#subplots"><i className="bi bi-grid-3x3"></i> Subplots</a>
              <a className="nav-link" href="#customization"><i className="bi bi-palette"></i> Customization</a>
              <a className="nav-link" href="#file-io"><i className="bi bi-file-earmark"></i> File I/O</a>
              <a className="nav-link" href="#dates"><i className="bi bi-calendar"></i> Working with Dates</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Matplotlib</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-question-circle"></i> What is Matplotlib?</h3>
                <ul>
                  <li>Matplotlib is a <strong>data visualization library</strong> in Python</li>
                  <li>It's widely used to create <strong>static, animated, and interactive plots</strong></li>
                  <li>Works well with <strong>NumPy</strong> and <strong>Pandas</strong> data</li>
                </ul>
              </div>
            </section>

            <section id="installation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-download"></i> Installation and Setup</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-terminal"></i> Installation</h3>
                <pre className="mb-3"><code>pip install matplotlib</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-journal-code"></i> Importing in Jupyter Notebook</h3>
                <pre className="mb-3"><code>{`import matplotlib.pyplot as plt
%matplotlib inline`}</code></pre>
                <ul>
                  <li><code>pyplot</code> is a module in matplotlib used for plotting</li>
                  <li><code>%matplotlib inline</code> is used in Jupyter Notebook to display plots within the notebook</li>
                </ul>
              </div>
            </section>

            <section id="basic-plotting" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-graph-up"></i> Basic Plotting in Matplotlib</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-check"></i> Common Functions</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Function</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>plot()</code></td>
                      <td>To draw line plot</td>
                    </tr>
                    <tr>
                      <td><code>xlabel()</code>, <code>ylabel()</code></td>
                      <td>To set axis labels</td>
                    </tr>
                    <tr>
                      <td><code>title()</code></td>
                      <td>To set the title</td>
                    </tr>
                    <tr>
                      <td><code>show()</code></td>
                      <td>To display the plot</td>
                    </tr>
                    <tr>
                      <td><code>grid()</code></td>
                      <td>To add grid lines</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="line-plots" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bar-chart-line"></i> Line Plots</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Simple Line Plot Example</h3>
                <pre className="mb-3"><code>{`import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

plt.plot(x, y)    # Plot x and y
plt.xlabel("X-Axis")    # Label for X
plt.ylabel("Y-Axis")    # Label for Y
plt.title("Simple Line Plot") # Title
plt.show()    # Display the plot`}</code></pre>
                <p><strong>Output:</strong> A straight line graph connecting the points (1,2), (2,4), ..., (5,10)</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-sliders"></i> Customized Line Plot</h3>
                <pre className="mb-3"><code>{`import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [10, 20, 25, 30, 40]

plt.plot(x, y, color='green', linestyle='--', linewidth=2, marker='o', markersize=8)
plt.xlabel("X Values")
plt.ylabel("Y Values")
plt.title("Customized Line Plot")
plt.grid(True)
plt.show()`}</code></pre>
                <p><strong>Parameters:</strong></p>
                <ul>
                  <li><code>color</code>: Line color ('green')</li>
                  <li><code>linestyle</code>: Line style ('--' for dashed)</li>
                  <li><code>linewidth</code>: Thickness of the line (2)</li>
                  <li><code>marker</code>: Marker style at data points ('o' for circles)</li>
                  <li><code>markersize</code>: Size of markers (8)</li>
                </ul>
              </div>
            </section>

            <section id="bar-charts" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bar-chart"></i> Bar Charts</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-info-circle"></i> Purpose</h3>
                <ul>
                  <li>Bar charts are used to compare quantities across different categories</li>
                  <li>Best for categorical data</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Example: Vertical Bar Chart</h3>
                <pre className="mb-3"><code>{`import matplotlib.pyplot as plt

categories = ['Python', 'Java', 'C++', 'JavaScript']
values = [80, 60, 70, 90]

plt.bar(categories, values, color='skyblue')
plt.xlabel("Programming Languages")
plt.ylabel("Popularity")
plt.title("Language Popularity - Bar Chart")
plt.grid(axis='y') # Show only horizontal grid lines
plt.show()`}</code></pre>
                <p><strong>Explanation:</strong></p>
                <ul>
                  <li>Each bar represents a programming language</li>
                  <li>The height shows its popularity</li>
                  <li><code>color='skyblue'</code> gives soft blue color to bars</li>
                  <li><code>grid(axis='y')</code> adds lines only on Y-axis</li>
                </ul>
              </div>
            </section>

            <section id="pie-charts" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-pie-chart"></i> Pie Charts</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-info-circle"></i> Purpose</h3>
                <ul>
                  <li>Pie charts show proportions of a whole</li>
                  <li>Each slice represents a percentage of the total</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Example: Simple Pie Chart</h3>
                <pre className="mb-3"><code>{`import matplotlib.pyplot as plt

# Data and labels
sizes = [40, 30, 20, 10]
labels = ['Python', 'Java', 'C++', 'Others']

# Create pie chart
plt.pie(sizes, labels=labels, autopct='%.1f%%', startangle=90, shadow=True)
plt.title("Programming Language Market Share")
plt.axis('equal') # Equal aspect ratio to make circle
plt.show()`}</code></pre>
                <p><strong>Parameters:</strong></p>
                <ul>
                  <li><code>autopct='%.1f%%'</code>: Shows percentage values on slices</li>
                  <li><code>startangle=90</code>: Starts the chart from the top (90°)</li>
                  <li><code>shadow=True</code>: Adds shadow for 3D effect</li>
                  <li><code>axis('equal')</code>: Ensures pie is a perfect circle</li>
                </ul>
              </div>
            </section>

            <section id="histograms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bar-chart-steps"></i> Histograms</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-info-circle"></i> Purpose</h3>
                <ul>
                  <li>Show the distribution of a dataset</li>
                  <li>Splits data into intervals (bins) and counts values in each bin</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Example: Simple Histogram</h3>
                <pre className="mb-3"><code>{`import matplotlib.pyplot as plt

# Sample data
ages = [18, 22, 20, 24, 26, 28, 24, 22, 19, 25, 30, 32, 35, 30, 28, 27, 22, 24]

# Create histogram
plt.hist(ages, bins=5, color='orange', edgecolor='black')
plt.xlabel("Age Group")
plt.ylabel("Number of People")
plt.title("Age Distribution Histogram")
plt.grid(axis='y')
plt.show()`}</code></pre>
                <p><strong>Parameters:</strong></p>
                <ul>
                  <li><code>bins=5</code>: Data split into 5 intervals</li>
                  <li><code>color='orange'</code>: Fill color of bars</li>
                  <li><code>edgecolor='black'</code>: Border color of bars</li>
                  <li><code>grid(axis='y')</code>: Adds horizontal grid lines</li>
                </ul>
              </div>
            </section>

            <section id="scatter-plots" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-scatter"></i> Scatter Plots</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-info-circle"></i> Purpose</h3>
                <ul>
                  <li>Visualize relationship or correlation between two numerical variables</li>
                  <li>Each point represents a pair of values</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Example: Simple Scatter Plot</h3>
                <pre className="mb-3"><code>{`import matplotlib.pyplot as plt

# Sample data
x = [5, 7, 8, 7, 2, 17, 2, 9, 4, 11]
y = [99, 86, 87, 88, 100, 86, 103, 87, 94, 78]

# Create scatter plot
plt.scatter(x, y, color='purple', marker='o', s=100)
plt.xlabel("Study Hours")
plt.ylabel("Scores")
plt.title("Study Hours vs Scores")
plt.grid(True)
plt.show()`}</code></pre>
                <p><strong>Parameters:</strong></p>
                <ul>
                  <li><code>color='purple'</code>: Point color</li>
                  <li><code>marker='o'</code>: Shape of points (circle)</li>
                  <li><code>s=100</code>: Size of markers</li>
                </ul>
                <p><strong>Interpretation:</strong></p>
                <ul>
                  <li>Each dot represents one student's study hours vs their score</li>
                  <li>If dots trend upward → positive correlation</li>
                  <li>Great for identifying trends, clusters, or outliers</li>
                </ul>
              </div>
            </section>

            <section id="multiple-plots" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layers"></i> Multiple Plots and Legends</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-info-circle"></i> Purpose</h3>
                <ul>
                  <li>Compare different datasets in the same graph</li>
                  <li>Useful for data comparison and trend analysis</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Example: Plotting Two Lines</h3>
                <pre className="mb-3"><code>{`import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y1 = [10, 20, 30, 40, 50]
y2 = [5, 15, 25, 35, 45]

plt.plot(x, y1, label='Line 1', color='blue', marker='o')
plt.plot(x, y2, label='Line 2', color='red', linestyle='-', marker='x')

plt.xlabel("X-Axis")
plt.ylabel("Y-Axis")
plt.title("Multiple Lines with Legend")
plt.legend() # Shows labels
plt.grid(True)
plt.show()`}</code></pre>
                <p><strong>Key Features:</strong></p>
                <ul>
                  <li><code>label='Line 1'</code>: Assigns names to each line</li>
                  <li><code>legend()</code>: Displays labels in a box inside the plot</li>
                  <li>Position legend with <code>loc</code> parameter: <code>plt.legend(loc='upper left')</code></li>
                </ul>
              </div>
            </section>

            <section id="subplots" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-grid-3x3"></i> Subplots in Matplotlib</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-info-circle"></i> Purpose</h3>
                <ul>
                  <li>Create multiple plots (charts) in a single figure window</li>
                  <li>Compare multiple visualizations side by side</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Example: 1 Row, 2 Columns</h3>
                <pre className="mb-3"><code>{`import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y1 = [10, 20, 25, 30]
y2 = [30, 25, 20, 10]

# Create 1st subplot
plt.subplot(1, 2, 1)
plt.plot(x, y1, color="blue")
plt.title("Increasing")

# Create 2nd subplot
plt.subplot(1, 2, 2)
plt.plot(x, y2, color="red")
plt.title("Decreasing")

plt.suptitle("Subplots Example")
plt.tight_layout()
plt.show()`}</code></pre>
                <p><strong>Explanation:</strong></p>
                <ul>
                  <li><code>subplot(1, 2, 1)</code>: 1 row, 2 columns → first plot</li>
                  <li><code>subplot(1, 2, 2)</code>: second plot</li>
                  <li><code>suptitle()</code>: Title for the entire figure</li>
                  <li><code>tight_layout()</code>: Adjusts spacing automatically</li>
                </ul>
              </div>
            </section>

            <section id="customization" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-palette"></i> Figure Customization</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-aspect-ratio"></i> Figure Size and Saving Plots</h3>
                <pre className="mb-3"><code>{`import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# Set figure size
plt.figure(figsize=(8, 4))

# Plot the data
plt.plot(x, y, color='green')
plt.title("Resizable Plot Example")

# Save the figure
plt.savefig("my_plot.png") # Saves to current folder

plt.show()`}</code></pre>
                <p><strong>Key Features:</strong></p>
                <ul>
                  <li><code>figsize=(8, 4)</code>: 8 inches wide and 4 inches tall</li>
                  <li><code>savefig()</code>: Saves plot as image (PNG, JPG, PDF, SVG)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-textarea-t"></i> Titles, Labels, and Grid Customization</h3>
                <pre className="mb-3"><code>{`import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [10, 20, 25, 30, 35]

plt.plot(x, y, color='blue', marker='o')

# Add title and labels
plt.title("Sales Over Time")
plt.xlabel("Month")
plt.ylabel("Sales")

# Add grid
plt.grid(True, linestyle='--', linewidth=0.5, color='gray')

plt.show()`}</code></pre>
                <p><strong>Functions:</strong></p>
                <ul>
                  <li><code>title()</code>: Adds a heading to the chart</li>
                  <li><code>xlabel()</code>/<code>ylabel()</code>: Describes each axis</li>
                  <li><code>grid(True)</code>: Adds customizable gridlines</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-sliders"></i> Line Style, Color, and Marker Customization</h3>
                <pre className="mb-3"><code>{`import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [10, 20, 25, 30, 35]

plt.plot(x, y, color='green', linestyle='--', marker='o', linewidth=2, markersize=8)
plt.title("Customized Line Plot")
plt.xlabel("X Axis")
plt.ylabel("Y Axis")
plt.grid(True)
plt.show()`}</code></pre>
                <p><strong>Key Parameters:</strong></p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Description</th>
                      <th>Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>color</code></td>
                      <td>Line color</td>
                      <td>'red', 'blue', '#00FF00'</td>
                    </tr>
                    <tr>
                      <td><code>linestyle</code></td>
                      <td>Style of line</td>
                      <td>'-' (solid), '--' (dashed), ':' (dotted)</td>
                    </tr>
                    <tr>
                      <td><code>marker</code></td>
                      <td>Shape of data points</td>
                      <td>'o' (circle), 's' (square), '^' (triangle)</td>
                    </tr>
                    <tr>
                      <td><code>linewidth</code></td>
                      <td>Thickness of the line</td>
                      <td>2, 3</td>
                    </tr>
                    <tr>
                      <td><code>markersize</code></td>
                      <td>Size of the marker</td>
                      <td>5, 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="file-io" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark"></i> Reading/Writing Files with Pandas</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-info-circle"></i> Overview</h3>
                <ul>
                  <li>Matplotlib itself doesn't read files directly</li>
                  <li>We use <strong>pandas</strong> to read files and then visualize with matplotlib</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-table"></i> Common Pandas File I/O</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Function</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Read CSV</td>
                      <td><code>pd.read_csv('file.csv')</code></td>
                    </tr>
                    <tr>
                      <td>Read Excel</td>
                      <td><code>pd.read_excel('file.xlsx')</code></td>
                    </tr>
                    <tr>
                      <td>Write CSV</td>
                      <td><code>df.to_csv('file.csv')</code></td>
                    </tr>
                    <tr>
                      <td>Write Excel</td>
                      <td><code>df.to_excel('file.xlsx')</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Example: Read CSV and Plot</h3>
                <pre className="mb-3"><code>{`import pandas as pd
import matplotlib.pyplot as plt

# Read CSV file
df = pd.read_csv('sales.csv') # CSV must have columns like 'Month', 'Sales'

# Plot the data
plt.plot(df['Month'], df['Sales'], marker='o', color='blue')
plt.title("Monthly Sales")
plt.xlabel("Month")
plt.ylabel("Sales")
plt.grid(True)
plt.show()`}</code></pre>
                <p><strong>Explanation:</strong></p>
                <ul>
                  <li><code>pd.read_csv()</code> loads your data file</li>
                  <li>Access column data with <code>df['ColumnName']</code></li>
                  <li>Pass directly to matplotlib for plotting</li>
                </ul>
              </div>
            </section>

            <section id="dates" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calendar"></i> Working with Dates</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-info-circle"></i> Purpose</h3>
                <ul>
                  <li>Visualize time-based data (monthly/daily trends)</li>
                  <li>Proper date formatting on the x-axis</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Example: Date-Based Line Plot</h3>
                <pre className="mb-3"><code>{`import pandas as pd
import matplotlib.pyplot as plt

# Sample data with date and sales
data = {
    'Date': ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01'],
    'Sales': [100, 150, 130, 170]
}

# Create DataFrame
df = pd.DataFrame(data)

# Convert date strings to datetime objects
df['Date'] = pd.to_datetime(df['Date'])

# Plot the data
plt.plot(df['Date'], df['Sales'], marker='o', color='green')
plt.title("Monthly Sales Trend")
plt.xlabel("Date")
plt.ylabel("Sales")
plt.grid(True)
plt.xticks(rotation=45) # Rotate x-axis labels for clarity
plt.tight_layout()
plt.show()`}</code></pre>
                <p><strong>Key Features:</strong></p>
                <ul>
                  <li><code>pd.to_datetime()</code>: Converts strings to date objects</li>
                  <li>Filter/sort with <code>.dt.year</code>, <code>.dt.month</code></li>
                  <li><code>xticks(rotation=45)</code>: Makes dates readable</li>
                  <li>Perfect for time series visualization</li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Matplotlib Notes &copy; 2025 | Designed for Data Visualization</p>
        </div>
      </footer>
    </div>
  );
}

export default MatplotlibNotes;