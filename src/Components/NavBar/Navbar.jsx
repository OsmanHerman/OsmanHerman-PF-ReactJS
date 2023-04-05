import CartWidget from "./CartWidget";
import styles from "./Navbar.module.css";
import NavBarMenu from "./NavbarMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.containerNavbar}>
      <Link style={{
        textDecoration: "none", 
        color: "black",
        fontSize: "0.8em"
        }} to="/"><h1>ProyectoShop</h1></Link>
      <NavBarMenu />
      <CartWidget />
    </div>
  );
};

export default NavBar;