import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_AUTH } from "./auth.constant.store";

export const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_AUTH,
    reducers: {
        setUserDetails: (state) => {
            state.value += 1;
        },
    },
});

export const { setUserDetails } = authSlice.actions;

export default authSlice.reducer;
