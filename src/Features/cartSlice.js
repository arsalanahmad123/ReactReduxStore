import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        finalPrice: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const itemPrice = parseFloat(newItem.price);

            if (isNaN(itemPrice)) {
                console.error("Item price is not a number.");
                return state; // Return the current state if price is not a number
            }

            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            )

            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: itemPrice,
                    name: newItem.name
                });
                state.finalPrice += itemPrice;
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += itemPrice;
                state.finalPrice += itemPrice;
            }

        },
        updateQuantity(state, action) {
            const { itemId, changeAmount } = action.payload;
            const selectedItem = state.items.find((item) => item.id === itemId);

            if (selectedItem) {
                selectedItem.quantity += changeAmount;
                selectedItem.totalPrice += parseFloat(selectedItem.price) * changeAmount;
                state.finalPrice += parseFloat(selectedItem.price) * changeAmount;
                state.totalQuantity += changeAmount;
            }
        },
        removeItemFromCart(state, action) {
            const itemId = action.payload;
            const existingItem = state.items.find((item) => item.id === itemId);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.finalPrice -= existingItem.totalPrice;
                state.items = state.items.filter((item) => item.id !== itemId);
            }
        }




    },
});

export const { addItemToCart, updateQuantity, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
