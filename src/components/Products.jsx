import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/slices/counter.slice'
import { dbProducts } from '../data/daataBase'
import { ProductId } from './ProductId'
const Products = () => {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const plus = () => dispatch(increment ())
    const minus = () => dispatch(decrement())
    const resets = () => dispatch(reset())
    console.log(dbProducts[0].id);
    const btnPrubena = ({product}) => {
       
        console.log(product)
    }
  return (
    
     
        <div className="productsContainer">
            <div className="productsGrid">
              
                    {dbProducts.map((product, i ) =>(
                       <div>
                        <ProductId product={product} i={i}/>
                            {/* <div className="box">
                                <img src={product.image} alt="" />
                                <p>{product.name}</p>
                            </div>
                            <div className="btnBox"> 
                            <button onClick={minus}>-</button>
                                <p> {product.amount}</p>
                                <button onClick={(product) => btnPrubena}>+</button>
                            </div> */}
                        
                        
                        </div>
                       
                    ))}
                    
            
        <div className="finalBtn">
            <button onClick={resets} className='noColorBtn'> Clear</button>
            <button onClick={resets} className='colorBtn'>Calculate</button>
        </div>


        </div>
      

    </div>

  )
}

export default Products