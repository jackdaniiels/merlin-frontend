import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import counterReducer from '../slices/couterSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        counter: counterReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
