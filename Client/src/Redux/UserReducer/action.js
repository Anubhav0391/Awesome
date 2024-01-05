import axios from "axios"
import { GET_HOME_SUCCESS, FAILURE, REQUEST } from "./actionTypes"

// const url='https://weak-gold-gazelle-suit.cyclic.app'
const url='http://localhost:8080'

export const getHome = (obj) => (dispatch) => {
    dispatch({ type: REQUEST })

    axios.get(url, obj)
        .then((res) => {
            dispatch({ type: GET_HOME_SUCCESS, payload: res.data })
        }).catch(() => {
            dispatch({ type: FAILURE })
    })
}