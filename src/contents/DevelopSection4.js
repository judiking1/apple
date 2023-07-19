import React from 'react'
import './DevelopSection4.css'
function DevelopSection4() {
  return (
    <section class="platforms_four">
        <h3>Apple 플랫폼</h3>
        <h4>
            Apple 플랫폼에서 최신 고급 기능을 사용하여 매끄럽게 통합되는 앱을 개발할 수 있습니다.
        </h4>
        <h5>더 알아보기</h5>
        <div class="links">
            <a href="/ios/">
                <p><img src="./svg/icon-ios-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">iOS</p>
            </a>
            <a href="/ipados/">
                <p><img src="./svg/icon-ipados-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">iPadOS</p>
            </a>
            <a href="/macos/">
                <p><img src="./svg/icon-macos-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">macOS</p>
            </a>
            <a href="/tvos/">
                <p><img src="./svg/icon-tvos-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">Apple tvOS</p>
            </a>
            <a href="/visionos/">
                <p><img src="./svg/icon-visionos-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">visionOS(영문)</p>
            </a>
            <a href="/watchos/">
                <p><img src="./svg/icon-watchos-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">watchOS</p>
            </a>
        </div>
    </section>
  )
}

export default DevelopSection4