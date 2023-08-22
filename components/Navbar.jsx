'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
// import style from "@/styles/Navbar.module.css"

const Navbar = () => {

    const route = useRouter()

    const handleClick = () => {
        route.push("/")
    }

    return(
        <nav className="flex justify-between items-center bg-stone-600" /* className={style.nav} */>
            <h1 className="text-3xl font-bold hover:text-stone-900 cursor-pointer" onClick={handleClick}>TechStore</h1>
            <ul className="w-96 flex justify-around">
                <li><Link href="/" className="hover:text-stone-900"><h5>Home</h5></Link></li>
                <li><Link href="/about" className="hover:text-stone-900"><h5>About</h5></Link></li>
                <li><Link href="/contact" className="hover:text-stone-900"><h5>Contact</h5></Link></li>
                <li><Link href="/store" className="hover:text-stone-900"><h5>Store</h5></Link></li>
                <li><Link href="/reviews" className="hover:text-stone-900"><h5>Reviews</h5></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;