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
