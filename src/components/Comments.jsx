import { useState } from 'react'
import Client from '../services/api'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../services/api'

const Comments = (props) => {
    let { title } = useParams()

    const [toggleAddingComment, setToggleAddingComment] = useState(false)

    const [formValues, setFormValues] = useState({
        content: '',
        title: '',
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await Client.post(`${BASE_URL}/comment/create`, formValues)
        setFormValues({ title: '', content: '' })
        await props.getListing()
    }

    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-2xl py-0 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'>
                <h2 id='reviews-heading' className='sr-only'>
                    Recent Visitors
                </h2>
                <h2 className='text-lg font-medium text-gray-900 pb-4'>
                    Thoughts
                </h2>

                <div className='space-y-10 pb-4'>
                    {comments.map((comment) => (
                        <div
                            key={comment.title}
                            className='flex flex-col sm:flex-row'>
                            <div className='order-2 mt-6 sm:mt-0 sm:ml-16'>
                                <div
                                    className='mt-3 space-y-6 text-base text-gray-600'
                                    dangerouslySetInnerHTML={{
                                        __html: comment.content,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {!toggleAddingComment && props.user && (
                    <button
                        type='button'
                        className='flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-[#00A2BB] py-3 px-8 text-base font-medium text-white hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-[#00A2BB] focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full mb-3'
                        onClick={() => setToggleAddingComment(true)}>
                        Post a Comment
                    </button>
                )}

                {toggleAddingComment && (
                    <form onSubmit={handleSubmit}>
                        <textarea
                            className='bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00A2BB] focus:border-[#00A2BB] block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-300 dark:focus:border-blue-300'
                            placeholder='Write a comment'
                            type='text'
                            name='content'
                            id='content'
                            value={formValues.content}
                            onChange={handleChange}
                        />
                        <button
                            className='flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-[#00A2BB] py-3 px-8 text-base font-medium text-white hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-[#00A2BB]focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full my-3'
                            type='submit'>
                            Submit
                        </button>
                        <button
                            className='flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-[#000000] py-3 px-8 text-base font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full mb-3'
                            type='reset'
                            onClick={() => setToggleAddingComment(false)}>
                            Cancel
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Comments
