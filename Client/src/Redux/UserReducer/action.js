import axios from "axios";
import {
  GET_HOME_SUCCESS,
  FAILURE,
  REQUEST,
  GET_PRODUCT_SUCCESS,
  UPDATE_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
  AUTH_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionTypes";

const url = "https://weak-gold-gazelle-suit.cyclic.app";
// const url='http://localhost:8080'

export const getHome = (obj) => (dispatch) => {
  dispatch({ type: REQUEST });

  axios
    .get(url, obj)
    .then((res) => {
      dispatch({ type: GET_HOME_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: FAILURE });
    });
};

export const updateHome = (obj, id) => (dispatch) => {
  dispatch({ type: REQUEST });

  axios
    .patch(`${url}/${id}`, obj)
    .then(() => {
      dispatch({ type: UPDATE_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: UPDATE_SUCCESS });
    });
};

export const addToCart = (obj, token, createAlert) => (dispatch) => {
  dispatch({ type: REQUEST });

  axios
    .post(`${url}/cart`, obj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      createAlert("success", res.data.msg);
      dispatch({ type: UPDATE_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_SUCCESS });
      createAlert("error", err.response.data.msg);
    });
};

export const authenticate =
  (obj, route, createAlert, navigate, location) => (dispatch) => {
    dispatch({ type: REQUEST });

    axios
      .post(`${url}/users/${route}`, { ...obj, admin: false })
      .then((res) => {
        dispatch({
          type: AUTH_SUCCESS,
          payload: { token: res.data?.token, user: res.data?.user },
        });
        createAlert("success", res.data.msg);
        navigate(location.state || "/", { replace: true });
      })
      .catch((err) => {
        createAlert("error", err.response.data.msg);
      });
  };

export const getProduct = (obj) => (dispatch) => {
  dispatch({ type: REQUEST });

  axios
    .get(`${url}/products`, obj)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data[0] });
    })
    .catch(() => {
      dispatch({ type: FAILURE });
    });
};

export const getSingleProduct = (id) => (dispatch) => {
  dispatch({ type: REQUEST });

  axios
    .get(`${url}/products/${id}`)
    .then((res) => {
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: FAILURE });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};
