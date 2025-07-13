import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCart from './components/product_cart'
import Header from './components/header'
import LoginPage from './pages/loginPage'
import AdminPage from './pages/adminPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Testing from './pages/testing'
import { Toaster } from 'react-hot-toast'

function App() {
  
  return (
    
    <>

    <BrowserRouter>

    <Toaster position='top-center'/>
    
      <Routes path="/*">
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/" element={<h4>Home Page</h4>} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/*" element={<h5>404 Not Found</h5>} />
        
      </Routes>
      
    </BrowserRouter>

     {/* <LoginPage />  */}
   

    {/* color box practice(positioning).
     <div className='w-full h-screen bg-pink-200'>
      <div className='w-[500px] h-[500px] flex flex-col items-center bg-gray-400 relative'>
        <div className='w-[90px] h-[90px] bg-red-500'></div>
        <div className='w-[90px] h-[90px] bg-yellow-500 absolute right-[50px] bottom-[50px] z-50'></div>
        <div className='w-[90px] h-[90px] bg-blue-500 fixed right-[50px] bottom-[50px]'></div>
        <div className='w-[90px] h-[90px] bg-green-500'></div>
      </div>
    </div> */}
    </>

  );
}

export default App
