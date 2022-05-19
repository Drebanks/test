import classes from "./transaction.module.css";
import See from "../../assets/images/dash/see.svg";

const Transaction = () => {
    return ( 
        <div className={classes.trans}>
            <div className={classes.conten}>
                <p>Transaction</p>
                <span>See all<img src={See} alt=""/></span>
            </div>
            <p>March 24, 2021</p>
            <table>
                <thead>
                    <tr>
                        <th>Trans ID</th>
                        <th>Date</th>
                        <th>Narration</th>
                        <th>Tran Ref</th>
                        <th>Type</th>
                        <th>Amount</th>
                    </tr>
                </thead>
            </table>
        </div>
     );
}
 
export default Transaction;