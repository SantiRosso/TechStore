import Link from "next/link";

const StoreNavbar = () => {
    return(
        <nav className="flex justify-around">
            <h1>Store</h1>
            <ul className="flex justify-around w-96 bg-stone-500">
                <li><Link href="/store/categories"><h5>Categories</h5></Link></li>
                <li><Link href="/store/offers"><h5>Offers</h5></Link></li>
            </ul>
        </nav>
    )
}

export default StoreNavbar;