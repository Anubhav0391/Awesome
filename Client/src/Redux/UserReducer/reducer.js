import { FAILURE, REQUEST, GET_HOME_SUCCESS } from "./actionTypes"

const initialState={
    loading:false,
    error:false,
    home:[],
    products:[],
    cart:[]
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case REQUEST:
            return {...state,loading:true}
        case FAILURE:
            return {...state,loading:false,error:true}     
        case GET_HOME_SUCCESS:
            return {...state,loading:false,home:payload}
        default:
            return state;
    }
}