import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserCard = (props) => {
    const { user } = props
    const navigate = useNavigate()

    return (
        <div
            className='card text-white bg-primary user-card'
            onClick={() => navigate(`/users/${user.login}`)}
        >
            <div className='card-body'>
                <div className='row'>
                    <div className='grid-item col-12 col-sm-4 p-1'>
                        <img
                            className='avatar-home'
                            src={user.avatar_url}
                            alt='avatar'
                            width='100%'
                        />
                    </div>
                    <div className='grid-item col-12 col-sm-8'>
                        <h4 className='card-title'>{user.name}</h4>
                        <h6 className='card-subtitle text-muted'>{`@${user.login}`}</h6>
                        <div className='mt-3'>
                            <h6>followers: {user.followers}</h6>
                            <h6>following: {user.following}</h6>
                        </div>
                        <div className='mt-3'>
                            <i className='fas fa-map-marker-alt'></i>
                            <span className='mx-2'>{user.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(UserCard)
