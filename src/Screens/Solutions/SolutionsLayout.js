import React from 'react';
import SolutionHeaders from './SolutionHeaders';
import SolutionsHero from './SolutionsHero';
import UseCases from './UseCases';
import Footer from '../../components/LayoutGlobals/Footer'

const SolutionsLayout = () => {
  return (
    <div className='flex flex-col'>
        <SolutionHeaders />
        <SolutionsHero />
        <UseCases />

        <Footer />
    </div>
  )
}

export default SolutionsLayout