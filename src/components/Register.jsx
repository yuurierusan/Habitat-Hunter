import { RegisterUser } from '../services/Auth.jsx'
import { useState } from 'react'

const Register = ({ toggleLoginForm }) => {
    const initialState = {
        name: '',
        email: '',
        password: '',
    }
    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        if (
            formState.name &&
            formState.email &&
            formState.password &&
            formState.passwordConfirm
        ) {
            if (formState.password === formState.passwordConfirm) {
                try {
                    await RegisterUser({
                        name: formState.name,
                        email: formState.email,
                        password: formState.password,
                    })
                } catch (err) {
                    throw err
                }
            }
        }
        setFormState({ name: '', email: '', password: '', passwordConfirm: '' })
        toggleLoginForm()
    }

    return (
        <div className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl z-10 bg-white border-2 border-gray-100 m-auto left-0 right-0 bottom-[25%] absolute'>
            <h1 className='text-5xl font-semibold'>
                Register for Habitat Hunter
            </h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Register</p>
            <div className='mt-8'>
                <div>
                    <input type='hidden' name='remember' defaultValue='true' />
                    <label className='text-lg font-medium'>Name</label>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        value={formState.name}
                        onChange={handleChange}
                        autoComplete='name'
                        required
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Name'
                    />
                </div>

                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your email'
                    />
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-lg font-medium'>Password</label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        value={formState.password}
                        onChange={handleChange}
                        autoComplete='current-password'
                        required
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Password'
                    />
                    <label className='text-lg font-medium'>
                        Confirm Password
                    </label>

                    <input
                        id='passwordConfirm'
                        name='passwordConfirm'
                        type='password'
                        value={formState.passwordConfirm}
                        onChange={handleChange}
                        autoComplete='current-password'
                        required
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Confirm Password'
                    />
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button
                        onClick={() => handleSubmit()}
                        className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-[#00A2BB] rounded-xl text-white font-bold text-lg'>
                        Register
                    </button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Have an account?</p>
                    <button
                        onClick={() => toggleLoginForm()}
                        className='ml-2 font-medium text-base text-[#00A2BB]'>
                        Log in
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register
