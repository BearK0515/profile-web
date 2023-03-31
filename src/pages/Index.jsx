import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Skills from "../components/Skills";
import SideProjects from "../components/SideProjects";
import AboutMe from "../components/AboutMe";
import SecondBanner from "../components/SecondBanner";
import WorkExperience from "../components/WorkExperience";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <SideProjects />
      <div className=' w-full h-full bg-downSection bg-fixed bg-cover bg-center py-8'>
        <AboutMe />
        <SecondBanner />
        <WorkExperience />
      </div>
      <Footer />
    </>
  );
};

export default Index;
