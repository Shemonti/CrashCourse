import React,{ useState, useEffect } from 'react';
import './Profile.css';
import { Paper,} from '@material-ui/core';
import Subprofile from './Subprofile';
import data from '../../../data/data.json';
const styles = {
    paperContainer: {
        backgroundImage: `url(https://www.kindpng.com/picc/m/197-1976381_crash-course-hd-png-download.png)`,
        backgroundSize: 'cover',
     backgroundPosition: 'center',
    height:'300px',
    }
};
const Profile = () => {
    const Data=data.slice(1,5);
    const [datas,setdatas]=useState([])
    const [Enroll, setEnroll] = useState([])
  
    const handleenroll=(course)=>{
      // console.log('Added',course)
      const newcourse=[...Enroll,course]
      setEnroll(newcourse)
  }
  useEffect(() => {
   setdatas(Data)
  }, [])
    return (
        <div className="profile">
            
            <Paper style={styles.paperContainer}>
              <h4>Welcome to 
                  </h4>
            </Paper>
            <br/>
            <div className='suprofile'> 
           
        {
          datas.map(dat=><Subprofile dat={dat} handleenroll={handleenroll}></Subprofile>)
        }
     </div>
        </div>
    );
};

export default Profile;