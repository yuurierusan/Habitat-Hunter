import logo from '../assets/logo.png'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { BiWorld } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center border-b'>
            {/* left */}
            <div className='h-20 flex'>
                <img src={logo} className='object-cover -my-10' />
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
                <div className='bg-[#faa856e9]'>
                    <FiSearch />
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
