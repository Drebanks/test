import classes from "./success.module.css";
import { Link } from "react-router-dom";
import Mark from "../../assets/images/image.svg";

const Success = () => {
    return (
        <div className={classes.container}>
            <div className={classes.net}>
                <div className={classes.nothing}>
                <div classsName={classes.contents}>
                    <div className={classes.image}>
                        <div className={classes.imag}>
                            <div className={classes.inne}></div>
                            <img src={Mark} alt="" />
                        </div>
                    </div>
                    <p className={classes.look}>
                        Great Job! set up your
                        <br /> business
                    </p>
                    <p className={classes.looks}>
                        Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit, sed Lorem ipsum dolor sit
                        <br /> amet, consectetur
                    </p>
                    <div className={classes.buts}>
                        <Link to="/signup" className={classes.btn}>
                            Activate your business
                        </Link>
                    </div>
                </div>
                </div>
                <Link to="/dashboard" className={classes.btns}>
                    
                    Skip to Dashboard
                </Link>
            </div>
        </div>
    );
};

export default Success;
