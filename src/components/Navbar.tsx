import SwapThemes from "./SwapThemes";
import HamburgerMenu from "./HamburgerMenu";
import "./Navbar.css";

function Navbar(props: {
  links: { title: string; href: string }[];
  currentView: string;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <nav>
      <div className="container">
        <div className="left-side">
          <SwapThemes />
          <p className="title">
            <a href="/" className="fullNameScript">
              &lt;<span>Shmuel Toporowitch</span>/&gt;
            </a>
          </p>
        </div>

        <HamburgerMenu
          links={props.links}
          currentView={props.currentView}
          setCurrentView={props.setCurrentView}
        />
      </div>
    </nav>
  );
}

export default Navbar;
