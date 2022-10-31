
import React, { useEffect, useState } from "react";
import "./createBlogModal.css";
import { Button, Grid, TextField, Typography, InputLabel } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetail = () => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState();
    const id = useParams().id;
    console.log(id);
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const fetchDetails = async () => {
        const res = await axios
            .get(`http://localhost:5000/api/blog/${id}`)
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };
    useEffect(() => {
        fetchDetails().then((data) => {
            setBlog(data.blog);
            setInputs({
                title: data.blog.title,
                description: data.blog.description,
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    const sendRequest = async () => {
        const res = await axios
            .put(`http://localhost:5000/api/blog/update/${id}`, {
                title: inputs.title,
                description: inputs.description,
            })
            .catch((err) => console.log(err));

        const data = await res.data;
        return data;
    };
    console.log(blog);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest()
            .then((data) => console.log(data))
            .then(() => navigate("/myblogs"));
    };

    return (
        <>
            <div style={{ margin: "150px 20px 20px 20px" }}>
                {inputs && (
                    <Grid width='70%' margin='10px auto' minHeight="60vh">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={5} >
                                <Grid item xs={12} >
                                    <Typography fontWeight={"bold"} padding={3} color="grey" variant="h4" textAlign={"center"}>
                                        Update Your Blog
                                    </Typography></Grid>

                                <Grid item xs={12} spacing={3} justifyContent="center">
                                    <InputLabel>Title</InputLabel>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        placeholder="Title.."
                                        name="title"
                                        value={inputs.email}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12} spacing={3} justifyContent="center">
                                    <InputLabel>Description</InputLabel>
                                    <TextField
                                        name="description"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        multiline
                                        maxRows={10}
                                        placeholder="Description.."
                                        onChange={handleChange}
                                        value={inputs.description}
                                    />
                                </Grid>
                                <Grid item xs={12} style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                                    <Button variant="contained" color="warning" type="submit" >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                )}
            </div>
        </>
    );
};

export default BlogDetail;