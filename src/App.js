import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.scss'
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';



function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
