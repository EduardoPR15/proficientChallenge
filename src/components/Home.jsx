import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="top">
            <div className="homeIcon"> 
                <img src="./cil_house.png" alt="" />
            </div>
            <div className="textNav">
                <p className='text1'>How We Work</p>
                <p className='text1'>Services</p>
                <p className='text1'>Free Quote</p>
                <p className='text1'>Contact</p>
            </div>
                
        </div>
        <div className="titles1">
            <h1>What items to store?</h1>
        </div>
        <div className="titles2">
            <p>Select which items you wish to store before moving to your new home. We’ll keep ’em safe!</p>
        </div>
    </div>
  )
}

export default Home