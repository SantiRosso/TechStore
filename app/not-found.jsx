import Link from"next/link"

const NotFound = () => {
    return(
        <section>
            <h1>404</h1>
            <p>Page not found</p>
            <Link href="/"><p>BACK</p></Link>
        </section>
    )
}

export default NotFound;