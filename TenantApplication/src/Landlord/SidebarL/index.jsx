import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBarL(){
    return (
        <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
        <div className="scrollbar-inner">
          {/* Brand */}
          <div className="sidenav-header  align-items-center">
            <a className="navbar-brand" href="javascript:void(0)">
              <h1>Landlord Portal</h1>
        
            </a>
          </div>
          <div className="navbar-inner">
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="sidenav-collapse-main">
              {/* Nav items */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/landlord/dashboard">
                    <i className="ni ni-tv-2 text-primary" />
                    <span className="nav-link-text">Owner Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/landlord/unitdetail">
                    <i className="ni ni-planet text-orange" />
                    <span className="nav-link-text">Unit Details</span>
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/landlord/rentdetail">
                    <i className="ni ni-pin-3 text-primary" />
                    <span className="nav-link-text">Rent Details</span>
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/landlord/employeedetail">
                    <i className="ni ni-single-02 text-yellow" />
                    <span className="nav-link-text">Employee Details Info</span>
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/landlord/rentstatement">
                    <i className="ni ni-single-02 text-yellow" />
                    <span className="nav-link-text">Rent Statement</span>
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/landlord/ownerutility">
                    <i className="ni ni-single-02 text-yellow" />
                    <span className="nav-link-text">Owner Utility statement</span>
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/landlord/maintence">
                    <i className="ni ni-single-02 text-yellow" />
                    <span className="nav-link-text">Maintence Cost Details</span>
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/landlord/funddetail">
                    <i className="ni ni-single-02 text-yellow" />
                    <span className="nav-link-text">Fund Details Info</span>
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/landlord/Complain">
                    <i className="ni ni-single-02 text-yellow" />
                    <span className="nav-link-text">Complain</span>
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/landlord/report">
                    <i className="ni ni-single-02 text-yellow" />
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