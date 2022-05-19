import React from "react";
import classes from "./dashboard.module.css";
import Sidebar from "../../components/Side/sidebar";
import LineChart from "../../components/Chart/chart";
import Transaction from "../../components/Transaction/transaction";
import Arrow from "../../assets/images/dash/down.svg";
import Arrow_up from "../../assets/images/dash/up.svg";
import Three from "../../assets/images/dash/three.svg";
import Dot from "../../assets/images/dash/dot.svg";
import Cir from "../../assets/images/dash/Group.svg";

const Dashboard = () => {
    return (
        <div className={classes.container}>
            <div className={classes.lools}>
                <Sidebar />
                <div className={classes.content}>
                    <div className={classes.board}>
                        <div className={classes.rite}>
                            <p className={classes.per}>Dashboard</p>
                            <div className={classes.chart}>
                                <LineChart />
                            </div>
                            <Transaction />
                        </div>
                        <div className={classes.leftt}>
                            <div className={classes.card}>
                                <p>Total balance</p>
                                <span>NGN 7,000,000.00</span>
                                <br />
                                <br />
                                <br />
                                <span>Available balance: NGN 7,000,000.00</span>
                            </div>
                            <br />
                            <p className={classes.pret}>Account Summary</p>
                            <div className={classes.grey}>
                                <div className={classes.down}>
                                    <img src={Arrow} alt="" />
                                </div>
                                <div>
                                    <p>Total Deposit</p>
                                    <span>NGN 7,000,000.00</span>
                                </div>
                            </div>
                            <div className={classes.grey}>
                                <div className={classes.downs}>
                                    <img src={Arrow_up} alt="" />
                                </div>
                                <div>
                                    <p>Total Transfer</p>
                                    <span>NGN 7,000,000.00</span>
                                </div>
                            </div>
                            <div className={classes.grey}>
                                <div className={classes.down}>
                                    <img src={Three} alt="" />
                                </div>
                                <div>
                                    <p>Accured Interest</p>
                                    <span>NGN 7,000,000.00</span>
                                </div>
                            </div>
                            <div className={classes.pay}>
                                <div className={classes.ins}>
                                    <p>Payout Distribution</p>
                                    <img src={Dot} alt="" />
                                </div>
                                <div className={classes.circle}>
                                    <img src={Cir} alt="" />
                                    <span>60%</span>
                                    <span>40%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
