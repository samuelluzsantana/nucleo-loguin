import { Call, Sms, Whatsapp } from 'iconsax-react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Logo from '../Logo'

export default function Footer() {
  const tabs = [
    { route: 'home', label: 'Início', path: '/' },
    { route: 'como-funciona', label: 'Como Funciona', path: '/como-funciona' },
    { route: 'historia', label: 'Nossa História', path: '/nossa-historia' },
    { route: 'faq', label: 'Dúvidas Frequentes', path: '/duvidas-frequentes' },
    { route: 'contato', label: 'Contato', path: '/contato' },
  ]

  const socialIcons = [
    { icon: <FaInstagram />, href: 'https://www.instagram.com/grafica_inteligente/' },
    {
      icon: <FaFacebook />,
      href: 'https://www.facebook.com/people/GI-Gr%C3%A1fica-Inteligente/100068617605688/',
    },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/nucleologuin' },
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/5511995106712?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20*GI_Gr%C3%A1fica%20Inteligente*',
    },
  ]

  return (
    <footer>
      <div className='flex h-[32em] flex-col bg-loguin-blue px-8 pt-8 lg:h-[15em] lg:flex-row-reverse lg:justify-between'>
        <div className='flex h-full flex-row-reverse lg:flex-row'>
          <div className='links mt-8 w-full text-right lg:flex'>
            <ul className='gap-4 lg:mr-12 lg:flex'>
              {tabs.map((tab, index) => (
                <li key={index}>
                  <a href={tab.path} className='text-white hover:underline'>
                    {tab.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='fale-conosco'>
            <div className='icons mt-8 flex w-[15em] flex-col items-start text-white lg:mr-12 lg:flex-row lg:items-center'>
              <div className='ml-[0.7rem] flex flex-col'>
                <p className='mb-4 text-xl font-bold'>Fale Conosco</p>

                <div className='telefone flex w-full items-center hover:text-loguin-red'>
                  <Call size='22' variant='Bold' />
                  <a
                    href='tel:1126264126'
                    className='ml-2 text-[1rem] transition-colors duration-300'
                  >
                    +55 11 2626-4126
                  </a>
                </div>

                <div className='email mt-4 flex w-full items-center hover:text-loguin-red lg:mt-2'>
                  <Sms size='22' variant='Bold' />
                  <a
                    href='mailto:contato@nucleologuin.com.br'
                    className='ml-2 text-[1rem] transition-colors duration-300'
                  >
                    contato@nucleologuin.com.br
                  </a>
                </div>

                <div className='email mt-4 flex w-full items-center hover:text-loguin-red lg:mt-2'>
                  <Whatsapp size='22' variant='Bold' />
                  <a
                    href='https://wa.me/5511995106712?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20*GI_Gr%C3%A1fica%20Inteligente*'
                    className='ml-2 text-[1rem] transition-colors duration-300'
                  >
                    +55 11 99510-6712
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='social mb-8 flex w-full flex-col items-end lg:ml-12 lg:w-auto'>
          <div className='logo'>
            <Logo height={200} width={200} />
          </div>

          <div className='links-social mt-4 flex w-[10em] gap-3'>
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target='_blank'
                className='text-2xl text-white hover:text-loguin-red'
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className='my-8 lg:hidden'>
          <a
            href='https://www.google.com/maps/place/Av.+Paulista,+1636+-+sala,+1504+-+Cerqueira+C%C3%A9sar,+S%C3%A3o+Paulo+-+SP,+01310-200/@-23.56091,-46.656217,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59ceac541131:0x133777386f0f4c90!8m2!3d-23.56091!4d-46.656217!16s%2Fg%2F11sx5qv9vn?entry=ttu'
            target='_blank'
          >
            <div className='flex items-center justify-center text-sm text-white text-opacity-90'>
              <FaMapMarkerAlt className='mr-2' /> {/* Adiciona o ícone de mapa */}
              <p className='text-center'>
                Av. Paulista, 1636 - Conjunto 1504 - São Paulo - Sp - Brasil - CEP
                01310-200
              </p>
            </div>
          </a>

          <p className='mt-4 w-full text-center text-sm text-white text-opacity-40'>
            Nucleo Loguin - Todos os Direitos reservados
          </p>
        </div>
      </div>

      <div className='hidden bg-loguin-blue pb-8 pr-16 text-right text-sm lg:block'>
        <a
          href='https://www.google.com/maps/place/Av.+Paulista,+1636+-+sala,+1504+-+Cerqueira+C%C3%A9sar,+S%C3%A3o+Paulo+-+SP,+01310-200/@-23.56091,-46.656217,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59ceac541131:0x133777386f0f4c90!8m2!3d-23.56091!4d-46.656217!16s%2Fg%2F11sx5qv9vn?entry=ttu'
          target='_blank'
        >
          <div className='flex cursor-pointer items-center justify-end text-white text-opacity-90 hover:text-loguin-red'>
            <FaMapMarkerAlt className='mr-2' /> {/* Adiciona o ícone de mapa */}
            <p>
              Av. Paulista, 1636 - Conjunto 1504 - São Paulo - Sp - Brasil - CEP 01310-200
            </p>
          </div>
        </a>
        <p className='mt-4 w-full text-right text-white text-opacity-40'>
          Nucleo Loguin - Todos os Direitos reservados
        </p>
      </div>
    </footer>
  )
}
