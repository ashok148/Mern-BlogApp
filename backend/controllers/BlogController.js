import mongoose from "mongoose";
import Blog from "../models/BlogModel";
import User from "../models/UserModel";

//getAlllBlogs
export const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find().populate("user")
    } catch (err) {
        console.log(err);
    }
    if (!blogs) {
        return res.status(404).json({ message: "No blogs found" })
    }
    return res.status(200).json({ blogs });
}

//create blog
export const createBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;
  
    let existingUser;
    try {
      existingUser = await User.findById(user);
      console.log("user",existingUser);
    } catch (err) {
      return console.log(err);
    }
    if (!existingUser) {
      return res.status(400).json({ message: "Unable to find User By this Id!" });
    }
    const blog = new Blog({
      title,
      description,
      image,
      user,
    });
    try{
    //   const session = await mongoose.startSession();
    //   session.startTransaction();
      await blog.save();
      existingUser.blogs.push(blog);
      await existingUser.save();
    //   await session.commitTransaction();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err });
    }
    return res.status(200).json({ blog });
  };
  

//update blog
export const updateBlog = async (req, res, next) => {
    const { title, description } = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogId, {
            title,
            description
        });
    } catch(err) {
        console.log(err);
    }
    if(!blog){
        
    return res.status(500).json({message:"Unable to update blog" });
    }
    return res.status(200).json({ blog });
}


// get blogById
export const getBlogById = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(id);
    } catch(err) {
        console.log(err);
    }
    if(!blog){ 
    return res.status(404).json({message:"No blog found" });
    }
    return res.status(200).json({ blog });
}
//delete blog
export const deleteBlog = async (req, res, next) => {
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndRemove(blogId).populate("user");
        await blog.user.blogs.pull(blog);
        blog.user.save();
    } catch(err) {
        console.log(err);
    }
    if(!blog){ 
    return res.status(500).json({message:"Unable to delete blog" });
    }
    return res.status(200).json({ message: "Blog deleted successfully" });
}
//get blog by User id
export const getbyUserId = async (req, res, next) => {
    const user_id = req.params.id;
    let userBlogs;
    try {
        userBlogs = await User.findById(user_id).populate("blogs");
    } catch(err) {
        console.log(err);
    }
    if(!userBlogs){ 
    return res.status(404).json({message:"No blog found!" });
    }
    return res.status(200).json({ blogs:userBlogs});
}