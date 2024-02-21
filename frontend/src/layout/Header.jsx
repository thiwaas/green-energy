import React from 'react'

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className='fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40'>
      <div className='ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-start bg-[#283046] text-[#d0d2d6] px-5 transition-all'>
        <div onClick={() =>setShowSidebar(!showSidebar ) }>
        </div>
      </div>
    </div>
  )
}

export default Header