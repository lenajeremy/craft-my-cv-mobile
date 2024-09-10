import { BASE_URL } from "@/constants";
import { RootState } from "@/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "./types";


const resumeApi = createApi({
    reducerPath: "resumeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + '/resumes', prepareHeaders: (headers, api) => {
            const { token } = (api.getState() as RootState).user
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers
        }
    }),
    endpoints: (build) => ({
        createNewResume: build.mutation<ApiResponse<{ resume_id: string }>, {
            template_id: string,
            owner_id: string,
        }>({
            query: args => ({
                url: "/new",
                method: "POST",
                body: args
            })
        })
    })
})

export default resumeApi
export const { useCreateNewResumeMutation } = resumeApi