import Link from 'next/link'
import './style.scss'

export default function Page() {
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
                {/* <label htmlFor="email">E-mail:</label> */}
                <input type="email" name="email" id="email" placeholder='E-mail'/>
                {/* <label htmlFor="password">Password:</label> */}
                <input type="password" name="password" id="password" placeholder='Password'/>
                <input type="password" name="confirmePassword" id="confirmPassword" placeholder='Confirme Password'/>

                <button type="button">Sign Up</button>
            </form>

        </div>

    )
}