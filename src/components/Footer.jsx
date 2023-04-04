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
        <footer className='fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600'>
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className='text-[30px] text-gray-600 hover:text-black duration-100 ease-out '>
                    {icon}
                </div>
            ))}
        </footer>
    )
}
export default Footer
