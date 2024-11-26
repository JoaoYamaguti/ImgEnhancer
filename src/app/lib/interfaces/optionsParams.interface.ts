import { Dispatch, SetStateAction } from "react"

interface IOptionParams {
    label?: string
    value?: number
    setValue?:Dispatch<SetStateAction<number>>
    min?: number
    max?: number
    options?: number[]

}

export type {IOptionParams}