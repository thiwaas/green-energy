import React from 'react'

const SellerDetail = () => {
  return (
    <div>
      <div className='px-2 lg:px-7 pt-5'>
        <div className='w-full p-4 bg-[#283046] rounded-md'>
          <div className='w-full flex flex-wrap text-[#d0d2d6]'>
            <div className='w-3/12 flex justify-center items-center py-3'>
              <div>
                <img  className='w-full h-[230px]'src="http://localhost:3000/images/admin.jpg " alt="" />
              </div>
            </div>
            <div className='w-4/12'>
              <div className='px-0 md:px-5 py-2'>
                <div className='py-2 text-lg'>
                  <h2>Basic Info</h2>
                </div>
                <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md'>
                  <div className='flex gap-2'>
                    <span>Name : </span>
                    <span>Thiwanka Malinga</span>
                  </div>
                  <div className='flex gap-2'>
                    <span>Name : </span>
                    <span>Thiwanka Malinga</span>
                  </div>
                  <div className='flex gap-2'>
                    <span>Name : </span>
                    <span>Thiwanka Malinga</span>
                  </div>
                  <div className='flex gap-2'>
                    <span>Name : </span>
                    <span>Thiwanka Malinga</span>
                  </div>
                  <div className='flex gap-2'>
                    <span>Name : </span>
                    <span>Thiwanka Malinga</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellerDetail