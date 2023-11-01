import LoginBackgroundInfo from "../../components/Login/LoginBackgroundInfo";
import LoginForm from "../../components/Login/LoginForm";
import styles from "./LoginPage.module.css";
const LoginPage = () => {
  return (
    <div className={`${styles.loginContainer} container-fluid vh-100 `}>
      <div className="row ">
        <div className="col-md-5  col-12  ">
          <LoginBackgroundInfo />
        </div>
        <div className="col-md-7  col-12">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
