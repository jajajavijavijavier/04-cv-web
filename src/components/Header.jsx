import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const HeaderMenu = () => {
  return (
    <header className='headerStyle'>
      <div className='redes-header'>
        <img
          className='tw-followCard-avatar'
          alt='avatar'
          src='https://unavatar.io/jajajavijavijavier'
        />
        <a
          className='icons-social'
          href='https://github.com/jajajavijavijavier'
        >
          <FaGithub />
        </a>
        <a
          className='icons-social'
          href='https://www.linkedin.com/in/javier-garay-padilla-522538233/'
        >
          <FaLinkedin />
        </a>
      </div>
      <div className='menus'>
        <nav>
          <ul className='navListStyle'>
            <li className='navItemStyle'>
              <a href='#part-home'>Home</a>
            </li>
            <li className='navItemStyle'>
              <a href='#part-aboutme'>About Me</a>
            </li>
            <li className='navItemStyle'>
              <a href='#part-projects'>Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
