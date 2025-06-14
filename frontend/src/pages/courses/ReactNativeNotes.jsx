import React from 'react';

function ReactNativeNotes() {
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
          .table-compare {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1rem;
          }
          .table-compare th, .table-compare td {
            border: 1px solid #dee2e6;
            padding: 0.75rem;
            text-align: left;
          }
          .table-compare th {
            background-color: #e9ecef;
          }
        `}
      </style>

      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-phone"></i> React Native Notes</h1>
          <p className="lead">Your Comprehensive Guide to Cross-Platform Mobile Development</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#react-vs-reactnative"><i className="bi bi-diagram-2"></i> React vs React Native</a>
              <a className="nav-link" href="#environment"><i className="bi bi-gear"></i> Environment Setup</a>
              <a className="nav-link" href="#project-structure"><i className="bi bi-folder"></i> Project Structure</a>
              <a className="nav-link" href="#jsx-components"><i className="bi bi-puzzle"></i> JSX & Components</a>
              <a className="nav-link" href="#styling"><i className="bi bi-palette"></i> Styling</a>
              <a className="nav-link" href="#core-components"><i className="bi bi-box-seam"></i> Core Components</a>
              <a className="nav-link" href="#navigation"><i className="bi bi-signpost"></i> Navigation</a>
              <a className="nav-link" href="#hooks"><i className="bi bi-hdd-stack"></i> Hooks</a>
              <a className="nav-link" href="#user-input"><i className="bi bi-keyboard"></i> User Input</a>
              <a className="nav-link" href="#api"><i className="bi bi-plug"></i> API Integration</a>
              <a className="nav-link" href="#storage"><i className="bi bi-device-hdd"></i> AsyncStorage</a>
              <a className="nav-link" href="#animations"><i className="bi bi-magic"></i> Animations</a>
              <a className="nav-link" href="#firebase"><i className="bi bi-fire"></i> Firebase</a>
              <a className="nav-link" href="#permissions"><i className="bi bi-shield-lock"></i> Permissions</a>
              <a className="nav-link" href="#deployment"><i className="bi bi-cloud-upload"></i> Deployment</a>
              <a className="nav-link" href="#camera"><i className="bi bi-camera"></i> Camera</a>
              <a className="nav-link" href="#maps"><i className="bi bi-map"></i> Maps</a>
              <a className="nav-link" href="#charts"><i className="bi bi-bar-chart"></i> Charts</a>
              <a className="nav-link" href="#projects"><i className="bi bi-lightbulb"></i> Project Ideas</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to React Native</h2>
              
              <div className="property-card">
                <h3 className="h4">What is React Native?</h3>
                <p>React Native is an open-source mobile application framework created by Meta (Facebook) that allows developers to build mobile apps using JavaScript and React.</p>
                <p>Instead of building apps separately for Android (using Java/Kotlin) and iOS (using Swift/Objective-C), React Native enables cross-platform development using a single codebase.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Key Features</h3>
                <ul>
                  <li><strong>Cross-platform:</strong> Build for Android and iOS with the same codebase.</li>
                  <li><strong>Native Performance:</strong> Uses native components, resulting in better performance compared to hybrid frameworks.</li>
                  <li><strong>Live Reloading:</strong> You can instantly see code changes reflected in the app during development.</li>
                  <li><strong>Rich Ecosystem:</strong> Large library support, community packages, and easy integration with native modules.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Popular Apps Built with React Native</h3>
                <ul className="row">
                  <div className="col-md-6">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Skype</li>
                  </div>
                  <div className="col-md-6">
                    <li>Uber Eats</li>
                    <li>Discord</li>
                    <li>Bloomberg</li>
                  </div>
                </ul>
              </div>
            </section>

            <section id="react-vs-reactnative" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-2"></i> React Native vs React.js</h2>
              
              <table className="table-compare">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>React.js</th>
                    <th>React Native</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Platform</td>
                    <td>Web development</td>
                    <td>Mobile app development</td>
                  </tr>
                  <tr>
                    <td>DOM</td>
                    <td>Uses HTML DOM</td>
                    <td>Uses native mobile components</td>
                  </tr>
                  <tr>
                    <td>Styling</td>
                    <td>CSS</td>
                    <td>React Native's StyleSheet (Flexbox)</td>
                  </tr>
                  <tr>
                    <td>Rendering Target</td>
                    <td>Browser</td>
                    <td>iOS/Android</td>
                  </tr>
                  <tr>
                    <td>Navigation</td>
                    <td>React Router</td>
                    <td>React Navigation</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="property-card">
                <h3 className="h4">Advantages of React Native</h3>
                <ul>
                  <li><strong>Code Reusability</strong> – Write once, use on both Android & iOS.</li>
                  <li><strong>Faster Development</strong> – Speeds up app development time.</li>
                  <li><strong>Large Community</strong> – Plenty of libraries and active support.</li>
                  <li><strong>Native Components</strong> – Close to native performance.</li>
                </ul>
              </div>
            </section>

            <section id="environment" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Environment Setup in React Native</h2>
              
              <div className="property-card">
                <h3 className="h4">Two Ways to Set Up React Native</h3>
                <ul>
                  <li><strong>Expo CLI</strong> – Beginner-friendly, easy setup, limited access to native code.</li>
                  <li><strong>React Native CLI</strong> – Full control, suitable for advanced/native module development.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. System Requirements</h3>
                <ul>
                  <li><strong>Node.js</strong> (LTS version recommended)</li>
                  <li><strong>npm</strong> or <strong>yarn</strong></li>
                  <li><strong>Android Studio</strong> (for Android emulator)</li>
                  <li><strong>Xcode</strong> (for iOS development - macOS only)</li>
                  <li><strong>Visual Studio Code</strong> (Recommended editor)</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Installing Node.js and npm</h3>
                <p>Download from: <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">https://nodejs.org</a></p>
                <p>Use terminal to verify:</p>
                <pre><code>{`node -v
npm -v`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Installing Expo CLI</h3>
                <p>Expo simplifies app development for beginners.</p>
                <pre><code>{`npm install -g expo-cli`}</code></pre>
                <p>Create your first app:</p>
                <pre><code>{`expo init MyFirstApp
# Choose a template like "blank (JavaScript)"`}</code></pre>
                <p>Run the app:</p>
                <pre><code>{`cd MyFirstApp
npm start`}</code></pre>
                <p>Scan QR code from <strong>Expo Go App</strong> on your mobile (Android/iOS)</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Installing React Native CLI (Advanced)</h3>
                <p>If you're working with native modules (like camera, Bluetooth), use React Native CLI.</p>
                <pre><code>{`npx react-native init MyApp`}</code></pre>
                <p>Run Android emulator:</p>
                <pre><code>{`npx react-native run-android`}</code></pre>
                <p>Run iOS (macOS only):</p>
                <pre><code>{`npx react-native run-ios`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Android Studio Setup</h3>
                <ul>
                  <li>Install Android Studio</li>
                  <li>Setup <strong>Android SDK</strong> and <strong>AVD (emulator)</strong></li>
                  <li>Add these environment variables in .bashrc or .zshrc:</li>
                </ul>
                <pre><code>{`export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Testing App on Device</h3>
                <ul>
                  <li>Use <strong>Expo Go App</strong> (for Expo projects)</li>
                  <li>Enable <strong>USB Debugging</strong> on your Android</li>
                  <li>Use <code>adb devices</code> to check connection</li>
                </ul>
              </div>
            </section>

            <section id="project-structure" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-folder"></i> Project Structure & File Overview</h2>
              
              <div className="property-card">
                <h3 className="h4">Typical Project Structure</h3>
                <pre><code>{`MyApp/
    android/
    ios/
    node_modules/
    src/
        ├── assets/
        ├── components/
        ├── screens/
        ├── navigation/
        ├── App.js
        ├── package.json
        ├── babel.config.js
        ├── metro.config.js`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Folder Descriptions</h3>
                <ul>
                  <li><strong>android/</strong> - Contains native Android code. Used if modifying native Android modules. Don't touch unless needed.</li>
                  <li><strong>ios/</strong> - Contains native iOS code. Required only if modifying iOS native features.</li>
                  <li><strong>node_modules/</strong> - All third-party libraries installed via npm.</li>
                  <li><strong>src/</strong> - Your main working folder (create if not exists). Organize code here:
                    <ul>
                      <li><strong>assets/</strong> – Images, fonts, icons, etc.</li>
                      <li><strong>components/</strong> – Reusable UI elements (e.g., Button, Header)</li>
                      <li><strong>screens/</strong> – Each screen or page of the app (e.g., HomeScreen, LoginScreen)</li>
                      <li><strong>navigation/</strong> – Navigation setup (stack, tab, drawer)</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">File Descriptions</h3>
                <ul>
                  <li><strong>App.js</strong> - Entry point of the app. Used to register navigation and layout. Acts like index.html in web apps.</li>
                  <li><strong>package.json</strong> - Lists dependencies and project info. Run scripts (like start, build).</li>
                  <li><strong>babel.config.js</strong> - Used for JavaScript transpilation (ES6+ support).</li>
                  <li><strong>metro.config.js</strong> - Configuration for Metro bundler (optional for asset handling).</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Code Structure Example (Basic App.js)</h3>
                <pre><code>{`import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Hello, React Native!</Text>
        </View>
    );
};

export default App;`}</code></pre>
              </div>
            </section>

            <section id="jsx-components" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-puzzle"></i> JSX & Components in React Native</h2>
              
              <div className="property-card">
                <h3 className="h4">What is JSX?</h3>
                <p>JSX (JavaScript XML) is a syntax extension used in React and React Native. It allows you to write UI code using HTML-like tags directly inside JavaScript.</p>
                <p>Example:</p>
                <pre><code>{`<Text>Hello, React Native!</Text>`}</code></pre>
                <ul>
                  <li>Internally converted into <code>React.createElement()</code></li>
                  <li>Makes UI code readable and intuitive</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Basic JSX Syntax</h3>
                <pre><code>{`<View>
    <Text>Welcome to React Native</Text>
</View>`}</code></pre>
                <p>Note: In React Native, you use <code>View</code> instead of <code>div</code>, and <code>Text</code> instead of <code>p</code> or <code>span</code>.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Types of Components in React Native</h3>
                <p>React Native apps are built using components, which are reusable blocks of UI.</p>
                
                <h4 className="h5 mt-3">1. Functional Component</h4>
                <p>Simpler and commonly used (especially with hooks).</p>
                <pre><code>{`const Welcome = () => {
    return (
        <View>
            <Text>Hello from Functional Component</Text>
        </View>
    );
};`}</code></pre>
                
                <h4 className="h5 mt-3">2. Class Component</h4>
                <p>Older style (before hooks), but still used in legacy code.</p>
                <pre><code>{`import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Welcome extends Component {
    render() {
        return (
            <View>
                <Text>Hello from Class Component</Text>
            </View>
        );
    }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Props in Components</h3>
                <p>Props are <strong>inputs</strong> to components. Used to pass data between components.</p>
                <pre><code>{`const Greet = ({ name }) => {
    return <Text>Hello, {name}!</Text>;
};

// Usage:
<Greet name="Mugil" />`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">State in Components</h3>
                <p>State stores data <strong>inside a component</strong> and can change over time.</p>
                <pre><code>{`import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button 
                title="Increase" 
                onPress={() => setCount(count + 1)} 
            />
        </View>
    );
};`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">JSX Rules to Remember</h3>
                <ul>
                  <li>One parent element must wrap everything.</li>
                  <li>Use <code>style={`{}`}</code> for inline styles.</li>
                  <li>Self-closing tags: <code>&lt;Image /&gt;</code>, <code>&lt;Input/&gt;</code></li>
                  <li><code>className</code> → Use <code>style</code></li>
                </ul>
              </div>
            </section>

            <section id="styling" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-palette"></i> Styling in React Native</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Styling Basics</h3>
                <p>You can style a component using either:</p>
                <ul>
                  <li><strong>Inline</strong> styles</li>
                  <li><strong>StyleSheet.create()</strong></li>
                </ul>
                
                <h4 className="h5 mt-3">Inline Style:</h4>
                <pre><code>{`<Text style={{color:'blue', fontSize: 20}}>Hello</Text>`}</code></pre>
                
                <h4 className="h5 mt-3">Using StyleSheet:</h4>
                <pre><code>{`import { StyleSheet, Text } from 'react-native';

<Text style={styles.heading}>Hello</Text>

const styles = StyleSheet.create({
    heading: {
        color: 'blue',
        fontSize: 20,
    },
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Common Style Properties</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Properties</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Layout</td>
                      <td><code>flex, flexDirection, justifyContent, alignItems, margin, padding</code></td>
                    </tr>
                    <tr>
                      <td>Text</td>
                      <td><code>color, fontSize, fontWeight, textAlign</code></td>
                    </tr>
                    <tr>
                      <td>Box</td>
                      <td><code>width, height, borderWidth, borderColor, borderRadius</code></td>
                    </tr>
                    <tr>
                      <td>Color</td>
                      <td><code>backgroundColor, opacity</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Flexbox in React Native</h3>
                <p>React Native uses Flexbox for layout (like web CSS). Default <code>flexDirection</code> is <strong>column</strong> (not row like web).</p>
                <pre><code>{`<View style={{ 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center' 
}}>
    <Text>Box 1</Text>
    <Text>Box 2</Text>
</View>`}</code></pre>
                
                <table className="table-compare mt-3">
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Values</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>flexDirection</code></td>
                      <td><code>row, column</code></td>
                      <td>Direction of children</td>
                    </tr>
                    <tr>
                      <td><code>justifyContent</code></td>
                      <td><code>center, space-between, flex-start</code></td>
                      <td>Horizontal/vertical alignment</td>
                    </tr>
                    <tr>
                      <td><code>alignItems</code></td>
                      <td><code>center, flex-start, flex-end</code></td>
                      <td>Cross-axis alignment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Responsive Design Tips</h3>
                <ul>
                  <li>Use Dimensions API to get screen width/height.</li>
                  <pre><code>{`import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;`}</code></pre>
                  <li>Use % and flex for dynamic resizing.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Adding Custom Fonts & Colors</h3>
                
                <h4 className="h5 mt-3">Add Colors:</h4>
                <p>Create a colors.js file:</p>
                <pre><code>{`export default {
    primary: '#4CAF50',
    secondary: '#FFC107',
};`}</code></pre>
                
                <h4 className="h5 mt-3">Custom Fonts:</h4>
                <ol>
                  <li>Add .ttf font files to <code>assets/fonts/</code></li>
                  <li>Link them via <code>react-native.config.js</code></li>
                  <li>Use <code>fontFamily: 'YourFontName'</code></li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Style Reusability</h3>
                <p>You can define styles in a separate file:</p>
                <pre><code>{`// styles.js
export const buttonStyle = {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 8,
};`}</code></pre>
              </div>
            </section>

            <section id="core-components" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box-seam"></i> React Native Core Components</h2>
              
              <div className="property-card">
                <h3 className="h4">1. View</h3>
                <p>Acts like a div in HTML. Used as a container for layout.</p>
                <pre><code>{`<View style={{ padding: 20, backgroundColor: '#eee' }}>
    <Text>Hello from View</Text>
</View>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Text</h3>
                <p>Used to display text.</p>
                <pre><code>{`<Text style={{ fontSize: 18, color: 'black' }}>
    This is a Text component
</Text>`}</code></pre>
                <p><strong>Note:</strong> All text in React Native <strong>must</strong> be inside a Text component.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Image</h3>
                <p>Used to display images.</p>
                <pre><code>{`<Image  
    source={{ uri: 'https://example.com/image.png' }}  
    style={{ width: 100, height: 100 }}
/>`}</code></pre>
                <p>For local images:</p>
                <pre><code>{`<Image  
    source={require('./assets/logo.png')}  
    style={{ width: 100, height: 100 }}
/>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. ScrollView</h3>
                <p>Scrolls vertically or horizontally. Use for small lists or scrollable content.</p>
                <pre><code>{`<ScrollView>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    {/* More items */}
</ScrollView>`}</code></pre>
                <p>Not efficient for long lists → use FlatList.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. FlatList</h3>
                <p>Efficient way to render large lists of data.</p>
                <pre><code>{`const data = [
    { id: '1', title: 'Apple' },
    { id: '2', title: 'Banana' },
];

<FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <Text>{item.title}</Text>}
/>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. SectionList</h3>
                <p>Like FlatList but with sections and headers.</p>
                <pre><code>{`const DATA = [
    {
        title: "Fruits",
        data: ["Apple", "Banana"]
    },
    {
        title: "Vegetables",
        data: ["Carrot", "Tomato"]
    }
];

<SectionList
    sections={DATA}
    keyExtractor={(item, index) => item + index}
    renderItem={({ item }) => <Text>{item}</Text>}
    renderSectionHeader={({ section: { title } }) => (
        <Text style={{ fontWeight: 'bold' }}>{title}</Text>
    )}
/>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">7. TouchableOpacity & Button</h3>
                <p><strong>TouchableOpacity</strong> – Custom button with fade effect</p>
                <pre><code>{`<TouchableOpacity 
    onPress={() => alert('Pressed!')}
    style={{ padding: 10, backgroundColor: 'blue' }}>
    <Text style={{ color: 'white' }}>Click Me</Text>
</TouchableOpacity>`}</code></pre>
                
                <p><strong>Button</strong> – Basic button</p>
                <pre><code>{`<Button 
    title="Press Me" 
    onPress={() => alert('Hello!')}
/>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Other Useful Components</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>TextInput</code></td>
                      <td>User input fields</td>
                    </tr>
                    <tr>
                      <td><code>SafeAreaView</code></td>
                      <td>Avoid overlapping with notches/status bar</td>
                    </tr>
                    <tr>
                      <td><code>KeyboardAvoidingView</code></td>
                      <td>Move UI when keyboard appears</td>
                    </tr>
                    <tr>
                      <td><code>Modal</code></td>
                      <td>Create popup dialog boxes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="navigation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-signpost"></i> Navigation in React Native</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Installing React Navigation</h3>
                <p>Run the following commands:</p>
                <pre><code>{`npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install react-native-gesture-handler react-native-reanimated
npm install @react-navigation/native-stack`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Types of Navigators</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Navigator Type</th>
                      <th>Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Stack</td>
                      <td>Screen-to-screen transitions</td>
                    </tr>
                    <tr>
                      <td>Tab</td>
                      <td>Bottom tabs (like Instagram)</td>
                    </tr>
                    <tr>
                      <td>Drawer</td>
                      <td>Sidebar navigation (like Gmail)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Stack Navigation (Basic)</h3>
                <pre><code>{`import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Tab Navigation</h3>
                <pre><code>{`npm install @react-navigation/bottom-tabs

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

<Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Drawer Navigation</h3>
                <pre><code>{`npm install @react-navigation/drawer

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

<Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
</Drawer.Navigator>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Navigating Between Screens</h3>
                <pre><code>{`// Navigate to another screen
props.navigation.navigate('About');

// Go back to previous screen
props.navigation.goBack();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">7. Passing Data Between Screens</h3>
                <pre><code>{`// From HomeScreen
navigation.navigate('About', { username: 'Mugil' });

// In AboutScreen
const route = useRoute();
<Text>{route.params.username}</Text>`}</code></pre>
              </div>
            </section>

            <section id="hooks" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-hdd-stack"></i> React Native Hooks</h2>
              
              <div className="property-card">
                <h3 className="h4">What Are Hooks?</h3>
                <ul>
                  <li>Hooks allow you to use <strong>React features</strong> like state, lifecycle, and context <strong>without using class components</strong>.</li>
                  <li>React Native uses the same hook system as React.js.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. useState Hook</h3>
                <p>Used to declare state in a functional component.</p>
                <pre><code>{`import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button 
                title="Increase" 
                onPress={() => setCount(count + 1)} 
            />
        </View>
    );
};`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. useEffect Hook</h3>
                <p>Used to perform side effects like API calls, timers, etc.</p>
                <pre><code>{`import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setTime((t) => t + 1), 1000);
        return () => clearInterval(timer); // cleanup
    }, []);

    return <Text>Time: {time}</Text>;
};`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. useRef Hook</h3>
                <p>Used to create a reference to a value or UI element (no re-render).</p>
                <pre><code>{`import React, { useRef } from 'react';
import { TextInput, Button } from 'react-native';

const InputFocus = () => {
    const inputRef = useRef(null);

    return (
        <>
            <TextInput ref={inputRef} style={{ borderWidth: 1 }} />
            <Button 
                title="Focus Input" 
                onPress={() => inputRef.current.focus()} 
            />
        </>
    );
};`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. useMemo Hook</h3>
                <p>Used to optimize performance by memorizing expensive calculations.</p>
                <pre><code>{`const expensiveCalculation = useMemo(() => {
    return count * 10;
}, [count]);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. useCallback Hook</h3>
                <p>Memoizes functions to prevent unnecessary re-renders.</p>
                <pre><code>{`const memoizedFunction = useCallback(() => {
    console.log("Function re-used");
}, []);`}</code></pre>
              </div>
            </section>

            <section id="user-input" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-keyboard"></i> Handling User Input</h2>
              
              <div className="property-card">
                <h3 className="h4">1. TextInput – User Input Field</h3>
                <p>Used for capturing text like name, email, password, etc.</p>
                <pre><code>{`import { TextInput, View, Text } from 'react-native';

const InputExample = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <TextInput
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
                style={{ borderWidth: 1, padding: 10 }}
            />
            <Text>Hello, {name}</Text>
        </View>
    );
};`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Handling Multiple Inputs (Forms)</h3>
                <pre><code>{`const [form, setForm] = useState({
    email: '',
    password: '',
});

const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
};

<TextInput
    placeholder="Email"
    value={form.email}
    onChangeText={(val) => handleChange('email', val)}
/>

<TextInput
    placeholder="Password"
    secureTextEntry
    value={form.password}
    onChangeText={(val) => handleChange('password', val)}
/>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Common Props in TextInput</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>placeholder</code></td>
                      <td>Hint inside the input</td>
                    </tr>
                    <tr>
                      <td><code>secureTextEntry</code></td>
                      <td>For password fields</td>
                    </tr>
                    <tr>
                      <td><code>keyboardType</code></td>
                      <td><code>default, email-address, numeric</code></td>
                    </tr>
                    <tr>
                      <td><code>onChangeText</code></td>
                      <td>Callback on input change</td>
                    </tr>
                    <tr>
                      <td><code>value</code></td>
                      <td>Controlled input value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Basic Validation Example</h3>
                <pre><code>{`const handleSubmit = () => {
    if (!form.email || !form.password) {
        alert('All fields are required');
        return;
    }
    alert('Email: \${form.email}');
};`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Advanced: Use Form Libraries (Optional)</h3>
                <p>You can also use libraries like:</p>
                <ul>
                  <li><strong>Formik</strong> – Form management</li>
                  <li><strong>Yup</strong> – Validation schema</li>
                </ul>
                <p>Example with Formik + Yup:</p>
                <pre><code>{`npm install formik yup

import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
});`}</code></pre>
              </div>
            </section>

            <section id="api" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-plug"></i> API Integration in React Native</h2>
              
              <div className="property-card">
                <h3 className="h4">1. What is an API?</h3>
                <p>API (Application Programming Interface) allows communication between your React Native app and a backend (like Node.js, Laravel, etc.).</p>
                <p>Example:</p>
                <ul>
                  <li><code>GET</code> → fetch product list</li>
                  <li><code>POST</code> → login or submit form</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Using fetch() Method</h3>
                <p><code>fetch()</code> is a built-in JavaScript function used to make HTTP requests.</p>
                
                <h4 className="h5 mt-3">Example: GET Request</h4>
                <pre><code>{`import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const ProductList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.error(err));
    }, []);

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Text>{item.title}</Text>}
        />
    );
};`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. POST Request using fetch()</h3>
                <pre><code>{`const login = () => {
    fetch('https://example.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            email: 'mugil@example.com', 
            password: '123456' 
        }),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Using axios Library</h3>
                <p>Axios is a third-party promise-based HTTP client.</p>
                <p>Install Axios:</p>
                <pre><code>{`npm install axios`}</code></pre>
                <p>Example using Axios:</p>
                <pre><code>{`import axios from 'axios';

useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
}, []);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Error Handling</h3>
                <p>Always handle API errors gracefully:</p>
                <pre><code>{`.catch((error) => {
    Alert.alert("Something went wrong", error.message);
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Authentication (Optional)</h3>
                <p>For secure APIs, use JWT tokens:</p>
                <pre><code>{`headers: {
    Authorization: 'Bearer \${token}',
}`}</code></pre>
              </div>
            </section>

            <section id="storage" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-device-hdd"></i> React Native AsyncStorage</h2>
              
              <div className="property-card">
                <h3 className="h4">What is AsyncStorage?</h3>
                <p>AsyncStorage is used to store small key-value data locally on the device — like login status, user preferences, theme, etc.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Installing AsyncStorage</h3>
                <pre><code>{`npm install @react-native-async-storage/async-storage

# Then link it (if not auto-linked):
npx pod-install`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Basic Usage</h3>
                
                <h4 className="h5 mt-3">Save data to storage</h4>
                <pre><code>{`import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async () => {
    try {
        await AsyncStorage.setItem('username', 'Mugilvannan');
        alert('Data Saved');
    } catch (e) {
        console.error('Error saving data', e);
    }
};`}</code></pre>
                
                <h4 className="h5 mt-3">Get data from storage</h4>
                <pre><code>{`const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('username');
        if (value !== null) {
            alert('Welcome back, \${value}');
        }
    } catch (e) {
        console.error('Error reading data', e);
    }
};`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Remove Data</h3>
                <pre><code>{`await AsyncStorage.removeItem('username');`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Store JSON Objects</h3>
                <p>Convert to string using JSON.stringify() and parse using JSON.parse().</p>
                <pre><code>{`await AsyncStorage.setItem('user', JSON.stringify({ id: 1, name: 'Mugil' }));

const userData = await AsyncStorage.getItem('user');
const parsed = JSON.parse(userData);
console.log(parsed.name); // Mugil`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Important Notes</h3>
                <ul>
                  <li>All data is stored permanently unless cleared manually</li>
                  <li>Only works with small key-value data</li>
                  <li>For large data use SQLite or Realm</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Time Use Cases</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Use Case</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Login Token</td>
                      <td>Save JWT after login</td>
                    </tr>
                    <tr>
                      <td>Theme Preference</td>
                      <td>Dark/Light mode</td>
                    </tr>
                    <tr>
                      <td>User Session</td>
                      <td>Auto-login if user is already saved</td>
                    </tr>
                    <tr>
                      <td>First-Time Launch</td>
                      <td>Show onboarding only once</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="animations" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-magic"></i> React Native Animations</h2>
              
              <div className="property-card">
                <h3 className="h4">What Are Animations in React Native?</h3>
                <ul>
                  <li>Animations improve the user experience by adding motion to UI components like buttons, views, images, etc.</li>
                  <li>React Native provides a built-in library called Animated.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Basic Fade-In Animation</h3>
                <pre><code>{`import React, { useEffect, useRef } from 'react';
import { Animated, View, Text } from 'react-native';

const FadeInView = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={{ fontSize: 28 }}>Welcome Mugil</Text>
        </Animated.View>
    );
};`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Move View Left to Right (Translate)</h3>
                <pre><code>{`const moveAnim = useRef(new Animated.Value(0)).current;

useEffect(() => {
    Animated.timing(moveAnim, {
        toValue: 100,
        duration: 1500,
        useNativeDriver: true,
    }).start();
}, []);

<Animated.View style={{ transform: [{ translateX: moveAnim }] }}>
    <Text>Sliding View</Text>
</Animated.View>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Looping / Repeating Animations</h3>
                <pre><code>{`useEffect(() => {
    Animated.loop(
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
        ])
    ).start();
}, []);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Animation Types</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>timing</code></td>
                      <td>Time-based animation</td>
                    </tr>
                    <tr>
                      <td><code>spring</code></td>
                      <td>Spring physics-based animation</td>
                    </tr>
                    <tr>
                      <td><code>decay</code></td>
                      <td>Slows down to stop</td>
                    </tr>
                    <tr>
                      <td><code>sequence</code></td>
                      <td>Multiple animations in order</td>
                    </tr>
                    <tr>
                      <td><code>parallel</code></td>
                      <td>Run multiple at once</td>
                    </tr>
                    <tr>
                      <td><code>loop</code></td>
                      <td>Repeats animation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Lottie Animations (Optional)</h3>
                <p>For ready-made animations (JSON format), use Lottie:</p>
                <pre><code>{`npm install lottie-react-native

import LottieView from 'lottie-react-native';

<LottieView
    source={require('./loading.json')}
    autoPlay
    loop
/>`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Real-Time Use Cases</h3>
                <ul>
                  <li>Fade in/out screens</li>
                  <li>Button press effects</li>
                  <li>Progress bars</li>
                  <li>Sliding modals</li>
                  <li>Loading animations with Lottie</li>
                </ul>
              </div>
            </section>

            <section id="firebase" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-fire"></i> Firebase Integration in React Native</h2>
              
              <div className="property-card">
                <h3 className="h4">What is Firebase?</h3>
                <p>Firebase is a <strong>backend-as-a-service</strong> (BaaS) provided by Google.</p>
                <p>In React Native, it's used for:</p>
                <ul>
                  <li>Authentication</li>
                  <li>Firestore / Realtime DB</li>
                  <li>Push Notifications</li>
                  <li>Cloud Storage</li>
                  <li>Analytics</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Install Firebase SDK</h3>
                <pre><code>{`npm install @react-native-firebase/app

# If you need extra services:
npm install @react-native-firebase/auth // For login/signup
npm install @react-native-firebase/firestore // For database
npm install @react-native-firebase/messaging // For push notifications`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Setup Firebase Project</h3>
                <ol>
                  <li>Go to <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer">https://console.firebase.google.com</a></li>
                  <li>Click Add project → Name it</li>
                  <li>Add Android/iOS app to the project</li>
                  <li>Download <code>google-services.json</code> (Android) or <code>GoogleService-Info.plist</code> (iOS)</li>
                  <li>Place it in:
                    <ul>
                      <li><code>android/app/google-services.json</code></li>
                      <li><code>ios/YourApp/GoogleService-Info.plist</code></li>
                    </ul>
                  </li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Android Setup</h3>
                <p>android/build.gradle</p>
                <pre><code>{`buildscript {
    dependencies {
        classpath 'com.google.gms:google-services:4.3.15'
    }
}`}</code></pre>
                <p>android/app/build.gradle</p>
                <pre><code>{`apply plugin: 'com.google.gms.google-services'`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Firebase Initialization</h3>
                <p>Usually auto-initialized when you import:</p>
                <pre><code>{`import firebase from '@react-native-firebase/app';`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Firebase Authentication Example</h3>
                <pre><code>{`import auth from '@react-native-firebase/auth';

const loginUser = async () => {
    try {
        await auth().signInWithEmailAndPassword('user@example.com', '123456');
        alert('Login Successful');
    } catch (error) {
        alert(error.message);
    }
};

// Sign Up
await auth().createUserWithEmailAndPassword('user@example.com', '123456');`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Firebase Firestore Example (Database)</h3>
                <pre><code>{`npm install @react-native-firebase/firestore

import firestore from '@react-native-firebase/firestore';

// Add data
firestore()
    .collection('users')
    .add({
        name: 'Mugil',
        email: 'mugil@example.com',
    });

// Fetch data
firestore()
    .collection('users')
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach(doc => {
            console.log(doc.id, doc.data());
        });
    });`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">7. Firebase Push Notifications (FCM)</h3>
                <pre><code>{`npm install @react-native-firebase/messaging

// Ask for Permission
import messaging from '@react-native-firebase/messaging';

useEffect(() => {
    messaging().requestPermission();
    messaging().getToken().then(token => {
        console.log('FCM Token:', token);
    });
}, []);

// Handle Notifications
messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message!', JSON.stringify(remoteMessage));
};`}</code></pre>
              </div>
            </section>

            <section id="permissions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> React Native Permissions Handling</h2>
              
              <div className="property-card">
                <h3 className="h4">Requesting Permissions</h3>
                <p>React Native apps often need runtime permissions on Android (like camera, location).</p>
                <pre><code>{`npm install react-native-permissions

// Example: Request Camera Permission
import { PermissionsAndroid } from 'react-native';

const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Camera permission granted');
        } else {
            console.log('Camera permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
};`}</code></pre>
              </div>
            </section>

            <section id="deployment" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cloud-upload"></i> React Native App Deployment</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Generate Signed APK</h3>
                <p>Update android/app/build.gradle with:</p>
                <pre><code>{`signingConfigs {
    release {
        storeFile file('keystore.jks')
        storePassword '*****'
        keyAlias 'key0'
        keyPassword '*****'
    }
}`}</code></pre>
                <p>Build APK:</p>
                <pre><code>{`cd android
./gradlew assembleRelease`}</code></pre>
                <p>APK will be at:</p>
                <pre><code>{`android/app/build/outputs/apk/release/app-release.apk`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Upload to Play Store</h3>
                <ul>
                  <li>Create Developer Account → <a href="https://play.google.com/console" target="_blank" rel="noopener noreferrer">https://play.google.com/console</a></li>
                  <li>Create new app → Upload APK → Add details → Publish</li>
                </ul>
              </div>
            </section>

            <section id="camera" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-camera"></i> React Native Camera & Image Picker</h2>
              
              <div className="property-card">
                <h3 className="h4">Installation</h3>
                <pre><code>{`npm install react-native-image-picker`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Usage</h3>
                <pre><code>{`import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// Launch Camera
launchCamera({ mediaType: 'photo' }, response => {
    console.log(response.assets[0].uri);
});

// Choose from Gallery
launchImageLibrary({ mediaType: 'photo' }, response => {
    console.log(response.assets[0].uri);
});`}</code></pre>
              </div>
            </section>

            <section id="maps" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-map"></i> Using Maps & Location in React Native</h2>
              
              <div className="property-card">
                <h3 className="h4">Installation</h3>
                <pre><code>{`npm install react-native-maps
npm install @react-native-community/geolocation`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Usage</h3>
                <pre><code>{`<MapView
    style={{ flex: 1 }}
    initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }}
/>

// Get current location
Geolocation.getCurrentPosition(
    position => console.log(position),
    error => console.log(error),
);`}</code></pre>
              </div>
            </section>

            <section id="charts" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bar-chart"></i> React Native Chart Libraries</h2>
              
              <div className="property-card">
                <h3 className="h4">Installation</h3>
                <p>Popular library:</p>
                <pre><code>{`npm install react-native-chart-kit`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Example Usage</h3>
                <pre><code>{`import { LineChart } from 'react-native-chart-kit';

<LineChart
    data={{
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{ data: [20, 45, 28] }],
    }}
    width={320}
    height={220}
    chartConfig={{
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        color: () => '#000',
    }}
/>`}</code></pre>
              </div>
            </section>

            <section id="projects" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-lightbulb"></i> React Native Mini Project Ideas</h2>
              
              <div className="property-card">
                <h3 className="h4">Beginner to Intermediate Project Ideas</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Login App</td>
                      <td>Firebase auth + form validation</td>
                    </tr>
                    <tr>
                      <td>Shopping Cart App</td>
                      <td>Add to cart + product API + total calc</td>
                    </tr>
                    <tr>
                      <td>Food Delivery UI</td>
                      <td>Categories + menu cards + order screen</td>
                    </tr>
                    <tr>
                      <td>Notes App</td>
                      <td>Add/edit/delete notes with AsyncStorage</td>
                    </tr>
                    <tr>
                      <td>Location Tracker</td>
                      <td>Track real-time location on map</td>
                    </tr>
                    <tr>
                      <td>Camera App</td>
                      <td>Take photos and save to gallery</td>
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
          <p>React Native Notes &copy; 2025 | Based on original content by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default ReactNativeNotes;