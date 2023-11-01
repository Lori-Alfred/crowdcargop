import IconComponent from "../../assets/process.svg";
import style from "./DeliveryDetails.module.css";
const DeliveryDetails = () => {
  return (
    <div>
      <div className={style.navmenu}>
        <ul>
          <li style={{ borderBottom: "3px solid #100a2c" }}>
            Delivery Details
          </li>
          <li>Runner Information</li>
          <li>Customer Information</li>
          <li>More</li>
        </ul>
      </div>
      <div className="d-flex justify-content-start">
        <h5 className="text-bold">CrowdCargo</h5>
        <small>View Image</small>
      </div>
      <div></div>
      {/* package details */}
      <div className={style.packageDetails}>
        <div className={style.packageDetailsmini}>
          <p style={{ color: "rgba(16, 10, 44, 0.3)", fontSize: "0.875rem" }}>
            Package Id
          </p>
          <p
            style={{
              color: "#100A2C",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            NGR-1108220008
          </p>
        </div>
        <div className={style.packageDetailsmini}>
          <p style={{ color: "rgba(16, 10, 44, 0.3)", fontSize: "0.875rem" }}>
            Recepient Name
          </p>
          <p
            style={{
              color: "#100A2C",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            Akinola Akinpelu
          </p>
        </div>
        <div className={style.packageDetailsmini}>
          <p style={{ color: "rgba(16, 10, 44, 0.3)", fontSize: "0.875rem" }}>
            Recipient Phone
          </p>
          <p
            style={{
              color: "#100A2C",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            +2347099999999
          </p>
        </div>
      </div>{" "}
      {/* package details 2 */}
      <div className={style.packageDetails}>
        <div className={style.packageDetailsmini}>
          <p style={{ color: "rgba(16, 10, 44, 0.3)", fontSize: "0.875rem" }}>
            Confirmation Pin
          </p>
          <p
            style={{
              color: "#100A2C",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            2311
          </p>
        </div>
        <div className={style.packageDetailsmini}>
          <p style={{ color: "rgba(16, 10, 44, 0.3)", fontSize: "0.875rem" }}>
            Fragile Package
          </p>
          <p
            style={{
              color: "#100A2C",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            Akinola Akinpelu
          </p>
        </div>
        <div className={style.packageDetailsmini}>
          <p style={{ color: "rgba(16, 10, 44, 0.3)", fontSize: "0.875rem" }}>
            Package Weight
          </p>
          <p
            style={{
              color: "#100A2C",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            25kg
          </p>
        </div>
      </div>{" "}
      <div>
        <img src={IconComponent} alt="#" />
      </div>
    </div>
  );
};

export default DeliveryDetails;
