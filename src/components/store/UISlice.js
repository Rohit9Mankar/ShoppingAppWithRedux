import { createSlice } from "@reduxjs/toolkit";

const initialuiState = {
    showCart: false,
    showMessage: false,
    requestMessage: {
        type: "",
        message: ""
    }
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialuiState,
    reducers: {
        toogleCart(state) {
            state.showCart = !state.showCart;
        },
        showRequestHandler(state) {
            state.showMessage = !state.showMessage;
        },
        changeRequestMessage(state, action) {
            state.requestMessage.type = action.payload.type;
            state.requestMessage.message = action.payload.message;
        }
    }

})

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;