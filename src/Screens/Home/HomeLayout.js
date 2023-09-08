import React from 'react';
import SolutionHeaders from './HomeSections/SolutionHeaders';
import SolutionsHero from './HomeSections/SolutionsHero';
import UseCases from './HomeSections/UseCases';
import ThirdFeatureSection from './HomeSections/ThirdFeatureSection';
import SecondFeatureSection from './HomeSections/SecondFeatureSection';
import HeroSection from './HomeSections/HeroSection';
import Footer from '../../components/LayoutGlobals/Footer';

const HomeLayout = () => {
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

export default HomeLayout