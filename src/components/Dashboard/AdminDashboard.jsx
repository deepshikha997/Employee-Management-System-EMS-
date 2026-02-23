import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 p-6 sm:p-8'>
            <Header changeUser={props.changeUser} isAdmin />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard
