const fetchUsers = async () => {
    const res = await fetch('https://reqres.in/api/users')
    const data = await res.json()
    return data.data;
}

const Statistics = async () => {

    const users = await fetchUsers()
    return(
        <div className="m-5 p-5 flex flex-col justify-center items-center h-screen">
            <h1>Statistics</h1>
            <h5>Users</h5>
                <ul className="flex flex-col justify-around items-center m-5 p-5 h-full ">
                    {
                        users.map((user) => {
                            return(
                                <li key={user.id} className="w-96 flex justify-around items-center">
                                    <img src={user.avatar} alt="avatar" className="rounded-full w-16"/>
                                    <div>
                                        <h1>Name: {user.first_name} {user.last_name}</h1>
                                        <h1>Email: {user.email}</h1>
                                    </div>
                                </li> 
                            )
                        })
                    }
                </ul>
        </div>
    )
}

export default Statistics;