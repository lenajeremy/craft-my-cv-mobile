import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    email: "",
    name: "",
    userId: "",
    plan: "",
    hasValidSubscription: false,
}
type InitialState = typeof initialState

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser(state: InitialState, action: PayloadAction<InitialState>) {
            state.email = action.payload.email 
            state.token = action.payload.token
            state.name = action.payload.name
            state.userId = action.payload.userId
            state.plan = action.payload.plan
            state.hasValidSubscription = action.payload.hasValidSubscription

            return state
        }
    }
})

export default userSlice
export const { updateUser } = userSlice.actions