import { BsStarFill } from 'react-icons/bs'
// import { Link } from 'react-router-dom'
import Client from '../services/api'

const Listing = ({ image, title, price, creation_date }) => {
    const handleDelete = async (title) => {
        await Client.delete(`/listings/delete/${title}`)
    }
    return (
        <div>
            <div key={title} className='relative'>
                <div className='grad absolute w-full h-full rounded-b-[1.3rem]'></div>
                <div className='flex'>
                    <img
                        src={image}
                        alt=''
                        className='object-cover rounded-[1.3rem] sm:h-[17rem]  md:h-[13rem] w-full'
                    />
                    <div className='absolute text-white font-bold bottom-6 left-6 text-[22px] flex items-center gap-2'>
                        {title}
                        <span>&#x2022;</span>
                        <p className='text-[18px] text-slate-200'>${price}</p>
                    </div>
                </div>
            </div>
            <div className='pt-3 flex justify-between items-start'>
                <div>
                    <p className='max-w-[17rem] font-semibold text-[17px]'>
                        {title}
                    </p>
                    <p className='max-w-[17rem]  text-[16px] -mt-1 text-gray-500'>
                        {creation_date}
                    </p>
                    <p className='max-w-[17rem] font-semibold text-[17px]'>
                        ${price}
                    </p>
                </div>
                <div className='flex items-center space-x-1'>
                    <BsStarFill />
                    <p className='text-[15px]'>5.0</p>
                </div>
            </div>
        </div>
    )
}
export default Listing
