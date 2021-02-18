import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import { FetchProfile } from "../redux/Users/UserActions"
function UserProfile() {
       const UserProfileDetails = useSelector(state => state.userDetails.UserProfile);
       const UserDetails = UserProfileDetails.user;
       const dispatch = useDispatch()
       useEffect(() => {

              dispatch(FetchProfile());

       }, [])
       return (
              <div>
                     <Navbar />

                     {UserProfileDetails.success ?
                            <div className="container" style={{ marginTop: "20vh", height: "100vh" }}>
                                   <div className="row d-flex align-items-center justify-content-center">
                                          <h2 className="my-5">Welcome {UserProfileDetails.user.name} </h2>
                                   </div>

                                   <div className="card row p-5">

                                          {UserDetails.cart.length === 0 ? <h2>Your cart is empty right now. Go and buy some new sneakers for yourself <a href="/brand?bname=all">here</a></h2> :
                                                 <div className="w-100">
                                                        <div className="col-12"><p>Your current cart</p></div>
                                                        {UserDetails.cart.map(product => (


                                                               <div className="col-12 card d-flex flex-row justify-content-between align-items-center " key={product._id}>
                                                                      <img style={{ maxHeight: "100%", maxWidth: "21%" }} src={product.imageURL[0].IMG_URL} />

                                                                      <p>{product.name}</p>
                                                                      <div>
                                                                             <strong><p>Price</p></strong>
                                                                             <p>$ {product.price}</p>
                                                                      </div>



                                                               </div>
                                                        ))
                                                        }
                                                 </div>

                                          }


                                   </div>
                            </div>

                            : <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                                   <div>
                                          <h2>It seems that you are not loged in <a href="/user/login">login here</a></h2>
                                   </div>

                            </div>}


              </div>
       )
}

export default UserProfile
