import imageContact from '../assets/img/activity_img3.png'

const Contact = () => {
  return (
    <>
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
            <img src={ imageContact} className='md:w-full' alt="mario" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact