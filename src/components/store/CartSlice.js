import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    cartArray: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItem(state, action) {
            const index = state.cartArray.findIndex((item) => {
                return item.title === action.payload.title
            })
            const indexItem = state.cartArray[index];

            if (index >= 0) {
                const updatedItem = { ...indexItem, quantity: Number(indexItem.quantity) + 1 };
                state.cartArray[index] = updatedItem;
            }
            else {
                state.cartArray.push(action.payload);
            }


        },
        addFromCart(state, action) {
            const index = state.cartArray.findIndex((item) => {
                return item.title === action.payload.title
            })
            const indexItem = state.cartArray[index];
            const updatedItem = { ...indexItem, quantity: Number(indexItem.quantity) + 1 };
            state.cartArray[index] = updatedItem;
        },
        removeFomCart(state, action){
            const index = state.cartArray.findIndex((item) => {
                return item.title === action.payload.title
            })
            const indexItem = state.cartArray[index];
            const updatedItem = { ...indexItem, quantity: Number(indexItem.quantity) -1 };
            state.cartArray[index] = updatedItem;
        }
    }

})

export const CartActions = cartSlice.actions;

export default cartSlice.reducer;