import Axios from "axios";
//import { response } from "express";
import { SIGNIN_USER, LOGIN_USER, FETCH_USER_PROFILE, SET_THE_CART } from "./userActionTypes";

export const siginuser = (userDetails) => {
       return {
              type: SIGNIN_USER,
              payload: userDetails
       }

}
export const setcart = (cart) => {
       return {
              type: SET_THE_CART,
              payload: cart
       }
}
export const loginuser = (userDetails) => {
       return {
              type: LOGIN_USER,
              payload: userDetails
       }

}

export const fetchUserProfile = (UserProfile) => {
       return {
              type: FETCH_USER_PROFILE,
              payload: UserProfile
       }
}

export const SigninUser = (credentials, history) => {
       return (dispatch) => {
              Axios({
                     method: "POST",
                     url: "/user/signin",
                     data: credentials
              })
                     .then(response => {
                            dispatch(siginuser(response.data))
                            console.log(response.data);
                            localStorage.setItem("user_id", response.data.user._id);
                            history.push(`/user/login?arg=L_F`);
                            //response.data.token && history.push(`/user/profile/${response.data.name}`)

                     }
                     ).catch(error => {
                            console.log(error)
                     })

       }
}

export const LoginUser = (credentials, history) => {
       return (dispatch) => {
              Axios({
                     method: "POST",
                     url: "/user/login",
                     data: credentials
              })
                     .then(response => {
                            dispatch(loginuser(response.data))
                            console.log(response.data);
                            if (response.data.success) {
                                   localStorage.setItem("sneaker_token", response.data.token);
                                   localStorage.setItem("user_id", response.data.user._id);
                                   localStorage.setItem("cart", JSON.stringify(response.data.user.cart));
                                   dispatch(setcart(response.data.user.cart));
                                   history.push(`/user/profile`);

                            } else {
                                   console.log("user not found");
                            }


                     }
                     ).catch(error => {
                            console.log(error)
                     })

       }
}

export const FetchProfile = () => {

       return (dispatch) => {
              //console.log("working again")
              const Token = localStorage.getItem("sneaker_token");
              //console.log(Token);
              Axios.get(`/user/profile?id=${localStorage.getItem("user_id")}`, { headers: { "Authorization": `Bearer ${Token}` } })
                     .then(res => {

                            console.log(res)
                            dispatch(fetchUserProfile(res.data));
                     })
                     .catch(err => { console.log(err) })
       }

}