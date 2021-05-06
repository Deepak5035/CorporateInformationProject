import React from 'react';



function Statement(){
    return(
        <>
        <div className="main-content" id="panel">
        <div className="row">
  <div className="col-xl-12">
    <div className="card">
      <div className="card-header border-0">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="mb-0">Rent Statement</h3>
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
              <th scope="col">Bill Month</th>
              <th scope="col">Rent</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Issue Date</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Paid Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                December
              </th>
              <td>
                4000
              </td>
              <td>
                4000
              </td>
              <td>
                10/12/2020
              </td>
              <td >
                Paid
              </td>
              <td>
              10/12/2020
              </td>
              <td>
                Done
              </td>
              </tr>
              <tr>
              <th scope="row">
                January
              </th>
              <td>
                4000
              </td>
              <td>
                4000
              </td>
              <td>
                10/12/2020
              </td>
              <td >
                Due
              </td>
              <td>
              10/12/2020
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
export default Statement;