export interface IApiResponse {
    token: string
    user: string
    status?: number
    message?: string[]
}

export interface IApiResponseError {
    status: number
    response: {
        data: {
            message: string[]
        }
    }
}