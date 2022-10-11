import React from 'react';
import "./style.css";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Typography, TextField, Link, Button, Avatar } from "@mui/material";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    })
    const sendRequest = async () => {
        const res = await axios
        .post("http://localhost:5000/api/user/signup", {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password,
        }).catch((err) => console.log(err));
    
        const data = await res?.data;
        console.log(data);
        return data;
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch({type:"login"}))
        .then((res)=>console.log(res))
        .then(() => navigate("/blogs"));
        console.log("data", inputs);

    };

    return (
        <Grid container display="flex" height="100vh">
            <Grid item xs={0} sm={7}>
                <img className='backImage' src="https://media.istockphoto.com/photos/laptop-computer-desktop-pc-human-hand-office-soft-focus-picture-picture-id811268074?b=1&k=20&m=811268074&s=170667a&w=0&h=OALZKoIe0vYQO0JdgtHjR2rMtfMhiYQ_kPBzipanPJU=" width="100%" height="100%"
                alt="" />
            </Grid>
            <Grid item xs={12} sm={5} justifyContent="center" style={{ padding: "20px", flexDirection: "column", alignItems: "center",marginTop:"80px" }}  >
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                    <Avatar style={{ backgroundColor: "#f50057" }}><LockOutlinedIcon /></Avatar>
                </div>
                <div style={{ margin: "16px 0px 16px 0px", justifyContent: "center", alignItems: "center", display: "flex", fontWeight: 700 }}>
                    <Typography> Sign Up</Typography>
                </div>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                value={inputs.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="lname"
                                name="lastName"
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                autoFocus
                                value={inputs.lastName}
                                onChange={handleChange}
                            />
                        </Grid> */}
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
                    >
                        Sign up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Grid>

        </Grid>

    )
}

export default Signup;