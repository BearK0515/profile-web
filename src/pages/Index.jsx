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
import AddSideProjectModal from "../commons/AddSideProjectModal";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

const Index = () => {
  const [isOpenSideProjectModal, setIsOpenSideProjectModal] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenAddSideProjectModal, setIsOpenAddSideProjectModal] =
    useState(false);
  const login = localStorage.getItem("isAuth");
  const [isLogin, setIsLogin] = useState(login);
  const [sideProject, setSideProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // 登出
  const handleLogout = () => {
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

  //GET side projects
  useEffect(() => {
    const fetchSideProjects = async () => {
      try {
        const sideProjectsRef = collection(db, "sideProjecs");
        const snapshot = await getDocs(sideProjectsRef);
        const sideProjects = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setSideProject(sideProjects);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchSideProjects();
  }, [isOpenAddSideProjectModal]);

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
        setIsOpenAddSideProjectModal={setIsOpenAddSideProjectModal}
        sideProject={sideProject}
        setSideProject={setSideProject}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
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
        project={sideProject.find((project) => project.id === selectedProject)}
        sideProject={sideProject}
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
      {isOpenAddSideProjectModal && (
        <AddSideProjectModal
          isOpenAddSideProjectModal={isOpenAddSideProjectModal}
          setIsOpenAddSideProjectModal={setIsOpenAddSideProjectModal}
        />
      )}
    </>
  );
};

export default Index;
