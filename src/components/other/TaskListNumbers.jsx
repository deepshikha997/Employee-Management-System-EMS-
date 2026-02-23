import React from 'react'

const TaskListNumbers = ({data}) => {
  if (!data) {
    return null
  }

  return (
    <div className='mt-8 grid grid-cols-1 gap-4 text-white sm:grid-cols-2 lg:grid-cols-4'>
      <div className='rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl'>
        <h2 className='text-3xl font-bold text-sky-200'>{data.taskCounts.newTask}</h2>
        <h3 className='mt-1 text-sm uppercase tracking-wide text-slate-200'>New Task</h3>
      </div>
      <div className='rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl'>
        <h2 className='text-3xl font-bold text-cyan-100'>{data.taskCounts.completed}</h2>
        <h3 className='mt-1 text-sm uppercase tracking-wide text-slate-200'>Completed</h3>
      </div>
      <div className='rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl'>
        <h2 className='text-3xl font-bold text-amber-200'>{data.taskCounts.active}</h2>
        <h3 className='mt-1 text-sm uppercase tracking-wide text-slate-200'>Accepted</h3>
      </div>
      <div className='rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl'>
        <h2 className='text-3xl font-bold text-rose-300'>{data.taskCounts.failed}</h2>
        <h3 className='mt-1 text-sm uppercase tracking-wide text-slate-200'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
