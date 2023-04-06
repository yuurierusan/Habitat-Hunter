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
                    className='text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    <svg
                        aria-hidden='true'
                        className='w-4 h-4'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fillRule='evenodd'
                            d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                            clipRule='evenodd'></path>
                    </svg>
                    <span className='sr-only'>Icon description</span>
                </button>
            </div>
        </>
    )
}

export default AddComment
