import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar(){
    return (
        <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
        <div className="scrollbar-inner">
          {/* Brand */}
          <div className="sidenav-header  align-items-center">
            <a className="navbar-brand" href="javascript:void(0)">
              <h1>Tenant Portal</h1>
        
            </a>
          </div>
          <div className="navbar-inner">
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="sidenav-collapse-main">
              {/* Nav items */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active " to="/tenant/dashboard">
                    <i className="ni ni-tv-2 text-primary" />
                    <span className="nav-link-text">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link "  to="/tenant/statement">
                    <i className="ni ni-planet text-orange" />
                    <span className="nav-link-text">Rent Statement</span>
                  </Link>
              
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/tenant/detail">
                    <i className="ni ni-pin-3 text-primary" />
                    <span className="nav-link-text">Tenant Details</span>
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/tenant/complain">
                    <i className="ni ni-single-02 text-yellow" />
                    <span className="nav-link-text">Tenant Complain</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  data-toggle="pill" to="/tenant/report">
                    <i className="ni ni-bullet-list-67 text-default" />
                    <span className="nav-link-text">Rented Report</span>
                    </Link>
                    </li>
                  
              </ul>
            </div>
          </div>
        </div>
      </nav>
     
    )
}
