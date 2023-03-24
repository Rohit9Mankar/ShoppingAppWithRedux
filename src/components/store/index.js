import {  configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';
import toggleReducer from './ToggleCartSlice';

const store = configureStore({
    reducer:{cart : cartReducer ,toggle: toggleReducer}
});

export default store;