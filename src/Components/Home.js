import React from 'react'
import "./CSS/Home.css"
import Hero from "./Images/Hero.jpg"
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Axios from 'axios';
import { setProducts } from "../redux/Product/productActions";
import { useState } from 'react';
import Nav from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { AdidasArraySeperator } from "./HelpingFunctions"
function Navbar() {
       //filtering data
       //const state = useSelector(state => state);
       const dispatch = useDispatch();
       const [activeItems, setactiveItems] = useState([]);
       const [LastItems, setLastItems] = useState([]);
       const [AdidasSplittedArrays, setAdidasSplittedArrays] = useState({ activeArray: [], lastTwoElements: [] })
       const [ConverseSplittedArrays, setConverseSplittedArrays] = useState({ activeArray: [], lastTwoElements: [] })
       const DataSplitter = (DataArray) => {

              const tempArray = [...DataArray];
              const splittedItems = tempArray.splice(0, 2);
              const anotherSplittedArray = tempArray.splice(0, 2);
              return { splittedItems, anotherSplittedArray }

       }
       const AdidasSplitter = (DataArray) => {
              const FilteredArray = DataArray.filter((item) => item.brand.toLowerCase() === "adidas")
              const tempArray = [...FilteredArray];
              const splittedItems = tempArray.splice(0, 2);
              const anotherSplittedArray = tempArray.splice(0, 2);
              return { splittedItems, anotherSplittedArray }

       }
       const ConverseSplitter = (DataArray) => {
              const FilteredArray = DataArray.filter((item) => item.brand.toLowerCase() === "converse")
              const tempArray = [...FilteredArray];
              const splittedItems = tempArray.splice(0, 2);
              const anotherSplittedArray = tempArray.splice(0, 2);
              return { splittedItems, anotherSplittedArray }

       }
       useEffect(() => {
              Axios.get("https://sneakerhubapi.herokuapp.com/products")
                     .then(response => {

                            dispatch(setProducts(response.data));
                            const splittedArrays = DataSplitter(response.data);
                            setactiveItems(splittedArrays.splittedItems);
                            setLastItems(splittedArrays.anotherSplittedArray);
                            //Adidas splitting
                            const AdidasProductarrays = AdidasSplitter(response.data);
                            setAdidasSplittedArrays({ activeArray: AdidasProductarrays.anotherSplittedArray, lastTwoElements: AdidasProductarrays.splittedItems });
                            //Converse splitting arrays
                            const ConverseProductarrays = ConverseSplitter(response.data);
                            setConverseSplittedArrays({ activeArray: ConverseProductarrays.anotherSplittedArray, lastTwoElements: ConverseProductarrays.splittedItems });
                            console.log(AdidasProductarrays);



                     })
                     .catch(err => console.log(err));


       }, [])
       return (
              <div>
                     <div className="Top">
                            <div className="main">
                                   <Nav />
                            </div>
                            <div className=" container-fluid text-center hero-image" >
                            </div>
                            <div className="justDropped d-flex align-items-center justify-content-around ">
                                   <h3>Just Dropped </h3>
                                   <button className="btn btn-outline-dark ">See all</button>
                            </div>
                            <div className="carousel slide p-5" id="carouselControls" data-ride="carousel">
                                   <div className="carousel-inner">
                                          <div className="carousel-item active">
                                                 <div className="container-fluid">
                                                        <div className="row">

                                                               {activeItems.map((item) => (
                                                                      <div key={item._id} className="col-6 text-center" >
                                                                             <div className="card">
                                                                                    <img src={item.imageURL[0].IMG_URL} className="card-img-top" alt="..." />
                                                                                    <div className="card-body">
                                                                                           <h5 className="card-title">{item.name}</h5>
                                                                                           <Link to={`/product?id=${item._id}`}><button className="btn btn-outline-dark">Buy Now</button></Link>

                                                                                    </div>

                                                                             </div>
                                                                      </div>
                                                               ))}


                                                        </div>
                                                 </div>

                                          </div>


                                          <div className="carousel-item">
                                                 <div className="container-fluid">
                                                        <div className="row">
                                                               {LastItems.map((item) => (
                                                                      <div key={item._id} className="col-6 text-center" >
                                                                             <div className="card">
                                                                                    <img src={item.imageURL[0].IMG_URL} className="card-img-top" alt="..." />
                                                                                    <div className="card-body">
                                                                                           <h5 className="card-title">{item.name}</h5>
                                                                                           <Link to={`/product?id=${item._id}`}><button className="btn btn-outline-dark">Buy Now</button></Link>
                                                                                    </div>

                                                                             </div>
                                                                      </div>
                                                               ))}

                                                        </div>
                                                 </div>

                                          </div>
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
                            <div className="container text-center my-5 py-5 ">
                                   <p className="text-itallic my-5">The attitude of kindness is everyday stuff like a great pair of sneakers. Not frilly. Not fancy. Just plain and comfortable.</p>
                            </div>

                     </div>
                     <div className="container-fluid d-flex align-items-center justify-content-around  " style={{ height: "40vh", marginTop: "16vw" }}>
                            <img src="https://cdn.psdrepo.com/images/2x/adidas-yeezy-vector-free-psd-t3.jpg" alt="" className="img-fluid" />
                     </div>
                     <div className="carousel slide p-5" id="carouselControlsAdidas" data-ride="carousel" style={{ marginTop: "16vw" }}>
                            <div className="carousel-inner">
                                   <div className="carousel-item active">
                                          <div className="container-fluid">
                                                 <div className="row">

                                                        {AdidasSplittedArrays.activeArray.map((item) => (
                                                               <div key={item._id} className="col-6 text-center" >
                                                                      <div className="card">
                                                                             <img src={item.imageURL[0].IMG_URL} className="card-img-top" alt="..." />
                                                                             <div className="card-body">
                                                                                    <h5 className="card-title">{item.name}</h5>
                                                                                    <Link to={`/product?id=${item._id}`}><button className="btn btn-outline-dark">Buy Now</button></Link>

                                                                             </div>

                                                                      </div>
                                                               </div>
                                                        ))}


                                                 </div>
                                          </div>

                                   </div>


                                   <div className="carousel-item">
                                          <div className="container-fluid">
                                                 <div className="row">
                                                        {AdidasSplittedArrays.lastTwoElements.map((item) => (
                                                               <div key={item._id} className="col-6 text-center" >
                                                                      <div className="card">
                                                                             <img src={item.imageURL[0].IMG_URL} className="card-img-top" alt="..." />
                                                                             <div className="card-body">
                                                                                    <h5 className="card-title">{item.name}</h5>
                                                                                    <Link to={`/product?id=${item._id}`}><button className="btn btn-outline-dark">Buy Now</button></Link>
                                                                             </div>

                                                                      </div>
                                                               </div>
                                                        ))}

                                                 </div>
                                          </div>

                                   </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselControlsAdidas" role="button" data-slide="prev">
                                   <FontAwesomeIcon icon="chevron-circle-left" color="black" size="2x" />
                                   <span className="sr-only">Previuos</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselControlsAdidas" role="button" data-slide="next">
                                   <FontAwesomeIcon icon="chevron-circle-right" color="black" size="2x" />
                                   <span className="sr-only">Previuos</span>
                            </a>

                     </div>
                     <div className="container-fluid d-flex align-items-center justify-content-around  " style={{ height: "40vh", marginTop: "16vw" }}>
                            <img src="https://hyperpix.net/wp-content/uploads/2020/05/converse-logo-font-free-download.jpg" alt="..." className="img-fluid" />
                     </div>
                     <div className="carousel slide p-5" id="carouselControlsConverse" data-ride="carousel" style={{ marginTop: "16vw" }}>
                            <div className="carousel-inner">
                                   <div className="carousel-item active">
                                          <div className="container-fluid">
                                                 <div className="row">

                                                        {ConverseSplittedArrays.activeArray.map((item) => (
                                                               <div key={item._id} className="col-6 text-center" >
                                                                      <div className="card">
                                                                             <img src={item.imageURL[0].IMG_URL} className="card-img-top" alt="..." />
                                                                             <div className="card-body">
                                                                                    <h5 className="card-title">{item.name}</h5>
                                                                                    <Link to={`/product?id=${item._id}`}><button className="btn btn-outline-dark">Buy Now</button></Link>

                                                                             </div>

                                                                      </div>
                                                               </div>
                                                        ))}


                                                 </div>
                                          </div>

                                   </div>


                                   <div className="carousel-item">
                                          <div className="container-fluid">
                                                 <div className="row">
                                                        {ConverseSplittedArrays.lastTwoElements.map((item) => (
                                                               <div key={item._id} className="col-6 text-center" >
                                                                      <div className="card">
                                                                             <img src={item.imageURL[0].IMG_URL} className="card-img-top" alt="..." />
                                                                             <div className="card-body">
                                                                                    <h5 className="card-title">{item.name}</h5>
                                                                                    <Link to={`/product?id=${item._id}`}><button className="btn btn-outline-dark">Buy Now</button></Link>
                                                                             </div>

                                                                      </div>
                                                               </div>
                                                        ))}

                                                 </div>
                                          </div>

                                   </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselControlsConverse" role="button" data-slide="prev">
                                   <FontAwesomeIcon icon="chevron-circle-left" color="black" size="2x" />
                                   <span className="sr-only">Previuos</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselControlsConverse" role="button" data-slide="next">
                                   <FontAwesomeIcon icon="chevron-circle-right" color="black" size="2x" />
                                   <span className="sr-only">Previuos</span>
                            </a>

                     </div>
              </div>
       )
}

export default Navbar
