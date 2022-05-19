import classes from "./nav.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import Logo1 from "../../assets/images/Mask.svg";
import Logo3 from "../../assets/images/Polygon 2.svg";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={classes.right}>
        <div className={classes.small}>
          <img src={Logo1} alt="Log" />
        </div>
        <div className={classes.small}>
          {/* <img src={Logo1} alt="Log" /> */}
        </div>
        <div className={classes.details}>
          <div className={classes.inner}>
            <p>tommyodus@gmail.com</p>
            <span className={classes.name}>verified</span>
          </div>
          <div className={classes.drop}>
            <img src={Logo3} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
