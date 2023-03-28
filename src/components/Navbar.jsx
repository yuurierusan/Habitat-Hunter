import logo from '../assets/logo.png'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { BiWorld } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='bg-yellow-300 flex justify-between items-center border-b h-[64px]'>
            {/* left */}
            <div className='bg-red-300 h-full flex items-center'>
                <img src={logo} className='object-contain -my-10 h-20' />
            </div>
            {/* middle */}
            <div className='flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full outline-0'>
                <input
                    type='search'
                    placeholder=''
                    className='py-2.5 w-[20rem] rounded-full'
                />
                <div className='absolute'>
                    <button>City</button>
                    <button>State</button>
                    <button>Family Size</button>
                </div>
                <div className='bg-[#ff385c] h-[32px] w-[32px] rounded-2xl items-center flex justify-center'>
                    <FiSearch className=' text-white' />
                </div>
            </div>
            {/* right */}
            <div className='flex items-center pr-3'>
                <p>Buy Home</p>
                <BiWorld />
                <div className='flex items-center'>
                    <FiMenu />
                    <AiOutlineUser />
                </div>
            </div>
        </div>
    )
}
export default Navbar
