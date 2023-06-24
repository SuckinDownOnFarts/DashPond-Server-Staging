import React from 'react';
import Header from './Components/FeatureHeader';
import SecondFeatureSection from './Components/SecondFeatureSection';
import HeroSection from './Components/HeroSection';
import ThirdFeatureSection from './Components/ThirdFeatureSection';
import FeatureFooter from './Components/FeatureFooter';

const Features = () => {
  
    return (
        <div>
            <div className='flex items-center min-h-[calc(70vh-60px)]'>
                <Header />
            </div>

            <HeroSection />

            <SecondFeatureSection />

            <ThirdFeatureSection />

            <FeatureFooter />
        </div>
    )
}

export default Features