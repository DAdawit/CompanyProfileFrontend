import { ContactUs } from '@/Components/Home/ContactUs';
import Hero from '@/Components/Service/Hero'
import OurService from '@/Components/Service/OurService'
import Stats from '@/Components/Service/Stats'
import { fetchOurServices } from '@/services/main.services';
import React from 'react'

export default async function Service() {
  const services = await fetchOurServices();
  return (
    <div className='overflow-hidden bg-primary-500'>
        <Hero />
        <OurService services={services} />
        <Stats />
        <ContactUs />
    </div>
  )
}


