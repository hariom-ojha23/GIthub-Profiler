import React, { useEffect, useState } from 'react'
import RepoCard from './RepoCard'

import Pagination from './Pagination'
import axios from 'axios'
import { API } from '../../URI'

const Repositories = (props) => {
    const [repos, setRepos] = useState(null)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [start, setStart] = useState(1)

    useEffect(() => {
        const getRepos = async (page) => {
            setLoading(true)
            try {
                const { data } = await axios.get(
                    `${API}/api/users/repos/${props.userData.login}?total=${props.userData.public_repos}&page=${page}&limit=6`
                )
                setRepos(data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error.message)
            }
        }

        getRepos(page)
    }, [page, props.userData])

    if (repos === null) {
        return <div></div>
    }

    return (
        <div className='p-4'>
            <h2>Repositories</h2>

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
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                </div>
            )}

            {!loading && (
                <React.Fragment>
                    <div className='mt-5 mb-3'>
                        <div className='row'>
                            {repos.results.map((x) => (
                                <div
                                    key={x.id}
                                    className=' col-12 col-md-6 grid-item align-items-stretch'
                                >
                                    <RepoCard repo={x} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='pagination-box'>
                        <Pagination
                            page={page}
                            setPage={setPage}
                            next={repos.next}
                            previous={repos.previous}
                            total={
                                props.userData.public_repos % 6 === 0
                                    ? props.userData.public_repos / 6
                                    : parseInt(
                                          props.userData.public_repos / 6
                                      ) + 1
                            }
                            start={start}
                            setStart={setStart}
                        />
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default Repositories
