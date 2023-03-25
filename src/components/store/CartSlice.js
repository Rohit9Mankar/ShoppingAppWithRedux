import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    cartArray: [],
    totalItems: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        loadCart(state,action){
            state.cartArray=action.payload.loaded;
            state.totalItems=action.payload.total;
        },
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
            state.totalItems += 1;

        },
        removeFomCart(state, action) {
            const index = state.cartArray.findIndex((item) => {
                return item.title === action.payload.title
            })
            const indexItem = state.cartArray[index];
            state.totalItems -= 1;

            if (indexItem.quantity === 1) {
                console.log(index);
                state.cartArray.splice(index, 1);
            }
            else {
                const updatedItem = { ...indexItem, quantity: Number(indexItem.quantity) - 1 };
                state.cartArray[index] = updatedItem;
                }

        }
    }

})

export const CartActions = cartSlice.actions;

export default cartSlice.reducer;