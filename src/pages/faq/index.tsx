// react
import Header from '@/components/Header';
import { Helmet } from 'react-helmet';

export default function Faq() {
  const pageTitle = 'Duvidas Frequentes';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Header />
      <p>FAQ</p>
    </>
  );
}
