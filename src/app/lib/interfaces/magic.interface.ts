import { Dispatch, SetStateAction } from "react"

interface IMagic {
    file: Blob | MediaSource
    setUrlFile: Dispatch<SetStateAction<string>>
    setUrlNewFile: Dispatch<SetStateAction<string>>
}

export type { IMagic }