import Register from './Register'
import { SignInUser } from '../services/Auth'
import { useState } from 'react'

const Login = ({ toggleLogin, toggleLoginForm, setUser }) => {
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

    const handleSubmit = async (e) => {
        if (e.target.name === 'guest') {
            try {
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
        <div className='flex justify-center items-center min-h-screen z-10'>
            {toggleLogin ? (
                <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100 m-auto left-0 right-0 bottom-[25%] absolute'>
                    <h1 className='text-5xl font-semibold'>
                        Welcome to Habitat Hunter
                    </h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>
                        Log in
                    </p>
                    <div className='mt-8'>
                        <div className='flex flex-col'>
                            <label
                                htmlFor='email'
                                className='text-lg font-medium'>
                                Email
                            </label>
                            <input
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                id='email'
                                name='email'
                                type='email'
                                value={formState.email}
                                onChange={handleChange}
                                autoComplete='email'
                                required
                                placeholder='Enter your email'
                            />
                        </div>
                        <div className='flex flex-col mt-4'>
                            <label className='text-lg font-medium'>
                                Password
                            </label>
                            <input
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                id='password'
                                name='password'
                                type='password'
                                value={formState.password}
                                onChange={handleChange}
                                autoComplete='current-password'
                                required
                                placeholder='Enter your password'
                            />
                        </div>
                        <div className='mt-8 flex justify-between items-center'>
                            <div>
                                <input type='checkbox' id='remember' />
                                <label
                                    className='ml-2 font-medium text-base'
                                    htmlFor='remember'>
                                    Remember me
                                </label>
                            </div>
                            <button className='font-medium text-base text-[#00A2BB]'>
                                Forgot password
                            </button>
                        </div>
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button
                                onClick={(e) => handleSubmit(e)}
                                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-[#00A2BB] rounded-xl text-white font-bold text-lg'>
                                Log in
                            </button>
                            <button
                                onClick={(e) => handleSubmit(e)}
                                name='guest'
                                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-[#00A2BB] rounded-xl text-white font-bold text-lg'>
                                Log in as Guest
                            </button>
                            <div className='mt-8 flex justify-center items-center'>
                                <p className='font-medium text-base'>
                                    Don't have an account?
                                </p>
                                <button
                                    onClick={() => toggleLoginForm()}
                                    className='ml-2 font-medium text-base text-[#00A2BB]'>
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Register toggleLogin={toggleLogin} />
            )}
        </div>
    )
}

export default Login
