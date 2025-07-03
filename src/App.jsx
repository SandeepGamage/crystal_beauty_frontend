import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCart from './components/product_cart'
import Header from './components/header'

function App() {
  
  return (
    
    <>
    
      <div>


        <Header/>
        <ProductCart name="iphone16" price="3000$"/>

      </div>
    
    </>

  )
}

export default App
