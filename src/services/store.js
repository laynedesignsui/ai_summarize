//? this code configures a Redux store by including the reducer and middleware associated with the articleApi for managing state related to API requests

//! REDUX IMPORT
import { configureStore } from "@reduxjs/toolkit";
//! COMPONENT IMPORT
import { articleApi } from "./article";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})