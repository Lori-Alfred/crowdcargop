import styles from "./OtpPage.module.css";
import CrowdCargoLogo from "../../assets/crowdCargo.svg";
import OtpInput from "react-otp-input";
import { useNavigate, Link } from "react-router-dom";

import { useState } from "react";

const OtpPage = () => {
  const [otp, setOtp] = useState<string>("");
  const navigate = useNavigate();

  return (
    <div>
      <Link to="/">
        <img
          className={styles.crowdCargoLogo}
          src={CrowdCargoLogo}
          alt="crowdcargo logo"
        />
      </Link>
      <div
        className={` ${styles.verifyAccount} d-flex flex-column justify-content-center align-items-center `}
      >
        <h2> Verify your account</h2>
        <p className={`${styles.verifyAccountParagraph1}`}>
          Enter the 6 digit OTP code sent to t***n@gmail.com
        </p>
        <div className={`${styles.otpBox}`}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            shouldAutoFocus={true}
            renderInput={(props) => <input {...props} />}
            renderSeparator={<span style={{ width: "1.25rem" }}></span>}
            inputStyle={{
              border: "1px solid #E3E3E3",
              borderRadius: "15px",

              width: "5.64rem",
              height: "5.64rem",
              fontSize: "1rem",
              color: "#000",
              fontWeight: "400",
              caretColor: "#100A2C",
            }}
          />
        </div>
        <div className={`${styles.verifybutton}  `}>
          <button className="" onClick={() => navigate("/dashboard")}>
            Verify
          </button>
        </div>

        <p className={`${styles.verifyAccountParagraph1}`}>
          Didn’t get the code?
        </p>
        <div className={`${styles.resendbutton}  `}>
          <button>Resend in 00:59</button>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
