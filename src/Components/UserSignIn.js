import React from 'react';
import {Link} from 'react-router-dom';
import mag from "./Images/airmag.jpg";
import { useForm } from "react-hook-form";
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { SigninUser } from "../redux/Users/UserActions";
function UserSignIn({ history }) {
       const state = useSelector(state => state.userDetails.userdetails)
       const dispatch = useDispatch()
       const { register, handleSubmit, reset, errors } = useForm({ mode: "onBlur" });
       const handleSubmission = (values, e) => {
              const credentials = { name: values.name, email: values.email, password: values.password };
              console.log(credentials)
              dispatch(SigninUser(credentials, history));
              e.target.reset()
       }
       return (
              <div style={{ height: "100vh" }} className="container-fluid d-flex align-items-center justify-content-center">
                     <Navbar />
                     <div className="row form-container"  >
                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                                   <img src={mag} alt="..." className="img-fluid" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-div">
                                   <form className="d-flex flex-column justify-content-around" onSubmit={handleSubmit(handleSubmission)}>
                                          <h3>Sign In</h3>
                                          <div className="form-group">
                                                 <input ref={register({ required: "Must provide name" })} name="name" type="text" placeholder="Name..." className="form-control mb-0"></input>
                                                 {errors.name && <p style={{ color: "red", fontSize: "15px" }}>{errors.name.message}</p>}
                                          </div>

                                          <div className="form-group">
                                                 <input ref={register({ required: "Must provide email" })} name="email" type="email" placeholder="Email..." className="form-control mb-0"></input>
                                                 {errors.email && <p style={{ color: "red", fontSize: "15px" }}>{errors.email.message}</p>}
                                          </div>

                                          <div className="form-group">
                                                 <input ref={register({ required: "Must provide a password" })} name="password" placeholder="Password..." className="form-control mb-0"></input>
                                                 {errors.password && <p style={{ color: "red", fontSize: "15px" }}>{errors.password.message}</p>}
                                          </div>
                                          <button type="submit" className="btn btn-block mt-4">Register</button>
                                   </form>
                                   <p className="mt-2" style={{ fontSize: "20px" }}>Already registered? <Link to="/user/login">Log In</Link> here</p>
                            </div>

                            {state.msg &&

                                   <div className="col-12 mt-4">

                                          <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                 <strong>User already exists</strong>
                                                 <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                 </button>
                                          </div>

                                   </div>

                            }
                     </div>


              </div>
       )
}

export default UserSignIn
