import React from "react";
import style from "./Reusablebuttons.module.css";
const Reuseablebuttons = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.reusablebuttonsContainer}>
      <button>{children}</button>
    </div>
  );
};

export default Reuseablebuttons;
