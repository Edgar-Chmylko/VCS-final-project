import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/pages/SignUp/SignUp';




function App() {
  return (
    <>
    <Navbar />
        <Routes>     
          <Route path="/" element={<Home />} />
          <Route path='/products' element={<Products />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/sign-up' element={<SignUp />}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
