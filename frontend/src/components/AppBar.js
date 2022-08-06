import React from 'react'
import { Container } from 'react-bootstrap'

const AppBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Container>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='/'>
                        GitHub Profiler
                    </a>
                </div>
            </Container>
        </nav>
    )
}

export default AppBar
