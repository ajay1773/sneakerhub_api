import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Checkout() {
       const [OrderDetails, setOrderDetails] = useState({ address_details: {}, payment_details: {} });
       const [done, setdone] = useState(false);
       const CheckoutDetails = useSelector(state => state.particularProduct.CheckoutDetails)
       const [address, setAddress] = useState(CheckoutDetails.savedAddresses);
       const { register, handleSubmit, reset } = useForm({ mode: "onBlur" });
       const { register: register2, handleSubmit: handleSubmit2 } = useForm({ mode: "onBlur" });
       const handleSave = (value, e) => {
              console.log(value);
              setAddress([...address, value]);
              Axios({
                     url: `https://sneakerhubapi.herokuapp.com/user/addaddress?uid=${localStorage.getItem("user_id")}`,
                     method: "POST",
                     data: value
              })
                     .then(res => {
                            console.log(res.data);
                     })
                     .catch(err => {
                            console.log(err)
                     })
              e.target.reset();
       }
       const handlePlacingOrder = (value, e) => {
              console.log(value);
              e.target.reset();
              setTimeout(() => {
                     setdone(true);
              }, 3000)
       }
       return (
              <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                     <Navbar />
                     {done ? <div className="container-fluid d-flex align-items-center justify-content-center">

                            <div className="done-div">
                                   <h1>Order placed.</h1>
                            </div>

                     </div> :

                            <div className="container " >
                                   <div className="row ">
                                          <div className="col-12" style={{ marginTop: "30vh" }}>
                                                 <div className="progress" style={{ height: "5vh" }}>
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "33%", fontSize: "20px" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                                               Logged in
                                          </div>
                                                 </div>
                                          </div>
                                          <div className="col-12 text-center mt-5 ">
                                                 <h2 className="my-3">Your Items</h2>
                                                 {CheckoutDetails.cart.map(product => (



                                                        <Link to={`/product?id=${product._id}`} ><div className="col-12 card d-flex flex-row justify-content-between align-items-center " key={product._id}>
                                                               <img style={{ maxHeight: "100%", maxWidth: "21%" }} src={product.imageURL[0].IMG_URL} />

                                                               <p>{product.name}</p>
                                                               <div><p>Price: ${product.price}</p>
                                                               </div>

                                                        </div></Link>
                                                 ))}

                                          </div>
                                   </div>

                                   <div className="col-12 card p-3 mt-5">
                                          <button type="button" className="btn btn-outline-dark btn-block dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                 Add new address details
                                          </button>
                                          <div className="dropdown-menu w-75 ">
                                                 <form className="p-5" onSubmit={handleSubmit(handleSave)}>
                                                        <div className="form-group">
                                                               <input ref={register({ required: true })} name="Landmark" className="form-control" type="text" placeholder="Locality"></input>
                                                        </div>
                                                        <div className="form-group">
                                                               <input ref={register({ required: true })} name="Area" className="form-control" type="text" placeholder="Address(Area and street)"></input>
                                                        </div>
                                                        <div className="form-group">
                                                               <input ref={register({ required: true })} name="City" className="form-control" type="text" placeholder="City/Village/Town"></input>
                                                        </div>
                                                        <div className="form-group">
                                                               <input ref={register({ required: true })} name="Pincode" className="form-control" type="text" placeholder="Pin code"></input>
                                                        </div>
                                                        <div className="form-group">
                                                               <input ref={register({ required: true })} name="State" className="form-control" type="text" placeholder="State"></input>
                                                        </div>
                                                        <button type="submit" className="btn btn-outline-success">Save this address and deliver at it</button>
                                                 </form>
                                          </div>
                                   </div>
                                   <div className="card col-12 p-3 my-3">
                                          <h3>Select your address</h3>
                                          <form onSubmit={handleSubmit2(handlePlacingOrder)} >


                                                 {address.length === 0 ? <p>You do not have any saved address.</p> : address.map((item) => (<div className="form-check my-3">
                                                        <input ref={register2} className="form-check-input my-3" type="radio" name="address" value={`${item.Landmark},${item.Area},${item.City},${item.Pincode},${item.State}`} />
                                                        <label> <strong>{CheckoutDetails.name}</strong> {item.Landmark} {item.Area} {item.City} {item.Pincode} {item.State} </label>
                                                 </div>))}
                                                 <div className="dropdown-divider my-5"></div>
                                                 <h3>How would you like to pay ?</h3>
                                                 <div className="form-check my-3">

                                                        <input ref={register2({ required: true })} className="form-check-input my-3" type="radio" name="payment-method" id="exampleRadios1" value="paypal" />
                                                        <label> <FontAwesomeIcon icon={["fab", "paypal"]} size="2x" color="black" /> <strong>PayPal</strong> </label>

                                                 </div>
                                                 <div className="form-check my-3">

                                                        <input ref={register2({ required: true })} className="form-check-input my-3" type="radio" name="payment-method" value="COD" />
                                                        <label>  <strong>Cash on delivery.</strong> </label>

                                                 </div>
                                                 <div className="form-check my-3">

                                                        <input ref={register2({ required: true })} className="form-check-input my-3" type="radio" name="payment-method" value="credit-card" />
                                                        <label>  <strong>Credit Card</strong> </label>

                                                 </div>
                                                 <div className="form-check my-3">

                                                        <input ref={register2({ required: true })} className="form-check-input my-3" type="radio" name="payment-method" value="debit-card" />
                                                        <label>  <strong>Debit Card</strong> </label>

                                                 </div>

                                                 <button className="btn btn-outline-primary w-100 my-5 rounded-pill" type="submit">Place Order</button>

                                          </form>
                                   </div>

                            </div>

                     }

              </div>
       )
}

export default Checkout
