import heroImage from '../assets/img/hero.jpg'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <img src= { heroImage } alt='hero' />
      </section>
      <section>
          <div className=' bg-hero-pattern h-6 bg-repeat-x relative -top-2' />
          <div className=' bg-wave-pattern-dots text-center p-4 flex md:flex-row flex-col gap-3 justify-center'>
            <a href='#' className='inline-block py-3 px-16 bg-black text-white border-transparent border-8 font-bold text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black tansition duration-200 cursor-pointer'>Buy Now</a>
            <a href='#' className='inline-block py-3 px-16 bg-red-500 text-white border-transparent border-8 font-bold text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black tansition duration-200 cursor-pointer'>Watch the Trailer</a>
          </div>
          <div className='bg-hero-pattern bg-repeat-x h-6 relative top-2'></div>
          <div className='bg-red-500 h-6'></div>
      </section>
    </>
  )
}

export default Hero