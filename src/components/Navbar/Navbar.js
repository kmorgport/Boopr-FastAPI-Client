import React, { useEffect, useState} from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar} from '@material-ui/core'
import useStyles from './styles';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Navbar = () => {

    const location = useLocation();
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // const [ user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div classes={classes.brandContainer}>

            </div>
            <Toolbar className={classes.appBar}></Toolbar>
            {/* {user && (
                <div>
                    <Avatar></Avatar>
                    <Typography></Typography>
                    <Button></Button>
                </div>
            )} */}
        </AppBar>
    )
}

export default Navbar