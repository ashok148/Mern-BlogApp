import { InputBase, Paper } from '@material-ui/core';
import "./createBlogModal.css";
import { Grid, Modal, Button } from '@mui/material';
import React, { useState } from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
const CreateBlogModal = (props) => {
    const [blogData, setBlogData] = useState(null);
    let handleClose = props?.onClose;
    const createAdd = () => {

    };
    const body = (
        <div>
            <Paper elevation={3} className="paper">
                <Grid container direction="row" >
                    <Grid className="modalheader">
                        <div>Write Your Blog</div>
                        <div style={{alignItem:"center",display:"flex"}}>
                            <CloseRoundedIcon onClick={()=>{handleClose(); setBlogData(null)}}/>
                        </div>
                    </Grid>
                    <Grid item className='input' >
                        <InputBase
                        style={{padding:"10px"}}
                            fullWidth
                            placeholder='Write...'
                            multiline
                            maxRows={20}
                            value={blogData}
                            onChange={(e)=> setBlogData(e.target.value)}
                        />
                    </Grid>
                    <Grid item style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "10px" }} >
                        <Button
                            className="Btn" variant='contained'
                            onClick={() => {
                                createAdd();
                                handleClose()
                            }}
                        >
                            Add Blog
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
    return (
        <Modal
            {...props}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            onClose={() => handleClose()}
        >
            {body}
        </Modal>

    )
}

export default CreateBlogModal;