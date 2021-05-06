import React from 'react';
import { Link } from 'react-router-dom';



function Edetail(){
    return(
        <>
        <div className="main-content" id="panel">
        <div className="row">
  <div className="col-xl-12">
    <div className="card">
      <div className="card-header border-0">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="mb-0">Employee Details</h3>
          </div>
          <div className="col text-right">
            <Link to="/" className="btn btn-sm btn-primary">See all</Link>
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
              <th scope="col">Status</th>
              <th scope="col">Assigned Complain</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                Flat Colour Issue
              </th>
              <td>
                10/12/2020
              </td>
              <th scope="row">
                Pending
              </th>
              <td>
              
              </td>
              <td>
                Pending
              </td>
              </tr>
              <tr>
              <th scope="row">
                Flat Cleaning
              </th>
              <td>
                10/12/2020
              </td>
              <th scope="row">
                Due
              </th>
              <td>
              
              </td>
              <td>
                Pending
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
        </>
    );
};
export default Edetail;