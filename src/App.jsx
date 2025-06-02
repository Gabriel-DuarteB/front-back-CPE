
import React, { useEffect } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro'; 


import { setupAxiosInterceptors, logout } 
    from './utils/auth'; 


setupAxiosInterceptors();

function App() {


  return (
    <BrowserRouter>
      <Header />
      <main style={{ marginTop: '60px' }}> 
        <Routes>
          
          <Route path="/login" element={<Login />} />
          
          <Route path="/cadastro" element={<Cadastro />} />

          
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />

          
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;