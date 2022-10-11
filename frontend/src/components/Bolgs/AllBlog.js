import { Grid } from '@mui/material';
import BlogCard from './BlogCard';
import axios from 'axios';
import { useState,useEffect } from 'react';

const AllBlog = () => {
const [blogs, setBlogs] = useState({});
const [loading, setLoading] = useState(false);

const sendRequest = async()=>{
const res = await axios.get("http://localhost:5000/api/blog")
.catch((err)=> console.log(err))
const data = await res.data;
return data;
};

useEffect(() => {
    sendRequest().then((data)=> setBlogs(data.blogs))
}, [loading])

console.log(blogs);
    return (
        <div style={{padding: "110px 20px 0px 20px",height: "auto",minHeight:"60vh"}}>
            <Grid container style={{display:"flex", gap:"20px",justifyContent:"center",flexDirection:"row"}} >
               {blogs[0] && blogs?.map((index)=>{
                return (
                    <BlogCard 
                    key={index}
                    id={index?._id}
                    name = {index.user?.name}
                    title = {index.title}
                    description = {index.description}
                    image = {index.image}
                    isUser = {localStorage.getItem("userId") === index.user?._id}
                    loading={setLoading}
                    />
                );
               })}
            </Grid>
        </div>
    );
}

export default AllBlog;