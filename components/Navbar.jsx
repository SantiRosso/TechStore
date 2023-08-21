import Link from "next/link";
// import style from "@/styles/Navbar.module.css"

const Navbar = () => {
    return(
        <nav className="flex justify-between items-center bg-stone-600" /* className={style.nav} */>
            <h1 className="text-3xl font-bold">TechStore</h1>
            <ul className="w-96 flex justify-around">
                <li><Link href="/"><h5>Home</h5></Link></li>
                <li><Link href="/about"><h5>About</h5></Link></li>
                <li><Link href="/contact"><h5>Contact</h5></Link></li>
                <li><Link href="/store"><h5>Store</h5></Link></li>
                <li><Link href="/reviews"><h5>Reviews</h5></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;