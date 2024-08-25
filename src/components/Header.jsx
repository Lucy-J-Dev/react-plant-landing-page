import { useEffect, useState } from "react";
import { RiCloseLargeLine, RiMenu4Fill } from "react-icons/ri";
import HojaUno from "../assets/img/leaf-1.png";
import HojaDos from "../assets/img/leaf-2.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [modifyHeader, setModifyHeader] = useState(true);

  let showMenuStyle = showMenu ? "left-[0]" : "left-[-100%]";
  let modifyHeaderStyle = modifyHeader ? "border-b border-yellow-500" : "";

  const handleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY >= 50 ? setModifyHeader(true) : setModifyHeader(false);
    };
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header
      id="navbar"
      className={`bg-green-950 fixed w-full top-0 left-0 z-50 ${modifyHeaderStyle}`}
    >
      <nav className="container flex items-center justify-between h-16 sm:h-20">
        <div className="font-Lobster sm:text-2xl">IndorePlants.</div>
        <div
          id="nav-menu"
          className={`absolute top-0 ${showMenuStyle} min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
        >
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            <li>
              <a href="#home" className="nav-link" onClick={handleShowMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={handleShowMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#popular" className="nav-link" onClick={handleShowMenu}>
                Popular
              </a>
            </li>
            <li>
              <a href="#review" className="nav-link" onClick={handleShowMenu}>
                Review
              </a>
            </li>
          </ul>

          <div className="absolute bottom-0 -right-10 opacity-90 lg:hidden">
            <img
              src={HojaUno}
              alt="imagen de una hoja de planta"
              className="w-32"
            />
          </div>
          <div className="absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden">
            <img
              src={HojaDos}
              alt="imagen de una hoja de planta"
              className="w-32"
            />
          </div>
        </div>
        <div className="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden">
          {!showMenu ? (
            <RiMenu4Fill id="hamburger" onClick={handleShowMenu} />
          ) : (
            <RiCloseLargeLine id="close" onClick={handleShowMenu} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
