import React, { useEffect, useState } from "react";
import { getLandlordDetail } from "./services/landlordService";

const Rstatement = (props) => {
  const [landlordDetail, setLandlordDetail] = useState([]);
  useEffect(() => {
    getLandlordDetails();
  }, [])
  const getLandlordDetails = async () => {
    try {
      let result = await getLandlordDetail();
      setLandlordDetail(result)
    } catch (error) {
      console.log(error)
    }
  };
  return (
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
                    {/* <Link to="/" className="btn btn-sm btn-primary">
                      See all
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                {/* Projects table */}
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">user id</th>
                      <th scope="col">ID</th>
                      <th scope="col">title</th>
                      <th scope="col">Body</th>
                    </tr>
                  </thead>
                  <tbody>
                    {landlordDetail.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{item.userId}</th>
                          <td>{item.id}</td>
                          <th scope="row">{item.title}</th>
                          <td>{item.body}</td>
                        </tr>
                      )
                    })}
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
export default Rstatement;
