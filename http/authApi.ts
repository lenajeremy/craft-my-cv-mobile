import { BASE_URL } from "@/constants"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ApiResponse } from "./types"


const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + '/auth' }),
    endpoints(build) {
        return {
            login: build.mutation<ApiResponse<{
                token: string;
                user_id: string;
                name: string;
                email: string;
                plan: string;
                is_active: string;
            }>, {
                email: string,
                password: string
            }>({
                query: (args) => ({
                    url: "/login",
                    method: 'POST',
                    body: args
                }),
            }),
            register: build.mutation<string, {
                name: string;
                email: string;
                password: string;
                conf_password: string;
                accept_t_and_c: boolean;
            }>({
                query: (args) => ({
                    url: '/register',
                    method: "POST",
                    body: args
                })
            })
        }
    },
})

export default authApi

export const {
    useLoginMutation,
    useRegisterMutation
} = authApi