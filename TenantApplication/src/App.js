import React from "react";
import "./App.css";
// import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "./Login/Login";
import Landlord from "./Landlord/Landloard"
import Tenant from "./Tenant/Tenant"
import Statement from "./Tenant/component/Statement";


const hist = createBrowserHistory();

function App(){
  return (
    <div>
   

        <Switch> 
          <Route path="/login" render={Login}/>
          <Route path="/landlord" render={Landlord}/>
          <Route path="/tenant" render={Tenant}/>
          <Route path="/dashboard" render={Tenant}/>
          <Route path="/statement" render={Statement}/>
          <Route path="/detail" render={Statement}/>
          <Route path="/complain" render={Statement}/>



          <Redirect exact from="/" to="/login"/> 
          
        </Switch>
        </div>
    
  
  );
}

export default App;