import React from 'react'
import './DevelopSection3.css'
function DevelopSection3() {
  return (
    <section class="code">
        <ul>
            <li>
                <img src="./images/xcode-12-96x96_2x.png" alt="code"/>
                <h3>Xcode</h3>
                <h4>
                    Xcode 개발자 도구에는 iOS, iPadOS, macOS, tvOS 및
                    watchOS<span>용 앱을 만드는데 필요한 모든 것이 포함되어 있습니다.</span>
                </h4>
                <h5>Xcode의 새로운 기능</h5>
            </li>
            <li>
                <img src="./images/swift-96x96_2x.png" alt="code"/>
                <h3>Swift</h3>
                <h4>
                    Swift는 강력하면서도 직관적인 프로그래밍 언어로, Apple 플랫폼에서
                    훌륭한 코드를 작성하는 것이 그 어느 때보다 쉬워졌습니다.
                </h4>
                <h5>Swift의 새로운 기능</h5>
            </li>
        </ul>
        <ul class="right">
            <li>
                <img src="./images/xcode-cloud-96x96_2x.png" alt="code"/>
                <h3>Xcode Cloud</h3>
                <h4>
                    Xcode Cloud는 Xcode에 내장된 지속적인 통합 및 배포 서비스입니다.
                </h4>
                <h5>Xcode Cloud의 새로운 기능</h5>
            </li>
            <li>
                <img src="./images/swiftui-96x96_2x.png" alt="code"/>
                <h3>Swift</h3>
                <h4>
                    SwiftUI에서는 최소한의 코드만으로 Swift의 성능을 사용하여 모든
                    Apple 플랫폼 전반에서 멋진 앱을 빌드할 수 있습니다.
                </h4>
                <h5>SwiftUI에 대해 알아보기</h5>
            </li>
        </ul>
    </section>
  )
}

export default DevelopSection3