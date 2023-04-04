import Listing from './Listing'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'
import { Link } from 'react-router-dom'
import { storage } from '../firebase'
import { getDownloadURL, listAll } from 'firebase/storage'
import { GiTrashCan } from 'react-icons/gi'

const Listings = () => {
    const [imageList, setImageList] = useState([])
    const [listings, setListings] = useState([])
    // const imageListRef = ref(storage, 'images/')
    const getListings = async () => {
        const res = await axios.get(`${BASE_URL}/listings`)
        setListings(res.data)
    }

    const loadImageList = async () => {
        await getListings()
        // const res = await listAll(imageListRef)
        // for (const itemRef of res.items) {
        //     const url = await getDownloadURL(itemRef)
        //     setImageList((prev) => [...prev, url])
        // }
    }
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`${BASE_URL}/listings/${id}`)
            if (res.status === 200) {
                // Remove the deleted listing from the local state
                setListings((prevListings) =>
                    prevListings.filter((listing) => listing._id !== id)
                )
            }
        } catch (err) {
            console.error(err)
        }
    }

    const handleEdit = async (listingId) => {
        const updatedListing = {
            title: 'New title',
            content: 'New content',
            price: 1000,
            type: 'New type',
            icon: 'New icon',
            amenities: 'New amenities',
        }
        await axios.put(
            `${BASE_URL}/listing/update/${listingId}`,
            updatedListing
        )
    }

    useEffect(() => {
        loadImageList()
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
                            title={listing.title}
                            image={imageList.map((url) => {
                                return <img srv={url} alt='homes' />
                            })}
                            price={listing.price}
                        />
                        <GiTrashCan onClick={() => handleDelete(listing._id)} />
                        <button onClick={() => handleEdit(listing._id)}>
                            Edit Listing
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Listings
