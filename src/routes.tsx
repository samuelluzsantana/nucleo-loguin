import { Routes, Route } from 'react-router-dom';

// landing
import Home from '@/pages/home';

export const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  );
};

