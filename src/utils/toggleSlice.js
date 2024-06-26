import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "Toggle",
    initialState: {
        flag: false,
    },
    reducers: {
        toogleState: (state, action) => {
            state.flag = !state.flag;
        }
    }
});
export default toggleSlice.reducer;
export const { toogleState } = toggleSlice.actions;