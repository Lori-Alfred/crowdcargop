import { NavLink } from "react-router-dom";
import configurations from "../../assets/configurations.svg";
import deliveries from "../../assets/deliveries.svg";
import home from "../../assets/home.svg";
import insight from "../../assets/insight.svg";
import transactions from "../../assets/transactions.svg";
import usersidebar from "../../assets/usersidebar.svg";
import wallet from "../../assets/wallet.svg";
import team from "../../assets/team.svg";
import logout from "../../assets/logout.svg";
import styles from "./SideBar.module.css";

const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="d-flex justify-content-start row ">
      <div className={`${styles.sideBarMenu} col-2 `}>
        <ul>
          <li>
            <NavLink to="/">
              {" "}
              <img src={home} alt="home icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={insight} alt="insight icon" />
              Insight
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={wallet} alt="wallet icon" />
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              <img src={usersidebar} alt="users icon" />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={deliveries} alt="deliveries icon" />
              Deliveries
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={transactions} alt="transaction icon" />
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={team} alt="team icon" />
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={configurations} alt="config icon" />
              Configuration
            </NavLink>
          </li>
          <li className="pt-5">
            <NavLink to="/">
              <img src={logout} alt="config icon" />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-10 p-5 ">{children}</div>
    </div>
  );
};

export default SideBar;
