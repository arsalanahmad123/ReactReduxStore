import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/cartSlice"; // Importing the cartReducer from cartSlice.js

export const store = configureStore({
    reducer: {
        cart: cartReducer, // Using cartReducer here, not cartSlice directly
    },
});
