import React from 'react';
import './App.css';
import Header from './Header'; 
import Home from './Home'; 
import Product from './Product'; 
import Login from './Login';
import Checkout from './Checkout'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Create_new from './Create_new';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider> {/* Provide user context to the entire app */}
      <Router>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-new' element={<Create_new />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
