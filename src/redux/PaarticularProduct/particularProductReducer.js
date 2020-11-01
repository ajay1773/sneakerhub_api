import { ADD_TO_CART, FETCHING_DONE, FETCHING_FAILED, FETCH_PRODUCT, REMOVE_PRODUCT, SAVE_PRODUCT_TO_SHOW, SETTING_CHECKOUT_DETAILS } from "./ppActionTypes";
const initialState = {
       loading: false,
       cartFromServer: [],
       error: "",
       cart: JSON.parse(localStorage.getItem("cart")),
       productForDisplay: {},
       imageArray: [],
       CheckoutDetails: JSON.parse(localStorage.getItem("Details"))
}
const productReducer = (state = initialState, action) => {

       switch (action.type) {
              case FETCH_PRODUCT:
                     return {
                            ...state, loading: true
                     }
              case FETCHING_DONE:

                     return {
                            ...state, loading: false,
                            cartFromServer: action.payload.cart,
                            CheckoutDetails: action.payload
                     }

              case FETCHING_FAILED:
                     return {
                            ...state, loading: false,
                            cartFromServer: [],
                            error: action.payload
                     }

              case ADD_TO_CART:
                     return {
                            ...state,
                            cart: [...state.cart, action.payload],
                     }
              case REMOVE_PRODUCT:
                     return {
                            ...state,
                            cartFromServer: [...state.cartFromServer.filter((e) => { return e._id !== action.payload })]
                     }
              case SAVE_PRODUCT_TO_SHOW:
                     return {
                            ...state,
                            productForDisplay: action.payload,
                            imageArray: action.payload.imageURL
                     }
              default:
                     return state
       }

}

export default productReducer;