import Menu from "../../assets/menu.svg";
import User from "../../assets/user.svg";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import CrowdCargoLogo from "../../assets/crowdCargo.svg";

const NavBar = () => {
  return (
    <div className={`${styles.NavContainer}`}>
      <nav className={` d-flex justify-content-between`}>
        <div className={styles.NavBarLogo}>
          <Link to="/">
            <img
              className={styles.crowdCargoLogo}
              src={CrowdCargoLogo}
              alt="crowdcargo logo"
            />
          </Link>
        </div>
        <ul className={`${styles.rightMenu}`}>
          <li>
            <img src={Menu} alt="menu icon" />
          </li>
          <li className={styles.cornerText}>My Corner</li>
          <li>
            <img src={User} alt="user icon" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
