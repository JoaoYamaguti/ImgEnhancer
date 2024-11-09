"use client"

import { useState } from "react";

import Process from '../ui/components/process'
import Number from "../ui/components/number";
import Rotate from "../ui/components/rotate";

import { data } from '@imgenhancer/app/lib/data'

import { IService } from "../lib/interfaces/service.interface";
import { IProcess } from "../lib/interfaces/process.interface";

import styles from './style.module.scss'

export default function Page() {

    const services: Array<IService> = data

    const options: string[] = []
    services.forEach((s) => options.push(s.service))

    const [process, setProcess] = useState({} as IProcess)

    const [option, setOption] = useState('')
    const [service, setService] = useState<IService>({
        service: '',
        components: [{
            type: '',
            value: '',
            min: 0,
            max: 0,
            options: [],
        }],
    })
    const [value, setValue] = useState(0)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [file, setFile] = useState<IProcess['file'] | null>(null)
    const [visibility, setVisibility] = useState(false)

    const handleOption = (option: string) => {
        setOption(option)

        // setService(services.find((s) => s.service === option))
        const choosedService = (services.find((s) => s.service === option) as IService) ?? null;
        setService(choosedService || { component: null })

        setProcess({} as IProcess)
        setValue(0)
        setWidth(0)
        setHeight(0)
    }

    const handleFile = (file: IProcess['file']) => {

        if (file === undefined || file === null) {
            return alert('Attach a valid Image. (.jpeg, .png, .svg)')
        }

        const types = ['jpeg', 'png', 'svg']

        const [, type] = file.type.split('/')

        if (types.includes(type)) {
            setFile(file)
        } else {
            alert('Attach a valid Image. (.jpeg, .png, .svg)')
        }
    }

    const handleProcess = () => {
        if (process !== null) {
            const processObj = {} as IProcess

            if (option) processObj.service = option
            if (file) processObj.file = file
            if (value) processObj.value = value
            if (width) processObj.width = width
            if (height) processObj.height = height

            setProcess(processObj)

        }
        if (file && process) {

            setVisibility(true)
        }
        else alert('Make sure you have chosen a option and attached a file.')
    }

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

                    <div className={styles.params}>
                        {
                            (service.components) && service.components.map((c, index) => {
                                if (c.type === 'number' && c.value === 'value') {
                                    return <Number key={index} label={'value'} value={value} setValue={setValue} />
                                }
                                else if (c.type === 'number' && c.value === 'width') {
                                    return <Number key={index} label={'width'} value={width} setValue={setWidth} />
                                }
                                else if (c.type === 'number' && c.value === 'height') {
                                    return <Number key={index} label={'height'} value={height} setValue={setHeight} />
                                }
                                else if (c.type === 'select') {
                                    return <Rotate key={index} options={c.options} setValue={setValue} />
                                }
                            })
                        }

                        {/* {
                            (service.component && service.component) === "range" && <Range value={value} setValue={setValue} min={service.min} max={service.max} />
                        } */}
                        {/* {
                            (service.component === 'number') && service.values.map((e, index) => (<p></p>));
                        // <>
                        //     <Number key={0} label={'width'} value={width} setValue={setWidth} />
                        //     <Number key={1} label={'height'} value={height} setValue={setHeight} />
                        // </>
                        } */}

                        {/* {
                            (service.component && service.component) === 'select' && <Rotate options={service.options} setValue={setValue} />
                        } */}
                    </div>
                </div>

                <div className={styles.field}>
                    <input type="file" name="file" id="file"
                        accept=".png, .jpeg, .svg"
                        onChange={(e) => e.target.files !== null && handleFile(e.target.files[0])}
                    />
                    <label htmlFor="file">{file ? file.name : 'Choose or drag a file'}</label>
                </div>

                <button type="button" onClick={handleProcess}>Enhance</button>

                {
                    visibility && <Process setVisibility={setVisibility} process={process} />
                }
            </form>
        </main>
    )
}