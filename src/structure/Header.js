import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <header id="header">
        <nav>
            <ul class="gnb">
                <li class="logo">
                    <Link to="/"><img src="./svg/apple-developer-brandmark.svg" alt="애플로고" class="svg"/></Link>
                </li>
                <li><Link to="/News">뉴스</Link></li>
                <li><Link to="/Discover">둘러보기</Link></li>
                <li><Link to="/Design">디자인</Link></li>
                <li><Link to="/Develop">개발</Link></li>
                <li><Link to="/Distribute">배포</Link></li>
                <li><Link to="/Support">지원</Link></li>
                <li><Link to="/Account">계정</Link></li>
                <li>
                    <Link to="/Search"><img src="./svg/search.svg" alt="돋보기" class="search"/></Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header