/* eslint-disable jsx-a11y/scope */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    const [parPage, setParPage] = useState(5)

  return (
    <div className='px-2 lg:px-7 pt-5'>
        <div className='flex flex-wrap w-full'>
            <div className='w-full lg:w-7/12'>
                <div className='w-full p-4 bg-[#283046] rounded-md'>
                    <div className='flex justify-between items-center'>
                        <select onChange={(e) => setParPage(parseInt(e.target.value))}className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'>
                            <option value= "5">5</option>
                            <option value= "5">15</option>
                            <option value= "5">25</option>
                        </select>
                        <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' type="text" placeholder= 'search'/>
                    </div>
                    <div className='realative overflow-x-auto'>
                        <table className='w-full text-sm text-left text-[#d0d2d6]'>
                            <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                                <tr>
                                <th scope='col' className='py-3 px-4'>Order Id</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Payment Status</th>
                                <th scope='col' className='py-3 px-4'>Order Status</th>
                                <th scope='col' className='py-3 px-4'>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            {
                                [1, 2, 3, 4, 5].map((d, i) => <tr key={i}>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#455fdf54545</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>$656</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>pending</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>pending</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <Link>view</Link>
                                    </td>
                                </tr>)
                            }
                        </table>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-5/12'>
                <div className='w-full p-4 bg-[#283046] rounded-md'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category