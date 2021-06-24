import React,{ useState, useEffect } from 'react';
import './Table2.css';
import Course from '../Course/Course';
import Info from '../Info/Info';

const Table2 = () => {
  const [Users, setUsers] = useState([])
  const [datas,setdatas]=useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUsers(data.results)});
  }, [])

// useEffect(() => {
//  setdatas(data)
// }, [])

  const[member,setmember]=useState([])

  const handleaddmember=(namemember)=>{
    
    const newmember=[...member,namemember]
    setmember(newmember)
}
    return (
      <div className="tble">
      <h1 className="h1">Choose Your course Instructor and make your Team  </h1>
      <ul>
        {
          datas.map(dat=><Course dat={dat}></Course>)
        }
      </ul>
      <ul>
        {
          member.map(m=><li>{m}</li>)
        }
      </ul>
      {
        Users.map(users => <Info user={users} handleaddmember={handleaddmember} ></Info>)
      }
    </div>
    );
};

export default Table2;