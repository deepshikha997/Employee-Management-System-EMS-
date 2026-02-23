import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser)
      setUser(parsedUser.role)
      setLoggedInUserData(parsedUser.data)
    }

  },[])


  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    if (userData) {
      const employee = userData.find((e) => email === e.email && password === e.password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        return
      }
    }

    alert('Invalid Credentials')
  }


  const activeEmployee =
    user === 'employee' && loggedInUserData
      ? (userData?.find((employee) => employee.email === loggedInUserData.email) || loggedInUserData)
      : null

  const handleChangeUser = (nextUser) => {
    if (!nextUser) {
      setUser(null)
      setLoggedInUserData(null)
      return
    }

    setUser(nextUser)
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={handleChangeUser} /> : (user === 'employee' ? <EmployeeDashboard changeUser={handleChangeUser} data={activeEmployee} /> : null)}
    </>
  )
}

export default App
