import Link from "next/link";

const StoreNavbar = () => {
    return(
        <nav>
            <h1>TechStore</h1>
            <ul>
                <li><Link href="/store/categories"><h5>Categories</h5></Link></li>
                <li><Link href="/store/offers"><h5>Offers</h5></Link></li>
            </ul>
        </nav>
    )
}

export default StoreNavbar;