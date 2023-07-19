import React, { Fragment } from 'react'
import Header from '../structure/Header'
import Aside from '../structure/Aside'
import Footer from '../structure/Footer'
import DevelopSection1 from '../contents/DevelopSection1'
import DevelopAside from '../contents/DevelopAside'
import DevelopSection2 from '../contents/DevelopSection2'
import DevelopSection3 from '../contents/DevelopSection3'
import DevelopSection4 from '../contents/DevelopSection4'
function Develop() {
  return (
    <Fragment>
        <Header/>
        <main>
            <DevelopSection1/>
            <DevelopAside/>
            <DevelopSection2/>
            <DevelopSection3/>
            <DevelopSection4/>
        </main>
        <Aside/>
        <Footer/>
    </Fragment>
    
  )
}

export default Develop