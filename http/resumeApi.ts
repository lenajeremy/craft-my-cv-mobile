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
    tagTypes: ["RESUME", "RESUME_LIST"],
    endpoints: (build) => ({
        createNewResume: build.mutation<ApiResponse<{ resume_id: string, resume_name: string }>, {
            template_id: string,
            owner_id: string,
        }>({
            query: args => ({
                url: "/new",
                method: "POST",
                body: args
            }),
            invalidatesTags: ["RESUME_LIST"]
        }),
        listUserResumes: build.query<ApiResponse<{
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
        }[]>, { user_id: string }>({
            query: args => ({
                url: `/user/${args.user_id}/`,
            }),
            transformResponse: (res: any) => ({
                ...res,
                data: res.data.map((d: any) => ({
                    id: d.id,
                    name: d.name,
                    createdAt: d.created_at,
                    updatedAt: d.updated_at
                }))
            }),
            providesTags: ['RESUME']
        }),
        editResume: build.mutation<ApiResponse<void>, {
            resumeId: string,
        }>({
            query({ resumeId, ...restArgs }) {
                return {
                    url: `${resumeId}/edit`,
                    method: "PATCH",
                    body: restArgs,
                }
            },
        }),
        deleteResume: build.mutation<ApiResponse<void>, { resumeId: string }>({
            query: (args) => ({
                url: `/${args.resumeId}/delete`,
                method: "DELETE"
            })
        })
    })
})

export default resumeApi

export const {
    useCreateNewResumeMutation,
    useListUserResumesQuery,
    useLazyListUserResumesQuery,
    useEditResumeMutation,
    useDeleteResumeMutation
} = resumeApi