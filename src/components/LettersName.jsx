import { useTypewriter, Cursor } from 'react-simple-typewriter'

export function LettersName () {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'Freelancer'],
    loop: {},
    typeSpeed: 320,
    delaySpeed: 80
  })

  return (
    <div className='titles'>
      <section className='content'>
        <h1 className='subtitulo'>
          <span>
            {text}
          </span>
          <Cursor />
        </h1>
        <h1 className='nombreJav'> Javier </h1>
        <h1 className='nombreIza'> Izael </h1>
      </section>
    </div>
  )
}
