import React, { useEffect, useState } from 'react'
import './CSS/Home.css';
import mag from "./Images/airmag.jpg"
import { useForm } from "react-hook-form";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from "../redux/Users/UserActions";
function UserLogin({ history, location }) {
       const LoginSuccessFlag = useSelector(state => state.userDetails.logindetails.success);
       const [LoginFirstFlag, setLoginFirstFlag] = useState("");
       const dispatch = useDispatch()
       const { register, handleSubmit, reset, errors } = useForm({ mode: "onBlur" });
       const handleSubmission = (values, e) => {
              const credentials = { email: values.email, password: values.password };
              dispatch(LoginUser(credentials, history));

              e.target.reset();
       }
       useEffect(() => {
              const arg = location.search.split("=")[1];
              setLoginFirstFlag(arg);
              console.log(arg)
       }, []);
       return (
              <div style={{ height: "100vh" }} className="container-fluid d-flex flex-column align-items-center justify-content-center">
                     <Navbar />
                     <div className="row">
                            <div className="col-lg-12">
                                   {LoginFirstFlag !== undefined && <p style={{ color: "red" }}>Please login first.</p>}
                                   {
                                          LoginSuccessFlag === false ? <p style={{ color: "red" }}>User does not exist.</p> : null
                                   }
                            </div>
                     </div>
                     <div className="row form-container"  >
                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                                   <img src={mag} alt="..." className="img-fluid" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-div" style={{ height: "100%" }}>
                                   <form onSubmit={handleSubmit(handleSubmission)}>
                                          <div className="d-flex flex-column justify-content-center" >
                                                 <h3>Log In</h3>
                                                 <div className="form-group">
                                                        <input ref={register({ required: "Must provide email" })} name="email" type="email" placeholder="Email..." className="form-control mt-4"></input>
                                                 </div>
                                                 {errors.email && <p style={{ color: "red", fontSize: "15px" }}>{errors.email.message}</p>}
                                                 <div className="form-group">
                                                        <input ref={register({ required: "Must provide a password" })} name="password" placeholder="Password..." className="form-control my-4"></input>
                                                 </div>
                                                 {errors.password && <p style={{ color: "red", fontSize: "15px" }}>{errors.password.message}</p>}

                                                 <button type="submit" className="btn btn-block">Login</button>
                                                 <p className="mt-2" style={{ fontSize: "20px" }}>New here then <Link to="/user/signin">Sign In</Link> here</p>
                                          </div>
                                   </form>
                            </div>

                     </div>


              </div>
       )
}

export default UserLogin
