/* eslint-disable no-unused-vars */
import React, { useState, cateShow } from 'react'
import { Link } from 'react-router-dom'

const AddProduct = () => {
    const categorys = [
        {
            id : 1 ,
            name : 'Sports'
        },
        {
            id : 2 ,
            name : 'Mobile'
        },
        {
            id : 3 ,
            name : 'Jarcy'
        },
        {
            id : 4 ,
            name : 'Pant'
        },
        {
            id : 5 ,
            name : 'Watch'
        }
    ]
    const [state, setState] = useState({
        name : "",
        description : '',
        discount : '',
        price : "",
        brand : "",
        stock : ""
    })
    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

  const [cateShow, setCateShow] = useState(false)
  const [category, setCategory] = useState('')
  const [allCategory, setAllCategory] = useState([])
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className='px-2 lg:px-7 pt-5'>
        <div className='w-full p-4 bg-[#283046] rounded-md'>
            <div className='flex justify-between items-center pb-4'>
                <h1 className='text-[#d0d2d6] text-al font-semibold'>Add Product</h1>
                <Link className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 my-2'to='/seller/dashboard/products'>Products</Link>
            </div>
            <div>
                <form>
                    <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                        <div className='flex flex-col w-full gap-1 relative'>
                            <label htmlFor="brand">Product name</label>
                            <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'onChange={inputHandle} value={state.name} type="text" placeholder='Product name' name='name' id='name' />
                            <div className={`absolute top-[101%] bg-slate-800 w-full transition-all ${cateShow ? 'scale-100' : 'scale-0'}`}>
                                <div className='w-full px-4 py-2 fixed'>
                                    <input className='px-3 py-1 focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden'type="text" placeholder='search'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-1'>
                            <label htmlFor="name">Product brand</label>
                            <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'onChange={inputHandle} value={state.brand} type="text" placeholder='Product brand' name='brand' id='brand' />
                        </div>
                    </div>
                    <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                        <div className='flex flex-col w-full gap-1 relative'>
                            <label htmlFor="category">Category</label>
                            <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'onChange={inputHandle} value={state.name} type="text" placeholder='Product name' name='name' id='name' />
                            <div className={`absolute top-[101%] bg-slate-800 w-full transition-all ${cateShow? 'scale-100' : 'scale-0'}`}>
                                <div className='w-full px-4 py-2 fixed'>
                                    <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden' type="text" placeholder='search' />
                                </div>
                                <div className='pt-14'></div>
                                <div className='flex justify-start items-start flex-col h-[200px] overflow-x-scrool'>
                                    {
                                        allCategory.map((c, i) => <span onClick={()=>{
                                            setCateShow(false)
                                            setCategory(c.name)
                                            setSearchValue('')
                                            setAllCategory(categorys)
                                        }}>{c.name}</span>)
                                    }
                                </div>
                            </div>
                            <div className={`absolute top-[101%] bg-slate-800 w-full transition-all ${cateShow ? 'scale-100' : 'scale-0'}`}>
                                <div className='w-full px-4 py-2 fixed'>
                                    <input className='px-3 py-1 focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden'type="text" placeholder='search'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-1'>
                            <label htmlFor="stock">Stock</label>
                            <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'onChange={inputHandle} value={state.stock} type="text" placeholder='Product stock' name='stock' id='stock' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddProduct