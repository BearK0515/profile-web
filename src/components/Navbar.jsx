import React, { useEffect, useState } from "react";
import {
  CakeResumeIcon,
  DarkIcon,
  GithubIcon,
  LightIcon,
  SystemIcon,
  UserIcon,
} from "../assets/icons";
const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [goTop, setGoTOp] = useState(false);
  // dark mode
  const [theme, setTheme] = useState(
    localStorage.getItem("them") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  // dark option
  const option = [
    //模式選項
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "SystemIcon",
      text: "system",
    },
  ];
  // 依條件渲染Icon
  const renderIcon = (icon) => {
    switch (icon) {
      case "sunny":
        return <LightIcon />;
      case "moon":
        return <DarkIcon />;
      case "SystemIcon":
        return <SystemIcon />;
      default:
        return null;
    }
  };
  // window dark mode
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();
  // 漢堡開關
  const handleToogleMenu = () => {
    if (window.innerWidth < 860) {
      setIsOpenMenu(!isOpenMenu);
      if (!isOpenMenu) {
        document.body.style.overflow = "hidden";
      }
      if (isOpenMenu) {
        document.body.style.overflow = "auto";
      }
    } else {
      setIsOpenMenu(true);
    }
  };
  // 回到頂部
  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // 依照視窗大小控制Navbar布局
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 860) {
        setIsOpenMenu(true);
      } else {
        setIsOpenMenu(false);
      }
    };
    if (window.innerWidth >= 860) {
      setIsOpenMenu(true);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // 顯示/不顯示GoTop btn
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setGoTOp(true);
      } else {
        setGoTOp(false);
      }
    });
  }, []);
  // 切換 light / dark / system
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  return (
    <>
      <div className='flex flex-row-reverse bg-basic-black p-6'>
        {/* 漢堡 */}
        <div
          className=' w-6 h-6 z-20 flex items-center cursor-pointer laptop:hidden '
          onClick={handleToogleMenu}
        >
          <div
            className={`menu relative before:content before:-top-2 before:transform ${
              isOpenMenu
                ? "before:-rotate-45 before:translate-y-2 before:transition-all before:duration-300"
                : ""
            } after:content after:top-2 after:transform ${
              isOpenMenu
                ? "after:rotate-45 after:-translate-y-2 after:transition-all after:duration-300"
                : ""
            }`}
            style={{ width: isOpenMenu ? "0" : "" }}
          ></div>
        </div>
        {/* 標籤欄 */}
        <div
          className={`w-screen h-screen flex flex-col items-center gap-4 bg-basic-black p-6 fixed top-0 bottom-0 left-0 right-0  z-10 transition-all duration-300 ease-in-out${
            isOpenMenu ? "" : "transform translate-x-full overflow-hidden"
          }
          laptop:flex-row laptop:h-6 laptop:justify-center laptop:gap-6`}
        >
          {/* <div className='menu-btn normal-case flex items-center gap-6 laptop:gap-2 laptop:order-last laptop:flex-row-reverse'>
            <UserIcon size={30} />
            Log in
          </div> */}
          <div className='laptop:gap-2 laptop:order-last laptop:flex-row-reverse'>
            {option?.map((opt) => (
              <button
                key={opt.text}
                onClick={() => setTheme(opt.text)}
                className={`w-8 h-8 menu-btn duration-100 leading-9 text-xl rounded-full m-1 ${
                  theme === opt.text && "text-sky-600"
                }`}
              >
                {renderIcon(opt.icon)}
              </button>
            ))}
          </div>
          <a href='#home' className='menu-btn' onClick={handleToogleMenu}>
            Home
          </a>
          <a href='#skills' className='menu-btn' onClick={handleToogleMenu}>
            Skills
          </a>
          <a
            href='#sideProjects'
            className='menu-btn'
            onClick={handleToogleMenu}
          >
            Side Projects
          </a>
          <a href='#about-me' className='menu-btn' onClick={handleToogleMenu}>
            About Me
          </a>
          <a
            href='#work-experiece'
            className='menu-btn'
            onClick={handleToogleMenu}
          >
            Work Experience
          </a>
          {/* 外部連結 */}
          <div className='flex gap-4'>
            <a
              href='https://github.com/BearK0515'
              target='_blank'
              className=' cursor-pointer'
              title='Github'
            >
              <GithubIcon size={30} color='white' />
            </a>
            <a
              href='https://www.cakeresume.com/s--qT3QtAnioznjNCIxYr9HAg--/harry-hsu0515'
              target='_blank'
              className=' cursor-pointer'
              title='CakeResume'
            >
              <CakeResumeIcon size={30} color='white' />
            </a>
          </div>
        </div>
      </div>
      {/* GoTOP */}
      <div
        className={`animate-bounce fixed right-10 bottom-10 w-20 h-20 bg-cover bg-center bg-GoTop dark:bg-darkGoTop z-30 ${
          goTop ? "visible opacity-100" : "invisible opacity-0"
        } duration-300 cursor-pointer`}
        onClick={handleGoTop}
      />
    </>
  );
};

export default Navbar;
