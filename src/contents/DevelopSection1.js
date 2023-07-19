import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './DevelopSection1.css'
function DevelopSection1() {
  return (
    <section class="platforms_three">
        <div class="links">
            <Link to="/ios/">
                <p><img src="./svg/icon-xcode-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">Xcode</p>
            </Link>
            <Link to="/ipados/">
                <p><img src="./svg/icon-xcode-cloud-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">Xcode Cloud</p>
            </Link>
            <Link to="/macos/">
                <p><img src="./svg/icon-swift-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">Swift</p>
            </Link>
            <Link to="/tvos/">
                <p><img src="./svg/icon-swiftui-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">SwiftUI</p>
            </Link>
            <Link to="/visionos/">
                <p><img src="./svg/icon-testflight-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">TestFlight</p>
            </Link>
            <Link to="/watchos/">
                <p><img src="./svg/icon-documentation-f-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">문서(영문)</p>
            </Link>
            <Link to="/appstore/">
                <p><img src="./svg/icon-videos-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">비디오(영어)</p>
            </Link>
            <Link to="/program/">
                <p><img src="./svg/icon-downloads-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">다운로드(영문)</p>
            </Link>
        </div>
    </section>
  )
}

export default DevelopSection1