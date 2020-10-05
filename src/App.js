import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Registration from './Components/Registration/Registration';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import AppliedTasks from './Components/AppliedTasks/AppliedTasks';
import Admin from './Components/Admin/Admin';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});


  return (
     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
         
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          
          <PrivateRoute path="/registration">
            <Registration></Registration>
          </PrivateRoute>
          <Route path="/appliedTasks">
            <AppliedTasks/>
          </Route>
          <Route path="/adminArea">
            <Admin></Admin>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
   
    
  );
}

export default App;
