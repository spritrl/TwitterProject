import React from 'react'
import Login from './Login/Login'
import Register from './Register/Register'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Navbar from '../navbar';

const Auth = () => {
  return (
    <>   
      <Outlet />
    </>
  )
}

export default Auth