import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import Types from './Types'
import { storage } from '../firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

const AddListing = ({
    toggleAddListing,
    getAllListings,
    percent,
    imageURL,
}) => {
    let addListing = false
    const [imageUpload, setImageUpload] = useState(null)
    const [listing, setListing] = useState({})
    const [next, setNext] = useState(false)
    const [values, setValues] = useState({
        image: '',
        icons: '',
        type: '',
        title: '',
        price: '',
        content: '',
        amenities: '',
    })
    const uploadImage = async () => {
        if (imageUpload == null) return

        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        const snapshot = await uploadBytes(imageRef, imageUpload)
        const url = await getDownloadURL(snapshot.ref)

        setImageList((prev) => [...prev, url])
    }

    const handleFormChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }
    console.log(values)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (addListing) {
            const res = await Client.put(`${BASE_URL}/listing/create`, {
                image: imageURL,
                title: values.title,
                price: values.price,
                content: values.content,
                icons: values.icons,
                type: values.type,
                amenities: values.amenities,
            })
            if (res.statusCode === 200) {
                setNext(true)
                setListing(res.data)
                percent = 100
            }
        }
    }
    if (values.price && values.content) addListing = true

    return (
        <div className=' w-11/12 max-w-[700px] px-10 py-5 rounded-3xl bg-white border-2 border-gray-100 m-auto left-0 right-0 bottom-[10%] absolute z-10'>
            <div className='flex justify-center'>
                <form
                    className='space-y-14 divide-y divide-gray-200 w-1/2'
                    onSubmit={handleSubmit}>
                    <div className='space-y-8 divide-y divide-gray-200'>
                        <div className='py-14'>
                            <div>
                                <h3 className='text-4xl mb-6 font-semibold leading-9 text-gray-900'>
                                    Give us details about your home
                                </h3>
                                <p className='mt-1 text-sm text-gray-500'>
                                    Fill out form below
                                </p>
                            </div>

                            <div className='mt-6 grid grid-cols-1 gap-y-6'>
                                <div className='sm:col-span-3'>
                                    <label
                                        htmlFor='title'
                                        className='block text-md font-medium leading-6 text-gray-900'>
                                        Title
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                            id='title'
                                            type='text'
                                            name='title'
                                            value={values.title}
                                            required
                                            onChange={handleFormChange}
                                            autoComplete='given-title'
                                            placeholder='Title'
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
                                        <input
                                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                            id='content'
                                            type='text'
                                            name='content'
                                            value={values.content}
                                            required
                                            onChange={handleFormChange}
                                            autoComplete='given-content'
                                            placeholder='Description'
                                        />
                                    </div>
                                    <p className='mt-2 text-sm text-gray-500'>
                                        Please describe your home
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
                                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                            id='price'
                                            type='text'
                                            name='price'
                                            value={values.price}
                                            required
                                            onChange={handleFormChange}
                                            autoComplete='given-price'
                                            placeholder='$ 100,000 USD'
                                        />
                                    </div>
                                    <p className='mt-2 text-sm text-gray-500'>
                                        This can always be adjusted later
                                    </p>
                                </div>

                                <div className='sm:col-span-6'>
                                    <div className='flex'>
                                        <label
                                            htmlFor='image'
                                            className='block text-md font-medium leading-6 text-gray-900 mr-4'>
                                            Upload your images here
                                        </label>
                                        <p>{percent}% done</p>
                                    </div>
                                    <div className='mt-2'>
                                        <input
                                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                            type='file'
                                            onChange={handleFormChange}
                                            accept='/image/*'
                                        />
                                        <button
                                            onClick={() => uploadImage()}
                                            className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-[#00A2BB] rounded-xl text-white font-bold text-lg'>
                                            Upload image
                                        </button>
                                    </div>
                                </div>

                                <div className='sm:col-span-6'>
                                    {next ? <Types listing={listing} /> : null}
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
                                            className='ml-3 inline-flex justify-center rounded-md bg-slate-400 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00A2BB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A2BB]'>
                                            Next
                                        </button>
                                    ) : (
                                        <button
                                            type='submit'
                                            className='ml-3 inline-flex justify-center rounded-md bg-[#00A2BB] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00A2BB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A2BB]'>
                                            Next
                                        </button>
                                    )}
                                </>
                            ) : (
                                <button
                                    onClick={() => {
                                        getAllListings()
                                        toggleAddListing()
                                    }}
                                    className='ml-3 inline-flex justify-center rounded-md bg-[#00A2BB] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A2BB]'>
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
