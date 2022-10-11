import { Grid } from '@mui/material';
import "./Home.css";
import React, { useState } from 'react';
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import { Typography,Button } from '@material-ui/core';
import CreateBlogModal from './CreateBlogModal';

const Home = () => {
const [openModal, setOpenModal] = useState(false);
    const createModal = ()=>{
         setOpenModal(true)
    };

    return (
        <div >
            <CreateBlogModal
                open = {openModal}
                onClose= {()=> {setOpenModal(false)}}
            />
            <Grid container xs={12} className="home">
                <Grid item xs={12} sm={6} >
                    <img src='https://blog.hubspot.com/hubfs/GettyImages-974683580.jpg' width="100%" height="300px" />
                </Grid>
                <Grid item xs={12} sm={6} width="50%" textAlign="center">
                    <Typography className="heading">Publish your passions, your way</Typography>
                    <div className="heading1">Create a unique and beautiful blog easily.</div>
                    <Button className="createBtn" variant='contained' onClick={()=> createModal()}>Create Your Blog</Button>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default Home;