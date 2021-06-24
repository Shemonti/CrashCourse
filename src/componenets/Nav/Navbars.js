import React from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Navbars.css';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({

    linkstyle: {
        color: 'white',
        textDecoration: 'none',
    },
    root: {
        flexGrow: 1,
       

    },
});
const Nav = (props) => {
    const classes = useStyles()
    return (
        <div className='nav'>
            <AppBar className='app'>
                <Toolbar>
                    <Typography className={classes.root} variant='h4'>
                       
                            Crash Course
                      
                    </Typography>

                    <Typography variant='subtitle1' className={classes.root}>
                        <Link className={classes.linkstyle} to='/'>
                            Home
                        </Link>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.root}>
                        <Link className={classes.linkstyle}>
                            Profile
                        </Link>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.root}>
                        <Link className={classes.linkstyle} to='/table1'>
                            Table1
                        </Link>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.root}>
                        <Link className={classes.linkstyle} to='/table2'>
                            Table2
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Nav;