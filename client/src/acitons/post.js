import * as types from "./types";
import * as api from "../api/index";

export const fetchPosts =()=>{
    return{
        //aciton creater lar action objeleri döndürürler 
        type:types.FETCH_POSTS,
        payload:[], //dk 50 de kaldık
    };
};

export const createPost = ()=>{
    return{
        type:type.CREATE_POST,
        payload:post
    }
}