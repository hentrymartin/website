import React from 'react';
import HeaderSection from './HeaderSection';
import AboutMe from './AboutMe';
import MyPhoto from './MyPhoto';
import SkillsSection from './SkillsSection';


const HomePage = () => {
  return (
      <div>
          <HeaderSection/>
          <AboutMe/>
          <MyPhoto/>
          <SkillsSection/>
      </div>
  );
};

export default HomePage;
