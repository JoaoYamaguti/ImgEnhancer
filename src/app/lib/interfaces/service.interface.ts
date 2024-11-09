// interface IService {
//     service: string
//     component?: string
//     values?: string[]
//     min?: number
//     max?: number
//     options?: number[]
// }

interface IService {
    service: string
    components?: Array<{
        type: string
        value?: string
        min?: number
        max?: number
        options?: number[]
    }>
}


export type {IService}