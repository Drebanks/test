import classes from "./sidebar.module.css";

const Sidebar = () => {
    return (  
        <div className={classes.container}>
            <ul className={classes.lists}>
                <li>Home</li>
                <li>Transactions</li>
                <li>Accounts</li>
                <li>Transfers</li>
                <li>Invoice</li>
                <li>Issuing</li>
                <li>Settings</li>
                <li>API Docs</li>
            </ul>
        </div>
    );
}
 
export default Sidebar;