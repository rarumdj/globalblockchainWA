import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/gb_logo.png";
import MenuItems from "./MenuItems";
import "./NavBar.css";

function NavBar() {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    if (
      (pathname.includes("project") && pathname.length > 8) ||
      (pathname.includes("partnership") && pathname.length > 12) ||
      pathname.includes("readmore")
    ) {
      setStickyClass("bg-[#040c18]");
      return () => setStickyClass("");
    } else {
      window.addEventListener("scroll", stickNavbar);
      return () => window.removeEventListener("scroll", stickNavbar);
    }
  }, [pathname]);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 80 ? setStickyClass("bg-[#040c18]") : setStickyClass("");
    }
  };

  return (
    <nav
      className={`z-[9999] fixed top-0 left-0 right-0 bg-opacity-40 backdrop-blur-md ${stickyClass}`}>
      <div className="container mx-auto NavbarItems">
        <div className="Navbar-logo z-[9999]">
          <NavLink to={"/"}>
            <img className="w-10" src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="Menu-icon z-[9999]" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "Nav-menu active" : "Nav-menu"}>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? items.cNameActive : items.cName
                  }
                  to={items.url}
                  onClick={() => setClick(false)}>
                  {items.title}
                </NavLink>
              </li>
            );
          })}
          <li>
            <a href={`${pathname}#contact`} className="nav-link-mobile">
              Contact
            </a>
          </li>
        </ul>
        <a
          href={`${pathname}#contact`}
          className="hidden lg:block py-2 px-4 rounded-md bg-red-600 text-white hover:bg-red-500 hover:transition-all duration-200 ease-in-out">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
