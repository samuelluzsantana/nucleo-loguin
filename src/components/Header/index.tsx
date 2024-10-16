import React from 'react'
import { useLocation } from 'react-router-dom'

import { PiNotchesBold } from 'react-icons/pi'
import Logo from '../Logo'

const Header = () => {
  const location = useLocation()

  const tabs = [
    { route: 'home', label: 'Início', path: '/', disabled: false },
    {
      route: 'como-funciona',
      label: 'Como Funciona',
      path: '/como-funciona',
      disabled: false,
    },
    {
      route: 'historia',
      label: 'Nossa História',
      path: '/nossa-historia',
      disabled: false,
    },
    {
      route: 'faq',
      label: 'Dúvidas Frequentes',
      path: '/duvidas-frequentes',
      disabled: false,
    },
    { route: 'Contato', label: 'Contato', path: '/contato', disabled: false },
  ]

  function onMenuToggle(e: React.MouseEvent<HTMLParagraphElement>) {
    const navlinks = document.querySelector('.navLinks')
    const menuIcon = e.currentTarget as HTMLParagraphElement

    const currentState = menuIcon.getAttribute('data-state')
    const newState = currentState === 'menu' ? 'close' : 'menu'

    menuIcon.setAttribute('data-state', newState)
    navlinks.classList.toggle('left-[0%]')
  }

  return (
    <>
      <header className='relative z-50 px-7 py-7 md:px-[4em]'>
        <nav className='flex items-center justify-between'>
          <div className='flex w-[130px] items-center md:w-[200px]'>
            <Logo height={100} width={100} />
          </div>

          <div className='flex items-center gap-3'>
            <div className='navLinks absolute left-[-100%] top-[100%] flex h-[85vh] w-full gap-[1.5vw] px-5 py-5 duration-500 md:static md:h-auto md:w-auto md:items-center md:py-0'>
              <div className='absolute bottom-0 left-0 h-full w-full backdrop-blur-lg md:hidden'></div>

              <ul className='flex flex-col gap-8 text-white md:flex-row md:items-center md:gap-[3vw]'>
                {tabs.map(tab => (
                  <li
                    key={tab.route}
                    className={`relative max-w-fit py-1 pr-3 font-normal after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-loguin-red after:transition-all after:duration-300 hover:after:w-full md:pr-0 ${
                      tab.disabled ? 'pointer-events-none select-none opacity-50' : ''
                    } ${location.pathname === tab.path ? 'after:w-full' : ''}`}
                  >
                    <a href={tab.path}>{tab.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex items-center gap-2'>
              <span
                onClick={onMenuToggle}
                className='relative z-[11] cursor-pointer text-[30px] text-white md:hidden'
              >
                <PiNotchesBold size={20} />
              </span>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
