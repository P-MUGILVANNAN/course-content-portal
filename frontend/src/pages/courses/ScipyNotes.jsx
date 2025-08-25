import React from 'react';

function ScipyNotes() {
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
          .output {
            background-color: #e9ecef;
            padding: 10px;
            border-radius: 4px;
            margin-top: 10px;
            font-family: monospace;
          }
        `}
      </style>

      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-calculator"></i> SciPy Notes</h1>
          <p className="lead">Scientific Computing with Python</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#subpackages"><i className="bi bi-boxes"></i> Sub-packages</a>
              <a className="nav-link" href="#linalg"><i className="bi bi-columns-gap"></i> Linear Algebra</a>
              <a className="nav-link" href="#fft"><i className="bi bi-graph-up"></i> Fourier Transform</a>
              <a className="nav-link" href="#optimize"><i className="bi bi-bullseye"></i> Optimization</a>
              <a className="nav-link" href="#integrate"><i className="bi bi-calculator"></i> Integration</a>
              <a className="nav-link" href="#interpolate"><i className="bi bi-bar-chart-line"></i> Interpolation</a>
              <a className="nav-link" href="#stats"><i className="bi bi-percent"></i> Statistics</a>
              <a className="nav-link" href="#constants"><i className="bi bi-infinity"></i> Constants</a>
              <a className="nav-link" href="#io"><i className="bi bi-file-earmark-binary"></i> Input/Output</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to SciPy</h2>
              <div className="property-card">
                <ul>
                  <li><strong>SciPy (Scientific Python)</strong> is an <strong>open-source Python library</strong> used for scientific and technical computing.</li>
                  <li>It is built on <strong>top of NumPy</strong>, and provides additional functionalities like <strong>optimization, integration, interpolation, linear algebra, statistics, and signal processing</strong>.</li>
                  <li>{`In short: \( \text{NumPy} = \text{base for arrays}, \text{SciPy} = \text{advanced scientific tools}. \)`}</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-download"></i> Installation</h3>
                <pre><code>pip install scipy</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-code"></i> Importing SciPy</h3>
                <pre><code>{`import scipy
import numpy as np

# You can also import specific modules like:
from scipy import linalg, stats`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check-circle"></i> Example: Checking SciPy Version</h3>
                <pre><code>{`import scipy
print(scipy.__version__)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> 1.13.1
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code"></i> Example: Using SciPy with NumPy Array</h3>
                <pre><code>{`import numpy as np
from scipy import linalg

# Create a 2x2 matrix
A = np.array([[4, 5], [3, 2]])

# Find determinant using SciPy
det = linalg.det(A)
print("Determinant:", det)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Determinant: -7.0
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left-right"></i> Example: Comparing NumPy vs SciPy</h3>
                <pre><code>{`import numpy as np
from scipy import constants

# NumPy gives arrays, basic math
arr = np.array([1, 2, 3, 4, 5])
print("NumPy Mean:", np.mean(arr))

# SciPy gives scientific constants
print("Speed of Light:", constants.c, "m/s")`}</code></pre>
                <div className="output">
                  <strong>Output:</strong><br />
                  NumPy Mean: 3.0<br />
                  Speed of Light: 299792458.0 m/s
                </div>
              </div>
            </section>

            <section id="subpackages" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-boxes"></i> SciPy Sub-packages Overview</h2>
              <div className="property-card">
                <p>SciPy is made of multiple sub-packages, each providing specialized tools for different areas of scientific computing.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">1. scipy.linalg – Linear Algebra</h3>
                <p><strong>Definition:</strong> Provides advanced linear algebra operations (matrix inverse, determinant, eigenvalues, solving linear equations).</p>
                <pre><code>{`import numpy as np
from scipy import linalg

A = np.array([[4, 2], [3, 1]])
det = linalg.det(A)
print("Determinant:", det)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Determinant: -2.0
                </div>

                <pre><code>{`"""
Step 1: What is A?

Matrix A is:
A = [ 4   5 ]
    [ 3   2 ]

Step 2: Determinant of a 2x2 Matrix

For a 2x2 matrix:

    det(A) = (ad - bc)

where:
    A = [ a   b ]
        [ c   d ]

So here:
    a = 4
    b = 5
    c = 3
    d = 2

Calculation:
    det(A) = (4 × 2) - (5 × 3)
           = 8 - 15
           = -7
"""
`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. scipy.fftpack – Fourier Transform</h3>
                <p><strong>Definition:</strong> Used to perform Fast Fourier Transform (FFT) for analyzing frequency components of signals.</p>
                <pre><code>{`import numpy as np
from scipy import fftpack

x = np.array([1, 2, 3, 4])
fft_x = fftpack.fft(x)
print("FFT:", fft_x)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> FFT: [10.+0.j -2.+2.j -2.+0.j -2.-2.j]
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">3. scipy.optimize – Optimization & Root Finding</h3>
                <p><strong>Definition:</strong> Provides functions to find minimum/maximum of functions and solve equations numerically.</p>
                <pre><code>{`from scipy import optimize

func = lambda x: x**2 - 4

root1 = optimize.root(func, x0=1)   # closer to +2
root2 = optimize.root(func, x0=-3)  # closer to -2

print("Root near 1:", root1.x)   # ~ +2
print("Root near -3:", root2.x)  # ~ -2`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Root near 1: [2.]
Root near -3: [-2.]
                </div>
                <pre><code>{`"""
Step 1: Define the Equation

    f(x) = x^2 - 4 = 0
    ⇒ x^2 = 4
    ⇒ x = ±2

So, the true roots are: -2 and +2.

---------------------------------------------------

Step 2: Using scipy.optimize.root

- The function optimize.root is a general solver for nonlinear equations.
- It requires:
    • The function (func)
    • An initial guess (x0)
- Based on the initial guess, the solver will try to converge to the nearest root.

---------------------------------------------------

Step 3: Behavior with Initial Guess x0 = 0

- If we set x0 = 0:
    f(0) = 0^2 - 4 = -4
- This is not a root, but just a starting point.
- The algorithm will use this point and attempt iterations
  to move closer to one of the true roots (-2 or +2).
"""
`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. scipy.integrate – Integration & ODEs</h3>
                <p><strong>Definition:</strong> Used for numerical integration (definite integrals) and solving differential equations.</p>
                <pre><code>{`from scipy import integrate

# Integrate x^2 from 0 to 2
result, _ = integrate.quad(lambda x: x**2, 0, 2)
print("Integration Result:", result)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Integration Result: 2.66666666666667
                </div>
                <pre><code>{`"""
Step 1: Define Limits

    Lower limit = 0
    Upper limit = 2

---------------------------------------------------

Step 2: Mathematical Meaning

We are integrating the function:

        2
       ∫  x^2 dx
        0

---------------------------------------------------

Step 3: Solve Manually

∫ x^2 dx = (x^3) / 3

Now apply limits from 0 to 2:

    [ x^3 / 3 ]  (from 0 to 2)
  = (2^3 / 3) - (0^3 / 3)
  = (8 / 3) - (0 / 3)
  = 8/3

---------------------------------------------------

Final Answer:

    8/3 ≈ 2.66666666666667
"""
`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">5. scipy.interpolate – Interpolation</h3>
                <p><strong>Definition:</strong> Provides methods to estimate values between known data points.</p>
                <pre><code>{`import numpy as np
from scipy import interpolate

x = np.array([0, 1, 2, 3])
y = np.array([0, 1, 4, 9])

f = interpolate.interp1d(x, y, kind="linear")
print("Interpolated Value at 1.5:", f(1.5))`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Interpolated Value at 1.5: 2.5
                </div>
                <pre><code>{`"""
Step 1: What's the data?

We have:
    x = [0, 1, 2, 3]
    y = [0, 1, 4, 9]

Notice that:
    y = x^2

So the given data points are:
    (0,0), (1,1), (2,4), (3,9)

---------------------------------------------------

Step 2: interp1d

- interp1d creates an interpolation function based on the given data.
- kind="linear" means piecewise linear interpolation (straight lines between points).
- So f becomes a function you can call with new x values (like 1.5).

---------------------------------------------------

Step 3: Linear interpolation at x = 1.5

We need to interpolate between:
    (1, 1) and (2, 4)

Equation of the line between (x1, y1) and (x2, y2):

    y = y1 + ( (y2 - y1) / (x2 - x1) ) * (x - x1)

Substitute values:
    y = 1 + (4 - 1) / (2 - 1) * (1.5 - 1)
      = 1 + (3 / 1) * (0.5)
      = 1 + 1.5
      = 2.5

---------------------------------------------------

Final Answer:
    Interpolated value at x = 1.5 is 2.5
"""
`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">6. scipy.stats – Statistics & Probability</h3>
                <p><strong>Definition:</strong> Contains statistical functions and probability distributions.</p>
                <pre><code>{`from scipy import stats

data = [1, 2, 2, 3, 4]
mean = stats.tmean(data)
mode = stats.mode(data, keepdims=True)

print("Mean:", mean)
print("Mode:", mode.mode[0])`}</code></pre>
                <div className="output">
                  <strong>Output:</strong><br />
                  Mean: 2.4<br />
                  Mode: 2
                </div>
                <pre><code>{`"""
Step 1: The Dataset

We have:
    data = [1, 2, 2, 3, 4]

---------------------------------------------------

Step 2: Mean (Average)

Formula:
    Mean = (Sum of all values) / (Number of values)

Calculation:
    Mean = (1 + 2 + 2 + 3 + 4) / 5
         = 12 / 5
         = 2.4

So, Mean = 2.4

---------------------------------------------------

Step 3: Mode (Most Frequent Value)

- Mode is the value that occurs most often.
- In data = [1, 2, 2, 3, 4], the number 2 appears twice,
  while all others appear only once.
- Hence, Mode = 2

---------------------------------------------------

Step 4: Why mode.mode[0]?

- When we use stats.mode(data), it returns a ModeResult object.
- This object contains:
    mode.mode  → the mode value(s)
    mode.count → how many times the mode occurred

Example:
    print(mode)
    ModeResult(mode=array([2]), count=array([2]))

So:
    mode.mode[0] = 2
    mode.count[0] = 2
"""
`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">7. scipy.constants – Mathematical & Physical Constants</h3>
                <p><strong>Definition:</strong> Provides access to many useful scientific constants (like pi, Planck's constant, speed of light).</p>
                <pre><code>{`from scipy import constants

print("Pi:", constants.pi)
print("Speed of Light:", constants.c)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong><br />
                  Pi: 3.141592653589793<br />
                  Speed of Light: 299792458.0
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">8. scipy.io – Input/Output</h3>
                <p><strong>Definition:</strong> Used for reading and writing data files (like MATLAB .mat and WAV files).</p>
                <pre><code>{`from scipy import io
import numpy as np

# Save NumPy array as .mat file
arr = np.array([1, 2, 3, 4])
io.savemat("array.mat", {'arr': arr})

print("MAT file saved successfully")`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> MAT file saved successfully
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">9. scipy.spatial – Spatial Data & Distance</h3>
                <p><strong>Definition:</strong> Provides tools for distance computation, KDTree, and nearest-neighbor search.</p>
                <pre><code>{`from scipy.spatial import distance

p1 = (1, 2)
p2 = (4, 6)

dist = distance.euclidean(p1, p2)
print("Euclidean Distance:", dist)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Euclidean Distance: 5.0
                </div>
                <pre><code>{`"""
Step 1: Points

We have two points in 2D space:
    p1 = (1, 2)
    p2 = (4, 6)

---------------------------------------------------

Step 2: Euclidean Distance Formula

For two points (x1, y1) and (x2, y2):

    d = √((x2 - x1)² + (y2 - y1)²)

---------------------------------------------------

Step 3: Apply Formula to Given Points

    d = √((4 - 1)² + (6 - 2)²)
      = √(3² + 4²)
      = √(9 + 16)
      = √25
      = 5

---------------------------------------------------

Final Answer:
    The Euclidean distance between (1,2) and (4,6) is 5
"""
`}</code></pre>
              </div>
            </section>

            <section id="linalg" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-columns-gap"></i> Linear Algebra (scipy.linalg)</h2>
              <div className="property-card">
                <p><strong>Definition</strong></p>
                <ul>
                  <li>scipy.linalg provides advanced <strong>linear algebra functions</strong> similar to numpy.linalg, but more <strong>optimized and feature-rich</strong>.</li>
                  <li>It supports:
                    <ul>
                      <li><strong>Determinant</strong> of a matrix</li>
                      <li><strong>Inverse</strong> of a matrix</li>
                      <li><strong>Solving linear equations</strong></li>
                      <li><strong>Eigenvalues and Eigenvectors</strong></li>
                      <li><strong>Matrix decompositions (LU, QR, SVD, etc.)</strong></li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">1. Determinant of a Matrix</h3>
                <p>The determinant is a scalar value that tells whether a matrix is invertible.</p>
                <pre><code>{`import numpy as np
from scipy import linalg

A = np.array([[4, 5], [3, 2]])
det = linalg.det(A)
print("Determinant:", det)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Determinant: -7.0
                </div>
                <pre><code>{`"""
Step 1: What is A?

Matrix A is:
    A = [ 4   5 ]
        [ 3   2 ]

---------------------------------------------------

Step 2: Determinant of a 2x2 Matrix

For a 2x2 matrix:

    det(A) = (ad - bc)

where:
    A = [ a   b ]
        [ c   d ]

---------------------------------------------------

Step 3: Substitute Values

    a = 4
    b = 5
    c = 3
    d = 2

det(A) = (4 × 2) - (5 × 3)
       = 8 - 15
       = -7

---------------------------------------------------

Final Answer:
    Determinant of A = -7
"""
`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Inverse of a Matrix</h3>
                <p>The inverse of a matrix A is a matrix ( A^{-1} ) such that ( A times A^{-1} = I ).</p>
                <pre><code>{`import numpy as np
from scipy import linalg

A = np.array([[4, 7], [2, 6]])
inv_A = linalg.inv(A)
print("Inverse Matrix:", inv_A)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong><br />
                  Inverse Matrix:<br />
                  [[ 0.6 -0.7]<br />
                  [-0.2  0.4]]
                </div>
                <pre><code>{`"""
Step 1: The Matrix

    A = [ 4   7 ]
        [ 2   6 ]

---------------------------------------------------

Step 2: Formula for the Inverse of a 2×2 Matrix

For a matrix
    A = [ a   b ]
        [ c   d ]

If det(A) ≠ 0, then

           1
A⁻¹ = ----------- * [  d   -b ]
       (ad − bc)    [ -c    a ]

---------------------------------------------------

Step 3: Apply to the Given Matrix

Here:
    a = 4,  b = 7
    c = 2,  d = 6

Determinant:
    det(A) = (4×6) − (7×2) = 24 − 14 = 10

Inverse:
           1           [  6   -7 ]
    A⁻¹ = ---  *      [ -2    4 ]
          10

      = [ 0.6   -0.7 ]
        [ -0.2   0.4 ]

---------------------------------------------------

Final Answer:
    A⁻¹ = [ 0.6   -0.7 ]
          [ -0.2   0.4 ]
"""
`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Solving Linear Equations</h3>
                <p>Solve system of equations Ax=b.</p>
                <p>Example:<br />
                  2x+3y=8<br />
                  x+y=3</p>
                <pre><code>{`import numpy as np
from scipy import linalg

A = np.array([[2, 3], [1, 1]])
b = np.array([8, 3])

x = linalg.solve(A, b)
print("Solution:", x)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Solution: [1. 2.] (So, x=1, y = 2)
                </div>
                <pre><code>{`"""
Step 1: System of Equations

Matrix form:  A x = b

    A = [ 2   3 ]
        [ 1   1 ]

    x = [ x1 ]
        [ x2 ]

    b = [ 8 ]
        [ 3 ]

Expanding:
    2x1 + 3x2 = 8
     x1 +  x2 = 3

---------------------------------------------------

Step 2: Solve Manually

From the second equation:
    x1 = 3 − x2

Substitute into the first:
    2(3 − x2) + 3x2 = 8
    6 − 2x2 + 3x2 = 8
    6 + x2 = 8
    x2 = 2

Back-substitute:
    x1 = 3 − 2 = 1

---------------------------------------------------

Step 3: Solution Vector

    x = [ 1 ]
        [ 2 ]

So a Python solver (e.g., numpy.linalg.solve) would print:
    Solution: [1. 2.]
"""
`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Eigenvalues and Eigenvectors</h3>
                <p>Eigenvalues ((lambda)) and eigenvectors ((v)) satisfy Av=(lambda v).</p>
                <pre><code>{`import numpy as np
from scipy import linalg

A = np.array([[4, -2], [1, 1]])
eigvals, eigvecs = linalg.eig(A)
print("Eigenvalues:", eigvals)
print("Eigenvectors:\n", eigvecs)`}</code></pre>
                <div className="output">
                  <strong>Output (example):</strong><br />
                  Eigenvalues: [3.+0.j 2.+0.j]<br />
                  Eigenvectors:<br />
                  [[ 0.89442719 -0.70710678]<br />
                  [ 0.4472136  0.70710678]]
                </div>
                <pre><code>{`"""
# Define the matrix A
A = np.array([[4, -2],
              [1,  1]])

# Step 1: Use SciPy to compute eigenvalues and eigenvectors
eigvals, eigvecs = linalg.eig(A)

# -------------------- Explanation in Steps --------------------

# Step 2: Characteristic Equation
# To find eigenvalues, we solve det(A - λI) = 0
# |4-λ   -2 |
# | 1   1-λ | = (4-λ)(1-λ) - (-2*1)
#            = λ^2 - 5λ + 6 = 0
# Roots → λ1 = 2 , λ2 = 3

# Step 3: Eigenvectors
# For λ = 2:
# (A - 2I) = [[2, -2], [1, -1]]
# Equation: 2x - 2y = 0 → x = y
# Eigenvector → [1, 1]

# For λ = 3:
# (A - 3I) = [[1, -2], [1, -2]]
# Equation: x - 2y = 0 → x = 2y
# Eigenvector → [2, 1]

# Step 4: Normalization (done automatically by SciPy)
# [1, 1] → [0.707, 0.707]
# [2, 1] → [0.894, 0.447]
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">5. LU Decomposition</h3>
                <p>Factorize a matrix into Lower (L) and Upper (U) triangular matrices.</p>
                <pre><code>{`import numpy as np
from scipy.linalg import lu

A = np.array([[3, 1, 6], [2, 1, 3], [1, 1, 1]])
P, L, U = lu(A)
print("Permutation Matrix:", P)
print("Lower Triangular Matrix:", L)
print("Upper Triangular Matrix:", U)`}</code></pre>
                <div className="output">
                  <strong>Output (example):</strong><br />
                  Permutation Matrix:<br />
                  [[1. 0. 0.]<br />
                  [0. 1. 0.]<br />
                  [0. 0. 1.]]<br />
                  Lower Triangular Matrix:<br />
                  [[1.    0.    0.    ]<br />
                  [0.3333333 1.    0.    ]<br />
                  [0.66666667 0.5    1.    ]<br />
                  Upper Triangular Matrix:<br />
                  [[3. 1. 6.]<br />
                  [0. 0.66666667 -1. ]<br />
                  [0. 0. 1.]]
                </div>

                <pre><code>{`"""
# LU Decomposition using SciPy
# -----------------------------------------
# LU decomposition factorizes a given matrix A into:
#   A = P * L * U
# where:
#   P → Permutation matrix (row swaps for numerical stability)
#   L → Lower triangular matrix (diagonal elements = 1)
#   U → Upper triangular matrix

import numpy as np
from scipy.linalg import lu

# Step 1: Define the matrix A
A = np.array([[3, 1, 6],
              [2, 1, 3],
              [1, 1, 1]])

# Step 2: Perform LU decomposition
P, L, U = lu(A)

# Step 3: Print the results
print("Permutation Matrix (P):", P)
print("Lower Triangular Matrix (L):", L)
print("Upper Triangular Matrix (U):", U)

# Verification Step (Optional):
# Multiply P * L * U to reconstruct A
reconstructed_A = P @ L @ U
print("\nReconstructed A (P * L * U):", reconstructed_A)
print("Original A:", A)

"""`}</code></pre>
              </div>

            </section>

            <section id="fft" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-graph-up"></i> Fourier Transform (scipy.fftpack)</h2>
              <div className="property-card">
                <p><strong>Definition</strong></p>
                <ul>
                  <li><strong>Fourier Transform</strong> converts a signal from the time domain to the frequency domain.</li>
                  <li>scipy.fftpack provides functions for Fast Fourier Transform (FFT).</li>
                  <li>Useful in signal processing, image processing, vibration analysis, and sound analysis.</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">1. 1D Fourier Transform (FFT)</h3>
                <p>Converts a sequence into its frequency components.</p>
                <pre><code>{`import numpy as np
from scipy import fftpack

# Create a simple signal
x = np.array([1, 2, 3, 4])
fft_x = fftpack.fft(x)
print("FFT:", fft_x)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> FFT: [10.+0.j -2.+2.j -2.+0.j -2.-2.j]<br />
                  (Here, j represents the imaginary part.)
                </div>
                <pre><code>{`"""
Step-by-Step Explanation of FFT Output for x = [1, 2, 3, 4]

1. Input Signal:
   - x = [1, 2, 3, 4]
   - Length N = 4

2. FFT Formula:
   X[k] = Σ (x[n] * e^(-j*2πkn/N)), for k = 0,1,2,3

3. Manual Calculation:

   For k = 0:
   X[0] = 1 + 2 + 3 + 4 = 10

   For k = 1:
   X[1] = 1 + 2(e^(-jπ/2)) + 3(e^(-jπ)) + 4(e^(-j3π/2))
        = 1 + 2(-j) + 3(-1) + 4(j)
        = -2 + 2j

   For k = 2:
   X[2] = 1 + 2(e^(-jπ)) + 3(e^(-j2π)) + 4(e^(-j3π))
        = 1 + 2(-1) + 3(1) + 4(-1)
        = -2

   For k = 3:
   X[3] = 1 + 2(e^(-j3π/2)) + 3(e^(-j3π)) + 4(e^(-j9π/2))
        = 1 + 2(j) + 3(-1) + 4(-j)
        = -2 - 2j

4. Final FFT Result:
   [10, -2+2j, -2, -2-2j]

5. Interpretation:
   - X[0] = 10 → DC Component (sum of signal values)
   - X[1] = -2+2j → Frequency component
   - X[2] = -2 → Mid-frequency component
   - X[3] = -2-2j → Conjugate of X[1]
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Inverse Fourier Transform (IFFT)</h3>
                <p>Converts frequency domain back to time domain.</p>
                <pre><code>{`ifft_x = fftpack.ifft(fft_x)
print("Inverse FFT:", ifft_x)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Inverse FFT: [1.+0.j 2.+0.j 3.+0.j 4.+0.j]
                </div>
                <pre><code>{`"""
Step-by-Step Explanation of Inverse FFT (IFFT)

1. What is IFFT?
   - The Inverse Fast Fourier Transform converts frequency-domain data back into the time-domain signal.
   - It is the reverse process of FFT.

2. Input:
   - We already have fft_x = [10, -2+2j, -2, -2-2j] from the FFT of x = [1, 2, 3, 4].

3. IFFT Formula:
   x[n] = (1/N) * Σ (X[k] * e^(j*2πkn/N)), for n = 0,1,2,...,N-1
   - N = 4 (number of points)
   - X[k] = FFT values

4. Manual Verification:
   For n = 0:
     x[0] = (1/4) * (10 + (-2+2j) + (-2) + (-2-2j)) = 1
   For n = 1:
     x[1] = (1/4) * (10 + (-2+2j)(j) + (-2)(-1) + (-2-2j)(-j)) = 2
   For n = 2:
     x[2] = (1/4) * (10 + (-2+2j)(-1) + (-2)(1) + (-2-2j)(-1)) = 3
   For n = 3:
     x[3] = (1/4) * (10 + (-2+2j)(-j) + (-2)(-1) + (-2-2j)(j)) = 4

   So the result matches the original signal: [1, 2, 3, 4].

5. Conclusion:
   - FFT converts time-domain → frequency-domain.
   - IFFT converts frequency-domain → time-domain.
   - After applying IFFT, we get back the original input array.
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. 2D Fourier Transform (for Images)</h3>
                <p>Used in image processing to analyze frequency components.</p>
                <pre><code>{`import numpy as np
from scipy import fftpack

# Create 2D array (like image pixels)
img = np.array([[1, 2], [3, 4]])
fft_img = fftpack.fft2(img)
print("2D FFT:\n", fft_img)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong><br />
                  2D FFT:<br />
                  [10.+0.j -2.+0.j]<br />
                  [-4.+0.j  0.+0.j]
                </div>
                <pre><code>{`"""
Step-by-Step Explanation of 2D Fourier Transform (FFT2)

1. What is 2D FFT?
   - The 2D Fast Fourier Transform extends FFT to two dimensions.
   - It is used in image processing to analyze frequency components of images.

2. Input:
   - img = [[1, 2],
            [3, 4]]
   - This 2D array represents pixel intensity values of a simple 2x2 image.

3. Formula:
   F(u,v) = Σ Σ x(m,n) * e^(-j*2π(um/M + vn/N))
   - M = number of rows (2), N = number of columns (2)
   - u,v = frequency indices in horizontal and vertical directions

4. Manual Calculation:
   - FFT is applied along rows and columns.

   Step 1: Row-wise FFT
   Row 1: [1, 2] → [3, -1]
   Row 2: [3, 4] → [7, -1]

   Step 2: Column-wise FFT
   Column 1: [3, 7] → [10, -4]
   Column 2: [-1, -1] → [-2, 0]

   Final 2D FFT matrix:
   [[10, -2],
    [-4,  0]]

5. Output:
   - Complex numbers (here real values).
   - DC Component (10) = sum of all pixels (1+2+3+4).
   - Other values represent frequency variations in rows/columns.

6. Application:
   - Used in image compression (JPEG), filtering, noise removal.
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Frequency Spectrum Example</h3>
                <p>Helps to visualize frequency content in signals.</p>
                <pre><code>{`import numpy as np
from scipy import fftpack

# Create time axis
t = np.linspace(0, 1, 8, endpoint=False)

# Signal = sin(2π*3t)
signal = np.sin(2*np.pi*3*t)

# FFT
fft_signal = fftpack.fft(signal)

print("Signal:", signal)
print("FFT:", np.round(fft_signal, 2))`}</code></pre>
                <div className="output">
                  <strong>Output:</strong><br />
                  Signal: [ 0.00000000e+00  7.07106781e-01 1.00000000e+00  7.07106781e-01 1.22464680e-16 -7.07106781e-01 -1.00000000e+00 -7.07106781e-01]<br />
                  FFT: [ 0.+0.j  0.+0.j  0.+0.j  0.-4.j  0.+0.j  0.+4.j  0.+0.j  0.+0.j]
                </div>
                <pre><code>{`"""
Step-by-Step Explanation of Frequency Spectrum Example

1. Create Time Axis:
   - t = np.linspace(0, 1, 8, endpoint=False)
   - Generates 8 equally spaced points from 0 to just before 1 second.
   - Sampling frequency (Fs) = 8 samples/sec.

2. Create Signal:
   - signal = np.sin(2π * 3t)
   - This is a sine wave of frequency 3 Hz.
   - Because Fs = 8, the Nyquist frequency = 4 Hz (we can represent up to 4 Hz without aliasing).

3. Perform FFT:
   - fft_signal = fftpack.fft(signal)
   - FFT converts the time-domain sine wave into frequency-domain representation.

4. Expected Result:
   - For a pure 3 Hz sine wave, the FFT should show peaks at:
     +3 Hz → Positive frequency
     -3 Hz → Negative frequency (conjugate symmetry in FFT)
   - Other frequency bins ≈ 0 (no contribution).

5. Example Calculation (approximate values after rounding):
   Signal (time-domain) → [0.00, 0.97, 0.71, -0.71, -1.00, -0.71, 0.71, 0.97]
   FFT (frequency-domain) → [0.00+0.j, 0.00+0.j, 0.00+0.j, 0.00-4.j, 0.00+0.j, 0.00+4.j, 0.00+0.j, 0.00+0.j]

   - At index 3 → -4j  → represents 3 Hz
   - At index 5 → +4j  → represents -3 Hz
   - All other values are 0 (no frequencies).

6. Conclusion:
   - The FFT shows strong frequency components at ±3 Hz, 
     confirming that the signal is a pure 3 Hz sine wave.
"""`}</code></pre>
              </div>
            </section>

            <section id="optimize" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bullseye"></i> Optimization (scipy.optimize)</h2>
              <div className="property-card">
                <p><strong>Definition</strong></p>
                <ul>
                  <li>scipy.optimize is used for <strong>mathematical optimization</strong> and <strong>root finding</strong>.</li>
                  <li>It provides functions to:
                    <ul>
                      <li>Find roots of equations</li>
                      <li>Find minimum/maximum values of functions</li>
                      <li>Curve fitting & Least squares</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">1. Root Finding (root)</h3>
                <p>Solve equation \( f(x)=0 \).</p>
                <pre><code>{`from scipy import optimize

func = lambda x: x**2 - 4
root = optimize.root(func, x0=1)  # initial guess = 1
print("Root:", root.x)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Root: [2.]
                </div>
                <pre><code>{`"""
Problem:
Find the root of f(x) = x^2 - 4

Step 1: Function
f(x) = x^2 - 4

Step 2: Solve algebraically
x^2 - 4 = 0
x^2 = 4
x = ±2
So, the possible roots are -2 and +2.

Step 3: Numerical method (optimize.root)
- We give an initial guess (x0).
- The algorithm iteratively adjusts x until f(x) ≈ 0.

Case 1: Initial guess x0 = 1
Start near 1 → closer to +2
The algorithm converges to root = 2

Case 2: Initial guess x0 = -1
Start near -1 → closer to -2
The algorithm converges to root = -2

Final Answer:
If x0 = 1 → Root found = 2
If x0 = -1 → Root found = -2
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Root Finding (fsolve)</h3>
                <p>Another method to find solutions of equations.</p>
                <pre><code>{`from scipy.optimize import fsolve

func = lambda x: x**3 - 6*x**2 + 11*x - 6
root = fsolve(func, [1, 2, 3])  # guesses near roots
print("Roots:", root)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Roots: [1. 2. 3.]
                </div>
                <pre><code>{`"""
Problem:
Find the roots of f(x) = x^3 - 6x^2 + 11x - 6

Step 1: Function
f(x) = x^3 - 6x^2 + 11x - 6

Step 2: Solve algebraically
Factorize:
x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3)
So, the roots are x = 1, 2, 3

Step 3: Numerical method (fsolve)
- We provide initial guesses near possible roots.
- fsolve refines these guesses until f(x) ≈ 0.

Given guesses = [1, 2, 3]
→ Near 1 → converges to root = 1
→ Near 2 → converges to root = 2
→ Near 3 → converges to root = 3

Final Answer:
Roots found = [1, 2, 3]
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Minimization (minimize)</h3>
                <p>Find the minimum of a function.</p>
                <pre><code>{`from scipy.optimize import minimize

func = lambda x: x**2 + 3*x + 2
res = minimize(func, x0=0) # initial guess = 0

print("Minimum at x =", res.x)
print("Minimum value =", res.fun)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong><br />
                  Minimum at x = [-1.5]<br />
                  Minimum value = -0.25
                </div>
                <pre><code>{`"""
Problem:
Find the minimum of f(x) = x^2 + 3x + 2

Step 1: Function
f(x) = x^2 + 3x + 2

Step 2: Solve algebraically
This is a quadratic function in standard form ax^2 + bx + c
Here, a = 1, b = 3, c = 2

The vertex of a parabola gives the minimum (since a > 0).
Formula: x = -b / (2a)
x = -3 / (2*1) = -1.5

At x = -1.5:
f(-1.5) = (-1.5)^2 + 3*(-1.5) + 2
         = 2.25 - 4.5 + 2
         = -0.25

So the minimum value is -0.25 at x = -1.5

Step 3: Numerical method (minimize)
- Start with initial guess x0 = 0
- Algorithm moves towards x = -1.5
- Converges to the minimum point

Final Answer:
Minimum at x = -1.5
Minimum value = -0.25
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Curve Fitting (curve_fit)</h3>
                <p>Fit a function to given data points.</p>
                <pre><code>{`import numpy as np
from scipy.optimize import curve_fit

# Define model: y = a*x + b
def model(x, a, b):
    return a*x + b

x = np.array([0, 1, 2, 3, 4])
y = np.array([1, 3, 5, 7, 9])

params, _ = curve_fit(model, x, y)
print("a =", params[0], "b =", params[1])`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> a = 2.0  b = 1.0
                </div>
                <pre><code>{`"""
Problem:
Fit the model y = a*x + b to the given data points.

Step 1: Model Definition
Model: y = a*x + b
Unknown parameters: a (slope), b (intercept)

Step 2: Data
x = [0, 1, 2, 3, 4]
y = [1, 3, 5, 7, 9]

Step 3: Observation
Looking at the data:
When x = 0 → y = 1  (suggests intercept b = 1)
When x increases by 1 → y increases by 2 (suggests slope a = 2)

So expected model: y = 2x + 1

Step 4: Numerical method (curve_fit)
- curve_fit tries to find best-fit values of a and b.
- It minimizes the squared error between actual y and predicted y.

Result:
a ≈ 2.0
b ≈ 1.0

Final Answer:
Equation of best-fit line: y = 2x + 1
"""`}</code></pre>
              </div>
            </section>

            <section id="integrate" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> Integration (scipy.integrate)</h2>
              <div className="property-card">
                <p><strong>Definition</strong></p>
                <ul>
                  <li>scipy.integrate provides functions for numerical integration (finding area under curve) and solving ordinary differential equations (ODEs).</li>
                  <li>Supports:
                    <ul>
                      <li>Single integration (quad)</li>
                      <li>Double / Multiple integration (dblquad, nquad)</li>
                      <li>ODE solvers (odeint)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">1. Single Integration (quad)</h3>
                <p>Integrate \( f(x) = x^2 \) from 0 to 2.</p>
                <pre><code>{`from scipy import integrate

result, error = integrate.quad(lambda x: x**2, 0, 2)
print("Integration Result:", result)
print("Error Estimate:", error)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong><br />
                  Integration Result: 2.666666666666667<br />
                  Error Estimate: 2.96e-14
                </div>
                <pre><code>{`"""
Problem:
Evaluate the definite integral of f(x) = x^2 over the interval [0, 2]

Step 1: Function
f(x) = x^2

Step 2: Integration setup
We need to compute:
∫(from 0 to 2) x^2 dx

Step 3: Solve analytically
∫ x^2 dx = (x^3) / 3

Apply limits 0 to 2:
= (2^3 / 3) - (0^3 / 3)
= (8 / 3) - 0
= 8/3 ≈ 2.6667

Step 4: Numerical method (integrate.quad)
- integrate.quad uses numerical integration.
- It approximates the area under the curve.
- It also provides an error estimate.

Final Answer:
Integration Result = 2.6667 (≈ 8/3)
Error Estimate ≈ very small (close to 0)
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Double Integration (dblquad)</h3>
                <p>Solve \[ \int_0^2 \int_0^1 x \cdot y \, dx \, dy \]</p>
                <pre><code>{`from scipy import integrate

result, error = integrate.dblquad(lambda x, y: x*y, 0, 1, lambda x: 0, lambda x: 2)
print("Double Integration Result:", result)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Double Integration Result: 1.0
                </div>
                <pre><code>{`"""
Problem:
Evaluate the double integral of f(x, y) = x * y
over the region: x ∈ [0, 1], y ∈ [0, 2]

Step 1: Function
f(x, y) = x * y

Step 2: Integration setup
We need to compute:
∬ x*y dy dx
with limits:
x from 0 to 1
y from 0 to 2

Step 3: Inner integral (with respect to y)
∫(from y=0 to 2) x*y dy
= x * [y^2 / 2] from 0 to 2
= x * ( (2^2)/2 - (0^2)/2 )
= x * (4/2 - 0)
= 2x

Step 4: Outer integral (with respect to x)
∫(from x=0 to 1) 2x dx
= [x^2] from 0 to 1
= (1^2 - 0^2)
= 1

Step 5: Numerical method (integrate.dblquad)
- The function integrates over y first, then x.
- Confirms the same result as manual calculation.

Final Answer:
Double Integration Result = 1.0
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Triple Integration (nquad)</h3>
                <p>Solve \[ \int_{0}^{1} \int_{0}^{1} \int_{0}^{1} x \cdot y \cdot z \, dx \, dy \, dz \]</p>
                <pre><code>{`from scipy import integrate

result, error = integrate.nquad(lambda x, y, z: x*y*z, [[0, 1], [0, 1], [0, 1]])
print("Triple Integration Result:", result)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Triple Integration Result: 0.125
                </div>
                <pre><code>{`"""
Problem:
Evaluate the triple integral of f(x, y, z) = x * y * z
over the cube region: x ∈ [0, 1], y ∈ [0, 1], z ∈ [0, 1]

Step 1: Function
f(x, y, z) = x * y * z

Step 2: Integration setup
We need to compute:
∭ x*y*z dz dy dx
with limits:
x from 0 to 1
y from 0 to 1
z from 0 to 1

Step 3: Integrate with respect to z
∫(from z=0 to 1) x*y*z dz
= x*y * [z^2 / 2] from 0 to 1
= x*y * (1/2 - 0)
= (x*y)/2

Step 4: Integrate with respect to y
∫(from y=0 to 1) (x*y)/2 dy
= (x/2) * [y^2 / 2] from 0 to 1
= (x/2) * (1/2 - 0)
= x/4

Step 5: Integrate with respect to x
∫(from x=0 to 1) x/4 dx
= (1/4) * [x^2 / 2] from 0 to 1
= (1/4) * (1/2 - 0)
= 1/8 = 0.125

Step 6: Numerical method (integrate.nquad)
- Performs nested integration over z, then y, then x.
- Confirms the same result as manual calculation.

Final Answer:
Triple Integration Result = 0.125
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Solving Differential Equations (odeint)</h3>
                <p>Solve ODE: dy/dt=-y, y(0)=1</p>
                <pre><code>{`import numpy as np
from scipy.integrate import odeint

def model(y, t):
    return -y  # dy/dt = -y

t = np.linspace(0, 5, 6)  # time points
y0 = 1    # initial condition

y = odeint(model, y0, t)
print("Solution:", y.flatten())`}</code></pre>
                <div className="output">
                  <strong>Output:</strong><br />
                  Solution: [1.    0.60653066 0.36787944 0.22313016 0.13533528 0.082085 ]
                </div>
                <pre><code>{`"""
Problem:
Solve the differential equation dy/dt = -y
with initial condition y(0) = 1, over t = [0, 5]

Step 1: Differential Equation
dy/dt = -y

Step 2: Analytical Solution
This is a first-order linear ODE.
General solution: y(t) = C * e^(-t)
Using initial condition y(0) = 1:
1 = C * e^(0) → C = 1
So, y(t) = e^(-t)

Step 3: Time Points
t = [0, 1, 2, 3, 4, 5]

Step 4: Evaluate solution
y(0) = e^0      = 1.0000
y(1) = e^(-1)   ≈ 0.3679
y(2) = e^(-2)   ≈ 0.1353
y(3) = e^(-3)   ≈ 0.0498
y(4) = e^(-4)   ≈ 0.0183
y(5) = e^(-5)   ≈ 0.0067

Step 5: Numerical method (odeint)
- odeint solves the ODE numerically.
- The results match the analytical solution.

Final Answer:
Solution = [1.0, 0.3679, 0.1353, 0.0498, 0.0183, 0.0067]

"""`}</code></pre>
              </div>
            </section>

            <section id="interpolate" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bar-chart-line"></i> Interpolation (scipy.interpolate)</h2>
              <div className="property-card">
                <p><strong>Definition</strong></p>
                <ul>
                  <li><strong>Interpolation</strong> is the process of estimating unknown values between known data points.</li>
                  <li>scipy.interpolate provides different methods for interpolation:
                    <ul>
                      <li><strong>interp1d</strong> → 1D interpolation (linear, quadratic, cubic)</li>
                      <li><strong>interp2d</strong> → 2D interpolation (for surfaces/grids)</li>
                      <li><strong>BarycentricInterpolator / KroghInterpolator</strong> → Polynomial interpolation</li>
                      <li><strong>UnivariateSpline</strong> → Spline interpolation (smooth curve fitting)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">1. 1D Linear Interpolation (interp1d)</h3>
                <p>Estimate value between given data points.</p>
                <pre><code>{`import numpy as np
from scipy import interpolate

x = np.array([0, 1, 2, 3])
y = np.array([0, 1, 4, 9])

f = interpolate.interp1d(x, y, kind='linear')
print("Value at 1.5:", f(1.5))`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Value at 1.5: 2.5
                </div>
                <pre><code>{`"""
Problem:
Use interpolation to estimate the value of f(x) given data points.

Step 1: Data
x = [0, 1, 2, 3]
y = [0, 1, 4, 9]
This corresponds to points: (0,0), (1,1), (2,4), (3,9)

Step 2: Interpolation type
We are using linear interpolation (straight line between two nearest points).

Step 3: Find interval
We need f(1.5).
1.5 lies between x = 1 (y=1) and x = 2 (y=4).

Step 4: Linear interpolation formula
y = y1 + ( (x - x1) / (x2 - x1) ) * (y2 - y1)

Here:
x1 = 1, y1 = 1
x2 = 2, y2 = 4
x = 1.5

y = 1 + ( (1.5 - 1) / (2 - 1) ) * (4 - 1)
y = 1 + (0.5 / 1) * 3
y = 1 + 1.5
y = 2.5

Step 5: Numerical method (interp1d)
- interp1d constructs a linear function between data points.
- Evaluating at 1.5 gives the same result.

Final Answer:
Value at 1.5 = 2.5
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. 1D Cubic Interpolation</h3>
                <p>Produces a smooth curve between data points.</p>
                <pre><code>{`f_cubic = interpolate.interp1d(x, y, kind='cubic')
print("Value at 1.5 (Cubic):", f_cubic(1.5))`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Value at 1.5 (Cubic): 3.375
                </div>
                <pre><code>{`"""
Problem:
Use cubic interpolation to estimate the value of f(x) given data points.

Step 1: Data
x = [0, 1, 2, 3]
y = [0, 1, 4, 9]
This represents points from the parabola y = x^2.

Step 2: Interpolation type
We are using cubic interpolation (a smooth cubic polynomial that passes through all data points).

Step 3: Target
We need f(1.5).
True function (y = x^2) gives:
f(1.5) = (1.5)^2 = 2.25

Step 4: Cubic interpolation behavior
- Unlike linear interpolation (straight line), cubic interpolation fits a smooth curve.
- Since our original data already comes from a quadratic function, cubic interpolation reconstructs it exactly.

Step 5: Evaluation
f_cubic(1.5) = 2.25

Step 6: Comparison
- Linear interpolation gave f(1.5) = 2.5 (approximation).
- Cubic interpolation gives f(1.5) = 2.25 (exact match to y = x^2).

Final Answer:
Value at 1.5 (Cubic) = 2.25
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. 2D Interpolation (interp2d)</h3>
                <p>Works with 2D data (like surfaces).</p>
                <pre><code>{`x = np.arange(0, 5)
y = np.arange(0, 5)
z = np.array([[i*j for i in x] for j in y])

f2d = interpolate.interp2d(x, y, z, kind='linear')
print("Value at (2.5, 2.5):", f2d(2.5, 2.5))`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Not Supported in latest version.
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Spline Interpolation (UnivariateSpline)</h3>
                <p>Smooth curve fitting through data points.</p>
                <pre><code>{`x = np.linspace(0, 10, 10)
y = np.sin(x)

spline = interpolate.UnivariateSpline(x, y)
print("Spline at 5.5:", spline(5.5))`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Spline at 5.5: -0.7055403255703919
                </div>
                <pre><code>{`"""
Problem:
Use spline interpolation to estimate the value of f(x) = sin(x) given discrete data points.

Step 1: Data
x = [0, 1.11, 2.22, ..., 10]  (10 equally spaced points)
y = sin(x) corresponding to each x

Step 2: Interpolation type
We are using UnivariateSpline:
- Fits a smooth spline curve through the data points.
- Minimizes curvature while passing near the points.
- Produces smooth derivatives unlike linear or simple polynomial interpolation.

Step 3: Target
We need spline(5.5) → approximate value of sin(5.5)

Step 4: Evaluation
- The spline function constructs a smooth curve from the discrete data.
- Evaluating at 5.5 gives an interpolated value close to sin(5.5)

Step 5: Comparison
- True value: sin(5.5) ≈ 0.05248
- Spline approximation is very close, depending on smoothing (default s=0 gives exact fit at points).

Final Answer:
Spline at 5.5 ≈ 0.05248
"""`}</code></pre>
              </div>
            </section>

            <section id="stats" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-percent"></i> Statistics (scipy.stats)</h2>
              <div className="property-card">
                <p><strong>Definition</strong></p>
                <ul>
                  <li>scipy.stats is a statistical functions module in SciPy.</li>
                  <li>It includes:
                    <ul>
                      <li><strong>Descriptive Statistics</strong> (mean, variance, standard deviation, skewness, kurtosis)</li>
                      <li><strong>Probability Distributions</strong> (normal, binomial, uniform, etc.)</li>
                      <li><strong>Random Variables (rvs)</strong> → generating random samples</li>
                      <li><strong>Hypothesis Testing</strong> (t-test, chi-square test, KS test, etc.)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">1. Descriptive Statistics</h3>
                <p>Calculate mean, variance, skewness, and kurtosis.</p>
                <pre><code>{`import numpy as np
from scipy import stats

data = np.array([2, 4, 6, 8, 10])

print("Mean:", np.mean(data))
print("Variance:", np.var(data))
print("Skewness:", stats.skew(data))
print("Kurtosis:", stats.kurtosis(data))`}</code></pre>
                <div className="output">
                  <strong>Output:</strong><br />
                  Mean: 6.0<br />
                  Variance: 8.0<br />
                  Skewness: 0.0<br />
                  Kurtosis: -1.3
                </div>
                <pre><code>{`"""
Problem:
Compute statistical measures (mean, variance, skewness, kurtosis) for the dataset:
data = [2, 4, 6, 8, 10]

Step 1: Mean
Mean = sum(data) / n
= (2 + 4 + 6 + 8 + 10) / 5
= 30 / 5
= 6

Step 2: Variance
Variance = average of squared deviations from mean
= [(2-6)^2 + (4-6)^2 + (6-6)^2 + (8-6)^2 + (10-6)^2] / 5
= [16 + 4 + 0 + 4 + 16] / 5
= 40 / 5
= 8

Step 3: Skewness
Skewness measures asymmetry:
- For symmetric data around mean, skewness ≈ 0
- Here, data is symmetric → Skewness = 0

Step 4: Kurtosis
Kurtosis measures "tailedness" relative to normal distribution:
- For normal distribution, kurtosis ≈ 0 (Fisher’s definition)
- Data is uniformly spread → Negative kurtosis (flat-topped)

Step 5: Numerical computation
Using numpy and scipy.stats:
- Mean = 6
- Variance = 8
- Skewness = 0
- Kurtosis ≈ -1.3 (flat distribution)

Final Answer:
Mean = 6
Variance = 8
Skewness = 0
Kurtosis ≈ -1.3
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Probability Distributions</h3>
                <p>Generate random values from a distribution.</p>
                <pre><code>{`# Normal Distribution (mean=0, std=1)
normal_sample = stats.norm.rvs(size=5)
print("Normal Distribution Sample:", normal_sample)

# Uniform Distribution
uniform_sample = stats.uniform.rvs(size=5)
print("Uniform Distribution Sample:", uniform_sample)`}</code></pre>
                <div className="output">
                  <strong>Sample Output:</strong><br />
                  Normal Distribution Sample: [-0.53 0.11 1.29 -0.77 0.45]<br />
                  Uniform Distribution Sample: [0.21 0.86 0.13 0.67 0.92]
                </div>
                <pre><code>{`"""
Problem:
Generate random samples from common probability distributions using scipy.stats.

Step 1: Normal Distribution
- Distribution: Normal (Gaussian)
- Parameters: mean = 0, standard deviation = 1
- Sample size: 5
- Method: stats.norm.rvs(size=5)

Explanation:
- Each value is drawn randomly from a normal distribution.
- The values fluctuate around mean = 0.
- Example output might be: [0.3, -1.2, 0.5, 1.1, -0.8] (varies every run)

Step 2: Uniform Distribution
- Distribution: Uniform (continuous)
- Parameters: default range [0, 1]
- Sample size: 5
- Method: stats.uniform.rvs(size=5)

Explanation:
- Each value is equally likely within [0, 1].
- Example output might be: [0.12, 0.87, 0.45, 0.69, 0.03] (varies every run)

Step 3: Purpose
- Random sampling is useful for simulations, bootstrapping, and probabilistic modeling.

Final Answer:
Normal Distribution Sample → 5 random values around 0
Uniform Distribution Sample → 5 random values between 0 and 1
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Hypothesis Testing – One-sample t-test</h3>
                <p>Test if mean of sample = population mean.</p>
                <pre><code>{`data = [2, 4, 6, 8, 10]
t_stat, p_value = stats.ttest_1samp(data, 5)
print("T-Statistic:", t_stat)
print("P-Value:", p_value)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong><br />
                  T-Statistic: 0.7071067811865475<br />
                  P-Value: 0.519652
                </div>
                <pre><code>{`"""
Problem:
Perform a one-sample t-test to check if the mean of the dataset
data = [2, 4, 6, 8, 10] is significantly different from μ0 = 5

Step 1: Compute sample mean
Mean = (2 + 4 + 6 + 8 + 10) / 5 = 30 / 5 = 6

Step 2: Compute sample standard deviation
Deviations from mean: [-4, -2, 0, 2, 4]
Squared deviations: [16, 4, 0, 4, 16]
Variance = sum(squared deviations) / (n-1) = 40 / 4 = 10
Standard deviation = sqrt(10) ≈ 3.1623

Step 3: Compute t-statistic
t = (sample mean - μ0) / (s / sqrt(n))
= (6 - 5) / (3.1623 / sqrt(5))
= 1 / (3.1623 / 2.2361)
= 1 / 1.4142 ≈ 0.707

Step 4: P-value
- P-value measures probability of observing t-statistic under H0
- Using two-tailed test, p ≈ 0.519

Step 5: Interpretation
- Since p > 0.05, we do not reject H0
- The mean of data is not significantly different from 5

Final Answer:
T-Statistic ≈ 0.707
P-Value ≈ 0.519
"""`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Chi-Square Test</h3>
                <p>Goodness of fit test.</p>
                <pre><code>{`obs = [50, 30, 20]
exp = [40, 40, 20]

chi2, p = stats.chisquare(obs, f_exp=exp)
print("Chi-square Statistic:", chi2)
print("P-Value:", p)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong><br />
                  Chi-square Statistic: 5.0<br />
                  P-Value: 0.082085
                </div>
                <pre><code>{`"""
Problem:
Perform a Chi-square goodness-of-fit test to compare observed and expected frequencies.

Step 1: Data
Observed frequencies: obs = [50, 30, 20]
Expected frequencies: exp = [40, 40, 20]

Step 2: Compute Chi-square statistic
Formula: χ² = Σ ((O - E)² / E)
- For category 1: (50 - 40)² / 40 = 100 / 40 = 2.5
- For category 2: (30 - 40)² / 40 = 100 / 40 = 2.5
- For category 3: (20 - 20)² / 20 = 0 / 20 = 0
Sum: 2.5 + 2.5 + 0 = 5.0

Step 3: Compute P-value
- Degrees of freedom = number of categories - 1 = 3 - 1 = 2
- P-value ≈ 0.082 (using Chi-square distribution table)

Step 4: Interpretation
- P-value > 0.05 → fail to reject null hypothesis
- Observed frequencies do not significantly differ from expected frequencies

Final Answer:
Chi-square Statistic = 5.0
P-Value ≈ 0.082
"""`}</code></pre>
              </div>
            </section>

            <section id="constants" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-infinity"></i> Constants (scipy.constants)</h2>
              <div className="property-card">
                <p><strong>Definition</strong></p>
                <p>scipy.constants module provides mathematical constants and physical constants (SI units, speed of light, Planck's constant, etc.) that are widely used in scientific calculations.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">1. Mathematical constants</h3>
                <ul>
                  <li>pi → 3.14159...</li>
                  <li>e → 2.71828...</li>
                  <li>golden → Golden ratio (1.618...)</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Physical constants</h3>
                <ul>
                  <li>c → Speed of light in vacuum (m/s)</li>
                  <li>h → Planck's constant (Joule: seconds)</li>
                  <li>G → Gravitational constant (m³/kg/s²)</li>
                  <li>Boltzmann → Boltzmann constant (Joule/Kelvin)</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Example Code</h3>
                <pre><code>{`from scipy import constants

# Mathematical constants
print("Pi:", constants.pi)
print("Euler's number (e):", constants.e)
print("Golden Ratio:", constants.golden)

# Physical constants
print("Speed of light (m/s):", constants.c)
print("Planck's constant:", constants.h)
print("Gravitational constant:", constants.G)
print("Boltzmann constant:", constants.Boltzmann)`}</code></pre>
                <div className="output">
                  <strong>Expected Output</strong><br />
                  Pi: 3.141592653589793<br />
                  Euler's number (e): 2.718281828459045<br />
                  Golden Ratio: 1.618033988749895<br />
                  Speed of light (m/s): 299792458.0<br />
                  Planck's constant: 6.62607015e-34<br />
                  Gravitational constant: 6.6743e-11<br />
                  Boltzmann constant: 1.380649e-23
                </div>
              </div>
            </section>

            <section id="io" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-binary"></i> Input/Output (scipy.io)</h2>
              <div className="property-card">
                <p><strong>Definition</strong></p>
                <p>scipy.io module is used for <strong>reading and writing data files</strong> in different formats, such as <strong>MATLAB</strong>.mat files and <strong>WAV audio files</strong>.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">1. Reading/Writing MATLAB .mat files</h3>
                <ul>
                  <li>savemat() → Save Python dictionary as .mat file</li>
                  <li>loadmat() → Load MATLAB .mat file into Python</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Reading/Writing WAV files</h3>
                <ul>
                  <li>wavfile.read() → Read a WAV audio file</li>
                  <li>wavfile.write() → Write data to a WAV file</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Example Code (MATLAB .mat)</h3>
                <pre><code>{`from scipy.io import savemat, loadmat

# Save data into .mat file
data = {"x": [1, 2, 3], "y": [4, 5, 6]}
savemat("data.mat", data)

# Load data from .mat file
mat_data = loadmat("data.mat")
print("Loaded data:", mat_data)`}</code></pre>
                <p>This will create data.mat and load it back.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">Example Code (WAV File)</h3>
                <pre><code>{`from scipy.io import wavfile
import numpy as np

# Create a sample WAV file (sine wave)
rate = 44100 # Sampling rate
t = np.linspace(0., 1., rate)
signal = np.sin(2 * np.pi * 440 * t) # 440Hz tone

# Save as WAV
wavfile.write("tone.wav", rate, signal.astype(np.float32))

# Read the WAV file
sr, data = wavfile.read("tone.wav")
print("Sample rate:", sr)
print("Data shape:", data.shape)`}</code></pre>
                <div className="output">
                  <strong>Expected Output</strong><br />
                  Sample rate: 44100<br />
                  Data shape: (44100,)
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>SciPy Notes &copy; 2025 | Scientific Computing with Python</p>
        </div>
      </footer>
    </div>
  );
}

export default ScipyNotes;