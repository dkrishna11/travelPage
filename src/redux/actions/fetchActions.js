import { POST_FETCH, POST_FETCH_ERROR, POST_FETCH_SUCCESS } from "./actionsTypes";

export const postFetch=()=>{
    return {
        type:POST_FETCH
    }
}

export const postFetchSuccess =(data)=>{
    return {
        type:POST_FETCH_SUCCESS,
        payload:data
    }
}

export const postFetchError =(error)=>{
    return{
        type:POST_FETCH_ERROR,
        payload:error
    }
}

export function fetchData(){
    return async function(dispatch){
        try{
            dispatch(postFetch())
            const response=await  fetch("https://jsonplaceholder.typicode.com/posts");
            const results=await response.json();
            dispatch(postFetchSuccess(results))
        }
       catch(error){
            dispatch(postFetchError(error.message))
        }
    }
};