import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Listings from './components/Listings'
import Switcher from './components/Switcher'

import FourOFour from './pages/404'

const App = () => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const handleLogOut = () => {
        setUser(null)
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('email')
        localStorage.removeItem('listings')
        navigate('/')
    }

    const checkToken = async () => {
        const user = await CheckSession()
        setUser(user)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            checkToken()
        }
    }, [])

    return (
        <div>
            <Routes>
                <Navbar />
                <div>
                    <Listings />
                </div>
                <div>
                    <Footer />
                </div>

                <Route path='*' element={<FourOFour />} />
            </Routes>
        </div>
    )
}

export default App
