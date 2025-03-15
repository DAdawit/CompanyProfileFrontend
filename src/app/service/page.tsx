import Hero from '@/Components/Service/Hero'
import OurService from '@/Components/Service/OurService'
import Stats from '@/Components/Service/Stats'
import React from 'react'

const service = () => {
  return (
    <div className='overflow-hidden bg-primary-50'>
        <Hero />
        <OurService />
        <Stats />
    </div>
  )
}

export default service;
