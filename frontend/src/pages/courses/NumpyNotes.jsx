import React from 'react';

function NumpyNotes() {
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
          .example-card {
            background-color: #e9ecef;
            border-left: 4px solid #6c757d;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 4px;
          }
        `}
      </style>

      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-calculator"></i> NumPy Notes</h1>
          <p className="lead">Your Comprehensive Guide to Numerical Python</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#installation"><i className="bi bi-download"></i> Installation</a>
              <a className="nav-link" href="#arrays"><i className="bi bi-collection"></i> NumPy Arrays</a>
              <a className="nav-link" href="#indexing"><i className="bi bi-list-ol"></i> Indexing & Slicing</a>
              <a className="nav-link" href="#attributes"><i className="bi bi-card-list"></i> Array Attributes</a>
              <a className="nav-link" href="#operations"><i className="bi bi-calculator"></i> Array Operations</a>
              <a className="nav-link" href="#functions"><i className="bi bi-code-square"></i> NumPy Functions</a>
              <a className="nav-link" href="#reshaping"><i className="bi bi-arrows-angle-contract"></i> Reshaping Arrays</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to NumPy</h2>
              
              <div className="property-card">
                <h3 className="h4">Definition</h3>
                <ul>
                  <li>NumPy (Numerical Python) is an open-source Python library used for working with <strong>arrays</strong>.</li>
                  <li>It provides tools for performing <strong>mathematical, logical, statistical, and Fourier operations</strong> on arrays efficiently.</li>
                  <li>It is the <strong>foundation library</strong> for scientific computing in Python.</li>
                  <li>Widely used in <strong>data science, machine learning</strong>, and <strong>numerical analysis</strong>.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why use NumPy?</h3>
                <ul>
                  <li>NumPy arrays are <strong>faster and more memory-efficient</strong> than Python lists.</li>
                  <li>Supports <strong>vectorized operations</strong> (no need for explicit loops).</li>
                  <li>Built-in <strong>mathematical functions</strong>.</li>
                  <li>Easy integration with <strong>other libraries</strong> like Pandas, Matplotlib, Scikit-learn, etc.</li>
                </ul>
              </div>
            </section>

            <section id="installation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-download"></i> Installing and Importing NumPy</h2>
              
              <div className="property-card">
                <h3 className="h4">Installation</h3>
                <pre><code>{`pip install numpy`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Importing NumPy</h3>
                <pre><code>{`import numpy as np`}</code></pre>
                <p><code>np</code> is just an alias, commonly used for easier reference.</p>
              </div>
              
              <div className="example-card">
                <h3 className="h4">Basic Example</h3>
                <pre><code>{`import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print("NumPy Array:", arr)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`NumPy Array: [1 2 3 4 5]`}</code></pre>
              </div>
            </section>

            <section id="arrays" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-collection"></i> NumPy Arrays</h2>
              
              <div className="property-card">
                <h3 className="h4">What is a NumPy Array?</h3>
                <ul>
                  <li>A NumPy array is a grid of values (of the same data type) indexed by a tuple of nonnegative integers.</li>
                  <li>It is similar to Python lists, but with more powerful features for numerical computation.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Creating Arrays in NumPy</h3>
                <p>There are several ways to create arrays in NumPy:</p>
              </div>
              
              <div className="example-card">
                <h4 className="h5">1. np.array() - Convert list/tuple into array</h4>
                <pre><code>{`import numpy as np

arr = np.array([10, 20, 30])
print(arr)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[10 20 30]`}</code></pre>
              </div>
              
              <div className="example-card">
                <h4 className="h5">2. np.arange() - Like range(), but returns array</h4>
                <pre><code>{`arr = np.arange(1, 10, 2)  # start=1, stop=10, step=2
print(arr)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[1 3 5 7 9]`}</code></pre>
              </div>
              
              <div className="example-card">
                <h4 className="h5">3. np.linspace() - Evenly spaced numbers between two values</h4>
                <pre><code>{`arr = np.linspace(0, 1, 5)  # start=0, end=1, 5 values
print(arr)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[0.   0.25 0.5  0.75 1.  ]`}</code></pre>
              </div>
              
              <div className="example-card">
                <h4 className="h5">4. np.zeros() - Creates an array filled with zeros</h4>
                <pre><code>{`arr = np.zeros((2, 3))  # 2 rows, 3 columns
print(arr)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[[0. 0. 0.]
 [0. 0. 0.]]`}</code></pre>
              </div>
              
              <div className="example-card">
                <h4 className="h5">5. np.ones() - Creates an array filled with ones</h4>
                <pre><code>{`arr = np.ones((3, 2))
print(arr)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[[1. 1.]
 [1. 1.]
 [1. 1.]]`}</code></pre>
              </div>
              
              <div className="example-card">
                <h4 className="h5">6. np.eye() - Identity matrix</h4>
                <pre><code>{`arr = np.eye(3)
print(arr)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]`}</code></pre>
              </div>
              
              <div className="example-card">
                <h4 className="h5">7. np.full() - Custom constant value</h4>
                <pre><code>{`arr = np.full((2, 2), 7)
print(arr)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[[7 7]
 [7 7]]`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Array Types</h3>
                <ul>
                  <li><strong>1D Array</strong> → Single row: <code>[1, 2, 3]</code></li>
                  <li><strong>2D Array</strong> → Matrix style: <code>[[1,2], [3,4]]</code></li>
                  <li><strong>3D Array</strong> → Multidimensional: <code>[[[1,2], [3,4]], [[5,6], [7,8]]]</code></li>
                </ul>
                <pre><code>{`a = np.array([1, 2, 3])               # 1D
b = np.array([[1, 2], [3, 4]])      # 2D
c = np.array([[[1], [2]], [[3], [4]]])  # 3D`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Check Data Type</h3>
                <pre><code>{`arr = np.array([1, 2, 3])
print(arr.dtype)  # int32 or int64 based on system`}</code></pre>
              </div>
            </section>

            <section id="indexing" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-list-ol"></i> Array Indexing and Slicing</h2>
              
              <div className="property-card">
                <h3 className="h4">What is Indexing?</h3>
                <p>Indexing means accessing individual elements from the array using their position (index).</p>
                <p>NumPy uses 0-based indexing (first element = index 0).</p>
              </div>
              
              <div className="example-card">
                <h4 className="h5">1D Array Indexing</h4>
                <pre><code>{`import numpy as np
arr = np.array([10, 20, 30, 40, 50])
print(arr[0])  # First element
print(arr[3])  # Fourth element`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`10
40`}</code></pre>
              </div>
              
              <div className="example-card">
                <h4 className="h5">2D Array Indexing</h4>
                <pre><code>{`arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr[0][1])  # 1st row, 2nd column
print(arr[1, 2])  # 2nd row, 3rd column (shorthand)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`2
6`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">What is Slicing?</h3>
                <p>Slicing means extracting a portion of the array using a range of indices.</p>
              </div>
              
              <div className="example-card">
                <h4 className="h5">1D Array Slicing</h4>
                <pre><code>{`arr = np.array([10, 20, 30, 40, 50])
print(arr[1:4])  # From index 1 to 3
print(arr[:3])   # From beginning to index 2
print(arr[2:])   # From index 2 to end`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[20 30 40]
[10 20 30]
[30 40 50]`}</code></pre>
              </div>
              
              <div className="example-card">
                <h4 className="h5">2D Array Slicing</h4>
                <pre><code>{`arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr[:, 1])  # All rows, 2nd column
print(arr[1, :])  # 2nd row, all columns`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[2 5]
[4 5 6]`}</code></pre>
              </div>
              
              <div className="example-card">
                <h4 className="h5">Boolean Indexing</h4>
                <pre><code>{`arr = np.array([10, 20, 30, 40, 50])
print(arr[arr > 25])  # Only elements > 25`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[30 40 50]`}</code></pre>
              </div>
              
              <div className="example-card">
                <h4 className="h5">Fancy Indexing (Index array)</h4>
                <pre><code>{`arr = np.array([10, 20, 30, 40, 50])
print(arr[[0, 3, 4]])  # Get 1st, 4th, 5th elements`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[10 40 50]`}</code></pre>
              </div>
            </section>

            <section id="attributes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-card-list"></i> Array Attributes in NumPy</h2>
              <p>NumPy arrays have several built-in attributes to understand their structure and content.</p>
              
              <div className="property-card">
                <h4 className="h5">1. ndim – Number of Dimensions</h4>
                <pre><code>{`arr1 = np.array([1, 2, 3])     # 1D
arr2 = np.array([[1, 2], [3, 4]])  # 2D

print(arr1.ndim)  # Output: 1
print(arr2.ndim)  # Output: 2`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">2. shape – Size along each dimension</h4>
                <pre><code>{`arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr.shape)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`(2, 3)  # 2 rows, 3 columns`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">3. size – Total number of elements</h4>
                <pre><code>{`arr = np.array([[1, 2], [3, 4], [5, 6]])
print(arr.size)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`6`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">4. dtype – Data type of elements</h4>
                <pre><code>{`arr = np.array([1, 2, 3])
print(arr.dtype)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`int32 (or int64 based on system)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">5. itemsize – Size in bytes of each element</h4>
                <pre><code>{`arr = np.array([1, 2, 3])
print(arr.itemsize)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`4 (each int takes 4 bytes)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">6. nbytes – Total bytes consumed</h4>
                <pre><code>{`arr = np.array([1, 2, 3, 4])
print(arr.nbytes)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`16 (4 elements × 4 bytes)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">7. T – Transpose of array</h4>
                <pre><code>{`arr = np.array([[1, 2], [3, 4]])
print(arr.T)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[[1 3]
 [2 4]]`}</code></pre>
              </div>
            </section>

            <section id="operations" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> Array Operations in NumPy</h2>
              <p>NumPy makes mathematical operations simple and faster. You can perform operations on arrays without using loops — this is called <strong>vectorization</strong>.</p>
              
              <div className="property-card">
                <h4 className="h5">1. Arithmetic Operations (Element-wise)</h4>
                <p>NumPy performs operations <strong>element by element</strong>.</p>
                <pre><code>{`import numpy as np

a = np.array([10, 20, 30])
b = np.array([1, 2, 3])

print(a + b)  # [11 22 33]
print(a - b)  # [9 18 27]
print(a * b)  # [10 40 90]
print(a / b)  # [10. 10. 10.]`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">2. Scalar Operations</h4>
                <p>Operations with a single number (scalar) apply to <strong>all elements</strong>.</p>
                <pre><code>{`a = np.array([1, 2, 3])

print(a + 5)  # [6 7 8]
print(a * 2)  # [2 4 6]`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">3. Comparison Operations</h4>
                <p>You can compare elements and get Boolean arrays.</p>
                <pre><code>{`a = np.array([10, 20, 30])

print(a > 15)   # [False True True]
print(a == 20)  # [False True False]`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">4. Mathematical Functions</h4>
                <pre><code>{`a = np.array([1, 4, 9, 16])

print(np.sqrt(a))   # Square root
print(np.exp(a))    # Exponential
print(np.log(a))    # Logarithm
print(np.max(a))    # Max value
print(np.min(a))    # Min value
print(np.mean(a))   # Mean (average)
print(np.std(a))    # Standard deviation`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">5. Broadcasting</h4>
                <p>Broadcasting allows NumPy to perform operations between arrays of different shapes, as long as they follow certain rules.</p>
                <h5 className="h6">Example 1:</h5>
                <pre><code>{`a = np.array([1, 2, 3])
b = 2
print(a + b)`}</code></pre>
                <h5 className="h6">Output:</h5>
                <pre><code>{`[3 4 5]`}</code></pre>
                <p>Scalar 2 broadcasted to each element of array a.</p>
                
                <h5 className="h6">Example 2:</h5>
                <pre><code>{`a = np.array([[1, 2, 3], [4, 5, 6]])
b = np.array([10, 20, 30])
print(a + b)`}</code></pre>
                <h5 className="h6">Output:</h5>
                <pre><code>{`[[11 22 33]
 [14 25 36]]`}</code></pre>
                <p>Row-wise broadcasting!</p>
              </div>
            </section>

            <section id="functions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> NumPy Functions</h2>
              <p>NumPy has built-in functions to do calculations easily on arrays. These are <strong>vectorized</strong>, meaning they are super fast and don't need loops.</p>
              
              <div className="property-card">
                <h4 className="h5">1. np.sum() - Add elements</h4>
                <pre><code>{`arr = np.array([1, 2, 3, 4])
print(np.sum(arr))  # Output: 10

# 2D Example with axis:
arr = np.array([[1, 2], [3, 4]])
print(np.sum(arr, axis=0))  # column-wise sum → [4 6]
print(np.sum(arr, axis=1))  # row-wise sum → [3 7]`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">2. np.mean() - Average value</h4>
                <pre><code>{`arr = np.array([10, 20, 30])
print(np.mean(arr))  # Output: 20.0`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">3. np.std() - Standard Deviation</h4>
                <pre><code>{`arr = np.array([1, 2, 3])
print(np.std(arr))  # Output: 0.816...`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">4. np.min() / np.max() - Min and Max value</h4>
                <pre><code>{`arr = np.array([2, 5, 1, 9])
print(np.min(arr))  # Output: 1
print(np.max(arr))  # Output: 9`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">5. np.argmin() / np.argmax() – Index of Min/Max</h4>
                <pre><code>{`arr = np.array([2, 5, 1, 9])
print(np.argmin(arr))  # Output: 2
print(np.argmax(arr))  # Output: 3`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">6. np.sort() – Sort the array</h4>
                <pre><code>{`arr = np.array([3, 1, 4, 2])
print(np.sort(arr))  # Output: [1 2 3 4]`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">7. np.unique() – Unique values</h4>
                <pre><code>{`arr = np.array([1, 2, 2, 3, 3, 3])
print(np.unique(arr))  # Output: [1 2 3]`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">8. np.where() – Condition-based index</h4>
                <pre><code>{`arr = np.array([10, 20, 30, 40])
print(np.where(arr > 25))  # Output: (array([2, 3]),)

# Use it to replace values:
print(np.where(arr > 25, 1, 0))  # [0 0 1 1]`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">9. np.clip() – Limit values in a range</h4>
                <pre><code>{`arr = np.array([1, 5, 10, 15])
print(np.clip(arr, 3, 10))  # Output: [3 5 10 10]`}</code></pre>
              </div>
            </section>

            <section id="reshaping" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrows-angle-contract"></i> Reshaping and Resizing Arrays</h2>
              <p>NumPy allows you to change the shape of arrays without changing the data.</p>
              
              <div className="property-card">
                <h4 className="h5">1. reshape() - Change the shape</h4>
                <pre><code>{`import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6])
reshaped = arr.reshape(2, 3)  # 2 rows, 3 columns
print(reshaped)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[[1 2 3]
 [4 5 6]]`}</code></pre>
                <p>Note: Total number of elements <strong>must match</strong> (2×3 = 6 elements)</p>
              </div>
              
              <div className="property-card">
                <h4 className="h5">2. ravel() – Flatten to 1D (view)</h4>
                <pre><code>{`arr = np.array([[1, 2], [3, 4]])
print(arr.ravel())  # Output: [1 2 3 4]`}</code></pre>
                <p>Returns a view (changes to original array will be reflected here)</p>
              </div>
              
              <div className="property-card">
                <h4 className="h5">3. flatten() – Flatten to 1D (copy)</h4>
                <pre><code>{`arr = np.array([[1, 2], [3, 4]])
print(arr.flatten())  # Output: [1 2 3 4]`}</code></pre>
                <p>Returns a copy (original array won't be affected)</p>
              </div>
              
              <div className="property-card">
                <h4 className="h5">4. resize() – Change shape and modify original array</h4>
                <pre><code>{`arr = np.array([1, 2, 3, 4])
arr.resize((2, 2))
print(arr)`}</code></pre>
                <h4 className="h5 mt-3">Output:</h4>
                <pre><code>{`[[1 2]
 [3 4]]`}</code></pre>
                <p>Resize will <strong>change the original array</strong> and if needed, fill with 0s or truncate extra values.</p>
              </div>
              
              <div className="property-card">
                <h4 className="h5">5. reshape(-1) – Auto calculate size</h4>
                <pre><code>{`arr = np.array([[1, 2], [3, 4]])
print(arr.reshape(-1))  # Output: [1 2 3 4]

arr = np.array([1, 2, 3, 4, 5, 6])
print(arr.reshape(2, -1))  # 2 rows, auto columns → (2, 3)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h4 className="h5">Difference Table – reshape vs resize vs flatten vs ravel</h4>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Function</th>
                      <th>Description</th>
                      <th>Copy / View</th>
                      <th>Changes Original?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>reshape()</td>
                      <td>Change shape</td>
                      <td>View/Copy</td>
                      <td>✗ No</td>
                    </tr>
                    <tr>
                      <td>resize()</td>
                      <td>Change shape + original modified</td>
                      <td>–</td>
                      <td>✔ Yes</td>
                    </tr>
                    <tr>
                      <td>ravel()</td>
                      <td>Flatten to 1D (fast)</td>
                      <td>View</td>
                      <td>✗ No</td>
                    </tr>
                    <tr>
                      <td>flatten()</td>
                      <td>Flatten to 1D</td>
                      <td>Copy</td>
                      <td>✗ No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>NumPy Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default NumpyNotes;