import { createSlice } from "@reduxjs/toolkit";

const initialToggleState = {
    showCart:false
};

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: initialToggleState,
    reducers: {
       toogleCart(state){
        state.showCart=!state.showCart;
       }
    }

})

export const ToggleActions = toggleSlice.actions;

export default toggleSlice.reducer;