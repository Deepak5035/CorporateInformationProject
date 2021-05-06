import  React from "react";

function Detail(){
    return(
        
        <>
  <div className="main-content" id="panel">
    {/* Topnav */}
    <nav className="navbar navbar-top navbar-expand navbar-dark bg-default border-bottom">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav align-items-center  ml-md-auto ">
            <li className="nav-item d-sm-none">
              <a className="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
                <i className="ni ni-zoom-split-in" />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="ni ni-bell-55" />
              </a>
              <div className="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden">
                {/* Dropdown header */}
                <div className="px-3 py-3">
                  <h6 className="text-sm text-muted m-0">You have <strong className="text-primary">13</strong> notifications.</h6>
                </div>
                {/* List group */}
                <div className="list-group list-group-flush">
                  <a href="#!" className="list-group-item list-group-item-action">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* Avatar */}
                        <img alt="Image placeholder" src="../assets/img/theme/team-1.jpg" className="avatar rounded-circle" />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Sw</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>2 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" className="list-group-item list-group-item-action">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* Avatar */}
                        <img alt="Image placeholder" src="../assets/img/theme/team-2.jpg" className="avatar rounded-circle" />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>3 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">A new issue has been reported for Argon.</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" className="list-group-item list-group-item-action">
                    <div className="row align-items-center">
                      <div className="col-auto">
                  
                        <img alt="Image placeholder" src="../assets/img/theme/team-4.jpg" className="avatar rounded-circle" />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>2 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" className="list-group-item list-group-item-action">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* Avatar */}
                        <img alt="Image placeholder" src="../assets/img/theme/team-5.jpg" className="avatar rounded-circle" />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>3 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">A new issue has been reported for Argon.</p>
                      </div>
                    </div>
                  </a>
                </div>
         
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Header */}
    {/* <div className="header pb-6 d-flex align-items-center" style={{minHeight: 500, backgroundImage: 'url(../assets/img/theme/profile-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top'}}>
      {/* Mask */}
      <span className="mask bg-gradient-default opacity-8" />
      {/* Header container */}
    
    {/* Page content */}
    <div className="container-fluid mt--6">
      <div className="row">
        <div className="col-xl-4 order-xl-2">
          <div className="card card-profile">
            <img src="../assets/img/theme/img-1-1000x600.jpg" alt="Image placeholder" className="card-img-top" />
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img src="../assets/img/theme/team-4.jpg" className="rounded-circle" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-sm btn-info  mr-4 ">Connect</a>
                <a href="#" className="btn btn-sm btn-default float-right">Message</a>
              </div>
            </div>
            <div className="card-body pt-0">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span className="heading">22</span>
                      <span className="description">Friends</span>
                    </div>
                    <div>
                      <span className="heading">10</span>
                      <span className="description">Photos</span>
                    </div>
                    <div>
                      <span className="heading">89</span>
                      <span className="description">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h5 className="h3">
                  Jessica Jones<span className="font-weight-light">, 27</span>
                </h5>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2" />Bucharest, Romania
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2" />Solution Manager - Creative Tim Officer
                </div>
                <div>
                  <i className="ni education_hat mr-2" />University of Computer Science
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 order-xl-1">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">Edit profile </h3>
                </div>
                <div className="col-4 text-right">
                  <a href="#!" className="btn btn-sm btn-primary">Settings</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form>
                <h6 className="heading-small text-muted mb-4">User information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-username">Username</label>
                        <input type="text" id="input-username" className="form-control" placeholder="Username" defaultValue="lucky.jesse" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-email">Email address</label>
                        <input type="email" id="input-email" className="form-control" placeholder="jesse@example.com" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-first-name">First name</label>
                        <input type="text" id="input-first-name" className="form-control" placeholder="First name" defaultValue="Lucky" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                        <input type="text" id="input-last-name" className="form-control" placeholder="Last name" defaultValue="Jesse" />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                {/* Address */}
                <h6 className="heading-small text-muted mb-4">Contact information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-address">Address</label>
                        <input id="input-address" className="form-control" placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-city">City</label>
                        <input type="text" id="input-city" className="form-control" placeholder="City" defaultValue="New York" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-country">Country</label>
                        <input type="text" id="input-country" className="form-control" placeholder="Country" defaultValue="United States" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-country">Postal code</label>
                        <input type="number" id="input-postal-code" className="form-control" placeholder="Postal code" />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                {/* Description */}
                <h6 className="heading-small text-muted mb-4">About me</h6>
                <div className="pl-lg-4">
                  <div className="form-group">
                    <label className="form-control-label">About Me</label>
                    <textarea rows={4} className="form-control" placeholder="A few words about you ..." defaultValue={"A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer pt-0">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="copyright text-center  text-lg-left  text-muted">
              © 2020 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
              </li>
              <li className="nav-item">
                <a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
              </li>
              <li className="nav-item">
                <a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
              </li>
              <li className="nav-item">
                <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" className="nav-link" target="_blank">MIT License</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</>


        );
    }

    
    
    export default Detail;