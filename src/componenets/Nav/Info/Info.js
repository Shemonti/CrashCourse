import React, { useState }  from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import './Info.css';

const Info = (props) => {
   
    const name = props.user.name
    const fullname=name.first + ' ' + name.last
    const email=props.user.email
    const pic=props.user.picture
    const mobilenum=props.user.phone
    const [phone, setphone] = useState('')
    const showPhone=()=>(setphone(mobilenum))
    const addmember=props.addmember
    
    return (
        <div className='User'>
        <div className='image'>
        <img src={pic.large} alt="" />
            </div>
            <div className='info'>
            <h1> Name:{fullname}</h1>
            <p>Email:{email}</p>
            <p>learn about me</p>
            <p>Phone Number:{phone}</p>
            <button onClick={showPhone}>Show number</button>
            <button onClick={()=>props.handleaddmember(fullname)}>Add me</button>
           
            </div>
        </div>
    );
};

export default Info;