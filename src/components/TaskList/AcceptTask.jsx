import React from 'react'

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className='flex w-[320px] flex-shrink-0 flex-col rounded-2xl border border-white/20 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='rounded-lg bg-sky-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-100'>{data.category}</h3>
                <h4 className='text-xs text-slate-300'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold text-slate-100'>{data.taskTitle}</h2>
            <p className='mt-2 text-sm text-slate-200/90'>
                {data.taskDescription}
            </p>
            <div className='mt-6 flex gap-2'>
                <button
                    onClick={onComplete}
                    className='rounded-lg bg-cyan-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-cyan-400'
                >
                    Mark as Completed
                </button>
                <button
                    onClick={onFail}
                    className='rounded-lg bg-rose-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-rose-400'
                >
                    Mark as Failed
                </button>
            </div>
        </div>
  )
}

export default AcceptTask
