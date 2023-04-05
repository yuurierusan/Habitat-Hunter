import logo from '../assets/HabitatHunter.png'
import { BiUserCircle } from 'react-icons/bi'
import Login from './Login'
import AddListing from './AddListing'
import { useState } from 'react'
import Register from './Register'

const Navbar = ({ setUser, handleLogOut }) => {
    const [loginFormState, setLoginFormState] = useState(false)
    const [addListingFormState, setAddListingFormState] = useState(false)
    const [selectedFormState, setSelectedFormState] = useState(true)
    const [registerFormState, setRegisterFormState] = useState(false)

    const toggleLoginForm = () => {
        setSelectedFormState(!selectedFormState)
    }
    const toggleLogin = () => {
        setLoginFormState(!loginFormState)
    }
    const toggleRegister = () => {
        setRegisterFormState(!registerFormState)
    }

    const toggleAddListing = () => {
        setAddListingFormState(!addListingFormState)
    }
    return (
        <nav className='bg-white border-gray-200 dark:bg-gray-900'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                {selectedFormState === 1 && loginFormState && (
                    <Login
                        toggleLogin={toggleLogin}
                        toggleLoginForm={toggleLoginForm}
                        setUser={setUser}
                    />
                )}
                {selectedFormState === 2 && registerFormState && (
                    <Register
                        toggleLoginForm={toggleLoginForm}
                        toggleRegister={toggleRegister}
                    />
                )}

                {addListingFormState && (
                    <AddListing toggleAddListing={toggleAddListing} />
                )}
                <a href='/' className='flex items-center'>
                    <img
                        src={logo}
                        className='h-8 mr-3'
                        alt='Habitat Hunter Logo'
                    />
                    <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                        HabitatHunter
                    </span>
                </a>
                <div className='flex items-center md:order-2'>
                    <button
                        type='button'
                        className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
                        id='user-menu-button'
                        aria-expanded='false'
                        data-dropdown-toggle='user-dropdown'
                        data-dropdown-placement='bottom'>
                        <span className='sr-only'>Open user menu</span>
                        <BiUserCircle className='w-8 h-8 rounded-full' />
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div
                        className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
                        id='user-dropdown'>
                        <div className='px-4 py-3'>
                            <span className='block text-sm text-gray-900 dark:text-white'>
                                Guest
                            </span>
                            <span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
                                guest@habitathunter.com
                            </span>
                        </div>
                        <ul className='py-2' aria-labelledby='user-menu-button'>
                            <li>
                                <a
                                    href='/'
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                    aria-current='page'>
                                    Listings
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        toggleRegister()
                                        setSelectedFormState(2)
                                        toggleLogin()
                                    }}
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                                    Sign Up
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        setSelectedFormState(1)
                                        toggleLogin()
                                    }}
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                                    Log In
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => toggleAddListing()}
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                                    Sell Your Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleLogOut()}
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                                    Log out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
