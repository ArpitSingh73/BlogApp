import React from "react";
import styles from "./login.module.css";
function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialbutton}>Google</div>
        <div className={styles.socialbutton}>Github</div>
        <div className={styles.socialbutton}>Facebook</div>
      </div>
    </div>
  );
}

export default Login;
