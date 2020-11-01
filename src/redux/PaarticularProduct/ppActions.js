import Axios from "axios";
import { FETCHING_DONE, FETCHING_FAILED, FETCH_PRODUCT, ADD_TO_CART, REMOVE_PRODUCT, SAVE_PRODUCT_TO_SHOW } from "./ppActionTypes";

export const fetchStart = () => {
       return {
              type: FETCH_PRODUCT
       }
}

export const fetchSucced = (product) => {
       return {
              type: FETCHING_DONE,
              payload: product,

       }
}

const saveProduct = (product) => {
       return {
              type: SAVE_PRODUCT_TO_SHOW,
              payload: product,
              images: product
       }
}
export const fetchFailed = (error) => {

       return {
              type: FETCHING_FAILED,
              payload: error
       }
}

export const addToCart = (product) => {
       return {
              type: ADD_TO_CART,
              payload: product
       }
}

export const removeProduct = (id) => {

       return {
              type: REMOVE_PRODUCT,
              payload: id
       }
}

export const addToTheCart = (id, setCartFlag) => {
       return (dispatch) => {
              const UID = localStorage.getItem("user_id");
              Axios.get(`/product?id=${id}&userID=${UID}`)
                     .then(res => {
                            console.log(res.data);
                            setCartFlag(true);
                            // const storedcart = JSON.parse(localStorage.getItem("cart"));
                            // const newarray = [...storedcart, JSON.stringify(res.data)]
                            // console.log(storedcart, typeof storedcart, newarray);
                            // dispatch(addToCart(res.data));
                            //const newCart = storedcart.push(JSON.stringify(res.data));
                            //localStorage.setItem("cart", [newarray]);

                     })
                     .catch(err => {
                            console.log(err)
                     })
       }
}

export const removeTheProduct = (id) => {
       return (dispatch) => {
              const UID = localStorage.getItem("user_id");
              Axios.get(`/removefromcart?id=${id}&userID=${UID}`)
                     .then(res => {
                            console.log(res.data);



                     })
                     .catch(err => { console.log(err) })
              dispatch(removeProduct(id))
       }
}
export const fetchTheProduct = (id, size) => {
       return (dispatch) => {
              dispatch(fetchStart)
              const UID = localStorage.getItem("user_id");
              console.log(UID)
              Axios.get(`/getcart?userId=${UID}`)
                     .then(response => {
                            console.log(response.data)
                            dispatch(fetchSucced(response.data));
                            localStorage.setItem("Details", JSON.stringify(response.data));

                     })
                     .catch(err => {
                            const error = err;
                            dispatch(fetchFailed(error))
                            console.log(error)
                     });
       }
}
export const saveTheProduct = (product) => {
       return (dispatch) => {
              dispatch(saveProduct(product));
       }
}

export const fetchAndSaveTheProduct = (id) => {
       return (dispatch) => {
              Axios.get(`/product?id=${id}`)
                     .then(res => {
                            // console.log(res.data.imageURL);
                            dispatch(saveProduct(res.data))
                     })
                     .catch(err => {
                            console.log(err)
                     })
       }
}