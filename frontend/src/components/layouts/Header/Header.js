import React from 'react';
import "./Header.css";
import { useDispatch, useSelector } from 'react-redux';
import { Grid, AppBar, Typography, Button, Toolbar } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
const Header = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.isAuthenticated);


    return (
        <AppBar>
            <Toolbar position="sticky">
                <Grid container display="flex" alignItems="center" className='header' >
                   <Grid item xs={2}><Typography variant='h5'>BlogApp</Typography></Grid>
                    <Grid item xs={10} className='header1'>
                        {isAuthenticated &&
                            <Grid item xs={9} className="navItem" >
                                <NavLink to="/" className="navItem1">Home</NavLink>
                                <NavLink to="/blogs" className="navItem1">All Blogs</NavLink>
                                <NavLink to="/myBlogs" className="navItem1">My Blogs</NavLink>
                            </Grid>
                        }
                        <Grid item xs={3} spacing={2} className='navBtn'>
                            {!isAuthenticated &&
                                <>
                                    <Button className='btn' variant='contained' LinkComponent={Link} to="/login" style={{ borderRadius: "100px", marginRight: "10px" }}>Login</Button>
                                    <Button className='btn' variant='contained' LinkComponent={Link} to="/signup" style={{ borderRadius: "100px" }}>Signup</Button>
                                </>}
                            {isAuthenticated && <Button className='btn' variant='contained' LinkComponent={Link} to="/login" style={{ borderRadius: "100px" }} onClick={() => dispatch({ type: "logout" })}>Log out</Button>}
                        </Grid>
                    </Grid>
                    <Grid className='header2'>
                        Header
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;