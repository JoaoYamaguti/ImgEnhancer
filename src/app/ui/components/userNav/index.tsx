import Link from "next/link";

import { useEffect, useState } from "react";
import { FiEdit, FiFolder, FiLogOut } from "react-icons/fi";

import './style.scss';

export default function UserNav() {
    const [menu, setMenu] = useState(false)

    function logout() {
        sessionStorage.clear()
        location.reload()
    }

    function handleMenu() {
        setMenu(!menu)
    }

    useEffect(() => {
        document.addEventListener("click", (event) => {
            const target = event.target as HTMLElement
            const offsetParent = target.offsetParent

            if (offsetParent == null) return

            if (offsetParent.id != "userNav") {
                setMenu(false)
            }
        })
    }, [])

    return (
        <div id="userNav" className="userNav" >
            <div className="hamburguerMenu" onClick={handleMenu}>
                <div className="firstBar"></div>
                <div className="secondBar"></div>
                <div className="thirdBar"></div>
            </div>
            {
                menu &&
                <div className="menuPopup">
                    <ul>
                        <li>
                            <FiFolder />
                            <Link href={"/user/gallery"}>Gallery</Link>
                        </li>
                        <li>
                            <FiEdit />
                            <Link href={"/user/edit"}>Edit Profile</Link>
                        </li>
                        <hr />
                        <li onClick={logout}>
                            <FiLogOut />
                            Logout
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}
