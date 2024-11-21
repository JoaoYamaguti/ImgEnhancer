import { FiUser, FiLogOut } from "react-icons/fi";

import './style.scss'
import Link from "next/link";

function UserNav() {

    function logout() {
        sessionStorage.clear()
    }

    return (
        <div className="userNav">
            <ul >
                <li><Link href={'/user/gallery'}>Gallery</Link></li>
                <li><Link href={'/'} onClick={logout}><FiLogOut />Logout</Link></li>
                <li className="icon">
                    <FiUser />
                </li>
            </ul>
        </div>
    )
}

export default UserNav
