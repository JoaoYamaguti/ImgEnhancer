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
            alert('Please, insert all information')
            // addNotification('error', 'Please, insert all information')
            return 
        }

        if (password !== cPassword) {
            alert('Confirme Passowrd does not match')
            // addNotification('error', 'Confirme Passowrd does not match')
            return
        }

        const infos = {
            name,
            email,
            password
        }

        const data = await signup(infos)

        if (data.status === 400) {
            alert(`${data.status} -${data.response.data.message.map((e) => ` ${e}`)}`)
            // {
            //     data.response.data.message.map((e) => addNotification('error', `${data.status} - ${e}`))
            // }
            return 
        }

        const logged = await login({email, password})

        const { token, user } = logged

        await sessionStorage.setItem('token', token)
        await sessionStorage.setItem('user', JSON.stringify(user))

        if (logged.status) {
            alert(logged.response.data);
            // data.response.data.message.map((e) => addNotification('error', `${data.status} - ${e}`))
        }

        if (logged.token) {
            console.log(logged)
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
