/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { BsArrowBarDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Pagination from '../seller/Pagination'

const Oders = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState('')
  const [parPage, setParPage] = useState(5)
  const [show, setShow] = useState(false)
  return (
    <div className='px-2 lg:px-7 pt-5'>
      <div className='w-full p-4 bg-[#283046] rounded-md'>
        <div className='flex justify-between items-center'>
          <select onChange={(e) => setParPage(parseInt(e.target.value))}className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'>
            <option value= "5">5</option>
            <option value= "5">15</option>
            <option value= "5">25</option>
          </select>
          <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' type="text" placeholder= 'search'/>
        </div>
        <div className='relative mt-5 overflow-x-auto'>
          <div className='w-full text-sm text-left [#d0d2d6]'>
            <div className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
              <div className='flex justify-between items-start'>
                <div className='py-3 w-[25%]'>Order Id</div>
                <div className='py-3 w-[13%]'>Price</div>
                <div className='py-3 w-[18%]'>Payment Status</div>
                <div className='py-3 w-[18%]'>Oder Status</div>
                <div className='py-3 w-[18%]'>Action</div>
                <div className='py-3 w-[8%]'>
                  <BsArrowBarDown/>
                </div>
              </div>
            </div>
            <div className='text-[#d0d2d6]'>
              <div className='flex justify-between items-start border-b border-slate-700'>
                <div className='py-4 w-[25%] font-medium whitespace-nowrap'>567843</div>
                <div className='py-4 w-[13%]'>$56</div>
                <div className='py-4 w-[18%]'>pending</div>
                <div className='py-4 w-[18%]'>pending</div>
                <div className='py-4 w-[18%]'>
                  <Link>view</Link>
                </div>
                <div onClick={(e) => setShow(!show)}className='py-4 cursor-pointer w-[8%]'>
                  <BsArrowBarDown/>
                </div>
              </div>
              <div className={show?'block border-b border-slate-700 bg-slate-800': 'hidden'}>
              <div className='flex justify-start items-start border-b border-slate-700'>
                <div className='py-4 w-[25%] font-medium whitespace-nowrap pl-3'>567843</div>
                <div className='py-4 w-[13%]'>$56</div>
                <div className='py-4 w-[18%]'>pending</div>
                <div className='py-4 w-[18%]'>pending</div>
              </div>
              <div className='flex justify-start items-start border-b border-slate-700'>
                <div className='py-4 w-[25%] font-medium whitespace-nowrap pl-3'>567843</div>
                <div className='py-4 w-[13%]'>$56</div>
                <div className='py-4 w-[18%]'>pending</div>
                <div className='py-4 w-[18%]'>pending</div>
                </div>
              </div>
            </div>
            <div className='text-[#d0d2d6]'>
              <div className='flex justify-between items-start border-b border-slate-700'>
                <div className='py-4 w-[25%] font-medium whitespace-nowrap'>567843</div>
                <div className='py-4 w-[13%]'>$56</div>
                <div className='py-4 w-[18%]'>pending</div>
                <div className='py-4 w-[18%]'>pending</div>
                <div className='py-4 w-[18%]'>
                  <Link>view</Link>
                </div>
                <div onClick={(e) => setShow(!show)}className='py-4 cursor-pointer w-[8%]'>
                  <BsArrowBarDown/>
                </div>
              </div>
              <div className={show?'block border-b border-slate-700 bg-slate-800': 'hidden'}>
              <div className='flex justify-start items-start border-b border-slate-700'>
                <div className='py-4 w-[25%] font-medium whitespace-nowrap pl-3'>567843</div>
                <div className='py-4 w-[13%]'>$56</div>
                <div className='py-4 w-[18%]'>pending</div>
                <div className='py-4 w-[18%]'>pending</div>
              </div>
              <div className='flex justify-start items-start border-b border-slate-700'>
                <div className='py-4 w-[25%] font-medium whitespace-nowrap pl-3'>567843</div>
                <div className='py-4 w-[13%]'>$56</div>
                <div className='py-4 w-[18%]'>pending</div>
                <div className='py-4 w-[18%]'>pending</div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination
            pageNumber = {currentPage}
            setPageNumber = {setCurrentPage}
            totalItem = {50}
            parPage = {parPage}
            showItem = {3}
        />
      </div>
    </div>
  )
}

export default Oders