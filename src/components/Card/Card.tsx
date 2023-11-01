import styles from "./Card.module.css";
import arrow from "../../assets/arrow.svg";
import deliveriesIcon from "../../assets/deliveriesicon.svg";
import calendarIcon from "../../assets/calendaricon.svg";
import timeIcon from "../../assets/time.svg";
import expressIcon from "../../assets/express.svg";

const Card = () => {
  return (
    <div className={` ${styles.cardContainer} d-flex flex-column`}>
      <div className={`${styles.packageId} d-flex justify-content-between`}>
        <h4>Package ID: NGR-1108220008</h4>
        <p>Active</p>
      </div>
      <div
        className={`${styles.packageDetails} d-flex justify-content-between`}
      >
        <p>
          <span className="pr-2">
            {" "}
            <img src={deliveriesIcon} alt="icon deliveries" />{" "}
          </span>
          3 deliveries
        </p>
        <p>
          <span className="pr-2">
            {" "}
            <img src={calendarIcon} alt="icon calendar" />{" "}
          </span>
          Thu, jun 16/22
        </p>
        <p>
          <span className="pr-2">
            {" "}
            <img src={timeIcon} alt="icon time" />{" "}
          </span>
          2:00pm
        </p>
        <p style={{ color: "#24AD42" }}>
          <span className="pr-2">
            {" "}
            <img src={expressIcon} alt="icon express" />{" "}
          </span>
          Express delivery
        </p>
      </div>
      <div
        className={`${styles.packageMoreDetails} d-flex justify-content-start`}
      >
        <p style={{ fontSize: "0.59438rem", color: "#100A2C4D" }}>2:00</p>
        <img src={arrow} alt="arrow direction" />
        <div>
          <p style={{ fontSize: "0.59438rem", color: "#100A2C" }}>
            Sharon Str, Ketu.
          </p>
          <p style={{ fontSize: "0.59438rem", color: "#100A2C4D" }}>
            12,Thomas Str, Palmgrove.
          </p>
        </div>
      </div>
      <div
        className={`${styles.packagePricing} d-flex justify-content-between`}
      >
        <p>
          <span style={{ color: "rgba(16, 10, 44, 0.30)" }}>Price </span>
          :N12,000
        </p>
      </div>
    </div>
  );
};

export default Card;
