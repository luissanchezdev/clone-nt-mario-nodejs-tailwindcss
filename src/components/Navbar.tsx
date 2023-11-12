import headerLogo from '../assets/img/logo.png'
import { navLinks } from '../constants'

function Navbar() {
  const renderNavLinks : () => JSX.Element[] = () => {
    return (
      navLinks.map( (link, index) => {
        if (index === 3 ) {
          return (
            <li key={ crypto.randomUUID() }>
              <a href={ link.href } className='link link-extended'>{ link.label }</a>
            </li>
          )
        }
        else if (index === 4 ) {
          return (
            <li key={ crypto.randomUUID() }>
              <a href={ link.href } className='link link-buy'>{ link.label }</a>
            </li>
          )
        }
        /* return (
          <li key={ crypto.randomUUID() }>
            <a href={ link.href } className='link'>{ link.label }</a>
          </li>
        ) */
        else {
          return (
            <li key={ crypto.randomUUID() }>
              <a href={ link.href } className='link'>{ link.label }</a>
            </li>
          )
        }
          
        }
      )
    )
  }


  return (
    <header className="container bg-yellow-300 md:bg-red-blue xl:bg-red-500 2xl:bg-gray-800 mx-auto">
        <nav className="flex justify-between lg:justify-start items-center p-2">
          <div className='w-1/6'>
            <a href={ '/' } className='p-2 block'>
              <img 
                src={ headerLogo } 
                alt='logo'
                className='logo'
                width={ 100}
              />
            </a>
          </div>
          <div className='links hidden lg:block w-1/6 md:w-4/6'>
            <ul className='menu flex items-center justify-center gap-5'>
              { renderNavLinks() }
              {/* { navLinks.map( link => {
                return (
                  <li key={ crypto.randomUUID() }>
                    <a href={ link.href } >{ link.label }</a>
                  </li>
                )
              }) } */}
            </ul>
          </div>
        </nav>
      </header>
  )
}

export default Navbar
