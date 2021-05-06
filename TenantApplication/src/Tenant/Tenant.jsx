import React from 'react'
import SidebarT from '../Tenant/SidebarT'
import DashboardT from '../Tenant/DashboardT'
import Navbar from '../component/Navbar'
import { Route, Switch } from 'react-router-dom'
import Statement from './component/Statement'
import Detail from './component/Detail'
import Complain from './component/Complain'
import Report from './component/Report'



function Tenant(){
    return(

        <>
        <Navbar/>
        <SidebarT/>
      
        <Switch>
          <Route exact path="/tenant" render={DashboardT}/>
          <Route path="/tenant/dashboard" render={DashboardT}/>
          <Route path="/tenant/statement" render={Statement}/>
          <Route path="/tenant/detail" render={Detail}/>
          <Route path="/tenant/complain" render={Complain}/>
          <Route path="/tenant/report" render={Report}/>

          </Switch>
          
       
    </>
    )


};
export default Tenant; 