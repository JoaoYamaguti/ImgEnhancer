"use client"

import { useState } from "react";

import { useNotifications } from "../ui/context/NotificationContext";

import Header from "../ui/components/header";
import Process from '../ui/components/process'
import Number from "../ui/components/number";
import Rotate from "../ui/components/rotate";

import { services } from '@imgenhancer/app/lib/services'

import { IComponent, IService } from "../lib/interfaces/service.interface";
import { IProcess } from "../lib/interfaces/process.interface";

import styles from './style.module.scss'

export default function Page() {
    const { addNotification } = useNotifications()

    const options: string[] = ['']
    services.forEach((s) => options.push(s.service))

    const [process, setProcess] = useState<Partial<IProcess>>({})

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

        const choosedService = (services.find((s) => s.service === option) as IService) ?? null;
        setService(choosedService || { component: null })

        setProcess({})
        setValue(0)
        setWidth(0)
        setHeight(0)
    }

    const handleFile = (file: IProcess['file']) => {

        if (file === undefined || file === null) {
            addNotification("error", "Attach a valid Image. (.jpeg, .png, .svg)")
            return
        }

        const types = ['jpeg', 'png', 'svg']

        const [, type] = file.type.split('/')

        if (types.includes(type)) {
            setFile(file)
        } else {
            addNotification("error", "Attach a valid Image. (.jpeg, .png, .svg)")
        }
    }

    function isValid(label: string, value: number) {
        const component = service.components && service.components.find((c) => c.value === label) as IComponent
        if (component === undefined) return console.log(`${label} component does not found`)
        if (component.min === undefined || component.max === undefined) return
        if (value < component.min || value > component.max) {
            return false
        } else {
            return true
        }
    }

    const handleProcess = () => {
        if (process !== null) {
            const processObj = {} as IProcess

            if (option) {
                processObj.service = option
            } else {
                addNotification("error", "Make sure you had chosen a option.")
                return
            }
            if (file) {
                processObj.file = file
            } else {
                addNotification("error", "Make sure you had attached a file.")
                return
            }
            if (value) {
                const valueIsValid = isValid('value', value)

                if (valueIsValid) {
                    processObj.value = value
                } else {
                    addNotification("error", "Input a valid value")
                    return
                }
            }
            if (width) {
                const widthIsValid = isValid('width', width)

                if (widthIsValid) {
                    processObj.width = width
                } else {
                    addNotification("error", "Input a valid width")
                    return
                }
            }
            if (height) {
                const heightIsValid = isValid('height', height)

                if (heightIsValid) {
                    processObj.height = height
                } else {
                    addNotification("error", "Input a valid height")
                    return
                }
            }

            setProcess(processObj)
            setVisibility(true)
        }
    }

    return (
        <>
            <Header />
            <main className={styles.enhancer}>
                <form action="" className={styles.form}>

                    <div className={styles.selectors}>
                        <select name="options" id="options" onChange={(e) => { handleOption(e.target.value) }}>
                            {
                                options.map((option, index) => <option key={index} value={option}>{option}</option>)
                            }
                        </select>

                        <div className={styles.params}>
                            {
                                (service.components) && service.components.map((c, index) => {
                                    if (c.type === 'number' && c.value === 'value') {
                                        return <Number key={index} label={'value'} value={value} setValue={setValue} min={c.min} max={c.max} />
                                    }
                                    else if (c.type === 'number' && c.value === 'width') {
                                        return <Number key={index} label={'width'} value={width} setValue={setWidth} min={c.min} max={c.max} />
                                    }
                                    else if (c.type === 'number' && c.value === 'height') {
                                        return <Number key={index} label={'height'} value={height} setValue={setHeight} min={c.min} max={c.max} />
                                    }
                                    else if (c.type === 'select') {
                                        return <Rotate key={index} options={c.options} setValue={setValue} />
                                    }
                                })
                            }
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="file">{file ? file.name : 'Choose or drag a file'}
                            <input type="file" name="file" id="file"
                                accept=".png, .jpeg, .svg"
                                onChange={(e) => e.target.files !== null && handleFile(e.target.files[0])}
                            />
                        </label>
                    </div>

                    <button type="button" onClick={handleProcess}>Enhance</button>

                    {
                        visibility && <Process setVisibility={setVisibility} process={process} />
                    }
                </form>
            </main>
        </>
    )
}