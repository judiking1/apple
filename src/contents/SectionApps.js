import React from 'react'
import './SectionApps.css'
function SectionApps() {
    const bgText1 = 'url(./images/residentevilvillage-large_2x.jpg)';
    const style1 = {backgroundImage:bgText1};
  return (
    <section class="apps">
        <ul>
            <li>
                <h4><span>Apple</span> 개발자를 위한<br/>새로운 기능</h4>
                <div>
                    <img src="./images/sdk-17-256x256_2x.png" alt="apps"/>
                </div>
            </li>
            <li>
                <h4>
                    visionOS
                    <p>(영문)</p>
                </h4>
                <div>
                    <img src="./images/vision-home-large.png" alt="apps"/>
                </div>
            </li>
            <li>
                <h4>iOS 17</h4>
                <div>
                    <img src="./images/ios-17-large.png" alt="apps"/>
                </div>
            </li>
            <li>
                <h4>iPadOS 17</h4>
                <div>
                    <img src="./images/ipados-17-b-large.png" alt="apps"/>
                </div>
            </li>
            <li>
                <h4>macOS Sonoma</h4>
                <div>
                    <img src="./images/macos-14-c-large.png" alt="apps"/>
                </div>
            </li>
            <li>
                <h4>watchOS 10</h4>
                <div>
                    <img src="./images/watchos-10-large.png" alt="apps"/>
                </div>
            </li>
            <li>
                <h4>tvOS 17</h4>
                <div>
                    <img src="./images/tvos-device-b.png" alt="apps"/>
                </div>
            </li>
            <li style={style1}>
                <div>
                    <h4>Apple 디자인 어워드</h4>
                    <h5>올해의 수상작을 만나보세요</h5>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default SectionApps