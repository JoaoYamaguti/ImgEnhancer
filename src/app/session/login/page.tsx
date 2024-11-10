import Link from 'next/link'
import './style.scss'

export default function Page() {
    return (
        <div className="login">
            <form action="none">
                {/* <label htmlFor="email">E-mail:</label> */}
                <input type="email" name="email" id="email" placeholder='E-mail' />
                {/* <label htmlFor="password">Password:</label> */}
                <input type="password" name="password" id="password" placeholder='Password' />
                <button type="button"><Link href={'/session/gallery'}>Login</Link></button>
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