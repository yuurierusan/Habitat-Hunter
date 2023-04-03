import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
    const icons = [
        <Link
            to='https://twitter.com/yuurierusan'
            target='_blank'
            rel='noopener noreferrer'>
            <BsTwitter />
        </Link>,
        <Link
            to='https://instagram.com/yuurierusan'
            target='_blank'
            rel='noopener noreferrer'>
            <BsInstagram />
        </Link>,
        <Link
            to='https://github.com/yuurierusan'
            target='_blank'
            rel='noopener noreferrer'>
            <BsGithub />
        </Link>,
        ,
    ]
    return (
        <div className='bg-white border-t-2 shadow-md  shadow-gray-300 sticky bottom-0 h-20 w-full flex items-center justify-center gap-6'>
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className='text-[30px] text-gray-600 hover:text-black duration-100 ease-out '>
                    {icon}
                </div>
            ))}
        </div>
    )
}

export default Footer
