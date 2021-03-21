import * as types from "./types";

export const fetchPosts =()=>{
    return{
        //aciton creater lar action objeleri döndürürler 
        type:types.FETCH_POSTS,
        payload:[] //dk 50 de kaldık
    }
}