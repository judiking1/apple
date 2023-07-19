import React, { Fragment } from 'react'
import './Home.css'
import Header from './structure/Header'
import TopBanner from './structure/TopBanner'
import Main from './structure/Main'
import Aside from './structure/Aside'
import Footer from './structure/Footer'
function Home() {
  return (
    <Fragment>
        <Header/>
        <TopBanner/>
        <Main/>
        <Aside/>
        <Footer/>
    </Fragment>
  )
}

export default Home