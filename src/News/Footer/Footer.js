import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
    <footer className="footer__body">
       <div className='footer__box'>
        <nav className='footer__inside'>
            <div className='icon__container' ><h1><a><i class="icon__  bi bi-twitter"></i></a></h1></div>
            <div className='icon__container' ><h1><a><i class="icon__  bi bi-facebook"></i></a></h1></div>
            <div className='icon__container' ><h1><a><i class="icon__  bi bi-instagram"></i></a></h1></div>
            <div className='icon__container' ><h1><a><i class="icon__  bi bi-github"></i></a></h1></div>
        </nav>
        
        <nav className='footer__second'>
        <hr/>
        © All rights reserved.
        </nav>
       </div>
    </footer>
    </>
  )
}

export default Footer