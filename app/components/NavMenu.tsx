import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";

const NavMenu = () => {

  return (
    <nav className="navContainer">
      <div className="logoContainer">
        <Link className="" href="/">
          <Image
            className="logo"
            id="logo"
            src={Logo}
            alt="Ora AI"
            width={300}
          />
        </Link>
      </div>
      <div className="linksContainer">
        <div className="linkContainer">
          <Link className="link" href="/">
            Login
          </Link>
        </div>
        <div className="linkContainer">
          <Link className="link" href="/">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
