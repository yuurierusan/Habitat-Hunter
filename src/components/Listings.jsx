import Listing from './Listing'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Client from '../services/api'

const Listings = () => {
    const [listings, setListings] = useState([])

    const getListings = async () => {
        const res = await Client.get(`/listings`)
        setListings(res.data)
    }

    useEffect(() => {
        getListings()
    }, [])

    return (
        <div className='py-3 sm:py-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {listings.map((listing) => (
                    <Link
                        key={listing._id}
                        to={`/listing/${listing._id}`}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Listing
                            key={listing._id}
                            image={listing.image}
                            title={listing.title}
                            price={listing.price}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Listings
