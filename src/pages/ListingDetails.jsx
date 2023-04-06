import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import Comments from '../components/Comments'
import { useNavigate } from 'react-router-dom'
import UpdateListing from '../components/UpdateListing'

const ListingDetails = ({ user }) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [updateFormState, setUpdateFormState] = useState(false)
    const [listing, setListing] = useState({})
    const [comments, setComments] = useState([])
    const getListing = async () => {
        try {
            const res = await Client.get(`/listing/${id}`)
            setListing(res.data)
        } catch (error) {
            throw error
        }
    }
    const toggleUpdateForm = () => {
        setUpdateFormState(!updateFormState)
    }

    const handleDelete = async () => {
        try {
            const res = await Client.delete(`/listing/delete/${id}`, {
                image: '',
                title: '',
                price: '',
                amenities: '',
                content: '',
            })
            navigate('/')
            // Refresh the listing data
        } catch (error) {
            throw error
        }
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
            {updateFormState && (
                <UpdateListing
                    id={listing._id}
                    toggleUpdateForm={toggleUpdateForm}
                />
            )}
            <div className='flex flex-col items-center mb-8'>
                <img src={listing.image} alt='home' className='mb-4' />
                <h1 className='text-2xl font-bold mb-2'>{listing.title}</h1>
                <h2 className='text-xl font-bold mb-2'>Asking Price:</h2>
                <p className='mb-2'>${listing.price}</p>
                <h2 className='text-xl font-bold mb-2'>Description:</h2>
                <p className='mb-2'>{listing.content}</p>
                <h2 className='text-xl font-bold mb-2'>Amenities:</h2>
                <p className='mb-2'>{listing.amenities}</p>
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
                <button
                    onClick={toggleUpdateForm}
                    className='bg-[#00A2BB] hover:bg-blue-300 text-white font-bold py-2 px-4 rounded'>
                    Update Listing
                </button>
            </div>
            <div className='mb-8'>
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
