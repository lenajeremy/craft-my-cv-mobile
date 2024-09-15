import { BASE_URL } from "@/constants";
import { RootState } from "@/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, Resume } from "./types";


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
            providesTags: ['RESUME_LIST']
        }),
        getResumeByID: build.query<ApiResponse<Resume>, string>({
            query: resumeId => ({
                url: `${resumeId}`,
            }),
            transformResponse: (res: any) => ({
                ...res,
                data: {
                    firstName: res.data.first_name,
                    lastName: res.data.last_name,
                    address: res.data.address,
                    resumeName: res.data.name,
                    resumeDescription: res.data.description,
                    email: res.data.email,
                    phoneNumber: res.data.phone_number,
                    role: res.data.role,
                    description: res.data.description,
                    experiences: res.data.experiences?.map((exp: any) => ({
                        id: exp.id,
                        company: exp.company,
                        location: exp.location,
                        responsibilities: exp.responsibilities,
                        startDate: exp.start_date,
                        end_date: exp.end_data,
                        role: exp.role,
                    })) || [],
                    skills: res.data.skills || [],
                    education: res.data.education?.map((edu: any) => ({
                        id: edu.id,
                        startDate: edu.start_date,
                        endDate: edu.end_date,
                        courseStudied: edu.course_studied,
                        degree: edu.degree,
                        school: edu.school,
                        grade: edu.grade,
                    })) || [],
                    others: res.data.other || {},
                    id: res.data.id,
                    professionalSummary: res.data.professional_summary,
                }
            })
        }),
        editResume: build.mutation<ApiResponse<void>, Resume>({
            query({ id, ...rest }) {
                return {
                    url: `${id}/edit`,
                    method: "PATCH",
                    body: {
                        address: rest.address,
                        email: rest.email,
                        phone_number: rest.phoneNumber,
                        name: rest.resumeName,
                        description: rest.resumeDescription,
                        role: rest.role,
                        first_name: rest.firstName,
                        last_name: rest.lastName,
                        experiences: rest.experiences?.map(exp => ({
                            company: exp.company,
                            location: exp.location,
                            start_date: exp.startDate,
                            end_date: exp.endDate,
                            id: exp.id,
                            responsibilities: exp.responsibilities,
                            role: exp.role,
                        })),
                        skills: rest.skills,
                        education: rest.education?.map(education => ({
                            id: education.id,
                            degree: education.degree,
                            end_date: education.endDate,
                            start_date: education.startDate,
                            course_studied: education.courseStudied,
                            grade: education.grade,
                            school: education.school
                        })),
                        professional_summary: rest.professionalSummary
                    },
                }
            },
        }),
        deleteResume: build.mutation<ApiResponse<void>, { resumeId: string }>({
            query: (args) => ({
                url: `/${args.resumeId}/delete`,
                method: "DELETE"
            }),
            invalidatesTags: ['RESUME_LIST']
        }),
    })
})

export default resumeApi

export const {
    useCreateNewResumeMutation,
    useListUserResumesQuery,
    useLazyListUserResumesQuery,
    useEditResumeMutation,
    useDeleteResumeMutation,
    useGetResumeByIDQuery,
    useLazyGetResumeByIDQuery
} = resumeApi