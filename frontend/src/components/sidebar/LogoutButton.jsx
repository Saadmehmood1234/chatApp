import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className='mt-auto ml-4 mb-4'>
      {!loading ?(
        <div className='flex gap-4 mt-4'>
          
          <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
          <p className='text-white'>Logout</p>
          </div>
      ):(
        <span className='loading loading-spinner'></span>
      ) }
    </div>
  )
}

export default LogoutButton
