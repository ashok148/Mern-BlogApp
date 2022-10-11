import { Grid } from '@mui/material';
// import { Typography,Button, Paper } from '@material-ui/core';
import BlogCard from './BlogCard';
import axios from 'axios';
import { useState,useEffect } from 'react';

const AllBlog = () => {
const [blogs, setBlogs] = useState({});

const sendRequest = async()=>{
const res = await axios.get("http://localhost:5000/api/blog")
.catch((err)=> console.log(err))
const data = await res.data;
return data;
};

useEffect(() => {
    sendRequest().then((data)=> setBlogs(data.blogs))
}, [])
console.log("blogs",blogs);


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

export default AllBlog;