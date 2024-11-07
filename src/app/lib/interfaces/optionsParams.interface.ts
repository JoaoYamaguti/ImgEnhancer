import { Dispatch, SetStateAction } from "react"

interface IOptionParams {
    label?: string
    value?: number
    setValue?:Dispatch<SetStateAction<number>>
    min?: number
    max?: number
    options?: string[]

}

export type {IOptionParams}