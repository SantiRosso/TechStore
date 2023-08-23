import Link from "next/link";

const Admin = () => {
    return(
        <div>
            <h1>Admin</h1>
            <Link href='/admin/settings'>
                <button>Settings</button>
            </Link>
            <Link href='/admin/statistics'>
                <button>Statistics</button>
            </Link>
            <Link href='/admin/users'>
                <button>Users</button>
            </Link>
        </div>
    )
}

export default Admin;