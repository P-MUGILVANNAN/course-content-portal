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
          .example-box {
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
          <h1 className="display-4 fw-bold"><i className="bi bi-calculator"></i> SciPy Notes</h1>
          <p className="lead">Your Comprehensive Guide to Scientific Computing with Python</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> What is SciPy?</a>
              <a className="nav-link" href="#installation"><i className="bi bi-download"></i> Installation</a>
              <a className="nav-link" href="#constants"><i className="bi bi-123"></i> Constants</a>
              <a className="nav-link" href="#optimizers"><i className="bi bi-graph-up"></i> Optimizers</a>
              <a className="nav-link" href="#sparse"><i className="bi bi-grid-3x3"></i> Sparse Data</a>
              <a className="nav-link" href="#units"><i className="bi bi-rulers"></i> Unit Categories</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is SciPy?</h2>
              <div className="property-card">
                <ul>
                  <li>SciPy is a scientific computation library that uses NumPy underneath</li>
                  <li>SciPy stands for Scientific Python</li>
                  <li>It provides more utility functions for optimization, stats and signal processing</li>
                  <li>Like NumPy, SciPy is open source so we can use it freely</li>
                  <li>SciPy was created by NumPy's creator Travis Olliphant</li>
                </ul>
              </div>

              <h3 className="h3 mt-4 mb-3">Why Use SciPy?</h3>
              <div className="property-card">
                <p>If SciPy uses NumPy underneath, why can we not just use NumPy?</p>
                <p>SciPy has optimized and added functions that are frequently used in NumPy and Data Science.</p>
              </div>
            </section>

            <section id="installation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-download"></i> Installation of SciPy</h2>
              <div className="property-card">
                <p>If you have Python and PIP already installed on a system, then installation of SciPy is very easy.</p>
                
                <h4 className="h4 mt-3">Installation Command:</h4>
                <pre className="mb-3"><code>{`C:\\Users\\Your Name>pip install scipy`}</code></pre>
                
                <h4 className="h4 mt-3">Importing SciPy:</h4>
                <p>Once SciPy is installed, import the SciPy module(s) you want to use in your applications:</p>
                <pre className="mb-3"><code>{`from scipy import constants`}</code></pre>
                
                <h4 className="h4 mt-3">Checking SciPy Version:</h4>
                <p>The version string is stored under the __version__ attribute.</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`import scipy\n\nprint(scipy.__version__)`}</code></pre>
                </div>
              </div>
            </section>

            <section id="constants" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-123"></i> Constants in SciPy</h2>
              <div className="property-card">
                <p>As SciPy is more focused on scientific implementations, it provides many built-in scientific constants. These constants can be helpful when you are working with Data Science.</p>
                
                <div className="example-box">
                  <h4>Example: Print the constant value of PI</h4>
                  <pre><code>{`from scipy import constants\n\nprint(constants.pi)`}</code></pre>
                </div>
                
                <h4 className="h4 mt-3">Listing All Constants:</h4>
                <p>A list of all units under the constants module can be seen using the dir() function.</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(dir(constants))`}</code></pre>
                </div>
              </div>
            </section>

            <section id="units" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-rulers"></i> Unit Categories</h2>
              <div className="property-card">
                <p>The units are placed under these categories:</p>
                <ul>
                  <li>Metric</li>
                  <li>Binary</li>
                  <li>Mass</li>
                  <li>Angle</li>
                  <li>Time</li>
                  <li>Length</li>
                  <li>Pressure</li>
                  <li>Volume</li>
                  <li>Speed</li>
                  <li>Temperature</li>
                  <li>Energy</li>
                  <li>Power</li>
                  <li>Force</li>
                </ul>
              </div>

              <h3 className="h3 mt-4">Metric (SI) Prefixes</h3>
              <div className="property-card">
                <p>Return the specified unit in meter (e.g. centi returns 0.01)</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(constants.yotta)    #1e+24
print(constants.zetta)    #1e+21
print(constants.exa)      #1e+18
print(constants.peta)     #1000000000000000.0
print(constants.tera)     #1000000000000.0
print(constants.giga)     #1000000000.0
print(constants.mega)     #1000000.0
print(constants.kilo)     #1000.0
print(constants.hecto)    #100.0
print(constants.deka)     #10.0
print(constants.deci)     #0.1
print(constants.centi)    #0.01
print(constants.milli)    #0.001
print(constants.micro)    #1e-06
print(constants.nano)     #1e-09
print(constants.pico)     #1e-12`}</code></pre>
                </div>
              </div>

              <h3 className="h3 mt-4">Binary Prefixes</h3>
              <div className="property-card">
                <p>Return the specified unit in bytes (e.g. kibi returns 1024)</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(constants.kibi)    #1024
print(constants.mebi)    #1048576
print(constants.gibi)    #1073741824
print(constants.tebi)    #1099511627776
print(constants.pebi)    #1125899906842624
print(constants.exbi)    #1152921504606846976
print(constants.zebi)    #1180591620717411303424
print(constants.yobi)    #1208925819614629174706176`}</code></pre>
                </div>
              </div>

              <h3 className="h3 mt-4">Mass</h3>
              <div className="property-card">
                <p>Return the specified unit in kg (e.g. gram returns 0.001)</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(constants.gram)        #0.001
print(constants.metric_ton)  #1000.0
print(constants.grain)       #6.479891e-05
print(constants.lb)          #0.45359236999999997
print(constants.pound)       #0.45359236999999997`}</code></pre>
                </div>
              </div>

              <h3 className="h3 mt-4">Angle</h3>
              <div className="property-card">
                <p>Return the specified unit in radians (e.g. degree returns 0.017453292519943295)</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(constants.degree)`}</code></pre>
                </div>
              </div>

              <h3 className="h3 mt-4">Time</h3>
              <div className="property-card">
                <p>Return the specified unit in seconds (e.g. hour returns 3600.0)</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(constants.minute)      #60.0
print(constants.hour)        #3600.0
print(constants.day)         #86400.0
print(constants.week)        #604800.0
print(constants.year)        #31536000.0
print(constants.Julian_year) #31557600.0`}</code></pre>
                </div>
              </div>

              <h3 className="h3 mt-4">Length</h3>
              <div className="property-card">
                <p>Return the specified unit in meters</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(constants.inch)        #0.0254
print(constants.foot)       #0.30479999999999996
print(constants.yard)       #0.91439999999999999
print(constants.mile)       #1609.3439999999998
print(constants.mil)        #2.539999999999997e-05
print(constants.pt)         #0.000352777777777776
print(constants.point)      #0.000352777777777776
print(constants.nautical_mile) #1852.0`}</code></pre>
                </div>
              </div>

              <h3 className="h3 mt-4">Pressure</h3>
              <div className="property-card">
                <p>Return the specified unit in pascals (e.g. psi returns 6894.757293168361)</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(constants.atm)         #101325.0
print(constants.atmosphere)  #101325.0
print(constants.psi)         #6894.757293168361`}</code></pre>
                </div>
              </div>

              <h3 className="h3 mt-4">Area</h3>
              <div className="property-card">
                <p>Return the specified unit in square meters (e.g. hectare returns 10000.0)</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(constants.hectare)     #10000.0
print(constants.acre)        #4046.8564223999992`}</code></pre>
                </div>
              </div>

              <h3 className="h3 mt-4">Volume</h3>
              <div className="property-card">
                <p>Return the specified unit in cubic meters (e.g. liter returns 0.001)</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(constants.liter)       #0.001
print(constants.litre)       #0.001
print(constants.gallon)      #0.0037854117839999997`}</code></pre>
                </div>
              </div>

              <h3 className="h3 mt-4">Speed</h3>
              <div className="property-card">
                <p>Return the specified unit in meters per second (e.g. speed_of_sound returns 340.5)</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(constants.kmh)         #0.277777777777778
print(constants.mph)         #0.44703999999999994
print(constants.mach)        #340.5
print(constants.speed_of_sound) #340.5`}</code></pre>
                </div>
              </div>

              <h3 className="h3 mt-4">Temperature</h3>
              <div className="property-card">
                <p>Return the specified unit in Kelvin (e.g. zero_Celsius returns 273.15)</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(constants.zero_Celsius)     #273.15
print(constants.degree_Fahrenheit) #0.555555555555556`}</code></pre>
                </div>
              </div>

              <h3 className="h3 mt-4">Energy</h3>
              <div className="property-card">
                <p>Return the specified unit in joules (e.g. calorie returns 4.184)</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(constants.eV)           #1.6021766208e-19
print(constants.electron_volt) #1.6021766208e-19
print(constants.calorie)       #4.184
print(constants.calorie_th)    #4.184
print(constants.calorie_IT)    #4.1868`}</code></pre>
                </div>
              </div>

              <h3 className="h3 mt-4">Power</h3>
              <div className="property-card">
                <p>Return the specified unit in watts (e.g. horsepower returns 745.6998715822701)</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`from scipy import constants\n\nprint(constants.hp)           #745.6998715822701
print(constants.horsepower)    #745.6998715822701`}</code></pre>
                </div>
              </div>
            </section>

            <section id="optimizers" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-graph-up"></i> Optimizers in SciPy</h2>
              <div className="property-card">
                <p>Optimizers are a set of procedures defined in SciPy that either find the minimum value of a function, or the root of an equation.</p>
                
                <h4 className="h4 mt-3">Optimizing Functions:</h4>
                <p>Essentially, all of the algorithms in Machine Learning are nothing more than a complex equation that needs to be minimized with the help of given data.</p>
                
                <h4 className="h4 mt-3">Roots of an Equation:</h4>
                <p>NumPy is capable of finding roots for polynomials and linear equations, but it can not find roots for non linear equations, like this one:</p>
                <p className="text-center">x + cos(x)</p>
                <p>For that you can use SciPy's optimize.root function.</p>
                
                <h4 className="h4 mt-3">Using optimize.root:</h4>
                <p>This function takes two required arguments:</p>
                <ul>
                  <li><strong>fun</strong> - a function representing an equation</li>
                  <li><strong>x0</strong> - an initial guess for the root</li>
                </ul>
                <p>The function returns an object with information regarding the solution. The actual solution is given under attribute x of the returned object.</p>
                
                <div className="example-box">
                  <h5>Example: Find root of the equation x + cos(x)</h5>
                  <pre><code>{`from scipy.optimize import root
from math import cos

def eqn(x):
    return x + cos(x)

myroot = root(eqn, 0)

print(myroot.x)`}</code></pre>
                </div>
              </div>
            </section>

            <section id="sparse" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-grid-3x3"></i> Sparse Data</h2>
              <div className="property-card">
                <h4 className="h4">What is Sparse Data?</h4>
                <p>Sparse data is data that has mostly unused elements (elements that don't carry any information).</p>
                
                <h4 className="h4 mt-3">How to Work with Sparse Data?</h4>
                <p>SciPy has a module, scipy.sparse that provides functions to deal with sparse data.</p>
                <p>There are primarily two types of sparse matrices that we use:</p>
                <ul>
                  <li><strong>CSC</strong> - Compressed Sparse Column. For efficient arithmetic, fast column slicing.</li>
                  <li><strong>CSR</strong> - Compressed Sparse Row. For fast row slicing, faster matrix vector products.</li>
                </ul>
                
                <div className="example-box">
                  <h5>Example: Create a CSR matrix from an array</h5>
                  <pre><code>{`import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([0, 0, 0, 0, 0, 1, 1, 0, 2])

print(csr_matrix(arr))`}</code></pre>
                  <p>Output:</p>
                  <pre><code>{`<Compressed Sparse Row sparse matrix of dtype 'int64'
with 3 stored elements and shape (1, 9)>`}</code></pre>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Coords</th>
                        <th>Values</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>(0, 5)</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>(0, 6)</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>(0, 8)</td>
                        <td>2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className="h4 mt-3">Sparse Matrix Methods:</h4>
                <p>Viewing stored data (not the zero items) with the data property:</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([[0, 0, 0], [0, 0, 1], [1, 0, 2]])

print(csr_matrix(arr).data)`}</code></pre>
                  <p>Output: <code>[1 1 2]</code></p>
                </div>
                
                <p>Counting nonzeros with the count_nonzero() method:</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([[0, 0, 0], [0, 0, 1], [1, 0, 2]])

print(csr_matrix(arr).count_nonzero())`}</code></pre>
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