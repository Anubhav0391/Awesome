import {
  FAILURE,
  REQUEST,
  GET_HOME_SUCCESS,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  home: [],
  products: [],
  cart: [],
  token: "",
  user: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return { ...state, loading: true };
    case FAILURE:
      return { ...state, loading: false, error: true };
    case GET_HOME_SUCCESS:
      return { ...state, loading: false, home: payload };
    case GET_PRODUCT_SUCCESS:
      return { ...state, loading: false, products: payload };
    default:
      return state;
  }
};
