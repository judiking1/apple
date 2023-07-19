import React from 'react'
import Homepage from '../contents/Homepage'
import SectionApps from '../contents/SectionApps'
import SectionPlatforms from '../contents/SectionPlatforms'
import SectionBanner from '../contents/SectionBanner'
import SectionMember from '../contents/SectionMember'
function Main() {
  return (
    <main>
        <Homepage/>
        <SectionApps/>
        <SectionPlatforms/>
        <SectionBanner/>
        <SectionMember/>
    </main>
  )
}

export default Main