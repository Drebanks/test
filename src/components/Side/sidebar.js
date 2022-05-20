import { Link } from "react-router-dom";
import classes from "./sidebar.module.css";
import Dash from "../../assets/images/Dashboard.svg";
import Acc from "../../assets/images/dash/Account.svg";

const Sidebar = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        <li>
          <img src={Dash} alt="" />
          <Link to="/">Home</Link>
        </li>
        <li>
          <img src={Dash} alt="" />
          <Link to="/#">Transactions</Link>
          
        </li>
        <li>
          <img src={Acc} alt="" />
          <Link to="/#">Accounts</Link>
        </li>
        <li>
          <img src={Dash} alt="" />
          <Link to="/#">Transfers</Link>
        </li>
        <li>
          <img src={Dash} alt="" />
          <Link to="/#">Invoice</Link>
          
        </li>
        <li>
          <img src={Dash} alt="" />
          <Link to="/#">Issuing</Link>
        </li>
        <li>
          <img src={Dash} alt="" />
          <Link to="/#">Settings</Link>
        </li>
        <li>
          <img src={Dash} alt="" />
          <Link to="/#">API DOCS</Link>
        </li>
      </ul>
      <div className={classes.foot}>
        <p>Megatrust Nigerian</p>
        <p>Foods Limited</p>
      </div>
    </div>
  );
};

export default Sidebar;
