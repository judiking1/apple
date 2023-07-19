import React from 'react'
import './FooterNavigation.css'
import { Link } from 'react-router-dom'
function FooterNavigation() {
  return (
    <nav>
        <div>
            <h3><Link to="/discover/">둘러보기</Link></h3>
            <ul>
                <li><Link to="ios">iOS</Link></li>
                <li><Link to="ipados">iPadOS</Link></li>
                <li><Link to="macos">macOS</Link></li>
                <li><Link to="tvos">tvOS</Link></li>
                <li><Link to="watchos">WatchOS</Link></li>
                <li><Link to="safari">Safari and Web</Link></li>
                <li><Link to="games">Games</Link></li>
                <li><Link to="business">Business</Link></li>
                <li><Link to="education">Education</Link></li>
                <li><Link to="wwdc">WWDC</Link></li>
            </ul>
        </div>
        <div>
            <h3><Link to="/design/">디자인</Link></h3>
            <ul>
                <li><Link to="/design/human/">Human Interface guidelines</Link></li>
                <li><Link to="/design/resources/">Resources</Link></li>
                <li><Link to="/design/videos/">videos</Link></li>
                <li><Link to="/design/awards/">Apple Design Awards</Link></li>
                <li><Link to="/fonts/">Fonts</Link></li>
                <li><Link to="/accessibility">Accessibility</Link></li>
                <li><Link to="/localization/">Localization</Link></li>
                <li><Link to="/accessories/">Accessories</Link></li>
            </ul>
        </div>
        <div>
            <h3><Link to="/develop/">개발</Link></h3>
            <ul>
                <li><Link to="/xcode/">Xcode</Link></li>
                <li><Link to="/swift/">Swift</Link></li>
                <li><Link to="/swift-playgrounds/">Swift Playgrounds</Link></li>
                <li><Link to="/testflight/">TestFlight</Link></li>
                <li><Link to="/documentation/">Documentation</Link></li>
                <li><Link to="/videos/">Videos</Link></li>
                <li><Link to="/download/">Downloads</Link></li>
            </ul>
        </div>
        <div>
            <h3><Link to="/distribute/">배포</Link></h3>
            <ul>
                <li><Link to="/programs/">Developer Program</Link></li>
                <li><Link to="/app-store/">App Store</Link></li>
                <li><Link to="/app-store/review/">App Review</Link></li>
                <li><Link to="/macos/distribution/">Mac Software</Link></li>
                <li><Link to="/business/distribute/">Apps for Business</Link></li>
                <li><Link to="/safari/extensions/">Safari Extensions</Link></li>
                <li><Link to="/app-store/promote/">Marketing Resources</Link></li>
                <li><Link to="/softwarelicensing/">Trademark Licensing</Link></li>
            </ul>
        </div>
        <div>
            <div>
                <h3><Link to="/support/">지원</Link></h3>
                <ul>
                    <li><Link to="/support/articles/">Articles</Link></li>
                    <li><Link to="https://developer.apple.com/forums/">Developer Forums</Link></li>
                    <li><Link to="/bug-reporting/">Feedback &amp; Bug&nbsp;Reporting</Link></li>
                    <li><Link to="/system-status/">System Status</Link></li>
                    <li><Link to="/contact/">Contact Us</Link></li>
                </ul>
            </div>
            <div>
                <h3><Link to="/account/">계정</Link></h3>
                <ul>
                    <li><Link to="/account/ios/certificate/">Certificates, Identifiers &amp; Profiles</Link></li>
                    <li><Link to="https://appstoreconnect.apple.com/">App Store Connect</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default FooterNavigation