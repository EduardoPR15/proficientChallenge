import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import counterSlice, { decrement, increment, reset } from './store/slices/counter.slice'

function App() {
const dispatch = useDispatch()
const counter = useSelector(state => state.counter)
const counter2 = useSelector(state => state.counter)

const plus = () => dispatch(increment())
const minus = () => dispatch(decrement())
const resets = () => dispatch(reset())

  return (
    <div className="App">

 <Home/>
 <Products/>
 {/* <div> <h1>objeto 1</h1>
 <button onClick={plus}> +1 </button>
 <button onClick={minus}> -1 </button>
 <button onClick={resets} > delete</button>
 <h2>cantidad {counter}  </h2>
 </div>
 <div> <h1>objeto 2</h1>
 <button> +1 </button>
 <button> -1 </button>
 <h2>cantidad {counter}  </h2>
 </div>
 <div> <h1>objeto 3</h1>
 <button> +1 </button>
 <button> -1 </button>
 <h2>cantidad {counter}  </h2>
 </div> */}

    </div>
  )
}

export default App
