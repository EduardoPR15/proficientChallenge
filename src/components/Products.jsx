import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/slices/counter.slice'
import { dbProducts } from '../data/daataBase'
import { ProductId } from './ProductId'
import {sumArr,sumTwoArrays, minArr} from '../data/sumArray'
const Products = () => {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const plus = () => dispatch(increment ())
    const minus = () => dispatch(decrement())
    function resets  () {
        dispatch(reset())
        let sumArr = []
    } 
    console.log(dbProducts[0].id);
    console.log(sumArr)
    const btnPrubena = ({product}) => {
       
        console.log(product)
    }
  return (
    
     
        <div className="productsContainer">
            <div className="productsGrid">
              
                    {dbProducts.map((product, i ) =>(
                       <div className='productBox'>
                        <ProductId product={product} i={i}/>
                        
                        
                        </div>
                       
                    ))}
                    
      


        </div>
            
        <div className="finalBtn">
            <button onClick={resets}> Clear</button>
        </div>

    </div>

  )
}

export default Products