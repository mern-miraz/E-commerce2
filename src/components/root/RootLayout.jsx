import React from 'react'
import Navbar from '../Navbar'
import Menu from '../Menu'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import { ScrollRestoration } from "react-router-dom";


const RootLayout = () => {
  return (
    <>
        <ScrollRestoration/>
        <Navbar/>
        <Menu/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout