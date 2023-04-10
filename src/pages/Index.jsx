import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Skills from "../components/Skills";
import SideProjects from "../components/SideProjects";
import AboutMe from "../components/AboutMe";
import SecondBanner from "../components/SecondBanner";
import WorkExperience from "../components/WorkExperience";
import Footer from "../components/Footer";
import SideProjectModal from "../commons/SideProjectModal";
import LoginModal from "../commons/LoginModal";
import { auth, signOut } from "../utils/firebase";

const Index = () => {
  const [isOpenSideProjectModal, setIsOpenSideProjectModal] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  // 登出
  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("isAuth");
    setIsLogin("");
  };
  useEffect(() => {
    if (isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  return (
    <>
      <Navbar
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        handleLogout={handleLogout}
        setIsOpenLoginModal={setIsOpenLoginModal}
      />
      <Home />
      <Skills />
      <SideProjects
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setIsOpenSideProjectModal={setIsOpenSideProjectModal}
      />
      <div
        id='about-me'
        className=' w-full h-full bg-downSection dark:bg-darkDownSection bg-fixed bg-cover bg-center py-8'
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
      {isOpenLoginModal && (
        <LoginModal
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          isOpenLoginModal={isOpenLoginModal}
          setIsOpenLoginModal={setIsOpenLoginModal}
        />
      )}
    </>
  );
};

export default Index;
