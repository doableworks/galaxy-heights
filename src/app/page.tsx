import AboutSection from '@/components/common/AboutSection'
import AboutEmeraldSection from '@/components/common/AboutEmeraldSection'
import AmenitiesSection from '@/components/common/AmenitiesSection'
import ConnectivitySection from '@/components/common/ConnectivitySection'
import ContactUs from '@/components/common/ContactUs'
import FaqSection from '@/components/common/FaqSection'
import FloorPlanSection from '@/components/common/FloorPlanSection'
import Footer from '@/components/common/Footer'
import GallerySection from '@/components/common/GallerySection'
import HeroSection from '@/components/common/HeroSection'
import HighlightsSection from '@/components/common/HighlightsSection'
import PricesSection from '@/components/common/PricesSection'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutEmeraldSection />
      <AboutSection />
      <ConnectivitySection />
      <AmenitiesSection />
      <HighlightsSection />
      <GallerySection />
      <FloorPlanSection />
      <PricesSection />
      <FaqSection />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default page