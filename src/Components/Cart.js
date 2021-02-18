import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchTheProduct, removeTheProduct } from "../redux/PaarticularProduct/ppActions";
import Navbar from './Navbar';

function Cart({ history }) {
       const username = useSelector(state => state.particularProduct.cartFromServer)
       const dispatch = useDispatch();
       if (localStorage.getItem("sneaker_token") === null) {
              history.push('/user/login?arg=L_F')
       }
       var TotalAmount = 0;
       for (let i in username) {
              TotalAmount += parseInt(username[i].price);

       }
       useEffect(() => {
              dispatch(fetchTheProduct());
              //console.log(localStorage.getItem("cart"));
       }, []);
       const removeProduct = (id) => {
              dispatch(removeTheProduct(id))
       }
       return (
              <div className="container-fluid" style={{ minHeight: "100vh" }}>
                     <Navbar />
                     <div className="container" style={{ marginTop: "18vh" }}>
                            {username.length === 0 ? <h2>Your cart is empty right now. Go and buy some new sneakers for yourself <Link to="/brand?bname=all">right here</Link></h2> :
                                   <div>
                                          <div className="row mb-5">
                                                 <div className="col text-center" ><h2>Your Cart</h2></div>
                                                 <div className="card col-3 text-center">
                                                        <p>Total Items</p>
                                                        <p>{username.length}</p>


                                                 </div>
                                          </div>
                                          <div className="row">
                                                 {username.map((product) => (


                                                        <div className="col-12 card d-flex flex-row justify-content-between align-items-center " key={product._id}>
                                                               <img style={{ maxHeight: "100%", maxWidth: "21%" }} src={product.imageURL[0].IMG_URL} />

                                                               <p>{product.name}</p>
                                                               <div><p>Price: ${product.price}</p>
                                                                      <button className="btn btn-outline-danger" onClick={() => { removeProduct(product._id) }}>Remove</button>
                                                               </div>

                                                        </div>


                                                 ))}
                                                 <div className="col-12 card d-flex flex-row justify-content-between align-items-center p-5">
                                                        <div></div>
                                                        <p>Total payable amount: ${TotalAmount} </p>
                                                        <Link to="/checkout"><button className="btn btn-success">Place Order</button></Link>

                                                 </div>
                                          </div>
                                   </div>


                            }



                     </div>
              </div>
       )
}

export default Cart
