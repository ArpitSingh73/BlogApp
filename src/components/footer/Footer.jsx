import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>learn NEXTjs</div>
      <div className={styles.text}>NEXTjs is the successor of ReactJS.</div>
    </div>
  );
};

export default Footer;
