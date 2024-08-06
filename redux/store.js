"use client";

import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartslice";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
// import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, cartReducer)
export const store = configureStore({
    middleware: (buildGetDefaultMiddleware) => buildGetDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        shoppingCart: persistedReducer
    }
})
export let persistor = persistStore(store)
