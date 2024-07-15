import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "Toggle",
    initialState: {
        flag: false,
        tag: true,
        sideBars:true,
    },
    reducers: {
        toogleState: (state, action) => {
            state.flag = !state.flag;
        },
        toogleTag: (state, action) => {
            state.tag = action.payload;
        },
        toogleBars: (state, action) => {
            state.sideBars = action.payload;
        },
        
    }
});
export default toggleSlice.reducer;
export const { toogleState,toogleTag,toogleBars } = toggleSlice.actions;