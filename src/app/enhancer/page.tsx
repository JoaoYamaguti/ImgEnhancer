"use client"

import { useState } from "react";

import Process from '../ui/components/process'

import styles from './style.module.scss'

export default function Page() {

    const [visibility, setVisibility] = useState(false)

    const [file, setFile] = useState()

    const handleFile = (file) => {
        const types = ['jpeg', 'png', 'svg']

        const [, type] = file.type.split('/')

        if (types.includes(type)) {
            setFile(file)
        } else {
            alert('Attach a valid Image. (.jpeg, .png, .svg)')
        }
    }

    const handleProcess = () => {
        if (file) {
            setVisibility(true) 
        } else alert('Attach a valid Image. (.jpeg, .png, .svg)')
    }

    return (
        <main className={styles.enhancer}>

            <form action="" className={styles.form}>

                <select name="options" id="options">
                    <option value="enhance">Enhance</option>
                    <option value="upscale">Upscale</option>
                </select>

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