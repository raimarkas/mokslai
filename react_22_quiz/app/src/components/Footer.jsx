import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            &copy; {new Date().getFullYear()} All right reserved. 
        </footer>
    )
}

export default Footer
