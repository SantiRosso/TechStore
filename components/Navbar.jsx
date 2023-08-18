import Link from "next/link";

const Navbar = () => {
    return(
        <nav>
            <h1>TechStore</h1>
            <ul>
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