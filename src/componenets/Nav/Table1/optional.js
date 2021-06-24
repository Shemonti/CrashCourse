import React,{ useState, useEffect }  from 'react';
import './Table1.css';
import { Paper,} from '@material-ui/core';
import Subtable from './Subtable';
import data from '../../../data/data.json'
const styles = {
    paperContainer: {
        backgroundImage: `url(https://www.kindpng.com/picc/m/197-1976381_crash-course-hd-png-download.png)`,
        backgroundSize: 'cover',
     backgroundPosition: 'center',
    height:'300px',
    }
};
const Table1 = () => {
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
        <div className='table1'>
            <Paper style={styles.paperContainer}>
           
            </Paper>

            <br/>
            <div className='subtable'> 
           
        {
          datas.map(dat=><Subtable dat={dat} handleenroll={handleenroll}></Subtable>)
        }
     </div>
        </div>
    );
};

export default Table1;