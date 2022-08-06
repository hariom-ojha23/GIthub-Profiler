import React from 'react'

const ProfileHeader = (props) => {
    const { userData } = props

    if (!userData) {
        return <div></div>
    }

    return (
        <header className='p-4 profile-header'>
            <div className='row'>
                <div className='grid-item col-xs-3 col-md-4 col-lg-12'>
                    <img
                        className='avatar-profile'
                        src={userData.avatar_url}
                        alt='avatar'
                        width='100%'
                    />
                </div>
                <div className='grid-item col-xs-9 col-md-8 col-lg-12'>
                    <div className='my-2'>
                        <h2 className='text-center'>{userData.name}</h2>
                        <h5 className='text-center'>{userData.login}</h5>
                    </div>

                    <div className='my-3'>
                        <p className='text-center'>{userData.bio}</p>
                    </div>

                    <div className='my-3'>
                        <h6 className='text-center'>
                            Followers: {userData.followers}
                        </h6>
                        <h6 className='text-center'>
                            Followings: {userData.following}
                        </h6>
                    </div>

                    <div className='my-3'>
                        <h6 className='text-center'>
                            <i className='fas fa-map-marker-alt f-icon'></i>
                            {userData.location}
                        </h6>
                    </div>

                    <div className='my-3'>
                        <a
                            href={userData.html_url}
                            rel='noreferrer'
                            target='_blank'
                            className='wrap'
                        >
                            <h6 className='text-center'>
                                <i className='fas fa-link f-cion'></i>
                                {userData.html_url}
                            </h6>
                        </a>
                        <a
                            href={userData.blog}
                            rel='noreferrer'
                            target='_blank'
                            className='wrap'
                        >
                            <h6 className='text-center'>
                                <i className='fas fa-link f-cion'></i>
                                {userData.blog}
                            </h6>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default React.memo(ProfileHeader)
