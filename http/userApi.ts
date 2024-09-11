import { BASE_URL } from "@/constants";
import { RootState } from "@/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "./types";

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "/user", prepareHeaders(headers, api) {
            const { token } = (api.getState() as RootState).user

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        }
    }), endpoints: build => ({
        getUserDetails: build.query<ApiResponse<{
            email: string,
            id: string,
            isActive: boolean,
            name: string,
            plan: string,
            hasValidSubscription: boolean;
        }>, { token: string }>({
            query: (args) => ({
                url: '/',
                headers: {
                    "Authorization": `Bearer ${args.token}`
                }
            }),
            transformResponse: (res: any) => ({
                ...res,
                data: {
                    email: res.data.email,
                    id: res.data.id,
                    isActive: res.data.is_active,
                    name: res.data.name,
                    plan: res.data.plan,
                    hasValidSubscription: res.data.has_valid_subscription,
                }
            })
        })
    })
})

export default userApi
export const { useGetUserDetailsQuery, useLazyGetUserDetailsQuery } = userApi