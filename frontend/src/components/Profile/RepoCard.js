import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../../URI'

const RepoCard = (props) => {
    const { repo } = props
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        const getLanguages = async () => {
            try {
                const repoName = repo.name
                const { data } = await axios.get(
                    `${API}/api/users/repos/languages/${repo.owner.login}?repo=${repoName}`
                )
                setLanguages(Object.keys(data))
            } catch (error) {
                console.log(error.message)
            }
        }

        getLanguages()
    }, [repo])

    if (!repo) {
        return <div></div>
    }

    return (
        <div className='card text-white bg-primary'>
            <div className='card-body'>
                <h4 className='card-title'>{repo.name}</h4>
                <div className='card-text column'>
                    <p>{repo.description ? repo.description : ''}</p>
                    <a
                        href={repo.html_url}
                        rel='noreferrer'
                        target='_blank'
                        className='wrap text-white'
                    >
                        <h6>
                            <i className='fas fa-link white-icon'></i>
                            {repo.html_url}
                        </h6>
                    </a>
                </div>

                <div className='card-footer'>
                    {languages.map((x) => (
                        <div key={x} className='badge-box'>
                            <span className='badge bg-info rounded'>{x}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default React.memo(RepoCard)
