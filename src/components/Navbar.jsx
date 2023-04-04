import logo from '../assets/HabitatHunter.png'
import { BiUserCircle } from 'react-icons/bi'
import Login from './Login'
import AddListing from './AddListing'
import { useState } from 'react'
import Register from './Register'

const Navbar = ({ setUser }) => {
    const [loginFormState, setLoginFormState] = useState(false)
    const [addListingFormState, setAddListingFormState] = useState(false)
    const [selectedFormState, setSelectedFormState] = useState(true)
    const toggleLoginForm = () => {
        setSelectedFormState(!selectedFormState)
    }
    const toggleLogin = () => {
        setLoginFormState(!loginFormState)
    }
    const toggleAddListing = () => {
        setAddListingFormState(!addListingFormState)
    }
    return (
        <nav class='bg-white border-gray-200 dark:bg-gray-900'>
            <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                {selectedFormState && loginFormState && (
                    <Login
                        toggleLogin={toggleLogin}
                        toggleLoginForm={toggleLoginForm}
                        setUser={setUser}
                    />
                )}
                {selectedFormState === false && loginFormState && (
                    <Register toggleLoginForm={toggleLoginForm} />
                )}
                {addListingFormState && (
                    <AddListing toggleAddListing={toggleAddListing} />
                )}
                <a href='/' class='flex items-center'>
                    <img
                        src={logo}
                        class='h-8 mr-3'
                        alt='Habitat Hunter Logo'
                    />
                    <span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                        HabitatHunter
                    </span>
                </a>
                <div class='flex items-center md:order-2'>
                    <button
                        type='button'
                        class='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
                        id='user-menu-button'
                        aria-expanded='false'
                        data-dropdown-toggle='user-dropdown'
                        data-dropdown-placement='bottom'>
                        <span class='sr-only'>Open user menu</span>
                        <BiUserCircle class='w-8 h-8 rounded-full' />
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div
                        class='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
                        id='user-dropdown'>
                        <div class='px-4 py-3'>
                            <span class='block text-sm text-gray-900 dark:text-white'>
                                Guest
                            </span>
                            <span class='block text-sm  text-gray-500 truncate dark:text-gray-400'>
                                guest@habitathunter.com
                            </span>
                        </div>
                        <ul class='py-2' aria-labelledby='user-menu-button'>
                            <li>
                                <a
                                    href='#'
                                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                                    Sign Up
                                </a>
                            </li>
                            <li>
                                <a
                                    href=''
                                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                                    Login In
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                                    Sell Your Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                                    Log out
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button
                        data-collapse-toggle='mobile-menu-2'
                        type='button'
                        class='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        aria-controls='mobile-menu-2'
                        aria-expanded='false'>
                        <span class='sr-only'>Open main menu</span>
                        <svg
                            class='w-6 h-6'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fill-rule='evenodd'
                                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                                clip-rule='evenodd'></path>
                        </svg>
                    </button>
                </div>
                <div
                    class='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
                    id='mobile-menu-2'>
                    <ul class='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                        <li>
                            <a
                                href='/'
                                class='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                                aria-current='page'>
                                Listings
                            </a>
                        </li>
                        <li>
                            <button
                                // onClick={}
                                class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => toggleAddListing()}
                                class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                                Add Listing
                            </button>
                        </li>
                        <li>
                            <button
                                // onClick={}
                                class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                                Pricing
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    toggleLogin()
                                    setSelectedFormState(1)
                                }}
                                class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                                Sell Home
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
