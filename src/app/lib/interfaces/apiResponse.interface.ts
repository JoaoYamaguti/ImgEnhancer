export interface IApiResponse {
    token?: string
    user?: string
    status?: number
    message?: Array<string>
}

export interface IApiResponseError {
    status: number
    response: {
        data: {
            message: Array<string>
        }
    }
}