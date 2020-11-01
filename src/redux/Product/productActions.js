import Axios from "axios";
import { FETCHING_SUCCESSFUL, FETCHING_UNSUCCESSFUL, FETCH_PRODUCTS, ADD_PRODUCT } from "./actionTypes";

export const fetchProduts = () => {
       return {
              type: FETCH_PRODUCTS
       }
}
export const fetchProdutsSuccess = (products) => {
       return {
              type: FETCHING_SUCCESSFUL,
              payload: products
       }
}
export const fetchProdutsUnsuccess = (error) => {
       return {
              type: FETCHING_UNSUCCESSFUL,
              payload: error
       }
}

export const Addproduct = (message) => {
       return {
              type: ADD_PRODUCT,
              payload: message
       }
}

export const fetchData = () => {
       return (dispatch) => {
              dispatch(fetchProduts)
              Axios.get("/products")
                     .then(response => {
                            console.log(response.data);
                            const products = response.data;
                            dispatch(fetchProdutsSuccess(products))

                     })
                     .catch(err => {
                            const error = err.message;
                            dispatch(fetchProdutsUnsuccess(error))
                            console.log(error)
                     });

       }
}

export const setProducts = (data) => {
       return (dispatch) => {
              dispatch(fetchProdutsSuccess(data));
       }
}

export const AddTheProduct = (productDetails) => {
       return (dispatch) => {
              Axios({
                     method: "POST",
                     url: "/addproduct",
                     data: productDetails
              })
                     .then(response => {

                            console.log(response.data);


                     }
                     ).catch(error => {
                            console.log(error)
                     })
       }
}
