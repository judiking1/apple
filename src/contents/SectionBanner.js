import React from 'react'
import './SectionBanner.css'
function SectionBanner() {
  const bgText='url(./images/build-apps_2x.png)';
  const style = {backgroundImage: bgText};
    return (
    <section class="banner">
        <div class="section_content">
            <div>
                <h3>앱을 빌드하고 미래를 건설하세요.</h3>
                <h5>
                    신입 개발자, 시니어 개발자 또는 가입자 모두가 무료로 제공되는 리소스를 이용해, 수백만 개의 일자리를 창출하며 끊임없이 성장하는
                    Apple의 앱 경제에서 성공할 수 있는 기술을 습득할 수 있습니다<br/>
                    (영문).
                </h5>
            </div>
        </div>
        <figure style={style}></figure>
    </section>
  )
}

export default SectionBanner