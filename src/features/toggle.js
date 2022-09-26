import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name : "toggle",
    initialState : { value : true },
    reducers : {
        toggleState : (state, action) => {
            state.value = action.payload;
        },
    }
})


export const { toggleState } = toggleSlice.actions;


export default toggleSlice.reducer;