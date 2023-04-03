import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import {
    GiFishingBoat,
    GiMineExplosion,
    GiMountainCave,
    GiBeachBucket,
    GiCity,
    GiRuralHouse,
    GiFamilyHouse,
    GiRetirement,
    GiVacation,
    GiLuxury,
    GiAffordableHousing,
    GiSmallHouse,
} from 'react-icons/gi'
import { RiAliensFill } from 'react-icons/ri'
import { ImKey } from 'react-icons/im'
import { BsFillTreeFill } from 'react-icons/bs'

const Types = ({ listing }) => {
    const sorting = [
        { title: 'Lake Front', icon: <GiFishingBoat /> },
        { title: 'New', icon: <GiMineExplosion /> },
        { title: 'Modern', icon: <RiAliensFill /> },
        { title: 'Traditional', icon: <ImKey /> },
        { title: 'Forest', icon: <BsFillTreeFill /> },
        { title: 'Mountain', icon: <GiMountainCave /> },
        { title: 'Beach', icon: <GiBeachBucket /> },
        { title: 'City', icon: <GiCity /> },
        { title: 'Rural', icon: <GiRuralHouse /> },
        { title: 'Family', icon: <GiFamilyHouse /> },
        { title: 'Retirement', icon: <GiRetirement /> },
        { title: 'Vacation', icon: <GiVacation /> },
        { title: 'Luxury', icon: <GiLuxury /> },
        { title: 'Affordable', icon: <GiAffordableHousing /> },
        { title: 'Small', icon: <GiSmallHouse /> },
    ]
}

const handleChange = async (e) => {
    if (e.target.checked) {
        try {
            await Client.put(`${BASE_URL}/listing/create`, {
                type: e.target.title,
                icon: e.target.icon,
            })
        } catch (e) {
            throw e
        }
    }

    return (
        <fieldset>
            <legend className='text-base font-semibold leading-6 text-gray-900'>
                Sort By
            </legend>
            <div className='mt-4 divide-y divide-gray-200 border-t border-b border-gray-200'>
                {sorting.map((sort, i) => (
                    <div key={i} className='relative flex items-start py-4'>
                        <div className='min-w-0 flex-1 text-sm leading-6'>
                            <label
                                htmlFor={`${sort.title}`}
                                className='select-none font-medium text-gray-900'>
                                {sort.icon}
                            </label>
                        </div>
                        <div className='ml-3 flex h-6 items-center'>
                            <input
                                onChange={handleChange}
                                id={`${sort.id}`}
                                name={`${sort.name}`}
                                type='checkbox'
                                className='h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-[#00A2BB]'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </fieldset>
    )
}

export default Types
