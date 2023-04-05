import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Listings from './components/Listings'
import FourOFour from './pages/404'
import ListingDetails from './pages/ListingDetails'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const App = () => {
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const firebaseConfig = initializeApp({
        apiKey: 'AIzaSyBuP-TFZO0yQk3qHp8t77DutLDH4DPMomw',
        authDomain: 'habitat-hunter.firebaseapp.com',
        projectId: 'habitat-hunter',
        storageBucket: 'habitat-hunter.appspot.com',
        messagingSenderId: '1051380367603',
        appId: '1:1051380367603:web:dc22f540b24fd23d79b786',
        measurementId: 'G-C0N8CZRPE1',
    })

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
            <Navbar setUser={setUser} />
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
