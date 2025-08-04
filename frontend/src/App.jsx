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
import Html from './pages/courses/Html';
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
import MsSqlNotes from './pages/courses/MsSqlNotes';
import SqliteNotes from './pages/courses/SqliteNotes';
import PostgreSqlNotes from './pages/courses/PostgreSqlNotes';
import TailwindCssNotes from './pages/courses/TailwindCssNotes';
import FlaskNotes from './pages/courses/FlaskNotes';
import AllSyllabuses from './pages/AllSyllabuses';
import HtmlSyllabus from './pages/syllabuses/HtmlSyllabus';
import CssSyllabus from './pages/syllabuses/CssSyllabus';
import JavascriptSyllabus from './pages/syllabuses/JavascriptSyllabus';
import TypeScriptSyllabus from './pages/syllabuses/TypeScriptSyllabus';
import JquerySyllabus from './pages/syllabuses/JquerySyllabus';
import BootstrapSyllabus from './pages/syllabuses/BootstrapSyllabus';
import TailwindSyllabus from './pages/syllabuses/TailwindSyllabus';
import ReactSyllabus from './pages/syllabuses/ReactSyllabus';
import AngularSyllabus from './pages/syllabuses/AngularSyllabus';
import VueSyllabus from './pages/syllabuses/VueSyllabus';
import NodeJsSyllabus from './pages/syllabuses/NodeJsSyllabus';
import ExpressJsSyllabus from './pages/syllabuses/ExpressJsSyllabus';
import JavaSyllabus from './pages/syllabuses/JavaSyllabus';
import ServletSyllabus from './pages/syllabuses/ServletSyllabus';
import JspSyllabus from './pages/syllabuses/JspSyllabus';
import SpringbootSyllabus from './pages/syllabuses/SpringbootSyllabus';
import PythonSyllabus from './pages/syllabuses/PythonSyllabus';
import DjangoSyllabus from './pages/syllabuses/DjangoSyllabus';
import FlaskSyllabus from './pages/syllabuses/FlaskSyllabus';
import NumpySyllabus from './pages/syllabuses/NumpySyllabus';
import ScipySyllabus from './pages/syllabuses/ScipySyllabus';
import PandasSyllabus from './pages/syllabuses/PandasSyllabus';
import MatplotlibSyllabus from './pages/syllabuses/MatplotlibSyllabus';
import SeabornSyllabus from './pages/syllabuses/SeabornSyllabus';
import CSyllabus from './pages/syllabuses/CSyllabus';
import CppSyllabus from './pages/syllabuses/CppSyllabus';
import CsharpSyllabus from './pages/syllabuses/CsharpSyllabus';
import PhpSyllabus from './pages/syllabuses/PhpSyllabus';
import LaravelSyllabus from './pages/syllabuses/LaravelSyllabus';
import AiSyllabus from './pages/syllabuses/AiSyllabus';
import MachineLearningSyllabus from './pages/syllabuses/MachineLearningSyllabus';
import SqlSyllabus from './pages/syllabuses/SqlSyllabus';
import SqliteSyllabus from './pages/syllabuses/SqliteSyllabus';
import MongoDBSyllabus from './pages/syllabuses/MongoDBSyllabus';
import MySqlSyllabus from './pages/syllabuses/MySqlSyllabus';
import MsSqlSyllabus from './pages/syllabuses/MsSqlSyllabus';
import PostgreSqlSyllabus from './pages/syllabuses/PostgreSqlSyllabus';
import FlutterSyllabus from './pages/syllabuses/FlutterSyllabus';
import ReactNativeSyllabus from './pages/syllabuses/ReactNativeSyllabus';
import GitSyllabus from './pages/syllabuses/GitSyllabus';
import ScrollToTop from './components/ScrollToTop';
import AllUsers from './pages/AllUsers';
import AspNetCoreNotes from './pages/courses/AspNetCoreNotes';
import FloatingButtons from './components/FloatingButtons';

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Top: Navbar */}
      <Navbar />
      <ScrollToTop />
      {/* Main content */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path='/html-course' element={<Html />} />
          <Route path='/css-course' element={<CssNotes />} />
          <Route path='/js-course' element={<JavascriptNotes />} />
          <Route path='/bs-course' element={<BootstrapNotes />} />
          <Route path='/tailwind-course' element={<TailwindCssNotes />} />
          <Route path='/react-course' element={<ReactNotes />} />
          <Route path='/node-course' element={<NodeJsNotes />} />
          <Route path='/python-course' element={<PythonNotes />} />
          <Route path='/java-course' element={<JavaNotes />} />
          <Route path='/express-course' element={<ExpressNotes />} />
          <Route path='/db-mysql' element={<MySqlNotes />} />
          <Route path='/db-mssql' element={<MsSqlNotes />} />
          <Route path='/db-sqlite' element={<SqliteNotes />} />
          <Route path='/db-postgresql' element={<PostgreSqlNotes />} />
          <Route path='/db-mongodb' element={<MongoDBNotes />} />
          <Route path='/sql-course' element={<SqlNotes />} />
          <Route path='/c-course' element={<CNotes />} />
          <Route path='/cpp-course' element={<CppNotes />} />
          <Route path='/angular-course' element={<AngularNotes />} />
          <Route path='/servlets-course' element={<ServletNotes />} />
          <Route path='/django-course' element={<DjangoNotes />} />
          <Route path='/flask-course' element={<FlaskNotes />} />
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
          <Route path='/aspnet-course' element={<AspNetCoreNotes />} />
          <Route path='/all-syllabuses' element={<AllSyllabuses />} />
          <Route path='/html-syllabus' element={<HtmlSyllabus />} />
          <Route path='/css-syllabus' element={<CssSyllabus />} />
          <Route path='/js-syllabus' element={<JavascriptSyllabus />} />
          <Route path='/ts-syllabus' element={<TypeScriptSyllabus />} />
          <Route path='/jq-syllabus' element={<JquerySyllabus />} />
          <Route path='/bs-syllabus' element={<BootstrapSyllabus />} />
          <Route path='/tailwind-syllabus' element={<TailwindSyllabus />} />
          <Route path='/react-syllabus' element={<ReactSyllabus />} />
          <Route path='/angular-syllabus' element={<AngularSyllabus />} />
          <Route path='/vue-syllabus' element={<VueSyllabus />} />
          <Route path='/node-syllabus' element={<NodeJsSyllabus />} />
          <Route path='/express-syllabus' element={<ExpressJsSyllabus />} />
          <Route path='/java-syllabus' element={<JavaSyllabus />} />
          <Route path='/servlets-syllabus' element={<ServletSyllabus />} />
          <Route path='/jsp-syllabus' element={<JspSyllabus />} />
          <Route path='/springboot-syllabus' element={<SpringbootSyllabus />} />
          <Route path='/python-syllabus' element={<PythonSyllabus />} />
          <Route path='/django-syllabus' element={<DjangoSyllabus />} />
          <Route path='/flask-syllabus' element={<FlaskSyllabus />} />
          <Route path='/numpy-syllabus' element={<NumpySyllabus />} />
          <Route path='/scipy-syllabus' element={<ScipySyllabus />} />
          <Route path='/pandas-syllabus' element={<PandasSyllabus />} />
          <Route path='/matplot-syllabus' element={<MatplotlibSyllabus />} />
          <Route path='/seaborn-syllabus' element={<SeabornSyllabus />} />
          <Route path='/c-syllabus' element={<CSyllabus />} />
          <Route path='/cpp-syllabus' element={<CppSyllabus />} />
          <Route path='/csharp-syllabus' element={<CsharpSyllabus />} />
          <Route path='/php-syllabus' element={<PhpSyllabus />} />
          <Route path='/laravel-syllabus' element={<LaravelSyllabus />} />
          <Route path='/ai-syllabus' element={<AiSyllabus />} />
          <Route path='/ml-syllabus' element={<MachineLearningSyllabus />} />
          <Route path='/sql-syllabus' element={<SqlSyllabus />} />
          <Route path='/db-sqlite-syllabus' element={<SqliteSyllabus />} />
          <Route path='/db-mongodb-syllabus' element={<MongoDBSyllabus />} />
          <Route path='/db-mysql-syllabus' element={<MySqlSyllabus />} />
          <Route path='/db-mssql-syllabus' element={<MsSqlSyllabus />} />
          <Route path='/db-postgresql-syllabus' element={<PostgreSqlSyllabus />} />
          <Route path='/flutter-syllabus' element={<FlutterSyllabus />} />
          <Route path='/reactnative-syllabus' element={<ReactNativeSyllabus />} />
          <Route path='/github-syllabus' element={<GitSyllabus />} />

        </Routes>
      </div>
      <FloatingButtons />
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
