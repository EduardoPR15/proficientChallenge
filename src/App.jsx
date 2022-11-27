import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Products from './components/Products'
import Summary from './components/Summary'
import counterSlice, { decrement, increment, reset } from './store/slices/counter.slice'

function App() {


  return (
    <div className="App">

 <Home/>
 <Products/>
 <div className="titles3">
            <h1>Summary</h1>
        </div>
 <Summary/>
 <Footer/>

    </div>
  )
}

export default App
