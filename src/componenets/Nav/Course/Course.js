import React from 'react';
import './Course.css'
const Course = (props) => {
    // console.log(props.dat)
    const det=props.dat
    return (
        <div className="pic">
          <img src={det.picture} alt="" />
        </div>
    );
};

export default Course;