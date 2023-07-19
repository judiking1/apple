import React from 'react'
import './Footer.css'
import FooterNavigation from '../contents/FooterNavigation'
import FooterLegal from '../contents/FooterLegal'
function Footer() {
  return (
    <footer id='footer'>
        <div className='footer_content'>
            <FooterNavigation/>
            <FooterLegal/>
        </div>
    </footer>
  )
}

export default Footer