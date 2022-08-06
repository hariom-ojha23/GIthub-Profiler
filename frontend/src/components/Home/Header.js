import React from 'react'
import { Container, Button } from 'react-bootstrap'

const Header = (props) => {
    return (
        <header className='p-2 home-header'>
            <Container>
                <form
                    name='search-form'
                    className='container search-form'
                    onSubmit={(e) => {
                        e.preventDefault()
                        props.searchUser(e.target.username.value)
                    }}
                >
                    <input
                        type='text'
                        className='form-control'
                        id='username'
                        name='username'
                        placeholder='Enter User Name'
                    />
                    <Button className='btn btn-danger' type='submit'>
                        {props.searching ? 'Searching...' : 'Search'}
                    </Button>
                </form>
            </Container>
        </header>
    )
}

export default Header
