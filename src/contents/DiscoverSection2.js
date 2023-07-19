import React from 'react'
import './DiscoverSection2.css'
function DiscoverSection2() {
  const bgText1 = 'url(./images/lockup-hero_2x.jpg)';
  const style1 = {backgroundImage:bgText1};
  return (
    <section class="lookup" style={style1}>           
        <h3>무한한 가능성</h3>
        <h4>
            <p>
                Apple 플랫폼용 앱을 개발하면 iOS, iPadOS, macOS, tvOS, visionOS 및 watchOS의 최첨단 기술을 손쉽게
                이용하여 무궁무진한 방법으로 전 세계 사용자에게 놀라운 앱을 선보일 수 있게 됩니다. 각각의 강력한 플랫폼은 특별한 기능과 사용자 경험을
                제공하며 서로 긴밀하게 연동되어 진정한 의미의 생태계를 형성합니다. 탁월한 호환성을 위해 철저하게 디자인된 하드웨어, 소프트웨어, 서비스를 통해
                놀랍도록 매끄럽게 연동되는 직관적이고 다면적인 사용자 경험을 구축할 수 있습니다.
            </p>
        </h4>
    </section>
  )
}

export default DiscoverSection2