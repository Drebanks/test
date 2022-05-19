import classes from "./sidebar.module.css";
// import Dash from "../../assets/images/Dashboard.svg";

const Sidebar = () => {
    return (  
        <div className={classes.container}>
            <ul className={classes.list}>
                <li>Home</li>
                <li>Transactions</li>
                <li>Accounts</li>
                <li>Transfers</li>
                <li>Invoice</li>
                <li>Issuing</li>
                <li>Settings</li>
                <li>API Docs</li>
            </ul>
            <div className={classes.foot}>
                <p>Megatrust Nigerian</p>
                <p>Foods Limited</p>
            </div>
        </div>
    );
}
 
export default Sidebar;