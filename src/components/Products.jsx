import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/slices/counter.slice'

const Products = () => {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const plus = () => dispatch(increment ())
    const minus = () => dispatch(decrement())
    const resets = () => dispatch(reset())
    function btnPrubena() {
        console.log('click')
    }
  return (
    <div>
     
        <div className="productsContainer">
            <div className="productsGrid">
                <div className="product">
                    <div className="box">
                        <img src="./vector1.png" alt="" />
                       <p>Beds</p>
                    </div>
                    <div className="btnBox">
                        <button onClick={minus}>-</button>
                        <p> {counter}</p>
                        <button onClick={plus}>+</button>
                        
                        
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./refridegator.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                    <button onClick={minus}>-</button>
                        <p> {counter}</p>
                        <button onClick={plus}>+</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./vector2.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                    <button onClick={minus}>-</button>
                        <p> {counter}</p>
                        <button onClick={plus}>+</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./vector3.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                    <button onClick={minus}>-</button>
                        <p> {counter}</p>
                        <button onClick={plus}>+</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./vector4.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                    <button onClick={minus}>-</button>
                        <p> {counter}</p>
                        <button onClick={plus}>+</button> 
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./vector5.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                    <button onClick={minus}>-</button>
                        <p> {counter}</p>
                        <button onClick={plus}>+</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./washer-dryer.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                    <button onClick={minus}>-</button>
                        <p> {counter}</p>
                        <button onClick={plus}>+</button>
                        
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./group.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                    <button onClick={minus}>-</button>
                        <p> {counter}</p>
                        <button onClick={plus}>+</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="vector6.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                    <button onClick={minus}>-</button>
                        <p> {counter}</p>
                        <button onClick={plus}>+</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./vector7.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                    <button onClick={minus}>-</button>
                        <p> {counter}</p>
                        <button onClick={plus}>+</button>
                    </div>
                </div>
            </div>
        <div className="finalBtn">
            <button onClick={resets} className='noColorBtn'> Clear</button>
            <button onClick={resets} className='colorBtn'>Calculate</button>
        </div>


        </div>
      

    </div>

  )
}

export default Products