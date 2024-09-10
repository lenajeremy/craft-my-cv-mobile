export type ApiResponse<T> = {
    data: T,
    success: boolean,
    message: string,
}

export type PaginatedRequest = {
    page?: number,
    pageCount?: number
}

export type Template = {
    id: string;
    file_url: string;
    name: string;
    date_created: string;
    image_url: string;
    description: string;
    usage_count: number
}

export type Resume = {
    firstName?: string
    lastName?: string
    address?: string
    resumeName?: string
    resumeDescription?: string
    email?: string
    phoneNumber?: string
    role?: string
    description?: string
    experiences?: Experience[],
    tools?: Tool[],
    education?: Education[],
    others?: {},
    id: string
}

export type Education = {
    school: string;
    degree: string;
    startDate: Date;
    endDate: Date;
    description: string;
}

export type Experience = {
    company: string;
    location: string;
    responsibilities: string;
    role: string;
    startDate: Date;
    endDate: Date;
    id: string;
}

export type Tool = string
