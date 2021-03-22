import {combineReducers } from "redux";
import * as postReducer from "./post";

const rootReducer=combineReducers({
    posts:postReducer,
})

export default rootReducer;