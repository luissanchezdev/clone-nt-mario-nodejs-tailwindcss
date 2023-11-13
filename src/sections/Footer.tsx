const Footer = () => {
  return (
    <>
      <section className='bg-black'>
        <div className="bg-wave-pattern bg-repeat-x h-6 relative -top-4">        </div>
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

export default Footer