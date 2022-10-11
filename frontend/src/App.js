import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from './components/layouts/Header/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home/Home';
import UserBlog from './components/Bolgs/UserBlogs';
import AllBlog from './components/Bolgs/AllBlog';
import Footer from './components/layouts/Footer/Footer';
import EditBlog from './components/Home/EditBlog';

function App() {
  // const isAuthenticated = useSelector((state) => state.isAuthenticated);
  // console.log(isAuthenticated)

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<AllBlog />} />
        <Route path="/myblogs" element={<UserBlog />} />
        <Route path="/myblogs/:id" element={<EditBlog/> } />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
