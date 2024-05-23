import { Routes, Route } from 'react-router-dom';

// landing
import Home from '@/pages/home';
// faq
import Faq from '@/pages/faq';
//nossa historia
import NossaHistoria from '@/pages/nossa-historia';

export const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/duvidas-frequentes" element={<Faq />} />
        <Route path="/nossa-historia" element={<NossaHistoria />} />
      </Routes>
  );
};

