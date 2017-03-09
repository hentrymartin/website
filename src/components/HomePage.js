import React from 'react';
import HeaderSection from './HeaderSection';
import AboutMe from './AboutMe';
import MyPhoto from './MyPhoto';
import SkillsSection from './SkillsSection';
import Footer from './Footer';


const HomePage = () => {
  return (
      <div>
          <HeaderSection/>
          <AboutMe/>
          <MyPhoto/>
          <SkillsSection/>
          <Footer/>
      </div>
  );
};

export default HomePage;
