import React from 'react'
import { Link } from 'react-router-dom'
import appstore from './images/image.png'
import './Style/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-inner">

                    <div className="ul1">
                        <ul>
                            <h3>About <span>KRIYA</span></h3>
                            <p>Introducing Kriya, <br />The Creators' app that transforms the way you connect with others,
                                making your every minute truly matter.<br /> <span>Connect And Collabs</span>
                            </p>
                            <div className="icons">
                                <a className='social-h'><i className="fa-brands fa-instagram"></i></a>
                                <a className='social-h'><i className="fa-brands fa-linkedin"></i></a>
                                <a className='social-h'><i className="fa-brands fa-facebook"></i></a>
                                <a className='social-h'><i className="fa-solid fa-envelope"></i></a>
                            </div>
                        </ul>
                    </div>
                    <div className="ul2">
                        <h3>Navigation</h3>
                        <ul>
                            <li>Pricing</li>
                            <li>Features</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="ul3">
                        <h3>Services</h3>
                        <ul>
                            <li>Chat</li>
                            <li>Call</li>
                            <li>Video Call</li>
                            <li>Gifts</li>
                        </ul>
                    </div>
                    <div className="ul5">
                        <h3>Contact</h3>
                        <ul>
                            {/* <li>Address gy6ut ICONIC KRIYA LLP
                                No-103,Krupa Residency,Raghavendra Colony,</li>
                            <li>Ammenpur, Medak,Ramachandrapuram, Telangana,India,502032
                            </li> */}
                            <li>
                                Phone: +91 9059225204 <br />
                            </li>
                            <li> Email: kriya.reg@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className="ul4">
                        <h3>Downloads</h3>
                        <ul>
                            <li> <a href="https://play.google.com/store/apps/details?id=com.kriya.app" target='_blank'>
                                <img className='d-img play-store' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="" />
                            </a>
                            </li>
                            <li>
                                <img className='d-img app-store-img' src={appstore} alt="" />
                            </li>
                        </ul>
                    </div>

                </div>


            </div>
            <div className="Copyright"><p>© Copyright KRIYA. All Rights Reserved
                Powered By Connect And Collabs</p>
                <div className="terms-c">
                    <h4> <Link to='/Terms'>Terms and Conditions</Link></h4>
                    <h4> <Link to='/Policy'>Privacy Policy</Link></h4>
                    <h4> <Link to='/Complain'>Risk & Compliance</Link></h4>
                    <h4> <Link to='/Refund'>Cancellation & Refund Policy</Link></h4>
                </div>
            </div>
        </>
    )
}

export default Footer
