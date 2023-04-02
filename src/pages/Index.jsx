import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Skills from "../components/Skills";
import SideProjects from "../components/SideProjects";
import AboutMe from "../components/AboutMe";
import SecondBanner from "../components/SecondBanner";
import WorkExperience from "../components/WorkExperience";
import Footer from "../components/Footer";
import SideProjectModal from "../commons/SideProjectModal";

const Index = () => {
  const [isOpenSideProjectModal, setIsOpenSideProjectModal] = useState(false);
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <SideProjects setIsOpenSideProjectModal={setIsOpenSideProjectModal} />
      <div
        id='about-me'
        className=' w-full h-full bg-downSection bg-fixed bg-cover bg-center py-8'
      >
        <AboutMe />
        <SecondBanner />
        <WorkExperience />
      </div>
      <Footer />
      <SideProjectModal
        isOpenSideProjectModal={isOpenSideProjectModal}
        setIsOpenSideProjectModal={setIsOpenSideProjectModal}
      />
    </>
  );
};

export default Index;
