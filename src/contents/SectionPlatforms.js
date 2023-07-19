import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './SectionPlatforms.css'
function SectionPlatforms() {
  return (
    <section class="platforms">
        <h3>앱 기획하기</h3>
        <h4>
            Apple 플랫폼에서 소프트웨어 개발이 처음인 경우 앱을 빌드하는 데 사용할 도구 및 기술에 대해 알아보세요.<br/>
            멋진 앱을 세상에 선보이는 데 필요한 모든 지식을 Apple의 개발 생태계에서 얻을 수 있습니다.
        </h4>
        <div class="links">
            <Link to="/ios/">
                <p><img src="./svg/icon-ios-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">iOS</p>
            </Link>
            <Link to="/ipados/">
                <p><img src="./svg/icon-ipados-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">iPadOS</p>
            </Link>
            <Link to="/macos/">
                <p><img src="./svg/icon-macos-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">macOS</p>
            </Link>
            <Link to="/tvos/">
                <p><img src="./svg/icon-tvos-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">tvOS</p>
            </Link>
            <Link to="/visionos/">
                <p><img src="./svg/icon-visionos-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">visionOS(영문)</p>
            </Link>
            <Link to="/watchos/">
                <p><img src="./svg/icon-watchos-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">watchOS</p>
            </Link>
        </div>
    </section>
  )
}

export default SectionPlatforms