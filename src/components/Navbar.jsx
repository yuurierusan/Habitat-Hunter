import logo from '../assets/logo.png'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { CgDarkMode } from 'react-icons/cg'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center border-b h-[64px]'>
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
                <div className='bg-[#ff5a60] p-2 rounded-full mr-2 cursor-pointer'>
                    <FiSearch className=' text-white w-full' />
                </div>
            </div>
            <div className='flex items-center pr-3 font-semibold text-gray-600'>
                <p className='text-[17px]'>I'm Home</p>
                <div className='flex items-center mx-4 gap-1'>
                    <CgDarkMode className='' />
                </div>
                <div className='flex shadow-lg shadow-gray-300 items-center px-4 py-2 border rounded-full gap-2 bg-[#ff5a60] text-white font-bold hover:bg-[#fc8c90] duration-100 ease-in-out cursor-pointer'>
                    <FiMenu className='text-[19px]' />
                    <AiOutlineUser className='text-[22px]' />
                </div>
            </div>
        </div>
    )
}
export default Navbar
