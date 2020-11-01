import React from 'react'
import { useState, useEffect } from 'react'
import Axios from "axios";
import { useForm, useFieldArray } from "react-hook-form";
function Test() {
       const { register, control, handleSubmit, reset, trigger, setError } = useForm({
              // defaultValues: {}; you can populate the fields by this attribute 
       });
       const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
              control,
              name: "test"
       });
       return (
              <form onSubmit={handleSubmit(data => console.log(data))}>
                     <ul>
                            {fields.map((item, index) => (
                                   <li key={item.id}>
                                          <input
                                                 name={`test[${index}].firstName`}
                                                 ref={register()}
                                                 defaultValue={item.firstName} // make sure to set up defaultValue
                                          />



                                          <button type="button" onClick={() => remove(index)}>Delete</button>
                                   </li>
                            ))}
                     </ul>
                     <button
                            type="button"
                            onClick={() => append({ firstName: "appendBill", lastName: "appendLuo" })}
                     >
                            append
      </button>
                     <button
                            type="button"
                            onClick={() => prepend({ firstName: "prependFirstName", lastName: "prependLastName" })}
                     >
                            prepend
      </button>
                     <input type="submit" />
              </form>
       )
}

export default Test
