import React from 'react';

function PandasNotes() {
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
          th, td {
            border: 1px solid #dee2e6;
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
          <h1 className="display-4 fw-bold"><i className="bi bi-file-earmark-spreadsheet"></i> Pandas Notes</h1>
          <p className="lead">Your Comprehensive Guide to Data Manipulation with Pandas</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#installation"><i className="bi bi-download"></i> Installation</a>
              <a className="nav-link" href="#data-structures"><i className="bi bi-table"></i> Data Structures</a>
              <a className="nav-link" href="#operations"><i className="bi bi-gear"></i> DataFrame Operations</a>
              <a className="nav-link" href="#indexing"><i className="bi bi-filter-square"></i> Indexing & Slicing</a>
              <a className="nav-link" href="#modifying"><i className="bi bi-pencil-square"></i> Modifying Data</a>
              <a className="nav-link" href="#missing-data"><i className="bi bi-question-square"></i> Missing Data</a>
              <a className="nav-link" href="#groupby"><i className="bi bi-collection"></i> GroupBy</a>
              <a className="nav-link" href="#sorting"><i className="bi bi-sort-alpha-down"></i> Sorting</a>
              <a className="nav-link" href="#merging"><i className="bi bi-merge"></i> Merging Data</a>
              <a className="nav-link" href="#io"><i className="bi bi-file-earmark"></i> File I/O</a>
              <a className="nav-link" href="#dates"><i className="bi bi-calendar"></i> Working with Dates</a>
              <a className="nav-link" href="#apply"><i className="bi bi-lightning"></i> Apply Functions</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Pandas</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <p><strong>Pandas</strong> is an open-source Python library used for <strong>data manipulation and analysis</strong>. It provides powerful data structures like <strong>Series</strong> and <strong>DataFrame</strong> to handle structured data easily.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Use Pandas?</h3>
                <ul>
                  <li>Easy handling of <strong>missing data</strong></li>
                  <li>Powerful tools for <strong>data filtering, aggregation, and transformation</strong></li>
                  <li>Easy to <strong>read/write</strong> data from different file formats (CSV, Excel, SQL, etc.)</li>
                  <li>Built on top of <strong>NumPy</strong> – efficient and fast</li>
                  <li>Seamless integration with <strong>matplotlib, seaborn, and scikit-learn</strong></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Features of Pandas</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fast and Efficient</td>
                      <td>Optimized for performance using NumPy</td>
                    </tr>
                    <tr>
                      <td>Data Alignment</td>
                      <td>Automatically aligns data from different sources</td>
                    </tr>
                    <tr>
                      <td>Missing Data Handling</td>
                      <td>Built-in support for detecting and filling missing values</td>
                    </tr>
                    <tr>
                      <td>Reshaping</td>
                      <td>Supports pivoting, stacking/unstacking</td>
                    </tr>
                    <tr>
                      <td>Flexible Indexing</td>
                      <td>Label-based and position-based indexing with .loc[] and .iloc[]</td>
                    </tr>
                    <tr>
                      <td>Merging/Joining</td>
                      <td>Combine data from multiple DataFrames</td>
                    </tr>
                    <tr>
                      <td>Time Series Support</td>
                      <td>Built-in support for time series analysis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-World Use Cases</h3>
                <ul>
                  <li>Analyzing sales data</li>
                  <li>Cleaning messy datasets</li>
                  <li>Working with Excel sheets</li>
                  <li>Data preprocessing for machine learning</li>
                </ul>
              </div>
            </section>

            <section id="installation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-download"></i> Installation & Import of Pandas</h2>
              
              <div className="property-card">
                <h3 className="h4">Installing Pandas</h3>
                <p>You can install pandas using pip (Python package manager):</p>
                <pre><code>pip install pandas</code></pre>
                <p><strong>Note:</strong> Pandas usually comes pre-installed with Anaconda distribution.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Importing Pandas</h3>
                <p>To use pandas in your Python code, import it like this:</p>
                <pre><code>import pandas as pd</code></pre>
                <p><code>pd</code> is an alias. It's a short form used by developers for convenience.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example</h3>
                <pre><code>{`import pandas as pd

# Create a simple Series
data = pd.Series([10, 20, 30, 40])
print(data)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`0    10
1    20
2    30
3    40
dtype: int64`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Check Version</h3>
                <p>You can check which version of pandas is installed using:</p>
                <pre><code>print(pd.__version__)</code></pre>
              </div>
            </section>

            <section id="data-structures" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-table"></i> Core Data Structures in Pandas</h2>
              
              <div className="property-card">
                <h3 className="h4">Pandas has two main data structures:</h3>
                <ol>
                  <li><strong>Series</strong> – One-dimensional labeled array</li>
                  <li><strong>DataFrame</strong> – Two-dimensional table (like Excel)</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Series</h3>
                <p>A <strong>Series</strong> is a one-dimensional array-like object that can hold any data type (int, float, string, etc.). It has <strong>labels (index)</strong> on the left and <strong>values</strong> on the right.</p>
                
                <h4 className="h5 mt-3">Creating a Series from a list:</h4>
                <pre><code>{`import pandas as pd

# Creating Series
data = [10, 20, 30, 40]
s = pd.Series(data)
print(s)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`0    10
1    20
2    30
3    40
dtype: int64`}</code></pre>
                
                <h4 className="h5 mt-3">Creating Series with custom index:</h4>
                <pre><code>{`s2 = pd.Series([100, 200, 300], index=['a', 'b', 'c'])
print(s2)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`a    100
b    200
c    300
dtype: int64`}</code></pre>
                
                <h4 className="h5 mt-3">Creating Series from dictionary:</h4>
                <pre><code>{`marks = {'Math': 90, 'Science': 85, 'English': 88}
s3 = pd.Series(marks)
print(s3)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`Math       90
Science    85
English    88
dtype: int64`}</code></pre>
                
                <h4 className="h5 mt-3">Accessing elements:</h4>
                <pre><code>{`print(s2['b']) # Output: 200
print(s[2]) # Output: 30`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. DataFrame</h3>
                <p>A <strong>DataFrame</strong> is a 2D table with rows and columns, similar to an Excel spreadsheet.</p>
                
                <h4 className="h5 mt-3">Creating DataFrame from dictionary:</h4>
                <pre><code>{`data = {
    'Name': ['Arun', 'Bala', 'Chitra'],
    'Age': [25, 30, 22],
    'City': ['Chennai', 'Madurai', 'Salem']
}

df = pd.DataFrame(data)
print(df)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`    Name  Age      City
0    Arun   25   Chennai
1    Bala   30   Madurai
2  Chitra   22     Salem`}</code></pre>
                
                <h4 className="h5 mt-3">Creating DataFrame from list of lists:</h4>
                <pre><code>{`data = [
    ['Dinesh', 28, 'Coimbatore'],
    ['Elan', 35, 'Tirunelveli']
]

df2 = pd.DataFrame(data, columns=['Name', 'Age', 'City'])
print(df2)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`     Name  Age         City
0  Dinesh   28  Coimbatore
1    Elan   35  Tirunelveli`}</code></pre>
                
                <h4 className="h5 mt-3">Accessing rows and columns:</h4>
                <pre><code>{`print(df['Name'])    # Column
print(df.loc[0])    # Row by label
print(df.iloc[1])    # Row by index`}</code></pre>
              </div>
            </section>

            <section id="operations" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> DataFrame Operations</h2>
              <p>These functions help us understand the structure and summarize the dataset.</p>
              
              <div className="property-card">
                <h3 className="h4">df.head()</h3>
                <p>Returns the first 5 rows of the DataFrame by default.</p>
                <pre><code>{`import pandas as pd

data = {
    'Name': ['Arun', 'Bala', 'Chitra', 'Dinesh', 'Elan', 'Farook'],
    'Age': [25, 30, 22, 28, 35, 27],
    'City': ['Chennai', 'Madurai', 'Salem', 'Coimbatore', 'Tirunelveli', 'Trichy']
}

df = pd.DataFrame(data)
print(df.head())`}</code></pre>
                <p>Output:</p>
                <pre><code>{`     Name  Age         City
0    Arun   25     Chennai
1    Bala   30     Madurai
2  Chitra   22       Salem
3  Dinesh   28  Coimbatore
4    Elan   35  Tirunelveli`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">df.tail()</h3>
                <p>Returns the <strong>last 5 rows</strong> by default.</p>
                <pre><code>{`print(df.tail(3))`}</code></pre>
                <p>Output:</p>
                <pre><code>{`     Name  Age         City
3  Dinesh   28  Coimbatore
4    Elan   35  Tirunelveli
5  Farook   27      Trichy`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">df.info()</h3>
                <p>Gives <strong>summary info</strong> about DataFrame – column names, non-null counts, data types.</p>
                <pre><code>{`print(df.info())`}</code></pre>
                <p>Output:</p>
                <pre><code>{`<class 'pandas.core.frame.DataFrame'>
RangeIndex: 6 entries, 0 to 5
Data columns (total 3 columns):
 #   Column  Non-Null Count  Dtype 
---  ------  --------------  ----- 
 0   Name    6 non-null      object
 1   Age     6 non-null      int64 
 2   City    6 non-null      object
dtypes: int64(1), object(2)
memory usage: 272.0+ bytes`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">df.describe()</h3>
                <p>Gives <strong>statistical summary</strong> for numeric columns.</p>
                <pre><code>{`print(df.describe())`}</code></pre>
                <p>Output:</p>
                <pre><code>{`             Age
count   6.000000
mean   27.833333
std     4.268749
min    22.000000
25%    25.000000
50%    27.500000
75%    30.000000
max    35.000000`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Other useful attributes:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>df.shape</td>
                      <td>(rows, columns)</td>
                    </tr>
                    <tr>
                      <td>df.columns</td>
                      <td>List of column names</td>
                    </tr>
                    <tr>
                      <td>df.dtypes</td>
                      <td>Data type of each column</td>
                    </tr>
                    <tr>
                      <td>df.index</td>
                      <td>Index range of the DataFrame</td>
                    </tr>
                  </tbody>
                </table>
                <pre><code>{`print(df.shape) # (6, 3)
print(df.columns) # Index(['Name', 'Age', 'City'], dtype='object')
print(df.dtypes) # Name - object, Age - int64, City - object`}</code></pre>
              </div>
            </section>

            <section id="indexing" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-filter-square"></i> Indexing and Slicing</h2>
              <p>Pandas gives two powerful ways to <strong>access specific rows and columns:</strong></p>
              
              <table>
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Based on</th>
                    <th>Use for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>.loc[]</td>
                    <td>Label-based</td>
                    <td>Row/column names</td>
                  </tr>
                  <tr>
                    <td>.iloc[]</td>
                    <td>Position-based</td>
                    <td>Row/column index numbers</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="property-card">
                <h3 className="h4">.loc[] — Label Based Indexing</h3>
                <pre><code>{`import pandas as pd

data = {
    'Name': ['Arun', 'Bala', 'Chitra'],
    'Age': [25, 30, 22],
    'City': ['Chennai', 'Madurai', 'Salem']
}

df = pd.DataFrame(data, index=['a', 'b', 'c'])
print(df)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`    Name  Age     City
a   Arun   25  Chennai
b   Bala   30  Madurai
c  Chitra   22    Salem`}</code></pre>
                
                <h4 className="h5 mt-3">Get a row by label:</h4>
                <pre><code>{`print(df.loc['a'])`}</code></pre>
                <p>Output:</p>
                <pre><code>{`Name      Arun
Age        25
City    Chennai
Name: a, dtype: object`}</code></pre>
                
                <h4 className="h5 mt-3">Get multiple rows by label:</h4>
                <pre><code>{`print(df.loc[['a', 'c']])`}</code></pre>
                
                <h4 className="h5 mt-3">Get specific row and column:</h4>
                <pre><code>{`print(df.loc['b', 'City']) # Output: Madurai`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">.iloc[] — Position Based Indexing</h3>
                <h4 className="h5">Get row by index:</h4>
                <pre><code>{`print(df.iloc[0]) # First row`}</code></pre>
                
                <h4 className="h5 mt-3">Get specific row and column:</h4>
                <pre><code>{`print(df.iloc[1, 2]) # Second row, third column → Madurai`}</code></pre>
                
                <h4 className="h5 mt-3">Get range of rows:</h4>
                <pre><code>{`print(df.iloc[0:2]) # Rows 0 and 1`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Conditional Filtering</h3>
                <pre><code>{`# Get all people with age > 24
print(df[df['Age'] > 24])`}</code></pre>
                <p>Output:</p>
                <pre><code>{`   Name  Age     City
a  Arun   25  Chennai
b  Bala   30  Madurai`}</code></pre>
              </div>
            </section>

            <section id="modifying" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-pencil-square"></i> Modifying Data in DataFrame</h2>
              <p>This topic covers how to:</p>
              <ul>
                <li>Add new columns</li>
                <li>Modify existing columns</li>
                <li>Rename columns</li>
                <li>Drop (remove) rows/columns</li>
              </ul>
              
              <div className="property-card">
                <h3 className="h4">1. Adding a New Column</h3>
                <pre><code>{`import pandas as pd

data = {
    'Name': ['Arun', 'Bala', 'Chitra'],
    'Age': [25, 30, 22]
}

df = pd.DataFrame(data)

# Add new column "City"
df['City'] = ['Chennai', 'Madurai', 'Salem']
print(df)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`     Name  Age      City
0    Arun   25   Chennai
1    Bala   30   Madurai
2  Chitra   22     Salem`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Modifying Existing Column</h3>
                <pre><code>{`# Increase all ages by 1
df['Age'] = df['Age'] + 1
print(df)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Renaming Columns</h3>
                <pre><code>{`df.rename(columns={'Name': 'Full Name', 'Age': 'Years'}, inplace=True)
print(df)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`  Full Name  Years      City
0      Arun     26   Chennai
1      Bala     31   Madurai
2    Chitra     23     Salem`}</code></pre>
                <p><strong>Note:</strong> Use <code>inplace=True</code> to apply the change directly to the DataFrame.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Dropping Columns</h3>
                <pre><code>{`df.drop('City', axis=1, inplace=True) # axis=1 means column
print(df)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Dropping Rows</h3>
                <pre><code>{`df.drop(1, axis=0, inplace=True) # axis=0 means row, here dropping index 1
print(df)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Reassign or Reset Index</h3>
                <pre><code>{`df.reset_index(drop=True, inplace=True)
print(df)`}</code></pre>
                <p><code>drop=True</code> will avoid old index being added as a new column.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">7. Change Data Type</h3>
                <pre><code>{`df['Years'] = df['Years'].astype(float)
print(df.dtypes)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`Full Name     object
Years        float64
dtype: object`}</code></pre>
              </div>
            </section>

            <section id="missing-data" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-question-square"></i> Handling Missing Data in Pandas</h2>
              <p>In real-world datasets, missing data is common. Pandas provides multiple ways to detect, remove, or fill missing values.</p>
              
              <div className="property-card">
                <h3 className="h4">1. Detecting Missing Data</h3>
                <pre><code>{`import pandas as pd
import numpy as np

data = {
    'Name': ['Arun', 'Bala', 'Chitra', 'Dinesh'],
    'Age': [25, np.nan, 22, 28],
    'City': ['Chennai', 'Madurai', np.nan, 'Trichy']
}

df = pd.DataFrame(data)
print(df)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`     Name   Age     City
0    Arun  25.0  Chennai
1    Bala   NaN  Madurai
2  Chitra  22.0      NaN
3  Dinesh  28.0   Trichy`}</code></pre>
                
                <h4 className="h5 mt-3">isnull() – Find missing values:</h4>
                <pre><code>{`print(df.isnull())`}</code></pre>
                <p>Output:</p>
                <pre><code>{`    Name    Age   City
0  False  False  False
1  False   True  False
2  False  False   True
3  False  False  False`}</code></pre>
                
                <h4 className="h5 mt-3">sum() with isnull() – Count missing values:</h4>
                <pre><code>{`print(df.isnull().sum())`}</code></pre>
                <p>Output:</p>
                <pre><code>{`Name    0
Age     1
City    1
dtype: int64`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Dropping Missing Data</h3>
                <h4 className="h5">Drop rows with any NaN values:</h4>
                <pre><code>{`df1 = df.dropna()
print(df1)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`     Name   Age     City
0    Arun  25.0  Chennai
3  Dinesh  28.0   Trichy`}</code></pre>
                
                <h4 className="h5 mt-3">Drop columns with any NaN:</h4>
                <pre><code>{`df2 = df.dropna(axis=1)
print(df2)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Filling Missing Data</h3>
                <h4 className="h5">Fill with a specific value:</h4>
                <pre><code>{`df['Age'] = df['Age'].fillna(0)
df['City'] = df['City'].fillna('Unknown')
print(df)`}</code></pre>
                
                <h4 className="h5 mt-3">Fill with mean/median/mode:</h4>
                <pre><code>{`df['Age'] = df['Age'].fillna(df['Age'].mean())`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Replace Specific Values</h3>
                <pre><code>{`df.replace('Unknown', 'Not Provided', inplace=True)`}</code></pre>
              </div>
            </section>

            <section id="groupby" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-collection"></i> GroupBy and Aggregation</h2>
              
              <div className="property-card">
                <h3 className="h4">What is groupby()</h3>
                <p><code>groupby()</code> is used to group rows based on column values, and then apply aggregate functions like sum, mean, count, etc.</p>
                
                <h4 className="h5 mt-3">Example Dataset:</h4>
                <pre><code>{`import pandas as pd

data = {
    'Department': ['HR', 'IT', 'HR', 'IT', 'Finance', 'Finance'],
    'Name': ['Arun', 'Bala', 'Chitra', 'Dinesh', 'Elan', 'Farook'],
    'Salary': [30000, 50000, 35000, 52000, 40000, 42000]
}

df = pd.DataFrame(data)
print(df)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`  Department    Name  Salary
0         HR    Arun   30000
1         IT    Bala   50000
2         HR  Chitra   35000
3         IT  Dinesh   52000
4   Finance    Elan   40000
5   Finance  Farook   42000`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Group by a single column and aggregate:</h3>
                <pre><code>{`grouped = df.groupby('Department')['Salary'].mean()
print(grouped)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`Department
Finance    41000.0
HR        32500.0
IT        51000.0
Name: Salary, dtype: float64`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Use multiple aggregate functions:</h3>
                <pre><code>{`result = df.groupby('Department')['Salary'].agg(['mean', 'sum', 'count'])
print(result)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`           mean    sum  count
Department                      
Finance    41000  82000      2
HR        32500  65000      2
IT        51000 102000      2`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Group by multiple columns:</h3>
                <pre><code>{`df['Bonus'] = [3000, 4000, 2000, 5000, 2500, 3000]
multi_group = df.groupby(['Department', 'Name'])[['Salary', 'Bonus']].sum()
print(multi_group)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Reset index after groupby (optional):</h3>
                <pre><code>{`result = df.groupby('Department')["Salary"].mean().reset_index()
print(result)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Aggregation Functions:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Function</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>mean()</td>
                      <td>Average value</td>
                    </tr>
                    <tr>
                      <td>sum()</td>
                      <td>Total value</td>
                    </tr>
                    <tr>
                      <td>count()</td>
                      <td>Number of entries</td>
                    </tr>
                    <tr>
                      <td>min()</td>
                      <td>Minimum value</td>
                    </tr>
                    <tr>
                      <td>max()</td>
                      <td>Maximum value</td>
                    </tr>
                    <tr>
                      <td>agg()</td>
                      <td>Apply multiple functions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="sorting" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-sort-alpha-down"></i> Sorting and Filtering in Pandas</h2>
              <p>This topic covers how to:</p>
              <ul>
                <li>Sort rows by column values</li>
                <li>Filter data using conditions</li>
              </ul>
              
              <div className="property-card">
                <h3 className="h4">1. Sorting Rows</h3>
                <p><code>sort_values()</code> - Sort by column values</p>
                <pre><code>{`import pandas as pd

data = {
    'Name': ['Arun', 'Bala', 'Chitra', 'Dinesh'],
    'Age': [25, 30, 22, 28],
    'Salary': [30000, 50000, 35000, 40000]
}

df = pd.DataFrame(data)`}</code></pre>
                
                <h4 className="h5 mt-3">Sort by Age (ascending):</h4>
                <pre><code>{`print(df.sort_values(by='Age'))`}</code></pre>
                
                <h4 className="h5 mt-3">Sort by Salary (descending):</h4>
                <pre><code>{`print(df.sort_values(by='Salary', ascending=False))`}</code></pre>
                
                <h4 className="h5 mt-3">Sort by multiple columns:</h4>
                <pre><code>{`print(df.sort_values(by=['Age', 'Salary'], ascending=[True, False]))`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Filtering Rows (Conditions)</h3>
                <h4 className="h5">Filter using a single condition:</h4>
                <pre><code>{`# Age > 25
print(df[df['Age'] > 25])`}</code></pre>
                
                <h4 className="h5 mt-3">Filter using multiple conditions:</h4>
                <pre><code>{`# Age > 25 and Salary > 35000
print(df[(df['Age'] > 25) & (df['Salary'] > 35000)])`}</code></pre>
                
                <h4 className="h5 mt-3">Filter with OR condition:</h4>
                <pre><code>{`# Age < 25 or Salary > 45000
print(df[(df['Age'] < 25) | (df['Salary'] > 45000)])`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Using isin() to filter specific values</h3>
                <pre><code>{`print(df[df['Name'].isin(['Arun', 'Chitra'])])`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Using between() to filter range</h3>
                <pre><code>{`# Age between 25 and 30
print(df[df['Age'].between(25, 30)])`}</code></pre>
              </div>
            </section>

            <section id="merging" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-merge"></i> Merging, Joining & Concatenating DataFrames</h2>
              <p>We use these to combine multiple DataFrames together — like SQL joins.</p>
              
              <div className="property-card">
                <h3 className="h4">1. Concatenation (Stacking DataFrames)</h3>
                <p><code>pd.concat()</code> - Row-wise or Column-wise join</p>
                <pre><code>{`import pandas as pd

df1 = pd.DataFrame({
    'ID': [1, 2],
    'Name': ['Arun', 'Bala']
})

df2 = pd.DataFrame({
    'ID': [3, 4],
    'Name': ['Chitra', 'Dinesh']
})

# Row-wise combine
result = pd.concat([df1, df2])
print(result)`}</code></pre>
                <p>Output:</p>
                <pre><code>{`   ID    Name
0   1    Arun
1   2    Bala
0   3  Chitra
1   4  Dinesh`}</code></pre>
                <p>Index is repeated – to fix that, use <code>ignore_index=True</code>.</p>
                <pre><code>{`pd.concat([df1, df2], ignore_index=True)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Merge (like SQL join)</h3>
                <pre><code>{`employees = pd.DataFrame({
    'EmpID': [1, 2, 3],
    'Name': ['Arun', 'Bala', 'Chitra']
})

salaries = pd.DataFrame({
    'EmpID': [1, 2, 4],
    'Salary': [30000, 40000, 50000]
})`}</code></pre>
                
                <h4 className="h5 mt-3">Inner Join:</h4>
                <pre><code>{`pd.merge(employees, salaries, on='EmpID', how='inner')`}</code></pre>
                <p><strong>Only matching EmpID will be included</strong></p>
                
                <h4 className="h5 mt-3">Left Join:</h4>
                <pre><code>{`pd.merge(employees, salaries, on='EmpID', how='left')`}</code></pre>
                <p><strong>All from employees, match from salaries</strong></p>
                
                <h4 className="h5 mt-3">Right Join:</h4>
                <pre><code>{`pd.merge(employees, salaries, on='EmpID', how='right')`}</code></pre>
                
                <h4 className="h5 mt-3">Outer Join:</h4>
                <pre><code>{`pd.merge(employees, salaries, on='EmpID', how='outer')`}</code></pre>
                <p><strong>All records, fill unmatched with NaN</strong></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Join by index</h3>
                <pre><code>{`df1 = pd.DataFrame({'Name': ['Arun', 'Bala']}, index=[1, 2])
df2 = pd.DataFrame({'Salary': [30000, 40000]}, index=[1, 2])

result = df1.join(df2)
print(result)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Join Types</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Join Type</th>
                      <th>Code</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Inner Join</td>
                      <td><code>how='inner'</code></td>
                      <td>Only matched keys</td>
                    </tr>
                    <tr>
                      <td>Left Join</td>
                      <td><code>how='left'</code></td>
                      <td>All from left, matched from right</td>
                    </tr>
                    <tr>
                      <td>Right Join</td>
                      <td><code>how='right'</code></td>
                      <td>All from right, matched from left</td>
                    </tr>
                    <tr>
                      <td>Outer Join</td>
                      <td><code>how='outer'</code></td>
                      <td>All from both</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="io" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark"></i> Reading and Writing Files</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Read CSV File</h3>
                <pre><code>{`import pandas as pd

df = pd.read_csv('data.csv')
print(df.head()) # view first 5 rows`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Read Excel File</h3>
                <pre><code>{`df = pd.read_excel('data.xlsx')
print(df.head())`}</code></pre>
                <p>Excel requires: <code>pip install openpyxl</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Write to CSV</h3>
                <pre><code>{`df.to_csv('output.csv', index=False)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Write to Excel</h3>
                <pre><code>{`df.to_excel('output.xlsx', index=False)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Summary Table</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Code</th>
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
                      <td><code>df.to_csv('output.csv')</code></td>
                    </tr>
                    <tr>
                      <td>Write Excel</td>
                      <td><code>df.to_excel('output.xlsx')</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="dates" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calendar"></i> Working with Dates</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Convert to Date Format</h3>
                <pre><code>{`df['Date'] = pd.to_datetime(df['Date'])`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Extract Year, Month, Day</h3>
                <pre><code>{`df['Year'] = df['Date'].dt.year
df['Month'] = df['Date'].dt.month
df['Day'] = df['Date'].dt.day`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Filter by Date</h3>
                <pre><code>{`# Filter data where year is 2024
df_2024 = df[df['Date'].dt.year == 2024]

# Filter between two dates
df_filtered = df[(df['Date'] >= '2024-01-01') & (df['Date'] <= '2024-12-31')]`}</code></pre>
              </div>
            </section>

            <section id="apply" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-lightning"></i> Apply Function – apply(), map(), lambda</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Using apply() with lambda</h3>
                <pre><code>{`df['Salary_with_bonus'] = df['Salary'].apply(lambda x: x + 1000)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Using map() – element-wise for a column</h3>
                <pre><code>{`df['Grade'] = df['Marks'].map(lambda x: 'Pass' if x > 35 else 'Fail')`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Row-wise Operations using apply(axis=1)</h3>
                <pre><code>{`def total(row):
    return row['Maths'] + row['Science'] + row['English']
    
df['Total'] = df.apply(total, axis=1)`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Pandas Notes &copy; 2025 | Designed for Data Analysis</p>
        </div>
      </footer>
    </div>
  );
}

export default PandasNotes;