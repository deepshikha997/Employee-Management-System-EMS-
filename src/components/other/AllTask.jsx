import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData] = useContext(AuthContext)

   
   return (
    <div className='mt-6 rounded-2xl border border-white/20 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl'>
      <h2 className='mb-4 text-xl font-semibold text-slate-100'>Team Task Overview</h2>

      <div className='overflow-x-auto'>
        <div className='min-w-[720px]'>
          <div className='mb-2 grid grid-cols-5 rounded-xl border border-white/20 bg-sky-500/20 px-4 py-3'>
            <h3 className='text-sm font-semibold uppercase tracking-wide text-sky-100'>Employee</h3>
            <h3 className='text-sm font-semibold uppercase tracking-wide text-sky-100'>New</h3>
            <h3 className='text-sm font-semibold uppercase tracking-wide text-sky-100'>Active</h3>
            <h3 className='text-sm font-semibold uppercase tracking-wide text-sky-100'>Completed</h3>
            <h3 className='text-sm font-semibold uppercase tracking-wide text-sky-100'>Failed</h3>
          </div>

          {userData.map(function (elem, idx) {
            return (
              <div key={idx} className='mb-2 grid grid-cols-5 rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10'>
                <h3 className='text-base font-medium text-slate-100'>{elem.firstName}</h3>
                <p className='text-base font-semibold text-sky-200'>{elem.taskCounts.newTask}</p>
                <p className='text-base font-semibold text-amber-200'>{elem.taskCounts.active}</p>
                <p className='text-base font-semibold text-cyan-100'>{elem.taskCounts.completed}</p>
                <p className='text-base font-semibold text-rose-300'>{elem.taskCounts.failed}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AllTask
