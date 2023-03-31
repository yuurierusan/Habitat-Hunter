import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Listings from './components/Listings'
import Login from './components/Login'
export default function App() {
    return (
        <div>
            <Navbar />
            <div>
                <Login />
                <Listings />
            </div>
            <Footer />
        </div>
    )
}
