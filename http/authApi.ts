import { BASE_URL } from "@/constants"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + '/auth' }),
    endpoints(build) {
        return {
            login: build.mutation<string, {
                email: string,
                password: string
            }>({
                query: (args) => ({
                    url: "/auth",
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