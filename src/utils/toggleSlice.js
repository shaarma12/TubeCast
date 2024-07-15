import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "Toggle",
    initialState: {
        flag: false,
        tag:true,
    },
    reducers: {
        toogleState: (state, action) => {
            state.flag = !state.flag;
        },
        toogleTag: (state, action) => {
            state.tag = action.payload;
        }
    }
});
export default toggleSlice.reducer;
export const { toogleState,toogleTag } = toggleSlice.actions;