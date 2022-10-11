import React from 'react';
import "./Header.css";
import { useDispatch, useSelector } from 'react-redux';
import { Grid, AppBar, Typography, Button, Toolbar } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { authActions } from '../../../store/authSlice';

const Header = () => {
    const dispatch = useDispatch();
    const id = localStorage.getItem("userId");
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    console.log("dvd",id);
    return (
        <AppBar>
            <Toolbar position="sticky">
                <Grid container justifyContent="space-between">
                    <Typography variant='h5'>BlogApp</Typography>
                    {id &&
                        <Grid item className="navItem" >
                            <NavLink to="/blogs" className="navItem1">All Blogs</NavLink>
                            <NavLink to="/myBlogs" className="navItem1">My Blogs</NavLink>
                        </Grid>
                    }
                    <Grid item xs={4} sm={6} spacing={2} justifyContent="flex-end" alignItem="center " display="flex" borderRadius="2px">
                        {id===null &&
                            <>
                                <Button className='btn' variant='contained' LinkComponent={Link} to="/login" style={{ borderRadius: "100px", marginRight: "10px" }}>Login</Button>
                                <Button className='btn' variant='contained' LinkComponent={Link} to="/signup" style={{ borderRadius: "100px" }}>Signup</Button>
                            </>}
                      {id && <Button className='btn' variant='contained' LinkComponent={Link} to="/login" style={{ borderRadius: "100px" }} onClick={()=> localStorage.setItem(null)}>Log out</Button>}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;