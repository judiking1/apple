import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './DiscoverSection1.css'
function DiscoverSection1() {
  return (
    <section class="platforms_two">
        <div class="links">
            <Link to="/ios/">
                <p><img src="./svg/icon-ios-f-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">iOS</p>
            </Link>
            <Link to="/ipados/">
                <p><img src="./svg/icon-ipados-f-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">iPadOS</p>
            </Link>
            <Link to="/macos/">
                <p><img src="./svg/icon-macos-f-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">macOS</p>
            </Link>
            <Link to="/tvos/">
                <p><img src="./svg/icon-tvos-f-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">tvOS</p>
            </Link>
            <Link to="/visionos/">
                <p><img src="./svg/icon-visionos-f-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">visionOS(영문)</p>
            </Link>
            <Link to="/watchos/">
                <p><img src="./svg/icon-watchos-f-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">watchOS</p>
            </Link>
            <Link to="/appstore/">
                <p><img src="./svg/icon-app-store-f-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">App Store</p>
            </Link>
            <Link to="/program/">
                <p><img src="./svg/icon-program-f-i.svg" alt="플랫폼아이콘"/></p>
                <p class="nowrap">프로그램</p>
            </Link>
        </div>
    </section>
  )
}

export default DiscoverSection1