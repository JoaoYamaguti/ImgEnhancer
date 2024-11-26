'use client'
import Link from 'next/link'
import './style.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { login } from '@imgenhancer/app/lib/api'
import { useNotifications } from '@imgenhancer/app/ui/context/NotificationContext'

export default function Page() {
    const {addNotification} = useNotifications()

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function signIn() {
        const credentials = { email, password }

        const logged = await login(credentials)

        const { token, user } = logged

        sessionStorage.setItem('token', token)
        sessionStorage.setItem('user', user)

        if (logged.token) {
            console.log(logged)
            router.push('/user/gallery')
        }

        if (logged.status !== 200 && logged.message?.length && logged.status) {
            console.log(logged)

            addNotification('success', `${logged.status} - ${logged.message[0]}`)
        }
    }

    return (
        <div className="login">
            <form action="">
                <input type="email" name="email" id="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button type="button" onClick={signIn}>Sign In</button>
            </form>

            <div className="divisor"></div>

            <div className="pages">
                <h1>Login</h1>
                <p>
                    Sign up and save your images in your own gallery.
                </p>
                <Link href={'/session/singup'}> Sign Up</Link>
            </div>
        </div>
    )
}