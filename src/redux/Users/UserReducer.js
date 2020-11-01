import { SIGNIN_USER, LOGIN_USER, FETCH_USER_PROFILE, SET_THE_CART } from "./userActionTypes";
const initialState = {
       userdetails: {},
       logindetails: {},
       UserProfile: {},
       Usercart: []
}
export const UserReducer = (state = initialState, action) => {

       switch (action.type) {
              case SIGNIN_USER:

                     return {
                            ...state,
                            userdetails: action.payload
                     }
              case LOGIN_USER:

                     return {
                            ...state,
                            logindetails: action.payload,

                     }
              case FETCH_USER_PROFILE: {
                     return {
                            ...state,
                            UserProfile: action.payload
                     }
              }
              case SET_THE_CART: {
                     return {
                            ...state,
                            Usercart: action.payload
                     }
              }

              default:
                     return state
       }

}