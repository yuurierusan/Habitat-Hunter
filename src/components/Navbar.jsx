import logo from '../assets/HabitatHunter.png'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { CgDarkMode } from 'react-icons/cg'
import Login from './Login'
import { useState } from 'react'

const Navbar = () => {
    const [formState, setFormState] = useState(false)
    const togglepopup = () => {
        setFormState(!formState)
    }
    return (
        <div className='flex justify-between items-center border-b h-[64px]'>
            {formState && <Login togglepopup={togglepopup} />}
            <div className='h-full flex items-center'>
                <img src={logo} className='object-contain -my-10 h-20' />
            </div>
            <div className='flex lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full outline-0'>
                <input
                    type='search'
                    placeholder=''
                    className='py-2.5 w-[20rem] rounded-full'
                />
                <div className='flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-500'>
                    <button className='w-full '>City</button>
                    <button className='border-l border-x px-6 '>State</button>
                    <button className='w-full pl-4 text-gray-600/60'>
                        Family Size
                    </button>
                </div>
                <div className='bg-[#00A2BB] p-2 rounded-full mr-2 cursor-pointer'>
                    <FiSearch className=' text-white w-full cursor-pointer' />
                </div>
            </div>
            <div className='flex items-center pr-3 px-4 py-2 font-semibold text-gray-600'>
                <p className='flex shadow-gray-300 items-center px-4 py-2 border rounded-full gap-2 text-gray-500 font-bold hover:bg-gray-300 duration-100 ease-in-out cursor-pointer'>
                    Sell Home
                </p>
                <div className='flex items-center px-2 py-2 rounded-full hover:bg-gray-300 items-center mx-4 gap-2'>
                    <CgDarkMode className='text-[22px] cursor-pointer' />
                </div>
                <div
                    onClick={() => togglepopup()}
                    className='flex shadow-lg shadow-gray-300 items-center px-4 py-2 border rounded-full gap-2 bg-[#00A2BB] text-white font-bold hover:bg-blue-300 duration-100 ease-in-out cursor-pointer'>
                    <FiMenu className='text-[19px]' />
                    <AiOutlineUser className='text-[22px]' />
                </div>
            </div>
        </div>
    )
}
export default Navbar
