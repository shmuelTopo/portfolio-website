import SwapThemes from "./SwapThemes";
import HamburgerMenu from "./HamburgerMenu";
import navbarStyles from "./Navbar.module.css";
import { Sacramento, Source_Code_Pro } from "next/font/google";
import utilsStyles from "../app/utils.module.css"

const sacramento = Sacramento({weight: "400", subsets: ["latin"]})
const sourceCodePro = Source_Code_Pro({ weight: "200", subsets: ["latin"] });

function Navbar(props: {
  links: { title: string; href: string }[];
}) {
  return (
    <nav className={navbarStyles.navbar}>
      <div className={`${utilsStyles.container} ${navbarStyles['navbar-container']}`}>
        <div className={navbarStyles['left-side']}>
          <SwapThemes />
          <p className="title">
            <a href="/" className={`${sourceCodePro.className} ${navbarStyles.fullNameScript}`}>
              &lt;<span  className={sacramento.className}>Shmuel Toporowitch</span>/&gt;
            </a>
          </p>
        </div>

        <HamburgerMenu
          links={props.links}
        />
      </div>
    </nav>
  );
}

export default Navbar;
