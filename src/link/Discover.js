import React, { Fragment } from 'react'
import Header from '../structure/Header'
import Aside from '../structure/Aside'
import Footer from '../structure/Footer'
import DiscoverSection1 from '../contents/DiscoverSection1'
import DiscoverSection2 from '../contents/DiscoverSection2'
import DiscoverSection3 from '../contents/DiscoverSection3'
import DiscoverSection4 from '../contents/DiscoverSection4'
function Discover() {
  return (
    <Fragment>
        <Header/>
        <main>
            <DiscoverSection1/>
            <DiscoverSection2/>
            <DiscoverSection3/>
            <DiscoverSection4/>
        </main>
        <Aside/>
        <Footer/>
    </Fragment>
  )
}

export default Discover