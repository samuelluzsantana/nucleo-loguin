import { Helmet } from 'react-helmet'
// components
import Header from '@/components/Header'
// page/sections
import HomeContainer from './sections/HomeContainer'
import NossosParceiros from './sections/NossosParceiros'
import Seguimentos from './sections/Seguimentos'
import Transforme from './sections/Transforme'

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
      </main>
    </>
  )
}
