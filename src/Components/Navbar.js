import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import "./CSS/Home.css"
import { Link } from 'react-router-dom';
function Navbar() {
       // const cart = useSelector(state => state.particularProduct.cart);
       // const cart = JSON.parse(localStorage.getItem("cart"));
       return (
              <div>
                     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                            <a href="/" className="navbar-brand ml-5" ><strong>SNEAKER HUB</strong></a>
                            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarText">
                                   <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarText">
                                   <ul className="navbar-nav mr-auto ml-5">
                                          <li className="nav-item ">
                                                 <Link to="/brand?bname=all"> <button className="nav-link btn btn-link">Shop all</button></Link>
                                          </li>
                                          <li className="nav-item ">
                                                 <Link to=""> <button className="nav-link btn btn-link">Styles</button></Link>
                                          </li>
                                          <li className="nav-item ">
                                                 <Link to="/user/login"> <button className="nav-link btn btn-link">Login</button></Link>
                                          </li>
                                          <li className="nav-item dropdown ">
                                                 <button className="nav-link dropdown-toggle btn btn-link" id="navbarDropdown" role="button" data-toggle="dropdown">Brands</button>
                                                 <div className="dropdown-menu">
                                                        <Link to="/brand?bname=Adidas"><button className="dropdown-item">Adidas</button></Link>
                                                        <Link to="/brand?bname=Nike"> <button className="dropdown-item">Nike</button></Link>
                                                        <Link to="/brand?bname=Converse"> <button className="dropdown-item">Converse</button></Link>
                                                 </div>
                                          </li>
                                          {
                                                 localStorage.getItem("admin_token") ?

                                                 <li className="nav-item ">
                                                        <Link to="/addproduct"> <button className="nav-link btn btn-link">Add Product.</button></Link>
                                                 </li>:
                                                        <li className="nav-item ">
                                                               <Link to="/adminlogin"> <button className="nav-link btn btn-link">Admin Login</button></Link>
                                                        </li>
                                          }
                                   </ul>
                                   {localStorage.getItem("sneaker_token") &&

                                          <ul className="navbar-nav ml-auto">
                                                 <li className="nav-item m-2"><Link to="/cart"><FontAwesomeIcon icon="shopping-cart" color="white" size="lg" className="mx-3" /></Link></li>
                                                 <li className="nav-item m-2"><Link to="/user/profile"><FontAwesomeIcon icon="user" color="white" size="lg" className="mx-3" /></Link></li>
                                          </ul>


                                   }

                                   {/*<div className="d-flex flex-row justify-content-center align-items-center"><Link to="/cart"><div style={{ position: "relative" }}>
                                          <FontAwesomeIcon icon="shopping-cart" color="white" size="lg" className="mx-3" />
                                          {/* {cart.length === 0 ? <p>cart is null</p> : <p> {cart.length} </p>} 
                                          </div></Link>
                                          <Link to="/user/profile"> <FontAwesomeIcon icon="user" color="white" size="lg" /> </Link>
                                   </div>*/}

                                   <Link to="/search"><button className="btn btn-outline-light mx-3"><FontAwesomeIcon icon="search" size="lg" /></button></Link>


                            </div>
                     </nav>
              </div>
       )
}

export default Navbar
