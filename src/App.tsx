import { Navbar } from './components/index'
import { Hero, Banner, Contact, Footer } from './sections/index'

function App() {

  return (
    <div className='xsm:w-full max-w-[1920px] mx-auto'>
      <Navbar />
      <Hero />
      <Banner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
