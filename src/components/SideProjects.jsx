import React, { useEffect } from "react";

const SideProjects = ({
  isLogin,
  setIsLogin,
  setIsOpenSideProjectModal,
  setIsOpenAddSideProjectModal,
  sideProject,
  setSelectedProject,
}) => {
  useEffect(() => {
    if (isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  return (
    <section
      id='sideProjects'
      className='flex flex-col items-center w-full h-full py-8 text-4xl font-bold dark:bg-gray-900 laptop:text-[68px] laptop:leading-[68px] '
    >
      <div className=' flex justify-center py-6 dark:text-white'>
        SIDE PROJECTS
      </div>
      <hr className='title-bottom bg-black dark:bg-white' />
      <div className='w-4/5 max-w-6xl mx-auto grid grid-cols-1 laptop:grid-cols-3 laptop:w-3/5'>
        {sideProject?.map(({ description, title, url, id }) => (
          <SideProject
            key={id}
            id={id}
            url={url}
            title={title}
            description={description}
            setIsOpenSideProjectModal={setIsOpenSideProjectModal}
            setSelectedProject={setSelectedProject}
          />
        ))}
        {isLogin && (
          <div
            key='a'
            className='flex justify-center items-center aspect-[3/4] bg-white text-gray-400 duration-300 cursor-pointer'
            onClick={() => {
              setIsOpenAddSideProjectModal(true);
              document.body.style.overflow = "hidden";
            }}
          >
            <div className=' w-full h-full flex justify-center items-center hover:bg-black/30 hover:text-white duration-300'>
              +
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const SideProject = ({
  id,
  url,
  title,
  description,
  setIsOpenSideProjectModal,
  selectedProject,
  setSelectedProject,
}) => {
  return (
    <div
      key={id}
      className=' relative aspect-[3/4] bg-white flex justify-center items-center bg-cover bg-center'
      style={{ backgroundImage: `url(${url})` }}
      // onClick={() => {setSelectedProject(id)
      // console.log(selectedProject);}}
    >
      <div
        className='absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center border-2 border-transparent text-white font-normal tracking-wider bg-black/50 pt-4 opacity-0 hover:opacity-100 duration-700 cursor-pointer '
        onClick={() => {
          setIsOpenSideProjectModal(true);
          setSelectedProject(id);
          document.body.style.overflow = "hidden";
        }}
      >
        <h3 className=' text-xl '>{title}</h3>
        <div className=' w-4/5 text-base text-left overflow-hidden'>
          {description.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideProjects;
