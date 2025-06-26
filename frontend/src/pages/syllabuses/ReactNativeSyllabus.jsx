import React from 'react';

function ReactNativeSyllabus() {
  return (
    <div className="bg-light">
      <style>
        {`
          .syllabus-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          .syllabus-header {
            background-color: #6c757d;
            color: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
          }
          .topic-list {
            list-style-type: none;
            padding: 0;
          }
          .topic-item {
            background-color: white;
            margin-bottom: 10px;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .topic-item i {
            margin-right: 10px;
          }
        `}
      </style>
      <div className="syllabus-container">
        <header className="syllabus-header">
          <h1 className="display-4 fw-bold"><i className="bi bi-phone"></i> React Native Syllabus</h1>
          <p className="lead">Comprehensive Coverage of React Native Mobile Development</p>
        </header>
        
        <div className="topic-list">
          <div className="topic-item">
            <h2><i className="bi bi-info-circle"></i> Introduction to React Native</h2>
            <ul>
              <li>What is React Native?</li>
              <li>React Native vs Native Development</li>
              <li>React Native vs React.js</li>
              <li>Advantages and Disadvantages</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-gear"></i> Environment Setup</h2>
            <ul>
              <li>Expo vs React Native CLI</li>
              <li>Setting up development environment</li>
              <li>Running on Android and iOS</li>
              <li>Debugging tools</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-folder"></i> Project Structure</h2>
            <ul>
              <li>Understanding the file structure</li>
              <li>Android and iOS folders</li>
              <li>Component organization</li>
              <li>Assets management</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-puzzle"></i> JSX & Components</h2>
            <ul>
              <li>JSX syntax in React Native</li>
              <li>Functional vs Class components</li>
              <li>Props and State</li>
              <li>Component lifecycle</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-palette"></i> Styling</h2>
            <ul>
              <li>StyleSheet API</li>
              <li>Flexbox layout</li>
              <li>Responsive design</li>
              <li>Custom fonts and icons</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-box-seam"></i> Core Components</h2>
            <ul>
              <li>View, Text, Image</li>
              <li>ScrollView vs FlatList</li>
              <li>Buttons and Touchables</li>
              <li>TextInput and Forms</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-signpost"></i> Navigation</h2>
            <ul>
              <li>React Navigation library</li>
              <li>Stack Navigation</li>
              <li>Tab Navigation</li>
              <li>Drawer Navigation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-hdd-stack"></i> Hooks</h2>
            <ul>
              <li>useState and useEffect</li>
              <li>useContext</li>
              <li>useRef</li>
              <li>Custom hooks</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-keyboard"></i> User Input Handling</h2>
            <ul>
              <li>Form handling</li>
              <li>Validation</li>
              <li>Keyboard avoidance</li>
              <li>Form libraries (Formik)</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-plug"></i> API Integration</h2>
            <ul>
              <li>Fetch API</li>
              <li>Axios</li>
              <li>Handling responses</li>
              <li>Error handling</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-device-hdd"></i> AsyncStorage</h2>
            <ul>
              <li>Storing data locally</li>
              <li>Retrieving data</li>
              <li>Data persistence</li>
              <li>Limitations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-magic"></i> Animations</h2>
            <ul>
              <li>Animated API</li>
              <li>Basic animations</li>
              <li>Gesture animations</li>
              <li>Lottie animations</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-fire"></i> Firebase Integration</h2>
            <ul>
              <li>Authentication</li>
              <li>Firestore database</li>
              <li>Cloud storage</li>
              <li>Push notifications</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-shield-lock"></i> Permissions</h2>
            <ul>
              <li>Requesting permissions</li>
              <li>Handling denied permissions</li>
              <li>Common permission types</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-cloud-upload"></i> Deployment</h2>
            <ul>
              <li>Building APK/IPA</li>
              <li>App signing</li>
              <li>Play Store submission</li>
              <li>App Store submission</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-camera"></i> Camera & Media</h2>
            <ul>
              <li>Image picker</li>
              <li>Camera access</li>
              <li>Image manipulation</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-map"></i> Maps & Location</h2>
            <ul>
              <li>React Native Maps</li>
              <li>Geolocation</li>
              <li>Markers and overlays</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-bar-chart"></i> Charts & Data Visualization</h2>
            <ul>
              <li>Chart libraries</li>
              <li>Displaying data</li>
              <li>Interactive charts</li>
            </ul>
          </div>

          <div className="topic-item">
            <h2><i className="bi bi-lightbulb"></i> Project Ideas</h2>
            <ul>
              <li>E-commerce app</li>
              <li>Social media app</li>
              <li>Fitness tracker</li>
              <li>Food delivery app</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactNativeSyllabus;