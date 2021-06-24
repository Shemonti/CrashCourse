import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from 'react-bootstrap';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Member = () => {
    const classes = useStyles();
    const [persons, setpersons] = useState({ name: '', email: '' });
    const [people, setpeople] = useState([])
    const handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      // console.log(name,value)
      setpersons({ ...persons, [name]: value })
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log('cliked')
      if (persons.name && persons.email) {
        const newperson = { ...persons, id: new Date().getTime().toString() }
        // setpeople([...people, newperson])
        // setpersons({ name: '', email: '' })
        console.log(newperson)
      }
  
    }
    return (
     <div className='member'>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  onChange={handleChange}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField

                 
                
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={persons.email}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Link to='/profile'>
            <Button
             
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              
              className={classes.submit}
            >
              Sign Up
            </Button>
           </Link>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to='/'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      

   {
    people.map((pip, index) => {
      console.log(pip)
      // const { id, name,email } = pip
      // return (
      //   <div key={id}>
      //     <ListGroup horizontal style={{margin: '20px'}}>
      //       <ListGroup.Item style={{color: "black"}}>{name}</ListGroup.Item>
      //       <ListGroup.Item style={{color: "black"}}>{email}</ListGroup.Item>

      //     </ListGroup>
      //   </div>
      // )

    })
  }

</div>
    );
};

export default Member;