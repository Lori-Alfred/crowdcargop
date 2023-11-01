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
            <img src={home} alt="home icon" />
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <img src={insight} alt="insight icon" />

            <NavLink to="/">Insight</NavLink>
          </li>
          <li>
            <img src={wallet} alt="wallet icon" />

            <NavLink to="/">Wallet</NavLink>
          </li>
          <li>
            <img src={usersidebar} alt="users icon" />

            <NavLink to="/">Users</NavLink>
          </li>
          <li>
            <img src={deliveries} alt="deliveries icon" />

            <NavLink to="/">Deliveries</NavLink>
          </li>
          <li>
            <img src={transactions} alt="transaction icon" />

            <NavLink to="/">Transactions</NavLink>
          </li>
          <li>
            <img src={team} alt="team icon" />

            <NavLink to="/">Team</NavLink>
          </li>
          <li>
            <img src={configurations} alt="config icon" />
            <NavLink to="/">Configuration</NavLink>
          </li>
          <li className="pt-5">
            <img src={logout} alt="config icon" />

            <NavLink to="/">Logout</NavLink>
          </li>
        </ul>
      </div>
      <div className="col-10 p-5 ">{children}</div>
    </div>
  );
};

export default SideBar;
