import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Listings from './components/Listings'
import FourOFour from './pages/404'
import ListingDetails from './pages/ListingDetails'

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
            <Navbar setUser={setUser} handleLogOut={handleLogOut} />
            <Routes>
                <Route path='/' element={<Listings />} />
                <Route
                    path='/listing/:id'
                    element={<ListingDetails user={user} />}
                />
                <Route path='*' element={<FourOFour />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
