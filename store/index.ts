import authApi from "@/http/authApi";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import templateApi from "@/http/templatesApi";
import resumeApi from "@/http/resumeApi";


const middleware = [
    authApi.middleware,
    templateApi.middleware,
    resumeApi.middleware,
]

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [templateApi.reducerPath]: templateApi.reducer,
        [resumeApi.reducerPath]: resumeApi.reducer,
        "user": userSlice.reducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch