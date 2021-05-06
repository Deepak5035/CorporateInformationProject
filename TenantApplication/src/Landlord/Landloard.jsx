import React from "react";
import { Route, Switch } from 'react-router-dom'
import SidebarL from "../Landlord/SidebarL";
import DashboardL from "../Landlord/DashboardL";
import Navbar from "../component/Navbar";
import Udetail from "./component/Udetail";
import Edetail from "./component/Edetail";
import Rdetail from "./component/Rdetail";
import Rstatement from "./component/Rstatement"
import Utility from "./component/Utility";
import Maintence from "./component/Maintence";
import Fund from "./component/Fund";
import Complain from "./component/Complain";
import Report from "../Tenant/component/Report";



function landlord() {
  return (
    <>
      <Navbar />
      <SidebarL />
    
      
      <Switch>
            <Route exact path="/landlord" render={DashboardL}/>
          <Route path="/landlord/dashboard" render={DashboardL}/>
          <Route path="/landlord/unitdetail" render={Udetail}/>
          <Route path="/landlord/rentdetail" render={Rdetail}/>
          <Route path="/landlord/employeedetail" render={Edetail}/>
          <Route path="/landlord/rentstatement" render={Rstatement}/>
          <Route path="/landlord/ownerutility" render={Utility}/>
          <Route path="/landlord/maintence" render={Maintence}/>
          <Route path="/landlord/funddetail" render={Fund}/>
          <Route path="/landlord/complain" render={Complain}/>
          <Route path="/landlord/report" render={Report}/>

          </Switch>

    </>
  );
}

export default landlord;
