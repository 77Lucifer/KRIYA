import React from 'react'
import { Link } from 'react-router-dom'
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
                                    <a><i className="fa-brands fa-instagram"></i></a>
                                    <a><i className="fa-brands fa-linkedin"></i></a>
                                    <a><i className="fa-brands fa-facebook"></i></a>
                                    <a><i className="fa-solid fa-envelope"></i></a>
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
                        <div className="ul4">
                            <h3>Downloads</h3>
                            <ul>
                                <li>Get from the App Store</li>
                                <li>Get from the Play Store</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-inner f-n2">
                    <div className="ul5">
                            <h3>Contact</h3>
                            <ul>
                                <li>Address gy6ut ICONIC KRIYA LLP
                                    No-103,Krupa Residency,Raghavendra Colony,</li>
                                <li>Ammenpur, Medak,Ramachandrapuram, Telangana,India,502032
                                </li>
                                <li>
                                    Phone: +91 9059225204 <br />
                                    Email: kriya.reg@gmail.com
                                </li>
                            </ul>
                        </div>
                        <div className="ul6">
                            <h3>Usefull</h3>
                            <ul>
                                <li> <Link to='/Terms'>
                                    Terms and Conditions
                                </Link>
                                </li>
                                <li> <Link to='/Policy'>
                                    Privacy Policy
                                </Link>
                                </li>
                                <li>
                                    <Link to='/Complain'>
                                    Risk & Compliance
                                    </Link>
                                </li>
                                <li> <Link to='/Refund'> Cancellation & Refund Policy </Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <p className="Copyright">© Copyright KRIYA. All Rights Reserved
                    Powered By Connect And Collabs</p>
    </>
  )
}

export default Footer
