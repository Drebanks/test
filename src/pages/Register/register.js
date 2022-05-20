import classes from "./register.module.css";
import { useState } from "react";
import { Eye, EyeCancel } from "../../components/signup/signup";
import { Link } from "react-router-dom";
const Register = () => {
    const [password, showPassword] = useState(true);

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <p className={classes.het}>
                    Get your cooperate <br />
                    Business account for free
                </p>
                <form className={classes.form}>
                    <label>Email</label>
                    <br />
                    <br />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className={classes.email}
                    />
                    <br />
                    <br />
                    <label>Password (6 Characters or more)</label>
                    <br />
                    <br />
                    <div className={classes.eyes}>
                        <div onClick={() => showPassword(!password)}>
                            {password ? <Eye /> : <EyeCancel />}
                        </div>
                        <input
                            type={password ? "password" : "text"}
                            placeholder="Password"
                            className={classes.password}
                        />
                    </div>
                </form>
                <div className={classes.buts}>
                    <Link to="/verify" className={classes.btn}>
                        Sign Up
                    </Link>
                </div>
                <p className={classes.last}>
                    By clicking this, you agree to our Data <br />
                    privacy terms and conditions
                </p>
            </div>
        </div>
    );
};

export default Register;
