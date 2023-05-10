import React, { useState } from "react";
import "./HamburgerMenu.css";

interface Link {
  title: string;
  href: string;
}

function HamburgerMenu(props: {
  links: Link[];
  currentView: string;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { links } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {links.map((link, index) => {
            return (
              <li
                className={
                  link.title.toLowerCase() === props.currentView.toLowerCase()
                    ? "selected"
                    : ""
                }
                key={index}
              >
                <a
                  onClick={() => {
                    setTimeout(() => props.setCurrentView(link.title), 1);
                    toggleMenu();
                  }}
                  href={`#${link.href}`}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
