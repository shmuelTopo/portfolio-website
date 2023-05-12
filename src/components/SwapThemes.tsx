import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import "./SwapThemes.css";
import { SunIcon, MoonIcon } from "../images/Icons";

export default function SwapThemes() {
  const [theme, setTheme] = useLocalStorage("light");

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <button className="swap-button" onClick={handleClick}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon/>}
      </button>
    </>
  );
}
