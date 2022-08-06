import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../URI'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState({ loading: true, data: [], error: null })
    const [searchedUser, setSearchedUser] = useState({
        searching: false,
        data: null,
        error: null,
    })

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`${API}/api/users`)
                setUsers({ loading: false, data, error: null })
            } catch (error) {
                setUsers({ loading: false, data: [], error: error.message })
            }
        }

        getData()
    }, [])

    const searchUser = async (username) => {
        if (username === '') {
            setSearchedUser({ data: null, error: null })
            return
        }
        try {
            setSearchedUser({ searching: true, data: null, error: null })
            const data = await getUser(username)
            setSearchedUser({ searching: false, data: data, error: null })
        } catch (error) {
            setSearchedUser({
                searching: false,
                data: null,
                error: error.message,
            })
        }
    }

    const getUser = async (username) => {
        const { data } = await axios.get(`${API}/api/users/${username}`)

        return data
    }

    return (
        <UserContext.Provider
            value={{ users, searchedUser, searchUser, getUser }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
