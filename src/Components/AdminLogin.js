import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useForm } from 'react-hook-form'
import Axios from 'axios';
function AdminLogin({ history }) {
       const [LFFlag, setLFFlag] = useState(false)
       const [credentialsFlag, setcredentialsFlag] = useState(false);
       useEffect(() => {
              if (history.location.search) {
                     console.log(history.location.search)
                     setLFFlag(true)
              } else {
                     console.log("dahadjv")
              }


       }, [])
       const { handleSubmit, register } = useForm({ mode: "onBlur" });
       const handlesave = (value, e) => {
              console.log(value);
              Axios({
                     method: "POST",
                     data: value,
                     url: "https://sneakerhubapi.herokuapp.com/user/admin"
              }).then(res => {
                     console.log(res.data);
                     if (res.data.success) {
                            localStorage.setItem('admin_token', res.data.token);
                            history.push('/addproduct');
                     }
                     else {
                            setcredentialsFlag(true)
                     }


              }).catch(err => { console.log(err) })
              e.target.reset();
       }
       return (
              <div className="container-fluid d-flex flex-column  align-items-center justify-content-center">
                     <Navbar />
                     <div className=" admin-form-container ">
                            {LFFlag && <p className="Login-first-flag">Please login first.</p>}

                            <div className="admin-form">
                                   <h2>Admin Login</h2>
                                   {credentialsFlag && <p style={{ color: "red" }}>Wrong Credentials</p>}
                                   <form onSubmit={handleSubmit(handlesave)}>
                                          <div className="form-group mt-5">
                                                 <input className="form-control" type="email" ref={register({ required: true })} name="email" placeholder="Enter admin email...." />
                                          </div>
                                          <div className="form-group my-3">
                                                 <input className="form-control" type="password" ref={register({ required: true })} name="password" placeholder="Enter admin password...." />
                                          </div>
                                          <button className="btn btn-outline-light px-5 rounded-pill" type="submit">Enter</button>
                                   </form>
                            </div>
                     </div>
              </div>
       )
}

export default AdminLogin
