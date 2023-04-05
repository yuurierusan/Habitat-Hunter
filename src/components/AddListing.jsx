import { useState } from 'react'
import Client from '../services/api'

const AddListing = () => {
    const [listing, setListing] = useState({})
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
        try {
            const res = await Client.put(`/listing/create`, {
                title: values.title,
                price: values.price,
                content: values.content,
                amenities: values.amenities,
            })
            console.log(res.data)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <section className='bg-white dark:bg-gray-900'>
            <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
                <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'></h2>
                <form action='#'>
                    <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                        <div className='sm:col-span-2'>
                            <label
                                htmlFor='name'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                Title
                            </label>
                            <input
                                values={values.title}
                                onChange={handleFormChange}
                                autoComplete='given-title'
                                type='text'
                                name='title'
                                id='title'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                placeholder='Title'
                                required=''
                            />
                        </div>
                        <div className='w-full'>
                            <label
                                htmlFor='brand'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                Amenities
                            </label>
                            <input
                                values={values.amenities}
                                onChange={handleFormChange}
                                autoComplete='given-amenities'
                                type='text'
                                name='amenities'
                                id='amenities'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                placeholder='Amenities'
                                required=''
                            />
                        </div>
                        <div className='w-full'>
                            <label
                                htmlFor='price'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                Price
                            </label>
                            <input
                                values={values.price}
                                onChange={handleFormChange}
                                autoComplete='given-price'
                                type='number'
                                name='price'
                                id='price'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                placeholder='$290990'
                                required=''
                            />
                        </div>
                        <div className='sm:col-span-2 mb-2'>
                            <label
                                htmlFor='description'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                Description
                            </label>
                            <textarea
                                values={values.content}
                                onChange={handleFormChange}
                                autoComplete='given-content'
                                id='description'
                                rows='8'
                                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                placeholder='Your description here'></textarea>
                        </div>
                    </div>

                    <div className='flex items-center justify-center w-full'>
                        <label
                            htmlFor='dropzone-file'
                            className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'>
                            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                                <svg
                                    aria-hidden='true'
                                    className='w-10 h-10 mb-3 text-gray-400'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>
                                </svg>
                                <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                                    <span className='font-semibold'>
                                        Click to upload
                                    </span>{' '}
                                    or drag and drop
                                </p>
                                <p className='text-xs text-gray-500 dark:text-gray-400'>
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input
                                id='dropzone-file'
                                type='file'
                                className='hidden'
                            />
                        </label>
                    </div>

                    <button
                        onClick={handleSubmit}
                        type='submit'
                        className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'>
                        Add Listing
                    </button>
                </form>
            </div>
        </section>
    )
}

export default AddListing
