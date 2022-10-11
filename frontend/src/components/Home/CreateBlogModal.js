import { InputBase, Paper, TextField } from '@material-ui/core';
import "./createBlogModal.css";
import { Grid, Modal, Button } from '@mui/material';
import React, { useState } from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateBlogModal = (props) => {
    let handleClose = props?.onClose;
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState({
        title: "",
        image: "",
        description: "",
    });
    const handleChange = (e) => {
        e.preventDefault();
        setBlogData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const sendRequest = async () => {
        const res = await axios
            .post("http://localhost:5000/api/blog/create", {
                title: blogData.title,
                image: blogData.image,
                description: blogData.description,
                user: localStorage.getItem("userId")
            })
            .catch((err) => console.log(err));
        const data = await res?.data;
        console.log(data);
        return data;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit", blogData);
        sendRequest().then((data) => console.log(data)).then(()=>navigate("/myBlogs"));
        handleClose();
    }
    const body = (
        <div>
            <Paper elevation={3} className="paper">
                <Grid container direction="row" >
                    <Grid className="modalheader">
                        <div>Write Your Blog</div>
                        <div style={{ alignItem: "center", display: "flex" }}>
                            <CloseRoundedIcon onClick={() => { handleClose(); setBlogData("") }} />
                        </div>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <Grid item className='input' >
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="title"
                                placeholder=" Blog title.."
                                type="text"
                                id="text"
                                value={blogData.title}
                                onChange={handleChange}
                            />
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="image"
                                placeholder="Image URL"
                                type="url"
                                id="image"
                                value={blogData.image}
                                onChange={handleChange}
                            />
                            <InputBase
                                style={{ padding: "10px" }}
                                required
                                fullWidth
                                name="description"
                                type="text"
                                id="description"
                                placeholder="Write post description.."
                                multiline
                                maxRows={20}
                                value={blogData.description}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "10px" }} >
                            <Button
                                className="Btn" variant='contained'
                                type='submit'
                            >
                                Add Blog
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </Paper>
        </div>
    );
    return (
        <Modal
            {...props}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            onClose={() => handleClose()}
        >
            {body}
        </Modal>

    )
}

export default CreateBlogModal;