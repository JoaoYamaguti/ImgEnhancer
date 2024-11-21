'use client'
import Link from 'next/link'
import './style.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { login } from '@imgenhancer/app/lib/api'

export default function Page() {

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function signIn() {
        const credentials = { email, password }

        const logged = await login(credentials)

        const { token, user } = logged

        await sessionStorage.setItem('token', token)
        await sessionStorage.setItem('user', JSON.stringify(user))

        if (logged.token) {
            console.log(logged)
            router.push('/user/gallery')
        }

        if (logged.status) {
            alert(logged.response.data);
        }
    }

    return (
        <div className="login">
            <form action="">
                {/* <label htmlFor="email">E-mail:</label> */}
                <input type="email" name="email" id="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                {/* <label htmlFor="password">Password:</label> */}
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