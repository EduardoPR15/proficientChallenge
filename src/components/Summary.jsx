import React from 'react'
import { useSelector } from 'react-redux'
import {sumArr, minArr, incrementTotal,sumTwoArrays, resArr } from '../data/sumArray'

const Summary = () => {
    const counter = useSelector(state => state.counter)
   function prueba(counter){

  if(counter === 0){
    let totalm2 = 0
    sumArr.length = 0
    minArr.length = 0
    return totalm2
    
}else{
    let totalm2 = (sumTwoArrays(sumArr,minArr).toFixed(2))
   return totalm2
}

   } 
 const totalm2 = prueba(counter)
    console.log(totalm2);
    let totalPrice = (200 * totalm2) 
    let price = totalPrice.toFixed(2)
    let totalTaxes = (totalPrice * .16)
    let tax = totalTaxes.toFixed(2)
    let total = totalPrice + totalTaxes
    let totalFix =total.toFixed(2)
    let offert = (total - (total * .50)).toFixed(2)
  

  
    


  return (
    <div className='summaryBox'>
        <div className="summaryGrid">
            <div className="TotalBox">
                <p>Total Items</p>
            </div>
            <div className="TotalBox">
                <p>{counter}</p>
            </div>
            <div className="TotalBox">
                <p>Total m^2</p>
            </div>
            <div className="TotalBox">
                <p>{totalm2}</p>
            </div>
            <div className="TotalBox">
                <p>Subtotal</p>
            </div>
            <div className="TotalBox">
                <p>${price}</p>
            </div>
            <div className="TotalBox">
                <p>tax</p>
            </div>
            <div className="TotalBox">
                <p>${tax}</p>
            </div>
            <div className="TotalBox">
                <p>total</p>
            </div>
            <div className="TotalBox">
                <p> ${totalFix}</p>
            </div>
            <div className="TotalBox">
                <p>Due today 50%</p>

            </div>
            <div className="TotalBox">
                <p>${offert} </p>
            </div>
        </div>
        
        
        
        </div>
  )
}

export default Summary