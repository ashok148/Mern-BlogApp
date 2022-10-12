import React from 'react';
import "./Header.css";
import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {
    return (
        <div>
            <Menu>
                <a className="menu-item" href="/">
                    Home
                </a>
                <a className="menu-item" href="/salads">
                    All Blogs
                </a>
                <a className="menu-item" href="/pizzas">
                    My Blogs
                </a>
                <a className="menu-item" href="/desserts">
                    Log Out
                </a>
            </Menu>
        </div>
    );
};

export default Sidebar;