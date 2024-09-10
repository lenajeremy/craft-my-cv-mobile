import { BASE_URL } from "@/constants";
import { RootState } from "@/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, PaginatedRequest, Template } from "./types";


const templateApi = createApi({
    reducerPath: 'templatesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "/templates", prepareHeaders: (headers, api) => {
            const { token } = (api.getState() as RootState).user
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers;
        }
    }),
    endpoints: build => ({
        listAllTemplates: build.query<ApiResponse<{
            templates: Template[],
            total_templates: number,
            total_pages: number,
            current_page: number,
        }>, PaginatedRequest>({
            query: (args) => ({
                url: '/all',
                params: args
            })
        }),
        uploadNewTemplate: build.mutation<string, {
            value: string
        }>({
            query: args => ({
                url: 'upload',
                method: 'POST',
                body: args
            })
        })
    })
})

export default templateApi

export const {
    useListAllTemplatesQuery,
    useLazyListAllTemplatesQuery,
    useUploadNewTemplateMutation
} = templateApi