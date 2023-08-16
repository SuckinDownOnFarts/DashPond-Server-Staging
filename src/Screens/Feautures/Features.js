import React from 'react';
import Header from './Sections/FeatureHeader';
import SecondFeatureSection from './Sections/SecondFeatureSection';
import HeroSection from './Sections/HeroSection';
import ThirdFeatureSection from './Sections/ThirdFeatureSection';
import Footer from '../../components/LayoutGlobals/Footer';

const Features = () => {
  
    return (
        <div>
            <div className='flex items-center min-h-[calc(80vh-60px)]'>
                <Header />
            </div>

            <ThirdFeatureSection />

            <SecondFeatureSection />

            <HeroSection />

            <Footer />
        </div>
    )
}

export default Features