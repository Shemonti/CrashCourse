import React from 'react';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Table1 from '../Table1/Table1';
import Table2 from '../Table2/Table2';
import Navbars from '../Navbars';
import Signin from '../Home/Signin';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
const Routersetup = () => {
    return (
        <Router>
           <Navbars/>
           <Switch>
           <Route exact path="/">
               <Signin/> 
           </Route>
           <Route  path="/signup">
               <Home/> 
           </Route>
           <Route path="/profile">
               <Profile/> 
           </Route>
           <Route path="/table1">
               <Table1/> 
           </Route>
           <Route path="/table2">
               <Table2/> 
           </Route>
           {/* <Route path='/person/:id' children={<Person/>}>

           </Route>
           <Route  path="*">
               <Error/> 
           </Route> */}
           </Switch>
       </Router>
    );
};

export default Routersetup;