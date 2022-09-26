import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name : "theme",
    initialState : { value : false },
    reducers : {
        themeState : (state, action) => {
            state.value = action.payload;
        },
    }
})


export const { themeState } = themeSlice.actions;


export default themeSlice.reducer;