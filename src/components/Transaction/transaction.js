import classes from "./transaction.module.css";
import See from "../../assets/images/dash/see.svg";
import { transaction, transactions } from "../../components/constants/index";
import Trans from "../../components/Trans/trans";

const Transaction = () => {
    return (
        <div className={classes.trans}>
            <div className={classes.conten}>
                <p>Transaction</p>
                <div>
                <span>See all</span>
                <img src={See} alt="" />
                </div>
            </div>
            <p className={classes.mach}>March 24, 2021</p>
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
                <br />
                {transaction.map((item, index) => (
                    <tbody>
                        <Trans {...item} />
                    </tbody>

                ))}
            </table>
            <p className={classes.mach}>March 24, 2021</p>
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
                <br />
                {transactions.map((item, index) => (
                    <tbody>
                        <Trans {...item} />
                    </tbody>

                ))}
            </table>
        </div>
    );
}

export default Transaction;