const loadUser = async (id) => {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

const User = async ({params}) => {
    const id = params.id

    const user = await loadUser(id)
    return(
        <div>
            <h1>{user.first_name} {user.last_name}</h1>
            <h1>Email: {user.email}</h1>
            <img src={user?.avatar} alt="avatar" />
        </div>
    )
}

export default User;