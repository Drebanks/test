import classes from "./home.module.css";
import Radio from "../../assets/images/Radio.svg";
import {Link} from "react-router-dom";

// import { home } from "../../components/constants/index";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div>
          <p className={classes.het}>
            Get your cooperate <br />
            Business account for free
          </p>
          <div>
            <div className={classes.top}>
              <span></span>
              <div className={classes.part}>
                <p>Business</p>
                <p>
                  You’re a freelance/developer with little to no <br/> knowledge about
                  the business.
                </p>
              </div>
              <div>
                <img src={Radio} alt="" />
              </div>
            </div>
            <div className={classes.top}>
              <span></span>
              <div className={classes.part}>
                <p>Employee</p>
                <p>
                  You’re a freelance/developer with little to no <br/> knowledge about
                  the business.
                </p>
              </div>
              <div className={classes.really}> 
                <img src={Radio} alt="" />
              </div>
            </div>
            <div className={classes.top}>
              <span></span>
              <div className={classes.part}>
                <p >Developer</p>
                <p>
                  You’re a freelance/developer with little to no <br/>knowledge about
                  the business.
                </p>
              </div>
              <div>
                <img src={Radio} alt="" />
              </div>
            </div>
            {/*                         
                        {home.map((item, index) => (
                            <div>
                            <p>{item.title}</p>
                            <p>{item.content}</p>
                        </div>
                        ))}
                        <div>
                            <span>{item.app}</span>
                        </div> */}
          </div>
        </div>
        <div className={classes.buts}>
          <Link to="./signup" className={classes.btn}>Sign Up</Link>
        </div>
        <p className={classes.last}>
          By clicking this, you agree to our Data <br />
          privacy terms and conditions
        </p>
      </div>
    </div>
  );
};

export default Home;
