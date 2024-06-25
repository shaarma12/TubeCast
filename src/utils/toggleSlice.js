import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "Toggle",
    initialState: {
        flag: false,
    },
    reducers: {
        toogleState: (action, state) => {
            state.flag = action.payload;
        }
    }
});
export default toggleSlice.reducer;
export const { toogleState } = toggleSlice.actions;