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

# Solve x^2 - 4 = 0
func = lambda x: x**2 - 4
root = optimize.root(func, x0=0)
print("Root:", root.x)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Root: [2.]
                </div>
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
              </div>

              <div className="property-card">
                <h3 className="h4">2. Inverse of a Matrix</h3>
                <p>The inverse of a matrix A is a matrix \( A^{-1} \) such that \( A \times A^{-1} = I \).</p>
                <pre><code>{`import numpy as np
from scipy import linalg

A = np.array([[4, 7], [2, 6]])
inv_A = linalg.inv(A)
print("Inverse Matrix:\n", inv_A)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong><br />
                  Inverse Matrix:<br />
                  [[ 0.6 -0.7]<br />
                  [-0.2  0.4]]
                </div>
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
              </div>

              <div className="property-card">
                <h3 className="h4">4. Eigenvalues and Eigenvectors</h3>
                <p>Eigenvalues (\(\lambda\)) and eigenvectors (\(v\)) satisfy Av=\(\lambda v\).</p>
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
              </div>

              <div className="property-card">
                <h3 className="h4">5. LU Decomposition</h3>
                <p>Factorize a matrix into Lower (L) and Upper (U) triangular matrices.</p>
                <pre><code>{`import numpy as np
from scipy.linalg import lu

A = np.array([[3, 1, 6], [2, 1, 3], [1, 1, 1]])
P, L, U = lu(A)
print("Permutation Matrix:\n", P)
print("Lower Triangular Matrix:\n", L)
print("Upper Triangular Matrix:\n", U)`}</code></pre>
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
              </div>

              <div className="property-card">
                <h3 className="h4">2. Inverse Fourier Transform (IFFT)</h3>
                <p>Converts frequency domain back to time domain.</p>
                <pre><code>{`ifft_x = fftpack.ifft(fft_x)
print("Inverse FFT:", ifft_x)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Inverse FFT: [1.+0.j 2.+0.j 3.+0.j 4.+0.j]
                </div>
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
root = optimize.root(func, x0=0)  # initial guess = 0
print("Root:", root.x)`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Root: [2.]
                </div>
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
              </div>

              <div className="property-card">
                <h3 className="h4">2. 1D Cubic Interpolation</h3>
                <p>Produces a smooth curve between data points.</p>
                <pre><code>{`f_cubic = interpolate.interp1d(x, y, kind='cubic')
print("Value at 1.5 (Cubic):", f_cubic(1.5))`}</code></pre>
                <div className="output">
                  <strong>Output:</strong> Value at 1.5 (Cubic): 3.375
                </div>
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
                  <strong>Output:</strong> Value at (2.5, 2.5): [6.25]
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