import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import Comments from '../components/Comments'

const ListingDetails = ({ user }) => {
    const { id } = useParams()
    const [listing, setListing] = useState({})
    const [comments, setComments] = useState([])
    const [newTitle, setNewTitle] = useState('')
    const [deleteTitle, setDeleteTitle] = useState('')
    const getListing = async () => {
        try {
            const res = await Client.get(`/listing/${id}`)
            setListing(res.data)
        } catch (error) {
            throw error
        }
    }
    const updateListing = async (newTitle) => {
        try {
            const res = await Client.put(
                `/listing/update/${id}`,
                {
                    title: newTitle,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            setListing(res.data)
        } catch (error) {
            throw error
        }
    }
    const handleDelete = async () => {
        try {
            const res = await Client.delete(`/listing/delete/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            // Refresh the listing data
            getListing()
        } catch (error) {
            throw error
        }
    }

    const handleInputChange = (event) => {
        setDeleteTitle(event.target.value)
    }

    const getComments = async () => {
        try {
            const res = await Client.get(`/comments`)
            setComments(Object.values(res.data))
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getListing()
        getComments()
    }, [])

    return (
        <div className='p-8'>
            <div className='flex flex-col items-center mb-8'>
                <img src={listing.image} alt='home' className='mb-4' />
                <h1 className='text-2xl font-bold mb-2'>{listing.title}</h1>
                <p className='mb-2'>${listing.price} per night</p>
                <p className='mb-2'>{listing.content}</p>
                <p className='mb-2'>{listing.amenities}</p>
                <p className='mb-2'>{listing.type}</p>
            </div>
            <div className='mb-8'>
                <h2 className='text-xl font-bold mb-2'>Comments:</h2>
                {comments.map((comment) => (
                    <div
                        key={comment._id}
                        className='border-b border-gray-300 mb-2 pb-2'>
                        <h3 className='font-bold'>{comment.title}</h3>
                        <p>{comment.content}</p>
                    </div>
                ))}
            </div>
            <div className='mb-8'>
                <input
                    type='text'
                    placeholder='New Title'
                    onChange={(e) => setNewTitle(e.target.value)}
                    className='border border-gray-400 rounded py-2 px-4 mb-2'
                />
                <button
                    onClick={() => updateListing(newTitle)}
                    className='bg-[#00A2BB] hover:bg-blue-300 text-white font-bold py-2 px-4 rounded'>
                    Update Listing
                </button>
            </div>
            <div className='mb-8'>
                <input
                    type='text'
                    placeholder='Enter title to delete'
                    onChange={handleInputChange}
                    className='border border-gray-400 rounded py-2 px-4 mb-2'
                />
                <button
                    onClick={handleDelete}
                    className='bg-[#00A2BB] hover:bg-blue-300 text-white font-bold py-2 px-4 rounded'>
                    Delete Listing
                </button>
            </div>
        </div>
    )
}
export default ListingDetails
