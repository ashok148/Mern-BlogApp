import React, { useState } from 'react';
import "./Header.css";
import { useDispatch, useSelector } from 'react-redux';
// import { Tab,Tabs } from '@material-ui/core';
import { Grid, AppBar, Typography, Button, Toolbar, Tabs, Tab} from '@mui/material';
import { Link } from 'react-router-dom';
import Burger from '../Sidebar/Burger';
const Header = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const [value, setValue] = useState(0);

    return (
        <AppBar>
            <Toolbar position="sticky" className='toolbar'>
                <Grid container display="flex" alignItems="center" className='header' >
                    <Grid item xs={2}><Typography variant='h5'>BlogApp</Typography></Grid>
                    <Grid item xs={10} className='header1'>
                        {isAuthenticated &&
                            <Grid item xs={9} className="navItem" >
                                <Tabs value={value} onChange={(e, val) => setValue(val)} textColor="inherit" >
                                    <Tab label="Home" LinkComponent={Link} to="/" />
                                    <Tab label="All Blogs" LinkComponent={Link} to="/blogs" />
                                    <Tab label="My Blogs" LinkComponent={Link} to="/myblogs" />
                                </Tabs>
                            </Grid>
                        }
                        <Grid item xs={3} spacing={2} className='navBtn'>
                            {!isAuthenticated &&
                                <>
                                    <Button className='btn' variant='contained' LinkComponent={Link} to="/login" style={{ borderRadius: "100px", marginRight: "10px" }}>Login</Button>
                                    <Button className='btn' variant='contained' LinkComponent={Link} to="/signup" style={{ borderRadius: "100px" }}>Signup</Button>
                                </>}
                            {isAuthenticated && <Button className='btn' variant='contained' LinkComponent={Link} to="/" style={{ borderRadius: "100px" }} onClick={() => dispatch({ type: "logout" })}>Log out</Button>}
                        </Grid>
                    </Grid>
                    <Grid className='header2'>
                        <Burger />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;