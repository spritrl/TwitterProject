import React from 'react'
import Login from './Login/Login'
import Register from './Register/Register'
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <>   
    <h1>User</h1>
      <nav>
        <Link to="">Profile</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Auth