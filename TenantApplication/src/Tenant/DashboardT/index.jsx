import React from "react";
import { render } from "@testing-library/react";
import { Component } from "react";
import { Link } from "react-router-dom";



function DashboardT() {
  return (
    <>
 
 <div className="main-content" id="panel">
        <nav
          className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
          id="sidenav-main"
        >
          <div className="scrollbar-inner">
            {/* Brand */}
            <div className="sidenav-header  align-items-center">
              <Link className="navbar-brand" to="/">
                <h1>Tenant Portal</h1>
              </Link>
            </div>
            <div className="navbar-inner">
              {/* Collapse */}
              <div
                className="collapse navbar-collapse"
                id="sidenav-collapse-main"
              >
                {/* Nav items */}
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/tenant/dashboard">
                      <i className="ni ni-tv-2 text-primary" />
                      <span className="nav-link-text">Dashboard</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tenant/statement">
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
                    <a className="nav-link" href="profile.html">
                      <i className="ni ni-single-02 text-yellow" />
                      <span className="nav-link-text">Tenant Complain</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="tables.html">
                      <i className="ni ni-bullet-list-67 text-default" />
                      <span className="nav-link-text">Rented Report</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* Header */}
        <div className="header bg-primary pb-6">
          <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-center py-4">
                <div className="col-lg-6 col-7">
                  <h6 className="h2 text-white d-inline-block mb-0">
                    Tenant Dashboard
                  </h6>
                  <nav
                    aria-label="breadcrumb"
                    className="d-none d-md-inline-block ml-md-4"
                  ></nav>
                </div>
                <div className="col-lg-6 col-5 text-right">
                  <a href="#" className="btn btn-sm btn-neutral">
                    Home
                  </a>
                  <a href="#" className="btn btn-sm btn-neutral">
                    Dashboard
                  </a>
                </div>
              </div>
              {/* Card stats */}
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="card card-stats">
                    {/* Card body */}
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h5 className="card-title text-uppercase text-muted mb-0">
                            Rented Statement
                          </h5>
                          <span className="h2 font-weight-bold mb-0">$300</span>
                        </div>
                        <div className="col-auto">
                          <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card card-stats">
                    {/* Card body */}
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h5 className="card-title text-uppercase text-muted mb-0">
                            Unit Deatails
                          </h5>
                          <span className="h2 font-weight-bold mb-0">
                            Flat #1
                          </span>
                        </div>
                        <div className="col-auto">
                          <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                            <i className="ni ni-chart-pie-35" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card card-stats">
                    {/* Card body */}
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h5 className="card-title text-uppercase text-muted mb-0">
                            Total Complain
                          </h5>
                          <span className="h2 font-weight-bold mb-0">1</span>
                        </div>
                        <div className="col-auto">
                          <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                            <i className="ni ni-chart-bar-32" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card card-stats">
                    {/* Card body */}
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h5 className="card-title text-uppercase text-muted mb-0">
                            Help Desk{" "}
                          </h5>
                          <span className="h2 font-weight-bold mb-0">
                            Golden Tower
                          </span>
                        </div>
                        <div className="col-auto">
                          <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                            <i className="ni ni-money-coins" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card card-stats">{/* Card body */}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page content */}
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col-xl-8">
              <div className="card">
                <div className="card-header border-0">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Payment Summary</h3>
                    </div>
                    <div className="col text-right">
                      <a href="#!" className="btn btn-sm btn-primary">
                        See all
                      </a>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  {/* Projects table */}
                  <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Rent</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Rent For Flat 1</th>
                        <td>12 Dec 2020</td>
                        <td>340</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardT;
