import classes from "./verify.module.css";
import { Link } from "react-router-dom";

const Verify = () => {
    return (
        <div className={classes.container}>
            <div className={classes.cool}>
                <p>Director/Business owner <br/>verifications</p>
                <div classsName={classes.content}>
                    <form className={classes.form}>
                        <label>RC Number</label><br/>
                        <br/>
                        <input type="text" placeholder="Your RC Number"/><br/>
                        <br/>
                        <label>BVN</label><br/>
                        <br/>
                        <input type="text" placeholder="Your BVN"/><br/>
                        <br/>
                        <label>NIN (National Identification Number)</label><br/>
                        <br/>
                        <input type="text" placeholder="Your NIN"/><br/>
                    <div className={classes.buts}>
                        <Link to="/success" className={classes.btn}>Verify business</Link>
                    </div>
                    </form>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur </p> */}
                </div>
            </div>
        </div>
    );
}

export default Verify;