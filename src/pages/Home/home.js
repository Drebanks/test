import classes from "./home.module.css";
// import Radio from "../../assets/images/Radio.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

// import { home } from "../../components/constants/index";

const Home = () => {
  const [disabled, setDisabled] = useState(true);
  const [radio, setRadio] = useState(false);
  const [value, setValue] = useState('');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // }.
  const handleChange = (event) => {
    setDisabled(event.target.value === "");
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div>
          <p className={classes.het}>
            Get your cooperate <br />
            Business account for free
          </p>
          <div>
            <label className={classes.top}>
              <span className={classes.span}></span>
              <div className={classes.part}>
                <p>Business</p>
                <p>
                  You’re a freelance/developer with little to no <br />
                  knowledge about the business.
                </p>
              </div>

              <div className={classes.rott}>
                <input
                  type="radio"
                  name="radio"
                  value="business"
                  onChange={handleChange}

                />
                <span className={classes.checkmark}></span>
                {/* <input type="radio" name="pin" /> */}
                {/* <img src={Radio} alt="" /> */}
              </div>
            </label>
            <label className={classes.top}>
              <span className={classes.span}></span>
              <div className={classes.part}>
                <p>Employee</p>
                <p>
                  You’re a freelance/developer with little to no <br />
                  knowledge about the business.
                </p>
              </div>
              <div className={classes.rott}>
                <input
                  type="radio"
                  name="radio"
                  value="employee"
                  // onChange={(e) =>
                  //   e.target.checked ? setDisabled(true) : setDisabled(false)
                  // }
                />
                <span className={classes.checkmark}></span>
                {/* <img src={Radio} alt="" /> */}
              </div>
            </label>
            <label className={classes.top}>
              <span className={classes.span}></span>
              <div className={classes.part}>
                <p>Developer</p>
                <p>
                  You’re a freelance/developer with little to no <br />
                  knowledge about the business.
                </p>
              </div>
              <div className={classes.rott}>
                <input
                  type="radio"
                  name="radio"
                  value="developer"
                  // onChange={(e) =>
                  //   e.target.checked ? setDisabled(true) : setDisabled(false)
                  // }
                />
                <span className={classes.checkmark}></span>
                {/* <img src={Radio} alt="" /> */}
              </div>
            </label>
          </div>
        </div>
        <button
          type="button"
          className={classes.buts}
          disabled={disabled}
          onClick={() => setDisabled(true)}
        >
          <Link to="./signup" className={classes.btn}>
          Sign Up
          </Link>
        </button>
        <p className={classes.last}>
          By clicking this, you agree to our Data <br />
          privacy terms and conditions
        </p>
      </div>
    </div>
  );
};

export default Home;
