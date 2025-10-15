import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import counterReducer from '../slices/couterSlice';
import filterReducer from '../slices/filterSlice';
import historicReducer from '../slices/historicSlice';
import projectionReducer from '../slices/projectionSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        counter: counterReducer,
        filters: filterReducer,
        historic: historicReducer,
        projection: projectionReducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
