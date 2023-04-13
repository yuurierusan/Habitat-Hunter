import { useState } from 'react'
import Client from '../services/api'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    uploadBytesResumable,
} from 'firebase/storage'
import { storage } from '/firebase'
import { v4 } from 'uuid'

const AddListing = () => {
    const [values, setValues] = useState({
        image: '',
        title: '',
        price: '',
        content: '',
        amenities: '',
    })

    const [imageUpload, setImageUpload] = useState(null)
    const imagesListRef = ref(storage, 'images/')
    const [progress, setProgress] = useState(0)
    const [imageURL, setImageURL] = useState([])
    //function to upload image to firebase
    const uploadFile = async () => {
        if (imageUpload == null) return

        const imageRef = ref(storage, `images/${imageUpload.name} ${v4()}`)
        try {
            const snapshot = await uploadBytesResumable(imageRef, imageUpload, {
                onProgress: (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    )
                    console.log(`Upload is ${progress}% done`)
                    //state variable with the percentage value
                    setProgress(progress)
                },
            })
        } catch (error) {
            throw error
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setImageUpload(file)
    }

    const handleFormChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            //upload image
            await uploadFile()
            console.log('image uploaded')
            //send data to server
            const res = await Client.put(`/api/listings/create`, {
                image: imageURL[0],
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
                                type='text'
                                name='price'
                                id='price'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                placeholder='$'
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
                                type='text'
                                name='content'
                                id='content'
                                rows='8'
                                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                placeholder='Your description here'></textarea>
                        </div>
                    </div>

                    <label
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        htmlFor='file_input'>
                        Upload file
                    </label>
                    <input
                        className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                        aria-describedby='file_input_help'
                        id='image'
                        name='image'
                        type='file'
                        onChange={handleFileChange}
                        values={values.image}
                    />
                    <p
                        className='mt-1 text-sm text-gray-500 dark:text-gray-300'
                        id='file_input_help'>
                        SVG, PNG, JPG or GIF (MAX. 800x400px).
                    </p>
                    {progress > 0 && <p>Uploading: {progress}%</p>}
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
