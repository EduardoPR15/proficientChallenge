import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {sumArr, minArr, incrementTotal,sumTwoArrays } from '../data/sumArray'
import { decrement, increment } from '../store/slices/counter.slice'

export const ProductId = ({product, i}) => {
    const [amountCounter, setAmountCounter] = useState()
    const [prueba1, setPrueba1] = useState()
    const [totalprice, settotalprice] = useState()
    let price = 0
  
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
 function plus(){
   

    setAmountCounter(product.amount++)
    sumArr.push(product.m2)
    dispatch(increment())
    settotalprice(totalprice + 1)
    let price = 2
    return price
 }
 const minus = () =>{
    if (product.amount > 0){
        dispatch(decrement())
   
    setAmountCounter(product.amount--)
    minArr.push(product.m2 * -1)
}}


  return (
    <div key={product.id} className="product">
                        <div className="box">
                                <img src={product.image} alt="" />
                                <p>{product.name}</p>
                            </div>
                            <div className="btnBox"> 
                            <button onClick={minus} >-</button>
                                <p> {product.amount} </p>
                                <button onClick={plus}>+</button>
                        </div>
    </div>
  )
}
