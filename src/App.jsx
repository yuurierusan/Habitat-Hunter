import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Listing from './Listing'

export default function App() {
    return (
        <div>
            <Navbar />
            <div>
                <Listing />
            </div>
            <Footer />
        </div>
    )
}
