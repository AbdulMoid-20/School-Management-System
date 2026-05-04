// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import studentReducer from "./slices/studentSlice";
// import teacherReducer from "./slices/teacherSlice";
import teacherReducer from "./slices/teacherSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        students: studentReducer,
        teachers: teacherReducer,
    },
});