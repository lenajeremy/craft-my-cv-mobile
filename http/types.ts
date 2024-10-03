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
    link?: string
    role?: string
    description?: string
    experiences?: Experience[],
    skills?: Skill[],
    education?: Education[],
    others?: {},
    id: string,
    professionalSummary?: string
}

export type Education = {
    id: string;
    school: string;
    degree: string;
    startDate: Date;
    endDate: Date;
    grade: string;
    courseStudied: string;
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

export type Skill = string

export type Plan = {
    title: string,
    perks: string[],
    id: string,
    durationInMonths: number,
    priceInDollars: number
}