import React from 'react'

const Header = (props) => {
  const userName = props?.data?.firstName || (props?.isAdmin ? 'Admin' : 'User')

  const logOutUser = () =>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }
  return (
    <div className='flex flex-col gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl sm:flex-row sm:items-end sm:justify-between'>
      <h1 className='text-2xl font-medium leading-tight'>
        Hello
        <br />
        <span className='text-3xl font-semibold text-sky-200'>{userName}</span>
      </h1>
      <button
        onClick={logOutUser}
        className='rounded-xl bg-sky-500 px-5 py-2.5 text-base font-semibold text-white transition-all duration-200 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60'
      >
        Log Out
      </button>
      
    </div>
  )
}

export default Header
