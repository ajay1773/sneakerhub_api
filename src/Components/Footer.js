import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
       return (
              <div style={{ position: "relative", bottom: "0px", marginTop: "70px" }}>
                     <div className="footer container-fluid bg-dark " style={{ color: "white", padding: "40px 50px", }}>
                            <div className="row">
                                   <div className="col-lg-3">
                                          <ul className="list-unstyled my-5">
                                                 <h3>Buy</h3>
                                                 <li className="list-item">Assurence</li>
                                                 <li className="list-item">Authenticity</li>
                                                 <li className="list-item">Awesomeness</li>
                                          </ul>
                                   </div>
                                   <div className="col-lg-3">
                                          <ul className="list-unstyled my-5">
                                                 <h3>Contact us</h3>
                                                 <li className="list-item">FAQ</li>
                                                 <li className="list-item">Privacy</li>
                                                 <li className="list-item">Terms</li>
                                          </ul>
                                   </div>
                                   <div className="col-lg-6 my-5">
                                          <h3 className="mb-5">To get the latest news signup for our news letter</h3>
                                          <form className="form-group form-inline">
                                                 <input className="form-control w-75" placeholder="Email..."></input>
                                                 <button className="btn btn-outline-light">Subscribe</button>
                                          </form>
                                   </div>
                            </div>
                            <div className="row">
                                   <div className="col-lg-3">
                                          <ul className="list-unstyled my-3">
                                                 <h3>Sell</h3>
                                                 <li className="list-item">Fee policy</li>
                                                 <li className="list-item">Dropoff</li>
                                          </ul>
                                   </div>
                                   <div className="col-lg-3">
                                          <ul className="list-unstyled my-3">
                                                 <h3>Support</h3>
                                                 <li className="list-item">Help</li>
                                                 <li className="list-item">Sneaker Care</li>
                                                 <li className="list-item">How to sell?</li>
                                          </ul>
                                   </div>
                                   <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">

                                          <div></div>
                                          <ul className="list-inline my-3">
                                                 <li className="list-inline-item mx-3" ><a href="https://github.com/ajay1773" ><FontAwesomeIcon icon={["fab", 'github']} size="2x" color="grey" /></a></li>
                                                 <li className="list-inline-item mx-3" ><a href="https://www.linkedin.com/in/ajay-dhiman-ab28a71b8/" ><FontAwesomeIcon icon={["fab", 'linkedin']} size="2x" color="grey" /></a></li>
                                                 <li className="list-inline-item mx-3" ><FontAwesomeIcon icon={["fab", "instagram"]} size="2x" color="grey" /></li>
                                                 <li className="list-inline-item mx-3" ><FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="grey" /></li>
                                          </ul>
                                          <div></div>
                                   </div>
                            </div>
                     </div>
              </div>

       )
}

export default Footer
