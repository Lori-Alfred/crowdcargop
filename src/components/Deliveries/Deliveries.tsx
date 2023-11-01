import styles from "../Deliveries/Deliveries.module.css";
const Deliveries = () => {
  return (
    <div className="d-flex flex-column">
      <div className={`${styles.deliveriesStatContainer}`}>
        <div className={`${styles.deliveriesStatInfo} d-flex flex-column `}>
          <h2>Deliveries</h2>
          <div className="d-flex">
            <p>
              Users <span className="pl-2">&gt;</span>{" "}
            </p>
            <p className="pl-3">
              User Profile <span className="pl"> &gt;</span>
            </p>
            <p className="pl-2">Active Deliveries</p>
          </div>
        </div>
        <div>
          {" "}
          <button className={`${styles.deliveriesButton}`}>
            New deliveries <span>50</span>
          </button>
        </div>
      </div>
      <div className={`${styles.deliveriesSearch} `}>
        <input
          className="form-control"
          type="search"
          name="search"
          id=""
          placeholder="Search for Deliveries..."
        />
      </div>
    </div>
  );
};

export default Deliveries;
