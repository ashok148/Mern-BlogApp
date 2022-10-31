import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home/Home';
import UserBlog from './components/Bolgs/UserBlogs';
import AllBlog from './components/Bolgs/AllBlog';
import EditBlog from './components/Home/EditBlog';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  function PrivateRoute({ children }) {
    return isAuthenticated===true ? children : <Navigate to="/login" />;
  }
  return (
    <React.Fragment>
    {/* {window.location.pathname === "/login" || window.location.pathname === "/signup" ? "" :<Header /> } */}
    <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<PrivateRoute><AllBlog /></PrivateRoute>} />
        <Route path="/myblogs" element={<PrivateRoute><UserBlog /></PrivateRoute>} />
        <Route path="/myblogs/:id" element={<PrivateRoute><EditBlog /></PrivateRoute>} />
      </Routes>
      {/* {window.location.pathname === "/login" || window.location.pathname === "/signup" ? "" :<Footer /> } */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
