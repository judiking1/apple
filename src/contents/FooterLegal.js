import React from 'react'
import './FooterLegal.css'
import { Link } from 'react-router-dom'
function FooterLegal() {
  return (
    <section id="legal">
        <h3>
            최신 개발자 소식을 보려면 <Link to="/news/">뉴스 및 업데이트</Link> 를 방문하십시오.
        </h3>
        <div>
            <div>
                Copyright &copy; 2023
                <Link to="https://www.aplle.com">Apple Inc.</Link>
                모든 권리 보유.
            </div>
            <div>
                <Link to="/terms/">약관</Link>
                <Link to="/policy/">개인정보 처리방침</Link>
                <Link to="/term/">계약 및 지침</Link>
            </div>
            <div>
                <select>
                    <option value="https://developer.apple.com/">English</option>
                    <option value="https://developer.apple.com/cn/">简体中文</option>
                    <option value="https://developer.apple.com/jp/">日本語</option>
                    <option value="https://developer.apple.com/kr/">한국어</option>
                </select>
                <span></span>
            </div>
        </div>
    </section>
  )
}

export default FooterLegal