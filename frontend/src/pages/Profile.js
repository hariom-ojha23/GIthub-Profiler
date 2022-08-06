import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ProfileHeader from '../components/Profile/ProfileHeader'
import Repositories from '../components/Profile/Repositories'
import { UserContext } from '../contexts/userContext'

const Profile = () => {
    const { id } = useParams()
    const { getUser } = useContext(UserContext)

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const getUserData = async () => {
            const data = await getUser(id)
            setUserData(data)
        }

        getUserData()
    }, [id])

    if (!userData) {
        return (
            <div className='loader-box'>
                <div
                    className='spinner-border text-primary'
                    style={{
                        width: '3rem',
                        height: '3rem',
                        alignSelf: 'center',
                    }}
                    role='status'
                >
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <Container>
            <div className='row'>
                <div className='grid-item col-xs-12 col-lg-3'>
                    <ProfileHeader userData={userData} />
                </div>
                <div className='grid-item col-xs-12 col-lg-9'>
                    <Repositories userData={userData} />
                </div>
            </div>
        </Container>
    )
}

export default Profile
