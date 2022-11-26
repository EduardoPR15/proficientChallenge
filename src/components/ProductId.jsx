import React, { useEffect, useState } from 'react'

export const ProductId = ({product, i}) => {
    const [amountCounter, setAmountCounter] = useState()

 const plus = () => {
    console.log(product.id)
    setAmountCounter(product.amount++)
 }
 const minus = () =>{
    if (product.amount > 0){
    console.log(product.id)
    console.log('no es 0');
 setAmountCounter(product.amount--)
}


 }
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
