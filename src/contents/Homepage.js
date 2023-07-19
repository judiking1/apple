import React from 'react'
import './Homepage.css'
function Homepage() {
    const bgText1 = 'url(./images/wwdc23-hero-large-phase3_2x.webp)';
    const style1 = {backgroundImage:bgText1};
  return (
    <section class="homepage">
        <ul class="main_img">
            <li style={style1}>
                <div class="main_img_text">
                    <h3>
                        <img src="./svg/wwdc23.svg" alt="wwdc23타이틀이미지"/>
                    </h3>
                    <h5>
                        세션 비디오 신청하기(영어)
                    </h5>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default Homepage