import express from "express";
import { getAllUser, loginUser, registerUser } from "../controllers/UserController";
const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", registerUser);
router.post("/login", loginUser);
// router.delete("/delete/:id", deleteBlog);
export default router;