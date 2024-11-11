import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
// import profileReducer from "../Slice/profileSlice";
// import cartReducer from "../Slice/cartSlice";
// import CourseReducer from "../Slice/courseSlice"

const rootReducer = combineReducers({
    auth:authReducer,
});


export default rootReducer;