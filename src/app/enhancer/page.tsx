"use client"

import { SetStateAction, useEffect, useState } from "react";

import Process from '../ui/components/process'
import Range from "../ui/components/range";
import Number from "../ui/components/number";
import Rotate from "../ui/components/rotate";

import { data } from '@imgenhancer/app/lib/data'

import { IService } from "../lib/interfaces/service.interface";
import { IProcess } from "../lib/interfaces/process.interface";

import styles from './style.module.scss'

interface Process {
    
    file?: FileList | null | undefined
    value?: number | string
    width?: number
    height?:number
}

export default function Page() {

    const services: Array<IService> = data

    const options: string[] = []
    services.forEach((s) => options.push(s.service))

    // let process: Process = {}
    const [process, setProcess] = useState<IProcess>({})

    const [visibility, setVisibility] = useState(false)
    const [file, setFile] = useState<IProcess['file']>({})
    const [option, setOption] = useState('')
    const [service, setService] = useState<IService | undefined>({})
    const [value, setValue] = useState(0)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const handleOption = (option: string) => {
        setService(services.find((s) => s.service === option))

        setOption(option)
        
        setProcess({})
        setValue(0)
        setWidth(0)
        setHeight(0)

    }

    const handleFile = (ob: IProcess['file']) => {
        const types = ['jpeg', 'png', 'svg']

        const [, type] = ob.type.split('/')

        if (types.includes(type)) {

            setFile(ob)

        } else {
            alert('Attach a valid Image. (.jpeg, .png, .svg)')
        }
    }

    const handleProcess = () => {
        if (file && option) {
            process.file = file
            console.log(process)
            setVisibility(true)
        } else alert('Make sure you have chosen a option and attached a file.')
    }

    useEffect(() => {
        if (value) process.value = value
        if (width) process.width = width
        if (height) process.height = height

    }, [value, width, height])

    return (
        <main className={styles.enhancer}>
            <form action="" className={styles.form}>

                <div className={styles.selectors}>
                    <select name="options" id="options" onChange={(e) => { handleOption(e.target.value) }}>
                        <option key={-1} value=""></option>
                        {
                            options.map((option, index) => <option key={index} value={option}>{option}</option>)
                        }
                    </select>

                    {
                        service.component === "range" && <Range value={value} setValue={setValue} min={service.component.min} max={service.component.max} />
                    }
                    {
                        service.component === "number" && (
                            <>
                                <Number key={0} label={'width'} value={width} setValue={setWidth} />
                                <Number key={1} label={'height'} value={height} setValue={setHeight} />
                            </>
                        )
                    }
                    {
                        service.component === 'select' && <Rotate options={service.options} setValue={setValue} />
                    }
                </div>

                <div className={styles.field}>
                    <label htmlFor="file">Choose or drag a file</label>
                    <input type="file" name="file" id="file"
                        accept=".png, .jpeg, .svg"
                        onChange={(e) => {
                            handleFile(e.target.files[0])
                        }} />
                </div>

                <ul>
                    {file && (<li>{file.name}</li>)}
                </ul>
                <button type="button" onClick={handleProcess}>Enhance</button>

                {
                    visibility && <Process setVisibility={setVisibility} process={process} />
                }
            </form>
        </main>
    )
}