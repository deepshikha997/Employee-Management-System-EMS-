import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext)

    const statusMap = {
        active: { active: true, newTask: false, completed: false, failed: false },
        completed: { active: false, newTask: false, completed: true, failed: false },
        failed: { active: false, newTask: false, completed: false, failed: true },
    }

    const syncStorage = (updatedEmployees, updatedEmployee) => {
        localStorage.setItem('employees', JSON.stringify(updatedEmployees))
        const currentUser = localStorage.getItem('loggedInUser')
        if (currentUser) {
            const parsedUser = JSON.parse(currentUser)
            if (parsedUser?.role === 'employee') {
                localStorage.setItem('loggedInUser', JSON.stringify({ ...parsedUser, data: updatedEmployee }))
            }
        }
    }

    const updateTaskStatus = (taskIndex, nextStatus) => {
        if (!userData || !data) return

        const employeeIndex = userData.findIndex((emp) => emp.id === data.id)
        if (employeeIndex === -1) return

        const employeesCopy = [...userData]
        const employeeCopy = { ...employeesCopy[employeeIndex] }
        const tasksCopy = [...employeeCopy.tasks]
        const currentTask = tasksCopy[taskIndex]

        if (!currentTask) return

        const nextFlags = statusMap[nextStatus]
        if (!nextFlags) return

        const updatedTask = { ...currentTask, ...nextFlags }
        tasksCopy[taskIndex] = updatedTask

        const taskCounts = { ...employeeCopy.taskCounts }
        const countKeys = ['active', 'newTask', 'completed', 'failed']

        countKeys.forEach((key) => {
            const oldValue = currentTask[key] ? 1 : 0
            const newValue = updatedTask[key] ? 1 : 0
            const diff = newValue - oldValue
            taskCounts[key] = Math.max(0, (taskCounts[key] || 0) + diff)
        })

        const updatedEmployee = { ...employeeCopy, tasks: tasksCopy, taskCounts }
        employeesCopy[employeeIndex] = updatedEmployee

        setUserData(employeesCopy)
        syncStorage(employeesCopy, updatedEmployee)
    }

    if (!data) {
        return null
    }

    if (!data.tasks || data.tasks.length === 0) {
        return (
            <div className='mt-8 rounded-2xl border border-white/20 bg-white/10 p-6 text-slate-200 shadow-2xl backdrop-blur-xl'>
                No tasks assigned yet.
            </div>
        )
    }

    return (
        <div id='tasklist' className='mt-8 flex w-full flex-nowrap items-stretch justify-start gap-5 overflow-x-auto py-2'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return (
                        <AcceptTask
                            key={idx}
                            data={elem}
                            onComplete={() => updateTaskStatus(idx, 'completed')}
                            onFail={() => updateTaskStatus(idx, 'failed')}
                        />
                    )
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} onAccept={() => updateTaskStatus(idx, 'active')} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}
        </div>
    )
}

export default TaskList
