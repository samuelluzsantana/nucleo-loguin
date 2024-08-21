import { useEffect, useState } from 'react'

// assets/images
import robson from '@/assets/pfp/robson.png'
import ricardo from '@/assets/pfp/ricardo.png'
import sidney from '@/assets/pfp/sidney.png'

export default function Depoimentos() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const depoimentos = [
    {
      nome: 'Sidney Anversa Victor',
      usuario: 'ABIGRAF\nCONGRAF',
      foto: sidney,
      linkedin: '#',
      site: '#',
      depoimento:
        ' “Desde os anos 90 , o Sistema GI_Gráfica Inteligente possui a gestão total da Congraf, desde orçamentos, pedidos, consulta ao estoque, requisições de compras , controle de produção,  administração dos tempos de processos  e de toda a produção, entregas e notas fiscais, inclusive com constantes atualizações fiscais e tributárias, possuindo ligação direta com a Secretaria da Fazenda. Também durante as fases de implantação de ISO, o sistema foi fundamental para melhorias em controle de qualidade de processos e produtos”. ',
    },
    {
      nome: 'Ricardo Cruz',
      usuario: 'Ricargraf',
      foto: ricardo,
      linkedin: '#',
      site: '#',
      depoimento:
        '“O GI é moderno, fácil de operar, importantíssimo nas horas boas e nas horas não muito boas”.',
    },
    {
      nome: 'Robson Lopes Ribeiro',
      usuario: 'Skygraf',
      foto: robson,
      linkedin: '#',
      site: '#',
      depoimento:
        '"A atualização tecnológica é uma de nossas principais preocupações. Estamos atualizando continuamente.\n\nO Núcleo Loguin, com seu ERP GI-Gráfica Inteligente tem sido um dos nossos principais parceiros nessa jornada."',
    },
  ]

  return (
    <div className='mb-12 bg-white px-4 py-8 text-loguin-blue md:px-12'>
      <div className='titulo-depoimentos mb-8 text-center'>
        <h3 className='text-2xl font-bold uppercase md:text-3xl'>Depoimentos</h3>
        <p className='mt-2 text-sm font-normal md:text-xl'>
          A força dos nossos parceiros, quem usa recomenda.
        </p>
      </div>

      <div
        className={`cards-depoimentos ${isMobile ? 'flex flex-col space-y-6' : 'flex flex-row space-x-6'}`}
      >
        {depoimentos.map((dep, index) => (
          <div key={index} className='flex-1'>
            <div className='h-full w-full rounded-lg border bg-white p-4 shadow-md'>
              <div className='mb-4 flex items-center'>
                <img
                  src={dep.foto}
                  alt={`foto de perfil do ${dep.nome} da empresa ${dep.usuario}`}
                  className='mr-4 h-12 w-12 rounded-md'
                />
                <div>
                  <p className='font-bold text-gray-900'>{dep.nome}</p>
                  <span className='text-sm font-normal text-blue-700'>{dep.usuario}</span>
                </div>
              </div>
              <p className='text-sm text-gray-600'>{dep.depoimento}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
