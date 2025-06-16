import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer_section'>
        <hr/>
        <div className='footer_container'>
            <div>
                <h2><strong>Phone</strong></h2>
                <p>+91 88888 00000</p>
            </div>
            <div>
                <h2><strong>Email</strong></h2>
                <p>muthuvignesh710@gmail.com</p>
            </div>
            <div>
                <h2><strong>Follow Me</strong></h2>
                <div className='footer_icon_container'>
                    <a href="https://www.instagram.com/muthuviignesh_" target="_blank" rel="noopener noreferrer"><i className='instagram'><FaInstagram style={{background:'linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#fd1d1d)', color:'white', borderRadius:"25%"}} /></i></a>
                    <a href="https://www.linkedin.com/in/muthuvigneshv" target="_blank" rel="noopener noreferrer"><i className='linkedin'><FaLinkedin style={{color:'#0A66C2'}}/></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100061213866753" target="_blank" rel="noopener noreferrer"><i className='facebook'><FaFacebookSquare style={{color:'#0165E1'}} /></i></a>
                </div>
            </div>
            <div>
                <p>©2025 shopWith | made by <a href='https://muthuvignesh-portfolio.netlify.app/' target='_blank'>Muthu Vignesh</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer