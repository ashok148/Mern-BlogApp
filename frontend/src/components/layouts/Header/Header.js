import React from 'react';
import "./Header.css";
import { useDispatch, useSelector } from 'react-redux';
import { Grid, AppBar, Typography, Button, Toolbar } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { authActions } from '../../../store';

const Header = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    return (
        <AppBar>
            <Toolbar position="sticky">
                <Grid container justifyContent="space-between">
                    <Typography variant='h5'>BlogApp</Typography>
                    {isAuthenticated &&
                        <Grid item className="navItem" >
                            <NavLink to="/blogs" className="navItem1">All Blogs</NavLink>
                            <NavLink to="/myBlogs" className="navItem1">My Blogs</NavLink>
                        </Grid>
                    }
                    <Grid item xs={4} sm={6} spacing={2} justifyContent="flex-end" alignItem="center " display="flex" borderRadius="2px">
                        {!isAuthenticated &&
                            <>
                                <Button className='btn' variant='contained' LinkComponent={Link} to="/login" style={{ borderRadius: "100px", marginRight: "10px" }}>Login</Button>
                                <Button className='btn' variant='contained' LinkComponent={Link} to="/signup" style={{ borderRadius: "100px" }}>Signup</Button>
                            </>}
                      {isAuthenticated && <Button className='btn' variant='contained' LinkComponent={Link} to="/login" style={{ borderRadius: "100px" }} onClick={()=>dispatch(authActions?.logout())}>Log out</Button>}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;