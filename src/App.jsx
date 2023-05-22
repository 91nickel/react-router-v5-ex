import React from 'react'
import { Route, Routes, NavLink, Navigate, useParams } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <h1>- Home page</h1>
            <NavLink to='/users'>Users List Page</NavLink>
        </>
    )
}

const UsersListPage = () => {
    return (
        <>
            <h1>- Users List</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to='/users/1'>User 1</NavLink></li>
                <li><NavLink to='/users/2'>User 2</NavLink></li>
                <li><NavLink to='/users/3'>User 3</NavLink></li>
                <li><NavLink to='/users/4'>User 4</NavLink></li>
                <li><NavLink to='/users/5'>User 5</NavLink></li>
            </ul>
        </>
    )
}

const UserPage = () => {
    const {userId} = useParams()
    return (
        <>
            <h1>- User Page</h1>
            <ul>
                <li><NavLink to="..">Users List Page</NavLink></li>
                <li><NavLink to={`../${userId}/edit`}>Edit this user</NavLink></li>
            </ul>
            <p>ID={userId}</p>
        </>
    )
}

const UserEditPage = () => {
    const {userId} = useParams()
    return (
        <>
            <h1>- User Edit Page</h1>
            <ul>
                <li><NavLink to={`../${userId}/profile`}>User page</NavLink></li>
                <li><NavLink to={`../${+userId + 1}/edit`}>Next user page</NavLink></li>
                <li><NavLink to="..">Users List Page</NavLink></li>
            </ul>
            <p>ID={userId}</p>
        </>
    )
}

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>App Layout</h1>
                        <Routes>
                            <Route index element={<HomePage/>}/>
                            <Route path='users/*'>
                                <Route index element={<UsersListPage/>}/>
                                <Route path=":userId" element={<Navigate to="profile"/>}/>
                                <Route path=":userId/profile" element={<UserPage/>}/>
                                <Route path=":userId/edit" element={<UserEditPage/>}/>
                            </Route>
                            <Route path="*" element={<Navigate to="/"/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
