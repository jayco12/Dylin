
import './App.css';
import './components/About/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/home';
import About from './components/About/home';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Faq } from './components/FAQ/Faq';
import NavBar from './components/Home/navbar';
function App() {
  return (
    <>
   
     <BrowserRouter>
     <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/faq" element={<Faq/>} />
</Routes>
</BrowserRouter>
</>

  );
}

export default App;
