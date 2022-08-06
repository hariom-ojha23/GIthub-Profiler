import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import AppBar from './components/AppBar'
import UserProvider from './contexts/userContext'

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <AppBar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/users/:id' element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}

export default App
