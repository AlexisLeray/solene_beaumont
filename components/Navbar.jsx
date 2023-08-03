import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import style from "../styles/Nav.module.css"

const MENU_LIST = [
  { text: "Accueil", href: "/" },
  { text: "Domaine d'intervention", href: "/#domaine" },
  { text: "Honoraires", href: "/#honoraire" },
  { text: "Contact", href: "/#contact" },
];


const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const test =  () => {
    setNavActive(!navActive)
  }
  return (
    <header className={style.header}>
      <nav className={style.nav}>
       
        
        <div
          onClick={(test) => setNavActive(!navActive)}
          className={style.nav__menu_bar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        <div className={`${navActive ? `${style.active}` : `${style.nav__menu_list}`}`}>
        <Link href={"/"}>
        
          {/* <div className={style.logo_container}>   */}
            <div className={style.logo_overflow}> 
              <div className={style.logo_content}>
                <h2>SB</h2>
              </div>
            </div>

          {/* </div> */}
          
        </Link>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
              className={style.navItem}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
        
        
      </nav>
      <main>
        
      </main>
    </header> 
  );
};
export default Navbar;