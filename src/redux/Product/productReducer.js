import { FETCHING_SUCCESSFUL, FETCH_PRODUCTS, FETCHING_UNSUCCESSFUL, ADD_PRODUCT } from "./actionTypes";

const initialState = {
       isLoading: false,
       products: [],
       error: "",
       message: ""
}

const productReducer = (state = initialState, action) => {
       switch (action.type) {
              case FETCH_PRODUCTS:
                     return { ...state, isLoading: true }
              case FETCHING_SUCCESSFUL:
                     return { ...state, isLoading: false, products: action.payload, error: "" }
              case FETCHING_UNSUCCESSFUL:
                     return { ...state, isLoading: false, products: [], error: action.payload }
              case ADD_PRODUCT:
                     return { ...state, message: action.payload }
              default:
                     return state
       }

}
export default productReducer;
