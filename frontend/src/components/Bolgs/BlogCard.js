import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import "./BlogCard.css";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Avatar } from '@mui/material';


const BlogCard = (props) => {
    let userName = props?.name;
    let title = props?.title;
    let description = props?.description;
    let imageUrl = props?.image;
    return (
        <div className='card'>
        <Paper elevaltion={3}>
            <Grid container style={{ padding: "15px" }}>
                <Grid item xs={12} className="cardHeader">
                    <Avatar>
                        <AccountCircleRoundedIcon />
                    </Avatar>
                    <div>
                        <div>{userName}</div>
                        <div style={{ fontSize: "12px" }}>September 12, 2022</div>
                    </div>
                </Grid>
                <Grid item xs={12} style={{ marginBottom: "10px" }}>
                    <div style={{ color: "blue", fontSize: "20px" }}>{title}</div>
                    {description}
                </Grid>
                <Grid item xs={12}>
                    <img src={imageUrl} width="100%" height="100%" alt="image" />
                </Grid>
                <Grid item xs={12}>
                    <div style={{ marginTop: "10px", justifyContent: "space-between", display: "flex", fontWeight: 100 }}>
                        <FavoriteBorderIcon />
                        <ChatBubbleOutlineIcon />
                        <BookmarkBorderIcon />
                    </div>
                </Grid>
            </Grid>
        </Paper>
    </div>
    );
}


export default BlogCard;