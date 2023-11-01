import { FormEvent } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/otp");
  };
  return (
    <div className="d-flex justify-content-center">
      <div
        className={`${styles.loginFormContainer} d-flex flex-column align-items-start  `}
      >
        <h1 className="">Login</h1>
        <p>To Login, input the details you signed up with</p>
        <form onSubmit={submitHandler}>
          <div className="row  ">
            <div className="col-9">
              <label htmlFor="emailAddress">Email address</label>
              <input
                className="form-control"
                id="emailAddress"
                type="text"
                name="emailAddress"
                placeholder="Enter your email"
              />
            </div>
            <div className={`${styles.passwordInput} col-9`}>
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="col-9">
              {" "}
              <button className={`${styles.loginButton}  `} type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
