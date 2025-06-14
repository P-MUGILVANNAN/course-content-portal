import React from 'react';

function FlutterNotes() {
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
            background-color: #f8f9fa;
          }
        `}
      </style>

      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-phone"></i> Flutter Notes</h1>
          <p className="lead">Your Comprehensive Guide to Flutter Development</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#dart"><i className="bi bi-code-square"></i> Dart Basics</a>
              <a className="nav-link" href="#project-structure"><i className="bi bi-folder"></i> Project Structure</a>
              <a className="nav-link" href="#widgets"><i className="bi bi-layout-wtf"></i> Widgets</a>
              <a className="nav-link" href="#layout"><i className="bi bi-grid"></i> Layout & Styling</a>
              <a className="nav-link" href="#navigation"><i className="bi bi-signpost"></i> Navigation</a>
              <a className="nav-link" href="#forms"><i className="bi bi-input-cursor-text"></i> Forms & Input</a>
              <a className="nav-link" href="#state"><i className="bi bi-arrow-repeat"></i> State Management</a>
              <a className="nav-link" href="#networking"><i className="bi bi-globe"></i> Networking</a>
              <a className="nav-link" href="#storage"><i className="bi bi-database"></i> Local Storage</a>
              <a className="nav-link" href="#firebase"><i className="bi bi-fire"></i> Firebase</a>
              <a className="nav-link" href="#animations"><i className="bi bi-magic"></i> Animations</a>
              <a className="nav-link" href="#packages"><i className="bi bi-box-seam"></i> Packages</a>
              <a className="nav-link" href="#deployment"><i className="bi bi-cloud-upload"></i> Deployment</a>
              <a className="nav-link" href="#projects"><i className="bi bi-lightbulb"></i> Project Ideas</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Flutter</h2>
              
              <div className="property-card">
                <h3 className="h4">What is Flutter?</h3>
                <p>Flutter is an open-source UI toolkit by <strong>Google</strong> used to build <strong>natively compiled applications</strong> for mobile, web, and desktop from a single codebase.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Why Flutter?</h3>
                <ul>
                  <li>Fast Development (Hot Reload)</li>
                  <li>Expressive UI</li>
                  <li>Native Performance</li>
                  <li>Single codebase for Android & iOS</li>
                  <li>Huge community and plugin support</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Flutter vs Other Frameworks</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Flutter</th>
                      <th>React Native</th>
                      <th>Kotlin/Swift</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>UI</td>
                      <td>Own UI</td>
                      <td>Uses native widgets</td>
                      <td>Native widgets</td>
                    </tr>
                    <tr>
                      <td>Performance</td>
                      <td>High</td>
                      <td>Medium</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Language</td>
                      <td>Dart</td>
                      <td>JavaScript</td>
                      <td>Kotlin/Swift</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Flutter Architecture</h3>
                <pre><code>{`Flutter Engine (C++)
↓
Dart Framework (Widgets, Animation, Rendering)
↓
Widgets Layer (Stateless, Stateful)
↓
App UI (Your Code)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Use Cases of Flutter</h3>
                <ul>
                  <li>Mobile apps (Android/iOS)</li>
                  <li>Web apps</li>
                  <li>Desktop apps (Windows, macOS, Linux)</li>
                  <li>Embedded systems</li>
                </ul>
              </div>
            </section>

            <section id="dart" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Dart Programming Basics</h2>
              
              <div className="property-card">
                <h3 className="h4">What is Dart?</h3>
                <p>Dart is a modern object-oriented, garbage-collected language developed by Google. Flutter uses Dart to build apps.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Variables & Data Types</h3>
                <pre><code>{`void main() {
  String name = "Mugil";
  int age = 25;
  double height = 5.8;
  bool isStudent = true;
  print("Name: $name, Age: $age");
}`}</code></pre>
                <p>Common Data Types:</p>
                <ul>
                  <li><code>String</code> – Text</li>
                  <li><code>int</code> – Whole numbers</li>
                  <li><code>double</code> – Decimal numbers</li>
                  <li><code>bool</code> – true/false</li>
                  <li><code>var</code> – Automatically detects type</li>
                  <li><code>dynamic</code> – Type can change during runtime</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Functions</h3>
                <pre><code>{`void greet(String name) {
  print("Hello, $name!");
}

int add(int a, int b) {
  return a + b;
}

void main() {
  greet("Bro");
  print(add(5, 3));
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Control Statements</h3>
                <pre><code>{`// if/else
int age = 20;
if (age >= 18) {
  print("Adult");
} else {
  print("Minor");
}

// for loop
for (int i = 0; i < 5; i++) {
  print("Value: $i");
}

// while loop
int j = 0;
while (j < 5) {
  print("Count: $j");
  j++;
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Collections (List, Set, Map)</h3>
                <pre><code>{`// List
List<String> fruits = ["Apple", "Banana", "Mango"];
print(fruits[1]); // Banana

// Set
Set<int> ids = {1, 2, 3};

// Map
Map<String, String> person = {
  "name": "Mugil",
  "city": "Chennai"
};
print(person["name"]); // Mugil`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Null Safety</h3>
                <pre><code>{`String? name = null;  // Nullable type
print(name); // Output: null

// Force non-null value
String? name = "Mugil";
print(name!); // Mugil`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Classes & Objects</h3>
                <pre><code>{`class Student {
  String name;
  int age;
  
  Student(this.name, this.age);
  
  void display() {
    print("Name: $name, Age: $age");
  }
}

void main() {
  Student s1 = Student("Mugil", 20);
  s1.display();
}`}</code></pre>
              </div>
            </section>

            <section id="project-structure" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-folder"></i> Flutter Project Structure</h2>
              
              <div className="property-card">
                <h3 className="h4">Standard Folder Structure</h3>
                <pre><code>{`my_app/
|--- android/    → Android native code
|--- ios/       → iOS native code
|--- lib/       → Dart source code (main folder for Flutter app)
|    |--- main.dart → Entry point of the app
|--- pubspec.yaml → Configuration file (packages, fonts, assets)
|--- test/      → Unit & widget tests
|--- build/     → Auto-generated build files`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. lib/ - Main Dart Code</h3>
                <p>Contains main.dart (starting point) and can include:</p>
                <ul>
                  <li><code>screens/</code> – screen UIs</li>
                  <li><code>widgets/</code> – custom reusable widgets</li>
                  <li><code>models/</code> – data classes</li>
                  <li><code>services/</code> – API calls, database logic</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. main.dart - App Entry Point</h3>
                <pre><code>{`void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomeScreen(),
    );
  }
}`}</code></pre>
                <ul>
                  <li><code>runApp()</code> launches the app</li>
                  <li><code>MaterialApp</code> is the root widget for Material Design</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. pubspec.yaml - Project Configuration</h3>
                <pre><code>{`name: my_app
dependencies:
  flutter:
    sdk: flutter
  http: ^0.13.4
  provider: ^6.0.0

flutter:
  assets:
    - assets/images/
  fonts:
    - family: Roboto
      fonts:
        - asset: assets/fonts/Roboto-Regular.ttf`}</code></pre>
                <p>After modifying this file, run: <code>flutter pub get</code></p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. android/ & ios/ folders</h3>
                <ul>
                  <li>Platform-specific code for Android & iOS</li>
                  <li>Usually you don't need to modify these unless doing native integrations like camera, notifications, etc.</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. test/ folder</h3>
                <ul>
                  <li>Used for writing test cases</li>
                  <li>Can write unit tests, widget tests, integration tests</li>
                </ul>
              </div>
            </section>

            <section id="widgets" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layout-wtf"></i> Widgets (Basics)</h2>
              
              <div className="property-card">
                <h3 className="h4">What is a Widget?</h3>
                <p>A <strong>widget</strong> is a basic building block of the Flutter UI. Everything in Flutter is a widget: layouts, buttons, text, padding, etc.</p>
                <p>There are 2 types of widgets:</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. StatelessWidget</h3>
                <ul>
                  <li>Immutable (once built, can't change)</li>
                  <li>Used when UI doesn't change dynamically</li>
                </ul>
                <pre><code>{`import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Stateless Widget')),
        body: Center(
          child: Text("Hello, Flutter!"),
        ),
      ),
    );
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. StatefulWidget</h3>
                <ul>
                  <li>Mutable (can change UI when user interacts)</li>
                  <li>Used when UI changes dynamically (e.g., counter, form input)</li>
                </ul>
                <pre><code>{`import 'package:flutter/material.dart';

class MyCounter extends StatefulWidget {
  @override
  _MyCounterState createState() => _MyCounterState();
}

class _MyCounterState extends State<MyCounter> {
  int count = 0;

  void increment() {
    setState(() {
      count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Stateful Widget")),
      body: Center(child: Text("Count: $count")),
      floatingActionButton: FloatingActionButton(
        onPressed: increment,
        child: Icon(Icons.add),
      ),
    );
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Commonly Used Widgets</h3>
                <pre><code>{`// Text Widget
Text("Welcome to Flutter!", style: TextStyle(fontSize: 20))

// Image Widget
Image.asset("assets/images/logo.png")
Image.network("https://example.com/image.png")

// Container Widget
Container(
  height: 100,
  width: 100,
  color: Colors.blue,
  child: Center(child: Text("Box")),
)

// Row & Column
Row(
  children: [
    Icon(Icons.star),
    Text("Flutter"),
  ],
)
Column(
  children: [
    Text("Line 1"),
    Text("Line 2"),
  ],
)

// Stack
Stack(
  children: [
    Container(color: Colors.red, height: 100, width: 100),
    Positioned(
      top: 20,
      left: 20,
      child: Text("On Top"),
    ),
  ],
)

// Buttons
ElevatedButton(
  onPressed: () {
    print("Button Clicked");
  },
  child: Text("Click Me"),
)

TextButton(
  onPressed: () {},
  child: Text("Flat Button"),
)

IconButton(
  onPressed: () {},
  icon: Icon(Icons.favorite),
)`}</code></pre>
              </div>
            </section>

            <section id="layout" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-grid"></i> Layout & Styling</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Padding & Margin</h3>
                <pre><code>{`// Padding Widget
Padding(
  padding: EdgeInsets.all(16.0),
  child: Text("Hello with Padding"),
)

// Margin (via Container)
Container(
  margin: EdgeInsets.symmetric(horizontal: 20),
  child: Text("Text with Margin"),
)`}</code></pre>
                <p>EdgeInsets methods:</p>
                <ul>
                  <li><code>all(value)</code> – uniform padding/margin</li>
                  <li><code>symmetric(horizontal: x, vertical: y)</code></li>
                  <li><code>only(left: x, right: y, ...)</code></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. SizedBox (for spacing)</h3>
                <pre><code>{`SizedBox(height: 20) // adds vertical space
SizedBox(width: 10) // adds horizontal space`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Alignments</h3>
                <pre><code>{`// Center
Center(
  child: Text("Centered Text"),
)

// Align
Align(
  alignment: Alignment.bottomRight,
  child: Text("Bottom Right"),
)`}</code></pre>
                <p>Alignment options: topLeft, center, bottomRight, etc.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. BoxDecoration (for styling Containers)</h3>
                <pre><code>{`Container(
  width: 150,
  height: 150,
  decoration: BoxDecoration(
    color: Colors.blue,
    borderRadius: BorderRadius.circular(12),
    border: Border.all(color: Colors.black, width: 2),
    boxShadow: [
      BoxShadow(
        color: Colors.grey,
        offset: Offset(4, 4),
        blurRadius: 6,
      ),
    ],
  ),
  child: Center(child: Text("Styled Box")),
)`}</code></pre>
                <p>Features:</p>
                <ul>
                  <li><code>color</code> – background color</li>
                  <li><code>borderRadius</code> – rounded corners</li>
                  <li><code>border</code> – outlines</li>
                  <li><code>boxShadow</code> – shadow effects</li>
                  <li><code>gradient</code> – gradient backgrounds</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Responsive Design with MediaQuery</h3>
                <pre><code>{`double width = MediaQuery.of(context).size.width;
double height = MediaQuery.of(context).size.height;

// Example:
Container(
  width: MediaQuery.of(context).size.width * 0.8,
  height: 200,
  color: Colors.green,
)`}</code></pre>
                <p>Helps your app scale correctly on different screen sizes.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Flexible & Expanded Widgets</h3>
                <pre><code>{`// Used inside Row or Column to distribute space
Row(
  children: [
    Expanded(child: Container(color: Colors.red, height: 100)),
    Expanded(child: Container(color: Colors.blue, height: 100)),
  ],
)`}</code></pre>
                <ul>
                  <li><code>Expanded</code> takes equal available space</li>
                  <li><code>Flexible</code> can be adjusted with flex value</li>
                </ul>
              </div>
            </section>

            <section id="navigation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-signpost"></i> Navigation & Routing</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Basic Navigation</h3>
                <pre><code>{`// Navigate to another screen
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => SecondScreen()),
);

// Go back to the previous screen
Navigator.pop(context);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Passing Data Between Screens</h3>
                <pre><code>{`// From First Screen:
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => SecondScreen(name: "Mugil"),
  ),
);

// Second Screen:
class SecondScreen extends StatelessWidget {
  final String name;
  
  SecondScreen({required this.name});
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(child: Text("Welcome $name"))
    );
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Named Routing (Recommended for larger apps)</h3>
                <pre><code>{`// Step 1: Define routes in MaterialApp
void main() {
  runApp(MaterialApp(
    initialRoute: '/',
    routes: {
      '/': (context) => HomeScreen(),
      '/about': (context) => AboutScreen(),
    },
  ));
}

// Step 2: Navigate using route name
Navigator.pushNamed(context, '/about');

// Step 3: Go back
Navigator.pop(context);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Send & Receive Data with Named Routes</h3>
                <pre><code>{`// Passing arguments:
Navigator.pushNamed(
  context,
  '/details',
  arguments: "Mugil",
);

// Receiving in details screen:
@Override
Widget build(BuildContext context) {
  final args = ModalRoute.of(context).settings.arguments as String;
  return Scaffold(
    body: Center(child: Text("Hello $args"));
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Push Replacement (for login/home screens)</h3>
                <pre><code>{`Navigator.pushReplacement(
  context,
  MaterialPageRoute(builder: (context) => HomeScreen()),
);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Remove All Previous Routes</h3>
                <pre><code>{`Navigator.pushAndRemoveUntil(
  context,
  MaterialPageRoute(builder: (context) => HomeScreen()),
  (Route<dynamic> route) => false,
);`}</code></pre>
              </div>
            </section>

            <section id="forms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-input-cursor-text"></i> Forms & User Input</h2>
              
              <div className="property-card">
                <h3 className="h4">1. TextField (Basic Input)</h3>
                <pre><code>{`TextField(
  decoration: InputDecoration(
    labelText: 'Enter Name',
    border: OutlineInputBorder(),
  ),
)`}</code></pre>
                <p>Other decorations:</p>
                <ul>
                  <li><code>hintText</code>, <code>prefixIcon</code>, <code>suffixIcon</code></li>
                  <li><code>obscureText: true</code> for passwords</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. TextEditingController</h3>
                <pre><code>{`TextEditingController nameController = TextEditingController();

TextField(
  controller: nameController,
  decoration: InputDecoration(labelText: "Enter Name"),
)

ElevatedButton(
  onPressed: () {
    print("Name: \${nameController.text}");
  },
  child: Text("Submit"),
)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Form Widget with Validation</h3>
                <pre><code>{`final _formKey = GlobalKey<FormState>();

Form(
  key: _formKey,
  child: Column(
    children: [
      TextFormField(
        decoration: InputDecoration(labelText: 'Email'),
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Please enter email';
          }
          return null;
        },
      ),
      ElevatedButton(
        onPressed: () {
          if (_formKey.currentState!.validate()) {
            // Submit logic
            print("Form is valid");
          }
        },
        child: Text("Submit"),
      ),
    ],
  ),
)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Checkbox, Radio Button, Switch</h3>
                <pre><code>{`// Checkbox
bool isChecked = false;

Checkbox(
  value: isChecked,
  onChanged: (bool? newValue) {
    setState(() {
      isChecked = newValue!;
    });
  },
)

// Radio Button
int selectedValue = 1;

Radio(
  value: 1,
  groupValue: selectedValue,
  onChanged: (int? value) {
    setState(() {
      selectedValue = value!;
    });
  },
)

// Switch
bool isOn = true;

Switch(
  value: isOn,
  onChanged: (bool value) {
    setState(() {
      isOn = value;
    });
  },
)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. Dropdown Button</h3>
                <pre><code>{`String selectedItem = 'Apple';

DropdownButton<String>(
  value: selectedItem,
  items: ['Apple', 'Banana', 'Mango'].map((item) {
    return DropdownMenuItem<String>(
      value: item,
      child: Text(item),
    );
  }).toList(),
  onChanged: (newValue) {
    setState(() {
      selectedItem = newValue!;
    });
  },
)`}</code></pre>
              </div>
            </section>

            <section id="state" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> State Management</h2>
              
              <div className="property-card">
                <h3 className="h4">What is State?</h3>
                <p>State = data that changes during app usage.</p>
                <p>Examples:</p>
                <ul>
                  <li>Login status</li>
                  <li>Cart items</li>
                  <li>Toggle switch</li>
                  <li>Counter number</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">A. setState() – For small widgets</h3>
                <pre><code>{`class MyHome extends StatefulWidget {
  @override
  _MyHomeState createState() => _MyHomeState();
}

class _MyHomeState extends State<MyHome> {
  int count = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(child: Text('Count: $count')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(() {
            count++;
          });
        },
        child: Icon(Icons.add),
      ),
    );
  }
}`}</code></pre>
                <p><code>setState()</code> rebuilds only that widget.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">B. Provider – Recommended for medium to large apps</h3>
                <p>Step-by-step:</p>
                <pre><code>{`// Step 1: Add in pubspec.yaml
dependencies:
  provider: ^6.0.0

// Then run:
flutter pub get

// Step 2: Create a state class
import 'package:flutter/material.dart';

class CounterProvider with ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}

// Step 3: Provide it to your app
import 'package:provider/provider.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: () => CounterProvider(),
      child: MyApp(),
    ),
  );
}

// Step 4: Use it in widgets
Consumer<CounterProvider>(
  builder: (context, provider, child) {
    return Text('Count: \${provider.count}');
  },
)

ElevatedButton(
  onPressed: () {
    Provider.of<CounterProvider>(context, listen: false).increment();
  },
  child: Text("Add"),
)`}</code></pre>
                <p><code>Consumer</code> listens to changes. <code>notifyListeners()</code> triggers widget rebuild.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Comparison Summary</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>setState()</td>
                      <td>Small, simple widgets</td>
                    </tr>
                    <tr>
                      <td>Provider</td>
                      <td>Medium apps, shared data</td>
                    </tr>
                    <tr>
                      <td>Riverpod</td>
                      <td>Better Provider (advanced)</td>
                    </tr>
                    <tr>
                      <td>BLoC</td>
                      <td>Large scale enterprise apps</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="property-card">
                <h3 className="h4">State Management Tools List</h3>
                <ul>
                  <li>setState</li>
                  <li>Provider</li>
                  <li>Riverpod</li>
                  <li>GetX</li>
                  <li>Bloc</li>
                  <li>Cubit</li>
                  <li>MobX</li>
                  <li>Redux</li>
                </ul>
              </div>
            </section>

            <section id="networking" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-globe"></i> Networking – API Calls & JSON Parsing</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Add http package</h3>
                <pre><code>{`// Add in pubspec.yaml:
dependencies:
  http: ^0.13.6

// Then run:
flutter pub get`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. GET Request – Fetch Data from API</h3>
                <pre><code>{`import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class MyHome extends StatefulWidget {
  @override
  _MyHomeState createState() => _MyHomeState();
}

class _MyHomeState extends State<MyHome> {
  List users = [];
  
  Future<void> fetchUsers() async {
    final response = await http.get(Uri.parse("https://jsonplaceholder.typicode.com/users"));
    if (response.statusCode == 200) {
      setState(() {
        users = jsonDecode(response.body);
      });
    }
  }

  @override
  void initState() {
    super.initState();
    fetchUsers();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("User List")),
      body: ListView.builder(
        itemCount: users.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(users[index]['name']),
            subtitle: Text(users[index]['email']),
          );
        },
      ),
    );
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. POST Request – Send Data to API</h3>
                <pre><code>{`Future<void> createUser() async {
  final response = await http.post(
    Uri.parse("https://jsonplaceholder.typicode.com/posts"),
    headers: {"Content-Type": "application/json"},
    body: jsonEncode({
      'title': 'Mugil',
      'body': 'Flutter Developer',
      'userId': 1,
    }),
  );
  
  if (response.statusCode == 201) {
    print("User Created: \${response.body}");
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Model Class for JSON Parsing (Best Practice)</h3>
                <pre><code>{`class User {
  final int id;
  final String name;
  final String email;

  User({required this.id, required this.name, required this.email});

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['id'],
      name: json['name'],
      email: json['email'],
    );
  }
}

// Using it:
List<User> users = [];
void parseUsers(String responseBody) {
  final data = jsonDecode(responseBody) as List;
  users = data.map((json) => User.fromJson(json)).toList();
}`}</code></pre>
              </div>
            </section>

            <section id="storage" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> Local Storage</h2>
              
              <div className="property-card">
                <h3 className="h4">A. SharedPreferences</h3>
                <p>Simple key-value storage (for login, theme, tokens)</p>
                <pre><code>{`// Step 1: Add dependency
dependencies:
  shared_preferences: ^2.2.2

// Step 2: Save & Retrieve Data
import 'package:shared_preferences/shared_preferences.dart';

void saveData() async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString('username', 'Mugil');
}

void getData() async {
  final prefs = await SharedPreferences.getInstance();
  String? name = prefs.getString('username');
  print("Saved Name: $name");
}`}</code></pre>
                <p>Supported Data Types:</p>
                <ul>
                  <li><code>setString</code>, <code>getString</code></li>
                  <li><code>setInt</code>, <code>getInt</code></li>
                  <li><code>setBool</code>, <code>getBool</code></li>
                  <li><code>setDouble</code>, <code>getDouble</code></li>
                  <li><code>setStringList</code>, <code>getStringList</code></li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">B. SQLite (For Structured Data)</h3>
                <p>Works like a small relational database (rows/columns)</p>
                <pre><code>{`// Step 1: Add packages
dependencies:
  sqlite: ^2.3.0
  path: ^1.9.0

// Basic Example
import 'package:sqlite/sqlite.dart';
import 'package:path/path.dart';

Future<Database> initDB() async {
  return openDatabase(
    join(await getDatabasesPath(), 'mydata.db'),
    onCreate: (db, version) {
      return db.execute(
        'CREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT)',
      );
    },
    version: 1,
  );
}

Future<void> insertUser(String name) async {
  final db = await initDB();
  await db.insert('users', {'name': name});
}

Future<void> fetchUsers() async {
  final db = await initDB();
  final List<Map<String, dynamic>> maps = await db.query('users');
  print(maps);
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">C. Hive (NoSQL, High Performance)</h3>
                <p>Key-value DB, better than SharedPrefs & faster than SQLite</p>
                <pre><code>{`// Step 1: Add dependency
dependencies:
  hive: ^2.2.3
  hive_flutter: ^1.1.0

// Step 2: Initialize Hive
void main() async {
  await Hive.initFlutter();
  await Hive.openBox('myBox');
  runApp(MyApp());
}

// Step 3: Use Hive to Save & Get Data
var box = Hive.box('myBox');

box.put('name', 'Mugil');
String name = box.get('name');
print(name);`}</code></pre>
              </div>
            </section>

            <section id="firebase" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-fire"></i> Firebase Integration</h2>
              
              <div className="property-card">
                <h3 className="h4">A. Firebase Setup for Flutter</h3>
                <pre><code>{`// Step 1: Create Firebase Project
Go to: https://console.firebase.google.com
- Create a project
- Add Android/iOS app
- Download google-services.json → Place it in android/app/

// Step 2: Add Dependencies
dependencies:
  firebase_core: ^2.27.0
  firebase_auth: ^4.17.4
  cloud_firestore: ^4.15.4
  firebase_storage: ^11.7.4

// Initialize Firebase in App
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">1. Firebase Authentication</h3>
                <pre><code>{`// Sign Up
await FirebaseAuth.instance.createUserWithEmailAndPassword(
  email: "user@example.com",
  password: "password123",
);

// Login
await FirebaseAuth.instance.signInWithEmailAndPassword(
  email: "user@example.com",
  password: "password123",
);

// Logout
await FirebaseAuth.instance.signOut();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Cloud Firestore (Database)</h3>
                <pre><code>{`// Add Data
FirebaseFirestore.instance.collection('users').add({
  'name': 'Mugil',
  'email': 'mugil@example.com',
});

// Get Data (Read)
FirebaseFirestore.instance.collection('users').get().then((snapshot) {
  snapshot.docs.forEach((doc) {
    print(doc['name']);
  });
});`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Firebase Storage (File Uploads)</h3>
                <pre><code>{`import 'package:image_picker/image_picker.dart';
import 'package:firebase_storage/firebase_storage.dart';

final picker = ImagePicker();
final image = await picker.pickImage(source: ImageSource.gallery);

final storageRef = FirebaseStorage.instance.ref('uploads/\${image.name}');
await storageRef.putFile(File(image.path));
String downloadUrl = await storageRef.getDownloadURL();`}</code></pre>
              </div>
            </section>

            <section id="animations" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-magic"></i> Animations & Transitions</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Implicit Animations</h3>
                <p>Simple, easy animations using animated widgets</p>
                <pre><code>{`// A. AnimatedContainer
AnimatedContainer(
  duration: Duration(seconds: 1),
  width: isExpanded ? 200 : 100,
  height: isExpanded ? 200 : 100,
  color: isExpanded ? Colors.blue : Colors.red,
  curve: Curves.easeInOut,
)

// Change isExpanded inside setState() – it animates automatically

// B. AnimatedOpacity
AnimatedOpacity(
  opacity: isVisible ? 1.0 : 0.0,
  duration: Duration(seconds: 1),
  child: Text("Fade Me!"),
)

// C. AnimatedCrossFade
AnimatedCrossFade(
  firstChild: Text("Before"),
  secondChild: Text("After"),
  crossFadeState: showSecond ? CrossFadeState.showSecond : CrossFadeState.showFirst,
  duration: Duration(seconds: 1),
)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Explicit Animations</h3>
                <p>Full control using AnimationController</p>
                <pre><code>{`// A. Fade In using FadeTransition
late AnimationController _controller;
late Animation<double> _animation;

@override
void initState() {
  super.initState();
  _controller = AnimationController(
    duration: Duration(seconds: 2),
    vsync: this,
  );
  _animation = Tween(begin: 0.0, end: 1.0).animate(_controller);
  _controller.forward();
}

@override
Widget build(BuildContext context) {
  return FadeTransition(
    opacity: _animation,
    child: Text("Hello!"),
  );
}

// B. Rotation, Scale, Slide
RotationTransition(
  turns: _animation,
  child: Icon(Icons.refresh),
)

ScaleTransition(
  scale: _animation,
  child: Icon(Icons.zoom_in),
)

SlideTransition(
  position: Tween<Offset>(begin: Offset(0, 1), end: Offset.zero).animate(_controller),
  child: Container(color: Colors.green),
)`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Hero Animation (Screen Transition Effect)</h3>
                <pre><code>{`// Page 1
Hero(
  tag: 'myImage',
  child: Image.asset('assets/pic.jpg'),
)

// Page 2
Hero(
  tag: 'myImage',
  child: Image.asset('assets/pic.jpg'),
)`}</code></pre>
                <p>Creates a smooth image zoom-in transition between pages.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Lottie Animations (JSON-based)</h3>
                <pre><code>{`// Add dependency
dependencies:
  lottie: ^2.7.0

// Usage
import 'package:lottie/lottie.dart';

Lottie.asset('assets/animation.json')`}</code></pre>
              </div>
            </section>

            <section id="packages" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box-seam"></i> Packages & Plugin Usage</h2>
              
              <div className="property-card">
                <h3 className="h4">1. image_picker – Pick image from camera/gallery</h3>
                <pre><code>{`// Add dependency:
image_picker: ^1.1.0

// Usage:
final picker = ImagePicker();
final pickedFile = await picker.pickImage(source: ImageSource.camera);
File image = File(pickedFile!.path);`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. url_launcher – Open links, call, email, map</h3>
                <pre><code>{`// Add:
url_launcher: ^6.2.6

// Usage:
launchUrl(Uri.parse('https://google.com')); // Open link
launchUrl(Uri(scheme: 'tel', path: '1234567890')); // Call
launchUrl(Uri(scheme: 'mailto', path: 'abc@gmail.com')); // Email`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. path_provider – Get app directory paths</h3>
                <pre><code>{`// Add:
path_provider: ^2.1.2

// Usage:
Directory dir = await getApplicationDocumentsDirectory();
String path = dir.path;`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. share_plus – Share text, image</h3>
                <pre><code>{`// Add:
share_plus: ^7.2.1

// Usage:
Share.share("Hello from Mugil!");`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. fluttertoast – Show toast message</h3>
                <pre><code>{`// Add:
fluttertoast: ^8.2.4

// Usage:
Fluttertoast.showToast(msg: "Login Successful");`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. file_picker – Pick any file</h3>
                <pre><code>{`// Add:
file_picker: ^6.2.0

// Usage:
FilePickerResult? result = await FilePicker.platform.pickFiles();`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">7. pdf & printing – Create/view/download PDFs</h3>
                <pre><code>{`// Add:
pdf: ^3.10.8
printing: ^5.12.0`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">8. connectivity_plus – Internet status check</h3>
                <pre><code>{`// Add:
connectivity_plus: ^5.0.2

// Usage:
ConnectivityResult result = await Connectivity().checkConnectivity();`}</code></pre>
              </div>
            </section>

            <section id="deployment" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cloud-upload"></i> Deployment (APK Build & Play Store Upload)</h2>
              
              <div className="property-card">
                <h3 className="h4">A. Build Release APK</h3>
                <pre><code>{`// Set build mode to release
flutter build apk --release

// Output file:
build/app/outputs/flutter-apk/app-release.apk`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">B. Build App Bundle (AAB)</h3>
                <p>Play Store recommends .aab</p>
                <pre><code>{`flutter build appbundle

// Output file:
build/app/outputs/bundle/release/app-release.aab`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">C. Configure app for release</h3>
                <ol>
                  <li>Change App Name & Icon (optional)
                    <ul>
                      <li><code>android/app/src/main/AndroidManifest.xml</code> → Edit <code>&lt;application android:label="Your App"&gt;</code></li>
                      <li>Use <code>flutter_launcher_icons</code></li>
                    </ul>
                  </li>
                  <li>Enable Proguard (optional for size reduction)</li>
                </ol>
              </div>
              
              <div className="property-card">
                <h3 className="h4">D. Create Keystore for Signing</h3>
                <pre><code>{`keytool -genkey -v -keystore key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias`}</code></pre>
                <p>Save the <code>key.jks</code> in <code>android/</code> folder.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">E. Configure Signing in android/gradle.properties</h3>
                <pre><code>{`MY_KEY_ALIAS=my-key-alias
MY_KEY_PASSWORD=your_key_password
MY_STORE_PASSWORD=your_store_password
MY_STORE_FILE=key.jks`}</code></pre>
                <p>Then, in <code>android/app/build.gradle</code>:</p>
                <pre><code>{`signingConfigs {
  release {
    storeFile file(MY_STORE_FILE)
    storePassword MY_STORE_PASSWORD
    keyAlias MY_KEY_ALIAS
    keyPassword MY_KEY_PASSWORD
  }
}`}</code></pre>
              </div>
              
              <div className="property-card">
                <h3 className="h4">F. Test the App</h3>
                <pre><code>{`flutter install`}</code></pre>
                <p>Or manually install the <code>.apk</code> on mobile.</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">G. Publish to Play Store</h3>
                <ol>
                  <li>Create Developer Account
                    <ul>
                      <li>Go to: <a href="https://play.google.com/console" target="_blank">https://play.google.com/console</a></li>
                      <li>Pay one-time fee ($25)</li>
                    </ul>
                  </li>
                  <li>Create New App
                    <ul>
                      <li>App title, language</li>
                      <li>Upload <code>.aab</code> file</li>
                      <li>Fill details: screenshots, description, category, rating, privacy policy</li>
                    </ul>
                  </li>
                  <li>Release & Submit
                    <ul>
                      <li>Create production release</li>
                      <li>Upload <code>.aab</code></li>
                      <li>Review & Submit</li>
                    </ul>
                  </li>
                </ol>
                <p>Approval may take 1–7 days (first time)</p>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Deployment Summary</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Command or Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Build APK</td>
                      <td><code>flutter build apk --release</code></td>
                    </tr>
                    <tr>
                      <td>Build App Bundle</td>
                      <td><code>flutter build appbundle</code></td>
                    </tr>
                    <tr>
                      <td>Create Signing Key</td>
                      <td><code>keytool -genkey ...</code></td>
                    </tr>
                    <tr>
                      <td>Play Store Upload</td>
                      <td>Via Play Console + app details</td>
                    </tr>
                    <tr>
                      <td>Test App</td>
                      <td><code>flutter install</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="projects" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-lightbulb"></i> Flutter Mini Project Ideas</h2>
              
              <div className="property-card">
                <h3 className="h4">1. To-Do App with Local Storage</h3>
                <ul>
                  <li>Add/edit/delete tasks</li>
                  <li>Use: SharedPreferences or Hive</li>
                  <li>Features: Task status (done/pending), sort by date</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">2. Job Portal App</h3>
                <ul>
                  <li>User: Register, browse jobs, apply</li>
                  <li>Admin: Post jobs, delete/edit</li>
                  <li>Use: Firebase or MongoDB with Node.js API</li>
                  <li>Features: Search/filter jobs, image upload</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">3. Food Delivery App (Swiggy Clone)</h3>
                <ul>
                  <li>User: View food items, add to cart, order</li>
                  <li>Admin: Add restaurants/menus</li>
                  <li>Use: Flutter, Node.js, MongoDB, SharedPreferences</li>
                  <li>Features: COD/Online, profile page, menu images</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">4. Expense Tracker App</h3>
                <ul>
                  <li>Track daily expenses with category (food, travel, etc.)</li>
                  <li>Charts with f_chart or synfusion</li>
                  <li>Use: Hive or SQLite</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">5. E-Commerce App</h3>
                <ul>
                  <li>Product listing, search, add to cart</li>
                  <li>Payment gateway (dummy/Stripe)</li>
                  <li>Admin: Add/edit/delete product</li>
                  <li>Firebase for backend</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">6. Chat App</h3>
                <ul>
                  <li>Login/Signup</li>
                  <li>Real-time chat using Firebase Firestore</li>
                  <li>Online status, time, and media support</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">7. Quiz App</h3>
                <ul>
                  <li>MCQs, timer, scorecard</li>
                  <li>Firebase DB or local JSON</li>
                  <li>Use: Provider or Riverpod for state</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">8. Notes App</h3>
                <ul>
                  <li>Create/edit/delete notes</li>
                  <li>Option to mark favorite or pin top</li>
                  <li>Hive for local storage</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">9. Portfolio App</h3>
                <ul>
                  <li>Show your resume, projects, social links</li>
                  <li>Use url_launcher for links</li>
                  <li>Great for publishing on Play Store</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">10. Weather App</h3>
                <ul>
                  <li>Fetch real-time weather using API</li>
                  <li>Show temperature, wind, humidity</li>
                  <li>Use: http package + OpenWeather API</li>
                </ul>
              </div>
              
              <div className="property-card">
                <h3 className="h4">Optional: Additional Ideas</h3>
                <table className="table-compare">
                  <thead>
                    <tr>
                      <th>Idea</th>
                      <th>Highlights</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BMI Calculator</td>
                      <td>Simple health tracker</td>
                    </tr>
                    <tr>
                      <td>Online Store Admin</td>
                      <td>Admin-only dashboard</td>
                    </tr>
                    <tr>
                      <td>Event Booking App</td>
                      <td>Book slots, display calendar</td>
                    </tr>
                    <tr>
                      <td>QR Code Scanner/Generator</td>
                      <td>Use qr_flutter and qr_code_scanner</td>
                    </tr>
                    <tr>
                      <td>Movie App</td>
                      <td>Fetch movie list, details, ratings</td>
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
          <p>Flutter Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default FlutterNotes;