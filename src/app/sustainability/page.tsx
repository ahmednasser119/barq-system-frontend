import React from 'react'
import SustainabilityHeroSection from '@/components/sustainability/hero-section'
import SocialImpactSection from '@/components/sustainability/social-impact-section'
import EnvironmentalSection from '@/components/sustainability/environmental-section'
import Footer from '@/components/footer'

const SustainabilityPage = () => {
    return (
        <div>
            <SustainabilityHeroSection />
            <SocialImpactSection />
            {/* <EnvironmentalSection /> */}
            <Footer />
        </div>
    )
}

export default SustainabilityPage