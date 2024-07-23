import { configureStore } from "@reduxjs/toolkit";
import ToggleReducer from "./toggleSlice"
import DataReducer from "./dataSlice";
const AppStore = configureStore({
    reducer: {
        Toggle: ToggleReducer,
        Data: DataReducer,
    }
});
export default AppStore;