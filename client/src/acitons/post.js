import * as api from "../api/index";
import * as types from "./types";

export const fetchPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: types.FETCH_POSTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSinglePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSinglePost(id);
    dispatch({
      type: types.FETCH_SINGLE_POST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({
      type: types.CREATE_POST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);
    dispatch({
      type: types.DELETE_POST,
      payload: data._id //silinen postun id sini döndürüyoruz
    });
  } catch (error) {
    console.log(error);
  }
}

