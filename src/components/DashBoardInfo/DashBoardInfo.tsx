import Card from "../Card/Card";
import Map from "../../assets/Images/Track Live map.png";
import styles from "./DashBoardInfo.module.css";
import Reuseablebuttons from "../Reusablebuttons/Reuseablebuttons";
import DeliveryDetails from "../DeliveryDetailsComponent/DeliveryDetails";
const DashBoardInfo = () => {
  return (
    <div>
      <h5
        style={{
          paddingTop: "1.44rem",
          paddingBottom: "1.88rem",
          fontSize: "1rem",
        }}
      >
        Tuesday 12/9/22
      </h5>

      <div
        className={`d-flex justify-content-between ${styles.dashContainer} `}
        style={{ marginTop: "0.62rem" }}
      >
        <div style={{ width: "100%" }}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles.container2}>
          <img src={Map} alt="Map" />
          <div className={styles.Reusablecontainer2}>
            <div className={styles.Reusablecontainerth}>
              <Reuseablebuttons>Delivery 1</Reuseablebuttons>
            </div>
            <div className={styles.Reusablecontainerd}>
              <Reuseablebuttons>Delivery 2</Reuseablebuttons>
            </div>
            <div className={styles.Reusablecontainerd}>
              <Reuseablebuttons>Delivery 3</Reuseablebuttons>
            </div>

            <div className={styles.Reusablecontainerd}>
              <Reuseablebuttons>Delivery 4</Reuseablebuttons>
            </div>
          </div>
          <DeliveryDetails />
        </div>
      </div>
    </div>
  );
};

export default DashBoardInfo;
