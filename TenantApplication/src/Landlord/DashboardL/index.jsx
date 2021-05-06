import React from 'react';
import { render } from '@testing-library/react';
import { Component } from 'react';


function DashboardL(){
    return(


<div className="main-content" id="panel">
    <div className="header bg-primary pb-6">
      <div className="container-fluid">
        <div className="header-body">
          <div className="row align-items-center py-4">
            <div className="col-lg-6 col-7">
              <h6 className="h2 text-white d-inline-block mb-0">Owner Dashboard</h6>
              <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
               
              </nav>
            </div>
            <div className="col-lg-6 col-5 text-right">
              <a href="#" className="btn btn-sm btn-neutral">Home</a>
              <a href="#" className="btn btn-sm btn-neutral">Dashboard</a>
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
                      <h5 className="card-title text-uppercase text-muted mb-0">My Unit</h5>
                      <span className="h2 font-weight-bold mb-0">2</span>
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
                      <h5 className="card-title text-uppercase text-muted mb-0">My Tenant</h5>
                      <span className="h2 font-weight-bold mb-0">1</span>
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
                      <h5 className="card-title text-uppercase text-muted mb-0">Total Employee</h5>
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
                      <h5 className="card-title text-uppercase text-muted mb-0">My Total Rent</h5>
                      <span className="h2 font-weight-bold mb-0">$3000</span>
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
              <div className="card card-stats">
                {/* Card body */}
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">Owner Utility</h5>
                      <span className="h2 font-weight-bold mb-0">$0.000</span>
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
                      <h5 className="card-title text-uppercase text-muted mb-0">Total Maintenance</h5>
                      <span className="h2 font-weight-bold mb-0">$50.00</span>
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
                      <h5 className="card-title text-uppercase text-muted mb-0">Total Fund</h5>
                      <span className="h2 font-weight-bold mb-0">$200.00</span>
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
                      <h5 className="card-title text-uppercase text-muted mb-0">Help Desk</h5>
                      <span className="h2 font-weight-bold mb-0">Golden Tower</span>
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
            
          </div>
        </div>
      </div>
    </div>
    {/* Page content */}
    <div className="container-fluid mt--6">
           <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header border-0">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="mb-0">Last 5 Complain List</h3>
                </div>
                <div className="col text-right">
                  <a href="#!" className="btn btn-sm btn-primary">See all</a>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              {/* Projects table */}
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Tittle</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                     Rent For Flat 1
                    </th>
                    <td>
                      12 Dec 2020
                    </td>
                    <td>
                      pending
                    </td>
                
                  </tr>
                 </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        
        </div>
        
        

        <div className="container-fluid mt--10">
           <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header border-0">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="mb-0">Notice Board</h3>
                </div>
                <div className="col text-right">
                  <a href="#!" className="btn btn-sm btn-primary">See all</a>
                </div>
              </div>
            </div>
      <div className="table-responsive">
              {/* Projects table */}
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">S.no</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                     Rent For Flat 1
                    </th>             
                  </tr>
                 </tbody>
              </table>
            </div>
        
          </div>
        
          </div>
        
        </div>
        </div>

      <div className="container-fluid mt--10">
           <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header border-0">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="mb-0">Apartment Rules and Regulation</h3>
                </div>
                <div className="col text-right">
                  <a href="#!" className="btn btn-sm btn-primary">See all</a>
                </div>
              </div>
            </div>
      <div className="table-responsive">
              {/* Projects table */}
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">S.no</th>
                    
                  </tr>
                </thead>
                <tbody>
                
                   <tr>
                    <td>
                    1. Gate closed at 10 Pm.
                    </td>
                     </tr>
                     <tr>
                    <td>
                    2. New Commer must be ntroduced with Gaurd.
                    </td>
                    </tr>
                 </tbody>
              </table>
            </div>
        
          </div>
        
          </div>
        
        </div>
        </div>
        
     


</div>
    );
}


export default DashboardL;