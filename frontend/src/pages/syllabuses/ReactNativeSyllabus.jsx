import React from 'react';

function ReactNativeSyllabus() {
  return (
    <div className="container py-5">
      <header className="bg-primary text-white p-4 rounded-3 mb-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-phone fs-1 me-3"></i>
          <div>
            <h1 className="display-4 fw-bold mb-0">React Native Syllabus</h1>
            <p className="lead mb-0">Comprehensive Coverage of React Native Mobile Development</p>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-info-circle text-primary me-2"></i>Introduction to React Native</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">What is React Native?</li>
                <li className="list-group-item">React Native vs Native Development</li>
                <li className="list-group-item">React Native vs React.js</li>
                <li className="list-group-item">Advantages and Disadvantages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-gear text-primary me-2"></i>Environment Setup</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Expo vs React Native CLI</li>
                <li className="list-group-item">Setting up development environment</li>
                <li className="list-group-item">Running on Android and iOS</li>
                <li className="list-group-item">Debugging tools</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-folder text-primary me-2"></i>Project Structure</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Understanding the file structure</li>
                <li className="list-group-item">Android and iOS folders</li>
                <li className="list-group-item">Component organization</li>
                <li className="list-group-item">Assets management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-puzzle text-primary me-2"></i>JSX & Components</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">JSX syntax in React Native</li>
                <li className="list-group-item">Functional vs Class components</li>
                <li className="list-group-item">Props and State</li>
                <li className="list-group-item">Component lifecycle</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-palette text-primary me-2"></i>Styling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">StyleSheet API</li>
                <li className="list-group-item">Flexbox layout</li>
                <li className="list-group-item">Responsive design</li>
                <li className="list-group-item">Custom fonts and icons</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-box-seam text-primary me-2"></i>Core Components</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">View, Text, Image</li>
                <li className="list-group-item">ScrollView vs FlatList</li>
                <li className="list-group-item">Buttons and Touchables</li>
                <li className="list-group-item">TextInput and Forms</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-signpost text-primary me-2"></i>Navigation</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React Navigation library</li>
                <li className="list-group-item">Stack Navigation</li>
                <li className="list-group-item">Tab Navigation</li>
                <li className="list-group-item">Drawer Navigation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-hdd-stack text-primary me-2"></i>Hooks</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">useState and useEffect</li>
                <li className="list-group-item">useContext</li>
                <li className="list-group-item">useRef</li>
                <li className="list-group-item">Custom hooks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-keyboard text-primary me-2"></i>User Input Handling</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Form handling</li>
                <li className="list-group-item">Validation</li>
                <li className="list-group-item">Keyboard avoidance</li>
                <li className="list-group-item">Form libraries (Formik)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-plug text-primary me-2"></i>API Integration</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Fetch API</li>
                <li className="list-group-item">Axios</li>
                <li className="list-group-item">Handling responses</li>
                <li className="list-group-item">Error handling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-device-hdd text-primary me-2"></i>AsyncStorage</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Storing data locally</li>
                <li className="list-group-item">Retrieving data</li>
                <li className="list-group-item">Data persistence</li>
                <li className="list-group-item">Limitations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-magic text-primary me-2"></i>Animations</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Animated API</li>
                <li className="list-group-item">Basic animations</li>
                <li className="list-group-item">Gesture animations</li>
                <li className="list-group-item">Lottie animations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-fire text-primary me-2"></i>Firebase Integration</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Authentication</li>
                <li className="list-group-item">Firestore database</li>
                <li className="list-group-item">Cloud storage</li>
                <li className="list-group-item">Push notifications</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-shield-lock text-primary me-2"></i>Permissions</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Requesting permissions</li>
                <li className="list-group-item">Handling denied permissions</li>
                <li className="list-group-item">Common permission types</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-cloud-upload text-primary me-2"></i>Deployment</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Building APK/IPA</li>
                <li className="list-group-item">App signing</li>
                <li className="list-group-item">Play Store submission</li>
                <li className="list-group-item">App Store submission</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-camera text-primary me-2"></i>Camera & Media</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Image picker</li>
                <li className="list-group-item">Camera access</li>
                <li className="list-group-item">Image manipulation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-map text-primary me-2"></i>Maps & Location</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React Native Maps</li>
                <li className="list-group-item">Geolocation</li>
                <li className="list-group-item">Markers and overlays</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-bar-chart text-primary me-2"></i>Charts & Data Visualization</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Chart libraries</li>
                <li className="list-group-item">Displaying data</li>
                <li className="list-group-item">Interactive charts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0"><i className="bi bi-lightbulb text-primary me-2"></i>Project Ideas</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">E-commerce app</li>
                <li className="list-group-item">Social media app</li>
                <li className="list-group-item">Fitness tracker</li>
                <li className="list-group-item">Food delivery app</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactNativeSyllabus;