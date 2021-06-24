import React from 'react';
import './Home.css';
import Member from '../Member/Member';
import Image from '../Image/main.jpg';
import { Paper,} from '@material-ui/core';



const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
     backgroundPosition: 'center',
    height:'300px',
    }
};
const Home = () => {
   
    return (
        <div className='home'>
            
            <Paper style={styles.paperContainer}>
              
            </Paper>
            <h1>To Enter Our Website You Have to Sign Up First</h1>
        <Member></Member>
    </div>
    );
};

export default Home;