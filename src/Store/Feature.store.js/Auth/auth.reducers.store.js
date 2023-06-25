import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_AUTH } from "./auth.constant.store";

export const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_AUTH,
    reducers: {
        setUserDetails: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
    },
});


// Action creators are generated for each case reducer function
export const { setUserDetails } = authSlice.actions

export default authSlice.reducer