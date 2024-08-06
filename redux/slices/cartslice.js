
"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { view, qty } = action.payload;
            state.cart = [...state.cart, { ...view, qty: qty }]
            console.log(state.cart);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(p => p.id !== action.payload)
        },
        increment: (state, action) => {
            state.cart = state.cart.map(p => p.id === action.payload ? { ...p, qty: p.qty + 1 } : p)

        },
        decrement: (state, action) => {
            state.cart = state.cart.map(p => p.id === action.payload ? { ...p, qty: p.qty - 1 } : p)
        },
        clearCart: (state) => {
            state.cart.length = 0
        }
    }
})
export const { addToCart, removeFromCart, increment, decrement ,clearCart} = cartSlice.actions
export const cartReducer = cartSlice.reducer