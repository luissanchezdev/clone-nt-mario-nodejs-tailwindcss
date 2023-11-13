import heroImage from '../assets/img/hero.jpg'
import coinImage from '../assets/img/coin.gif'
import imageFooter from '../assets/img/activity_img3.png'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <img src= { heroImage } alt='hero' />
      </section>
      <section>
          <div className=' bg-wave-pattern h-6 bg-repeat-x relative -top-2' />
          <div className=' bg-wave-pattern-dots text-center p-4 flex md:flex-row flex-col gap-3 justify-center'>
            <a href='#' className='inline-block py-3 px-16 bg-black text-white border-transparent border-8 font-bold text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black tansition duration-200 cursor-pointer'>Buy Now</a>
            <a href='#' className='inline-block py-3 px-16 bg-red-500 text-white border-transparent border-8 font-bold text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black tansition duration-200 cursor-pointer'>Watch the Trailer</a>
          </div>
          <div className='bg-wave-pattern bg-repeat-x h-6 relative top-2'></div>
          <div className=' bg-pattern-characteres-red py-28'>
            <div className='lg:container 2xl:w-3/5 mx-auto md:flex gap-5 md:w-full p-3'>
              <div className='left bg-character-mario bg-no-repeat bg-contain bg-top w-5/6 md:w-1/2 pt-52 max-auto'>
                  <div className="card text-center bg-white 2xl:w-5/6 mx-auto mt-72 rounded-2xl overflow-hidden xl:w-4/5  ">
                    <div className="cover bg-black">
                      <video src='./src/assets/videos/video01.mp4' autoPlay loop muted></video>
                    </div>
                    <div className="content bg-wave-pattern bg-repeat-x relative -top-3">
                      <h3 className='font-black text-4xl py-10'>Play Together</h3>
                      <p className="text-xl">
                        Work with (or aganist ) your friends and family to take down Bowser and his minions.
                      </p>
                      <a href="#" className='btn group'>Watch the trailer <span className='arrow arrow-group'></span></a>
                    </div>
                    <div className="dots flex justify-between p-4">
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  </div>
              </div>
              <div className='right w-5/6 md:w-1/2 text-center mx-auto'>
                <h2 className="font-black text-white text-6xl py-8">Available Now</h2>
                <p className="font-bold text-white text-2xl mx-auto py-10 w-4/5">Team up for a paws-itively adorable adventure!</p>
                <p className="text-white mx-auto w-4/5"> Bowser is up to his old tricks again and only Mario and his friends can save the day!. Use power-ups like the Super Bell, which grants catlike abilities like climbing and scratching, to overcome Bowser and his minions.</p>
                <div className="card text-center bg-white 2xl:w-5/6 mx-auto mt-16 rounded-2xl overflow-hidden xl:w-4/5  ">
                    <div className="cover bg-black">
                      <video src='./src/assets/videos/video02.mp4' autoPlay loop muted></video>
                    </div>
                    <div className="content bg-wave-pattern bg-repeat-x relative -top-3">
                      <h3 className='font-black text-4xl py-10'>Explorer</h3>
                      <p className="text-xl">
                        Mario can int eract with his environment in exciting new ways.
                      </p>
                      <a href="#" className='btn group'>Watch the trailer <span className='arrow arrow-group'></span></a>
                    </div>
                    <div className="dots flex justify-between p-4">
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="footer text-center flex justify-center gap-9 pt-10">
            <img src={ coinImage } alt="coin" className='img-coin' />
            <img src={ coinImage } alt="coin" className='img-coin' />
            <img src={ coinImage } alt="coin" className='img-coin' />
            <img src={ coinImage } alt="coin" className='img-coin hidden sm:block' />
            <img src={ coinImage } alt="coin" className='img-coin hidden sm:block' />
            <img src={ coinImage } alt="coin" className='img-coin hidden sm:block' />          
          </div>
      </section>
      <section className="bg-yellow-dots">
        <div className="bg-wave-pink bg-repeat-x h-6 relative -top-4"></div>
        <div className="xsm:w-full sm:container w-2/3 mx-auto md:flex justify-center items-center text-center">
          <div className="left xl:w-1/3 lg:w-1/2 p-5">
            <h3 className='text-yellow-900 font-black xsm:text-3xl sm:text-4xl'>Cat <br /> transformation <br /> center</h3>
          
          <p className="py-4 text-xl">
            We're not kitten-transform into a cat-tastic new you!
          </p>
          <p>
            <a href="#" className="btn group">Meow! <span className='arrow arrow-group'></span></a>
          </p>
          </div>
          <div className="right xl:w-2/3 lg:w-1/2">
            <img src={ imageFooter} className='md:w-full' alt="mario" />
          </div>
        </div>
      </section>
      <section className='bg-black'>
        <div className="bg-wave-pattern bg-repeat-x h-6 relative -top-4">
          
        </div>
        <div className="container mx-auto text-center py-10 w-2/3">
            <div className="pb-5">
              <a href="#" className="btn group">
                Customer Support
                <span className="arrow arrow-group"></span>
              </a>
              <div className="text-white">
                <p className="py-2">Web temática de Mario Bros</p>
                <p className="py-2">{ new Date().getFullYear() }</p>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Hero