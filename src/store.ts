import { configureStore } from "@reduxjs/toolkit";
import userImportReducer from "./features/user-import/userImportSlice";

const store = configureStore({
    reducer: {
        userImport: userImportReducer
    }
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];