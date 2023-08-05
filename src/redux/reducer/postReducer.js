import { POST_FETCH, POST_FETCH_ERROR, POST_FETCH_SUCCESS } from "../actions/actionsTypes"


let initialValue={
    loading:false,
    data:[],
    message:null
}

export const postReducer=(state=initialValue, actions)=>{
    switch(actions.type){
        case POST_FETCH:
            return(
                {
                    ...state, loading:true
                }
            )
        case POST_FETCH_SUCCESS:
            return (
                {
                    ...state, loading:false, data:actions.payload, message:null
                }
            )
        case POST_FETCH_ERROR:
            return (
                {
                    ...state, loading:false, data:[], message:actions.payload
                }
            )    
        default:
            return initialValue                    
    }
}