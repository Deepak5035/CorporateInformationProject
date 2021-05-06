import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  // const [username,setUsername] = useState();
  // const [password,setPassword] = useState();


//   const handleChange = event =>{
//     if(event.target.name === 'username'){
//       setUsername(event.target.value)
//     }else if(event.target.name === 'password'){
//       setPassword(event.target.value)
//     }
// }
// const handleLogin = ()=>{
//   //   http.post('/admin/auth/login',
//   //   {
//   //     "username":username,
//   //     "password": password
//   //   },(err,resp)=>{
//   //       if(resp  && resp.data){
//   //           sessionStorage.setItem('access-token',resp.data.token)
//   //           sessionStorage.setItem('user',JSON.stringify(resp.data.user))
//   //           window.location.href = "/admin/dashboard"
//   //       }else{
//   //         showNotification()
//   //         setError(err.message)
//   //       }
//   //   }
//   // )
//   }
  



  return (
    <>
      {/* Main content */}
      <div className="main-content">
        {/* Header */}
        <div className="header bg-gradient-primary py-4 py-lg-2 pt-lg-4">
          <div className="container">
            <div>
              <ul class="nav justify-content-end">
                </ul>
            </div>
            <div className="header-body text-center mb-8">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                  <h1 className="text-white py-4 py-lg-4 pt-lg-6">
                    Welcome to Tenant Portal !{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt--8 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card bg-secondary border-0 mb-0">
                <div className="card-header bg-transparent pb-2">
                  <div className="btn-wrapper text-center">
                    <div className="btn btn-neutral btn-icon">
                      <span className="btn-inner--text">Login</span>
                    </div>

                    <div className="btn btn-neutral btn-icon">
                      <span className="btn-inner--text">Register</span>
                    </div>

                    <br />
                    <div className="text-center text-muted mb-0">
                      <small>sign in with credentials</small>
                    </div>
                  </div>
                </div>
                <div className="card-body px-lg-2 py-lg-2">
                  <form role="form">
                    <div className="form-group mb-3">
                      {/* <div className="input-group input-group-merge input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-email-83" />
                          </span>
                        </div>
                        <input
                        onChange={handleChange}
                          className="form-control"
                          placeholder="Email"
                          type="email"
                        />
                      </div>
                    </div> 
                    <div className="form-group">
                      <div className="input-group input-group-merge input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-lock-circle-open" />
                          </span>
                        </div>
                        <input
                        onChange={handleChange}
                          className="form-control"
                          placeholder="Password"
                          type="password"
                        />
                      </div>*/}
                      <div>
                        <br />
                        <div className="btn-wrapper text-left">
                          <div class="dropdown">
                            <button
                              type="button"
                              class="btn btn-secondary dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Select user type
                            </button>
                            <div class="dropdown-menu">
                              <Link class="dropdown-item" to="/tenant">
                                Tenant
                              </Link>
                              <Link class="dropdown-item" to="/landlord">
                                Owner
                              </Link> 
                            </div>

                           

                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor=" customCheckLogin"
                      >
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div> */}
                    {/* <div className="text-center">
                      <button type="button" className="btn btn-primary my-4">
                        Sign in
                      </button>
                    </div> */}
                  </form>
                </div>
              </div>
              {/* <div className="row mt-3">
                <div className="col-6">
                  <a href="#" className="text-light">
                    <small>Forgot password?</small>
                  </a>
                </div>
                <div className="col-6 text-right">
                  <a href="#" className="text-light">
                    <small>Create new account</small>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="py-5" id="footer-main">
        <div className="container">
          <div className="row align-items-center justify-content-xl-between">
            <div className="col-xl-6">
              <div className="copyright text-center text-xl-left text-muted">
                © 2020{" "}
                <a href="#" className="font-weight-bold ml-1" target="_blank">
                  Tenant Portal
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                <li className="nav-item">
                 <Link to="/landlord">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                   to="/tenant">
                    Blog
                  </Link> 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}




export default Login;
