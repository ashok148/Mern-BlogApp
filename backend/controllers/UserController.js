import User from "../models/UserModel";
import bcrypt from "bcryptjs";

//Get All User
export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ users });
};

//Register New User
export const registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        console.log(err);
    }
    if (existingUser) {
        return res.status(404).json({ message: "User already exists! Please login" })
    }
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs:[],
    });

    try {
        await user.save();
    } catch (err) {
        console.log(err);
    }
    return res.status(201).json({ user, message: "User create successfully" })
};

//Login User 

export const loginUser = async(req,res,next)=>{
    const {email, password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});
    } catch (err) {
        console.log(err);
    }
    if(!existingUser){
        return res.status(404).json({message: "Could not find any user for this account!"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect){
        return res.status(404).json({message:"Incorrect password!"});
    }
    return res.status(200).json({user: existingUser, message: "Login Successfull"});
};

// //delete User
// export const deleteBlog = async (req, res, next) => {
//     const blogId = req.params.id;
//     let blog;
//     try {
//         blog = await User.findByIdAndRemove(blogId);
//     } catch(err) {
//         console.log(err);
//     }
//     if(!blog){ 
//     return res.status(500).json({message:"Unable to delete blog" });
//     }
//     return res.status(200).json({ message: " deleted successfully" });
// }