'use client'
import { useState } from 'react'
import Footer from '@/app/common/footer'
import HeroSection from '@/app/common/hero-section'
import PlanOptions from '@/app/pricing-plan/components/plan-options'
import TopBar from '@/app/pricing-plan/components/top-bar'
 
const page = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div>
      <HeroSection />
    <div className='px-4 mx-3 sm:mx-5 md:mx-8'>
    <TopBar isMonthly={isMonthly} togglePlan={() => setIsMonthly(!isMonthly)} />
    <PlanOptions isMonthly={isMonthly} />

     </div>
    <Footer />
    </div>
  )
}

export default page