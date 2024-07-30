import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quas harum quod rem! Commodi dolorem, omnis illo nesciunt explicabo ipsa ipsam nisi labore quos voluptatibus suscipit quae quidem voluptas expedita.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-centre">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>

                <ul>
                    <li>+91 8956-2312-45</li>
                    <li>support@gmail.com</li>
                </ul>

                </div>

            </div>
                    <hr />
                    <p className='footer-copyright'> Copyright 2024 xyz.com - All Right Reserved </p>
        </div>
    )
}

export default Footer
