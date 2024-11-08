import { Dispatch, SetStateAction } from "react"

import { IProcess } from "../interfaces/process.interface";

interface IMagic {
    process: IProcess
    setUrlFile: Dispatch<SetStateAction<string>>
    setUrlNewFile: Dispatch<SetStateAction<string>>
    reader: FileReader
}

export type { IMagic }