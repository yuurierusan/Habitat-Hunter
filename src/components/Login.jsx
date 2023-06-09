import { SignInUser } from '../services/Auth'
import { useState } from 'react'

const Login = ({ toggleLogin, setUser }) => {
    const intialState = {
        email: '',
        password: '',
    }
    const [formState, setFormState] = useState(intialState)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setError('')
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }
    const handleGuestLogin = async (e) => {
        if (e.target.name === 'guest') {
            try {
                setFormState({ email: '', password: '' })
                const payload = await SignInUser({
                    email: 'guest@habitathunter.com',
                    password: 'guest',
                })
                if (JSON.stringify(payload.code) === '"ERR_BAD_REQUEST"') {
                    setError('Looks like your login details are incorrect')
                } else {
                    setUser(payload)
                }
                toggleLogin()
            } catch (e) {
                throw e
            }
        }
    }

    const handleSubmit = async (e) => {
        if (formState.email && formState.password) {
            try {
                const payload = await SignInUser(formState)
                if (JSON.stringify(payload.code) === '"ERR_BAD_REQUEST"') {
                    setError('Looks like your login details are incorrect')
                } else {
                    setUser(payload)
                }
                toggleLogin()
            } catch (e) {
                throw e
            }
        }
        setFormState({ email: '', password: '' })
    }

    return (
        <div>
            <section className='bg-gray-50 dark:bg-gray-900'>
                <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                    <a
                        href='#'
                        className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
                        <img
                            className='w-8 h-8 mr-2'
                            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
                            alt='logo'
                        />
                        Welcome Back!
                    </a>
                    <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                                Log in to your account
                            </h1>
                            <form className='space-y-4 md:space-y-6' action='#'>
                                <div>
                                    <label
                                        htmlFor='email'
                                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                        Your email
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        value={formState.email}
                                        type='email'
                                        name='email'
                                        id='email'
                                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                        placeholder='name@company.com'
                                        required=''
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='password'
                                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                        Password
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        value={formState.password}
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='••••••••'
                                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                        required=''
                                    />
                                </div>
                                <div className='flex items-start'>
                                    <div className='flex items-center h-5'>
                                        <input
                                            id='terms'
                                            aria-describedby='terms'
                                            type='checkbox'
                                            className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                                            required=''
                                        />
                                    </div>
                                    <div className='ml-3 text-sm'>
                                        <label
                                            htmlFor='terms'
                                            className='font-light text-gray-500 dark:text-gray-300'>
                                            I'm not a{' '}
                                            <a
                                                className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                                                href='#'>
                                                robot or AI
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    type='submit'
                                    className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                                    Login
                                </button>
                                <button
                                    onClick={handleGuestLogin}
                                    name='guest'
                                    type='submit'
                                    className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                                    Login as Guest
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
