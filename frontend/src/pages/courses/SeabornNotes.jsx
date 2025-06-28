import React from 'react';
import lineplot from '../../assets/seaborn/sns-lineplot.png'
import barplot from '../../assets/seaborn/sns-barplot.png'
import countplot from '../../assets/seaborn/sns-countplot.png'
import histogramplot from '../../assets/seaborn/sns-histogram.png'
import boxplot from '../../assets/seaborn/sns-boxplot.png'
import violinplot from '../../assets/seaborn/sns-violinplot.png'
import stripplot from '../../assets/seaborn/sns-stripplot.png'
import swarmplot from '../../assets/seaborn/sns-swormplot.png'
import catbar from '../../assets/seaborn/cat-bar.png'
import catbox from '../../assets/seaborn/cat-box.png'
import catviolin from '../../assets/seaborn/cat-violin.png'
import catstrip from '../../assets/seaborn/cat-strip.png'
import catsworm from '../../assets/seaborn/cat-swarm.png'
import catcount from '../../assets/seaborn/cat-count.png'
import cathuecolrow from '../../assets/seaborn/cat-huecolrow.png'
import disthist from '../../assets/seaborn/dist-histogram.png'
import kdeplot from '../../assets/seaborn/kde plot.png'
import ecdfplot from '../../assets/seaborn/ecdf plot.png'
import multipledist from '../../assets/seaborn/multiple dist.png'
import histkde from '../../assets/seaborn/histogram+kde.png'
import snsscatter from '../../assets/seaborn/sns-scatterplot.png'
import snslineplot from '../../assets/seaborn/sns-line plot.png'
import snsreplot from '../../assets/seaborn/sns-relplot.png'
import snsheatmap from '../../assets/seaborn/sns-heatmap.png'
import snsclustermap from '../../assets/seaborn/sns-clustermap.png'
import pivotheat from '../../assets/seaborn/pivottable-heatmap.png'
import snspairplot from '../../assets/seaborn/sns-pairplot.png'
import snsjointplot from '../../assets/seaborn/sns-jointplot.png'
import snslmplot from '../../assets/seaborn/sns-lmplot.png'
import combinecatandnum from '../../assets/seaborn/combines cat and num.png'
import stylebox from '../../assets/seaborn/style-box.png'
import snsstylecount from '../../assets/seaborn/style-count.png'
import contexthist from '../../assets/seaborn/context-histplot.png'
import savebox from '../../assets/seaborn/save-box.png'
import realcount from '../../assets/seaborn/real-count.png'
import realheatmap from '../../assets/seaborn/real-heatmap.png'
import realpairplot from '../../assets/seaborn/real-pairplot.png'

function SeabornNotes() {
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
          .plot-image {
            max-width: 100%;
            height: auto;
            border: 1px solid #ddd;
            margin: 10px 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
          }
          table, th, td {
            border: 1px solid #ddd;
          }
          th, td {
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
        `}
      </style>

      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-graph-up"></i> Seaborn Notes</h1>
          <p className="lead">Your Comprehensive Guide to Data Visualization with Seaborn</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#installation"><i className="bi bi-download"></i> Installation</a>
              <a className="nav-link" href="#basic-plots"><i className="bi bi-bar-chart"></i> Basic Plots</a>
              <a className="nav-link" href="#categorical-plots"><i className="bi bi-filter-square"></i> Categorical Plots</a>
              <a className="nav-link" href="#distribution-plots"><i className="bi bi-distribute-vertical"></i> Distribution Plots</a>
              <a className="nav-link" href="#relational-plots"><i className="bi bi-share"></i> Relational Plots</a>
              <a className="nav-link" href="#matrix-plots"><i className="bi bi-grid-3x3"></i> Matrix Plots</a>
              <a className="nav-link" href="#multivariate-plots"><i className="bi bi-diagram-3"></i> Multivariate Plots</a>
              <a className="nav-link" href="#styling"><i className="bi bi-palette"></i> Styling & Themes</a>
              <a className="nav-link" href="#saving"><i className="bi bi-save"></i> Saving Plots</a>
              <a className="nav-link" href="#example"><i className="bi bi-file-earmark-text"></i> Real-World Example</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Seaborn</h2>

              <div className="property-card">
                <h3 className="h4">What is Seaborn?</h3>
                <ul>
                  <li>Seaborn is a Python data visualization library built on top of Matplotlib</li>
                  <li>Provides a high-level interface for creating attractive and informative statistical graphics</li>
                  <li>Best suited for exploratory data analysis (EDA) and statistical plotting</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Why Use Seaborn?</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Better Aesthetics</td>
                      <td>Beautiful, default themes</td>
                    </tr>
                    <tr>
                      <td>Built-in Statistical Plots</td>
                      <td>Like regression, boxplot, violin, KDE, etc.</td>
                    </tr>
                    <tr>
                      <td>Works Well with Pandas</td>
                      <td>Can pass DataFrame directly</td>
                    </tr>
                    <tr>
                      <td>High-level Interface</td>
                      <td>Easier than Matplotlib for common plots</td>
                    </tr>
                    <tr>
                      <td>Integrated with Matplotlib</td>
                      <td>You can still use plt for customization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="installation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-download"></i> Installation</h2>

              <div className="property-card">
                <h3 className="h4">Installation Command</h3>
                <pre><code>pip install seaborn</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Importing Seaborn</h3>
                <pre><code>{`import seaborn as sns
import matplotlib.pyplot as plt`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Load Example Dataset</h3>
                <p>Seaborn comes with built-in datasets for practice:</p>
                <pre><code>{`# View list of built-in datasets
print(sns.get_dataset_names())

#Output
['anagrams', 'anscombe', 'attention', 'brain_networks', 'car_crashes', 'diamonds', 'dots', 'dowjones', 'exercise', 'flights', 'fmri', 'geyser', 'glue', 'healthexp', 'iris', 'mpg', 'penguins', 'planets', 'seaice', 'taxis', 'tips', 'titanic']

# Load a dataset (e.g., "tips")
df = sns.load_dataset('tips')
print(df.head())

#output:
  total_bill   tip     sex smoker  day    time  size
0       16.99  1.01  Female     No  Sun  Dinner     2
1       10.34  1.66    Male     No  Sun  Dinner     3
2       21.01  3.50    Male     No  Sun  Dinner     3
3       23.68  3.31    Male     No  Sun  Dinner     2
4       24.59  3.61  Female     No  Sun  Dinner     4`}</code></pre>
              </div>
            </section>

            <section id="basic-plots" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bar-chart"></i> Basic Plots in Seaborn</h2>

              <div className="property-card">
                <h3 className="h4">1. Line Plot – sns.lineplot()</h3>
                <pre><code>{`import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('flights')

sns.lineplot(data=df, x='year', y='passengers')
plt.title("Line Plot - Passengers Over Years")
plt.show()`}</code></pre>
                <p><strong>Use case:</strong> Time series data or trend analysis.</p>
                <div className="img">
                  <img src={lineplot} alt="sns-line plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Bar Plot – sns.barplot()</h3>
                <pre><code>{`df = sns.load_dataset("titanic")

sns.barplot(data=df, x='sex', y='survived')
plt.title("Bar Plot - Survival Rate by Gender")
plt.show()`}</code></pre>
                <p><strong>Use case:</strong> Comparing means across categories.</p>
                <div className="img">
                  <img src={barplot} alt="sns-bar plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Count Plot – sns.countplot()</h3>
                <pre><code>{`sns.countplot(data=df, x='class')
plt.title("Count Plot - Passenger Class Distribution")
plt.show()`}</code></pre>
                <p><strong>Use case:</strong> Count of categories (like histogram for categories).</p>
                <div className="img">
                  <img src={countplot} alt="sns-count plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Histogram Plot – sns.histplot()</h3>
                <pre><code>{`sns.histplot(data=df, x='age', bins=10, kde=True)
plt.title("Histogram - Age Distribution")
plt.show()`}</code></pre>
                <p><strong>Use case:</strong> Frequency distribution of numeric values.</p>
                <div className="img">
                  <img src={histogramplot} alt="sns-histogram plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">5. Box Plot – sns.boxplot()</h3>
                <pre><code>{`sns.boxplot(data=df, x='sex', y='age')
plt.title("Box Plot - Age by Gender")
plt.show()`}</code></pre>
                <p><strong>Use case:</strong> Distribution with median, quartiles, and outliers.</p>
                <div className="img">
                  <img src={boxplot} alt="sns-box plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">6. Violin Plot – sns.violinplot()</h3>
                <pre><code>{`sns.violinplot(data=df, x='class', y='age')
plt.title("Violin Plot - Age Distribution by Class")
plt.show()`}</code></pre>
                <p><strong>Use case:</strong> Combination of boxplot and KDE (distribution curve).</p>
                <div className="img">
                  <img src={violinplot} alt="sns-violin plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">7. Strip Plot – sns.stripplot()</h3>
                <pre><code>{`sns.stripplot(data=df, x='sex', y='age', jitter=True)
plt.title("Strip Plot - Age by Gender")
plt.show()`}</code></pre>
                <p><strong>Use case:</strong> Raw data points with small jitter to avoid overlap.</p>
                <div className="img">
                  <img src={stripplot} alt="sns-strip plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">8. Swarm Plot – sns.swarmplot()</h3>
                <pre><code>{`sns.swarmplot(data=df, x='sex', y='age')
plt.title("Swarm Plot - Age by Gender")
plt.show()`}</code></pre>
                <p><strong>Use case:</strong> Same as strip plot but adjusts automatically to avoid overlapping.</p>
                <p><div className="img">
                  <img src={swarmplot} alt="sns-swarm plot" className='img-fluid' />
                </div></p>
              </div>

              <div className="property-card">
                <h3 className="h4">Using Hue Parameter</h3>
                <p>You can combine these plots with <code>hue='column'</code> to break it down by category.</p>
                <pre><code>{`sns.barplot(data=df, x='sex', y='survived', hue='class')`}</code></pre>
              </div>
            </section>

            <section id="categorical-plots" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-filter-square"></i> Categorical Plots — sns.catplot()</h2>

              <div className="property-card">
                <h3 className="h4">What is catplot()?</h3>
                <p><code>catplot()</code> is a high-level plot that can show different kinds of categorical plots like bar, box, strip, swarm, violin, etc., using just one function with the <code>kind=</code> parameter.</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>sns.catplot(data=dataset, x='x_col', y='y_col', kind='type')</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">1. Bar Plot with catplot()</h3>
                <pre><code>{`import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('titanic')

sns.catplot(data=df, x='sex', y='survived', kind='bar')
plt.title("Bar Plot - Survival Rate by Gender")
plt.show()`}</code></pre>
                <p>Shows mean of survived for each sex category.</p>
                <div className="img">
                  <img src={catbar} alt="sns-catbar plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Box Plot with catplot()</h3>
                <pre><code>{`sns.catplot(data=df, x='class', y='age', kind='box')
plt.title("Box Plot - Age by Passenger Class")
plt.show()`}</code></pre>
                <p>Shows distribution of age for each class with median & outliers.</p>
                <div className="img">
                  <img src={catbox} alt="sns-catbox plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Violin Plot with catplot()</h3>
                <pre><code>{`sns.catplot(data=df, x='class', y='age', kind='violin')
plt.title("Violin Plot - Age Distribution by Class")
plt.show()`}</code></pre>
                <p>Combines KDE curve with box plot.</p>
                <div className="img">
                  <img src={catviolin} alt="sns-catviolin plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Strip Plot with catplot()</h3>
                <pre><code>{`sns.catplot(data=df, x='sex', y='age', kind='strip', jitter=True)
plt.title("Strip Plot - Age by Gender")
plt.show()`}</code></pre>
                <div className="img">
                  <img src={catstrip} alt="sns-catstrip plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">5. Swarm Plot with catplot()</h3>
                <pre><code>{`sns.catplot(data=df, x='sex', y='age', kind='swarm')
plt.title("Swarm Plot - Age by Gender")
plt.show()`}</code></pre>
                <p>More readable than strip, adjusts for overlapping points.</p>
                <div className="img">
                  <img src={catsworm} alt="sns-catsworm plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">6. Count Plot with catplot()</h3>
                <pre><code>{`sns.catplot(data=df, x='class', kind='count')
plt.title("Count Plot - Count of Each Class")
plt.show()`}</code></pre>
                <p>Frequency count of each category.</p>
                <div className="img">
                  <img src={catcount} alt="sns-catcount plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">Using hue, col, row Parameters</h3>
                <pre><code>{`sns.catplot(data=df, x='sex', y='survived', hue='class', kind='bar')
plt.title("Bar Plot with Hue - Survival Rate by Gender & Class")
plt.show()`}</code></pre>
                <div className="img">
                  <img src={cathuecolrow} alt="sns-hue col row plot" className='img-fluid' />
                </div>
              </div>
            </section>

            <section id="distribution-plots" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-distribute-vertical"></i> Distribution Plots in Seaborn</h2>
              <p>Distribution plots help visualize the shape, spread, and concentration of numerical data.</p>

              <div className="property-card">
                <h3 className="h4">1. Histogram Plot – sns.histplot()</h3>
                <pre><code>{`import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('titanic')

sns.histplot(data=df, x='age', bins=20, kde=True)
plt.title("Histogram - Age Distribution")
plt.show()`}</code></pre>
                <p><strong>Explanation:</strong></p>
                <ul>
                  <li><code>bins=20</code>: Number of bars</li>
                  <li><code>kde=True</code>: Shows smooth curve of distribution</li>
                </ul>
                <div className="img">
                  <img src={disthist} alt="sns-dist histogram plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Kernel Density Estimate Plot (KDE) – sns.kdeplot()</h3>
                <pre><code>{`sns.kdeplot(data=df['age'], fill=True)
plt.title("KDE Plot - Age")
plt.show()`}</code></pre>
                <p><strong>Use case:</strong> Smooth distribution curve — helpful when you don't want bar-based histograms.</p>
                <div className="img">
                  <img src={kdeplot} alt="sns-kde plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">3. ECDF Plot – sns.ecdfplot()</h3>
                <pre><code>{`sns.ecdfplot(data=df, x='age')
plt.title("ECDF Plot - Age")
plt.show()`}</code></pre>
                <p>ECDF (Empirical Cumulative Distribution Function) shows cumulative proportion up to a value.</p>
                <div className="img">
                  <img src={ecdfplot} alt="sns-ecdf plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">Comparing Multiple Distributions</h3>
                <pre><code>{`sns.kdeplot(data=df, x='age', hue='sex', fill=True)
plt.title("KDE Plot - Age by Gender")
plt.show()`}</code></pre>
                <p>Add <code>hue='sex'</code> to compare distributions for different categories.</p>
                <div className="img">
                  <img src={multipledist} alt="sns-multiple dist plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">Combined Example</h3>
                <pre><code>{`sns.histplot(data=df, x='fare', bins=30, kde=True, hue='sex')
plt.title("Histogram + KDE - Fare by Gender")
plt.show()`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">When to Use:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Plot Type</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>histplot()</td>
                      <td>Frequency distribution (bars)</td>
                    </tr>
                    <tr>
                      <td>kdeplot()</td>
                      <td>Smooth curve visualization</td>
                    </tr>
                    <tr>
                      <td>ecdfplot()</td>
                      <td>Cumulative probability view</td>
                    </tr>
                  </tbody>
                </table>
                <div className="img">
                  <img src={histkde} alt="sns-hist+kde plot" className='img-fluid' />
                </div>
              </div>
            </section>

            <section id="relational-plots" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-share"></i> Relational Plots in Seaborn</h2>
              <p>Seaborn offers two main relational plots:</p>
              <ul>
                <li><code>sns.scatterplot()</code> → scatter plots</li>
                <li><code>sns.lineplot()</code> → line charts</li>
              </ul>
              <p>These are combined under a higher-level function: <code>sns.relplot()</code>.</p>

              <div className="property-card">
                <h3 className="h4">1. Scatter Plot – sns.scatterplot()</h3>
                <pre><code>{`import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('tips')

sns.scatterplot(data=df, x='total_bill', y='tip')
plt.title("Scatter Plot - Total Bill vs Tip")
plt.show()`}</code></pre>
                <p><strong>Use case:</strong> Relationship between two continuous values.</p>
                <div className="img">
                  <img src={snsscatter} alt="sns-scatter plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Line Plot – sns.lineplot()</h3>
                <pre><code>{`df = sns.load_dataset("flights")

sns.lineplot(data=df, x='year', y='passengers')
plt.title("Line Plot - Year vs Passengers")
plt.show()`}</code></pre>
                <p><strong>Use case:</strong> Time series or trends over time.</p>
                <div className="img">
                  <img src={snslineplot} alt="sns-line plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">3. relplot() - High-level for line and scatter</h3>
                <pre><code>{`sns.relplot(data=df, x='total_bill', y='tip', kind='scatter')
plt.title("relplot - Scatter of Bill vs Tip")
plt.show()`}</code></pre>
                <pre><code>{`sns.relplot(data=df, x='year', y='passengers', kind='line')
plt.title("relplot - Line of Year vs Passengers")
plt.show()`}</code></pre>
                <div className="img">
                  <img src={snsreplot} alt="sns-rep plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">Add Hue, Style, Size</h3>
                <p>You can add third, fourth, fifth dimensions using:</p>
                <ul>
                  <li><code>hue='sex'</code></li>
                  <li><code>style='smoker'</code></li>
                  <li><code>size='size'</code></li>
                </ul>
                <pre><code>{`sns.relplot(data=df, x='total_bill', y='tip', hue='sex', style='smoker', size='size')
plt.title("Multi-Dimensional Scatter Plot")
plt.show()`}</code></pre>
                <p><strong>Explanation:</strong></p>
                <ul>
                  <li><code>hue</code> → color</li>
                  <li><code>style</code> → marker shape</li>
                  <li><code>size</code> → marker size</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Use col and row for Subplots</h3>
                <pre><code>{`sns.relplot(data=df, x='total_bill', y='tip', hue='sex', col='smoker')`}</code></pre>
                <p>Splits plot into multiple small plots based on column/category.</p>
              </div>
            </section>

            <section id="matrix-plots" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-grid-3x3"></i> Matrix Plots in Seaborn</h2>
              <p>Matrix plots are useful when you want to compare relationships between many variables at once.</p>

              <div className="property-card">
                <h3 className="h4">1. Heatmap – sns.heatmap()</h3>
                <p>A heatmap displays a matrix of values with color encoding.</p>
                <p><strong>Example: Correlation Heatmap</strong></p>
                <pre><code>{`import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('iris')

corr = df.corr(numeric_only=True)

sns.heatmap(corr, annot=True, cmap='coolwarm')
plt.title("Heatmap - Correlation Matrix")
plt.show()`}</code></pre>
                <p><strong>Explanation:</strong></p>
                <ul>
                  <li><code>annot=True</code>: Shows values inside the boxes</li>
                  <li><code>cmap</code>: Color theme (coolwarm, viridis, etc.)</li>
                </ul>
                <div className="img">
                  <img src={snsheatmap} alt="sns-heatmap plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Cluster Map – sns.clustermap()</h3>
                <p>Automatically clusters similar rows/columns together and displays as a heatmap with dendrograms.</p>
                <pre><code>{`sns.clustermap(corr, annot=True, cmap='mako')
plt.title("Clustermap - Correlation Clustering")
plt.show()`}</code></pre>
                <p>Useful for pattern detection and grouping.</p>
                <div className="img">
                  <img src={snsclustermap} alt="sns-cluster map plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Pivot Table + Heatmap Example (Real World)</h3>
                <pre><code>{`df = sns.load_dataset('flights')

pivot = df.pivot(index='month', columns='year', values='passengers')

sns.heatmap(pivot, annot=True, fmt='d', cmap='YlGnBu')
plt.title("Flights Heatmap - Monthly Passengers")
plt.show()`}</code></pre>
                <p><strong>Explanation:</strong></p>
                <ul>
                  <li><code>pivot()</code> creates matrix format</li>
                  <li><code>fmt='d'</code>: formats as integer</li>
                  <li>Heatmap visually shows which months had high traffic</li>
                </ul>
                <div className="img">
                  <img src={pivotheat} alt="sns-pivot table heatmap plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">When to Use:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Plot</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>heatmap()</td>
                      <td>Correlation or numerical matrix</td>
                    </tr>
                    <tr>
                      <td>clustermap()</td>
                      <td>Grouping similar data patterns</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="multivariate-plots" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> Multivariate Plots in Seaborn</h2>
              <p>Seaborn provides smart built-in functions to visualize multiple variable relationships — in 2D and 3D-like visual formats.</p>

              <div className="property-card">
                <h3 className="h4">1. Pair Plot – sns.pairplot()</h3>
                <p>Plots pairwise relationships between numerical columns, with histograms on the diagonal.</p>
                <pre><code>{`import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('iris')

sns.pairplot(df, hue='species')
plt.show()`}</code></pre>
                <p><strong>Use case:</strong></p>
                <ul>
                  <li>Shows all numeric columns against each other</li>
                  <li><code>hue</code> adds color by category (species here)</li>
                </ul>
                <div className="img">
                  <img src={snspairplot} alt="sns-pair plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Joint Plot – sns.jointplot()</h3>
                <p>Combines scatterplot + histogram (or KDE) in a single plot with marginal plots.</p>
                <pre><code>{`sns.jointplot(data=df, x='sepal_length', y='petal_length', kind='scatter')
plt.show()`}</code></pre>
                <p><strong>Other kind values:</strong></p>
                <ul>
                  <li><code>kde</code> – density plot</li>
                  <li><code>hex</code> – hexbin plot</li>
                </ul>
                <div className="img">
                  <img src={snsjointplot} alt="sns-joint plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">3. LM Plot (Linear Model Plot) – sns.lmplot()</h3>
                <p>Displays linear regression with scatterplot and confidence interval.</p>
                <pre><code>{`sns.lmplot(data=df, x='sepal_length', y='petal_length', hue='species')
plt.show()`}</code></pre>
                <p>Automatically fits a regression line for each category (hue).</p>
                <div className="img">
                  <img src={snslmplot} alt="sns-lm plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">Bonus: Combine Categorical & Numerical</h3>
                <pre><code>{`tips = sns.load_dataset('tips')
sns.lmplot(data=tips, x='total_bill', y='tip', col='sex', hue='smoker')
plt.show()`}</code></pre>
                <p>Shows regression by gender (col) and colored by smoking status (hue).</p>
                <div className="img">
                  <img src={combinecatandnum} alt="sns-cat and num plot" className='img-fluid' />
                </div>
              </div>
            </section>

            <section id="styling" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-palette"></i> Styling, Themes, and Color Palettes in Seaborn</h2>
              <p>Seaborn gives you full control over how your plots look and feel.</p>

              <div className="property-card">
                <h3 className="h4">1. Themes – sns.set_theme() or sns.set_style()</h3>
                <p><strong>Available Styles:</strong></p>
                <ul>
                  <li><code>'darkgrid'</code> ✅ (default, with grid)</li>
                  <li><code>'whitegrid'</code></li>
                  <li><code>'dark'</code></li>
                  <li><code>'white'</code></li>
                  <li><code>'ticks'</code></li>
                </ul>
                <pre><code>{`import seaborn as sns
import matplotlib.pyplot as plt

sns.set_style('whitegrid') # Apply theme
df = sns.load_dataset('tips')

sns.boxplot(data=df, x='day', y='total_bill')
plt.title("Styled Boxplot with Whitegrid")
plt.show()`}</code></pre>
                <p>Use whitegrid for statistical plots and dark for presentations.</p>
                <div className="img">
                  <img src={stylebox} alt="sns-style box plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Color Palettes – sns.set_palette()</h3>
                <p><strong>Built-in Palettes:</strong></p>
                <ul>
                  <li><code>'deep'</code> ✅ (default)</li>
                  <li><code>'muted'</code></li>
                  <li><code>'bright'</code></li>
                  <li><code>'pastel'</code></li>
                  <li><code>'dark'</code></li>
                  <li><code>'colorblind'</code></li>
                </ul>
                <pre><code>{`sns.set_palette('pastel') # Change color theme
sns.countplot(data=df, x='day', hue='sex')
plt.title("Pastel Colored Countplot")
plt.show()`}</code></pre>
                <p>You can also create custom color lists using HEX or RGB.</p>
                <div className="img">
                  <img src={snsstylecount} alt="sns-style count plot" className='img-fluid' />
                </div>
                <pre><code>{`custom_colors = ['#ff9999', '#66b3ff', '#99ff99']
sns.set_palette(custom_colors)`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Context Settings – sns.set_context()</h3>
                <p>Controls <strong>font size and scaling</strong> for different use cases:</p>
                <ul>
                  <li><code>'notebook'</code> ✔ (default)</li>
                  <li><code>'talk'</code> – For slides</li>
                  <li><code>'paper'</code> – For reports</li>
                  <li><code>'poster'</code> – For posters</li>
                </ul>
                <pre><code>{`sns.set_context('talk')
sns.histplot(data=df, x='total_bill', bins=20)
plt.title("Histogram in Talk Context")
plt.show()`}</code></pre>
                <div className="img">
                  <img src={contexthist} alt="sns-context hist plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Combine All in One</h3>
                <pre><code>{`sns.set_theme(style='white', palette='bright', context='poster')`}</code></pre>
                <p>Makes your plots clean, colorful, and readable for big screens!</p>
              </div>
            </section>

            <section id="saving" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-save"></i> Saving Seaborn Plots</h2>
              <p>You can save any Seaborn plot using <strong>Matplotlib's</strong> <strong>savefig()</strong> function.</p>

              <div className="property-card">
                <h3 className="h4">1. Basic Save</h3>
                <pre><code>{`import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('tips')

sns.boxplot(data=df, x='day', y='total_bill')
plt.title("Boxplot Example")
plt.savefig("boxplot.png") # ▼ saves the plot`}</code></pre>
                <p>You can save as .png, .jpg, .pdf, .svg, etc.</p>
                <div className="img">
                  <img src={savebox} alt="sns-save box plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">2. High-Resolution Image</h3>
                <pre><code>{`plt.savefig("high_quality_plot.png", dpi=300, bbox_inches="tight")`}</code></pre>
                <ul>
                  <li><code>dpi=300</code>: High-resolution</li>
                  <li><code>bbox_inches="tight"</code>: Removes extra white space</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Save Without Displaying</h3>
                <p>If you only want to save (no pop-up):</p>
                <pre><code>plt.clf() # Clear current figure after saving</code></pre>
              </div>
            </section>

            <section id="example" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-text"></i> Real-World EDA Example – Titanic Dataset</h2>

              <div className="property-card">
                <h3 className="h4">Load Dataset</h3>
                <pre><code>df = sns.load_dataset('titanic')</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Gender-wise Survival Count</h3>
                <pre><code>{`sns.countplot(data=df, x='sex', hue='survived')
plt.title("Survival Count by Gender")
plt.show()`}</code></pre>
                <div className="img">
                  <img src={realcount} alt="sns-realcount plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">Heatmap of Correlation</h3>
                <pre><code>{`sns.heatmap(df.corr(numeric_only=True), annot=True, cmap='coolwarm')
plt.title("Titanic Correlation Heatmap")
plt.show()`}</code></pre>
                <div className="img">
                  <img src={realheatmap} alt="sns-real heat map plot" className='img-fluid' />
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">Pairplot by Class</h3>
                <pre><code>{`sns.pairplot(df, hue='pclass', diag_kind='kde')
plt.show()`}</code></pre>
                <div className="img">
                  <img src={realpairplot} alt="sns-real pair plot" className='img-fluid' />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Seaborn Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default SeabornNotes;