import { Helmet } from 'react-helmet'
// components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// page/sections
import HomeContainer from './sections/HomeContainer'
import NossosParceiros from './sections/NossosParceiros'
import Seguimentos from './sections/Seguimentos'
import Transforme from './sections/Transforme'
import Segmentos from './sections/Segmentos'
import Depoimentos from './sections/Depoimentos'
import ConhecaMais from './sections/ConhecaMais'
import Contato from './sections/Contato'
import Visao360 from './sections/Visao360'
import Implantar from '../como-funciona/Implantar'

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
        <section id='visao-360'>
          <Visao360 />
        </section>
        <section id='porque-implantar'>
          <Implantar titulo='por que gráficas de expressão evoluíram com o sistema gi_gráfica inteligente?' />
        </section>
        <section id='segmentos-graficos'>
          <Segmentos />
        </section>
        <section id='transforme-sua-grafica'>
          <Transforme />
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
        <Footer />
      </main>
    </>
  )
}
