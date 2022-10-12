import { Grid, Paper } from '@material-ui/core';
import "./BlogCard.css";
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Avatar } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const BlogCard = (props) => {
    let id = props?.id;
    let userName = props?.name;
    let title = props?.title;
    let description = props?.description;
    let imageUrl = props?.image;
    let isUser = props?.isUser;
    let loading = props?.loading;
    const navigate = useNavigate();
    const [isReadMore, setIsReadMore] = useState(true);

    const handleEdit = () => {
        navigate(`/myblogs/${id}`);
    };
    const deleteRequest = async () => {
        const res = await axios
            .delete(`http://localhost:5000/api/blog/delete/${id}`)
            .catch((err) => console.log(err));
        const data = await res?.data;
        return data;
    };
    const handleDelete = () => {
        deleteRequest().then(() => loading(true));
    };
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

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
                        {isUser && <div className='icon'>
                            <EditIcon onClick={handleEdit} />
                            <DeleteForeverIcon onClick={handleDelete} />
                        </div>}
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: "10px" }}>
                        <div style={{ color: "blue", fontSize: "20px" }}>{title}</div>
                        <p className="text">
                            {isReadMore ? description.slice(0, 90) : description}
                            <span onClick={toggleReadMore} className="read-or-hide">
                                {isReadMore ? (description.length > 80 ? "...read more" : "") :( " show less")}
                            </span>
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={imageUrl} width="100%" height="100%" alt="" />
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