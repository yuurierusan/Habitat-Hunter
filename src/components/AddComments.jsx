import { useState } from 'react'
import Client from '../services/api'

const AddComment = ({ id }) => {
    const [values, setValues] = useState({
        content: '',
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
            const res = await Client.put('/comment/create', {
                content: values.content,
            })
            console.log(res.data)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <div className='flex'>
                <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'>
                    T
                </span>
                <input
                    name='content'
                    type='text'
                    id='content'
                    values={values.content}
                    onChange={handleFormChange}
                    className='rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Enter Comment Here'
                />
                <button
                    onClick={handleSubmit}
                    type='submit'
                    className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'>
                    Post Comment
                </button>
            </div>
        </>
    )
}

export default AddComment
