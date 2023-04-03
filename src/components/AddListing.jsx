import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import Filters from '../components/Filters'

const AddListing = ({
    getAllListings,
    handleChange,
    handleUpload,
    percentage,
    imageURL,
}) => {
    let addListing = false
    const navigate = useNavigate()
    const [listing, setListing] = useState({})
    const [next, setNext] = useState(false)
    const [values, setValues] = useState({
        image: '',
        title: '',
        price: '',
        content: '',
        amenities: '',
    })

    const handleFormChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (addListing) {
            const res = await Client.put(`${BASE_URL}/listing/create`, {
                image: imageURL,
                title: values.title,
                price: values.price,
                content: values.content,
                amenities: values.amenities,
            })
            if (res.statusCode === 200) {
                setValues(true)
                setListing(res.data)
                percentage = 100
            }
        }
    }
    if (percentage === 100 && values.price && values.content) addListing = true

    return (
        <div>
            <div className='flex justify-center'>
                <form
                    className='space-y-14 divide-y divide-gray-200 w-1/2'
                    onSubmit={handleSubmit}>
                    <div className='space-y-8 divide-y divide-gray-200'>
                        <div className='py-14'>
                            <div>
                                <h3 className='text-4xl mb-5 font-semibold leading-6 text-gray-900'>
                                    Add your listing
                                </h3>
                                <p className='mt-1 text-sm text-gray-500'>
                                    Fill out the information about your home.
                                </p>
                            </div>

                            <div className='mt-6 grid grid-cols-1 gap-y-6'>
                                <div className='sm:col-span-3'>
                                    <label
                                        htmlFor='name'
                                        className='block text-md font-medium leading-6 text-gray-900'>
                                        Title
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            value={values.title}
                                            type='text'
                                            name='title'
                                            id='title'
                                            required
                                            autoComplete='given-title'
                                            onChange={handleFormChange}
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6'
                                        />
                                    </div>
                                </div>

                                <div className='sm:col-span-6'>
                                    <label
                                        htmlFor='description'
                                        className='block text-md font-medium leading-6 text-gray-900'>
                                        Description
                                    </label>
                                    <div className='mt-2'>
                                        <textarea
                                            value={values.content}
                                            name='content'
                                            id='content'
                                            required
                                            onChange={handleFormChange}
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6'
                                        />
                                    </div>
                                    <p className='mt-2 text-sm text-gray-500'>
                                        Please Describe your Home.
                                    </p>
                                </div>

                                <div className='sm:col-span-6'>
                                    <label
                                        htmlFor='price'
                                        className='block text-md font-medium leading-6 text-gray-900'>
                                        Asking Price
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            value={values.price}
                                            type='number'
                                            step='1'
                                            min='100_000'
                                            name='price'
                                            id='price'
                                            required
                                            onChange={handleFormChange}
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6'
                                        />
                                    </div>
                                    <p className='mt-2 text-sm text-gray-500'>
                                        What is Your Asking $Price?
                                    </p>
                                </div>

                                <div className='sm:col-span-6'>
                                    <div className='flex'>
                                        <label
                                            htmlFor='image'
                                            className='block text-md font-medium leading-6 text-gray-900 mr-4'>
                                            Upload an image of your home
                                        </label>
                                        <p>{percentage}% done</p>
                                    </div>
                                    <div className='mt-2'>
                                        <input
                                            type='file'
                                            onChange={handleChange}
                                            accept='/image/*'
                                        />
                                        <button
                                            className='ml-3 inline-flex justify-center rounded-md bg-red-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                                            onClick={handleUpload}>
                                            Upload image
                                        </button>
                                    </div>
                                </div>

                                <div className='sm:col-span-6'>
                                    {next ? (
                                        <Filters listing={listing} />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <div className='flex justify-end mb-40'>
                            {!next ? (
                                <>
                                    {!addListing ? (
                                        <button
                                            type='submit'
                                            className='ml-3 inline-flex justify-center rounded-md bg-slate-400 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'>
                                            Next
                                        </button>
                                    ) : (
                                        <button
                                            type='submit'
                                            className='ml-3 inline-flex justify-center rounded-md bg-red-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'>
                                            Next
                                        </button>
                                    )}
                                </>
                            ) : (
                                <button
                                    onClick={() => {
                                        getAllListings()
                                        navigate('/')
                                    }}
                                    className='ml-3 inline-flex justify-center rounded-md bg-red-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'>
                                    Done
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddListing
