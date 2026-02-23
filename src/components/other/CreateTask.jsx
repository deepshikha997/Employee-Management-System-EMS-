import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignToId, setAssignToId] = useState('')
    const [category, setCategory] = useState('')
    const [feedback, setFeedback] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        if (!assignToId) {
            setFeedback('Please select an employee.')
            return
        }

        if (!userData) {
            setFeedback('Employee data is not loaded yet.')
            return
        }

        const employeeId = Number(assignToId)
        const employeeIndex = userData.findIndex((employee) => employee.id === employeeId)

        if (employeeIndex === -1) {
            setFeedback('Selected employee was not found.')
            return
        }

        const taskPayload = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        }

        const updatedUsers = userData.map((employee, index) => {
            if (index !== employeeIndex) {
                return employee
            }

            return {
                ...employee,
                tasks: [...employee.tasks, taskPayload],
                taskCounts: {
                    ...employee.taskCounts,
                    newTask: employee.taskCounts.newTask + 1,
                },
            }
        })
        setUserData(updatedUsers)
        localStorage.setItem('employees', JSON.stringify(updatedUsers))
        setFeedback('Task created successfully.')

        setTaskTitle('')
        setCategory('')
        setAssignToId('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='mt-6 rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl md:p-8'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='grid w-full grid-cols-1 gap-6 md:grid-cols-2'
            >
                <div>
                    <div>
                        <label htmlFor='taskTitle' className='mb-2 block text-sm font-medium text-slate-100'>Task Title</label>
                        <input
                            id='taskTitle'
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            required
                            className='mb-4 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-300/80 transition-all duration-200 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/50'
                            type="text"
                            placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <label htmlFor='taskDate' className='mb-2 block text-sm font-medium text-slate-100'>Date</label>
                        <input
                            id='taskDate'
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            required
                            className='mb-4 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/50'
                            type="date"
                        />
                    </div>
                    <div>
                        <label htmlFor='assignTo' className='mb-2 block text-sm font-medium text-slate-100'>Assign to</label>
                        <select
                            id='assignTo'
                            value={assignToId}
                            onChange={(e) => {
                                setAssignToId(e.target.value)
                            }}
                            required
                            className='mb-4 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-300/80 transition-all duration-200 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/50'
                        >
                            <option value='' className='bg-slate-900 text-slate-300'>Select employee</option>
                            {userData?.map((employee) => (
                                <option key={employee.id} value={employee.id} className='bg-slate-900 text-slate-100'>
                                    {employee.firstName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='category' className='mb-2 block text-sm font-medium text-slate-100'>Category</label>
                        <input
                            id='category'
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            required
                            className='w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-300/80 transition-all duration-200 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/50'
                            type="text"
                            placeholder='design, dev, etc'
                        />
                    </div>
                </div>

                <div className='flex flex-col items-start'>
                    <label htmlFor='taskDescription' className='mb-2 block text-sm font-medium text-slate-100'>Description</label>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        required
                        className='h-44 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-300/80 transition-all duration-200 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/50'
                        name="taskDescription"
                        id='taskDescription'
                        placeholder='Write task details...'
                    />
                    {feedback && <p className='mt-3 text-sm text-sky-200'>{feedback}</p>}
                    <button className='mt-4 w-full rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60'>
                        Create Task
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask
