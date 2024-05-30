import React from "react";
import { useLocation } from "react-router-dom";

import { PiNotchesBold } from "react-icons/pi";
import Logo from "../Logo";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Header = () => {
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
      <header className="relative px-7 md:px-[10em]  py-7 z-50">
        <nav className="flex justify-between items-center">
          <div className="w-[130px] md:w-[200px] flex items-center">
            <Logo height={100} width={100} />
          </div>
          <div className="flex items-center gap-3">
            <div className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-8 text-white">
                {tabs.map((tab) => (
                  <li
                    key={tab.route}
                    className={`relative font-normal max-w-fit pr-3 md:pr-0 py-1 after:bg-loguin-red after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 ${tab.disabled ? "pointer-events-none opacity-50 select-none" : ""
                      } ${location.pathname === tab.path ? "after:w-full" : ""}`}
                  >
                    <a href={tab.path}>{tab.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <span
                onClick={onMenuToggle}
                className="text-[30px] cursor-pointer md:hidden text-white"
              >
                <PiNotchesBold size={20} />
              </span>
            </div>
          </div>
          <div className="hidden md:block ">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-white text-loguin-blue flex items-center space-x-2 font-semibold"
            >
              <span>Contato</span>
            </HoverBorderGradient>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
