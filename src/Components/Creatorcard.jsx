import React from 'react'
import Nav from './Nav'
import './Style/Creatorcard.css'
import imgk from './images/Kriya_bg_remove.png'


function Creatorcard() {
    return (
        <>
            <div className="creator-main">
                <img className='img1' src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/84bf84f610945949aed140ac/xxxx.png" alt="" />
                <img className='img2' src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8abf9708500f530fa3cb6308/jjjjjjjjjjjjjjjjjjj.png" alt="" />
                <img className='img3' src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/ec8b1fdcd0475a01b686162e/ddd-min.png" alt="" />
                <div className="c-card-inner">
                    <div className="card">
                        <div className="k-logo">
                            <img className='k-img' src={imgk} alt="" />
                        </div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/creators-dev-prod.appspot.com/o/profile_images%2F114cc239-a903-49d9-9272-77b009d7c868?alt=media&token=c66d9b6c-7cab-46c1-8bc4-a459ecc6a4ff" alt="" />
                        <div className="social-icons">
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <h2>Aubree Valentine</h2>
                        <h3>Actor</h3>
                        <div className="connect-icons">
                            <i class="fa-solid fa-message"><h4>Message</h4></i>
                            <i class="fa-solid fa-phone-volume"><h4>Call</h4></i>
                            <i class="fa-solid fa-video"><h4>Video Call</h4></i>
                            <i class="fa-solid fa-gift"><h4>Send Gift</h4></i>
                        </div>
                        <div className="buttons">
                               <a target='_blank' href="https://play.google.com/store/apps/details?id=com.kriya.app"> <div className="btn"><i className="fa-brands fa-google-play"></i>Play Store</div></a>
                                <div className="btn"><i className="fa-brands fa-app-store"></i>App Store</div>
                            </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Creatorcard
