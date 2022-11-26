import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/slices/counter.slice'

const Products = () => {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const plus = () => dispatch(increment ())
    const minus = () => dispatch(decrement())
    const resets = () => dispatch(reset())
  return (
    <div>
        <h1>productos</h1>
        <div className="productsContainer">
            <div className="productsGrid">
                <div className="product">
                    <div className="box">
                        <img src="./vector1.png" alt="" />
                       <p>Beds</p>
                    </div>
                    <div className="btnBox">
                        <button onClick={plus}>+</button>
                        <p> {counter}</p>
                        <button onClick={minus}>-</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./refridegator.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                        <button>+</button>
                        <p> total</p>
                        <button>-</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./vector2.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                        <button>+</button>
                        <p> total</p>
                        <button>-</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./vector3.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                        <button>+</button>
                        <p> total</p>
                        <button>-</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./vector4.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                        <button>+</button>
                        <p> total</p>
                        <button>-</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./vector5.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                        <button>+</button>
                        <p> total</p>
                        <button>-</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./washer-dryer.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                        <button>+</button>
                        <p> total</p>
                        <button>-</button>
                        <p>Beds</p>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./group.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                        <button>+</button>
                        <p> total</p>
                        <button>-</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="vector6.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                        <button>+</button>
                        <p> total</p>
                        <button>-</button>
                    </div>
                </div>
                <div className="product">
                <div className="box">
                <img src="./vector7.png" alt="" />
                <p>Beds</p>
                    </div>
                    <div className="btnBox">
                        <button>+</button>
                        <p> total</p>
                        <button>-</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

  )
}

export default Products