import React from 'react';
import "../Header/Header.css";
import { useSelector, useDispatch } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";

const Ul = styled.ul`
  div {
    padding: 18px 10px;
    margin: 18px 10px;
  }

  @media (max-width: 600px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    margin-top: 0px;
    transition: transform 0.3s ease-in-out;

    li {
      color: #333;
    }
  }
`;

const RightNav = ({ open,setopen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  console.log("aadad", open);
  return (
    <Ul open={open}>
      {isAuthenticated === true ?
        <div className='menu-item'>
          <div onClick={() => {navigate("/");setopen(false);}} >Home</div>
          <div onClick={() => {
            navigate("/blogs");
            setopen(false);
          }}
          >
            All Blogs
          </div>
          <div onClick={() =>{ navigate("/myblogs");setopen(false);}} >My Blogs</div>
          <div>
            <Button className='btn'
              variant='contained'
              onClick={() => {
                navigate("/login");
                dispatch({ type: "logout"});
                setopen(false);
              }}
              style={{ borderRadius: "100px", padding: "10px", display: "flex", width: "150px" }}>
              <span>Logout</span>
              <span style={{ display: "flex", marginLeft: "6px" }}><LogoutIcon /></span>
            </Button>
          </div>
        </div>
        :
        <div >
          <Button className='btn'
            variant='contained'
            onClick={() =>{ navigate("/login"); setopen(false);}}
            style={{ borderRadius: "100px", padding: "10px", display: "flex", marginBottom: "20px", width: "200px" }}>
            <span>Login</span>
          </Button>
          <Button className='btn'
            variant='contained'
            onClick={() => {navigate("/signup");setopen(false);}}
            style={{ borderRadius: "100px", padding: "10px", display: "flex", width: "200px" }}>
            <span>Register</span>
          </Button>
        </div>}
    </Ul>
  )
}

export default RightNav;
