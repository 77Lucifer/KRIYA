import React from 'react'
import './Style/Admin.css'
import img1 from './images/conatct-img.jpg'
import img2 from './images/contact-img2.jpg'


function Admin() {
  return (
    <>
    <div className="login-main">
        <div className="login-inner">
            <img className='l-img1' src={img1} alt="" />
            <img className='l-img2' src={img2} alt="" />
        <h1>Welcome Back!</h1>

      <div className="login-box">
        {/* <div className="login-l"></div> */}
        <div className="login-r">
            <form action="#">
                <h3>Login</h3>
                <div className="input-e">
                <i class="fa-solid fa-user"></i>  
                <input  type="text"  placeholder='Enter Your Email our Number' required/>
                </div>
                <div className="input-e">
                <i class="fa-solid fa-lock"></i>
                <input type="password"  placeholder='Enter Your Password' required/>
                </div>
                <h4>Forget Password</h4>

                <button className='admin-btn btn'>Login</button>
            </form>
        </div>
      </div>
        </div>
    </div>
    </>
  )
}

export default Admin
