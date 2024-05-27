import React from "react";
import { useLocation } from "react-router-dom";

const Header = ({ children }) => {
  const location = useLocation();

  const tabs = [
    { route: "home", label: "Início", path: "/", disabled: false },
    {
      route: "historia",
      label: "Nossa História",
      path: "/nossa-historia",
      disabled: true,
    },
    {
      route: "grafica",
      label: "Gráfica Inteligente",
      path: "/grafica-inteligente",
      disabled: true,
    },
    { route: "servicos", label: "Serviços", path: "/servicos", disabled: true },
    {
      route: "faq",
      label: "Dúvidas Frequentes",
      path: "/duvidas-frequentes",
      disabled: false,
    },
  ];

  function onMenuToggle(e: React.MouseEvent<HTMLParagraphElement>) {
    const navlinks = document.querySelector(".navLinks");
    const menuIcon = e.currentTarget as HTMLParagraphElement;

    const currentState = menuIcon.getAttribute("data-state");
    const newState = currentState === "menu" ? "close" : "menu";

    menuIcon.setAttribute("data-state", newState);
    navlinks.classList.toggle("left-[0%]");
  }

  return (
    <>
      <header className="relative px-3 py-2">
        <nav className="flex justify-between">
          <div className="w-[130px] md:w-[200px] flex items-center">Logo</div>

          <div className="flex items-center gap-3">
            <div className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                {tabs.map((tab) => (
                  <li
                    key={tab.route}
                    className={`relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 ${
                      tab.disabled ? "pointer-events-none opacity-50" : ""
                    } ${location.pathname === tab.path ? "after:w-full" : ""}`}
                  >
                    <a href={tab.path}>{tab.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <p
                onClick={onMenuToggle}
                className="text-[30px] cursor-pointer md:hidden"
              >
                x
              </p>
            </div>
          </div>
          <div className="flex">Button</div>
        </nav>
      </header>
    </>
  );
};

export default Header;
