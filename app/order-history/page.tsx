import Footer from '@/app/common/footer'
import HeroSection from '@/app/common/hero-section'
import OrderHistoryPage from '@/app/order-history/components/order-history'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <OrderHistoryPage />
      <Footer />
    </div>
  )
}

export default page