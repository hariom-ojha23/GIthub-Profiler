import React, { useContext } from 'react'

import Header from '../components/Home/Header'
import Main from '../components/Home/Main'
import { UserContext } from '../contexts/userContext'

const Home = () => {
    const { users, searchedUser, searchUser } = useContext(UserContext)

    return (
        <div>
            <Header
                searchUser={searchUser}
                searching={searchedUser.searching}
            />
            <Main
                users={users.data}
                loading={users.loading}
                searchedUser={searchedUser.data}
                userError={users.error}
                searchError={searchedUser.error}
            />
        </div>
    )
}

export default Home
