import { Helmet } from 'react-helmet'
// components
import Header from '@/components/Header'
// page/sections
import HomeContainer from './sections/HomeContainer'
import NossosParceiros from './sections/NossosParceiros'
import Seguimentos from './sections/Seguimentos'
import Transforme from './sections/Transforme'
import Segmentos from './sections/Segmentos'
import Depoimentos from './sections/Depoimentos'
import ConhecaMais from './sections/ConhecaMais'
import Contato from './sections/Contato'

export default function Home() {
  const pageTitle = 'Núcleo Loguin'

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Header />
      <main>
        <section id='home'>
          <HomeContainer />
        </section>
        <section id='nossos-parceiros'>
          <NossosParceiros />
        </section>
        <section id='seguimentos'>
          <Seguimentos />
        </section>
        <section id='transforme-sua-grafica'>
          <Transforme />
        </section>
        <section id='segmentos-graficos'>
          <Segmentos />
        </section>
        <section id='depoimentos'>
          <Depoimentos />
        </section>
        <section id='conheca-mais-sobre-nosso-software'>
          <ConhecaMais />
        </section>
        <section id='contato'>
          <Contato />
        </section>
      </main>
    </>
  )
}
