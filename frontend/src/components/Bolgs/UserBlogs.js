import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import "./BlogCard.css";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Avatar } from '@mui/material';

import axios from 'axios';
import BlogCard from './BlogCard';


const UserBlog = () => {
  const [blogs, setBlogs] = useState({});
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res?.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);
  return (
    <div style={{padding: "110px 20px 0px 20px",height:"100vh"}}>
        <Grid container style={{display:"flex", gap:"20px",justifyContent:"center",flexDirection:"row"}} >
           {blogs[0] && blogs?.map((index)=>{
            return (
                <BlogCard 
                key={index?.id}
                name = {index.user?.name}
                title = {index.title}
                description = {index.description}
                image = {index.image}
                />
            );
           })}
        </Grid>
    </div>
);
}

export default UserBlog;