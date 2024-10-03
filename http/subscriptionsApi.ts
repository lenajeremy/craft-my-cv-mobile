import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store";
import { ApiResponse, Plan } from "./types";


const subscriptionsApi = createApi({
    reducerPath: 'subscriptionsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "/subscription", prepareHeaders(headers, api) {
            const token = (api.getState() as RootState).user.token
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (build) => ({
        getAvailablePlans: build.query<ApiResponse<Plan[]>, void>({
            query: () => '/plans/all',
            transformResponse: (res: any) => ({
                ...res,
                data: res.data.map((plan: any) => ({
                    title: plan.title,
                    perks: plan.perks,
                    id: plan.id,
                    durationInMonths: plan.duration_in_months,
                    priceInDollars: plan.price_in_dollars
                })),
            })
        }),
        subscribeToPlan: build.mutation<ApiResponse<{}>, {
            userId: string,
            planId: string,
        }>({
            query: (args) => ({
                url: `/create`,
                method: "POST",
                body: {
                    plan_id: args.planId,
                    user_id: args.userId
                }
            })
        })
    })
})

export default subscriptionsApi
export const {
    useGetAvailablePlansQuery,
    useLazyGetAvailablePlansQuery,
    useSubscribeToPlanMutation
} = subscriptionsApi