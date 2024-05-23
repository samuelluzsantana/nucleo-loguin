import React, { useState, useEffect } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { route: 'home', label: 'Início', path: '/', disabled: false },
    { route: 'historia', label: 'Nossa História', path: '/nossa-historia', disabled: false },
    { route: 'grafica', label: 'Gráfica Inteligente', path: '/grafica-inteligente', disabled: true },
    { route: 'servicos', label: 'Serviços', path: '/servicos', disabled: true },
    { route: 'faq', label: 'Dúvidas Frequentes', path: '/duvidas-frequentes', disabled: false }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const activeTab = tabs.findIndex(tab => location.pathname === tab.path);
    setActiveIndex(activeTab !== -1 ? activeTab : 0);
  }, [location.pathname]);

  const handleTabChange = (index) => {
    if (!tabs[index].disabled) {
      navigate(tabs[index].path);
    }
  };

  return (
    <header className="header relative js-header bg-white z-[3] flex">
      <div>
        LOGO
      </div>
      <div className="card">
        <TabView activeIndex={activeIndex} onTabChange={(e) => handleTabChange(e.index)}>
          {tabs.map((tab, index) => (
            <TabPanel key={index} header={tab.label} disabled={tab.disabled}>
              {children}
            </TabPanel>
          ))}
        </TabView>
      </div>
    </header>
  );
};

export default Header;
