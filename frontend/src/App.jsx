import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Footer from './components/Footer';
import ProtectedRoute from './ProtectedRoute'; // un existing ProtectedRoute import pannunga
import Logout from './pages/Logout';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import AllCourses from './pages/AllCourses';
import Html from './pages/courses/html/Html';
import CssNotes from './pages/courses/CssNotes';
import JavascriptNotes from './pages/courses/JavascriptNotes';
import BootstrapNotes from './pages/courses/BootstrapNotes';
import ReactNotes from './pages/courses/ReactNotes';
import NodeJsNotes from './pages/courses/NodeJsNotes';
import PythonNotes from './pages/courses/PythonNotes';
import JavaNotes from './pages/courses/JavaNotes';
import ExpressNotes from './pages/courses/ExpressJsNotes';
import MySqlNotes from './pages/courses/MySqlNotes';
import MongoDBNotes from './pages/courses/MongoDBNotes';
import SqlNotes from './pages/courses/SqlNotes';
import CNotes from './pages/courses/CNotes';
import CppNotes from './pages/courses/CppNotes';
import AngularNotes from './pages/courses/AngularNotes';
import ServletNotes from './pages/courses/ServletNotes';
import DjangoNotes from './pages/courses/DjangoNotes';
import JspNotes from './pages/courses/JspNotes';
import SpringBootNotes from './pages/courses/SpringBootNotes';
import LaravelNotes from './pages/courses/LaravelNotes';
import PhpNotes from './pages/courses/PhpNotes';
import TypeScriptNotes from './pages/courses/TypeScriptNotes';
import NumpyNotes from './pages/courses/NumpyNotes';
import ScipyNotes from './pages/courses/ScipyNotes';
import PandasNotes from './pages/courses/PandasNotes';
import MatplotlibNotes from './pages/courses/MatplotlibNotes';
import SeabornNotes from './pages/courses/SeabornNotes';
import AiNotes from './pages/courses/AiNotes';
import MachineLearningNotes from './pages/courses/MachineLearningNotes';
import GitNotes from './pages/courses/GitNotes';
import CsharpNotes from './pages/courses/CsharpNotes';
import FlutterNotes from './pages/courses/FlutterNotes';
import ReactNativeNotes from './pages/courses/ReactNativeNotes';
import JqueryNotes from './pages/courses/JqueryNotes';
import VueJsNotes from './pages/courses/VueJsNotes';

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Top: Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path='/html-course' element={<Html />} />
          <Route path='/css-course' element={<CssNotes />} />
          <Route path='/js-course' element={<JavascriptNotes />} />
          <Route path='/bs-course' element={<BootstrapNotes />} />
          <Route path='/react-course' element={<ReactNotes />} />
          <Route path='/node-course' element={<NodeJsNotes />} />
          <Route path='/python-course' element={<PythonNotes />} />
          <Route path='/java-course' element={<JavaNotes />} />
          <Route path='/express-course' element={<ExpressNotes />} />
          <Route path='/db-mysql' element={<MySqlNotes />} />
          <Route path='/db-mongodb' element={<MongoDBNotes />} />
          <Route path='/sql-course' element={<SqlNotes />} />
          <Route path='/c-course' element={<CNotes />} />
          <Route path='/cpp-course' element={<CppNotes />} />
          <Route path='/angular-course' element={<AngularNotes />} />
          <Route path='/servlets-course' element={<ServletNotes />} />
          <Route path='/django-course' element={<DjangoNotes />} />
          <Route path='/jsp-course' element={<JspNotes />} />
          <Route path='/springboot-course' element={<SpringBootNotes />} />
          <Route path='/laravel-course' element={<LaravelNotes />} />
          <Route path='/php-course' element={<PhpNotes />} />
          <Route path='/ts-course' element={<TypeScriptNotes />} />
          <Route path='/numpy-course' element={<NumpyNotes />} />
          <Route path='/scipy-course' element={<ScipyNotes />} />
          <Route path='/pandas-course' element={<PandasNotes />} />
          <Route path='/matplot-course' element={<MatplotlibNotes />} />
          <Route path='/seaborn-course' element={<SeabornNotes />} />
          <Route path='/ai-course' element={<AiNotes />} />
          <Route path='/ml-course' element={<MachineLearningNotes />} />
          <Route path='/github-course' element={<GitNotes />} />
          <Route path='/csharp-course' element={<CsharpNotes />} />
          <Route path='/flutter-course' element={<FlutterNotes />} />
          <Route path='/reactnative-course' element={<ReactNativeNotes />} />
          <Route path='/jq-course' element={<JqueryNotes />} />
          <Route path='/vue-course' element={<VueJsNotes />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to trainer login */}
        <Route path="/" element={<Navigate to="/trainer/login" />} />

        {/* Login and Signup routes */}
        <Route path="/trainer/login" element={<Login />} />
        <Route path="/trainer/signup" element={<Signup />} />

        {/* Protected Trainer layout */}
        <Route
          path="/trainer/*"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        />
        {/* Logout route */}
        <Route path="/trainer/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
