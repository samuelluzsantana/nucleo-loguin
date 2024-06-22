import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
// context
import { PrimeReactProvider } from 'primereact/api'

// styles
import './styles/global.css'
import 'react-toastify/dist/ReactToastify.css'

import 'primereact/resources/themes/lara-light-cyan/theme.css'

// landing
import Home from './pages/home'
// faq
import Faq from './pages/faq'
//nossa historia
import NossaHistoria from './pages/nossa-historia'
import ComoFunciona from './pages/como-funciona'

const root = document.getElementById('root')
createRoot(root!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/duvidas-frequentes' element={<Faq />} />
          <Route path='/nossa-historia' element={<NossaHistoria />} />
          <Route path='/como-funciona' element={<ComoFunciona />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
)
