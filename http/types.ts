export type ApiResponse<T> = {
    data: T,
    succcess: boolean,
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