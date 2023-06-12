import "./HamburgerMenu.css";

interface Link {
  title: string;
  href: string;
}

function HamburgerMenu(props: {
  links: Link[];
}) {
  const { links } = props;
  return (
    <div>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu">
        <ul>
          {links.map((link, index) => {
            return (
              <li id={`${link.title.toLocaleLowerCase()}-selector`} key={index}>
                {link.title}
              </li>
            );
          })}
        </ul>
      </div>
      
    </div>
  );
}

export default HamburgerMenu;
