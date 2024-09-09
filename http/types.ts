export type ApiResponse<T> = {
    data: T,
    succcess: boolean,
    message: string,
}