import React from 'react'
import "./CSS/Products.css";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Axios from 'axios';
import { addToTheCart, saveTheProduct, fetchAndSaveTheProduct } from "../redux/PaarticularProduct/ppActions";
import { useState } from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Product({ history }) {
       const dispatch = useDispatch();
       const state = useSelector(state => state.particularProduct);
       const { productForDisplay, imageArray } = state;
       const [SizeClass, setSizeClass] = useState(null);
       const { isLoading, products, error } = state;
       const [CartFlag, setCartFlag] = useState(false);
       //const IdFromStore = products.find(item => item.id == match.params.id);
       //const { id, name, img, price } = IdFromStore;
       const removeSizeClass = () => {
              setTimeout(() => {
                     setSizeClass(null)
              }, 3000)
              return setSizeClass("size");

       }
       const [size, setsize] = useState("");
       const handleBuyNow = (size) => {
              size !== "" ? handlingRoutingAndAdditionToCart(productForDisplay._id, size) : removeSizeClass();

       }

       const handleAddToCart = (id, size) => {
              size !== "" ? dispatch(addToTheCart(id, setCartFlag)) : removeSizeClass();

       }
       const handlingRoutingAndAdditionToCart = (id, size) => {
              const token = localStorage.getItem("sneaker_token");
              if (token) {
                     history.push(`/cart`);
                     dispatch(addToTheCart(id, size));

              }
              else {
                     history.push("/user/login?arg=LF")
              }


       }
       useEffect(() => {
              console.log(history.location.search)
              const idstring = history.location.search;
              const idpart = idstring.split("=")[1];
              dispatch(fetchAndSaveTheProduct(idpart))


       }, [])
       return (
              <div>
                     {isLoading ? <div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: "100vh" }}><h1>Loading....</h1></div> :

                            <div>
                                   <Navbar />

                                   <div className="container" style={{ marginTop: "18vh" }}>
                                          <div className="row text-center" >
                                                 <div className="col-12" style={{ padding: "40px 0px" }}>
                                                        <h1><strong>Product</strong></h1>
                                                 </div>
                                          </div>
                                          <div className="row">
                                                 <div className="card p-5 col-lg-12 col-md-6 col-sm-12">

                                                        <div className="carousel slide " id="carouselControls" data-ride="carousel">
                                                               <div className=" carousel-inner">
                                                                      {imageArray.map((img, index) => (

                                                                             index === 0 ? <div className="carousel-item active" key={index}>
                                                                                    <img src={img.IMG_URL} className="img-fluid" alt="..." />

                                                                             </div> :
                                                                                    <div className="carousel-item " key={index}>
                                                                                           <img src={img.IMG_URL} className="img-fluid" alt="..." />

                                                                                    </div>
                                                                      ))}

                                                               </div>
                                                               <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                                                                      <FontAwesomeIcon icon="chevron-circle-left" color="black" size="2x" />
                                                                      <span className="sr-only">Previuos</span>
                                                               </a>
                                                               <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                                                                      <FontAwesomeIcon icon="chevron-circle-right" color="black" size="2x" />
                                                                      <span className="sr-only">Previuos</span>
                                                               </a>

                                                        </div>

                                                 </div>
                                                 <div className="p-5 card d-flex flex-column col-lg-12 col-md-6 col-sm-12 text-center ">
                                                        <h1 className="my-5">{productForDisplay.name}</h1>
                                                        <hr></hr>
                                                        <p className={SizeClass !== null ? SizeClass : null} style={{ margin: "70px 0px" }}>Select Size</p>
                                                        {CartFlag && <p className="text-success">ADDED TO CART SUCCESSFULY</p>}

                                                        <select className="btn btn-outline-dark" value={size} onChange={(e) => setsize(e.target.value)}>
                                                               <option>6(US)</option>
                                                               <option>7(US)</option>
                                                               <option>8(US)</option>
                                                               <option>9(US)</option>
                                                               <option>10(US)</option>
                                                        </select>
                                                        <div className="btn-group mt-auto">
                                                               <button className="btn btn-outline-dark" onClick={() => handleBuyNow(size)}>Buy now</button>
                                                               <button className="btn btn-outline-dark " onClick={() => handleAddToCart(productForDisplay._id, size)}>Add To Cart</button>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="row text-center" >
                                                 <div className="col-12" style={{ padding: "40px 60px" }}>
                                                        <h2>Product details</h2>
                                                        <p>{productForDisplay.desc}</p>

                                                 </div>
                                          </div>
                                   </div>
                            </div>

                     }

              </div>
       )
}

export default Product
