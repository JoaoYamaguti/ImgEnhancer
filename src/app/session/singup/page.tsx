'use client'

import Link from 'next/link'
import './style.scss'
import { login, signup } from '@imgenhancer/app/lib/api'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useNotifications } from '@imgenhancer/app/ui/context/NotificationContext'

export default function Page() {
    const { addNotification } = useNotifications()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    const router = useRouter()

    async function createUser() {

        if (name === '' || email === '' || password === '') {
            addNotification('error', 'Please, insert all information')
            return
        }

        if (password !== cPassword) {
            addNotification('error', 'Confirme Passowrd does not match')
            return
        }

        const infos = {
            name,
            email,
            password
        }

        const sign = await signup(infos)

        if (sign.message && sign.status) {
            const arr = [...sign.message]
            arr.forEach((m: string) => {
                addNotification('error', `${sign.status} - ${m}`)
            })
            return
        }

        const logged = await login({ email, password })

        if (logged.message && logged.status) {
            addNotification('error', `${logged.status} - ${logged.message[0]}`)

            return
        }

        if (logged.token && logged.user) {
            sessionStorage.setItem('token', logged.token)
            sessionStorage.setItem('user', logged.user)

            router.push('/user/gallery')
        }
    }

    return (
        <div className="signup">
            <div className="pages">
                <h1>Sign Up</h1>
                <p>
                    Sign up and your save images in your own gallery
                </p>
                <Link href={'/session/login'}> Login</Link>
            </div>
            <div className="divisor"></div>

            <form action="none">
                <input type="text" name="name" id="name" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input type="email" name="email" id="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <input type="password" name="confirmePassword" id="confirmPassword" placeholder='Confirme Password' onChange={(e) => setCPassword(e.target.value)} />
                <button type="button" onClick={createUser}>Sign Up</button>
            </form>
        </div>
    )
}
