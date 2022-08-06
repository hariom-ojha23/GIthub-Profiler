import React from 'react'
import { Alert, Container } from 'react-bootstrap'
import UserCard from './UserCard'

const Main = (props) => {
    const { users, loading, searchedUser, searchError, userError } = props
    return (
        <main className='py-5'>
            <Container>
                {searchedUser !== null && (
                    <div className='mb-5 search-res-box'>
                        <h2 className='mb-5'>Search Result</h2>
                        <UserCard user={searchedUser} />
                    </div>
                )}
                {searchError && <Alert variant='danger'>{searchError}</Alert>}

                <div>
                    <h2>Recommend Users</h2>
                    {loading && (
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
                                <span className='visually-hidden'>
                                    Loading...
                                </span>
                            </div>
                        </div>
                    )}
                    {!loading && (
                        <div className='row mt-5 p-2 card-group'>
                            {users.slice(0, 6).map((user) => (
                                <div
                                    key={user.id}
                                    className='grid-item col-12 col-md-6 col-lg-4'
                                >
                                    <UserCard user={user} />
                                </div>
                            ))}
                        </div>
                    )}
                    {userError && <Alert variant='danger'>{userError}</Alert>}
                </div>
            </Container>
        </main>
    )
}

export default React.memo(Main)
