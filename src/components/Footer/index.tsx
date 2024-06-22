import { Call, Sms } from 'iconsax-react'
import { FaTiktok, FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Logo from '../Logo'

export default function Footer() {
  const links = [
    { name: 'Política de Privacidade', href: '#privacy' },
    { name: 'Legal', href: '#legal' },
    { name: 'Suporte', href: '#support' },
    { name: 'Contato', href: '#contact' },
  ]

  const socialIcons = [
    { icon: <FaTiktok />, href: '#tiktok' },
    { icon: <FaInstagram />, href: '#instagram' },
    { icon: <FaFacebook />, href: '#facebook' },
    { icon: <FaLinkedin />, href: '#linkedin' },
    { icon: <FaWhatsapp />, href: '#whatsapp' },
  ]

  return (
    <footer>
      <div className='flex h-[32em] flex-col bg-loguin-blue px-8 pt-8 md:h-[15em] md:flex-row-reverse md:justify-between'>
        <div className='flex h-full flex-row-reverse md:flex-row'>
          <div className='links mt-8 w-full text-right md:flex'>
            <ul className='gap-4 md:mr-12 md:flex'>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className='text-white hover:underline'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='fale-conosco'>
            <div className='icons mt-8 flex w-[15em] flex-col items-start text-white md:mr-12 md:flex-row md:items-center'>
              <div className='flex flex-col'>
                <p className='mb-4 text-xl font-bold'>Fale Conosoco</p>

                <div className='telefone flex w-full items-center hover:text-loguin-red'>
                  <Call size='22' variant='Bold' />
                  <a
                    href='tel:1126264126'
                    className='ml-2 text-[1rem] transition-colors duration-300'
                  >
                    11 2626-4126
                  </a>
                </div>

                <div className='email mt-4 flex w-full items-center hover:text-loguin-red md:mt-2'>
                  <Sms size='22' variant='Bold' />
                  <a
                    href='mailto:contato@nucleologuin.com.br'
                    className='ml-2 text-[1rem] transition-colors duration-300'
                  >
                    contato@nucleologuin.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='social mb-8 flex w-full flex-col items-end md:ml-12 md:w-auto'>
          <div className='logo'>
            <Logo height={200} width={200} />
          </div>

          <div className='links-social mt-4 flex w-[10em] gap-3'>
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className='text-2xl text-white hover:text-loguin-red'
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className='my-8 md:hidden'>
          <p className='w-full text-center text-sm text-white text-opacity-50'>
            Nucleo Loguin - Todos os Direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
