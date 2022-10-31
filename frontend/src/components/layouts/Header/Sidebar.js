import React, { useState } from 'react';
import "./Header.css";
import { useSelector } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const [open, setOpen] = useState(false);
    return (

        <Menu open = {open} onClick={()=> setOpen(!open)}>
            {isAuthenticated === true ?
                <div className='menu-item'>
                    <div LinkComponent={Link}  to="/" >Home</div>
                    <div LinkComponent={Link}  to="/blogs" >All Blogs</div>
                    <div LinkComponent={Link}  to="/myblogs" >My Blogs</div>
                    <Button className='btn'
                        variant='contained'
                        href='/login'
                        style={{ borderRadius: "100px", padding: "10px", display: "flex" }}>
                        <div>Logout</div>
                        <div style={{ display: "flex", marginLeft: "6px" }}><LogoutIcon /></div>
                    </Button>
                </div>
                :
                <div>
                    <Button className='btn'
                        variant='contained'
                        href='/login'
                        style={{ borderRadius: "100px", padding: "10px", display: "flex" }}>
                        <div>Login</div>
                    </Button>
                    <Button className='btn'
                        variant='contained'
                        href='/login'
                        style={{ borderRadius: "100px", padding: "10px", display: "flex" }}>
                        <div>Register</div>
                    </Button>
                </div>}
        </Menu>

    );
};

export default Sidebar;