import React from "react";

const AboutMe = () => {
  return (
    <section id="about-me" className='flex flex-col items-center max-w-6xl w-4/5 h-full bg-white mx-auto my-8 text-4xl font-bold laptop:text-[68px] laptop:leading-[68px] laptop:w-3/5'>
      <div className=' flex justify-center py-6'>ABOUT ME</div>
      <hr className='title-bottom bg-black' />
      <div className=' text-base px-10'>
        <span className=' block mb-4'>
          我是前端工程師，在Alpha
          Camp完成所有前端課程，及前後分離的Twitter專案。課程完成後，我也與後端合作開發了作品集-寵物購物網。我對軟件開發充滿熱情和好奇，熱衷於學習並在工作中利用我的技能。
        </span>
        <span className=' block mb-4'>
          我有前後分離開發的經驗。在Alpha
          Camp的課程中，我學習了如何使用React和Redux進行前端開發，同時與後端使用RESTful
          進行API的連接。
        </span>
        <span className=' block mb-4'>
          在Twitter專案中，我負責了前端部分的開發工作，並且與後端工程師進行密切的合作，實現了前後端的API串接和RWD。
        </span>
        <span className=' block mb-4'>
          在寵物購物網的開發中，我負責了前端UI和後台管理系統的開發，同時也與後端工程師協同完成了API串接和處理。
        </span>
        <span className=' block mb-4'>
          除了前後分離開發方面的經驗，我還有許多不同行業的背景，包括營養師、食品工廠研發、藥局助理和外送員等。這些經驗讓我能夠快速適應新環境及快速良好的溝通，同時也能為團隊帶來不同的視角和創造力。
        </span>
        <span className=' block mb-4'>
          我具備熱情、好奇心和多樣化的經驗，同時也擁有豐富的前後分離開發經驗。我相信我可以在未來的軟件開發職業生涯中獲得更多的成就。
        </span>
      </div>
    </section>
  );
};

export default AboutMe;
