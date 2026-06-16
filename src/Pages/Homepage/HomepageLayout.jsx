import React from "react";
import MainContainer from "../../Components/Container/MainContainer";
import HomeHero from "./Sections/HomeHero";
import HeroRatings from "./Sections/HeroRatings";
import HeroPricing from "./Sections/HeroPricing";
import HeroWorkflow from "./Sections/HeroWorkflow";
import HeroProducts from "./Sections/HeroDigitalProducts/HeroProducts";

const HomepageLayout = () => {
  return (
    <div>
      <MainContainer>
        <HomeHero></HomeHero>
        <HeroRatings></HeroRatings>
        <HeroProducts></HeroProducts>
        <HeroPricing></HeroPricing>
        <HeroWorkflow></HeroWorkflow>
      </MainContainer>
    </div>
  );
};

export default HomepageLayout;
