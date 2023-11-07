import { useState, useEffect } from 'react'; 

export const LetteringAboutMe = () => {

    const [scrollValue, setScrollValue] = useState(0);
    useEffect(() => {
    const section = document.querySelector('.aboutMeEffect');
    const innerText = document.querySelector('.innerTextAboutMe');

    const handleScroll = () => {
      const value = window.scrollY;
      section.style.clipPath = `circle(${value}px at center center)`;
      innerText.style.left = 100 - value / 5 + '%';
      setScrollValue(value);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
    };

  }, []);

  // const [scrollValueDos, setScrollValueDos] = useState(1460);
  // useEffect(() => {
  //   const aboutme = document.querySelector('.aboutMeInfo');

  //   const handleScrollDos = () => {
  //     const valueDos = window.scrollY;
  //     aboutme.style.left = scrollValue > 1460 ? 100 - scrollValue / 14.5 + '%' : ''
  //     aboutme.style. = scrollValue > 1460 ? 100 - scrollValue / 5 + '%' : ''
  //     setScrollValueDos(valueDos);
  //   };
    
  //   window.addEventListener('scroll', handleScrollDos);
  //   return () => {
  //     window.removeEventListener('scroll', handleScrollDos);
      
  //   };

  // }, [scrollValue]);




return (
  <div className=''>
    <h2 className='innerTextAboutMe'>About me </h2>
  </div>
)

}