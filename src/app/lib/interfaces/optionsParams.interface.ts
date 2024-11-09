import { Dispatch, SetStateAction } from "react"

interface IOptionParams {
    label?: string
    value?: number | null
    setValue?:Dispatch<SetStateAction<number>>
    min?: number | null
    max?: number | null
    options?: number[]

}

export type {IOptionParams}