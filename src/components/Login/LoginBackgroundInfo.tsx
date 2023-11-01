import ProductImage from "../../assets/Images/Delivery bag-01 1.png";
import styles from "./Login.module.css";
import imageIcon from "../../assets/story.svg";
const LoginBackgroundInfo = () => {
  return (
    <div className={styles.LoginBackGroundContainer}>
      <div className={styles.LoginBackGroundImageContainer}>
        <img src={ProductImage} alt="product image" />
        <h3 className={styles.LoginBackGroundHeading}>
          Manage Lorem Ipsum Store
        </h3>
        <p className={styles.LoginBackGroundParagraph}>
          Take control of Lorem Ipsum with this <br />
          all-in-one solution for Ipsum.
        </p>
        <div className="d-flex justify-content-center py-2">
          <img src={imageIcon} alt="multi step" />
        </div>
      </div>
    </div>
  );
};

export default LoginBackgroundInfo;
