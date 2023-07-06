import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Lodging from "./pages/Lodging";
import "./styles/main.scss";
import Navigation from './components/Navigation';
import Error404 from './pages/Error404';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Lodging/:id" element={<Lodging/>} errorElement={<Error404 />} />
        <Route path="*" element={<Error404/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

