import classes from "./nav.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";


const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={classes.right}>
      <Link to="./signin" className={classes.sign}>Sign In</Link>
      </div>
    </nav>
  );
};

export default Nav;
