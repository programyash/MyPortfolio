import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './scss/Header.scss';
import './scss/App.scss';
import Main from "./components/main";
import About from './components/about';
import Projects from './components/projects'
import Footer from './components/Footer';

function App() {

  return (
    <div className="body">
      <Router>
        <Main />
        <About />
        <Projects />
        <Footer />
      </Router>
    </div>
  );
}

export default App;