import React from 'react'
import "./Footer.css"

const Footer = () => {

return (
    
    <footer>
        <div className='contenedor'>
            <div className='copyBrand'>
                <p>©2023 Digital Booking</p>
            </div>
            <div className='redesSociales'>
                <a href='https://www.facebook.com/'>
                        <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
                <a href='https://www.linkedin.com/'>
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href='https://twitter.com/'>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href='https://www.instagram.com/'><i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </footer>

)
}

export default Footer