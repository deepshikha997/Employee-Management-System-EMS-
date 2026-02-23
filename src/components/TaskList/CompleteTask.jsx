import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex w-[320px] flex-shrink-0 flex-col rounded-2xl border border-white/20 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='rounded-lg bg-cyan-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100'>{data.category}</h3>
                <h4 className='text-xs text-slate-300'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold text-slate-100'>{data.taskTitle}</h2>
            <p className='mt-2 text-sm text-slate-200/90'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button className='w-full rounded-lg bg-cyan-500 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-cyan-400'>Complete</button>
            </div>
        </div>
  )
}
export default CompleteTask
