
import {  FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
export function AboutMe () {

return (
<div className="tw-aboutMe">
  <h1 className='titleAboutMe'>Hi, a litle bit of me</h1>
  <p className='infoAboutMe'> I am passionate about web programming, on the frontend and backend. I have completed web development projects  </p>
  <ul className='lenguagues'>
    <li>React </li>
    <li>SQL </li>
    <li>PHP </li>
    <li>JavaScript</li>
    <li>HTML - CSS </li>
  </ul>
  <button className="button"> CV </button>
  
  <div className="containerAboutMe">
    <h1 className='con-info-name'>Javier Izael </h1>
    <h1 className='con-info-place'>Mexico, Qro. 🇲🇽 </h1>
    <h1 className='con-info-age'>Age: 23 </h1>
    <img 
    className='avatarAboutMe'
    alt="avatar" 
    src={`https://unavatar.io/jajajavijavijavier`} 
    />
  </div>

  <div className="containerAboutMe-Dos">
    <a className='con-icons-social-linkedin'href="https://www.linkedin.com/in/javier-garay-padilla-522538233/" > <FaLinkedin/> </a>
    <a className='con-icons-social-github' href="https://github.com/jajajavijavijavier" > <FaGithub/> </a>
    <a className='con-icons-social-discord' href="https://discordapp.com/users/jajajavijavijavier"> <FaDiscord/> </a>
    <a className='con-icons-social-instagram' href="https://www.instagram.com/jajajavijavijavier/" > <FaInstagram/> </a>
  </div>

  <div className="containerAboutMe-Tres">
  
  </div>
</div>

)


}

