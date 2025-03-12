import AboutDetail from '@/Components/About/AboutDetail'
import AboutTimeline from '@/Components/About/AboutTimeline'
import AboutUs from '@/Components/About/AboutUs'
import Team from '@/Components/About/Team'
import Vision from '@/Components/About/Vision'
import React from 'react'

const about = () => {
  return (
    <div className='overflow-hidden bg-bgPrimary'>
        <AboutUs />
        <AboutDetail />
        <Vision />
        <Team />
        <AboutTimeline />
    </div>
  )
}

export default about