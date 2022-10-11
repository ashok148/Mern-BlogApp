import express from "express";
import mongoose from "mongoose";
import router from "./routes/UserRoutes";
import cors from "cors";
import blogRouter from "./routes/BlogRoutes";
const app = express();
const PORT = 5000;
const hostname = "localhost";
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog", blogRouter);
mongoose.connect("mongodb://localhost:27017/blogDatabase")
.then(()=> app.listen(PORT,hostname,()=>{
    console.log(`Server is working on http://${hostname}:${PORT}`);
}))
.then(()=>{
    console.log(`Connected to database and listening to ${hostname} ${PORT}`)
})
.catch((err)=> console.log(err));