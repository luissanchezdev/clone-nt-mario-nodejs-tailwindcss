import headerLogo from '../assets/img/logo.png'
import { navLinks } from '../constants'

function Navbar() {
  const handleMenuMobile : () => void = () => {
    const menu = document.querySelector('.menu')
    menu?.classList.toggle('hidden')
  }

  const renderNavLinks : () => JSX.Element = () => {
    return (
      <>
      <div className='links hidden lg:block w-1/6 md:w-4/6'>
        <ul className='flex items-center justify-center gap-5'>
          {navLinks.map( (link, index) => {
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
            else {
              return (
                <li key={ crypto.randomUUID() }>
                  <a href={ link.href } className='link'>{ link.label }</a>
                </li>
              )
            }         
          })}
        </ul>
      </div>
      </>
    )
  }
  const renderNavLinksMobile : () => JSX.Element = () => {
    return (
      <div className='block lg:hidden w-1/6 lg:w-4/6'>
        <a href='#' className='link text-gray-950' id='mobile-menu' onClick={ handleMenuMobile }>Menu</a>
        <ul className='menu hidden w-full absolute z-50 left-0 text-center bg-gray-800 top-24'>
          {navLinks.map( (link, index) => {
            if (index === 3 ) {
              return (
                <li key={ crypto.randomUUID() }>
                  <a href={ link.href } className='my-4 inline-block link link-extended'>{ link.label }</a>
                </li>
              )
            }
            else if (index === 4 ) {
              return (
                <li key={ crypto.randomUUID() }>
                  <a href={ link.href } className='my-4 inline-block link link-buy transition-all duration-500'>{ link.label }</a>
                </li>
              )
            }
            else {
              return (
                <li key={ crypto.randomUUID() }>
                  <a href={ link.href } className='link'>{ link.label }</a>
                </li>
              )
            }          
            }
          )}
        </ul>
      </div>
      )
  } 

  return (
    <header className="bg-yellow-300 md:bg-red-blue xl:bg-red-500 2xl:bg-gray-800 mx-auto">
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
          { renderNavLinks() }
          { renderNavLinksMobile()}        
        </nav>
      </header>
  )
}

export default Navbar
