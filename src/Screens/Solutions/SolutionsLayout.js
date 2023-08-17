import React from 'react';
import SolutionHeaders from './SolutionHeaders';
import SolutionsHero from './SolutionsHero';
import UseCases from './UseCases';
import ThirdFeatureSection from '../Feautures/Sections/ThirdFeatureSection';
import SecondFeatureSection from '../Feautures/Sections/SecondFeatureSection';
import HeroSection from '../Feautures/Sections/HeroSection';
import Footer from '../../components/LayoutGlobals/Footer'

const SolutionsLayout = () => {
  return (
    <div className='flex flex-col'>
        <SolutionHeaders />
        <SolutionsHero />
        <UseCases />

        <ThirdFeatureSection />
        <SecondFeatureSection />
        <HeroSection />

        <Footer />
    </div>
  )
}

export default SolutionsLayout