import Link from "next/link";

import { FiUser, FiLogOut } from "react-icons/fi";

import './style.scss'

export default function UserNav() {
    function logout() {
        sessionStorage.clear()
    }

    return (
        <div className="userNav">
            <ul >
                <li><Link href={'/enhancer'}>Enhancer</Link></li>
                <li><Link href={'/user/gallery'}>Gallery</Link></li>
                <li><Link href={'/'} onClick={logout}><FiLogOut />Logout</Link></li>
                <li className="icon">
                    <FiUser />
                </li>
            </ul>
        </div>
    )
}
