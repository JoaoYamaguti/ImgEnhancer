'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { login } from '@imgenhancer/app/lib/api'
import { useNotifications } from '@imgenhancer/app/ui/context/NotificationContext'
import './style.scss'

export default function Page() {
    const {addNotification} = useNotifications()

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function signIn() {
        const credentials = { email, password }

        if ( email === '' || password === '') {
            addNotification('error', 'Please, insert all information')
            return
        }

        const logged = await login(credentials)

        if (logged.message && logged.status) {
            addNotification('error', `${logged.status} - ${logged.message[0]}`)
            return
        }

        if(logged.token && logged.user) {
            sessionStorage.setItem('token', logged.token)
            sessionStorage.setItem('user', logged.user)
    
            router.push('/user/gallery')
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