import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "Data",
    initialState: {
        videoData: "",
    },
    reducers: {
        apiResponse: (state, action) => {
            state.videoData = action.payload;
        }
    }
},
);
export default dataSlice.reducer;
export const {apiResponse} = dataSlice.actions;