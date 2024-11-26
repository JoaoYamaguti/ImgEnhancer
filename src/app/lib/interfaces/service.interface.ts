export interface IComponent {
    type: string
    value?: string
    min?: number
    max?: number
    options?: number[]
}

export interface IService {
    service: string
    components?: Array<IComponent>
}
