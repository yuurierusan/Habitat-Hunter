import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../services/api'
import Comments from '../components/Comments'

const ListingDetails = () => {
    const { title } = useParams()
    const [listing, setListing] = useState({})

    const getListing = async () => {
        const res = await axios.get(`${BASE_URL}/listing/${title}`)
        setListing(res.data)
        console.log(res.data)
    }

    useEffect(() => {
        getListing()
    }, [])

    return (
        <div>
            <div>
                <img src={listing.image} alt='home' />
                <h1>{listing.title}</h1>
                <p>{listing.price}</p>
                <p>{listing.content}</p>
                <p>{listing.amenities}</p>
                <p>{listing.type}</p>
            </div>
            <div>
                <Comments />
            </div>
        </div>
    )
}
export default ListingDetails
