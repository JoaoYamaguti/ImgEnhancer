"use client"

import { useEffect, useState } from "react";

import Process from '../ui/components/process'
import Range from "../ui/components/range";
import Number from "../ui/components/number";
import Rotate from "../ui/components/rotate";

import { data } from '@imgenhancer/app/lib/data'

import styles from './style.module.scss'

interface Service {
    service: string
    component?: string
    min?: number
    max?: number
    options?: string[]
}

interface Process {
    
    file?: FileList | null | undefined
    value?: number | string
    width?: number
    height?:number
}

export default function Page() {

    const services = data

    const options: string[] = []
    data.forEach((s) => options.push(s.service))

    let process: Process = {}

    const [visibility, setVisibility] = useState(false)

    const [file, setFile] = useState()
    const [option, setOption] = useState()
    const [service, setService] = useState({})
    const [value, setValue] = useState()
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()

    const handleOption = (option: string) => {
        process = {}

        setService(data.find((s) => s.service === option))

        setValue(false)
        setWidth(false)
        setHeight(false)

    }

    const handleFile = (file: Process['file']) => {
        const types = ['jpeg', 'png', 'svg']

        const [, type] = file.type.split('/')

        if (types.includes(type)) {

            setFile(file)

        } else {
            alert('Attach a valid Image. (.jpeg, .png, .svg)')
        }
    }

    const handleProcess = () => {
        if (file && option) {
            setVisibility(true)
        } else alert('Make sure you have chosen a option and attached a file.')
    }

    useEffect(() => {
        if (value) process.value = value
        if (width) process.width = width
        if (height) process.height = height

        console.log(process)

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
                    visibility && <Process setVisibility={setVisibility} file={file} />
                }
            </form>
        </main>
    )
}