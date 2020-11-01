import React, { useEffect } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { AddTheProduct } from "../redux/Product/productActions";
function ProductForm({ history }) {
       const dispatch = useDispatch();

       const { register, handleSubmit, reset, control, errors } = useForm({ mode: "onBlur" });
       const { fields, append, prepend, remove } = useFieldArray({
              control,
              name: "Images"
       })
       const handleSubmission = (values, e) => {
              const credentials = { name: values.name, price: values.price, desc: values.desc, brand: values.brand, URL: values.URL };
              console.log(credentials);
              dispatch(AddTheProduct(credentials));
              e.target.reset();
       }
       useEffect(() => {

              if (localStorage.getItem("admin_token") === null) {
                     history.push('/adminlogin?arg=L_F');

              }

       }, [])
       return (
              <div style={{ height: "100vh" }} className="container-fluid d-flex align-items-center justify-content-center">
                     <Navbar />
                     <div className="row container mt-7">
                            <div className="col-sm-12 col-lg-12 col-md-12">
                                   <form className="d-flex flex-column justify-content-around" onSubmit={handleSubmit(handleSubmission)}>
                                          <h3>Add new product</h3>
                                          <div className="form-group">
                                                 <input ref={register({ required: "Must provide name" })} name="name" type="text" placeholder="Name..." className="form-control mb-0"></input>
                                                 {errors.name && <p style={{ color: "red", fontSize: "15px" }}>{errors.name.message}</p>}
                                          </div>

                                          <div className="form-group">
                                                 <input ref={register({ required: "Must provide price" })} name="price" type="string" placeholder="Price..." className="form-control mb-0"></input>
                                                 {errors.price && <p style={{ color: "red", fontSize: "15px" }}>{errors.price.message}</p>}
                                          </div>

                                          <div className="form-group">
                                                 <input ref={register({ required: "Must provide a desc" })} name="desc" type="text" placeholder="Description..." className="form-control mb-0"></input>
                                                 {errors.desc && <p style={{ color: "red", fontSize: "15px" }}>{errors.desc.message}</p>}
                                          </div>
                                          <div className="form-group">
                                                 <input ref={register} name="brand" type="text" placeholder="Brand..." className="form-control mb-0"></input>
                                          </div>
                                          <label>Image URL's</label>
                                          <ul className="list-group">
                                                 {fields.map((item, index) => (
                                                        <li key={item.id} className="list-group-item">
                                                               <input
                                                                      name={`URL[${index}].IMG_URL`}
                                                                      ref={register()}
                                                               // make sure to set up defaultValue
                                                               />



                                                               <button type="button" className="btn btn-success" onClick={() => remove(index)}>Delete</button>
                                                        </li>
                                                 ))}
                                          </ul>
                                          <button
                                                 type="button" className="btn btn-outline-dark"
                                                 onClick={() => append({ firstName: "appendBill", lastName: "appendLuo" })}
                                          >
                                                 ADD
      </button>
                                          <button
                                                 type="button" className="btn btn-outline-dark"
                                                 onClick={() => prepend({ firstName: "prependFirstName", lastName: "prependLastName" })}
                                          >
                                                 ADD IN START
      </button>
                                          <button type="submit" className="btn btn-block mt-4">Submit</button>
                                   </form>
                            </div>

                     </div>


              </div>
       )
}

export default ProductForm
