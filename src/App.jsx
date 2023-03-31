import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Listings from './components/Listings'
export default function App() {
    return (
        <div>
            <Navbar />
            <div>
                <Listings />
            </div>
            <Footer />
        </div>
    )
}
