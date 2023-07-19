import React from 'react'
import { Link } from 'react-router-dom'
import './TopBanner.css'
function TopBanner() {
  return (
    <aside class="top_banner">
        <h4>
            <Link to="#">Apple Pay가 대한민국에 출시되었습니다.</Link>
        </h4>
    </aside>
  )
}

export default TopBanner