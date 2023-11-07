import './App.css'
import { HeaderMenu } from './components/Header.jsx'
import { LettersName } from './components/LettersName.jsx'
import { AboutMe } from './components/AboutMe.jsx'
import { LetteringAboutMe } from './components/LetteringAboutMe.jsx'
import { IntersectionObserverComponent } from './components/HiddenSection.jsx'
import { FaReact, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa'

function App () {
  return (
    <main>
      <HeaderMenu />
      <IntersectionObserverComponent />

      <div className='hidden' id='part-home'>
        <LettersName />
      </div>

      <section className='aboutMeEffect'>
        <LetteringAboutMe />
      </section>

      <div className='aboutMeInfo hidden' id='part-aboutme'>
        <AboutMe />
      </div>

      <section className='projects hidden ' id='part-projects'>

        <div className='projectsContainer'>
          <a className='linkProject'>Link</a>
          <h1 className='titleProject'>METAMODELO INTRUCCIONAL</h1>
          <p className='resumeProject'>This website creates and stores course metamodels in a database, where users can design courses, search for them, and manage them through the platform.</p>
          <div className='lenguaguesProject'>
            <p className='lenguagues'> <FaCss3Alt />  <FaHtml5 /> <FaDatabase /> </p>
          </div>
        </div>

        <div className='projectsContainerDos'>
          <a className='linkProject'>Link</a>
          <h1 className='titleProject'>Game Gato</h1>
          <p className='resumeProject'>This website is a cat game where each player has a turn created with react</p>
          <div className='lenguaguesProject'>
            <p className='lenguagues'> <FaCss3Alt /> <FaHtml5 /> <FaReact /> </p>
          </div>
        </div>

        <div className='projectsContainerTres'>
          <a className='linkProject'>Link</a>
          <h1 className='titleProject'>Tech Wear</h1>
          <p className='resumeProject'>This website is a page of the tech wear brand where it shows information and products (personal project)</p>
          <div className='lenguaguesProject'>
            <p className='lenguagues'> <FaCss3Alt /> <FaHtml5 />  </p>
          </div>
        </div>

      </section>
    </main>
  )
}

export default App
