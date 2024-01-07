import axios from "axios"
import { GET_HOME_SUCCESS, FAILURE, REQUEST, GET_PRODUCT_SUCCESS, UPDATE_SUCCESS, GET_SINGLE_PRODUCT_SUCCESS } from "./actionTypes"

const url='https://weak-gold-gazelle-suit.cyclic.app'
// const url='http://localhost:8080'

export const getHome = (obj) => (dispatch) => {
    dispatch({ type: REQUEST })

    axios.get(url, obj)
        .then((res) => {
            dispatch({ type: GET_HOME_SUCCESS, payload: res.data })
        }).catch(() => {
            dispatch({ type: FAILURE })
    })
}

export const updateHome= (obj,id) => (dispatch) => {
    dispatch({ type: REQUEST })

    axios.patch(`${url}/${id}`, obj)
        .then(() => {
            alert('liked')
            dispatch({ type: UPDATE_SUCCESS })
        }).catch(() => {
            dispatch({ type: FAILURE })
    })
}

export const getProduct = (obj) => (dispatch) => {
    dispatch({ type: REQUEST })

    axios.get(`${url}/products`, obj)
        .then((res) => {
            dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data[0] })
        }).catch(() => {
            dispatch({ type: FAILURE })
    })
}

export const getSingleProduct = (id) => (dispatch) => {
    dispatch({ type: REQUEST })

    axios.get(`${url}/products/${id}`)
        .then((res) => {
            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res.data })
        }).catch(() => {
            dispatch({ type: FAILURE })
    })
}