import React from 'react'

const Footer = () => {
  return (
<div className='footerBox'>
    <div className="leftBox">
        <div className="logo ">
            <img src="./cil_house.png" alt="" />
        </div>
    <div className="text4 ">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page whenters.</p>
    </div>
    <div className="iconBox ">
        <div className="iconBorder">
            <img src="./043-twitter.png" alt="" />
        </div>
        <div className="iconBorder">
            <img src="./021-facebook.png" alt="" />
        </div>
        <div className="iconBorder">
            <img src="./025-instagram.png" alt="" />
        </div>
    </div>
</div>
<div className="footerGrid">

<div className="footerText1 ">
    <p>About Us</p>
</div>
<div className="footerText2 ">
    <p>Navigate</p>
</div>
<div className="footerText3 ">
   <p>Contac Us</p>
</div>
<div className="textBox1 ">
<p>About</p>
    <p>Privacy & Policy</p>
    <p>Terms & Conditions</p>
    <p>Faq</p>
</div>
<div className="textBox2 ">
   
<p>How We Work</p>
    <p>Services</p>
    <p>Faq</p>
    <p>Contact</p>
    <p>Free Quote</p>

</div>
<div className="textBox3 ">
<p>Ricardo Margain 444</p>
    <p>Call: +52 81 1234 5678</p>
    <p>Email: info@challenge.com</p>
</div>

<div className="WhatsappBox  ">
   <img src="./whatsapp.png" alt="" />
</div>

        </div>
    
    </div>
  )
}

export default Footer