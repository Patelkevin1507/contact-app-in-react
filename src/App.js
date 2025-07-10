import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Contact from "./component/Contact.jsx"
import Register from "./component/Register.jsx"
import About from "./component/About.jsx"
import Navbar from './component/Navbar.jsx';
import Login from './component/Login.jsx';
import Showcont from './component/Show_cont.jsx';


function App() {
  return (
    <>
    <BrowserRouter />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Show_cont" element={<Showcont />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
