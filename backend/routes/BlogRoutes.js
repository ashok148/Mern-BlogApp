import express from "express";
import { createBlog, deleteBlog, getAllBlogs, updateBlog,getBlogById,getbyUserId } from "../controllers/BlogController";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/create", createBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getBlogById);
blogRouter.delete("/delete/:id", deleteBlog);
blogRouter.get("/user/:id", getbyUserId);

export default blogRouter;