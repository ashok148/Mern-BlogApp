import React from 'react'
import "./style.css";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, TextField, Link, Button, Avatar } from "@mui/material";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        e.preventDefault();
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const sendRequest = async () => {
        const res = await axios
          .post("http://localhost:5000/api/user/login", {
            email: inputs.email,
            password: inputs.password,
          })
          .catch((err) => console.log(err));
    
        const data = await res?.data;
        console.log(data);
        return data;
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);  
          sendRequest()
             .then((data) => localStorage.setItem("userId", data.user._id))
            .then(() => dispatch({type:"login"}))
            .then(() => navigate("/blogs"));
      };
    console.log("isAuthenticated", isAuthenticated);
    return (
        <Grid container display="flex" height="100vh" >
            <Grid item xs={0} sm={7}>
                <img className="backImage" src="https://media.istockphoto.com/photos/road-picture-id1318075689?b=1&k=20&m=1318075689&s=170667a&w=0&h=s4BPeCGRMdrZOsb6zMrO6DMhvZAi9SJoS-rzWorwvwQ=" width="100%" height="100%" alt="" />
            </Grid>
            <Grid item xs={12} sm={5} justifyContent="center" style={{ padding: "20px", flexDirection: "column", alignItems: "center", marginTop: "80px" }}  >
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                    <Avatar style={{ backgroundColor: "#f50057" }}><LockOutlinedIcon /></Avatar>
                </div>
                <div style={{ margin: "16px 0px 16px 0px", justifyContent: "center", alignItems: "center", display: "flex", fontWeight: 700 }}>
                    <Typography> Login</Typography>
                </div>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={inputs.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={inputs.password}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        style={{ margin: "16px 0px 16px 0px" }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        // onClick={() => {
                        //    dispatch(authActions?.login())
                        // }}
                    >
                        Login
                    </Button>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Link href="/forgotPassword" variant="body2">
                                Forgot Password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Grid>

        </Grid>

    )
}

export default Login;