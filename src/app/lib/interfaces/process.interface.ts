interface IProcess {
    service: string
    file: File
    value?: number | undefined
    width?: number | undefined
    height?:number | undefined
}

export type {IProcess}