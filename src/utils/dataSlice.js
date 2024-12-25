import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "Data",
  initialState: {
    videoData: "",
    formData: "",
  },
  reducers: {
    apiResponse: (state, action) => {
      state.videoData = action.payload;
    },
    apiFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});
export default dataSlice.reducer;
export const { apiResponse, apiFormData } = dataSlice.actions;
