import { configureStore } from "@reduxjs/toolkit";
import ToggleReducer from "./toggleSlice"
const AppStore = configureStore({
    reducer: {
        Toggle: ToggleReducer,
    }
});
export default AppStore;